#!/usr/bin/env node
/**
 * 레퍼런스 페이지가 공개 스펙과 같은 계약을 말하는지 대조한다.
 *
 * 왜 필요한가: 스펙은 서비스 코드에서 그대로 뽑지만, 페이지는 생성기가 한 번 옮겨
 * 적은 결과다. 옮기는 과정에서 파라미터가 빠지거나 필수 여부가 뒤집히면 고객이
 * 그대로 잘못 호출한다. ETRI 처럼 파라미터 정확도를 명시적으로 요구한 고객이 있어,
 * 눈으로 보지 않고 기계가 매번 확인한다.
 *
 * 검사하는 것:
 *  1. 스펙 오퍼레이션과 페이지가 1:1 인가
 *  2. 경로·쿼리 파라미터의 이름과 필수 여부가 같은가
 *  3. 요청 본문 최상위 필드의 이름과 필수 여부가 같은가
 *  4. 응답 상태 코드가 같은가
 *  5. 형식 칸이 빈 채로 나가지 않는가
 *
 *   node scripts/verify-reference.mjs
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SPEC_DIR = join(ROOT, 'spec/public')
const DOC_DIR = join(ROOT, 'docs/api')
const METHODS = ['get', 'post', 'put', 'delete', 'patch', 'head', 'options']

/** 서비스 루트(GET /)는 생성기가 페이지를 만들지 않는다. 필터도 같은 기준으로 뺀다. */
const NO_PAGE = /\/api\/v1\/[a-z/-]+\/$/

// ── 스펙 쪽 ──────────────────────────────────────────────────────────
const specs = []
for (const f of readdirSync(SPEC_DIR).filter((n) => n.endsWith('.openapi.json'))) {
  specs.push({ id: f.replace('.openapi.json', ''), doc: JSON.parse(readFileSync(join(SPEC_DIR, f), 'utf8')) })
}

/** $ref 를 따라가 실제 스키마를 얻는다. 순환 참조에 대비해 횟수를 제한한다. */
const deref = (spec, node) => {
  let cur = node
  for (let i = 0; i < 20 && cur && cur.$ref; i++) {
    const name = decodeURIComponent(cur.$ref.split('/').pop())
    cur = spec.components?.schemas?.[name]
  }
  return cur ?? {}
}

const specOps = new Map()
for (const { doc } of specs) {
  for (const [path, item] of Object.entries(doc.paths ?? {})) {
    for (const [method, op] of Object.entries(item)) {
      if (!METHODS.includes(method)) continue
      if (NO_PAGE.test(path)) continue
      specOps.set(`${method.toUpperCase()} ${path}`, { op, spec: doc })
    }
  }
}

// ── 문서 쪽 ──────────────────────────────────────────────────────────
const pages = new Map()
const badPages = []
for (const svc of readdirSync(DOC_DIR, { withFileTypes: true })) {
  if (!svc.isDirectory()) continue
  const dir = join(DOC_DIR, svc.name)
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.md') || f === 'index.md') continue
    const file = `docs/api/${svc.name}/${f}`
    const text = readFileSync(join(dir, f), 'utf8')
    const m = text.match(/```http\n([A-Z]+) https:\/\/<your-console-host>(\S+)\n/)
    if (!m) {
      badPages.push(`${file}: HTTP 요청 블록을 읽을 수 없습니다`)
      continue
    }
    pages.set(`${m[1]} ${m[2]}`, { file, text })
  }
}

/**
 * '## 제목' 아래 첫 표를 행 배열로 읽는다.
 * 인증되지 않은 IAM API 는 문서 경로에 /public 이 끼므로 매칭 때 되돌린다.
 */
const readTable = (text, heading) => {
  const re = new RegExp(`\\n#{2,3} ${heading}[^\\n]*\\n([\\s\\S]*?)(?=\\n#{2,3} |$)`)
  const m = text.match(re)
  if (!m) return null
  const rows = new Map()
  for (const line of m[1].split('\n')) {
    if (!line.startsWith('| ')) continue
    const cells = line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim())
    if (cells.length < 3 || cells[0] === '이름' || /^-+$/.test(cells[0])) continue
    rows.set(cells[0], cells)
  }
  // 파라미터가 없는 섹션은 '없습니다.' 한 줄만 적힌다. 표가 없는 것과 같게 다룬다.
  return rows.size > 0 ? rows : null
}

const problems = []
const add = (file, msg) => problems.push(`${file}: ${msg}`)

const matched = new Map()
const pageOnly = []
for (const key of pages.keys()) {
  if (specOps.has(key)) {
    matched.set(key, key)
    continue
  }
  const alt = key.replace('/public/', '/')
  if (specOps.has(alt)) matched.set(key, alt)
  else pageOnly.push(key)
}
const covered = new Set(matched.values())
const specOnly = [...specOps.keys()].filter((k) => !covered.has(k))

for (const [pageKey, specKey] of matched) {
  const { file, text } = pages.get(pageKey)
  const { op, spec } = specOps.get(specKey)

  // 1. 경로·쿼리 파라미터
  const params = op.parameters ?? []
  for (const [loc, heading, reqIdx] of [
    ['path', 'URI 매개변수', 2],
    ['query', '쿼리 매개변수', 1],
  ]) {
    const want = new Map(params.filter((p) => p.in === loc).map((p) => [p.name, Boolean(p.required)]))
    const got = readTable(text, heading)
    if (want.size === 0) {
      if (got) add(file, `${heading} 표가 있으나 스펙에는 ${loc} 파라미터가 없습니다`)
      continue
    }
    if (!got) {
      add(file, `${heading} ${want.size}개가 문서에 없습니다: ${[...want.keys()].join(', ')}`)
      continue
    }
    for (const name of want.keys()) if (!got.has(name)) add(file, `${heading} 누락: ${name}`)
    for (const name of got.keys()) if (!want.has(name)) add(file, `${heading} 잉여: ${name}`)
    for (const [name, required] of want) {
      const row = got.get(name)
      if (!row) continue
      const docRequired = row[reqIdx] === '필수'
      if (docRequired !== required) {
        add(file, `${heading} ${name}: 필수 여부 불일치 (문서 ${row[reqIdx]} / 스펙 ${required ? '필수' : '선택'})`)
      }
    }
  }

  // 2. 요청 본문 최상위 필드
  const schemaRef = op.requestBody?.content?.['application/json']?.schema
  if (schemaRef) {
    const schema = deref(spec, schemaRef)
    const props = schema.properties ?? {}
    const required = new Set(schema.required ?? [])
    const names = Object.keys(props)
    if (names.length > 0) {
      const got = readTable(text, '요청 본문')
      if (!got) {
        add(file, `요청 본문 ${names.length}개 필드가 문서에 없습니다`)
      } else {
        // 중첩 필드는 'a.b' 로 펼쳐 적으므로 최상위만 본다.
        const top = new Set([...got.keys()].filter((n) => !n.includes('.') && !n.includes('[]')))
        for (const n of names) {
          if (!top.has(n)) {
            add(file, `요청 본문 누락: ${n}`)
            continue
          }
          const docRequired = got.get(n)[1] === '필수'
          if (docRequired !== required.has(n)) {
            add(file, `요청 본문 ${n}: 필수 여부 불일치 (문서 ${got.get(n)[1]} / 스펙 ${required.has(n) ? '필수' : '선택'})`)
          }
        }
      }
    }
  }

  // 3. 응답 상태 코드
  const codes = new Set(Object.keys(op.responses ?? {}).filter((c) => /^\d{3}$/.test(c)))
  const respBlock = text.match(/\n## 응답\n([\s\S]*?)(?=\n#{2,3} |$)/)
  const docCodes = new Set([...(respBlock?.[1] ?? '').matchAll(/^\| (\d{3}) /gm)].map((m) => m[1]))
  for (const c of codes) if (!docCodes.has(c)) add(file, `응답 코드 누락: ${c}`)
  for (const c of docCodes) if (!codes.has(c)) add(file, `응답 코드 잉여: ${c}`)

  // 4. 형식 칸 공백 — 값을 어떻게 만들어 보낼지 알 수 없게 된다.
  for (const [heading, typeIdx] of [
    ['URI 매개변수', 3],
    ['쿼리 매개변수', 2],
    ['요청 본문', 2],
  ]) {
    const got = readTable(text, heading)
    if (!got) continue
    for (const [name, row] of got) {
      if ((row[typeIdx] ?? '') === '') add(file, `${heading} ${name}: 형식 칸이 비었습니다`)
    }
  }
}

// ── 결과 ────────────────────────────────────────────────────────────
console.log(`스펙 오퍼레이션 ${specOps.size} / 레퍼런스 페이지 ${pages.size} / 매칭 ${matched.size}`)

let failed = false
for (const m of badPages) {
  console.error(`FAIL ${m}`)
  failed = true
}
for (const k of pageOnly) {
  console.error(`FAIL 스펙에 없는 페이지: ${k}`)
  failed = true
}
for (const k of specOnly) {
  console.error(`FAIL 페이지가 없는 오퍼레이션: ${k}`)
  failed = true
}
if (problems.length > 0) {
  for (const p of problems.slice(0, 40)) console.error(`FAIL ${p}`)
  if (problems.length > 40) console.error(`  … 외 ${problems.length - 40}건`)
  failed = true
}

if (failed) {
  console.error('GATE FAIL')
  process.exit(1)
}
console.log('GATE OK')

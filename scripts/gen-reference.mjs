#!/usr/bin/env node
/**
 * 필터를 거친 OpenAPI 스펙 → MSDN 형식 레퍼런스 페이지를 생성한다.
 *
 * 왜 생성하나: 오퍼레이션이 701개다. 손으로 쓰면 파라미터가 구현과 어긋나고,
 * 뷰어에 스펙을 통째로 물리면 읽는 형식을 우리가 정할 수 없다. 스펙을 읽어
 * 정해진 절 구조로 찍어내면 둘 다 해결된다.
 *
 * 페이지 구조(Microsoft Learn REST 레퍼런스와 같은 순서):
 *   HTTP 요청 → URI 매개변수 → 쿼리 매개변수 → 요청 헤더 → 요청 본문 → 응답
 *
 * 표 안에서는 코드 배지를 쓰지 않는다. 필드 이름은 일반 텍스트다.
 *
 *   node scripts/gen-reference.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SPEC_DIR = join(ROOT, 'docs/public')
const OUT_DIR = join(ROOT, 'docs/api')

/**
 * 문서에 노출하는 서비스 단위.
 *
 * IAM 은 인증(authn)·인가(authz) 두 서비스로 구현돼 있지만 읽는 쪽에는 하나의 IAM 이다.
 * 스펙은 둘이되 페이지는 한 묶음으로 낸다.
 */
const SERVICES = [
  {
    id: 'iam',
    title: 'IAM',
    specs: [
      { id: 'iam-authn', prefix: '/api/v1/iam/authn', mark: 'authn' },
      { id: 'iam-authz', prefix: '/api/v1/iam/authz', mark: 'authz' },
    ],
  },
  { id: 'compute', title: '컴퓨트', specs: [{ id: 'compute', prefix: '/api/v1/compute' }] },
  { id: 'network', title: '네트워크', specs: [{ id: 'network', prefix: '/api/v1/network' }] },
  { id: 'container', title: '컨테이너', specs: [{ id: 'container', prefix: '/api/v1/container' }] },
]

const METHODS = ['get', 'post', 'put', 'patch', 'delete']

/** 중첩 객체를 몇 단계까지 펼칠지. 더 깊이 들어가면 표가 읽히지 않는다. */
const MAX_DEPTH = 4

const STATUS_TEXT = {
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  204: 'No Content',
  207: 'Multi-Status',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
  413: 'Payload Too Large',
  422: 'Unprocessable Entity',
  429: 'Too Many Requests',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
}

// ── 표 셀 정리 ────────────────────────────────────────────────────────────
// 파이프는 표를 깨고, 줄바꿈은 행을 끊는다. 백틱은 표 안에서 쓰지 않기로 했다.
const cell = (v) =>
  String(v ?? '')
    .replace(/\|/g, '\\|')
    .replace(/`/g, '')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\r?\n+/g, ' ')
    .trim()

/**
 * 설명문을 문서에 실을 수 있는 형태로 다듬는다.
 *
 * 설명은 서비스 코드의 docstring 에서 온다. 그대로 실으면 두 가지가 샌다.
 *  - `<cronjob-name>` 같은 꺾쇠가 HTML 태그로 파싱돼 빌드가 깨진다.
 *  - Args:/Returns:/Raises: 블록은 함수 인자 설명이라 API 독자와 무관하다.
 */
const prose = (text) => {
  if (!text) return ''
  const lines = String(text).split(/\r?\n/)
  const cut = lines.findIndex((l) =>
    /^\s*(Args|Arguments|Returns|Raises|Yields|Note|Notes|Example|Examples|Attributes)\s*:\s*$/.test(l),
  )
  const kept = cut === -1 ? lines : lines.slice(0, cut)
  return kept
    .join('\n')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

// ── 스키마 해석 ───────────────────────────────────────────────────────────

function makeResolver(spec) {
  const schemas = spec.components?.schemas ?? {}
  return function deref(node, seen = new Set()) {
    if (!node || typeof node !== 'object') return node
    if (typeof node.$ref === 'string') {
      const m = /^#\/components\/schemas\/(.+)$/.exec(node.$ref)
      if (!m) return node
      const name = decodeURIComponent(m[1])
      if (seen.has(name)) return { type: 'object', 'x-cycle': name }
      const next = new Set(seen)
      next.add(name)
      return deref(schemas[name] ?? {}, next)
    }
    // allOf 는 병합해서 하나로 본다.
    // 주의: FastAPI 는 enum 필드를 { allOf: [$ref], description } 형태로 낸다.
    // 객체로만 병합하면 enum·type 이 사라져 형식 칸이 빈다.
    if (Array.isArray(node.allOf)) {
      const merged = { type: 'object', properties: {}, required: [] }
      let scalar = null
      for (const part of node.allOf) {
        const r = deref(part, seen)
        if (r.properties || r.required) {
          Object.assign(merged.properties, r.properties ?? {})
          merged.required.push(...(r.required ?? []))
        } else if (r.enum || (r.type && r.type !== 'object')) {
          scalar = { ...r, ...(scalar ?? {}) }
        }
        if (r.description && !merged.description) merged.description = r.description
      }
      // 바깥 노드의 description 이 그 필드의 설명이다.
      const description = node.description ?? merged.description
      if (!Object.keys(merged.properties).length && scalar) {
        return { ...scalar, description: description ?? scalar.description }
      }
      return { ...merged, description }
    }
    return node
  }
}

/** anyOf/oneOf 에서 null 을 걷어내고 대표 스키마를 고른다. nullable 여부도 함께 준다. */
function pickVariant(node, deref) {
  const variants = node.anyOf ?? node.oneOf
  if (!Array.isArray(variants)) return { schema: node, nullable: false }
  const resolved = variants.map((v) => deref(v))
  const nonNull = resolved.filter((v) => v?.type !== 'null')
  return { schema: nonNull[0] ?? node, nullable: resolved.length !== nonNull.length }
}

function typeName(schema, deref) {
  if (!schema) return ''
  // { $ref, description } 처럼 참조 옆에 설명이 붙은 형태가 흔하다.
  // 역참조를 먼저 하지 않으면 type 이 없어 형식 칸이 빈다.
  const { schema: s, nullable } = pickVariant(deref(schema), deref)
  let t = s.type
  if (Array.isArray(t)) t = t.filter((x) => x !== 'null')[0]
  if (s.enum) t = t ?? 'string'
  if (t === 'array') {
    const item = deref(s.items ?? {})
    return `array (${typeName(item, deref) || 'object'})`
  }
  if (s.format === 'date-time') return 'string (date-time)'
  if (!t && s.properties) t = 'object'
  return nullable && t ? `${t} 또는 null` : (t ?? '')
}

function describe(schema, deref) {
  if (!schema) return ''
  const { schema: s } = pickVariant(deref(schema), deref)
  const parts = []
  // 필드에 붙은 설명이 참조 대상의 일반 설명보다 구체적이다. 그쪽을 먼저 쓴다.
  const desc = schema.description ?? s.description
  if (desc) parts.push(desc)
  if (s.enum) parts.push(`값: ${s.enum.filter((v) => v !== null).join(', ')}`)
  if (s.default !== undefined) parts.push(`기본값 ${JSON.stringify(s.default)}`)
  if (s.minimum !== undefined || s.maximum !== undefined) {
    parts.push(`범위 ${s.minimum ?? ''}~${s.maximum ?? ''}`)
  }
  if (s.minLength !== undefined || s.maxLength !== undefined) {
    parts.push(`길이 ${s.minLength ?? 0}~${s.maxLength ?? ''}`)
  }
  if (s['x-cycle']) parts.push(`${s['x-cycle']} 구조가 반복됩니다`)
  return parts.join('. ')
}

/** 객체 스키마를 점 표기(result.foo.bar) 행 목록으로 펼친다. */
function flatten(schema, deref, prefix = '', depth = 0, out = []) {
  if (!schema || depth > MAX_DEPTH) return out
  const { schema: s } = pickVariant(schema, deref)
  const resolved = deref(s)

  if (resolved.type === 'array' || resolved.items) {
    const item = deref(resolved.items ?? {})
    if (item.properties) return flatten(item, deref, `${prefix}[]`, depth, out)
    return out
  }

  const props = resolved.properties
  if (!props) return out
  const required = new Set(resolved.required ?? [])

  for (const [name, raw] of Object.entries(props)) {
    const path = prefix ? `${prefix}.${name}` : name
    const child = deref(raw)
    const { schema: cs } = pickVariant(child, deref)
    out.push({
      name: path,
      type: typeName(raw, deref),
      required: required.has(name),
      description: describe(raw, deref),
    })
    const nested = cs.type === 'array' || cs.items ? deref(cs.items ?? {}) : cs
    if (nested?.properties && depth < MAX_DEPTH) {
      const nextPrefix = cs.type === 'array' || cs.items ? `${path}[]` : path
      flatten(nested, deref, nextPrefix, depth + 1, out)
    }
  }
  return out
}

// ── 페이지 생성 ───────────────────────────────────────────────────────────

function paramTable(params, deref, withIn) {
  const head = withIn
    ? '| 이름 | 위치 | 필수 | 형식 | 설명 |\n|---|---|---|---|---|'
    : '| 이름 | 필수 | 형식 | 설명 |\n|---|---|---|---|'
  const rows = params.map((p) => {
    const t = typeName(p.schema, deref)
    const d = [p.description, describe(p.schema, deref)].filter(Boolean).join('. ')
    const req = p.required ? '필수' : '선택'
    return withIn
      ? `| ${cell(p.name)} | ${cell(p.in)} | ${req} | ${cell(t)} | ${cell(d)} |`
      : `| ${cell(p.name)} | ${req} | ${cell(t)} | ${cell(d)} |`
  })
  return [head, ...rows].join('\n')
}

function fieldTable(rows) {
  const head = '| 이름 | 필수 | 형식 | 설명 |\n|---|---|---|---|'
  const body = rows.map(
    (r) => `| ${cell(r.name)} | ${r.required ? '필수' : '선택'} | ${cell(r.type)} | ${cell(r.description)} |`,
  )
  return [head, ...body].join('\n')
}

function operationTitle(op, path, method) {
  if (op.summary) return op.summary.trim()
  const tail = path.split('/').filter((s) => s && !s.startsWith('{')).pop() ?? path
  return `${method.toUpperCase()} ${tail}`
}

function buildPage({ svc, path, method, op, deref, serverUrl }) {
  const lines = []
  const title = operationTitle(op, path, method)

  lines.push(`# ${title}`)
  lines.push('')
  const intro = prose(op.description)
  if (intro && intro !== op.summary) {
    lines.push(intro)
    lines.push('')
  }

  lines.push('## HTTP 요청')
  lines.push('')
  lines.push('```http')
  lines.push(`${method.toUpperCase()} ${serverUrl}${path}`)
  lines.push('```')
  lines.push('')

  const params = (op.parameters ?? []).map((p) => deref(p))
  const pathParams = params.filter((p) => p.in === 'path')
  const queryParams = params.filter((p) => p.in === 'query')
  const headerParams = params.filter((p) => p.in === 'header')

  lines.push('## URI 매개변수')
  lines.push('')
  lines.push(pathParams.length ? paramTable(pathParams, deref, true) : '없습니다.')
  lines.push('')

  if (queryParams.length) {
    lines.push('## 쿼리 매개변수')
    lines.push('')
    lines.push(paramTable(queryParams, deref, false))
    lines.push('')
  }

  lines.push('## 요청 헤더')
  lines.push('')
  lines.push('인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.')
  if (headerParams.length) {
    lines.push('')
    lines.push('이 API 는 다음 헤더를 추가로 받습니다.')
    lines.push('')
    lines.push(paramTable(headerParams, deref, false))
  }
  lines.push('')

  const reqSchema = op.requestBody?.content?.['application/json']?.schema
  if (reqSchema) {
    lines.push('## 요청 본문')
    lines.push('')
    const rows = flatten(reqSchema, deref)
    lines.push(rows.length ? fieldTable(rows) : '본문 스키마가 정의되어 있지 않습니다.')
    lines.push('')
  }

  lines.push('## 응답')
  lines.push('')
  const responses = op.responses ?? {}
  const codes = Object.keys(responses).sort()
  const statusRows = ['| 상태 코드 | 설명 |', '|---|---|']
  for (const code of codes) {
    const r = deref(responses[code])
    const label = STATUS_TEXT[code] ? `${code} ${STATUS_TEXT[code]}` : code
    statusRows.push(`| ${cell(label)} | ${cell(r.description ?? '')} |`)
  }
  lines.push(statusRows.join('\n'))
  lines.push('')
  lines.push('그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.')
  lines.push('')

  const okCode = codes.find((c) => c.startsWith('2') && c !== '204')
  const okSchema = okCode
    ? deref(responses[okCode])?.content?.['application/json']?.schema
    : null
  if (okSchema) {
    const rows = flatten(okSchema, deref)
    if (rows.length) {
      lines.push(`### 응답 본문 — ${okCode}`)
      lines.push('')
      lines.push(fieldTable(rows))
      lines.push('')
    }
  }

  return lines.join('\n')
}

// ── 실행 ─────────────────────────────────────────────────────────────────

const sidebar = {}
const serviceCounts = []
let totalPages = 0

// 서비스 구성이 바뀌면(예: authn·authz 를 iam 으로 합침) 예전 디렉토리가 남아
// 사이드바에 없는 유령 페이지가 배포된다. 아는 서비스가 아닌 디렉토리는 지운다.
const known = new Set(SERVICES.map((s) => s.id))
for (const entry of readdirSync(OUT_DIR, { withFileTypes: true })) {
  if (entry.isDirectory() && !known.has(entry.name)) {
    rmSync(join(OUT_DIR, entry.name), { recursive: true })
    console.log(`제거: docs/api/${entry.name} (더 이상 쓰지 않는 서비스 디렉토리)`)
  }
}

for (const svc of SERVICES) {
  const dir = join(OUT_DIR, svc.id)
  if (existsSync(dir)) rmSync(dir, { recursive: true })
  mkdirSync(dir, { recursive: true })

  /** 태그 → 오퍼레이션. 사이드바 묶음이 된다. */
  const byTag = new Map()
  const usedSlugs = new Set()
  let opCount = 0

  for (const specRef of svc.specs) {
    const spec = JSON.parse(readFileSync(join(SPEC_DIR, `${specRef.id}.openapi.json`), 'utf8'))
    const deref = makeResolver(spec)
    const serverUrl = spec.servers?.[0]?.url ?? ''

    for (const [path, item] of Object.entries(spec.paths ?? {})) {
      for (const [method, op] of Object.entries(item)) {
        if (!METHODS.includes(method)) continue

        const tag = (op.tags ?? ['기타'])[0]
        // 서비스 접두를 정확히 걷어낸다. 정규식으로 뭉뚱그리면 경로 중간까지 잘려
        // delete-certificateid 같은 구분 안 되는 이름이 나온다.
        const bare = path.startsWith(specRef.prefix) ? path.slice(specRef.prefix.length) : path
        // 여러 스펙을 한 묶음으로 낼 때는 어느 쪽에서 왔는지 슬러그에 남긴다.
        const base = slug([method, specRef.mark, bare].filter(Boolean).join('-')) || slug(method)
        let name = base
        let n = 2
        while (usedSlugs.has(name)) name = `${base}-${n++}`
        usedSlugs.add(name)

        const md = buildPage({ svc, path, method, op, deref, serverUrl })
        writeFileSync(join(dir, `${name}.md`), md + '\n')
        totalPages++
        opCount++

        if (!byTag.has(tag)) byTag.set(tag, [])
        byTag.get(tag).push({
          text: operationTitle(op, path, method),
          link: `/api/${svc.id}/${name}`,
          method: method.toUpperCase(),
          path,
        })
      }
    }
  }

  // 서비스 개요 페이지 — 태그별 오퍼레이션 목록
  const overview = [`# ${svc.title}`, '']
  const downloads = svc.specs
    .map((sp) => `[${sp.id}.openapi.json](/${sp.id}.openapi.json)`)
    .join(' · ')
  overview.push(`오퍼레이션 ${opCount}개. OpenAPI 스펙 내려받기 — ${downloads}`)
  overview.push('')
  for (const [tag, ops] of [...byTag.entries()].sort()) {
    overview.push(`## ${tag}`)
    overview.push('')
    overview.push('| 메서드 | 경로 | 설명 |')
    overview.push('|---|---|---|')
    for (const o of ops) {
      overview.push(`| ${o.method} | [${cell(o.path)}](${o.link}) | ${cell(o.text)} |`)
    }
    overview.push('')
  }
  writeFileSync(join(dir, 'index.md'), overview.join('\n') + '\n')

  sidebar[`/api/${svc.id}/`] = [
    { text: svc.title, items: [{ text: '개요', link: `/api/${svc.id}/` }] },
    ...[...byTag.entries()]
      .sort()
      .map(([tag, ops]) => ({
        text: tag,
        collapsed: true,
        items: ops.map((o) => ({ text: o.text, link: o.link })),
      })),
  ]

  serviceCounts.push({ ...svc, opCount, tagCount: byTag.size })
  console.log(`${svc.id.padEnd(10)} ${String(byTag.size).padStart(3)} tags  ${opCount} operations`)
}

// 레퍼런스 최상위 개요
const total = serviceCounts.reduce((a, s) => a + s.opCount, 0)
const indexLines = [
  '# API 레퍼런스',
  '',
  '서비스별 전체 API 목록입니다. 각 페이지는 서비스 코드에서 생성한 OpenAPI 스펙으로 만들어,',
  '파라미터 이름·타입·필수 여부가 실제 구현과 어긋나지 않습니다.',
  '',
  '| 서비스 | 범위 | API 수 |',
  '|---|---|---|',
]
const SCOPE = {
  iam: '서비스 계정·API 키·사용자·조직·정책·권한 부여',
  compute: '인스턴스(VM)·Flavor·이미지·키 페어·볼륨·메트릭',
  network: '네트워크·서브넷·라우터·Floating IP·보안 그룹·로드밸런서',
  container: '쿠버네티스 클러스터·워크로드·Namespace·Service·Ingress',
}
for (const s of serviceCounts) {
  indexLines.push(`| [${s.title}](/api/${s.id}/) | ${SCOPE[s.id] ?? ''} | ${s.opCount} |`)
}
indexLines.push(`| 합계 | | ${total} |`)
indexLines.push('')
indexLines.push('## 읽기 전에')
indexLines.push('')
indexLines.push('- 모든 경로는 발급받은 콘솔 도메인 뒤에 붙습니다. 문서의 서버 주소는 플레이스홀더입니다.')
indexLines.push('- 인증 헤더와 응답 봉투는 서비스가 같습니다. [공통 규약](/guide/conventions)을 먼저 보십시오.')
indexLines.push('- 운영자 전용(admin) API 와 서비스 간 내부 호출용 API 는 제외했습니다.')
writeFileSync(join(OUT_DIR, 'index.md'), indexLines.join('\n') + '\n')

writeFileSync(
  join(ROOT, 'docs/.vitepress/sidebar.generated.json'),
  JSON.stringify(sidebar, null, 2) + '\n',
)

console.log(`\n총 ${totalPages}개 페이지 생성`)

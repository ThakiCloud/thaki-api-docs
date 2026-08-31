#!/usr/bin/env node
/**
 * 공개 대상 스펙(spec/public/*.openapi.json)이 공개 조건을 지키는지 검증한다.
 *
 * 왜 필터가 아니라 검증인가: 원본 스펙(spec/raw/)에는 운영자 전용·내부 호출용 API 가
 * 그대로 들어 있어 공개 리포에 두지 않는다. 그래서 CI 는 필터를 다시 돌릴 수 없고,
 * 대신 이미 커밋된 결과물이 조건을 지키는지 본다.
 *
 * 검사하는 것:
 *  1. 오퍼레이션 수가 기대치와 같은가 (범위가 조용히 바뀌지 않았는가)
 *  2. admin·internal 경로가 섞여 들어가지 않았는가
 *  3. 서버 주소가 플레이스홀더인가 (실 호스트가 박히지 않았는가)
 *  4. 참조가 끊긴 스키마가 없는가 (뷰어가 빈 화면을 그리지 않는가)
 *
 *   node scripts/verify-specs.mjs
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const OUT_DIR = join(ROOT, 'spec/public')

const HTTP_METHODS = ['get', 'post', 'put', 'delete', 'patch', 'head', 'options']

/** filter-openapi.mjs 와 같은 기준. 둘이 어긋나면 이 검증이 잡는다. */
const EXCLUDED_PATH = /(^|\/)admin(\/|$)|(^|\/)internal(\/|$)|(^|\/)admin-[a-z-]+/i
const EXCLUDED_TAG = /^admin[-_ ]|^admin$|internal/i
const EXCLUDED_EXTRA = [
  /(^|\/)system-admin(\/|$)/,
  /(^|\/)token\/(exchange|validate)$/,
  /\/callback$/,
  /^\/health$/,
  /^\/(livez|readyz)$/,
  /\/shell\/docs$/,
  /\/api-keys\/exchange$/,
  // 콘솔 화면 전용. CSV 내려받기·대시보드 집계는 연동 API 가 아니다.
  /\/export\/csv$/,
  /(^|\/)dashboard(\/|$)/,
  // 조직 그룹 템플릿은 플랫폼 운영자용 부트스트랩 설정이다.
  /(^|\/)group-templates(\/|$)/,
  // 인가가 스텁이라 실제로 열려 있는 관리 EP. 고객 문서에 두지 않는다.
  /(^|\/)revoke\/(session|user)$/,
  // 정책 동기화·평가·검증 운영 EP. 앱 레벨 인증이 없고 오호출 시 바인딩을 대량 변경한다.
  /(^|\/)policies\/evaluate$/,
  /\/bindings\/sync$/,
  /(^|\/)policies\/(bulk-sync-update|revalidate|simulate|validate)$/,
]

const EXPECT = {
  'iam-authn': 147,
  'iam-authz': 79,
  compute: 87,
  network: 116,
  container: 244,
}

const PREFIX = {
  'iam-authn': '/api/v1/iam/authn',
  'iam-authz': '/api/v1/iam/authz',
  compute: '/api/v1/compute',
  network: '/api/v1/network',
  container: '/api/v1/container',
}

let failed = false
let total = 0

for (const [id, expect] of Object.entries(EXPECT)) {
  const path = join(OUT_DIR, `${id}.openapi.json`)
  let spec
  try {
    spec = JSON.parse(readFileSync(path, 'utf8'))
  } catch {
    console.error(`FAIL ${id}: ${path} 를 읽을 수 없습니다`)
    failed = true
    continue
  }

  const ops = []
  for (const [p, item] of Object.entries(spec.paths ?? {})) {
    for (const [m, op] of Object.entries(item)) {
      if (HTTP_METHODS.includes(m)) ops.push({ path: p, method: m, op })
    }
  }
  total += ops.length

  const problems = []

  if (ops.length !== expect) {
    problems.push(`오퍼레이션 ${ops.length}개 (기대 ${expect}개) — 범위가 바뀌었습니다`)
  }

  const bare = (p) => p.replace(PREFIX[id], '')
  const leakedPath = ops.filter(
    (o) => EXCLUDED_PATH.test(bare(o.path)) || EXCLUDED_EXTRA.some((re) => re.test(bare(o.path))),
  )
  if (leakedPath.length > 0) {
    problems.push(`운영자·내부 전용 경로 ${leakedPath.length}개가 남아 있습니다`)
    for (const o of leakedPath.slice(0, 5)) problems.push(`    ${o.method.toUpperCase()} ${o.path}`)
  }

  const leakedTag = ops.filter((o) => (o.op.tags ?? []).some((t) => EXCLUDED_TAG.test(t)))
  if (leakedTag.length > 0) {
    problems.push(`운영자 전용 태그가 붙은 오퍼레이션 ${leakedTag.length}개가 남아 있습니다`)
  }

  const servers = spec.servers ?? []
  if (!servers.length || !servers.every((s) => String(s.url).includes('<your-console-host>'))) {
    problems.push(`servers 가 플레이스홀더가 아닙니다: ${JSON.stringify(servers)}`)
  }

  const schemas = spec.components?.schemas ?? {}
  const referenced = new Set(
    [...JSON.stringify(spec).matchAll(/#\/components\/schemas\/([^"]+)/g)].map((m) =>
      decodeURIComponent(m[1]),
    ),
  )
  const dangling = [...referenced].filter((n) => !(n in schemas))
  if (dangling.length > 0) {
    problems.push(`끊긴 스키마 참조 ${dangling.length}개: ${dangling.slice(0, 5).join(', ')}`)
  }

  if (problems.length > 0) {
    console.error(`FAIL ${id}`)
    for (const p of problems) console.error(`  ${p}`)
    failed = true
  } else {
    console.log(`ok   ${id.padEnd(10)} ${String(ops.length).padStart(4)} operations`)
  }
}

console.log(`\ntotal: ${total} operations`)
if (failed) {
  console.error('GATE FAIL')
  process.exit(1)
}
console.log('GATE OK')

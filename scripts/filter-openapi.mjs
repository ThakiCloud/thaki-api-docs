#!/usr/bin/env node
/**
 * 서비스별 OpenAPI 원본 → 고객 공개용 스펙으로 필터링한다.
 *
 * 왜 필터링하나: 원본에는 운영자 전용(admin)과 서비스 간 호출용(internal)
 * 엔드포인트가 섞여 있다. 그대로 공개하면 고객이 호출할 수 없는 API 가 절반이고,
 * 내부 호출 경로가 외부에 드러난다.
 *
 * 이 스크립트가 게이트를 겸한다 — 결과 오퍼레이션 수가 기대치와 다르면 exit 1.
 * 포맷·집계를 사람이 아니라 코드가 소유한다.
 *
 *   node scripts/filter-openapi.mjs            # 전 서비스
 *   node scripts/filter-openapi.mjs compute    # 한 서비스만
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve, join } from 'node:path'

const ROOT = process.cwd()
const RAW_DIR = join(ROOT, 'spec/raw')
const SOURCES = JSON.parse(readFileSync(join(ROOT, 'spec/sources.json'), 'utf8'))
const OUT_DIR = join(ROOT, 'spec/public')

const HTTP_METHODS = ['get', 'post', 'put', 'delete', 'patch', 'head', 'options']

/** 뷰어에 표시할 서버 호스트. 실 호스트를 넣지 않는다 — 공개 리포다. */
const PLACEHOLDER_HOST = 'https://<your-console-host>'

/**
 * 서비스 정의.
 *
 * prefix: 게이트웨이가 붙이는 접두. 앱 자체는 접두 없이 서빙하므로 스펙 경로에는
 *   빠져 있다. 고객이 실제로 호출하는 주소로 만들려면 여기서 붙여야 한다.
 * expect: 필터 후 남아야 하는 오퍼레이션 수. 코드가 바뀌어 범위가 흔들리면 CI 가 멈춘다.
 */
const SERVICES = [
  { id: 'iam-authn', title: 'IAM 인증 (AuthN)', prefix: '/api/v1/iam/authn', expect: 145 },
  { id: 'iam-authz', title: 'IAM 인가 (AuthZ)', prefix: '/api/v1/iam/authz', expect: 78 },
  { id: 'compute', title: '컴퓨트 (VM·이미지·키 페어)', prefix: '/api/v1/compute', expect: 86 },
  { id: 'network', title: '네트워크 (vNet·보안 그룹)', prefix: '/api/v1/network', expect: 115 },
  { id: 'container', title: '컨테이너 (클러스터·워크로드)', prefix: '/api/v1/container', expect: 241 },
]

/** 운영자 전용·서비스 간 호출용 경로. 고객 문서에서 제외한다. */
const EXCLUDED_PATH = /(^|\/)admin(\/|$)|(^|\/)internal(\/|$)|(^|\/)admin-[a-z-]+/i

/** 태그로도 거른다 — 경로가 admin 이 아니어도 태그가 운영자용이면 제외한다. */
const EXCLUDED_TAG = /^admin[-_ ]|^admin$|internal/i

/**
 * 이름에 admin·internal 이 없지만 고객이 호출할 대상이 아닌 경로.
 *
 * - system-admin: 플랫폼 운영자가 조직(도메인)을 만드는 API. 테넌트는 호출할 수 없다.
 * - token/exchange·token/validate: 스펙 설명에 "내부용"이라고 적힌 서비스 간 호출.
 * - callback: 프로비저너가 되부르는 자리. 고객이 호출하는 API 가 아니다.
 * - /health, /livez, /readyz: 컨테이너 프로브. 서비스 루트의 것만 제외한다 — 경로 끝이
 *   health 라는 이유로 뭉뚱그리면 클러스터 컨트롤 플레인 상태 조회처럼 고객이 쓰는 API 까지
 *   사라진다.
 * - shell/docs: 문서를 돌려주는 엔드포인트. API 가 아니다.
 * - api-keys/exchange: 게이트웨이가 API 키를 내부 토큰으로 바꿀 때 스스로 호출한다.
 *   고객은 API 키 헤더만 보내면 되고 이 API 를 직접 부르지 않는다.
 */
const EXCLUDED_EXTRA = [
  /(^|\/)system-admin(\/|$)/,
  /(^|\/)token\/(exchange|validate)$/,
  /\/callback$/,
  // 서비스 루트(GET /)는 배너를 돌려주는 인프라 엔드포인트다. 레퍼런스 페이지도 만들지 않는다.
  /^\/$/,
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

const only = process.argv[2]
const targets = only ? SERVICES.filter((s) => s.id === only) : SERVICES

if (targets.length === 0) {
  console.error(`unknown service: ${only}`)
  console.error(`available: ${SERVICES.map((s) => s.id).join(', ')}`)
  process.exit(2)
}

let anyFailed = false

for (const svc of targets) {
  const srcPath = join(RAW_DIR, `${svc.id}.json`)
  let spec
  try {
    spec = JSON.parse(readFileSync(srcPath, 'utf8'))
  } catch {
    console.error(`SKIP ${svc.id}: ${srcPath} 를 읽을 수 없습니다`)
    anyFailed = true
    continue
  }

  // ── 1. admin·internal 오퍼레이션 제거 ────────────────────────────────
  const paths = {}
  let kept = 0
  let dropped = 0
  const keptTags = new Map()

  for (const [path, item] of Object.entries(spec.paths ?? {})) {
    const next = {}
    for (const [method, op] of Object.entries(item)) {
      if (!HTTP_METHODS.includes(method)) continue // parameters 등 공통 키는 아래에서 처리
      const tags = op.tags ?? []
      const excluded =
        EXCLUDED_PATH.test(path) ||
        EXCLUDED_EXTRA.some((re) => re.test(path)) ||
        tags.some((t) => EXCLUDED_TAG.test(t)) ||
        // 소스에서 폐기 표시한 API. 대체 경로가 이미 있으므로 고객 문서에 두지 않는다.
        op.deprecated === true
      if (excluded) {
        dropped++
        continue
      }
      next[method] = op
      kept++
      for (const t of tags.length ? tags : ['<none>']) {
        keptTags.set(t, (keptTags.get(t) ?? 0) + 1)
      }
    }
    if (!HTTP_METHODS.some((m) => m in next)) continue
    // 경로 수준 공통 parameters 는 남은 오퍼레이션이 있을 때만 함께 유지한다.
    if (Array.isArray(item.parameters)) next.parameters = item.parameters
    // 게이트웨이 접두를 붙여 고객이 실제로 호출하는 주소로 만든다.
    paths[`${svc.prefix}${path}`] = next
  }

  // ── 2. 남은 오퍼레이션이 참조하는 스키마만 남긴다 (전이 폐포) ─────────
  const allSchemas = spec.components?.schemas ?? {}
  const needed = new Set()
  const queue = []

  function walk(node) {
    if (node == null || typeof node !== 'object') return
    if (Array.isArray(node)) return node.forEach(walk)
    for (const [k, v] of Object.entries(node)) {
      if (k === '$ref' && typeof v === 'string') {
        const m = /^#\/components\/schemas\/(.+)$/.exec(v)
        if (m) queue.push(decodeURIComponent(m[1]))
      } else walk(v)
    }
  }

  walk(paths)
  while (queue.length) {
    const name = queue.pop()
    if (needed.has(name) || !(name in allSchemas)) continue
    needed.add(name)
    walk(allSchemas[name])
  }

  const schemas = Object.fromEntries(
    Object.entries(allSchemas)
      .filter(([name]) => needed.has(name))
      .sort(([a], [b]) => a.localeCompare(b)),
  )

  // ── 3. 서버·태그 정리 ────────────────────────────────────────────────
  // 원본에는 servers 가 없다. 비워 두면 뷰어가 문서 사이트 도메인을 서버로 잡아
  // "여기로 호출하면 된다"고 읽히므로, 고객이 자기 콘솔 주소로 바꿔야 한다는 게
  // 드러나는 플레이스홀더를 넣는다.
  const usedTags = new Set(keptTags.keys())
  const declaredTags = (spec.tags ?? []).filter(
    (t) => usedTags.has(t.name) && !EXCLUDED_TAG.test(t.name),
  )

  // info.version 은 서비스마다 신뢰도가 다르다(빌드 시 주입되는 값이라 추출 환경에 따라
  // 더미가 찍히기도 한다). 문서에는 "어느 커밋에서 뽑았는지"가 유일하게 검증 가능한 사실이라
  // 그것을 버전으로 쓴다.
  const src = SOURCES.services?.[svc.id]
  const version = src ? `${src.repo}@${src.commit}` : (spec.info?.version ?? 'unknown')
  const provenance = src
    ? `이 스펙은 ${src.repo} 리포의 ${src.branch} 브랜치 ${src.commit} 커밋 코드에서 생성했습니다` +
      `(생성일 ${SOURCES.generatedAt}).`
    : ''

  const out = {
    ...spec,
    info: {
      ...spec.info,
      title: `${svc.title}`,
      version,
      description: [spec.info?.description, provenance].filter(Boolean).join('\n\n'),
    },
    servers: [{ url: PLACEHOLDER_HOST, description: '콘솔 도메인으로 바꿔서 호출하십시오' }],
    paths,
    components: { ...(spec.components ?? {}), schemas },
    tags: declaredTags,
  }

  // ── 4. 참조 무결성 ───────────────────────────────────────────────────
  // 스키마를 쳐낸 뒤 참조만 남으면 뷰어가 조용히 빈 스키마를 그린다.
  const serialized = JSON.stringify(out)
  const referenced = new Set(
    [...serialized.matchAll(/#\/components\/schemas\/([^"]+)/g)].map((m) =>
      decodeURIComponent(m[1]),
    ),
  )
  const dangling = [...referenced].filter((name) => !(name in schemas))

  const outPath = join(OUT_DIR, `${svc.id}.openapi.json`)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n')

  // ── 5. 리포트 + 게이트 ───────────────────────────────────────────────
  console.log(`\n[${svc.id}] ${srcPath} → ${outPath}`)
  console.log(
    `  operations : kept ${kept}, dropped ${dropped} (admin·internal)` +
      (svc.expect !== null ? `  / expect ${svc.expect}` : ''),
  )
  console.log(`  schemas    : ${Object.keys(schemas).length} / ${Object.keys(allSchemas).length}`)
  console.log(`  tags       : ${keptTags.size}`)

  if (dangling.length > 0) {
    console.error(`  GATE FAIL: ${dangling.length} dangling $ref — 정의 없는 참조가 남았습니다`)
    for (const name of dangling.slice(0, 10)) console.error(`    #/components/schemas/${name}`)
    anyFailed = true
  }

  const leaked = Object.keys(paths).filter((p) => {
    const bare = p.replace(svc.prefix, '')
    return EXCLUDED_PATH.test(bare) || EXCLUDED_EXTRA.some((re) => re.test(bare))
  })
  if (leaked.length > 0) {
    console.error(`  GATE FAIL: admin·internal 경로가 ${leaked.length}개 남았습니다`)
    for (const p of leaked.slice(0, 10)) console.error(`    ${p}`)
    anyFailed = true
  }

  if (svc.expect !== null && kept !== svc.expect) {
    console.error(`  GATE FAIL: expected ${svc.expect} operations, got ${kept}`)
    console.error('    API 범위가 바뀌었습니다. 무엇이 늘고 줄었는지 확인한 뒤 expect 를 고치세요.')
    anyFailed = true
  }
}

if (anyFailed) process.exit(1)
console.log('\nGATE OK')

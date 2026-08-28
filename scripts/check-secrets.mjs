#!/usr/bin/env node
/**
 * 공개 리포 게이트 — 배포 전에 코드가 판정한다.
 *
 * 산문으로 "실 호스트를 쓰지 말자"고 부탁하면 언젠가 새어 나간다. 그래서 CI 가
 * 실행하는 검사로 만든다. 하나라도 걸리면 exit 1 이고 배포가 서지 않는다.
 *
 * 검사하는 것:
 *  1. 실 배포 호스트명 (문서는 플레이스홀더만 쓴다)
 *  2. 자격증명처럼 보이는 문자열 (JWT, API 키 ID/secret, AWS 키, PEM)
 *  3. 내부 인프라 노출 (클러스터 내부 DNS, 사설 IP)
 *
 *   node scripts/check-secrets.mjs [--dir docs] [--dir spec]
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, extname } from 'node:path'

const ROOT = process.cwd()
const argv = process.argv.slice(2)

const dirs = []
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--dir') dirs.push(argv[i + 1])
}
if (dirs.length === 0) dirs.push('docs', 'spec')

const TEXT_EXT = new Set(['.md', '.ts', '.mts', '.js', '.mjs', '.vue', '.json', '.yml', '.yaml', '.css'])
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'cache'])

/** 이 파일 자신은 패턴 문자열을 갖고 있으므로 면제한다. */
const EXEMPT = [/scripts\/check-secrets\.mjs$/]

const RULES = [
  {
    id: 'real-host',
    severity: 'error',
    // 실 배포 도메인. 문서는 <your-console-host> 플레이스홀더만 쓴다.
    re: /\b[a-z0-9-]+\.thakicloud\.(net|com|site|kr)\b/gi,
    hint: '실 호스트 대신 <your-console-host> 플레이스홀더를 쓰세요.',
    allow: [/github\.com\/ThakiCloud/i, /www\.thakicloud\.com/i, /docs\.thakicloud\.com/i],
  },
  {
    id: 'jwt',
    severity: 'error',
    re: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{5,}/g,
    hint: '실제 JWT 로 보입니다. 예제는 잘린 형태(eyJhbGciOi...)로 쓰세요.',
    allow: [],
  },
  {
    id: 'thaki-api-key-id',
    severity: 'error',
    // 서비스 계정 API 키 ID 형식: sak_ + 16 hex
    re: /\bsak_[0-9a-f]{16}\b/g,
    hint: '실제 API 키 ID 로 보입니다. 예제는 sak_0000000000000000 처럼 쓰세요.',
    allow: [/sak_0{16}/],
  },
  {
    id: 'aws-access-key',
    severity: 'error',
    re: /\b(AKIA|ASIA)[0-9A-Z]{16}\b/g,
    hint: 'AWS 액세스 키로 보입니다.',
    allow: [],
  },
  {
    id: 'github-token',
    severity: 'error',
    re: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g,
    hint: 'GitHub 토큰으로 보입니다.',
    allow: [],
  },
  {
    id: 'openai-key',
    severity: 'error',
    re: /\bsk-[A-Za-z0-9]{20,}\b/g,
    hint: 'API 키로 보입니다.',
    allow: [],
  },
  {
    id: 'private-key-block',
    severity: 'error',
    re: /-----BEGIN (RSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/g,
    hint: '개인키 블록입니다. 예제는 -----BEGIN OPENSSH PRIVATE KEY-----\\n... 로 잘라 쓰세요.',
    allow: [/PRIVATE KEY-----\\n\.\.\./],
  },
  {
    id: 'cluster-internal-dns',
    severity: 'error',
    // 클러스터 내부 서비스 주소. 외부 문서에 나갈 이유가 없다.
    re: /\b[a-z0-9-]+\.[a-z0-9-]+\.svc(\.cluster\.local)?\b/g,
    hint: '클러스터 내부 주소입니다. 외부 문서에서 제거하세요.',
    allow: [],
  },
  {
    id: 'private-ip',
    severity: 'error',
    // 사설 IP. 예제 문서용 대역(10.0.0.0/24 등)은 아래 allow 로 통과시킨다.
    re: /\b(?:10|172|192)\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g,
    hint: '사설 IP 로 보입니다. 예제용이면 10.0.0.x / 192.168.1.x 문서 예약 대역을 쓰세요.',
    allow: [
      /\b10\.0\.0\.\d{1,3}\b/,
      /\b10\.1\.0\.\d{1,3}\b/,
      /\b192\.168\.1\.\d{1,3}\b/,
      /\b172\.16\.0\.\d{1,3}\b/,
    ],
  },
]

/**
 * 생성된 스펙 파일에서는 경고로만 다루는 규칙.
 *
 * 스펙의 설명·예시는 서비스 코드가 소유한다. 이 리포에서 고칠 수 없고, 걸리는 값들은
 * 쿠버네티스 기본 대역(10.96.0.0/12 서비스, 10.244.0.0/16 파드)이나 필드 설명에 적힌
 * 예시 CIDR 이다. 실제 인프라 주소가 아니다. 그래도 눈에는 보이게 남긴다 — 진짜 주소가
 * 예시로 들어가면 여기서 드러난다. 손으로 쓴 마크다운 문서에서는 그대로 error 다.
 */
const SPEC_WARN_ONLY = new Set(['private-ip', 'cluster-internal-dns'])

/**
 * 생성물 판정.
 *
 * spec/ 의 스펙과 그 스펙에서 찍어낸 docs/api/ 의 레퍼런스 페이지가 여기 해당한다. 셋 다 내용의 출처가 서비스 코드라 이 리포에서 고칠 수 없다.
 * 손으로 쓰는 docs/guide/ 는 해당하지 않는다 — 거기서는 그대로 error 다.
 */
const isGenerated = (rel) => /^spec\/.*\.json$/.test(rel) || /^docs\/api\//.test(rel)

function walkDir(dir, out = []) {
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    return out
  }
  for (const name of entries) {
    if (SKIP_DIRS.has(name)) continue
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) walkDir(full, out)
    else if (TEXT_EXT.has(extname(name))) out.push(full)
  }
  return out
}

const files = dirs.flatMap((d) => walkDir(join(ROOT, d)))
let findings = 0
let warnings = 0
let scanned = 0

for (const file of files) {
  const rel = relative(ROOT, file)
  if (EXEMPT.some((re) => re.test(rel))) continue
  scanned++
  const text = readFileSync(file, 'utf8')
  const lines = text.split('\n')

  for (const rule of RULES) {
    for (const [i, line] of lines.entries()) {
      const matches = line.match(rule.re)
      if (!matches) continue
      for (const m of matches) {
        if (rule.allow.some((re) => re.test(m))) continue
        const warnOnly = isGenerated(rel) && SPEC_WARN_ONLY.has(rule.id)
        if (warnOnly) {
          console.warn(`WARN ${rel}:${i + 1}  [${rule.id}]  ${m}`)
          warnings++
          continue
        }
        console.error(`${rel}:${i + 1}  [${rule.id}]  ${m}`)
        console.error(`    ${rule.hint}`)
        findings++
      }
    }
  }
}

console.log(`\nscanned ${scanned} files in ${dirs.join(', ')}`)
if (warnings > 0) {
  console.log(`warnings: ${warnings} (생성물의 예시 값 — 서비스 코드에서 고쳐야 한다)`)
}
if (findings > 0) {
  console.error(`GATE FAIL: ${findings} finding(s)`)
  process.exit(1)
}
console.log('GATE OK: no secrets or real hosts found')

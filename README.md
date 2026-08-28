# thaki-api-docs

Thaki Cloud Aegis 연동 개발자용 API 문서. VitePress 사이트 + 서비스 코드에서 생성한 OpenAPI 레퍼런스.

사이트: https://thakicloud.github.io/thaki-api-docs/

## 구조

| 경로 | 내용 |
|---|---|
| `docs/guide/` | 손으로 쓰는 가이드 — 인증 준비, 공통 규약, 오류, 시나리오 |
| `docs/api/` | 서비스별 레퍼런스 페이지. 스펙을 Scalar 뷰어로 렌더한다 |
| `docs/public/*.openapi.json` | 필터를 거친 공개용 스펙. 빌드 산출물이므로 직접 고치지 않는다 |
| `spec/sources.json` | 각 스펙을 어느 리포·브랜치·커밋에서 뽑았는지 기록 |
| `scripts/filter-openapi.mjs` | 원본 → 공개용 변환. admin·internal 제거, 게이트웨이 접두 부착, 미사용 스키마 정리 |
| `scripts/verify-specs.mjs` | 공개된 스펙이 공개 조건을 지키는지 검증(CI 게이트) |
| `scripts/check-secrets.mjs` | 공개 리포 게이트 — 실 호스트·자격증명·내부 주소 검출 |

원본 스펙(`spec/raw/`)은 **이 리포에 두지 않는다**. 운영자 전용·내부 호출용 API 가 그대로 들어
있어서 공개하면 안 되기 때문이다. 그래서 CI 는 필터를 다시 돌리지 못하고, 대신 커밋된
`docs/public/*.openapi.json` 이 공개 조건(개수·admin 미포함·플레이스홀더 호스트·참조 무결성)을
지키는지 검증한다.

## 문서에 포함하는 것

고객이 호출할 수 있는 API 만 싣는다. 다음은 필터가 제거한다.

- 경로나 태그에 `admin` 이 붙은 운영자 전용 API
- `internal` 서비스 간 호출용 API
- `system-admin/*` — 플랫폼 운영자가 조직을 만드는 API
- `token/exchange`, `token/validate` — 스펙에 "내부용"으로 표시된 호출
- 프로비저너 콜백(`*/callback`), 헬스 프로브(`/health`)

현재 공개 대상: **701개** (인증 157 · 인가 87 · 컴퓨트 87 · 네트워크 125 · 컨테이너 245)

## 스펙 갱신

서비스 코드가 바뀌면 원본 스펙을 다시 뽑아 `spec/raw/` 에 넣는다.

```bash
# 각 서비스 리포에서 (예: thaki-suite-compute)
uv sync --frozen
APP_ENV=dev <필수 환경변수들> uv run python -c \
  "import json;from app.main import app;json.dump(app.openapi(),open('compute.json','w'),ensure_ascii=False,indent=2)"
```

운영 환경에서는 `/openapi.json` 이 꺼져 있으므로 긁어올 수 없다. 코드에서 생성해야 한다.

뽑은 파일은 `spec/raw/<서비스>.json` 에 두고(gitignore 된다) 필터를 돌린다. 스펙을 다시 뽑았으면
`spec/sources.json` 의 브랜치·커밋도 함께 갱신한다.

```bash
npm run spec:filter          # 전 서비스
npm run spec:filter compute  # 한 서비스만
npm run spec:verify          # 결과물이 공개 조건을 지키는지
```

필터는 게이트를 겸한다. 오퍼레이션 수가 `scripts/filter-openapi.mjs` 의 `expect` 와 다르면 실패한다.
API 가 실제로 늘거나 줄었으면 무엇이 바뀌었는지 확인한 뒤 `expect` 를 고친다.

## 로컬 실행

```bash
npm install
npm run docs:dev      # http://localhost:5173
npm run docs:build    # 배포와 같은 빌드
npm run spec:verify   # 공개 스펙 검증
npm run check:secrets # 시크릿·실호스트 검사
```

## 배포

`main` 에 푸시하면 GitHub Actions 가 게이트 3개(공개 스펙 검증 · 시크릿 검사 · 링크 검사)를 통과한 뒤
GitHub Pages 로 배포한다.

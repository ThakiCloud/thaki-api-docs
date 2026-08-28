# 인증 준비 (서비스 계정·API 키)

`acme` 조직 관리자가 배치용 서비스 계정(SA)을 만들어 VM 목록을 조회하기까지의 절차를 예시로 설명합니다. 경로·헤더·응답 형식의 공통 규약은 [공통 규약](/guide/conventions)을 먼저 참조하십시오.

## 단계 0 — 로그인

```bash
curl -s -X POST https://<your-console-host>/api/v1/iam/authn/public/login \
  -H 'Content-Type: application/json' \
  -d '{"username": "admin01", "password": "********", "domain": "acme"}'
```

응답의 `result.accessToken`을 `USER_TOKEN`으로 사용합니다. `mfaRequired: true`면 `accessToken`이 null이므로 MFA를 먼저 완료해야 합니다. 자동화에서는 콘솔에서 서비스 계정·키를 미리 만들고 단계 4만 프로그램이 수행하는 구성을 권장합니다.

## 단계 1 — 서비스 계정 생성

```bash
curl -s -X POST https://<your-console-host>/api/v1/iam/authn/service-accounts \
  -H "Authorization: Bearer $USER_TOKEN" -H 'Content-Type: application/json' \
  -d '{"orgId": "acme", "projectId": "proj-batch", "name": "ci-pipeline", "description": "야간 배치용"}'
```

응답(201, 봉투 없음) 주요 필드:

```json
{
  "saId": "sa-3f2b8c1e-...",
  "tpn": "tpn:kr:acme:proj-batch:sa/sa-3f2b8c1e-...",
  "orgId": "acme", "projectId": "proj-batch",
  "name": "ci-pipeline", "status": "active", "keys": []
}
```

`saId`와 `tpn`을 보관합니다. 이 시점의 서비스 계정은 권한이 없으므로 다음 단계가 필요합니다.

## 단계 2 — 권한(정책) 부여

정책 ID를 조회한 뒤(콘솔 IAM > 정책 화면에서도 확인 가능):

```bash
curl -s "https://<your-console-host>/api/v1/iam/authz/policies?orgId=acme&status=active&search=compute" \
  -H "Authorization: Bearer $USER_TOKEN"
```

서비스 계정 TPN에 바인딩합니다. 동기화 방식이라 요청에 넣은 목록이 바인딩 전체가 됩니다.

```bash
curl -s -X PUT https://<your-console-host>/api/v1/iam/authz/bindings/sync \
  -H "Authorization: Bearer $USER_TOKEN" -H 'Content-Type: application/json' \
  -d '{"targetType": "tpn", "targetId": "<SA TPN>", "orgId": "acme", "policyIds": ["<정책 ID>"]}'
```

## 단계 3 — API 키 발급

```bash
curl -s -X POST https://<your-console-host>/api/v1/iam/authn/service-accounts/$SA_ID/keys \
  -H "Authorization: Bearer $USER_TOKEN" -H 'Content-Type: application/json' \
  -d '{"description": "ci-runner-01", "expiresInDays": 90}'
```

응답(201, 봉투 없음): `{ "keyId": "sak_0000000000000000", "secret": "<43자>" }`

::: warning secret은 한 번만 노출됩니다
`secret`은 이 응답에서만 볼 수 있으니 즉시 비밀 저장소에 보관하십시오. 재조회는 불가능하며, 분실 시 키를 재발급(`reset`)해야 합니다.
:::

## 단계 4 — 서비스 API 호출

발급받은 키를 헤더에 넣어 바로 호출합니다. 별도의 토큰 발급 단계가 없습니다.

```bash
curl -s "https://<your-console-host>/api/v1/compute/instances?page=1&pageSize=20" \
  -H "Thaki-Api-Key: sak_0000000000000000" \
  -H "Thaki-Api-Secret: $SA_SECRET" \
  -H "X-Domain-Id: acme" -H "X-Domain-Name: acme" -H "X-Partition-Id: proj-batch"
```

컴퓨트·컨테이너 API는 `X-Domain-Id`·`X-Domain-Name`이 필수이고, 파티션 리소스는 `X-Partition-Id`도 필요합니다([공통 규약 부록 C](/guide/conventions) 참조).

## 응답 코드별 처리

| 상태 | 의미 | 처리 |
|---|---|---|
| 401 | 키 없음/비활성/만료/secret 불일치, SA 비활성 | 재시도 금지. 키 상태 확인 |
| 403 `Policy denied` | 허용 정책 없음 | 아래 "403 점검 순서" 참조 |
| 422 | 필수 헤더·본문 검증 실패 | 요청 수정 |
| 5xx | 일시 장애 | 지수 백오프로 재시도 |

## 권한 모델

### 생성 직후 권한: 없음

서비스 계정은 생성 시 어떤 그룹·정책에도 자동 연결되지 않으며, 그룹 가입 대상도 아닙니다. 권한 부여 방법은 정책 바인딩(단계 2, 또는 콘솔의 서비스 계정 > 권한 부여)뿐입니다. `orgId`/`projectId`는 소속만 정할 뿐 권한을 주지 않습니다.

### 정책과 액션

정책의 액션 이름은 `thaki:{App}.{Category}.{Alias}` 형식입니다.

| 액션 ID 예 | 의미 |
|---|---|
| `thaki:Compute.Instances.ListInstances` / `ReadInstance` | VM 목록/단건 조회 |
| `thaki:Compute.Instances.CreateInstance` / `DeleteInstance` | VM 생성/삭제 |
| `thaki:Compute.Instances.ActionInstance` | VM 시작·정지 등 액션 |
| `thaki:AegisContainer.Cluster.ListClusters` / `CreateClusterProvisioning` / `DeleteCluster` | 클러스터 조회/생성/삭제 |
| `thaki:Compute.Instances.*` | 카테고리 전체 |

Statement 예:

```json
{
  "Sid": "BatchVmReadOnly",
  "Effect": "Allow",
  "Action": ["thaki:Compute.Instances.ListInstances", "thaki:Compute.Instances.ReadInstance"],
  "Resource": ["trn:*:*:acme:*:proj-batch:*/*"]
}
```

파티션마다 미리 만들어진 정책(파티션 관리자: 파티션 전권, 파티션 멤버: Admin 등급 제외)을 바인딩하는 것이 가장 간단하고, 최소 권한이 필요하면 콘솔에서 사용자 정의 정책을 만들어 바인딩합니다. `scp` 종류 정책은 서비스 계정 TPN에 바인딩할 수 없습니다.

### 403 점검 순서

1. `GET /bindings/by-target?targetType=tpn&targetId=<SA TPN>` — 바인딩 존재 확인
2. 정책 상세에서 해당 액션 Allow 여부·명시적 Deny 확인
3. 사용 중인 키가 그 서비스 계정의 키인지 확인
4. 경로·헤더 확인(`X-Partition-Id`와 정책 Resource의 파티션 일치 등)

필요 시 `POST /policies/evaluate`(권한 판정 시뮬레이션)로 원인을 특정할 수 있습니다.

## 관련 API

서비스 계정·API 키·정책·바인딩의 전체 목록과 상세 파라미터는 [IAM 인증 (AuthN)](/api/iam-authn)과 [IAM 인가 (AuthZ)](/api/iam-authz) 레퍼런스를 참조하십시오. 대표적으로 다음 API를 사용합니다.

| 목적 | 메서드 | 경로 |
|---|---|---|
| 로그인 | POST | `/api/v1/iam/authn/public/login` |
| 서비스 계정 목록/생성 | GET/POST | `/api/v1/iam/authn/service-accounts` |
| 서비스 계정 상세(키 목록 포함) | GET | `/api/v1/iam/authn/service-accounts/{saId}` |
| API 키 발급 | POST | `/api/v1/iam/authn/service-accounts/{saId}/keys` |
| API 키 유효성 확인(인증 불필요) | POST | `/api/v1/iam/authn/public/api-keys/validate` |
| 정책 목록/상세 | GET | `/api/v1/iam/authz/policies` |
| 바인딩 동기화(권한 부여/회수) | PUT | `/api/v1/iam/authz/bindings/sync` |
| 권한 판정 시뮬레이션 | POST | `/api/v1/iam/authz/policies/evaluate` |

::: tip 운영 권고
- `secret`·비밀번호는 비밀 저장소에 보관하고 코드·로그·티켓에 남기지 마십시오.
- 키는 90일 이하 만료로 발급하고, 새 키 발급 → 교체 → 구 키 비활성화 → 삭제 순으로 교체하십시오.
- 유출 의심 시 즉시 키를 비활성화(캐시 토큰 동시 폐기)한 뒤 재발급하십시오.
- 서비스 계정은 용도별로 나누고 필요한 액션만 담은 정책을 바인딩하십시오.
:::

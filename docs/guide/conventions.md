# 공통 규약

모든 서비스 API에 공통으로 적용되는 경로, 인증 헤더, 요청·응답 형식을 설명합니다.

## 기본 URL과 경로

기본 URL은 환경별로 안내받은 콘솔 도메인입니다(예: `https://<your-console-host>`). 이 문서의 경로는 모두 기본 URL 뒤에 붙습니다.

| 서비스 | 경로 접두 |
|---|---|
| 인증(AuthN) | `/api/v1/iam/authn` |
| 인가(AuthZ) | `/api/v1/iam/authz` |
| 컴퓨트(VM) | `/api/v1/compute` |
| 컨테이너(클러스터) | `/api/v1/container` |
| 네트워크 | `/api/v1/network` |

로그인·API 키 검증 등 인증이 필요 없는 API는 `/api/v1/iam/authn/public/...` 경로를 사용합니다.

## 인증 헤더

서버는 아래 인증 입력을 우선순위대로 하나만 채택합니다. 한 요청에 여러 입력을 함께 보내지 마십시오.

| 우선순위 | 입력 | 용도 |
|---|---|---|
| 1 | 인증 쿠키 | 콘솔(브라우저) 전용 |
| 2 | `Thaki-Api-Key` + `Thaki-Api-Secret` | 서비스 계정 연동(권장). 검증 결과는 키 단위로 최대 1시간 캐시되어 반복 호출에 부담이 없습니다 |
| 3 | `Authorization: Bearer <사용자 토큰>` | 관리 작업(서비스 계정 생성·권한 부여 등) |

서버는 인증 후 권한(정책)을 판정하며, 허용되지 않은 요청에는 403을 반환합니다.

## 요청·응답 형식

- 본문은 JSON, 필드는 camelCase, 시각은 UTC ISO 8601(`2026-08-24T05:00:00Z`).
- 모든 응답에 추적용 `requestId`가 포함됩니다(문의 시 함께 전달). 요청 `X-Request-Id` 헤더 값이 있으면 그대로 사용됩니다.

표준 응답 봉투:

```json
{
  "result": { "...": "데이터" },
  "message": "요청이 성공적으로 처리되었습니다.",
  "timestamp": "2026-08-24T05:00:00Z",
  "requestId": "550e8400-..."
}
```

목록 조회는 `result` 안에 `data[]`, `dataCount`, `pagination{page, pageSize, totalCount, totalPages, hasNext, hasPrev}`이 들어갑니다.

::: warning 봉투 없는 응답
서비스 계정 생성, API 키 발급은 201 응답에 봉투 없이 객체만 반환합니다. 파싱 시 `result` 키가 없으니 주의하십시오. 자세한 내용은 [인증 준비](/guide/authentication)를 참조하십시오.
:::

오류 응답 형식과 상태 코드는 [오류 처리](/guide/errors)에서 통합해 설명합니다.

## 용어

| 용어 | 설명 |
|---|---|
| 조직(도메인) | 관계사 단위 테넌트. `orgId`로 식별. 로그인 `domain`에는 조직 이름 입력 |
| 파티션(프로젝트) | 조직 내 리소스 격리 단위. VM·클러스터가 여기에 속함 |
| TPN | 주체의 전역 식별자. `tpn:{region}:{orgId}:{projectId}:{type}/{name}`. 조직 레벨 서비스 계정은 projectId가 빈 값 |
| 서비스 계정(SA) | 프로그램용 주체. `saId`(`sa-<uuid>`)와 TPN 보유 |
| API 키 | 서비스 계정의 장기 자격증명. `keyId`(`sak_`+16 hex) + `secret`(43자). 콘솔에는 Access Key·Secret Key로 표시 |
| 정책 / 바인딩 | 정책은 허용/거부 규칙, 바인딩은 정책과 TPN의 연결. 서비스 계정 권한 = 바인딩된 정책의 합 |

## 부록 A. 상태 값

| 대상 | 필드 | 값 |
|---|---|---|
| 서비스 계정 | `status` | `active`, `disabled` |
| API 키 | `status` | `active`, `disabled`, `deleted` |
| API 키 | `effectiveStatus`(만료 반영 표시값) | `active`, `deactivated`, `revoked` |
| 키 검증 | `principalType` | `service_account`, `user` |

## 부록 B. 식별자 형식

| 식별자 | 형식 | 예 |
|---|---|---|
| saId | `sa-<uuid>` | `sa-3f2b8c1e-...` |
| keyId | `sak_<16 hex>` | `sak_0000000000000000` |
| 서비스 계정 TPN | `tpn:{region}:{orgId}:{projectId}:sa/{saId}` | `tpn:kr:acme::sa/sa-...` |
| 액션 ID | `thaki:{App}.{Category}.{Alias}` | `thaki:Compute.Instances.CreateInstance` |
| 리소스 TRN | `trn:{provider}:{region}:{orgId}:{app}:{projectId}:{type}/{id}` | `trn:*:*:acme:*:proj-batch:*/*` |

`region` 값은 환경에 따르며 응답의 `tpn`에서 확인할 수 있습니다.

## 부록 C. 서비스 API 공통 헤더

| 헤더 | 필수 | 설명 |
|---|---|---|
| `Thaki-Api-Key` / `Thaki-Api-Secret` | O(서비스 계정 연동) | API 키 자격증명 |
| `X-Domain-Id` / `X-Domain-Name` | O(compute/container) | 조직 ID / 이름 |
| `X-Partition-Id` | 파티션 리소스 API | 파티션 ID(`X-Project-Id`도 과도기 허용) |
| `X-Request-Id` | X | 요청 추적 ID |
| `Content-Type` | 본문 있는 요청 | `application/json` |

::: tip 서비스별 차이
네트워크 API는 `X-Partition-Id`가 모든 요청에 필수이며, 누락 시 400을 반환합니다(다른 서비스는 422). 서비스별 세부 규칙은 각 [API 레퍼런스](/api/) 페이지를 참조하십시오.
:::

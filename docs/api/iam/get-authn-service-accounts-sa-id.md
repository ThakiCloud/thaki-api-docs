# Get Service Account

서비스 어카운트 상세 조회

SA ID로 특정 서비스 어카운트의 상세 정보를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/service-accounts/{sa_id}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| sa_id | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.saId | 필수 | string |  |
| result.tpn | 필수 | string |  |
| result.orgId | 필수 | string |  |
| result.projectId | 필수 | string 또는 null |  |
| result.name | 필수 | string |  |
| result.owner | 필수 | string |  |
| result.displayName | 필수 | string 또는 null |  |
| result.description | 필수 | string 또는 null |  |
| result.tags | 필수 | object 또는 null |  |
| result.status | 필수 | string |  |
| result.createdAt | 필수 | string (date-time) |  |
| result.updatedAt | 필수 | string (date-time) |  |
| result.disabledAt | 필수 | string (date-time) |  |
| result.disabledReason | 필수 | string 또는 null |  |
| result.secretLastIssuedAt | 선택 | string (date-time) |  |
| result.keys | 선택 | array (object) |  |
| result.keys[].keyId | 필수 | string |  |
| result.keys[].status | 필수 | string |  |
| result.keys[].effectiveStatus | 필수 | string |  |
| result.keys[].description | 필수 | string 또는 null |  |
| result.keys[].expiresAt | 필수 | string (date-time) |  |
| result.keys[].createdAt | 필수 | string (date-time) |  |
| result.keys[].lastUsedAt | 필수 | string (date-time) |  |
| result.aliasClientId | 선택 | string 또는 null |  |
| result.aliasClientSecret | 선택 | string 또는 null |  |


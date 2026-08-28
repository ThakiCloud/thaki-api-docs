# Create Service Account

서비스 어카운트 생성

새로운 서비스 어카운트를 생성합니다.
SA ID와 TPN은 자동으로 생성됩니다.
owner는 현재 인증된 사용자(토큰)로 자동 설정됩니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/service-accounts
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| orgId | 필수 | string |  |
| projectId | 선택 | string 또는 null |  |
| name | 필수 | string | 길이 2~128 |
| displayName | 선택 | string 또는 null |  |
| description | 선택 | string 또는 null | 길이 0~255 |
| tags | 선택 | object 또는 null |  |
| status | 선택 | string 또는 null |  |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| saId | 필수 | string |  |
| tpn | 필수 | string |  |
| orgId | 필수 | string |  |
| projectId | 필수 | string 또는 null |  |
| name | 필수 | string |  |
| owner | 필수 | string |  |
| displayName | 필수 | string 또는 null |  |
| description | 필수 | string 또는 null |  |
| tags | 필수 | object 또는 null |  |
| status | 필수 | string |  |
| createdAt | 필수 | string (date-time) |  |
| updatedAt | 필수 | string (date-time) |  |
| disabledAt | 필수 | string (date-time) |  |
| disabledReason | 필수 | string 또는 null |  |
| secretLastIssuedAt | 선택 | string (date-time) |  |
| keys | 선택 | array (object) |  |
| keys[].keyId | 필수 | string |  |
| keys[].status | 필수 | string |  |
| keys[].effectiveStatus | 필수 | string |  |
| keys[].description | 필수 | string 또는 null |  |
| keys[].expiresAt | 필수 | string (date-time) |  |
| keys[].createdAt | 필수 | string (date-time) |  |
| keys[].lastUsedAt | 필수 | string (date-time) |  |
| aliasClientId | 선택 | string 또는 null |  |
| aliasClientSecret | 선택 | string 또는 null |  |


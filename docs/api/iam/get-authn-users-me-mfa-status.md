# Get Mfa Status

사용자 MFA 상태 조회

사용자 개인의 MFA 설정 상태만 반환합니다.
조직 MFA 정책은 GET /v1/iam/authn/organizations/{org_id}/mfa-policy 참조.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/users/me/mfa/status
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.emailEnabled | 필수 | boolean | Email MFA 사용 여부 |
| result.totpEnabled | 필수 | boolean | TOTP MFA 사용 여부 |
| result.totpCreatedAt | 선택 | string 또는 null | TOTP 등록 시간 (ISO8601 UTC) |
| result.totpLastUsedAt | 선택 | string 또는 null | TOTP 마지막 사용 시간 (ISO8601 UTC) |


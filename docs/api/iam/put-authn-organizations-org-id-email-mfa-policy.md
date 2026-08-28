# Email MFA 정책 생성/수정

조직의 Email MFA 정책을 생성하거나 업데이트합니다.

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/email-mfa-policy
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| org_id | path | 필수 | string | 조직 ID. 조직 ID |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| enabled | 선택 | boolean | 이메일 OTP 사용 여부 (토글 On/Off). 기본값 true |
| codeDigits | 선택 | integer | MFA 코드 자릿수 (6 or 8). 기본값 6. 범위 6~8 |
| codeValiditySeconds | 선택 | integer | MFA 코드 유효 시간 (초 단위, 기본: 300 = 5분). 기본값 300 |
| resendCooldownSeconds | 선택 | integer | MFA 코드 재요청 쿨다운 (초 단위). 기본값 60. 범위 0~ |
| maxAttempts | 선택 | integer | MFA 코드 검증 최대 시도 횟수. 기본값 5 |

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
| result.policyId | 필수 | string | 정책 ID |
| result.orgId | 필수 | string | 조직 ID |
| result.enabled | 필수 | boolean | Email MFA 활성화 여부 |
| result.codeDigits | 필수 | integer | MFA 코드 자릿수. 범위 6~8 |
| result.codeValiditySeconds | 필수 | integer | 코드 유효 시간 (초) |
| result.resendCooldownSeconds | 필수 | integer | 재전송 쿨다운 (초). 범위 0~ |
| result.maxAttempts | 필수 | integer | 최대 시도 횟수 |
| result.attemptWindowSeconds | 필수 | integer | 시도 추적 시간 윈도우 (초) |
| result.updatedBy | 선택 | string 또는 null | 최종 수정자 TPN |


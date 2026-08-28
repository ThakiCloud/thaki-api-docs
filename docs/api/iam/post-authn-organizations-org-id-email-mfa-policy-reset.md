# Email MFA 정책 초기화

조직의 Email MFA 정책을 삭제하여 기본값으로 초기화합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/email-mfa-policy/reset
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| org_id | path | 필수 | string | 조직 ID |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

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


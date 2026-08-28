# OTP 정책 초기화

조직의 OTP 정책을 삭제하여 Global Settings 기본값으로 초기화합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/otp-policy/reset
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| org_id | path | 필수 | string | 조직 ID. 조직 ID |

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
| result.policyId | 필수 | string | 정책 ID |
| result.orgId | 필수 | string | 조직 ID |
| result.otpEnabled | 필수 | boolean | OTP 활성화 여부 |
| result.hashAlgorithm | 필수 | string | Hash Algorithm (SHA1, SHA256, SHA512) |
| result.digits | 필수 | integer | TOTP 코드 자릿수. 범위 6~8 |
| result.tokenPeriod | 필수 | integer | 토큰 갱신 주기 (초). 범위 1~120 |
| result.lookAroundWindow | 필수 | integer | 시간 허용 범위. 범위 0~10 |
| result.reusableToken | 필수 | boolean | 토큰 재사용 허용 여부 |
| result.updatedBy | 선택 | string 또는 null | 최종 수정자 TPN |


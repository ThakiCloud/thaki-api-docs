# Verify Totp Setup

TOTP 설정 검증 (최초 등록 시)

TOTP 앱에서 생성된 6자리 코드를 입력하여 설정을 완료합니다.
검증 성공 시 TOTP MFA가 자동으로 활성화됩니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/users/me/mfa/totp/verify-setup
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| code | 필수 | string | 6자리 인증 코드. 길이 6~6 |

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
| result.success | 필수 | boolean | 검증 성공 여부 |
| result.mfaEnabled | 필수 | boolean | MFA 활성화 상태 |
| result.method | 필수 | string | MFA 방식 ('authenticator') |


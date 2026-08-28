# Disable Totp Mfa

TOTP MFA 비활성화

사용자의 TOTP MFA를 비활성화하고 Secret을 완전히 삭제합니다.
비활성화 전 TOTP 코드 검증이 필요합니다.
재활성화하려면 Setup부터 다시 시작해야 합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/users/me/mfa/totp/disable
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
| result.success | 필수 | boolean | 비활성화 성공 여부 |
| result.method | 필수 | string | 비활성화된 MFA method |


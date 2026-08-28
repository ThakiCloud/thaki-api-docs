# 이메일 코드 요청 (Pre-Auth)

Pre-Auth 세션을 사용하여 이메일로 MFA 코드를 요청합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/pre-auth/mfa/email/request-code
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Session-ID | 필수 | string |  |

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
| result.codeSent | 필수 | boolean | 코드 전송 성공 여부 |
| result.expiresIn | 필수 | integer | 코드 만료 시간(초) |
| result.maskedEmail | 필수 | string | 마스킹된 이메일 주소 |


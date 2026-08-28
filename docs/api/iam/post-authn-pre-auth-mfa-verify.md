# MFA 검증 (Pre-Auth)

Pre-Auth 세션을 사용하여 MFA 코드를 검증합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/public/pre-auth/mfa/verify
```

## URI 매개변수

없습니다.

## 요청 헤더

이 API 는 인증 없이 호출합니다. 위 경로의 /public 접두를 그대로 사용하십시오. /public 없이 호출하면 게이트웨이가 자격증명을 요구해 401 을 반환합니다.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Session-ID | 필수 | string |  |

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| code | 필수 | string | 6자리 MFA 코드. 길이 6~6 |
| method | 필수 | string | MFA 방법: 'email', 'authenticator', or 'totp' |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류) · 429(시도 제한 초과)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.verified | 필수 | boolean | 검증 성공 여부 |
| result.accessToken | 선택 | string 또는 null | Access Token (조건부 발급) |
| result.refreshTokenRef | 선택 | string 또는 null | Refresh Token Reference (조건부 발급) |
| result.tokenType | 선택 | string 또는 null | 토큰 타입 |
| result.expiresIn | 선택 | integer 또는 null | Access Token 만료 시간(초) |
| result.requiresPasswordChange | 필수 | boolean | 비밀번호 변경 필요 여부 |
| result.message | 필수 | string | 응답 메시지 |


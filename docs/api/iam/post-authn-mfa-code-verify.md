# Verify Mfa Code

MFA 코드 검증

사용자가 입력한 MFA 코드를 검증합니다.
로그인 플로우에서 호출되는 경우 최종 토큰을 발급합니다.

- session_id_pending이 있으면: 로그인 플로우 (토큰 없음)
- session_id_pending이 없으면: 일반 MFA 검증 (토큰 필요)

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/mfa/code/verify
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| code | 필수 | string | 6-digit MFA code. 길이 6~6 |
| method | 필수 | string | MFA method: 'email', 'authenticator', or 'totp' |
| sessionIdPending | 선택 | string 또는 null | MFA pending session ID (login flow) |

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
| result.verified | 필수 | boolean | 검증 성공 여부 |
| result.accessToken | 선택 | string 또는 null | Access Token (로그인 플로우에서만) |
| result.refreshTokenRef | 선택 | string 또는 null | Refresh Token Reference (로그인 플로우에서만) |
| result.tokenType | 선택 | string 또는 null | 토큰 타입 (기본값: Bearer) |
| result.expiresIn | 선택 | integer 또는 null | Access Token 만료 시간(초) |
| result.sessionId | 선택 | string 또는 null | 세션 ID (로그인 플로우에서만) |
| result.userTpn | 선택 | string 또는 null | 사용자 TPN (로그인 플로우에서만) |
| result.forcePasswordChange | 선택 | boolean 또는 null | 비밀번호 변경이 필요한지 여부 |
| result.remainingAttempts | 선택 | integer 또는 null | 검증 실패 시 남은 시도 횟수 |


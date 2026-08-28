# Post Login

사용자 로그인 (Keycloak OIDC 인증)

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/login
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| provider | 선택 | string | IdP provider (default: keycloak). 기본값 "keycloak" |
| username | 필수 | string | User identifier. 길이 1~ |
| password | 필수 | string | Password. 길이 1~ |
| domain | 필수 | string | 도메인명(필수). SysAdmin도 "system"을 명시해야 한다. "system"이면 KC_ADMIN_REALM(master)로 인증한다.. 길이 1~ |
| clientIp | 선택 | string 또는 null | Client IP address |
| userAgent | 선택 | string 또는 null | User agent string |
| idpUserId | 선택 | string 또는 null | Explicit IdP user identifier |

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
| result.accessToken | 선택 | string 또는 null | 액세스 토큰 (Pre-Auth 필요 시 null) |
| result.refreshTokenRef | 선택 | string 또는 null | 리프레시 토큰 참조 (Pre-Auth 필요 시 null) |
| result.expiresIn | 선택 | integer 또는 null | 토큰 만료 시간(초) (Pre-Auth 필요 시 null) |
| result.refreshTokenExpiresIn | 선택 | integer 또는 null | 리프레시 토큰 만료 시간(초) |
| result.tokenType | 선택 | string | 기본값 "Bearer" |
| result.sessionId | 선택 | string 또는 null | 세션 ID (Pre-Auth 필요 시 반환) |
| result.userTpn | 필수 | string |  |
| result.forcePasswordChange | 선택 | boolean | 비밀번호 변경이 강제되는지 여부. 기본값 false |
| result.mfaRequired | 선택 | boolean | MFA 검증이 필요한지 여부. 기본값 false |
| result.availableMfaMethods | 선택 | array (object) | 사용 가능한 MFA 방법 목록 및 등록 여부 (MFA 필요 시). 예: [{"type": "email", "enrolled": true}, {"type": "authenticator", "enrolled": false}] |
| result.availableMfaMethods[].type | 필수 | string | MFA 방법 종류 (예: email, authenticator) |
| result.availableMfaMethods[].enrolled | 필수 | boolean | 해당 MFA 방법이 사용자에 의해 이미 등록(enrolled) 되었는지 여부 |
| result.mfaSessionIdPending | 선택 | string 또는 null | MFA pending 세션 ID (MFA 필요 시) |


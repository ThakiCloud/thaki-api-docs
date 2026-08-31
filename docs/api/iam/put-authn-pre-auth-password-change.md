# 비밀번호 변경

Pre-Auth 세션 또는 비밀번호 초기화 토큰을 사용하여 비밀번호를 변경합니다.

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authn/public/pre-auth/password/change
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| token | 선택 | string 또는 null | 비밀번호 초기화 토큰 |

## 요청 헤더

이 API 는 인증 없이 호출합니다. 위 경로의 /public 접두를 그대로 사용하십시오. /public 없이 호출하면 게이트웨이가 자격증명을 요구해 401 을 반환합니다.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Session-ID | 선택 | string 또는 null |  |

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| newPassword | 필수 | string | 새 비밀번호. 길이 8~ |

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


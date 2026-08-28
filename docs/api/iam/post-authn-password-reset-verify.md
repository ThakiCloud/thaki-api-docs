# 비밀번호 초기화 토큰 검증

이메일로 받은 비밀번호 초기화 토큰의 유효성을 검증합니다.

**인증 불필요** (Public 엔드포인트)

### 요청
- `token`: 이메일로 받은 초기화 토큰

### 응답
- `valid`: 토큰 유효 여부
- `email`: 마스킹된 사용자 이메일 (유효한 경우)
- `expiresAt`: 토큰 만료 시간 (유효한 경우)

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/password/reset/verify
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| token | 필수 | string | 비밀번호 초기화 토큰. 길이 1~ |

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
| result.valid | 필수 | boolean | 토큰 유효 여부 |
| result.email | 선택 | string 또는 null | 마스킹된 이메일 (예: abc***@example.com) |
| result.expiresAt | 선택 | string (date-time) | 토큰 만료 시간 (UTC) |


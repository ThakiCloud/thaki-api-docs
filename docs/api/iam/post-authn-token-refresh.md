# Post Refresh

Access Token 갱신 — 쿠키 우선, body 폴백

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/token/refresh
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| refreshTokenRef | 선택 | string 또는 null | Refresh token reference (쿠키 전달 시 생략 가능). 길이 1~ |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |
| 503 Service Unavailable | 세션 저장소(Valkey) 일시 불가 — 재시도 가능 (Retry-After 참조). 세션은 Valkey가 SSOT이므로 장애 중에는 갱신할 수 없다 (ADR-0018) |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.accessToken | 필수 | string |  |
| result.refreshTokenRef | 필수 | string |  |
| result.expiresIn | 필수 | integer |  |
| result.refreshTokenExpiresIn | 필수 | integer |  |
| result.tokenType | 선택 | string | 기본값 "Bearer" |
| result.sessionId | 선택 | string 또는 null |  |


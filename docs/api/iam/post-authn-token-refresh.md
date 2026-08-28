# Access Token 갱신 — 쿠키 우선, body 폴백

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/public/token/refresh
```

## URI 매개변수

없습니다.

## 요청 헤더

이 API 는 인증 없이 호출합니다. 위 경로의 /public 접두를 그대로 사용하십시오. /public 없이 호출하면 게이트웨이가 자격증명을 요구해 401 을 반환합니다.

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

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

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


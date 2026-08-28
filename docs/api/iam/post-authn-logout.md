# Post Logout

로그아웃 및 세션 무효화 — 쿠키 우선 → body 폴백

로그아웃 의도 자체가 세션 종료이므로, 서버 측 처리 결과와 무관하게
클라이언트 쿠키는 항상 만료시킨다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/logout
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| accessToken | 선택 | string 또는 null | Bearer token |
| refreshTokenRef | 선택 | string 또는 null | Refresh token reference |

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
| result.success | 필수 | boolean |  |
| result.sessionId | 선택 | string 또는 null |  |
| result.message | 선택 | string 또는 null |  |


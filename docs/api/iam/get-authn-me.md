# Get Me

현재 인증된 사용자 정보 조회

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/me
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.valid | 필수 | boolean |  |
| result.userTpn | 선택 | string 또는 null |  |
| result.username | 선택 | string 또는 null |  |
| result.email | 선택 | string 또는 null |  |
| result.sessionId | 선택 | string 또는 null |  |
| result.roles | 선택 | array (string) |  |
| result.expiresAt | 선택 | string (date-time) |  |
| result.error | 선택 | string 또는 null |  |


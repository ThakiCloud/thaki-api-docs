# 모든 세션 강제 종료 (사용자 자신)

사용자가 자신의 모든 활성 세션을 강제로 종료합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/sessions/revoke-all
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | 모든 세션 취소 성공 |
| 401 Unauthorized | 인증 실패 |
| 404 Not Found | 활성 세션 없음 |
| 500 Internal Server Error | 내부 서버 오류 |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |


# 계정 잠금 리셋 (Path Parameter)

특정 사용자의 로그인 실패 카운트를 리셋합니다.

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/iam/authn/account-lockout/reset/{username}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| username | path | 필수 | string | 사용자명 또는 이메일. 사용자명 또는 이메일. 길이 1~255 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| orgId | 필수 | string | 조직 ID. 조직 ID. 길이 1~64 |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result.success | 필수 | boolean | 해제 성공 여부 |
| result.message | 필수 | string | 응답 메시지 |
| result.userTpn | 필수 | string | 사용자 TPN |


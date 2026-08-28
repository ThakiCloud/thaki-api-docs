# 정책 롤백

정책을 특정 버전으로 롤백합니다. 새로운 버전이 생성됩니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/policies/{policy_id}/versions/{version}:rollback
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| policy_id | path | 필수 | string |  |
| version | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| reason | 필수 | string | 롤백 사유. 길이 1~ |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


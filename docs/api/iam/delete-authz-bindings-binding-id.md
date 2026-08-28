# 바인딩 삭제

정책과 대상 간의 연결을 제거합니다.

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/iam/authz/bindings/{binding_id}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| binding_id | path | 필수 | string | 바인딩 ID (UUID 형식). 바인딩 ID (UUID 형식). 길이 36~36 |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 204 No Content | Successful Response |
| 404 Not Found | Not Found |
| 422 Unprocessable Entity | Validation Error |
| 500 Internal Server Error | Internal Server Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


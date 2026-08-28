# Role 수정

Role 정보를 수정합니다.

## HTTP 요청

```http
PATCH https://<your-console-host>/api/v1/iam/authz/roles/{role_id}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| role_id | path | 필수 | string | Role ID (UUID 형식). Role ID (UUID 형식). 길이 36~36 |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 선택 | string 또는 null | Role 이름. 길이 1~128 |
| description | 선택 | string 또는 null | Role 설명. 길이 0~500 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


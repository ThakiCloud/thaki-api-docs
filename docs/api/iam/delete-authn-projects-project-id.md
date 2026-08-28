# 프로젝트 삭제 (Soft Delete)

프로젝트를 소프트 삭제합니다. 실제 데이터는 삭제되지 않고 상태만 'deleted'로 변경됩니다.

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/iam/authn/projects/{project_id}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| project_id | path | 필수 | string | 프로젝트 ID. 프로젝트 ID. 길이 1~64 |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 204 No Content | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


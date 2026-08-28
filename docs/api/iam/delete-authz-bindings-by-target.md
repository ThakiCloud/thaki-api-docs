# 대상(TPN 등)으로 바인딩 삭제

정책 ID와 대상(TPN, Org, Project)을 사용하여 바인딩을 삭제합니다. bindingId 없이 삭제할 때 사용합니다.

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/iam/authz/bindings/by-target
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| policyId | 필수 | string | 정책 ID. 정책 ID |
| targetType | 필수 | string | 대상 타입 (tpn, org, project). 대상 타입 (tpn, org, project) |
| targetId | 필수 | string | 대상 ID (TPN 값 또는 orgId, projectId). 대상 ID (TPN 값 또는 orgId, projectId) |

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


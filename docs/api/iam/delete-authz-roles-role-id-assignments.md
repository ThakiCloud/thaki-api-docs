# 역할 ID와 TPN을 사용하여 RoleAssignment 삭제

Role ID와 TPN을 사용하여 RoleAssignment를 삭제합니다. AuthN 등 외부 서비스에서 assignmentId 없이 삭제할 때 사용합니다.

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/iam/authz/roles/{role_id}/assignments
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| role_id | path | 필수 | string |  |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| tpn | 필수 | string | 삭제할 대상 TPN |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 204 No Content | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


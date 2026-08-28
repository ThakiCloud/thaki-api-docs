# TPN에 할당 가능한 Role 목록 조회

특정 TPN에 할당 가능한 Role 목록을 조회합니다. exclude_assigned=true인 경우 이미 할당된 Role은 제외됩니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/roles/assignments/available
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| tpn | 필수 | string | 대상 TPN. 대상 TPN |
| orgId | 필수 | string | 조직 ID. 조직 ID |
| projectId | 선택 | string 또는 null | 프로젝트 ID. 프로젝트 ID |
| excludeAssigned | 선택 | boolean | 이미 할당된 Role 제외 여부. 이미 할당된 Role 제외 여부. 기본값 true |
| page | 선택 | integer | 페이지 번호. 페이지 번호. 기본값 1. 범위 1~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 10. 범위 1~100 |
| sort | 선택 | string 또는 null | 정렬 필드. 정렬 필드 |
| order | 선택 | string 또는 null | 정렬 방향 (asc \| desc). 정렬 방향 (asc \| desc) |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


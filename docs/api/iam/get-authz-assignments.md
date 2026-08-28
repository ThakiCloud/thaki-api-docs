# 전체 Role Assignment 목록 조회

전체 Role Assignment 목록을 조회합니다. page=0이면 전체 데이터 반환. roleName과 assignmentType 정보를 포함하며, AuthN API를 호출하여 추가 정보를 제공합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/assignments
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| orgId | 선택 | string 또는 null | 조직 ID 필터. 조직 ID 필터 |
| projectId | 선택 | string 또는 null | 프로젝트 ID 필터. 프로젝트 ID 필터 |
| roleId | 선택 | string 또는 null | Role ID 필터. Role ID 필터 |
| tpn | 선택 | string 또는 null | TPN 필터. TPN 필터 |
| page | 선택 | integer | 페이지 번호 (0이면 전체 조회). 페이지 번호 (0이면 전체 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 10. 범위 1~100 |
| includeDeleted | 선택 | boolean | 삭제된 항목 포함 여부. 삭제된 항목 포함 여부. 기본값 false |
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


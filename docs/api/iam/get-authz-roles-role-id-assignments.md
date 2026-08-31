# 역할에 할당된 TPN 목록 조회

Role에 할당된 TPN 목록을 조회합니다. roleName과 assignmentType(direct/group) 정보를 포함합니다.
AuthN API를 호출하여 그룹 멤버 수, 사용자 그룹, 마지막 로그인 시간 등 추가 정보를 제공합니다.

**쿼리 파라미터:**
- **assignmentType**: 할당 타입으로 필터링 (옵션)
  - `direct`: 사용자에게 직접 할당된 것만 조회
  - `group`: 그룹에 할당된 것만 조회
  - 미지정: 전체 조회

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/roles/{role_id}/assignments
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| role_id | path | 필수 | string |  |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| assignmentType | 선택 | string 또는 null | 할당 타입 필터 (direct: 사용자 직접 할당, group: 그룹 할당) |
| page | 선택 | integer | 페이지 번호 (0: 전체 조회, 1+: 페이징 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| includeDeleted | 선택 | boolean | 삭제된 항목 포함 여부. 기본값 false |
| sort | 선택 | string 또는 null | 정렬 필드 |
| order | 선택 | string 또는 null | 정렬 방향 (asc \| desc) |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


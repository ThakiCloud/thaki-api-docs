# 정책 목록 CSV export

정책 목록(목록 조회와 동일 필터)을 CSV 파일로 내보냅니다. 전체 행을 반환합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/policies/export/csv
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0=전체 조회). 페이지 번호 (0=전체 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string 또는 null | 정렬 필드. 정렬 필드 |
| order | 선택 | string 또는 null | 정렬 방향 (asc \| desc). 정렬 방향 (asc \| desc) |
| orgId | 선택 | string 또는 null | 조직 ID 필터 (미지정 시 현재 사용자 조직). 조직 ID 필터 (미지정 시 현재 사용자 조직) |
| projectId | 선택 | string 또는 null | 프로젝트 ID 필터. 프로젝트 ID 필터 |
| kind | 선택 | string 또는 null | 정책 종류 필터. 정책 종류 필터 |
| scope | 선택 | string 또는 null | 스코프 필터 (org, project). 스코프 필터 (org, project) |
| status | 선택 | string 또는 null | 상태 필터 (active, inactive). 상태 필터 (active, inactive) |
| tag | 선택 | string 또는 null | 태그 필터 (key=value). 태그 필터 (key=value) |
| mappedRoleId | 선택 | string 또는 null | 매핑 여부 확인용 Role ID (지정 시 isMapped 반환). 매핑 여부 확인용 Role ID (지정 시 isMapped 반환) |
| assigned | 선택 | boolean 또는 null | Assigned 필터 (true=principal에 연결된 정책만, false=미연결만, 미지정=전체). Assigned 필터 (true=principal에 연결된 정책만, false=미연결만, 미지정=전체) |
| search | 선택 | string 또는 null | 이름/설명 통합 검색. 이름/설명 통합 검색. 길이 2~ |
| name | 선택 | string 또는 null | 이름 부분 일치. 이름 부분 일치. 길이 2~ |
| description | 선택 | string 또는 null | 설명 부분 일치. 설명 부분 일치 |
| app | 선택 | string 또는 null | 앱 부분 일치. 앱 부분 일치 |
| role | 선택 | string 또는 null | 매핑된 역할명 부분 일치. 매핑된 역할명 부분 일치 |
| version | 선택 | string 또는 null | 버전 부분 일치. 버전 부분 일치 |
| type | 선택 | string 또는 null | 정책 타입 필터 (custom, built-in). 정책 타입 필터 (custom, built-in) |
| syncStatus | 선택 | string 또는 null | 동기화 상태 필터 (current, outdated). 동기화 상태 필터 (current, outdated) |
| createdAtGte | 선택 | string 또는 null | 생성일 이상 (ISO8601). 생성일 이상 (ISO8601) |
| createdAtLte | 선택 | string 또는 null | 생성일 이하 (ISO8601). 생성일 이하 (ISO8601) |
| editedAtGte | 선택 | string 또는 null | 수정일 이상 (ISO8601). 수정일 이상 (ISO8601) |
| editedAtLte | 선택 | string 또는 null | 수정일 이하 (ISO8601). 수정일 이하 (ISO8601) |
| userCountGte | 선택 | integer 또는 null | 사용자 수 이상. 사용자 수 이상. 범위 0~ |
| userCountLte | 선택 | integer 또는 null | 사용자 수 이하. 사용자 수 이하. 범위 0~ |
| userGroupCountGte | 선택 | integer 또는 null | 그룹 수 이상. 그룹 수 이상. 범위 0~ |
| userGroupCountLte | 선택 | integer 또는 null | 그룹 수 이하. 그룹 수 이하. 범위 0~ |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


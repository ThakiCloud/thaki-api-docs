# 정책 목록 조회

조직/프로젝트의 정책 목록을 조회합니다. 필터링, 페이지네이션, 정렬을 지원합니다. page=0이면 전체 조회.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/policies
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0=전체 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string 또는 null | 정렬 필드 |
| order | 선택 | string 또는 null | 정렬 방향 (asc \| desc) |
| orgId | 선택 | string 또는 null | 조직 ID 필터 (미지정 시 현재 사용자 조직) |
| projectId | 선택 | string 또는 null | 프로젝트 ID 필터 |
| kind | 선택 | string 또는 null | 정책 종류 필터 |
| scope | 선택 | string 또는 null | 스코프 필터 (org, project) |
| status | 선택 | string 또는 null | 상태 필터 (active, inactive) |
| tag | 선택 | string 또는 null | 태그 필터 (key=value) |
| mappedRoleId | 선택 | string 또는 null | 매핑 여부 확인용 Role ID (지정 시 isMapped 반환) |
| assigned | 선택 | boolean 또는 null | Assigned 필터 (true=principal에 연결된 정책만, false=미연결만, 미지정=전체) |
| search | 선택 | string 또는 null | 이름/설명 통합 검색. 길이 2~ |
| name | 선택 | string 또는 null | 이름 부분 일치. 길이 2~ |
| description | 선택 | string 또는 null | 설명 부분 일치 |
| app | 선택 | string 또는 null | 앱 부분 일치 |
| role | 선택 | string 또는 null | 매핑된 역할명 부분 일치 |
| version | 선택 | string 또는 null | 버전 부분 일치 |
| type | 선택 | string 또는 null | 정책 타입 필터 (custom, built-in) |
| syncStatus | 선택 | string 또는 null | 동기화 상태 필터 (current, outdated) |
| createdAtGte | 선택 | string 또는 null | 생성일 이상 (ISO8601) |
| createdAtLte | 선택 | string 또는 null | 생성일 이하 (ISO8601) |
| editedAtGte | 선택 | string 또는 null | 수정일 이상 (ISO8601) |
| editedAtLte | 선택 | string 또는 null | 수정일 이하 (ISO8601) |
| userCountGte | 선택 | integer 또는 null | 사용자 수 이상. 범위 0~ |
| userCountLte | 선택 | integer 또는 null | 사용자 수 이하. 범위 0~ |
| userGroupCountGte | 선택 | integer 또는 null | 그룹 수 이상. 범위 0~ |
| userGroupCountLte | 선택 | integer 또는 null | 그룹 수 이하. 범위 0~ |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].policyId | 필수 | string | 정책 ID |
| result.data[].orgId | 필수 | string | 조직 ID |
| result.data[].projectId | 선택 | string 또는 null | 프로젝트 ID |
| result.data[].name | 선택 | string 또는 null | 정책 이름 |
| result.data[].description | 선택 | string 또는 null | 정책 설명 |
| result.data[].kind | 필수 | string | 정책 종류 |
| result.data[].scope | 필수 | string | 스코프 (org, project) |
| result.data[].type | 필수 | string | 정책 타입 (custom, built-in) |
| result.data[].apps | 선택 | array (string) | 사용 App 목록 |
| result.data[].roles | 선택 | array (object) | 바인딩된 Role 목록 |
| result.data[].roles[].roleId | 필수 | string | Role ID |
| result.data[].roles[].name | 필수 | string | Role 이름 |
| result.data[].permissions | 선택 | array (object) | 권한 목록 (UI 확장 행 표시용: App/Partition/Resource/ActionClass) |
| result.data[].permissions[].app | 필수 | string | App 이름 (예: Compute, Storage) |
| result.data[].permissions[].partition | 선택 | string 또는 null | 파티션 (예: tenantA, *all) |
| result.data[].permissions[].resource | 필수 | string | 리소스 (예: vm/*, volume/*) |
| result.data[].permissions[].actionClass | 선택 | array (string) | Action 클래스 목록 (예: [Read, List, Write]) |
| result.data[].permissions[].actions | 선택 | array (string) | 상세 Action ID 목록 (예: [thaki:Compute.ReadVm]) |
| result.data[].permissions[].effect | 선택 | string | 권한 효과 (Allow \| Deny). Deny 권한도 노출된다(IAM0501). 기본값 "Allow" |
| result.data[].version | 필수 | string | 현재 버전 |
| result.data[].status | 필수 | string | 정책 상태 |
| result.data[].syncStatus | 선택 | string | 템플릿 대비 동기화 상태 (current, outdated). 기본값 "current" |
| result.data[].originTemplateId | 선택 | string 또는 null | 파생 원본 템플릿 ID (origin 미상이면 null) |
| result.data[].adminLevel | 선택 | string 또는 null | 어드민 레벨 (system_admin, admin, partition_admin) — 멤버/커스텀 정책은 null |
| result.data[].isMapped | 선택 | boolean 또는 null | 지정된 Role에 매핑 여부 (mappedRoleId 쿼리 시에만 반환) |
| result.data[].assigned | 선택 | boolean | 정책이 principal(사용자/그룹/역할)에 연결되었는지 여부. 기본값 false |
| result.data[].createdAt | 필수 | string | 생성 시각 |
| result.data[].updatedAt | 필수 | string | 수정 시각 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


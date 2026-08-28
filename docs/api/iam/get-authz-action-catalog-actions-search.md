# Action 검색

키워드로 Action을 검색합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/action-catalog/actions/search
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| q | 필수 | string | 검색어. 검색어. 길이 1~ |
| app | 선택 | string 또는 null | App 필터. App 필터 |
| method | 선택 | string 또는 null | HTTP Method 필터. HTTP Method 필터 |
| actionClass | 선택 | string 또는 null | Action Class 필터 (대소문자 무관, 예: Read, List, Write, Delete, Admin). Action Class 필터 (대소문자 무관, 예: Read, List, Write, Delete, Admin) |
| page | 선택 | integer | 페이지 번호 (0=전체 조회). 페이지 번호 (0=전체 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~1000 |
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

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].actionId | 필수 | string | Action ID (thaki:{App}.{Category}.{Alias}) |
| result.data[].app | 필수 | string | 애플리케이션 이름 (소문자) |
| result.data[].category | 필수 | string | 카테고리 (PascalCase) |
| result.data[].actionClass | 필수 | string | Action Class (List, Read, Write, Delete, Admin) |
| result.data[].alias | 필수 | string | Alias (PascalCase, action_id의 일부) |
| result.data[].apiMethod | 선택 | string 또는 null | HTTP 메서드 |
| result.data[].apiPath | 선택 | string 또는 null | API 경로 |
| result.data[].operationId | 선택 | string 또는 null | OpenAPI operationId |
| result.data[].resourceType | 선택 | string 또는 null | 리소스 타입 (instance, network 등) |
| result.data[].resourceIdParam | 선택 | string 또는 null | 리소스 ID 파라미터명 |
| result.data[].resourceIdSource | 선택 | string 또는 null | 리소스 ID 출처 (path, query) |
| result.data[].conditionParams | 선택 | array (string) | 정책 조건 파라미터 목록 |
| result.data[].createdAt | 필수 | string 또는 null |  |
| result.data[].createdBy | 필수 | string |  |
| result.data[].updatedAt | 필수 | string 또는 null |  |
| result.data[].updatedBy | 필수 | string |  |
| result.data[].notes | 필수 | string 또는 null |  |
| result.data[].catalogVersion | 필수 | string |  |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


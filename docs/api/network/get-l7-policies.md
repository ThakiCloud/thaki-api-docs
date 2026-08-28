# L7 Policy 목록 조회

L7 Policy 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/l7-policies
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| status | 선택 | array (string) | L7 Policy 상태 필터 (복수 선택 시 OR) |
| name | 선택 | array (string) | L7 Policy 이름 필터 |
| id | 선택 | array (string) | L7 Policy ID 필터 |
| behavior | 선택 | array (string) | L7 Policy 동작(behavior) 필터 |
| position | 선택 | array (integer) | L7 Policy 우선순위 필터 |
| adminStateUp | 선택 | array (boolean) | 관리자 상태 필터 |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼. 값: name, position |
| order | 선택 | string | 정렬 방향 asc/desc. 값: asc, desc |
| listenerId | 선택 | string 또는 null | Listener ID 필터 |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result.data[].id | 필수 | string | L7 Policy ID |
| result.data[].listenerId | 필수 | string | Listener ID |
| result.data[].behavior | 필수 | string | L7 Policy 동작(behavior) |
| result.data[].position | 필수 | integer | L7 Policy 우선순위 |
| result.data[].adminStateUp | 필수 | boolean | 관리자 상태 |
| result.data[].name | 선택 | string 또는 null | L7 Policy 이름 |
| result.data[].description | 선택 | string 또는 null | L7 Policy 설명 |
| result.data[].redirectPoolId | 선택 | string 또는 null | 리다이렉트 Pool ID |
| result.data[].redirectPoolName | 선택 | string 또는 null | 리다이렉트 Pool 이름 |
| result.data[].redirectUrl | 선택 | string 또는 null | 리다이렉트 URL |
| result.data[].redirectPrefix | 선택 | string 또는 null | 리다이렉트 URL prefix |
| result.data[].redirectHttpCode | 선택 | integer 또는 null | 리다이렉트 HTTP 코드 |
| result.data[].projectId | 선택 | string 또는 null | 프로젝트 ID |
| result.data[].status | 선택 | string 또는 null | 상태. 값: ONLINE, DEGRADED, OFFLINE, NO_MONITOR, OPERATING_ERROR, DRAINING, PROVISIONING_ERROR, CREATING, UPDATING, DELETING, UNKNOWN |
| result.data[].createdAt | 선택 | string (date-time) | 생성일시 |
| result.data[].updatedAt | 선택 | string (date-time) | 수정일시 |
| result.data[].rules | 선택 | array (object) | 연결된 규칙 목록 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


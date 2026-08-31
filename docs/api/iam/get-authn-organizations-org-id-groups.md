# 조직 내 그룹 목록 조회

조직 내 그룹 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/groups
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| org_id | path | 필수 | string | 조직 ID |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 선택 | array (string) | 그룹 이름 부분 일치 검색 (반복키 다중 값 OR: ?name=a&name=b) |
| status | 선택 | array (string) | 상태 필터 (active\|deleted\|all), 반복키 다중 값: ?status=active&status=deleted |
| sort | 선택 | string 또는 null |  |
| order | 선택 | string 또는 null |  |
| page | 선택 | integer | 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 기본값 10. 범위 1~100 |
| search | 선택 | string 또는 null |  |
| projectId | 선택 | string 또는 null |  |
| scope | 선택 | string 또는 null |  |
| type | 선택 | string 또는 null |  |
| tenantId | 선택 | string 또는 null |  |
| memberType | 선택 | string 또는 null |  |
| memberLookup | 선택 | string 또는 null |  |
| includeRoles | 선택 | boolean | 기본값 true |
| description | 선택 | string 또는 null |  |
| role | 선택 | string 또는 null |  |
| createdAtGt | 선택 | string 또는 null |  |
| createdAtGte | 선택 | string 또는 null |  |
| createdAtLt | 선택 | string 또는 null |  |
| createdAtLte | 선택 | string 또는 null |  |

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
| result.data[].groupId | 필수 | string |  |
| result.data[].tpn | 필수 | string |  |
| result.data[].orgId | 필수 | string |  |
| result.data[].projectId | 필수 | string 또는 null |  |
| result.data[].scope | 필수 | string |  |
| result.data[].service | 선택 | string 또는 null |  |
| result.data[].displayName | 필수 | string 또는 null |  |
| result.data[].description | 필수 | string 또는 null |  |
| result.data[].tags | 필수 | object 또는 null |  |
| result.data[].type | 필수 | string |  |
| result.data[].status | 필수 | string |  |
| result.data[].isBuiltin | 선택 | boolean | 기본값 false |
| result.data[].sourceTemplateId | 선택 | string 또는 null |  |
| result.data[].sourceTemplateVersion | 선택 | integer 또는 null |  |
| result.data[].syncStatus | 선택 | string 또는 null |  |
| result.data[].createdAt | 필수 | string |  |
| result.data[].createdBy | 선택 | string 또는 null |  |
| result.data[].memberCount | 선택 | integer | 기본값 0 |
| result.data[].roles | 선택 | array (object) |  |
| result.data[].policies | 선택 | array (object) |  |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


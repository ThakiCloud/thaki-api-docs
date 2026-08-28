# List Hpas

HPA 목록 조회

지정된 클러스터에서 HPA를 조회합니다.
namespace 파라미터가 없으면 전체 네임스페이스를 조회하고,
복수 지정 시 해당 네임스페이스들로 필터링합니다.
페이지네이션을 지원하여 대량 데이터를 효율적으로 반환합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/service-routing/hpa
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |
| namespace | 선택 | array (string) | 네임스페이스 목록 (선택, 복수 지정 가능: namespace=default&namespace=kube-system), 없으면 전체 네임스페이스 조회. 네임스페이스 목록 (선택, 복수 지정 가능: namespace=default&namespace=kube-system), 없으면 전체 네임스페이스 조회 |
| filterName | 선택 | array (string) | 이름 필터 목록 (선택, 복수 지정 가능: filterName=my-hpa&filterName=test). 부분일치(OR) 검색. 이름 필터 목록 (선택, 복수 지정 가능: filterName=my-hpa&filterName=test). 부분일치(OR) 검색 |
| page | 선택 | integer | 페이지 번호 (0이면 전체 반환). 페이지 번호 (0이면 전체 반환). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기 (최소 1, 최대 100). 페이지 크기 (최소 1, 최대 100). 기본값 10. 범위 1~100 |
| sortBy | 선택 | string | 정렬 기준 (name, namespace, workload, minReplicas, maxReplicas, currentReplicas, createdAt). 정렬 기준 (name, namespace, workload, minReplicas, maxReplicas, currentReplicas, createdAt). 값: name, namespace, workload, minReplicas, maxReplicas, currentReplicas, createdAt. 기본값 "createdAt" |
| sortOrder | 선택 | string | 정렬 순서 (asc, desc). 정렬 순서 (asc, desc). 값: asc, desc. 기본값 "desc" |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Domain-Id | 필수 | string | Domain ID. Domain ID |
| X-Domain-Name | 필수 | string | Domain Name. Domain Name |

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
| result.data[].name | 필수 | string | HPA 이름 |
| result.data[].namespace | 필수 | string | 네임스페이스 |
| result.data[].createdAt | 선택 | string (date-time) | 생성 시각 (RFC3339, UTC) |
| result.data[].age | 선택 | string | 생성 후 경과 시간. 기본값 "" |
| result.data[].status | 필수 | string | HPA 상태 (Error, Active, Processing) |
| result.data[].scaleTargetRefName | 선택 | string | ScaleTargetRef 이름. 기본값 "" |
| result.data[].scaleTargetRefKind | 선택 | string | ScaleTargetRef 종류. 기본값 "" |
| result.data[].minReplicas | 선택 | integer 또는 null | 최소 replica 수 |
| result.data[].maxReplicas | 선택 | integer 또는 null | 최대 replica 수 |
| result.data[].currentReplicas | 선택 | integer 또는 null | 현재 replica 수 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


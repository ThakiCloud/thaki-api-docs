# List Events

클러스터 Event 목록 조회

특정 클러스터의 Event 목록을 페이지네이션하여 조회합니다.
namespace 파라미터를 복수로 지정하여 여러 네임스페이스를 동시에 조회할 수 있습니다.
namespace를 지정하지 않으면 전체 네임스페이스의 Event를 조회합니다.
filterName 파라미터를 복수로 지정하여 이름 기준 부분일치(OR) 필터링이 가능합니다.
page=0이면 전체 목록을 반환합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/cluster/events
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0이면 전체 반환, 1부터 시작). 페이지 번호 (0이면 전체 반환, 1부터 시작). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기 (최소 1, 최대 100). 페이지 크기 (최소 1, 최대 100). 기본값 10. 범위 1~100 |
| filterName | 선택 | array (string) | 이벤트 이름 필터 목록 (선택, 복수 지정 가능: filterName=event1&filterName=event2). 부분일치(OR) 검색. 이벤트 이름 필터 목록 (선택, 복수 지정 가능: filterName=event1&filterName=event2). 부분일치(OR) 검색 |
| sortBy | 선택 | string | 정렬 기준 (name, namespace, lastSeen, type, reason, object, subObject, message, firstSeen, count). 정렬 기준 (name, namespace, lastSeen, type, reason, object, subObject, message, firstSeen, count). 값: name, namespace, lastSeen, type, reason, object, subObject, message, firstSeen, count. 기본값 "lastSeen" |
| sortOrder | 선택 | string | 정렬 순서 (asc, desc). 정렬 순서 (asc, desc). 값: asc, desc. 기본값 "desc" |
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |
| namespace | 선택 | array (string) | 네임스페이스 목록 (선택, 복수 지정 가능: namespace=default&namespace=kube-system), 없으면 전체 네임스페이스 조회. 네임스페이스 목록 (선택, 복수 지정 가능: namespace=default&namespace=kube-system), 없으면 전체 네임스페이스 조회 |
| resourceName | 선택 | string 또는 null | 리소스 이름 (선택). 리소스 이름 (선택). 길이 0~63 |

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
| result.data[].status | 선택 | string 또는 null | 이벤트 상태 (조건 없음이면 null) |
| result.data[].reason | 필수 | string | 이벤트 발생 이유 |
| result.data[].lastTimestamp | 필수 | string | 마지막 발생 시각 |
| result.data[].type | 필수 | string | 이벤트 타입 |
| result.data[].involvedObjectName | 필수 | string | 대상 오브젝트 이름 |
| result.data[].involvedObjectKind | 필수 | string | 대상 오브젝트 Kind. **디테일 페이지로 리다이렉트 가능한 리소스:** \| 카테고리 \| 리소스 \| \|----------\|--------\| \| Workloads \| Pod, Deployment, StatefulSet, DaemonSet, Job, CronJob \| \| Network \| Service, HorizontalPodAutoscaler, Ingress \| \| Storage \| PersistentVolumeClaim, PersistentVolume, StorageClass, ConfigMap, Secret \| \| Policy \| ResourceQuota, LimitRange, NetworkPolicy, PodDisruptionBudget \| |
| result.data[].namespace | 필수 | string | 네임스페이스 |
| result.data[].involvedObjectUid | 선택 | string 또는 null | 대상 오브젝트 UID |
| result.data[].subObject | 필수 | string | 서브 오브젝트 경로 |
| result.data[].source | 필수 | string | 이벤트 출처 컴포넌트 |
| result.data[].message | 필수 | string | 이벤트 메시지 |
| result.data[].firstTimestamp | 필수 | string | 최초 발생 시각 |
| result.data[].createdAt | 필수 | string | 생성 시각 |
| result.data[].count | 필수 | integer | 이벤트 발생 횟수 |
| result.data[].name | 필수 | string | 이벤트 이름 |
| result.data[].creationTimestamp | 필수 | string | 생성 타임스탬프 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


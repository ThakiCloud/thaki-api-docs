# List Clusters

클러스터 목록 조회

클러스터 목록을 페이지네이션하여 조회합니다.
filterName 파라미터를 복수로 지정하여 이름 기준 부분일치(OR) 필터링이 가능합니다.
status 파라미터를 지정하면 해당 상태의 클러스터만 조회합니다.
page=0이면 전체 목록을 반환합니다.

응답의 result.data[].status는 다음 상태값 중 하나입니다.
- PENDING: 요청 수락됨, 프로비저닝 시작 전
- PROVISIONING: 프로비저닝 진행 중
- ACTIVE: 모든 노드 프로비저닝 완료, 정상 운영 중
- ERROR: 프로비저닝/운영 중 오류 발생
- DELETING: 삭제 진행 중
- DELETED: 삭제 완료

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/cluster/clusters
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0이면 전체 반환, 1부터 시작). 페이지 번호 (0이면 전체 반환, 1부터 시작). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기 (최소 1, 최대 100). 페이지 크기 (최소 1, 최대 100). 기본값 10. 범위 1~100 |
| filterName | 선택 | array (string) | 클러스터 이름 필터 목록 (선택, 복수 지정 가능: filterName=test&filterName=prod). 부분일치(OR) 검색. 클러스터 이름 필터 목록 (선택, 복수 지정 가능: filterName=test&filterName=prod). 부분일치(OR) 검색 |
| status | 선택 | string 또는 null | 클러스터 상태 필터 (선택). 미지정/null/빈값이면 전체를 반환합니다. 가능 값: PENDING(요청 수락), PROVISIONING(프로비저닝 중), ACTIVE(정상 운영), ERROR(오류), DELETING(삭제 중), DELETED(삭제 완료).. 클러스터 상태 필터 (선택). 미지정/null/빈값이면 전체를 반환합니다. 가능 값: PENDING(요청 수락), PROVISIONING(프로비저닝 중), ACTIVE(정상 운영), ERROR(오류), DELETING(삭제 중), DELETED(삭제 완료).. 값: PENDING, PROVISIONING, ACTIVE, ERROR, DELETING, DELETED |
| sortBy | 선택 | string | 정렬 기준 (name, k8sVersion, createdAt). 정렬 기준 (name, k8sVersion, createdAt). 값: name, k8sVersion, createdAt. 기본값 "createdAt" |
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
| result.data[].id | 필수 | integer | 클러스터 ID |
| result.data[].status | 필수 | string | 목록 API 응답의 클러스터 상태. 가능 값: PENDING(요청 수락), PROVISIONING(프로비저닝 중), ACTIVE(정상 운영), ERROR(오류), DELETING(삭제 중), DELETED(삭제 완료). |
| result.data[].name | 필수 | string | 클러스터 이름 |
| result.data[].clusterType | 필수 | string | 클러스터 등록 유형 |
| result.data[].buttonText | 필수 | string | 사이드바 클러스터 버튼 텍스트 |
| result.data[].buttonColor | 필수 | string 또는 null | 사이드바 클러스터 버튼 색상(hex) |
| result.data[].errorEventType | 필수 | string 또는 null | ERROR 상태의 대표 원인 이벤트 타입 |
| result.data[].k8sVersion | 필수 | string | Kubernetes 버전 |
| result.data[].createdAt | 필수 | string | 생성 시간 (ISO 8601) |
| result.data[].cpuCount | 필수 | integer 또는 null | 전체 vCPU 합계 (cp_count*cp_cpu + wk_count*wk_cpu) |
| result.data[].memCount | 필수 | integer 또는 null | 전체 RAM 합계 (GiB) (cp_count*cp_ram + wk_count*wk_ram) |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


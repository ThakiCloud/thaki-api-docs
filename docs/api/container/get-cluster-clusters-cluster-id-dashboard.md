# Get Cluster Dashboard

클러스터 대시보드 정보를 조회합니다.

Basic Information과 Capacity 정보를 반환합니다.
metrics-server가 설치되지 않은 경우 capacity.metricsServerAvailable=false이고,
cpuUsed, memoryUsed의 used/percent 값이 0으로 반환됩니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/cluster/clusters/{cluster_id}/dashboard
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| cluster_id | path | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |

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
| 404 Not Found | 클러스터 또는 kubeConfig를 찾을 수 없음 |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.basicInformation | 필수 | object | 클러스터 기본 정보 |
| result.basicInformation.architecture | 필수 | string | CPU 아키텍처 |
| result.basicInformation.kubernetesVersion | 필수 | string | Kubernetes 버전 |
| result.basicInformation.workloadTotalCount | 필수 | integer | 워크로드 총 개수 (Deployment + StatefulSet + DaemonSet + Job + CronJob) |
| result.basicInformation.createdAt | 필수 | string | 클러스터 생성 시간 (ISO 8601) |
| result.basicInformation.deploymentCount | 필수 | integer | Deployment 개수 |
| result.basicInformation.nodeCount | 필수 | integer | 노드 개수 |
| result.capacity | 필수 | object | 클러스터 용량 정보 |
| result.capacity.metricsServerAvailable | 필수 | boolean | metrics-server 설치 여부 |
| result.capacity.cpuUsed | 필수 | object | CPU 실제 사용량 (metrics unavailable 시 used/percent는 0) |
| result.capacity.cpuUsed.used | 필수 | number 또는 null | 사용량 |
| result.capacity.cpuUsed.total | 필수 | number | 전체 용량 (allocatable 합계) |
| result.capacity.cpuUsed.unit | 필수 | string | 단위 |
| result.capacity.cpuUsed.percent | 필수 | number 또는 null | 사용률 (%) - total이 0이면 null |
| result.capacity.cpuReserved | 필수 | object | CPU 예약량 (Pod requests 합계) |
| result.capacity.cpuReserved.used | 필수 | number 또는 null | 사용량 |
| result.capacity.cpuReserved.total | 필수 | number | 전체 용량 (allocatable 합계) |
| result.capacity.cpuReserved.unit | 필수 | string | 단위 |
| result.capacity.cpuReserved.percent | 필수 | number 또는 null | 사용률 (%) - total이 0이면 null |
| result.capacity.memoryUsed | 필수 | object | 메모리 실제 사용량 (metrics unavailable 시 used/percent는 0) |
| result.capacity.memoryUsed.used | 필수 | number 또는 null | 사용량 |
| result.capacity.memoryUsed.total | 필수 | number | 전체 용량 (allocatable 합계) |
| result.capacity.memoryUsed.unit | 필수 | string | 단위 |
| result.capacity.memoryUsed.percent | 필수 | number 또는 null | 사용률 (%) - total이 0이면 null |
| result.capacity.memoryReserved | 필수 | object | 메모리 예약량 (Pod requests 합계) |
| result.capacity.memoryReserved.used | 필수 | number 또는 null | 사용량 |
| result.capacity.memoryReserved.total | 필수 | number | 전체 용량 (allocatable 합계) |
| result.capacity.memoryReserved.unit | 필수 | string | 단위 |
| result.capacity.memoryReserved.percent | 필수 | number 또는 null | 사용률 (%) - total이 0이면 null |
| result.capacity.pods | 필수 | object | Pod 사용량 |
| result.capacity.pods.used | 필수 | number 또는 null | 사용량 |
| result.capacity.pods.total | 필수 | number | 전체 용량 (allocatable 합계) |
| result.capacity.pods.unit | 필수 | string | 단위 |
| result.capacity.pods.percent | 필수 | number 또는 null | 사용률 (%) - total이 0이면 null |


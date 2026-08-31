# 노드 상세 조회

Node 상세 조회

PRD(`docs/prd/cluster/prd_node_detail.md`)에 정의된 Node 상세 필드를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/cluster/nodes/{node_name}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| node_name | path | 필수 | string | Node 이름. 길이 0~253 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 범위 1~ |

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 보내도 무시됩니다.

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
| result | 필수 | object | 결과 데이터 |
| result.status | 필수 | string | Node 상태 |
| result.internalIp | 필수 | string 또는 null | Internal IP |
| result.kubernetesVersion | 필수 | string | Kubernetes 버전 |
| result.os | 필수 | string | OS 이미지 |
| result.containerRuntime | 필수 | string | Container runtime |
| result.labels | 선택 | object | 레이블 |
| result.annotations | 선택 | object | 어노테이션 |
| result.createdAt | 필수 | string | 생성 시각 (ISO 8601, UTC) |
| result.healthCheck | 필수 | object | Health check |
| result.healthCheck.pidPressure | 필수 | boolean | PIDPressure 정상 여부 |
| result.healthCheck.diskPressure | 필수 | boolean | DiskPressure 정상 여부 |
| result.healthCheck.memPressure | 필수 | boolean | MemoryPressure 정상 여부 |
| result.healthCheck.kubelet | 필수 | boolean | Ready 정상 여부 |
| result.metricInfo | 필수 | object | Metric info |
| result.metricInfo.cpu | 필수 | object | CPU 메트릭 |
| result.metricInfo.cpu.total | 필수 | integer | CPU 코어 수 |
| result.metricInfo.cpu.usage | 필수 | number 또는 null | 사용 중인 CPU 코어( metrics-server 필요 ) |
| result.metricInfo.cpu.percent | 필수 | number 또는 null | CPU 사용률 (%) (metrics-server 필요) |
| result.metricInfo.mem | 필수 | object | 메모리 메트릭 |
| result.metricInfo.mem.total | 필수 | integer | 전체 메모리 (Gi) |
| result.metricInfo.mem.usage | 필수 | integer 또는 null | 사용 중인 메모리 (Gi) (metrics-server 필요) |
| result.metricInfo.mem.unit | 필수 | string | 단위 |
| result.metricInfo.mem.percent | 필수 | number 또는 null | 메모리 사용률 (%) (metrics-server 필요) |
| result.metricInfo.pods | 필수 | object | Pod 메트릭 |
| result.metricInfo.pods.total | 필수 | integer | 최대 Pod 수 |
| result.metricInfo.pods.usage | 필수 | integer | 실행 중인 Pod 수 |
| result.metricInfo.pods.percent | 필수 | number 또는 null | Pod 사용률 (%) |
| result.basicInfo | 필수 | object | Basic info |
| result.basicInfo.architecture | 필수 | string | CPU 아키텍처 |
| result.basicInfo.bootId | 필수 | string | boot ID |
| result.basicInfo.containerRuntime | 필수 | string | 컨테이너 런타임 |
| result.basicInfo.osImage | 필수 | string | OS 이미지 |
| result.basicInfo.kernelVersion | 필수 | string | 커널 버전 |
| result.basicInfo.kubeProxyVersion | 필수 | string | kube-proxy 버전 |
| result.basicInfo.kubeletVersion | 필수 | string | kubelet 버전 |
| result.basicInfo.machineId | 필수 | string | machine ID |
| result.basicInfo.operatingSystem | 필수 | string | 운영체제 |
| result.basicInfo.systemUuid | 필수 | string | system UUID |
| result.taints | 선택 | array (object) | Taints |
| result.taints[].key | 필수 | string | taint key |
| result.taints[].value | 필수 | string 또는 null | taint value |
| result.taints[].effect | 필수 | string | taint effect |


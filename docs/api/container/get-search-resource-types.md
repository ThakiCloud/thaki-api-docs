# Resource Type Search 모달에서 사용할 리소스별 전체 개수 조회

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/search/resource-types
```

## URI 매개변수

없습니다.

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
| result.clusters | 필수 | integer | 삭제되지 않은 클러스터 수 |
| result.namespaces | 필수 | integer | Namespace 개수 |
| result.nodes | 필수 | integer | Node 개수 |
| result.events | 선택 | integer 또는 null | Event 개수 (계산하지 않음) |
| result.deployments | 필수 | integer | Deployment 개수 |
| result.statefulSets | 필수 | integer | StatefulSet 개수 |
| result.daemonSets | 필수 | integer | DaemonSet 개수 |
| result.jobs | 필수 | integer | Job 개수 |
| result.cronJobs | 필수 | integer | CronJob 개수 |
| result.pods | 필수 | integer | Pod 개수 |
| result.services | 필수 | integer | Service 개수 |
| result.ingresses | 필수 | integer | Ingress 개수 |
| result.horizontalPodAutoscalers | 필수 | integer | HorizontalPodAutoscaler 개수 |
| result.persistentVolumes | 필수 | integer | PersistentVolume 개수 |
| result.persistentVolumeClaims | 필수 | integer | PersistentVolumeClaim 개수 |
| result.storageClasses | 필수 | integer | StorageClass 개수 |
| result.configMaps | 필수 | integer | ConfigMap 개수 |
| result.secrets | 필수 | integer | Secret 개수 |
| result.limitRanges | 필수 | integer | LimitRange 개수 |
| result.resourceQuotas | 필수 | integer | ResourceQuota 개수 |
| result.networkPolicies | 필수 | integer | NetworkPolicy 개수 |
| result.podDisruptionBudgets | 필수 | integer | PodDisruptionBudget 개수 |


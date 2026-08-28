# Get Service Detail

Service 상세 정보 조회

특정 클러스터와 네임스페이스에서 Service의 상세 정보를 조회합니다.
Pod, Event, Endpoints, 관련 리소스 등 운영에 필요한 모든 정보를 포함합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/service-routing/service/{service_name}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| service_name | path | 필수 | string | Service 이름. Service 이름. 길이 0~63 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |
| namespace | 선택 | string | 네임스페이스. 네임스페이스. 기본값 "default". 길이 0~63 |

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
| result | 필수 | object | 결과 데이터 |
| result.name | 필수 | string | Service 이름 |
| result.namespace | 필수 | string | 네임스페이스 |
| result.description | 선택 | string | 설명. 기본값 "" |
| result.type | 필수 | string | Service 타입 |
| result.labels | 선택 | object | 레이블 |
| result.annotations | 선택 | object | 어노테이션 |
| result.createdAt | 선택 | string (date-time) | 생성 시각 |
| result.status | 선택 | string | Service 상태 (Active, Processing, Error). 기본값 "Active" |
| result.target | 선택 | array (string) | Target 목록 |
| result.pods | 선택 | array (object) | Pod 목록 |
| result.pods[].status | 필수 | string | Pod 상태 |
| result.pods[].name | 필수 | string | Pod 이름 |
| result.pods[].namespace | 필수 | string | 네임스페이스 |
| result.pods[].image | 필수 | string | 컨테이너 이미지 |
| result.pods[].ready | 필수 | string | Ready 상태 |
| result.pods[].restarts | 필수 | integer | 재시작 횟수 |
| result.pods[].ip | 필수 | string | Pod IP |
| result.pods[].node | 필수 | string | 노드 이름 |
| result.pods[].age | 필수 | string | 생성 후 경과 시간 |
| result.ports | 선택 | array (object) | 포트 목록 |
| result.ports[].name | 선택 | string 또는 null | 포트 이름 |
| result.ports[].port | 필수 | integer | Service 포트 |
| result.ports[].protocol | 필수 | string | 프로토콜 |
| result.ports[].target | 필수 | integer | Target 포트 |
| result.ports[].nodePort | 선택 | integer 또는 null | NodePort |
| result.ports[].publicPorts | 선택 | array (string) | Public 포트 목록 |
| result.selectors | 선택 | object | Selector |
| result.conditions | 선택 | array (object) | Condition 목록 |
| result.conditions[].condition | 필수 | string | Condition 타입 |
| result.conditions[].status | 필수 | string | Condition 상태 |
| result.conditions[].updated | 필수 | string (date-time) | 마지막 업데이트 시각 |
| result.conditions[].message | 필수 | string | 메시지 |
| result.conditions[].reason | 필수 | string | 사유 |
| result.relatedResources | 선택 | object 또는 null | 관련 리소스 |
| result.relatedResources.referredToBy | 선택 | array (object) | 이 Service를 참조하는 리소스 목록 |
| result.relatedResources.referredToBy[].state | 필수 | string | 리소스 상태 |
| result.relatedResources.referredToBy[].type | 필수 | string | 리소스 타입 |
| result.relatedResources.referredToBy[].name | 필수 | string | 리소스 이름 |
| result.relatedResources.referredToBy[].namespace | 필수 | string | 네임스페이스 |
| result.relatedResources.refersTo | 선택 | array (object) | 이 Service가 참조하는 리소스 목록 |
| result.relatedResources.refersTo[].state | 필수 | string | 리소스 상태 |
| result.relatedResources.refersTo[].type | 필수 | string | 리소스 타입 |
| result.relatedResources.refersTo[].name | 필수 | string | 리소스 이름 |
| result.relatedResources.refersTo[].namespace | 필수 | string | 네임스페이스 |
| result.ipAddress | 선택 | object 또는 null | IP 주소 정보 |
| result.ipAddress.clusterIp | 선택 | string 또는 null | Cluster IP |
| result.ipAddress.loadBalancerIp | 선택 | string 또는 null | LoadBalancer IP |
| result.ipAddress.externalIps | 선택 | array (string) | External IP 목록 |
| result.sessionAffinity | 선택 | string | Session Affinity. 기본값 "None" |


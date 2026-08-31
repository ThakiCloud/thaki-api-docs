# 특정 클러스터의 상세 정보 조회

특정 클러스터의 상세 정보를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/cluster/clusters/{cluster_id}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| cluster_id | path | 필수 | integer | 클러스터 ID. 범위 1~ |

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 보내도 무시됩니다.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 404 Not Found | 클러스터 또는 kubeConfig를 찾을 수 없음 |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.status | 필수 | string | 클러스터 상태. 가능 값: PENDING(요청 수락), PROVISIONING(프로비저닝 중), ACTIVE(정상 운영), ERROR(오류), DELETING(삭제 중), DELETED(삭제 완료) |
| result.clusterTitle | 필수 | string | 클러스터 이름 |
| result.clusterType | 필수 | string | 클러스터 등록 유형 |
| result.buttonText | 필수 | string | 사이드바 클러스터 버튼 텍스트 |
| result.buttonColor | 필수 | string 또는 null | 사이드바 클러스터 버튼 색상(hex) |
| result.k8sVersion | 필수 | string | Kubernetes 버전 |
| result.containerNetwork | 필수 | string | 컨테이너 네트워크 |
| result.createdAt | 필수 | string | 생성 시간 (ISO 8601) |
| result.nodeType | 필수 | string | 노드 타입 |
| result.isExternalEtcd | 필수 | boolean | 외부 ETCD 사용 여부 |
| result.volumeType | 필수 | string 또는 null | 볼륨 타입 |
| result.volumeSize | 필수 | integer 또는 null | 볼륨 크기 (GB) |
| result.argocdClusterName | 필수 | string 또는 null | ArgoCD cluster 등록 이름 |
| result.argocdRegistrationStatus | 필수 | string | ArgoCD 등록/동기화 상태 |
| result.argocdRegistrationMessage | 필수 | string 또는 null | ArgoCD 등록/동기화 메시지 |
| result.errorEventType | 필수 | string 또는 null | ERROR 상태의 대표 원인 이벤트 타입 |
| result.currentEventType | 필수 | string 또는 null | 현재 상태에서 표시할 이벤트 타입 |
| result.network | 필수 | object | 네트워크 정보 |
| result.network.externalNetworkId | 필수 | string | 외부 네트워크 ID |
| result.network.internalNetworkId | 필수 | string | 내부 네트워크 ID |
| result.network.internalNetworkSubnetId | 필수 | string | 내부 서브넷 ID |
| result.network.externalNetworkName | 필수 | string 또는 null | 외부 네트워크 이름 |
| result.network.internalNetworkName | 필수 | string 또는 null | 내부 네트워크 이름 |
| result.network.internalNetworkSubnetName | 필수 | string 또는 null | 내부 서브넷 이름 |
| result.network.internalNetworkSubnetCidr | 필수 | string 또는 null | 내부 서브넷 CIDR |
| result.cp | 필수 | object | Control Plane 노드 정보 |
| result.cp.count | 필수 | integer | 노드 수 |
| result.cp.imageId | 필수 | string | 이미지 ID |
| result.cp.imageName | 필수 | string 또는 null | 이미지 이름 |
| result.cp.flavorId | 필수 | string | Flavor ID |
| result.cp.flavorName | 필수 | string 또는 null | Flavor 이름 |
| result.cp.cpu | 필수 | integer 또는 null | vCPU 수 |
| result.cp.ram | 필수 | integer 또는 null | RAM (GiB) |
| result.cp.ramDisplay | 필수 | string 또는 null | RAM 표시 (GiB 문자열) |
| result.cp.disk | 필수 | integer 또는 null | Disk (GB) |
| result.wk | 필수 | object | Worker 노드 정보 |
| result.wk.count | 필수 | integer | 노드 수 |
| result.wk.imageId | 필수 | string | 이미지 ID |
| result.wk.imageName | 필수 | string 또는 null | 이미지 이름 |
| result.wk.flavorId | 필수 | string | Flavor ID |
| result.wk.flavorName | 필수 | string 또는 null | Flavor 이름 |
| result.wk.cpu | 필수 | integer 또는 null | vCPU 수 |
| result.wk.ram | 필수 | integer 또는 null | RAM (GiB) |
| result.wk.ramDisplay | 필수 | string 또는 null | RAM 표시 (GiB 문자열) |
| result.wk.disk | 필수 | integer 또는 null | Disk (GB) |


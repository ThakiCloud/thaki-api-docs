# 클러스터 프로비저닝 요청 (Stage 1)

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/container/cluster/cluster-provisioning
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더가 필요합니다. X-Partition-Id 를 보내십시오(과도기 동안 X-Project-Id 로도 받습니다). 두 헤더가 모두 없으면 422 를 반환합니다.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterTitle | 필수 | string | 클러스터 이름. Kubernetes DNS-1123 label 규칙에 따라 소문자 영문, 숫자, 하이픈(-)만 허용하며 영문 또는 숫자로 시작하고 끝나야 합니다. 길이 1~63 |
| description | 선택 | string | 클러스터 설명. 기본값 "". 길이 0~500 |
| k8sVersion | 필수 | string | Kubernetes 버전 |
| maxPods | 선택 | integer | 노드당 최대 Pod 수 (110~150). 기본값 150. 범위 110~150 |
| podCidr | 선택 | string | 선택 필드. 일반 클러스터 생성 요청에서는 전송하지 않아도 됩니다. 생략 시 기본값 10.16.0.0/16을 사용합니다. 직접 전송하는 경우 유효한 CIDR(network address)이어야 합니다. 기본값 "10.16.0.0/16" |
| svcCidr | 선택 | string | 선택 필드. 일반 클러스터 생성 요청에서는 전송하지 않아도 됩니다. 생략 시 기본값 10.96.0.0/12를 사용합니다. 직접 전송하는 경우 유효한 CIDR(network address)이어야 합니다. 기본값 "10.96.0.0/12" |
| isExternalEtcd | 선택 | boolean | 외부 ETCD 사용 여부. 기본값 false |
| cp | 필수 | object | Control Plane 노드 설정 |
| cp.imageId | 필수 | string | 이미지 ID |
| cp.imageName | 필수 | string | 이미지 이름 |
| cp.flavorId | 필수 | string | Flavor ID |
| cp.flavorName | 선택 | string 또는 null | Flavor 이름 |
| cp.cpu | 필수 | integer | vCPU 수 |
| cp.ram | 필수 | integer | RAM (MB) |
| cp.disk | 필수 | integer | Disk (GB) |
| cp.loginType | 필수 | string | 로그인 타입. 값: password, keypair |
| cp.loginName | 선택 | string 또는 null | 로그인 이름 (password 타입) |
| cp.loginPassword | 선택 | string 또는 null | You must use a mix of at least 3 types (uppercase/lowercase letters, numbers, special characters), and the length must be between 8-32 characters. Note that your Login Name, spaces, and specific symbols (" ' &lt; &gt; & \ \|) are not allowed |
| cp.keypairName | 선택 | string 또는 null | 키페어 이름 (keypair 타입) |
| cp.count | 선택 | integer | CP 인스턴스 수 (1~10). 기본값 3. 범위 1~10 |
| wk | 필수 | object | Worker 노드 설정 |
| wk.imageId | 필수 | string | 이미지 ID |
| wk.imageName | 필수 | string | 이미지 이름 |
| wk.flavorId | 필수 | string | Flavor ID |
| wk.flavorName | 선택 | string 또는 null | Flavor 이름 |
| wk.cpu | 필수 | integer | vCPU 수 |
| wk.ram | 필수 | integer | RAM (MB) |
| wk.disk | 필수 | integer | Disk (GB) |
| wk.loginType | 필수 | string | 로그인 타입. 값: password, keypair |
| wk.loginName | 선택 | string 또는 null | 로그인 이름 (password 타입) |
| wk.loginPassword | 선택 | string 또는 null | You must use a mix of at least 3 types (uppercase/lowercase letters, numbers, special characters), and the length must be between 8-32 characters. Note that your Login Name, spaces, and specific symbols (" ' &lt; &gt; & \ \|) are not allowed |
| wk.keypairName | 선택 | string 또는 null | 키페어 이름 (keypair 타입) |
| wk.count | 선택 | integer | WK 인스턴스 수 (1~100). 기본값 3. 범위 1~100 |
| wk.nodeType | 선택 | string | Worker 노드 타입. 생략 시 vm. 허용값: vm, bm. bm이면 network.externalNetworkSubnetId, rtExtGwIp, rtExtGwMac이 필수입니다. 값: vm, bm |
| network | 필수 | object | 네트워크 설정 |
| network.externalNetworkId | 필수 | string | 외부 네트워크 ID (Floating IP용) |
| network.externalNetworkSubnetId | 선택 | string 또는 null | 외부 네트워크 서브넷 ID. wk.nodeType=bm일 때만 필수이며, VM worker 요청에서는 생략합니다 |
| network.internalNetworkId | 필수 | string | 내부 네트워크 ID |
| network.internalNetworkSubnetId | 필수 | string | 내부 서브넷 ID |
| network.externalNetworkName | 필수 | string | 외부 네트워크 이름 (예: extnet-01) |
| network.internalNetworkName | 필수 | string | 내부 네트워크 이름 (예: net-01) |
| network.internalNetworkSubnetName | 필수 | string | 내부 서브넷 이름 (예: subnet-01) |
| network.internalNetworkSubnetCidr | 필수 | string | 내부 서브넷 CIDR (예: 10.6.21.0/28) |
| network.rtExtGwIp | 선택 | string 또는 null | 외부 GW IP. wk.nodeType=bm일 때만 필수인 Hairpin 값입니다. VM worker 요청에서는 생략합니다. 값이 있으면 유효한 IP address여야 합니다 |
| network.rtExtGwMac | 선택 | string 또는 null | 외부 GW MAC. wk.nodeType=bm일 때만 필수인 Hairpin 값입니다. VM worker 요청에서는 생략합니다. 형식: aa:bb:cc:dd:ee:ff |
| volume | 선택 | object 또는 null | 외부 볼륨 설정 |
| volume.volumeType | 선택 | string 또는 null | 볼륨 타입 (이름). 외부 ETCD 사용 시 서버에서 도메인 기준으로 재설정합니다 |
| volume.volumeTypeId | 선택 | string 또는 null | 볼륨 타입 ID. 외부 ETCD 사용 시 서버에서 도메인 기준으로 재설정합니다 |
| volume.volumeSize | 선택 | integer 또는 null | 볼륨 크기 (GB, 10~1000). 범위 10~1000 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 202 Accepted | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 202

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.clusterId | 필수 | integer | 클러스터 ID |
| result.clusterUuid | 필수 | string | 클러스터 UUID |
| result.clusterTitle | 필수 | string | 클러스터 이름 |
| result.message | 필수 | string | 응답 메시지 |


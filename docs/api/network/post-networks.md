# Create Network

네트워크를 생성합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/networks
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 필수 | string | 네트워크 이름. 길이 1~255 |
| description | 선택 | string 또는 null | 길이 0~500 |
| availableZone | 선택 | string 또는 null | 가용 영역 이름 |
| mtu | 선택 | integer 또는 null | MTU. 범위 68~9000 |
| adminStateUp | 선택 | boolean | 관리 상태 활성화 여부. 기본값 true |
| portSecurityEnabled | 선택 | boolean | 포트 시큐리티 활성화 여부. 기본값 true |
| createSubnet | 선택 | object 또는 null | 서브넷 생성 옵션. 비어 있으면 서브넷을 생성하지 않습니다 |
| createSubnet.name | 선택 | string 또는 null | 서브넷 이름 |
| createSubnet.cidr | 선택 | string 또는 null | 서브넷 CIDR |
| createSubnet.ipVersion | 선택 | integer 또는 null | IP 버전 (기본값 4) |
| createSubnet.enableDhcp | 선택 | boolean 또는 null | DHCP 활성화 여부 |
| createSubnet.gatewayIp | 선택 | string 또는 null | 게이트웨이 IP |
| createSubnet.dnsNameservers | 선택 | array (string) | DNS 서버 목록 |
| createSubnet.allocationPools | 선택 | array (object) | 할당 풀 목록 |
| createSubnet.allocationPools[].start | 필수 | string | 할당 풀 시작 IP |
| createSubnet.allocationPools[].end | 필수 | string | 할당 풀 종료 IP |
| createSubnet.hostRoutes | 선택 | array (object) | 호스트 라우트 목록 |
| createSubnet.hostRoutes[].destination | 필수 | string | 라우트 목적지 CIDR |
| createSubnet.hostRoutes[].nexthop | 필수 | string | 라우트 넥스트홉 IP |
| createSubnet.ipv6AddressMode | 선택 | string 또는 null | IPv6 주소 모드 |
| createSubnet.ipv6RaMode | 선택 | string 또는 null | IPv6 RA 모드 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | 네트워크가 생성되었습니다. |
| 207 Multi-Status | Partial success (e.g. network created but subnet failed) |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌·사용 중) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.status | 필수 | string | 값: success, partial |
| result.network | 선택 | object 또는 null | 네트워크 단건 응답 데이터 (subnets 제외) |
| result.network.id | 선택 | string 또는 null |  |
| result.network.name | 선택 | string 또는 null |  |
| result.network.projectId | 선택 | string 또는 null |  |
| result.network.description | 선택 | string 또는 null |  |
| result.network.status | 선택 | string 또는 null | 네트워크 상태. 값: ACTIVE, DOWN, BUILDING, ERROR |
| result.network.adminStateUp | 선택 | boolean 또는 null |  |
| result.network.shared | 선택 | boolean 또는 null |  |
| result.network.routerExternal | 선택 | boolean 또는 null |  |
| result.network.portSecurityEnabled | 선택 | boolean 또는 null |  |
| result.network.isDefault | 선택 | boolean 또는 null |  |
| result.network.mtu | 선택 | integer 또는 null |  |
| result.network.availabilityZones | 선택 | array (string) |  |
| result.network.availabilityZoneHints | 선택 | array (string) |  |
| result.network.ipv4AddressScope | 선택 | string 또는 null |  |
| result.network.ipv6AddressScope | 선택 | string 또는 null |  |
| result.network.revisionNumber | 선택 | integer 또는 null |  |
| result.network.tenantId | 선택 | string 또는 null |  |
| result.network.providerNetworkType | 선택 | string 또는 null |  |
| result.network.providerPhysicalNetwork | 선택 | string 또는 null |  |
| result.network.providerSegmentationId | 선택 | integer 또는 null |  |
| result.network.createdAt | 선택 | string (date-time) |  |
| result.network.updatedAt | 선택 | string (date-time) |  |
| result.subnet | 선택 | object 또는 null | 서브넷 상세 응답 |
| result.subnet.id | 선택 | string 또는 null |  |
| result.subnet.name | 선택 | string 또는 null |  |
| result.subnet.projectId | 선택 | string 또는 null |  |
| result.subnet.tenantId | 선택 | string 또는 null |  |
| result.subnet.networkId | 선택 | string 또는 null |  |
| result.subnet.description | 선택 | string 또는 null |  |
| result.subnet.ipVersion | 선택 | integer 또는 null |  |
| result.subnet.cidr | 선택 | string 또는 null |  |
| result.subnet.gatewayIp | 선택 | string 또는 null |  |
| result.subnet.enableDhcp | 선택 | boolean 또는 null |  |
| result.subnet.dnsNameservers | 선택 | array (string) |  |
| result.subnet.allocationPools | 선택 | array (object) |  |
| result.subnet.allocationPools[].start | 필수 | string |  |
| result.subnet.allocationPools[].end | 필수 | string |  |
| result.subnet.hostRoutes | 선택 | array (object) |  |
| result.subnet.hostRoutes[].destination | 필수 | string |  |
| result.subnet.hostRoutes[].nexthop | 필수 | string |  |
| result.subnet.serviceTypes | 선택 | array (string) |  |
| result.subnet.segmentId | 선택 | string 또는 null |  |
| result.subnet.subnetpoolId | 선택 | string 또는 null |  |
| result.subnet.ipv6RaMode | 선택 | string 또는 null |  |
| result.subnet.ipv6AddressMode | 선택 | string 또는 null |  |
| result.subnet.createdAt | 선택 | string (date-time) |  |
| result.subnet.updatedAt | 선택 | string (date-time) |  |
| result.subnet.revisionNumber | 선택 | integer 또는 null |  |
| result.subnet.portCount | 선택 | integer 또는 null | 서브넷에 연결된 포트 수 |
| result.subnet.networkName | 선택 | string 또는 null | 서브넷이 속한 네트워크 이름 |
| result.operations | 선택 | array (object) |  |
| result.operations[].resource | 필수 | string |  |
| result.operations[].status | 필수 | string |  |
| result.operations[].id | 선택 | string 또는 null |  |
| result.operations[].error | 선택 | string 또는 null |  |


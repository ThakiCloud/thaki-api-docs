# Create Subnet

서브넷을 생성합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/subnets
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 필수 | string | 서브넷 이름 |
| networkId | 필수 | string | 네트워크 ID |
| cidr | 필수 | string | 서브넷 CIDR |
| ipVersion | 필수 | integer | IP 버전 |
| gatewayIp | 선택 | string 또는 null | 게이트웨이 IP |
| enableDhcp | 선택 | boolean 또는 null | DHCP 활성화 여부 |
| allocationPools | 선택 | array (object) | 할당 풀 목록 |
| allocationPools[].start | 필수 | string | 할당 풀 시작 IP |
| allocationPools[].end | 필수 | string | 할당 풀 종료 IP |
| dnsNameservers | 선택 | array (string) | DNS 서버 목록 |
| hostRoutes | 선택 | array (object) | 호스트 라우트 목록 |
| hostRoutes[].destination | 필수 | string | 라우트 목적지 CIDR |
| hostRoutes[].nexthop | 필수 | string | 라우트 넥스트홉 IP |
| ipv6AddressMode | 선택 | string 또는 null | IPv6 주소 모드 |
| ipv6RaMode | 선택 | string 또는 null | IPv6 RA 모드 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌·사용 중) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.id | 선택 | string 또는 null |  |
| result.name | 선택 | string 또는 null |  |
| result.projectId | 선택 | string 또는 null |  |
| result.tenantId | 선택 | string 또는 null |  |
| result.networkId | 선택 | string 또는 null |  |
| result.description | 선택 | string 또는 null |  |
| result.ipVersion | 선택 | integer 또는 null |  |
| result.cidr | 선택 | string 또는 null |  |
| result.gatewayIp | 선택 | string 또는 null |  |
| result.enableDhcp | 선택 | boolean 또는 null |  |
| result.dnsNameservers | 선택 | array (string) |  |
| result.allocationPools | 선택 | array (object) |  |
| result.allocationPools[].start | 필수 | string |  |
| result.allocationPools[].end | 필수 | string |  |
| result.hostRoutes | 선택 | array (object) |  |
| result.hostRoutes[].destination | 필수 | string |  |
| result.hostRoutes[].nexthop | 필수 | string |  |
| result.serviceTypes | 선택 | array (string) |  |
| result.segmentId | 선택 | string 또는 null |  |
| result.subnetpoolId | 선택 | string 또는 null |  |
| result.ipv6RaMode | 선택 | string 또는 null |  |
| result.ipv6AddressMode | 선택 | string 또는 null |  |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |
| result.revisionNumber | 선택 | integer 또는 null |  |
| result.portCount | 선택 | integer 또는 null | 서브넷에 연결된 포트 수 |
| result.networkName | 선택 | string 또는 null | 서브넷이 속한 네트워크 이름 |


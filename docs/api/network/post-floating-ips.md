# Create Floating Ip

Floating IP를 생성합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/floating-ips
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| floatingNetworkId | 필수 | string | Floating IP를 할당할 외부 네트워크 ID. 길이 1~ |
| subnetId | 선택 | string 또는 null | 서브넷 ID |
| floatingIpAddress | 선택 | string 또는 null | 할당할 특정 Floating IP 주소 |
| portId | 선택 | string 또는 null | 연결할 포트 ID |
| fixedIpAddress | 선택 | string 또는 null | 포트의 고정 IP 주소 (생략 시 변경 없음) |
| description | 선택 | string 또는 null | Floating IP 설명 |
| dnsDomain | 선택 | string 또는 null | DNS 도메인 (Zone 이름) |
| dnsName | 선택 | string 또는 null | DNS 레코드 이름 |
| origin | 선택 | string 또는 null | 생성 주체 origin |
| originName | 선택 | string 또는 null | 생성 주체 이름 |
| originId | 선택 | string 또는 null | 생성 주체 ID |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.id | 필수 | string |  |
| result.floatingIpAddress | 선택 | string 또는 null |  |
| result.floatingNetworkId | 필수 | string |  |
| result.floatingNetworkName | 선택 | string 또는 null |  |
| result.portId | 선택 | string 또는 null |  |
| result.fixedIpAddress | 선택 | string 또는 null |  |
| result.routerId | 선택 | string 또는 null |  |
| result.routerName | 선택 | string 또는 null |  |
| result.status | 필수 | string | Floating IP 상태.. 값: AVAILABLE, IN_USE, ERROR |
| result.description | 선택 | string 또는 null |  |
| result.dnsDomain | 선택 | string 또는 null |  |
| result.dnsName | 선택 | string 또는 null |  |
| result.qosPolicyId | 선택 | string 또는 null |  |
| result.qosPolicyName | 선택 | string 또는 null |  |
| result.ingressBandwidthLimitKbps | 선택 | integer 또는 null |  |
| result.egressBandwidthLimitKbps | 선택 | integer 또는 null |  |
| result.portDetail | 선택 | object 또는 null | Floating IP에서 반환하는 포트 상세 정보를 감싸는 DTO. |
| result.portDetail.name | 선택 | string 또는 null |  |
| result.portDetail.networkId | 선택 | string 또는 null |  |
| result.portDetail.networkName | 선택 | string 또는 null |  |
| result.portDetail.macAddress | 선택 | string 또는 null |  |
| result.portDetail.adminStateUp | 선택 | boolean 또는 null |  |
| result.portDetail.status | 선택 | string 또는 null | 포트 상태 (Skyline 기준).. 값: ACTIVE, DOWN, BUILD, ERROR |
| result.portDetail.deviceId | 선택 | string 또는 null |  |
| result.portDetail.deviceOwner | 선택 | string 또는 null |  |
| result.portDetail.deviceName | 선택 | string 또는 null |  |
| result.portDetail.deviceType | 선택 | string 또는 null | Floating IP 연결 리소스 타입.. 값: INSTANCE, LOAD_BALANCER, PORT, OTHERS, UNBOUNDED |
| result.projectId | 선택 | string 또는 null |  |
| result.tenantId | 선택 | string 또는 null |  |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |
| result.revisionNumber | 선택 | integer 또는 null |  |
| result.origin | 선택 | string | 기본값 "compute" |
| result.originName | 선택 | string 또는 null |  |
| result.originId | 선택 | string 또는 null |  |


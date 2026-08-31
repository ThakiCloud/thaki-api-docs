# Floating IP 단건 조회

Floating IP 단건을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/floating-ips/{floatingIpId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| floatingIpId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result.id | 필수 | string |  |
| result.floatingIpAddress | 선택 | string 또는 null |  |
| result.floatingNetworkId | 필수 | string |  |
| result.floatingNetworkName | 선택 | string 또는 null |  |
| result.portId | 선택 | string 또는 null |  |
| result.fixedIpAddress | 선택 | string 또는 null |  |
| result.routerId | 선택 | string 또는 null |  |
| result.routerName | 선택 | string 또는 null |  |
| result.status | 필수 | string | Floating IP 상태. 값: AVAILABLE, IN_USE, ERROR |
| result.description | 선택 | string 또는 null |  |
| result.dnsDomain | 선택 | string 또는 null |  |
| result.dnsName | 선택 | string 또는 null |  |
| result.qosPolicyId | 선택 | string 또는 null |  |
| result.qosPolicyName | 선택 | string 또는 null |  |
| result.ingressBandwidthLimitKbps | 선택 | integer 또는 null |  |
| result.egressBandwidthLimitKbps | 선택 | integer 또는 null |  |
| result.portDetail | 선택 | object 또는 null | Floating IP에서 반환하는 포트 상세 정보를 감싸는 DTO |
| result.portDetail.name | 선택 | string 또는 null |  |
| result.portDetail.networkId | 선택 | string 또는 null |  |
| result.portDetail.networkName | 선택 | string 또는 null |  |
| result.portDetail.macAddress | 선택 | string 또는 null |  |
| result.portDetail.adminStateUp | 선택 | boolean 또는 null |  |
| result.portDetail.status | 선택 | string 또는 null | 포트 상태 (Skyline 기준). 값: ACTIVE, DOWN, BUILD, ERROR |
| result.portDetail.deviceId | 선택 | string 또는 null |  |
| result.portDetail.deviceOwner | 선택 | string 또는 null |  |
| result.portDetail.deviceName | 선택 | string 또는 null |  |
| result.portDetail.deviceType | 선택 | string 또는 null | Floating IP 연결 리소스 타입. 값: INSTANCE, LOAD_BALANCER, PORT, OTHERS, UNBOUNDED |
| result.projectId | 선택 | string 또는 null |  |
| result.tenantId | 선택 | string 또는 null |  |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |
| result.revisionNumber | 선택 | integer 또는 null |  |
| result.origin | 선택 | string | 기본값 "compute" |
| result.originName | 선택 | string 또는 null |  |
| result.originId | 선택 | string 또는 null |  |


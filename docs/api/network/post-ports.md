# 포트 생성

포트를 생성합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/ports
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| networkId | 필수 | string | 연결할 네트워크 ID |
| name | 선택 | string 또는 null | 포트 이름 |
| description | 선택 | string 또는 null | 포트 설명 |
| macAddress | 선택 | string 또는 null | 명시하지 않으면 MAC 주소는 자동으로 할당됩니다 |
| portSecurityEnabled | 선택 | boolean 또는 null | 포트 시큐리티 활성화 여부 |
| securityGroups | 선택 | array (string) | 보안 그룹 ID 목록 |
| fixedIps | 선택 | array (object) | 수동으로 IP를 지정하려면 서브넷과 IP 주소를 함께 입력합니다 |
| fixedIps[].subnetId | 필수 | string | 서브넷 ID |
| fixedIps[].ipAddress | 선택 | string 또는 null | 고정 IP 주소 |
| portType | 선택 | string 또는 null | 포트 타입 (예: normal, direct) |
| bindingProfile | 선택 | object 또는 null | 포트 바인딩 프로파일 |

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
| result.description | 선택 | string 또는 null |  |
| result.tenantId | 선택 | string 또는 null | 테넌트(프로젝트) ID |
| result.networkId | 선택 | string 또는 null |  |
| result.networkName | 선택 | string 또는 null |  |
| result.deviceOwner | 선택 | string 또는 null |  |
| result.deviceId | 선택 | string 또는 null |  |
| result.deviceName | 선택 | string 또는 null |  |
| result.adminStateUp | 선택 | boolean 또는 null |  |
| result.status | 선택 | string 또는 null | 포트 상태 (Skyline 기준). 값: ACTIVE, DOWN, BUILD, ERROR |
| result.macAddress | 선택 | string 또는 null |  |
| result.portSecurityEnabled | 선택 | boolean 또는 null |  |
| result.securityGroups | 선택 | array (object) |  |
| result.securityGroups[].id | 필수 | string |  |
| result.securityGroups[].name | 선택 | string 또는 null |  |
| result.fixedIps | 선택 | array (object) |  |
| result.fixedIps[].subnetId | 필수 | string |  |
| result.fixedIps[].subnetCidr | 선택 | string 또는 null |  |
| result.fixedIps[].subnetName | 선택 | string 또는 null |  |
| result.fixedIps[].ipAddress | 선택 | string 또는 null |  |
| result.fixedIps[].floatingIp | 선택 | string 또는 null |  |
| result.bindingVnicType | 선택 | string 또는 null |  |
| result.bindingProfile | 선택 | object |  |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |
| result.bindingHostId | 선택 | string 또는 null |  |
| result.bindingVifType | 선택 | string 또는 null |  |
| result.allowedAddressPairs | 선택 | array (object) |  |
| result.qosPolicyId | 선택 | string 또는 null |  |
| result.qosPolicyName | 선택 | string 또는 null |  |
| result.ingressBandwidthLimitKbps | 선택 | integer 또는 null |  |
| result.egressBandwidthLimitKbps | 선택 | integer 또는 null |  |
| result.dnsName | 선택 | string 또는 null |  |
| result.dnsAssignment | 선택 | array (object) |  |
| result.dataPlaneStatus | 선택 | string 또는 null |  |
| result.resourceRequest | 선택 | object |  |
| result.trunkDetails | 선택 | object |  |
| result.ipv6AddressMode | 선택 | string 또는 null |  |
| result.ipv6RaMode | 선택 | string 또는 null |  |
| result.allocationPools | 선택 | array (object) |  |
| result.allocationPools[].start | 필수 | string |  |
| result.allocationPools[].end | 필수 | string |  |
| result.hostRoutes | 선택 | array (object) |  |
| result.hostRoutes[].destination | 필수 | string |  |
| result.hostRoutes[].nexthop | 필수 | string |  |
| result.connectable | 선택 | boolean | 연결 가능 여부. 기본값 true |
| result.reason | 선택 | string 또는 null | 연결 불가 사유 코드 (IN_USE, MISSING_FIXED_IP, UNAVAILABLE_STATUS). 값: IN_USE, MISSING_FIXED_IP, UNAVAILABLE_STATUS |


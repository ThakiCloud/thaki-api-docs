# List Instance Sg Candidates Ports

인스턴스 SG 후보 포트 목록을 조회합니다.

- device_id 필수: 해당 인스턴스에 속한 포트만 조회
- 기본 정렬: port_security_enabled=True 우선 정렬
- sort 쿼리 명시 시: port_security_enabled 우선 정렬 무시하고 해당 sort만 적용

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/ports/instance-sg-candidates
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| status | 선택 | array (string) | 포트 상태 필터 (복수 선택 시 OR). 포트 상태 필터 (복수 선택 시 OR) |
| name | 선택 | array (string) | 포트 이름 필터. 포트 이름 필터 |
| id | 선택 | array (string) | 포트 ID 필터. 포트 ID 필터 |
| networkName | 선택 | array (string) | 포트 네트워크 이름 필터. 포트 네트워크 이름 필터 |
| networkId | 선택 | array (string) | 포트 네트워크 ID 필터. 포트 네트워크 ID 필터 |
| fixedIp | 선택 | array (string) | 포트 고정 IP 필터. 포트 고정 IP 필터 |
| macAddress | 선택 | array (string) | MAC 주소 필터. MAC 주소 필터 |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string 또는 null | 정렬 대상 컬럼 (미지정 시 port_security_enabled 우선 정렬). 정렬 대상 컬럼 (미지정 시 port_security_enabled 우선 정렬). 값: createdAt, name, id, networkName, connectable |
| order | 선택 | string | 정렬 방향 asc/desc. 정렬 방향 asc/desc. 값: asc, desc |
| deviceId | 필수 | string | 인스턴스 디바이스 ID (필수). 인스턴스 디바이스 ID (필수) |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].id | 선택 | string 또는 null |  |
| result.data[].name | 선택 | string 또는 null |  |
| result.data[].description | 선택 | string 또는 null |  |
| result.data[].tenantId | 선택 | string 또는 null | 테넌트(프로젝트) ID |
| result.data[].networkId | 선택 | string 또는 null |  |
| result.data[].networkName | 선택 | string 또는 null |  |
| result.data[].deviceOwner | 선택 | string 또는 null |  |
| result.data[].deviceId | 선택 | string 또는 null |  |
| result.data[].deviceName | 선택 | string 또는 null |  |
| result.data[].adminStateUp | 선택 | boolean 또는 null |  |
| result.data[].status | 선택 | string 또는 null | 포트 상태 (Skyline 기준).. 값: ACTIVE, DOWN, BUILD, ERROR |
| result.data[].macAddress | 선택 | string 또는 null |  |
| result.data[].portSecurityEnabled | 선택 | boolean 또는 null |  |
| result.data[].securityGroups | 선택 | array (object) |  |
| result.data[].securityGroups[].id | 필수 | string |  |
| result.data[].securityGroups[].name | 선택 | string 또는 null |  |
| result.data[].fixedIps | 선택 | array (object) |  |
| result.data[].fixedIps[].subnetId | 필수 | string |  |
| result.data[].fixedIps[].subnetCidr | 선택 | string 또는 null |  |
| result.data[].fixedIps[].subnetName | 선택 | string 또는 null |  |
| result.data[].fixedIps[].ipAddress | 선택 | string 또는 null |  |
| result.data[].fixedIps[].floatingIp | 선택 | string 또는 null |  |
| result.data[].bindingVnicType | 선택 | string 또는 null |  |
| result.data[].bindingProfile | 선택 | object |  |
| result.data[].createdAt | 선택 | string (date-time) |  |
| result.data[].updatedAt | 선택 | string (date-time) |  |
| result.data[].bindingHostId | 선택 | string 또는 null |  |
| result.data[].bindingVifType | 선택 | string 또는 null |  |
| result.data[].allowedAddressPairs | 선택 | array (object) |  |
| result.data[].qosPolicyId | 선택 | string 또는 null |  |
| result.data[].qosPolicyName | 선택 | string 또는 null |  |
| result.data[].ingressBandwidthLimitKbps | 선택 | integer 또는 null |  |
| result.data[].egressBandwidthLimitKbps | 선택 | integer 또는 null |  |
| result.data[].dnsName | 선택 | string 또는 null |  |
| result.data[].dnsAssignment | 선택 | array (object) |  |
| result.data[].dataPlaneStatus | 선택 | string 또는 null |  |
| result.data[].resourceRequest | 선택 | object |  |
| result.data[].trunkDetails | 선택 | object |  |
| result.data[].ipv6AddressMode | 선택 | string 또는 null |  |
| result.data[].ipv6RaMode | 선택 | string 또는 null |  |
| result.data[].allocationPools | 선택 | array (object) |  |
| result.data[].allocationPools[].start | 필수 | string |  |
| result.data[].allocationPools[].end | 필수 | string |  |
| result.data[].hostRoutes | 선택 | array (object) |  |
| result.data[].hostRoutes[].destination | 필수 | string |  |
| result.data[].hostRoutes[].nexthop | 필수 | string |  |
| result.data[].connectable | 선택 | boolean | 연결 가능 여부. 기본값 true |
| result.data[].reason | 선택 | string 또는 null | 연결 불가 사유 코드 (IN_USE, MISSING_FIXED_IP, UNAVAILABLE_STATUS). 값: IN_USE, MISSING_FIXED_IP, UNAVAILABLE_STATUS |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


# List Floating Ip Connectable Load Balancers

Floating IP 연결 후보 LoadBalancer 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/floating-ips/{floatingIpId}/load-balancers/connectable
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| floatingIpId | path | 필수 | string |  |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~100 |
| status | 선택 | array (string) | LoadBalancer 상태 필터 (ONLINE/OFFLINE/DEGRADED). LoadBalancer 상태 필터 (ONLINE/OFFLINE/DEGRADED) |
| name | 선택 | array (string) | LoadBalancer 이름 필터. LoadBalancer 이름 필터 |
| id | 선택 | array (string) | LoadBalancer ID 필터. LoadBalancer ID 필터 |
| vipAddress | 선택 | array (string) | VIP 주소 필터. VIP 주소 필터 |
| sort | 선택 | string 또는 null | 정렬 대상 컬럼. 정렬 대상 컬럼. 값: name, vipAddress |
| order | 선택 | string | 정렬 방향 asc/desc. 정렬 방향 asc/desc. 값: asc, desc |

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
| result.data[].loadBalancerId | 필수 | string |  |
| result.data[].loadBalancerName | 선택 | string 또는 null |  |
| result.data[].status | 선택 | string 또는 null | Octavia 리소스 상태. OpenStack Octavia의 operating_status와 provisioning_status를 비즈니스 관점의 단일 상태로 통합한 Enum.. 값: ONLINE, DEGRADED, OFFLINE, NO_MONITOR, OPERATING_ERROR, DRAINING, PROVISIONING_ERROR, CREATING, UPDATING, DELETING, UNKNOWN |
| result.data[].adminStateUp | 필수 | boolean |  |
| result.data[].vipAddress | 선택 | string 또는 null |  |
| result.data[].vipPortId | 선택 | string 또는 null |  |
| result.data[].vipNetworkId | 선택 | string 또는 null |  |
| result.data[].vipNetworkName | 선택 | string 또는 null |  |
| result.data[].vipSubnetId | 선택 | string 또는 null |  |
| result.data[].vipSubnetName | 선택 | string 또는 null |  |
| result.data[].vipSubnetCidr | 선택 | string 또는 null |  |
| result.data[].floatingIpSelectable | 필수 | boolean |  |
| result.data[].floatingIpDisabledReason | 선택 | string 또는 null | Fixed IP Floating IP 연결 불가 사유.. 값: ALREADY_CONNECTED, NETWORK_UNREACHABLE, FIXED_IP_EXTERNAL_NETWORK |
| result.data[].fixedIps | 선택 | array (object) |  |
| result.data[].fixedIps[].ipAddress | 선택 | string 또는 null |  |
| result.data[].fixedIps[].subnetId | 선택 | string 또는 null |  |
| result.data[].fixedIps[].subnetCidr | 선택 | string 또는 null |  |
| result.data[].fixedIps[].subnetName | 선택 | string 또는 null |  |
| result.data[].fixedIps[].floatingIp | 선택 | string 또는 null |  |
| result.data[].fixedIps[].connectable | 필수 | boolean |  |
| result.data[].fixedIps[].reason | 선택 | string 또는 null | Fixed IP Floating IP 연결 불가 사유.. 값: ALREADY_CONNECTED, NETWORK_UNREACHABLE, FIXED_IP_EXTERNAL_NETWORK |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


# List Floating Ip Connectable Instances

Floating IP 연결 후보 인스턴스 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/floating-ips/{floatingIpId}/instances/connectable
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
| status | 선택 | array (string) | 인스턴스 상태 필터 (ACTIVE/SHUTOFF/PAUSED/SUSPENDED). 인스턴스 상태 필터 (ACTIVE/SHUTOFF/PAUSED/SUSPENDED) |
| name | 선택 | array (string) | 인스턴스 이름 필터. 인스턴스 이름 필터 |
| id | 선택 | array (string) | 인스턴스 ID 필터. 인스턴스 ID 필터 |
| fixedIp | 선택 | array (string) | Fixed IP 필터. Fixed IP 필터 |
| network | 선택 | array (string) | 네트워크 필터. 네트워크 필터 |
| lockStatus | 선택 | array (string) | 인스턴스 잠금 상태 필터 (LOCKED/UNLOCKED). 인스턴스 잠금 상태 필터 (LOCKED/UNLOCKED) |
| sort | 선택 | string 또는 null | 정렬 대상 컬럼. 정렬 대상 컬럼. 값: name |
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
| result.data[].instanceId | 필수 | string |  |
| result.data[].instanceName | 선택 | string 또는 null |  |
| result.data[].status | 선택 | string 또는 null |  |
| result.data[].locked | 필수 | boolean |  |
| result.data[].networks | 선택 | array (object) |  |
| result.data[].networks[].networkId | 필수 | string |  |
| result.data[].networks[].networkName | 선택 | string 또는 null |  |
| result.data[].floatingIpSelectable | 필수 | boolean |  |
| result.data[].floatingIpDisabledReason | 선택 | string 또는 null | Floating IP instance 선택 불가 사유.. 값: ALREADY_CONNECTED, NETWORK_UNREACHABLE, FIXED_IP_EXTERNAL_NETWORK, INSTANCE_UNAVAILABLE |
| result.data[].totalPortCount | 필수 | integer |  |
| result.data[].totalFixedIpCount | 필수 | integer |  |
| result.data[].connectablePortCount | 필수 | integer |  |
| result.data[].connectableFixedIpCount | 필수 | integer |  |
| result.data[].fixedIps | 선택 | array (object) |  |
| result.data[].fixedIps[].portId | 선택 | string 또는 null |  |
| result.data[].fixedIps[].portName | 선택 | string 또는 null |  |
| result.data[].fixedIps[].ipAddress | 선택 | string 또는 null |  |
| result.data[].fixedIps[].macAddress | 선택 | string 또는 null |  |
| result.data[].fixedIps[].networkId | 선택 | string 또는 null |  |
| result.data[].fixedIps[].networkName | 선택 | string 또는 null |  |
| result.data[].fixedIps[].subnetId | 필수 | string |  |
| result.data[].fixedIps[].subnetCidr | 선택 | string 또는 null |  |
| result.data[].fixedIps[].subnetName | 선택 | string 또는 null |  |
| result.data[].fixedIps[].status | 선택 | string 또는 null | 포트 상태 (Skyline 기준).. 값: ACTIVE, DOWN, BUILD, ERROR |
| result.data[].fixedIps[].floatingIp | 선택 | string 또는 null |  |
| result.data[].fixedIps[].externalNetworks | 선택 | array (string) |  |
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


# LoadBalancer 목록 조회

LoadBalancer 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/load-balancers
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| status | 선택 | array (string) | LoadBalancer 상태 필터 (복수 선택 시 OR) |
| name | 선택 | array (string) | LoadBalancer 이름 필터 |
| id | 선택 | array (string) | LoadBalancer ID 필터 |
| vipAddress | 선택 | array (string) | VIP 주소 필터 |
| ownedNetworkName | 선택 | array (string) | 소유 네트워크 이름 필터 |
| ownedNetworkId | 선택 | array (string) | 소유 네트워크 ID 필터 |
| floatingIp | 선택 | array (string) | 연결된 Floating IP 주소 필터 |
| floatingIpId | 선택 | array (string) | 연결된 Floating IP ID 필터 |
| listenerName | 선택 | array (string) | 연결된 Listener 이름 필터 |
| listenerId | 선택 | array (string) | 연결된 Listener ID 필터 |
| description | 선택 | array (string) | LoadBalancer 설명 필터 |
| origin | 선택 | array (string) | LoadBalancer 생성 주체 origin 필터 |
| poolName | 선택 | array (string) | 연결된 Pool 이름 필터 |
| poolId | 선택 | array (string) | 연결된 Pool ID 필터 |
| createdAtGte | 선택 | string 또는 null | 생성 일시 시작 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtLte | 선택 | string 또는 null | 생성 일시 종료 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtRange | 선택 | array (string) | 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨 |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼. 값: name, ownedNetwork, createdAt, id, description |
| order | 선택 | string | 정렬 방향 (asc/desc). 값: asc, desc |
| vipSubnetId | 선택 | string 또는 null | VIP 서브넷 ID 필터 |

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
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].id | 필수 | string |  |
| result.data[].vipNetworkName | 선택 | string 또는 null |  |
| result.data[].vipSubnetName | 선택 | string 또는 null |  |
| result.data[].name | 필수 | string |  |
| result.data[].status | 선택 | string 또는 null | Octavia 리소스 상태. OpenStack Octavia의 operating_status와 provisioning_status를 비즈니스 관점의 단일 상태로 통합한 Enum. 값: ONLINE, DEGRADED, OFFLINE, NO_MONITOR, OPERATING_ERROR, DRAINING, PROVISIONING_ERROR, CREATING, UPDATING, DELETING, UNKNOWN |
| result.data[].adminStateUp | 필수 | boolean |  |
| result.data[].projectId | 필수 | string |  |
| result.data[].vipSubnetId | 필수 | string |  |
| result.data[].description | 필수 | string 또는 null |  |
| result.data[].createdAt | 필수 | string (date-time) |  |
| result.data[].updatedAt | 필수 | string (date-time) |  |
| result.data[].vipAddress | 필수 | string 또는 null |  |
| result.data[].vipPortId | 필수 | string 또는 null |  |
| result.data[].vipNetworkId | 필수 | string 또는 null |  |
| result.data[].additionalVips | 필수 | array (object) |  |
| result.data[].listeners | 필수 | array (object) |  |
| result.data[].listeners[].id | 필수 | string |  |
| result.data[].listeners[].name | 선택 | string 또는 null |  |
| result.data[].listeners[].protocol | 선택 | string 또는 null |  |
| result.data[].listeners[].protocolPort | 선택 | integer 또는 null |  |
| result.data[].listeners[].adminStateUp | 선택 | boolean 또는 null |  |
| result.data[].pools | 필수 | array (object) |  |
| result.data[].provider | 필수 | string 또는 null |  |
| result.data[].flavorId | 필수 | string 또는 null |  |
| result.data[].vipQosPolicyId | 필수 | string 또는 null |  |
| result.data[].availabilityZone | 필수 | string 또는 null |  |
| result.data[].floatingIp | 선택 | object 또는 null | FloatingIP 상세 정보 응답 |
| result.data[].floatingIp.id | 필수 | string |  |
| result.data[].floatingIp.floatingIpAddress | 선택 | string 또는 null |  |
| result.data[].floatingIp.status | 선택 | string 또는 null |  |
| result.data[].floatingIp.portId | 선택 | string 또는 null |  |
| result.data[].floatingIp.fixedIpAddress | 선택 | string 또는 null |  |
| result.data[].origin | 선택 | string | 기본값 "compute" |
| result.data[].originName | 선택 | string 또는 null |  |
| result.data[].originId | 선택 | string 또는 null |  |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


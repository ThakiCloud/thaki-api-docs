# List Subnets

서브넷 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/subnets
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 선택 | array (string) | 서브넷 이름 필터. 서브넷 이름 필터 |
| id | 선택 | array (string) | 서브넷 ID 필터. 서브넷 ID 필터 |
| cidr | 선택 | array (string) | 서브넷 CIDR 필터. 서브넷 CIDR 필터 |
| gatewayIp | 선택 | array (string) | 게이트웨이 IP 필터. 게이트웨이 IP 필터 |
| portCount | 선택 | integer 또는 null | 포트 수 필터. 포트 수 필터. 범위 0~ |
| createdAtGte | 선택 | string 또는 null | 생성 일시 시작 필터 (포함), ISO8601 YYYY-MM-DD. 생성 일시 시작 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtLte | 선택 | string 또는 null | 생성 일시 종료 필터 (포함), ISO8601 YYYY-MM-DD. 생성 일시 종료 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtRange | 선택 | array (string) | 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨. 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨 |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼. 정렬 대상 컬럼. 값: name, gatewayIp, portCount, createdAt |
| order | 선택 | string | 정렬 방향 asc/desc. 정렬 방향 asc/desc. 값: asc, desc |
| networkId | 선택 | string 또는 null | 필터링할 네트워크 ID. 필터링할 네트워크 ID |

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
| result.data[].projectId | 선택 | string 또는 null |  |
| result.data[].tenantId | 선택 | string 또는 null |  |
| result.data[].networkId | 선택 | string 또는 null |  |
| result.data[].description | 선택 | string 또는 null |  |
| result.data[].ipVersion | 선택 | integer 또는 null |  |
| result.data[].cidr | 선택 | string 또는 null |  |
| result.data[].gatewayIp | 선택 | string 또는 null |  |
| result.data[].enableDhcp | 선택 | boolean 또는 null |  |
| result.data[].dnsNameservers | 선택 | array (string) |  |
| result.data[].allocationPools | 선택 | array (object) |  |
| result.data[].allocationPools[].start | 필수 | string |  |
| result.data[].allocationPools[].end | 필수 | string |  |
| result.data[].hostRoutes | 선택 | array (object) |  |
| result.data[].hostRoutes[].destination | 필수 | string |  |
| result.data[].hostRoutes[].nexthop | 필수 | string |  |
| result.data[].serviceTypes | 선택 | array (string) |  |
| result.data[].segmentId | 선택 | string 또는 null |  |
| result.data[].subnetpoolId | 선택 | string 또는 null |  |
| result.data[].ipv6RaMode | 선택 | string 또는 null |  |
| result.data[].ipv6AddressMode | 선택 | string 또는 null |  |
| result.data[].createdAt | 선택 | string (date-time) |  |
| result.data[].updatedAt | 선택 | string (date-time) |  |
| result.data[].revisionNumber | 선택 | integer 또는 null |  |
| result.data[].portCount | 선택 | integer 또는 null | 서브넷에 연결된 포트 수 |
| result.data[].networkName | 선택 | string 또는 null | 서브넷이 속한 네트워크 이름 |
| result.data[].isGatewayUsed | 선택 | boolean | 게이트웨이 IP 사용 여부. 기본값 false |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


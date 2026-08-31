# 라우터 목록 조회

라우터 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/routers
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| status | 선택 | array (string) | 라우터 상태 필터 (복수 선택 시 OR) |
| name | 선택 | array (string) | 라우터 이름 필터 |
| id | 선택 | array (string) | 라우터 ID 필터 |
| description | 선택 | array (string) | 라우터 설명 필터 |
| externalGateway | 선택 | string 또는 null | 외부 게이트웨이 연결 상태 (OPEN/CLOSE). 값: OPEN, CLOSE |
| externalFixedIp | 선택 | array (string) | 외부 고정 IP 필터 |
| externalNetworkName | 선택 | array (string) | 외부 네트워크 이름 필터 |
| externalNetworkId | 선택 | array (string) | 외부 네트워크 ID 필터 |
| adminStateUp | 선택 | string 또는 null | 관리자 상태 필터 (UP/DOWN). 값: UP, DOWN |
| createdAtGte | 선택 | string 또는 null | 생성 일시 시작 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtLte | 선택 | string 또는 null | 생성 일시 종료 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtRange | 선택 | array (string) | 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨 |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼. 값: createdAt, name, id, externalFixedIp, externalNetwork |
| order | 선택 | string | 정렬 방향 asc/desc. 값: asc, desc |

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
| result.data[].id | 선택 | string 또는 null |  |
| result.data[].name | 선택 | string 또는 null |  |
| result.data[].description | 선택 | string 또는 null |  |
| result.data[].projectId | 선택 | string 또는 null |  |
| result.data[].status | 선택 | string 또는 null | 라우터 상태. 값: ACTIVE, ERROR |
| result.data[].adminStateUp | 선택 | boolean 또는 null |  |
| result.data[].enableDefaultRouteEcmp | 선택 | boolean 또는 null |  |
| result.data[].enableDefaultRouteBfd | 선택 | boolean 또는 null |  |
| result.data[].availabilityZones | 선택 | array (string) |  |
| result.data[].availabilityZoneHints | 선택 | array (string) |  |
| result.data[].routes | 선택 | array (object) |  |
| result.data[].routes[].destination | 선택 | string 또는 null |  |
| result.data[].routes[].nexthop | 선택 | string 또는 null |  |
| result.data[].externalGatewayInfo | 선택 | object 또는 null | 외부 게이트웨이 응답 |
| result.data[].externalGatewayInfo.networkId | 선택 | string 또는 null |  |
| result.data[].externalGatewayInfo.networkName | 선택 | string 또는 null |  |
| result.data[].externalGatewayInfo.enableSnat | 선택 | boolean 또는 null |  |
| result.data[].externalGatewayInfo.externalFixedIps | 선택 | array (object) |  |
| result.data[].externalGatewayInfo.externalFixedIps[].subnetId | 선택 | string 또는 null |  |
| result.data[].externalGatewayInfo.externalFixedIps[].subnetName | 선택 | string 또는 null |  |
| result.data[].externalGatewayInfo.externalFixedIps[].ipAddress | 선택 | string 또는 null |  |
| result.data[].createdAt | 선택 | string (date-time) |  |
| result.data[].updatedAt | 선택 | string (date-time) |  |
| result.data[].revisionNumber | 선택 | integer 또는 null |  |
| result.data[].tenantId | 선택 | string 또는 null |  |
| result.data[].hasInterfaces | 선택 | boolean | 기본값 false |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


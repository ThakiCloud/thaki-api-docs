# Floating IP 목록 조회

Floating IP 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/floating-ips
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| status | 선택 | array (string) | Floating IP 상태 필터 (복수 선택 시 OR) |
| floatingIpAddress | 선택 | array (string) | Floating IP 주소 필터 |
| deviceType | 선택 | array (string) | 연결된 리소스 타입 필터 (INSTANCE/LOAD_BALANCER/PORT/OTHERS/UNBOUNDED) |
| deviceName | 선택 | array (string) | 연결된 디바이스 이름 필터 |
| deviceId | 선택 | array (string) | 연결된 디바이스 ID 필터 (예: 인스턴스 ID, 로드밸런서 ID) |
| fixedIpAddress | 선택 | array (string) | 고정 IP 주소 필터 |
| floatingNetworkId | 선택 | array (string) | Floating 네트워크 ID 필터 |
| floatingNetworkName | 선택 | array (string) | Floating 네트워크 이름 필터 |
| createdAtGte | 선택 | string 또는 null | 생성 일시 시작 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtLte | 선택 | string 또는 null | 생성 일시 종료 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtRange | 선택 | array (string) | 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨 |
| id | 선택 | array (string) | Floating IP ID 필터 |
| description | 선택 | array (string) | 설명 필터 |
| origin | 선택 | array (string) | Floating IP 생성 주체 origin 필터 |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼. 값: floatingIp, fixedIp, network, createdAt, id, description, connectable |
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
| result.data[].id | 필수 | string |  |
| result.data[].floatingIpAddress | 선택 | string 또는 null |  |
| result.data[].floatingNetworkId | 필수 | string |  |
| result.data[].floatingNetworkName | 선택 | string 또는 null |  |
| result.data[].portId | 선택 | string 또는 null |  |
| result.data[].fixedIpAddress | 선택 | string 또는 null |  |
| result.data[].routerId | 선택 | string 또는 null |  |
| result.data[].routerName | 선택 | string 또는 null |  |
| result.data[].status | 필수 | string | Floating IP 상태. 값: AVAILABLE, IN_USE, ERROR |
| result.data[].description | 선택 | string 또는 null |  |
| result.data[].dnsDomain | 선택 | string 또는 null |  |
| result.data[].dnsName | 선택 | string 또는 null |  |
| result.data[].qosPolicyId | 선택 | string 또는 null |  |
| result.data[].portDetail | 선택 | object 또는 null | Floating IP에서 반환하는 포트 상세 정보를 감싸는 DTO |
| result.data[].portDetail.name | 선택 | string 또는 null |  |
| result.data[].portDetail.networkId | 선택 | string 또는 null |  |
| result.data[].portDetail.networkName | 선택 | string 또는 null |  |
| result.data[].portDetail.macAddress | 선택 | string 또는 null |  |
| result.data[].portDetail.adminStateUp | 선택 | boolean 또는 null |  |
| result.data[].portDetail.status | 선택 | string 또는 null | 포트 상태 (Skyline 기준). 값: ACTIVE, DOWN, BUILD, ERROR |
| result.data[].portDetail.deviceId | 선택 | string 또는 null |  |
| result.data[].portDetail.deviceOwner | 선택 | string 또는 null |  |
| result.data[].portDetail.deviceName | 선택 | string 또는 null |  |
| result.data[].portDetail.deviceType | 선택 | string 또는 null | Floating IP 연결 리소스 타입. 값: INSTANCE, LOAD_BALANCER, PORT, OTHERS, UNBOUNDED |
| result.data[].projectId | 선택 | string 또는 null |  |
| result.data[].tenantId | 선택 | string 또는 null |  |
| result.data[].createdAt | 선택 | string (date-time) |  |
| result.data[].updatedAt | 선택 | string (date-time) |  |
| result.data[].revisionNumber | 선택 | integer 또는 null |  |
| result.data[].origin | 선택 | string | 기본값 "compute" |
| result.data[].originName | 선택 | string 또는 null |  |
| result.data[].originId | 선택 | string 또는 null |  |
| result.data[].connectable | 선택 | boolean | 기본값 true |
| result.data[].reason | 선택 | string 또는 null | Floating IP 연결 가능 여부 사유. 값: ALREADY_CONNECTED |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


# Pool 목록 조회

Pool 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/pools
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| status | 선택 | array (string) | Pool 상태 필터 (복수 선택 시 OR). Pool 상태 필터 (복수 선택 시 OR) |
| name | 선택 | array (string) | Pool 이름 필터. Pool 이름 필터 |
| protocol | 선택 | array (string) | Pool 프로토콜 필터. Pool 프로토콜 필터 |
| algorithm | 선택 | array (string) | Load balancing algorithm 필터. Load balancing algorithm 필터 |
| listener | 선택 | array (string) | 연결된 Listener 이름/ID 필터. 연결된 Listener 이름/ID 필터 |
| members | 선택 | array (string) | 연결된 Member 이름/ID/IP 필터. 연결된 Member 이름/ID/IP 필터 |
| adminStateUp | 선택 | array (boolean) | 관리자 상태 필터. 관리자 상태 필터 |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼. 정렬 대상 컬럼. 값: name, protocol, algorithm, listener, members |
| order | 선택 | string | 정렬 방향 (asc/desc). 정렬 방향 (asc/desc). 값: asc, desc |
| listenerId | 선택 | string 또는 null | 특정 Listener의 Pool만 필터링 (선택). 특정 Listener의 Pool만 필터링 (선택) |
| loadBalancerId | 선택 | string 또는 null | 특정 Load Balancer의 Pool만 필터링 (선택). 특정 Load Balancer의 Pool만 필터링 (선택) |

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
| result.data[].id | 필수 | string |  |
| result.data[].name | 필수 | string |  |
| result.data[].protocol | 필수 | string |  |
| result.data[].lbAlgorithm | 필수 | string |  |
| result.data[].adminStateUp | 필수 | boolean |  |
| result.data[].loadBalancerId | 필수 | string 또는 null |  |
| result.data[].projectId | 필수 | string 또는 null |  |
| result.data[].description | 필수 | string 또는 null |  |
| result.data[].sessionPersistence | 필수 | object 또는 null | 세션 지속성 응답 DTO. |
| result.data[].sessionPersistence.type | 필수 | string | Octavia 세션 지속성 타입.. 값: SOURCE_IP, HTTP_COOKIE, APP_COOKIE |
| result.data[].sessionPersistence.cookieName | 선택 | string 또는 null |  |
| result.data[].sessionPersistence.persistenceTimeout | 선택 | integer 또는 null |  |
| result.data[].sessionPersistence.persistenceGranularity | 선택 | string 또는 null |  |
| result.data[].tlsEnabled | 필수 | boolean 또는 null |  |
| result.data[].tlsCiphers | 필수 | string 또는 null |  |
| result.data[].members | 필수 | array (object) |  |
| result.data[].healthMonitorId | 필수 | string 또는 null |  |
| result.data[].status | 선택 | string 또는 null | Octavia 리소스 상태. OpenStack Octavia의 operating_status와 provisioning_status를 비즈니스 관점의 단일 상태로 통합한 Enum.. 값: ONLINE, DEGRADED, OFFLINE, NO_MONITOR, OPERATING_ERROR, DRAINING, PROVISIONING_ERROR, CREATING, UPDATING, DELETING, UNKNOWN |
| result.data[].createdAt | 필수 | string (date-time) |  |
| result.data[].updatedAt | 필수 | string (date-time) |  |
| result.data[].listeners | 필수 | array (object) |  |
| result.data[].listeners[].id | 필수 | string |  |
| result.data[].listeners[].name | 선택 | string 또는 null |  |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


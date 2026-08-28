# Pool 생성

Pool을 생성합니다. ProvisioningService가 입력을 기반으로 동기/비동기 전략을 결정합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/pools
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 필수 | string | Pool 이름 |
| listenerId | 선택 | string 또는 null | 연결할 Listener ID |
| loadBalancerId | 선택 | string 또는 null | 연결할 Load Balancer ID |
| protocol | 필수 | string | Pool 프로토콜. 값: HTTP, HTTPS, TCP, UDP, PROXY, PROXYV2 |
| lbAlgorithm | 필수 | string | 로드밸런싱 알고리즘 (L4 Listener인 경우 SOURCE_IP_PORT만 지원). 값: ROUND_ROBIN, LEAST_CONNECTIONS, SOURCE_IP, SOURCE_IP_PORT |
| description | 선택 | string 또는 null | Pool 설명 |
| adminStateUp | 선택 | boolean | Pool 관리자 상태. 기본값 true |
| sessionPersistence | 선택 | object 또는 null | 세션 지속성 설정 |
| sessionPersistence.type | 필수 | string | 세션 지속성 타입. 값: SOURCE_IP, HTTP_COOKIE, APP_COOKIE |
| sessionPersistence.cookieName | 선택 | string 또는 null | APP_COOKIE/HTTP_COOKIE에서 사용할 쿠키 이름 |
| sessionPersistence.persistenceTimeout | 선택 | integer 또는 null | 세션 지속 시간(초), SOURCE_IP 계열에서 사용. 범위 1~ |
| sessionPersistence.persistenceGranularity | 선택 | string 또는 null | 세션 매칭 단위(Route Domain), Octavia persistenceGranularity |
| tlsEnabled | 필수 | boolean | Backend TLS 활성화 여부 |
| tlsCiphers | 선택 | string 또는 null | 사용자 정의 TLS cipher 문자열 (비우면 안전한 기본값 사용) |
| members | 선택 | array (object) | Pool에 추가할 멤버 목록 (복합 생성 시 사용) |
| members[].address | 필수 | string | 멤버 IP 주소 |
| members[].protocolPort | 필수 | integer | 멤버 프로토콜 포트 |
| members[].subnetId | 선택 | string 또는 null | 멤버가 속한 서브넷 ID (생략 시 멤버 주소로 포트를 역조회해 라우팅 가능한 서브넷을 자동 채움) |
| members[].weight | 선택 | integer | 멤버 가중치. 기본값 1 |
| members[].adminStateUp | 선택 | boolean | 관리자 상태. 기본값 true |
| members[].monitorAddress | 선택 | string 또는 null | Health Monitor용 대체 IP |
| members[].monitorPort | 선택 | integer 또는 null | Health Monitor용 대체 포트 |
| members[].name | 선택 | string 또는 null | 멤버 이름 |
| healthMonitor | 선택 | object 또는 null | Pool에 연결할 Health Monitor (복합 생성 시 사용) |
| healthMonitor.type | 필수 | string | Health Monitor 타입. 값: HTTP, HTTPS, TCP, UDP-CONNECT, PING, TLS-HELLO, SCTP |
| healthMonitor.delay | 필수 | integer | Health Check 간격 (초) |
| healthMonitor.timeout | 필수 | integer | Health Check 타임아웃 (초) |
| healthMonitor.maxRetries | 필수 | integer | 최대 재시도 횟수 |
| healthMonitor.adminStateUp | 선택 | boolean | 관리 상태. 기본값 true |
| healthMonitor.name | 선택 | string 또는 null | Health Monitor 이름 |
| healthMonitor.maxRetriesDown | 선택 | integer 또는 null | DOWN 판정 전 재시도 횟수 |
| healthMonitor.httpMethod | 선택 | string 또는 null | HTTP 메서드 (HTTP/S만) |
| healthMonitor.urlPath | 선택 | string 또는 null | URL 경로 (HTTP/S만) |
| healthMonitor.expectedCodes | 선택 | string 또는 null | 예상 HTTP 상태 코드 (HTTP/S만) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Pool 생성 성공 (단순 Pool만 생성) |
| 202 Accepted | Pool 생성 요청 접수 (하위 리소스 포함, 백그라운드 처리 중) |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌·사용 중) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.id | 필수 | string |  |
| result.name | 필수 | string |  |
| result.protocol | 필수 | string |  |
| result.lbAlgorithm | 필수 | string |  |
| result.adminStateUp | 필수 | boolean |  |
| result.loadBalancerId | 필수 | string 또는 null |  |
| result.projectId | 필수 | string 또는 null |  |
| result.description | 필수 | string 또는 null |  |
| result.sessionPersistence | 필수 | object 또는 null | 세션 지속성 응답 DTO |
| result.sessionPersistence.type | 필수 | string | Octavia 세션 지속성 타입. 값: SOURCE_IP, HTTP_COOKIE, APP_COOKIE |
| result.sessionPersistence.cookieName | 선택 | string 또는 null |  |
| result.sessionPersistence.persistenceTimeout | 선택 | integer 또는 null |  |
| result.sessionPersistence.persistenceGranularity | 선택 | string 또는 null |  |
| result.tlsEnabled | 필수 | boolean 또는 null |  |
| result.tlsCiphers | 필수 | string 또는 null |  |
| result.members | 필수 | array (object) |  |
| result.healthMonitorId | 필수 | string 또는 null |  |
| result.status | 선택 | string 또는 null | Octavia 리소스 상태. OpenStack Octavia의 operating_status와 provisioning_status를 비즈니스 관점의 단일 상태로 통합한 Enum. 값: ONLINE, DEGRADED, OFFLINE, NO_MONITOR, OPERATING_ERROR, DRAINING, PROVISIONING_ERROR, CREATING, UPDATING, DELETING, UNKNOWN |
| result.createdAt | 필수 | string (date-time) |  |
| result.updatedAt | 필수 | string (date-time) |  |
| result.listeners | 필수 | array (object) |  |
| result.listeners[].id | 필수 | string |  |
| result.listeners[].name | 선택 | string 또는 null |  |


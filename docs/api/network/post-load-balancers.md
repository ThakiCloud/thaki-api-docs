# 새로운 LoadBalancer 생성

새로운 LoadBalancer를 생성합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/load-balancers
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 필수 | string | LoadBalancer 이름 |
| vipNetworkId | 필수 | string | VIP가 위치할 네트워크 ID |
| vipSubnetId | 필수 | string | VIP가 위치할 서브넷 ID |
| description | 선택 | string 또는 null |  |
| vipAddress | 선택 | string 또는 null | 지정된 VIP IPv4 주소 (선택) |
| adminStateUp | 필수 | boolean | 관리자 상태 |
| flavorId | 선택 | string 또는 null |  |
| provider | 선택 | string 또는 null | LoadBalancer 백엔드 프로바이더 (예: amphora, ovn) |
| origin | 선택 | string 또는 null | LoadBalancer 생성 주체 origin |
| originName | 선택 | string 또는 null | origin 리소스 이름 |
| originId | 선택 | string 또는 null | origin 리소스 ID |
| listeners | 선택 | array (object) | 함께 생성할 Listener 목록 |
| listeners[].name | 선택 | string 또는 null |  |
| listeners[].description | 선택 | string 또는 null |  |
| listeners[].protocol | 필수 | string | 허용된 Listener 프로토콜 Enum. 값: HTTP, HTTPS, TERMINATED_HTTPS, TCP, UDP |
| listeners[].protocolPort | 필수 | integer | 범위 1~65535 |
| listeners[].adminStateUp | 선택 | boolean | 기본값 true |
| listeners[].connectionLimit | 선택 | integer 또는 null | -1은 무제한을 의미. 범위 -1~ |
| listeners[].defaultTlsContainerRef | 선택 | string 또는 null |  |
| listeners[].sniContainerRefs | 선택 | array (string) |  |
| listeners[].insertHeaders | 선택 | object 또는 null |  |
| listeners[].defaultPool | 선택 | object 또는 null | Listener와 함께 생성할 기본 Pool 정의 |
| listeners[].defaultPool.name | 필수 | string | Pool 이름 |
| listeners[].defaultPool.protocol | 필수 | string | Pool 프로토콜. 값: HTTP, HTTPS, TCP, UDP, PROXY, PROXYV2 |
| listeners[].defaultPool.lbAlgorithm | 필수 | string | 로드밸런싱 알고리즘 (L4 Listener인 경우 SOURCE_IP_PORT만 지원). 값: ROUND_ROBIN, LEAST_CONNECTIONS, SOURCE_IP, SOURCE_IP_PORT |
| listeners[].defaultPool.tlsEnabled | 선택 | boolean | 백엔드 TLS 암호화 활성화. 기본값 false |
| listeners[].defaultPool.description | 선택 | string 또는 null | Pool 설명 |
| listeners[].defaultPool.adminStateUp | 선택 | boolean | 관리 상태. 기본값 true |
| listeners[].defaultPool.sessionPersistence | 선택 | object 또는 null | 세션 지속성 설정 |
| listeners[].defaultPool.sessionPersistence.type | 필수 | string | 세션 지속성 타입. 값: SOURCE_IP, HTTP_COOKIE, APP_COOKIE |
| listeners[].defaultPool.sessionPersistence.cookieName | 선택 | string 또는 null | APP_COOKIE/HTTP_COOKIE에서 사용할 쿠키 이름 |
| listeners[].defaultPool.sessionPersistence.persistenceTimeout | 선택 | integer 또는 null | 세션 지속 시간(초), SOURCE_IP 계열에서 사용. 범위 1~ |
| listeners[].defaultPool.sessionPersistence.persistenceGranularity | 선택 | string 또는 null | 세션 매칭 단위(Route Domain), Octavia persistenceGranularity |
| listeners[].defaultPool.tlsCiphers | 선택 | string 또는 null | TLS Cipher Suite |
| listeners[].defaultPool.members | 선택 | array (object) | Pool에 추가할 멤버 목록 |
| listeners[].defaultPool.members[].address | 필수 | string | 멤버 IP 주소 |
| listeners[].defaultPool.members[].protocolPort | 필수 | integer | 멤버 프로토콜 포트 |
| listeners[].defaultPool.members[].subnetId | 선택 | string 또는 null | 멤버가 속한 서브넷 ID (생략 시 멤버 주소로 포트를 역조회해 라우팅 가능한 서브넷을 자동 채움) |
| listeners[].defaultPool.members[].weight | 선택 | integer | 멤버 가중치. 기본값 1 |
| listeners[].defaultPool.members[].adminStateUp | 선택 | boolean | 관리자 상태. 기본값 true |
| listeners[].defaultPool.members[].monitorAddress | 선택 | string 또는 null | Health Monitor용 대체 IP |
| listeners[].defaultPool.members[].monitorPort | 선택 | integer 또는 null | Health Monitor용 대체 포트 |
| listeners[].defaultPool.members[].name | 선택 | string 또는 null | 멤버 이름 |
| listeners[].defaultPool.healthMonitor | 선택 | object 또는 null | Pool에 연결할 Health Monitor |
| listeners[].defaultPool.healthMonitor.type | 필수 | string | Health Monitor 타입. 값: HTTP, HTTPS, TCP, UDP-CONNECT, PING, TLS-HELLO, SCTP |
| listeners[].defaultPool.healthMonitor.delay | 필수 | integer | Health Check 간격 (초) |
| listeners[].defaultPool.healthMonitor.timeout | 필수 | integer | Health Check 타임아웃 (초) |
| listeners[].defaultPool.healthMonitor.maxRetries | 필수 | integer | 최대 재시도 횟수 |
| listeners[].defaultPool.healthMonitor.adminStateUp | 선택 | boolean | 관리 상태. 기본값 true |
| listeners[].defaultPool.healthMonitor.name | 선택 | string 또는 null | Health Monitor 이름 |
| listeners[].defaultPool.healthMonitor.maxRetriesDown | 선택 | integer 또는 null | DOWN 판정 전 재시도 횟수 |
| listeners[].defaultPool.healthMonitor.httpMethod | 선택 | string 또는 null | HTTP 메서드 (HTTP/S만) |
| listeners[].defaultPool.healthMonitor.urlPath | 선택 | string 또는 null | URL 경로 (HTTP/S만) |
| listeners[].defaultPool.healthMonitor.expectedCodes | 선택 | string 또는 null | 예상 HTTP 상태 코드 (HTTP/S만) |
| listeners[].clientAuthentication | 선택 | string | NONE, OPTIONAL, MANDATORY 중 하나. 값: NONE, OPTIONAL, MANDATORY |
| listeners[].clientCaTlsContainerRef | 선택 | string 또는 null | clientAuthentication이 MANDATORY인 경우 필수 |

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
| result.id | 필수 | string |  |
| result.vipNetworkName | 선택 | string 또는 null |  |
| result.vipSubnetName | 선택 | string 또는 null |  |
| result.name | 필수 | string |  |
| result.status | 선택 | string 또는 null | Octavia 리소스 상태. OpenStack Octavia의 operating_status와 provisioning_status를 비즈니스 관점의 단일 상태로 통합한 Enum. 값: ONLINE, DEGRADED, OFFLINE, NO_MONITOR, OPERATING_ERROR, DRAINING, PROVISIONING_ERROR, CREATING, UPDATING, DELETING, UNKNOWN |
| result.adminStateUp | 필수 | boolean |  |
| result.projectId | 필수 | string |  |
| result.vipSubnetId | 필수 | string |  |
| result.description | 필수 | string 또는 null |  |
| result.createdAt | 필수 | string (date-time) |  |
| result.updatedAt | 필수 | string (date-time) |  |
| result.vipAddress | 필수 | string 또는 null |  |
| result.vipPortId | 필수 | string 또는 null |  |
| result.vipNetworkId | 필수 | string 또는 null |  |
| result.additionalVips | 필수 | array (object) |  |
| result.listeners | 필수 | array (object) |  |
| result.listeners[].id | 필수 | string |  |
| result.listeners[].name | 선택 | string 또는 null |  |
| result.listeners[].protocol | 선택 | string 또는 null |  |
| result.listeners[].protocolPort | 선택 | integer 또는 null |  |
| result.listeners[].adminStateUp | 선택 | boolean 또는 null |  |
| result.pools | 필수 | array (object) |  |
| result.provider | 필수 | string 또는 null |  |
| result.flavorId | 필수 | string 또는 null |  |
| result.vipQosPolicyId | 필수 | string 또는 null |  |
| result.availabilityZone | 필수 | string 또는 null |  |
| result.floatingIp | 선택 | object 또는 null | FloatingIP 상세 정보 응답 |
| result.floatingIp.id | 필수 | string |  |
| result.floatingIp.floatingIpAddress | 선택 | string 또는 null |  |
| result.floatingIp.status | 선택 | string 또는 null |  |
| result.floatingIp.portId | 선택 | string 또는 null |  |
| result.floatingIp.fixedIpAddress | 선택 | string 또는 null |  |
| result.origin | 선택 | string | 기본값 "compute" |
| result.originName | 선택 | string 또는 null |  |
| result.originId | 선택 | string 또는 null |  |


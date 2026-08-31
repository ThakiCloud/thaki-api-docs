# 리스너 생성

Listener를 생성합니다. ProvisioningService가 입력을 기반으로 동기/비동기 전략을 결정합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/listeners
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 필수 | string |  |
| loadBalancerId | 필수 | string | 연결할 Load Balancer ID |
| protocol | 필수 | string | HTTP, HTTPS, TERMINATED_HTTPS, TCP, UDP 중 하나. 값: HTTP, HTTPS, TERMINATED_HTTPS, TCP, UDP |
| protocolPort | 필수 | integer |  |
| adminStateUp | 선택 | boolean | 기본값 true |
| description | 선택 | string 또는 null |  |
| defaultPoolId | 선택 | string 또는 null |  |
| defaultTlsContainerRef | 선택 | string 또는 null | TERMINATED_HTTPS 프로토콜 사용 시 필수 |
| connectionLimit | 필수 | integer | 허용되는 최대 연결 수 -1 은 무제한 |
| sniContainerRefs | 선택 | array (string) |  |
| insertHeaders | 선택 | object 또는 null |  |
| clientAuthentication | 선택 | string | NONE, OPTIONAL, MANDATORY 중 하나. 값: NONE, OPTIONAL, MANDATORY |
| clientCaTlsContainerRef | 선택 | string 또는 null | clientAuthentication이 OPTIONAL 또는 MANDATORY인 경우 필수 |
| allowedCidrs | 선택 | array (string) | 허용된 클라이언트 CIDR 목록 |
| timeoutClientData | 선택 | integer 또는 null | 클라이언트 데이터 타임아웃(밀리초) |
| timeoutMemberConnect | 선택 | integer 또는 null | 멤버 연결 타임아웃(밀리초) |
| timeoutMemberData | 선택 | integer 또는 null | 멤버 데이터 타임아웃(밀리초) |
| timeoutTcpInspect | 선택 | integer 또는 null | TCP 인스펙션 타임아웃(밀리초) |
| clientCrlContainerRef | 선택 | string 또는 null | 클라이언트 CRL 시크릿 참조 (선택) |
| defaultPool | 선택 | object 또는 null | Listener와 함께 생성할 기본 Pool (members, health_monitor 포함) |
| defaultPool.name | 필수 | string | Pool 이름 |
| defaultPool.protocol | 필수 | string | Pool 프로토콜. 값: HTTP, HTTPS, TCP, UDP, PROXY, PROXYV2 |
| defaultPool.lbAlgorithm | 필수 | string | 로드밸런싱 알고리즘 (L4 Listener인 경우 SOURCE_IP_PORT만 지원). 값: ROUND_ROBIN, LEAST_CONNECTIONS, SOURCE_IP, SOURCE_IP_PORT |
| defaultPool.tlsEnabled | 선택 | boolean | 백엔드 TLS 암호화 활성화. 기본값 false |
| defaultPool.description | 선택 | string 또는 null | Pool 설명 |
| defaultPool.adminStateUp | 선택 | boolean | 관리 상태. 기본값 true |
| defaultPool.sessionPersistence | 선택 | object 또는 null | 세션 지속성 설정 |
| defaultPool.sessionPersistence.type | 필수 | string | 세션 지속성 타입. 값: SOURCE_IP, HTTP_COOKIE, APP_COOKIE |
| defaultPool.sessionPersistence.cookieName | 선택 | string 또는 null | APP_COOKIE/HTTP_COOKIE에서 사용할 쿠키 이름 |
| defaultPool.sessionPersistence.persistenceTimeout | 선택 | integer 또는 null | 세션 지속 시간(초), SOURCE_IP 계열에서 사용. 범위 1~ |
| defaultPool.sessionPersistence.persistenceGranularity | 선택 | string 또는 null | 세션 매칭 단위(Route Domain), Octavia persistenceGranularity |
| defaultPool.tlsCiphers | 선택 | string 또는 null | TLS Cipher Suite |
| defaultPool.members | 선택 | array (object) | Pool에 추가할 멤버 목록 |
| defaultPool.members[].address | 필수 | string | 멤버 IP 주소 |
| defaultPool.members[].protocolPort | 필수 | integer | 멤버 프로토콜 포트 |
| defaultPool.members[].subnetId | 선택 | string 또는 null | 멤버가 속한 서브넷 ID (생략 시 멤버 주소로 포트를 역조회해 라우팅 가능한 서브넷을 자동 채움) |
| defaultPool.members[].weight | 선택 | integer | 멤버 가중치. 기본값 1 |
| defaultPool.members[].adminStateUp | 선택 | boolean | 관리자 상태. 기본값 true |
| defaultPool.members[].monitorAddress | 선택 | string 또는 null | Health Monitor용 대체 IP |
| defaultPool.members[].monitorPort | 선택 | integer 또는 null | Health Monitor용 대체 포트 |
| defaultPool.members[].name | 선택 | string 또는 null | 멤버 이름 |
| defaultPool.healthMonitor | 선택 | object 또는 null | Pool에 연결할 Health Monitor |
| defaultPool.healthMonitor.type | 필수 | string | Health Monitor 타입. 값: HTTP, HTTPS, TCP, UDP-CONNECT, PING, TLS-HELLO, SCTP |
| defaultPool.healthMonitor.delay | 필수 | integer | Health Check 간격 (초) |
| defaultPool.healthMonitor.timeout | 필수 | integer | Health Check 타임아웃 (초) |
| defaultPool.healthMonitor.maxRetries | 필수 | integer | 최대 재시도 횟수 |
| defaultPool.healthMonitor.adminStateUp | 선택 | boolean | 관리 상태. 기본값 true |
| defaultPool.healthMonitor.name | 선택 | string 또는 null | Health Monitor 이름 |
| defaultPool.healthMonitor.maxRetriesDown | 선택 | integer 또는 null | DOWN 판정 전 재시도 횟수 |
| defaultPool.healthMonitor.httpMethod | 선택 | string 또는 null | HTTP 메서드 (HTTP/S만) |
| defaultPool.healthMonitor.urlPath | 선택 | string 또는 null | URL 경로 (HTTP/S만) |
| defaultPool.healthMonitor.expectedCodes | 선택 | string 또는 null | 예상 HTTP 상태 코드 (HTTP/S만) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Listener 생성 성공 (단순 Listener만 생성) |
| 202 Accepted | Listener 생성 요청 접수 (하위 리소스 포함, 백그라운드 처리 중) |
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
| result.name | 필수 | string 또는 null |  |
| result.protocol | 필수 | string |  |
| result.port | 필수 | integer |  |
| result.adminStateUp | 필수 | boolean |  |
| result.projectId | 필수 | string 또는 null |  |
| result.defaultPoolId | 필수 | string 또는 null |  |
| result.connectionLimit | 필수 | integer 또는 null |  |
| result.description | 필수 | string 또는 null |  |
| result.status | 선택 | string 또는 null | Octavia 리소스 상태. OpenStack Octavia의 operating_status와 provisioning_status를 비즈니스 관점의 단일 상태로 통합한 Enum. 값: ONLINE, DEGRADED, OFFLINE, NO_MONITOR, OPERATING_ERROR, DRAINING, PROVISIONING_ERROR, CREATING, UPDATING, DELETING, UNKNOWN |
| result.defaultTlsContainerRef | 필수 | string 또는 null |  |
| result.createdAt | 필수 | string (date-time) |  |
| result.updatedAt | 필수 | string (date-time) |  |
| result.sniContainerRefs | 필수 | array (string) |  |
| result.insertHeaders | 필수 | object 또는 null |  |
| result.timeoutClientData | 필수 | integer 또는 null |  |
| result.timeoutMemberConnect | 필수 | integer 또는 null |  |
| result.timeoutMemberData | 필수 | integer 또는 null |  |
| result.timeoutTcpInspect | 필수 | integer 또는 null |  |
| result.clientCaTlsContainerRef | 필수 | string 또는 null |  |
| result.clientAuthentication | 필수 | string 또는 null |  |
| result.clientCrlContainerRef | 필수 | string 또는 null |  |
| result.allowedCidrs | 필수 | array (string) |  |
| result.tlsCiphers | 필수 | string 또는 null |  |
| result.tlsVersions | 필수 | array (string) |  |
| result.alpnProtocols | 필수 | array (string) |  |
| result.hstsMaxAge | 필수 | integer 또는 null |  |
| result.hstsIncludeSubdomains | 필수 | boolean 또는 null |  |
| result.hstsPreload | 필수 | boolean 또는 null |  |
| result.l7Policies | 필수 | array (object) |  |
| result.loadBalancerId | 선택 | string 또는 null |  |
| result.loadBalancerName | 선택 | string 또는 null |  |


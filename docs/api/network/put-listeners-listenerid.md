# Listener 수정

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/network/listeners/{listenerId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| listenerId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 선택 | string 또는 null | 리스너 이름 |
| description | 선택 | string 또는 null | 리스너 설명 |
| adminStateUp | 선택 | boolean 또는 null | 리스너 관리자 상태 |
| connectionLimit | 선택 | integer 또는 null | 허용되는 최대 연결 수 -1 은 무제한 |
| defaultPoolId | 선택 | string 또는 null | 기본 Pool ID |
| defaultTlsContainerRef | 선택 | string 또는 null | 서버 인증서 시크릿 참조 |
| sniContainerRefs | 선택 | array (string) | SNI 인증서 시크릿 참조 목록 |
| insertHeaders | 선택 | object 또는 null | 커스텀 헤더 매핑 |
| clientAuthentication | 선택 | string 또는 null | ONE-WAY(=NONE) 또는 TWO-WAY(=MANDATORY) TLS 선택. 값: NONE, OPTIONAL, MANDATORY |
| clientCaTlsContainerRef | 선택 | string 또는 null | TWO-WAY TLS(clientAuthentication=MANDATORY) 설정 시 필수 |
| allowedCidrs | 선택 | array (string) | 허용된 클라이언트 CIDR 목록 |
| timeoutClientData | 선택 | integer 또는 null | 클라이언트 데이터 타임아웃(밀리초) |
| timeoutMemberConnect | 선택 | integer 또는 null | 멤버 연결 타임아웃(밀리초) |
| timeoutMemberData | 선택 | integer 또는 null | 멤버 데이터 타임아웃(밀리초) |
| timeoutTcpInspect | 선택 | integer 또는 null | TCP 인스펙션 타임아웃(밀리초) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌·사용 중) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

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


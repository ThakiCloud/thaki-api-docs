# LoadBalancer를 단건 조회

LoadBalancer를 단건 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/load-balancers/{loadBalancerId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| loadBalancerId | path | 필수 | string |  |

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


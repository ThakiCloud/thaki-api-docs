# 프로젝트의 네트워크 리소스 할당량 조회

프로젝트의 네트워크 리소스 할당량을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/quotas
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.networks | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.networks.limit | 필수 | integer |  |
| result.networks.used | 필수 | integer |  |
| result.networks.reserved | 필수 | integer |  |
| result.subnets | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.subnets.limit | 필수 | integer |  |
| result.subnets.used | 필수 | integer |  |
| result.subnets.reserved | 필수 | integer |  |
| result.subnetPools | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.subnetPools.limit | 필수 | integer |  |
| result.subnetPools.used | 필수 | integer |  |
| result.subnetPools.reserved | 필수 | integer |  |
| result.ports | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.ports.limit | 필수 | integer |  |
| result.ports.used | 필수 | integer |  |
| result.ports.reserved | 필수 | integer |  |
| result.routers | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.routers.limit | 필수 | integer |  |
| result.routers.used | 필수 | integer |  |
| result.routers.reserved | 필수 | integer |  |
| result.floatingIps | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.floatingIps.limit | 필수 | integer |  |
| result.floatingIps.used | 필수 | integer |  |
| result.floatingIps.reserved | 필수 | integer |  |
| result.rbacPolicies | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.rbacPolicies.limit | 필수 | integer |  |
| result.rbacPolicies.used | 필수 | integer |  |
| result.rbacPolicies.reserved | 필수 | integer |  |
| result.securityGroups | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.securityGroups.limit | 필수 | integer |  |
| result.securityGroups.used | 필수 | integer |  |
| result.securityGroups.reserved | 필수 | integer |  |
| result.securityGroupRules | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.securityGroupRules.limit | 필수 | integer |  |
| result.securityGroupRules.used | 필수 | integer |  |
| result.securityGroupRules.reserved | 필수 | integer |  |
| result.loadBalancers | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.loadBalancers.limit | 필수 | integer |  |
| result.loadBalancers.used | 필수 | integer |  |
| result.loadBalancers.reserved | 필수 | integer |  |
| result.listeners | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.listeners.limit | 필수 | integer |  |
| result.listeners.used | 필수 | integer |  |
| result.listeners.reserved | 필수 | integer |  |
| result.pools | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.pools.limit | 필수 | integer |  |
| result.pools.used | 필수 | integer |  |
| result.pools.reserved | 필수 | integer |  |
| result.members | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.members.limit | 필수 | integer |  |
| result.members.used | 필수 | integer |  |
| result.members.reserved | 필수 | integer |  |
| result.l7Policies | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.l7Policies.limit | 필수 | integer |  |
| result.l7Policies.used | 필수 | integer |  |
| result.l7Policies.reserved | 필수 | integer |  |
| result.l7Rules | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.l7Rules.limit | 필수 | integer |  |
| result.l7Rules.used | 필수 | integer |  |
| result.l7Rules.reserved | 필수 | integer |  |
| result.healthMonitors | 필수 | object | 개별 리소스의 할당량 정보 응답 |
| result.healthMonitors.limit | 필수 | integer |  |
| result.healthMonitors.used | 필수 | integer |  |
| result.healthMonitors.reserved | 필수 | integer |  |


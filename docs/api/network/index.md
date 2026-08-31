# 네트워크

API 117개.

## Floating IP

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/floating-ips](/api/network/get-floating-ips) | Floating IP 목록 조회 |
| POST | [/api/v1/network/floating-ips](/api/network/post-floating-ips) | Floating IP 생성 |
| GET | [/api/v1/network/floating-ips/{floatingIpId}/instances/connectable](/api/network/get-floating-ips-floatingipid-instances-connectable) | Floating IP 연결 후보 인스턴스 목록 조회 |
| GET | [/api/v1/network/floating-ips/{floatingIpId}/load-balancers/connectable](/api/network/get-floating-ips-floatingipid-load-balancers-connectable) | Floating IP 연결 후보 LoadBalancer 목록 조회 |
| GET | [/api/v1/network/floating-ips/{floatingIpId}/ports/connectable](/api/network/get-floating-ips-floatingipid-ports-connectable) | Floating IP 연결 후보 포트 목록 조회 |
| GET | [/api/v1/network/floating-ips/{floatingIpId}](/api/network/get-floating-ips-floatingipid) | Floating IP 단건 조회 |
| PUT | [/api/v1/network/floating-ips/{floatingIpId}](/api/network/put-floating-ips-floatingipid) | Floating IP 수정 |
| DELETE | [/api/v1/network/floating-ips/{floatingIpId}](/api/network/delete-floating-ips-floatingipid) | Floating IP 삭제 |

## L7 정책

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/l7-policies](/api/network/post-l7-policies) | L7 정책 생성 |
| GET | [/api/v1/network/l7-policies](/api/network/get-l7-policies) | L7 정책 목록 조회 |
| GET | [/api/v1/network/l7-policies/{policyId}](/api/network/get-l7-policies-policyid) | L7 정책를 단건 조회 |
| PUT | [/api/v1/network/l7-policies/{policyId}](/api/network/put-l7-policies-policyid) | L7 정책 수정 |
| DELETE | [/api/v1/network/l7-policies/{policyId}](/api/network/delete-l7-policies-policyid) | L7 정책 삭제 |
| POST | [/api/v1/network/l7-policies/{policyId}/rules](/api/network/post-l7-policies-policyid-rules) | L7 Rule 생성 |
| GET | [/api/v1/network/l7-policies/{policyId}/rules](/api/network/get-l7-policies-policyid-rules) | L7 Rule 목록 조회 |
| PUT | [/api/v1/network/l7-policies/{policyId}/rules/{ruleId}](/api/network/put-l7-policies-policyid-rules-ruleid) | L7 Rule 수정 |
| DELETE | [/api/v1/network/l7-policies/{policyId}/rules/{ruleId}](/api/network/delete-l7-policies-policyid-rules-ruleid) | L7 Rule 삭제 |

## 가용 영역

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/availability-zones](/api/network/get-availability-zones) | 가용 영역 목록 조회 |

## 기타

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/livez](/api/network/get-livez) | 프로세스 생존 여부를 확인 |
| GET | [/api/v1/network/readyz](/api/network/get-readyz) | 애플리케이션 초기화 완료 여부를 확인 |

## 네트워크

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/networks](/api/network/get-networks) | 네트워크 목록 조회 |
| POST | [/api/v1/network/networks](/api/network/post-networks) | 네트워크 생성 |
| GET | [/api/v1/network/networks/subnet-connectability](/api/network/get-networks-subnet-connectability) | 서브넷 기반 connectable 계산을 포함한 네트워크 목록 조회 |
| GET | [/api/v1/network/networks/external-gateway-connectability](/api/network/get-networks-external-gateway-connectability) | 외부 게이트웨이에 연결된 내부 네트워크 조회 |
| GET | [/api/v1/network/networks/{networkId}](/api/network/get-networks-networkid) | 네트워크 단건 조회 |
| PUT | [/api/v1/network/networks/{networkId}](/api/network/put-networks-networkid) | 네트워크 수정 |
| DELETE | [/api/v1/network/networks/{networkId}](/api/network/delete-networks-networkid) | 네트워크 삭제 |

## 라우터

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/routers](/api/network/get-routers) | 라우터 목록 조회 |
| POST | [/api/v1/network/routers](/api/network/post-routers) | 라우터 생성 |
| GET | [/api/v1/network/routers/{routerId}](/api/network/get-routers-routerid) | 라우터 단건 조회 |
| PUT | [/api/v1/network/routers/{routerId}](/api/network/put-routers-routerid) | 라우터 수정 |
| DELETE | [/api/v1/network/routers/{routerId}](/api/network/delete-routers-routerid) | 라우터 삭제 |
| GET | [/api/v1/network/routers/{routerId}/interfaces](/api/network/get-routers-routerid-interfaces) | 라우터에 연결된 인터페이스 목록을 상세 조회 |
| POST | [/api/v1/network/routers/{routerId}/interfaces](/api/network/post-routers-routerid-interfaces) | 라우터에 인터페이스를 추가합니다 (서브넷 연결) |
| DELETE | [/api/v1/network/routers/{routerId}/interfaces/{subnetId}](/api/network/delete-routers-routerid-interfaces-subnetid) | 라우터에서 인터페이스를 제거합니다 (서브넷 연결 해제) |
| POST | [/api/v1/network/routers/{routerId}/routes](/api/network/post-routers-routerid-routes) | 라우터에 정적 라우트를 추 |
| DELETE | [/api/v1/network/routers/{routerId}/routes](/api/network/delete-routers-routerid-routes) | 라우터에서 정적 라우트 삭제 |
| GET | [/api/v1/network/routers/{routerId}/routes](/api/network/get-routers-routerid-routes) | 라우터 정적 라우트 목록 조회 |

## 로드밸런서

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/load-balancers](/api/network/post-load-balancers) | 새로운 LoadBalancer 생성 |
| GET | [/api/v1/network/load-balancers](/api/network/get-load-balancers) | LoadBalancer 목록 조회 |
| GET | [/api/v1/network/load-balancers/{loadBalancerId}](/api/network/get-load-balancers-loadbalancerid) | LoadBalancer를 단건 조회 |
| PUT | [/api/v1/network/load-balancers/{loadBalancerId}](/api/network/put-load-balancers-loadbalancerid) | LoadBalancer 수정 |
| DELETE | [/api/v1/network/load-balancers/{loadBalancerId}](/api/network/delete-load-balancers-loadbalancerid) | LoadBalancer 삭제 |

## 리스너

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/listeners](/api/network/post-listeners) | 리스너 생성 |
| GET | [/api/v1/network/listeners](/api/network/get-listeners) | Listener 목록 조회 |
| GET | [/api/v1/network/listeners/{listenerId}](/api/network/get-listeners-listenerid) | Listener 단건 조회 |
| PUT | [/api/v1/network/listeners/{listenerId}](/api/network/put-listeners-listenerid) | Listener 수정 |
| DELETE | [/api/v1/network/listeners/{listenerId}](/api/network/delete-listeners-listenerid) | 리스너 삭제 |
| GET | [/api/v1/network/listeners/{listenerId}/certificates](/api/network/get-listeners-listenerid-certificates) | 리스너 연결 인증서 목록 조회 |

## 멤버

| 메서드 | 경로 | 설명 |
|---|---|---|
| PUT | [/api/v1/network/pools/{poolId}/members](/api/network/put-pools-poolid-members) | 풀 멤버를 일괄 생성합니다 (비동기 처리) |
| GET | [/api/v1/network/pools/{poolId}/members](/api/network/get-pools-poolid-members) | 풀 멤버 목록 조회 |
| PUT | [/api/v1/network/pools/{poolId}/members/{memberId}](/api/network/put-pools-poolid-members-memberid) | 풀 멤버 수정 |
| DELETE | [/api/v1/network/pools/{poolId}/members/{memberId}](/api/network/delete-pools-poolid-members-memberid) | 풀 멤버 삭제 |

## 보안 그룹

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/security-groups](/api/network/post-security-groups) | 보안 그룹 생성 |
| GET | [/api/v1/network/security-groups](/api/network/get-security-groups) | 보안 그룹 목록 조회 |
| GET | [/api/v1/network/security-groups/{securityGroupId}](/api/network/get-security-groups-securitygroupid) | 보안 그룹 조회 |
| PUT | [/api/v1/network/security-groups/{securityGroupId}](/api/network/put-security-groups-securitygroupid) | 보안 그룹 수정 |
| DELETE | [/api/v1/network/security-groups/{securityGroupId}](/api/network/delete-security-groups-securitygroupid) | 보안 그룹 삭제 |
| GET | [/api/v1/network/security-groups/{securityGroupId}/rules](/api/network/get-security-groups-securitygroupid-rules) | 보안 그룹의 Rules 조회 |
| POST | [/api/v1/network/security-groups/{securityGroupId}/rules](/api/network/post-security-groups-securitygroupid-rules) | 보안 그룹 Rule 생성 |
| POST | [/api/v1/network/security-groups/{securityGroupId}/rules/batch](/api/network/post-security-groups-securitygroupid-rules-batch) | 보안 그룹 Rule을 배치 생성 |
| DELETE | [/api/v1/network/security-groups/{securityGroupId}/rules/{ruleId}](/api/network/delete-security-groups-securitygroupid-rules-ruleid) | 보안 그룹 Rule 삭제 |

## 서브넷

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/subnets](/api/network/get-subnets) | 서브넷 목록 조회 |
| POST | [/api/v1/network/subnets](/api/network/post-subnets) | 서브넷 생성 |
| GET | [/api/v1/network/subnets/{subnetId}](/api/network/get-subnets-subnetid) | 서브넷 단건 조회 |
| PUT | [/api/v1/network/subnets/{subnetId}](/api/network/put-subnets-subnetid) | 서브넷 수정 |
| DELETE | [/api/v1/network/subnets/{subnetId}](/api/network/delete-subnets-subnetid) | 서브넷 삭제 |

## 외부 방화벽 규칙

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/external-firewalls/{firewallId}/rules](/api/network/get-external-firewalls-firewallid-rules) | 방화벽에 속한 허용 규칙 목록 조회 |
| POST | [/api/v1/network/external-firewalls/{firewallId}/rules](/api/network/post-external-firewalls-firewallid-rules) | 허용 규칙(allow-related ACL) 생성 요청을 접수 |
| GET | [/api/v1/network/external-firewalls/{firewallId}/rules/{ruleId}](/api/network/get-external-firewalls-firewallid-rules-ruleid) | 허용 규칙 단건 조회 |
| DELETE | [/api/v1/network/external-firewalls/{firewallId}/rules/{ruleId}](/api/network/delete-external-firewalls-firewallid-rules-ruleid) | 허용 규칙 1개 삭제 요청을 접수 |

## 외부 방화벽

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/external-firewalls](/api/network/get-external-firewalls) | 방화벽 목록을 DB에서 조회 |
| POST | [/api/v1/network/external-firewalls](/api/network/post-external-firewalls) | 방화벽(default-deny drop ACL) 생성 요청을 접수 |
| GET | [/api/v1/network/external-firewalls/networks](/api/network/get-external-firewalls-networks) | 방화벽 연결 대상 네트워크 목록 조회 |
| GET | [/api/v1/network/external-firewalls/{firewallId}](/api/network/get-external-firewalls-firewallid) | 방화벽 단건을 DB에서 조회 |
| PUT | [/api/v1/network/external-firewalls/{firewallId}](/api/network/put-external-firewalls-firewallid) | 방화벽 표시용 메타데이터(이름/설명) 수정 |
| DELETE | [/api/v1/network/external-firewalls/{firewallId}](/api/network/delete-external-firewalls-firewallid) | 방화벽 전체(drop + allow) 삭제 요청을 접수 |

## 인증서

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/certificates/server/{certificateId}/listeners](/api/network/get-certificates-server-certificateid-listeners) | 서버 인증서 연결 리스너 목록 조회 |
| GET | [/api/v1/network/certificates/server](/api/network/get-certificates-server) | SERVER 인증서 목록을 조회합니다 (Container 기반) |
| POST | [/api/v1/network/certificates/server](/api/network/post-certificates-server) | SERVER 인증서를 생성합니다 (Container 구조) |
| GET | [/api/v1/network/certificates/server/selectable](/api/network/get-certificates-server-selectable) | 리스너 생성 시 선택용 SERVER 인증서 목록 조회 |
| GET | [/api/v1/network/certificates/server/{certificateId}](/api/network/get-certificates-server-certificateid) | SERVER 인증서 단건 조회 |
| DELETE | [/api/v1/network/certificates/server/{certificateId}](/api/network/delete-certificates-server-certificateid) | SERVER 인증서 삭제 |
| GET | [/api/v1/network/certificates/server/{certificateId}/download](/api/network/get-certificates-server-certificateid-download) | SERVER 인증서를 ZIP 번들로 다운로드 |
| GET | [/api/v1/network/certificates/ca](/api/network/get-certificates-ca) | CA 인증서 목록을 조회합니다 (Secret 기반) |
| POST | [/api/v1/network/certificates/ca](/api/network/post-certificates-ca) | CA 인증서를 생성합니다 (단일 Secret 구조) |
| GET | [/api/v1/network/certificates/ca/selectable](/api/network/get-certificates-ca-selectable) | Two-way(mTLS) 설정 시 선택용 CA 인증서 목록 조회 |
| GET | [/api/v1/network/certificates/ca/{certificateId}/listeners](/api/network/get-certificates-ca-certificateid-listeners) | CA 인증서(Secret)에 연결된 리스너 목록 조회 |
| GET | [/api/v1/network/certificates/ca/{certificateId}](/api/network/get-certificates-ca-certificateid) | CA 인증서 단건 조회 |
| DELETE | [/api/v1/network/certificates/ca/{certificateId}](/api/network/delete-certificates-ca-certificateid) | CA 인증서 삭제 |
| GET | [/api/v1/network/certificates/ca/{certificateId}/download](/api/network/get-certificates-ca-certificateid-download) | CA 인증서를 ZIP 번들로 다운로드 |

## 테이블 컬럼 설정

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/columns-config/{domain}/{resource}](/api/network/get-columns-config-domain-resource) | domain/resource 기반 테이블 컬럼 설정 조회 |
| PUT | [/api/v1/network/columns-config/{domain}/{resource}](/api/network/put-columns-config-domain-resource) | 테이블 컬럼 설정 저장 |
| POST | [/api/v1/network/columns-config/{domain}/{resource}/reset](/api/network/post-columns-config-domain-resource-reset) | domain/resource 기반 테이블 컬럼 설정을 기본값으로 초기화 |

## 포트

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/ports](/api/network/get-ports) | 포트 목록 조회 |
| POST | [/api/v1/network/ports](/api/network/post-ports) | 포트 생성 |
| GET | [/api/v1/network/ports/connectable](/api/network/get-ports-connectable) | 연결 가능한 포트 목록 조회 |
| GET | [/api/v1/network/ports/instance-sg-candidates](/api/network/get-ports-instance-sg-candidates) | 인스턴스 SG 후보 포트 목록 조회 |
| GET | [/api/v1/network/ports/instance-fixed-ips/{instanceId}](/api/network/get-ports-instance-fixed-ips-instanceid) | 인스턴스에 연결된 Fixed IP 목록 조회 |
| GET | [/api/v1/network/ports/instance-interfaces/{instanceId}](/api/network/get-ports-instance-interfaces-instanceid) | 인스턴스 인터페이스 목록 조회 |
| GET | [/api/v1/network/ports/{portId}](/api/network/get-ports-portid) | 포트 단건 조회 |
| PUT | [/api/v1/network/ports/{portId}](/api/network/put-ports-portid) | 포트 수정 |
| DELETE | [/api/v1/network/ports/{portId}](/api/network/delete-ports-portid) | 포트 삭제 |
| GET | [/api/v1/network/ports/{portId}/fixed-ips](/api/network/get-ports-portid-fixed-ips) | 포트의 Fixed IP 목록 조회 |
| GET | [/api/v1/network/ports/{portId}/security-groups](/api/network/get-ports-portid-security-groups) | 포트에 연결된 보안 그룹 목록 조회 |
| GET | [/api/v1/network/ports/{portId}/allowed-address-pairs](/api/network/get-ports-portid-allowed-address-pairs) | 포트의 Allowed Address Pair 목록 조회 |

## 풀

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/pools](/api/network/post-pools) | 풀 생성 |
| GET | [/api/v1/network/pools](/api/network/get-pools) | 풀 목록 조회 |
| GET | [/api/v1/network/pools/{poolId}](/api/network/get-pools-poolid) | Pool 단건 조회 |
| PUT | [/api/v1/network/pools/{poolId}](/api/network/put-pools-poolid) | Pool 수정 |
| DELETE | [/api/v1/network/pools/{poolId}](/api/network/delete-pools-poolid) | Pool 삭제 |
| GET | [/api/v1/network/pools/{poolId}/instances/connectable](/api/network/get-pools-poolid-instances-connectable) | 풀에 멤버로 추가 가능한 인스턴스 후보 목록 조회 |

## 할당량

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/quotas](/api/network/get-quotas) | 프로젝트의 네트워크 리소스 할당량 조회 |

## 헬스 모니터

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/health-monitors](/api/network/post-health-monitors) | Health Monitor 생성 |
| GET | [/api/v1/network/health-monitors/{healthMonitorId}](/api/network/get-health-monitors-healthmonitorid) | Health Monitor 조회 |
| PUT | [/api/v1/network/health-monitors/{healthMonitorId}](/api/network/put-health-monitors-healthmonitorid) | Health Monitor 수정 |
| DELETE | [/api/v1/network/health-monitors/{healthMonitorId}](/api/network/delete-health-monitors-healthmonitorid) | Health Monitor 삭제 |


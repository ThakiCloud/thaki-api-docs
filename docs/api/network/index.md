# 네트워크

오퍼레이션 125개. OpenAPI 스펙 내려받기 — [network.openapi.json](/network.openapi.json)

## availability-zones

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/availability-zones](/api/network/get-availability-zones) | List Availability Zones |

## certificates

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/certificates/server/export/csv](/api/network/get-certificates-server-export-csv) | Download Server Certificates |
| GET | [/api/v1/network/certificates/server/{certificateId}/listeners](/api/network/get-certificates-server-certificateid-listeners) | List Server Certificate Listeners |
| GET | [/api/v1/network/certificates/server](/api/network/get-certificates-server) | List Server Certificates |
| POST | [/api/v1/network/certificates/server](/api/network/post-certificates-server) | Create Server Certificate |
| GET | [/api/v1/network/certificates/server/selectable](/api/network/get-certificates-server-selectable) | List Selectable Server Certificates |
| GET | [/api/v1/network/certificates/server/{certificateId}](/api/network/get-certificates-server-certificateid) | Get Server Certificate |
| DELETE | [/api/v1/network/certificates/server/{certificateId}](/api/network/delete-certificates-server-certificateid) | Delete Server Certificate |
| GET | [/api/v1/network/certificates/server/{certificateId}/download](/api/network/get-certificates-server-certificateid-download) | Download Server Certificate |
| GET | [/api/v1/network/certificates/ca](/api/network/get-certificates-ca) | List Ca Certificates |
| POST | [/api/v1/network/certificates/ca](/api/network/post-certificates-ca) | Create Ca Certificate |
| GET | [/api/v1/network/certificates/ca/selectable](/api/network/get-certificates-ca-selectable) | List Selectable Ca Certificates |
| GET | [/api/v1/network/certificates/ca/{certificateId}/listeners](/api/network/get-certificates-ca-certificateid-listeners) | List Ca Certificate Listeners |
| GET | [/api/v1/network/certificates/ca/{certificateId}](/api/network/get-certificates-ca-certificateid) | Get Ca Certificate |
| DELETE | [/api/v1/network/certificates/ca/{certificateId}](/api/network/delete-certificates-ca-certificateid) | Delete Ca Certificate |
| GET | [/api/v1/network/certificates/ca/{certificateId}/download](/api/network/get-certificates-ca-certificateid-download) | Download Ca Certificate |

## columns-config

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/columns-config/{domain}/{resource}](/api/network/get-columns-config-domain-resource) | 테이블 컬럼 설정 조회 |
| PUT | [/api/v1/network/columns-config/{domain}/{resource}](/api/network/put-columns-config-domain-resource) | 테이블 컬럼 설정 업데이트 |
| POST | [/api/v1/network/columns-config/{domain}/{resource}/reset](/api/network/post-columns-config-domain-resource-reset) | 테이블 컬럼 설정 기본값 초기화 |

## external-firewall-rules

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/external-firewalls/{firewallId}/rules](/api/network/get-external-firewalls-firewallid-rules) | List Firewall Rules |
| POST | [/api/v1/network/external-firewalls/{firewallId}/rules](/api/network/post-external-firewalls-firewallid-rules) | Create Firewall Rule |
| GET | [/api/v1/network/external-firewalls/{firewallId}/rules/{ruleId}](/api/network/get-external-firewalls-firewallid-rules-ruleid) | Get Firewall Rule |
| DELETE | [/api/v1/network/external-firewalls/{firewallId}/rules/{ruleId}](/api/network/delete-external-firewalls-firewallid-rules-ruleid) | Delete Firewall Rule |

## external-firewalls

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/external-firewalls](/api/network/get-external-firewalls) | List Firewalls |
| POST | [/api/v1/network/external-firewalls](/api/network/post-external-firewalls) | Create Firewall |
| GET | [/api/v1/network/external-firewalls/networks](/api/network/get-external-firewalls-networks) | List External Networks |
| GET | [/api/v1/network/external-firewalls/{firewallId}](/api/network/get-external-firewalls-firewallid) | Get Firewall |
| PUT | [/api/v1/network/external-firewalls/{firewallId}](/api/network/put-external-firewalls-firewallid) | Update Firewall |
| DELETE | [/api/v1/network/external-firewalls/{firewallId}](/api/network/delete-external-firewalls-firewallid) | Delete Firewall |

## floating-ips

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/floating-ips/export/csv](/api/network/get-floating-ips-export-csv) | Download Floating Ips |
| GET | [/api/v1/network/floating-ips](/api/network/get-floating-ips) | List Floating Ips |
| POST | [/api/v1/network/floating-ips](/api/network/post-floating-ips) | Create Floating Ip |
| GET | [/api/v1/network/floating-ips/{floatingIpId}/instances/connectable](/api/network/get-floating-ips-floatingipid-instances-connectable) | List Floating Ip Connectable Instances |
| GET | [/api/v1/network/floating-ips/{floatingIpId}/load-balancers/connectable](/api/network/get-floating-ips-floatingipid-load-balancers-connectable) | List Floating Ip Connectable Load Balancers |
| GET | [/api/v1/network/floating-ips/{floatingIpId}/ports/connectable](/api/network/get-floating-ips-floatingipid-ports-connectable) | List Floating Ip Connectable Ports |
| GET | [/api/v1/network/floating-ips/{floatingIpId}](/api/network/get-floating-ips-floatingipid) | Get Floating Ip |
| PUT | [/api/v1/network/floating-ips/{floatingIpId}](/api/network/put-floating-ips-floatingipid) | Update Floating Ip |
| DELETE | [/api/v1/network/floating-ips/{floatingIpId}](/api/network/delete-floating-ips-floatingipid) | Delete Floating Ip |

## health-monitors

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/health-monitors](/api/network/post-health-monitors) | Health Monitor 생성 |
| GET | [/api/v1/network/health-monitors/{healthMonitorId}](/api/network/get-health-monitors-healthmonitorid) | Health Monitor 조회 |
| PUT | [/api/v1/network/health-monitors/{healthMonitorId}](/api/network/put-health-monitors-healthmonitorid) | Health Monitor 수정 |
| DELETE | [/api/v1/network/health-monitors/{healthMonitorId}](/api/network/delete-health-monitors-healthmonitorid) | Health Monitor 삭제 |

## l7-policies

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/l7-policies](/api/network/post-l7-policies) | L7 Policy 생성 |
| GET | [/api/v1/network/l7-policies](/api/network/get-l7-policies) | L7 Policy 목록 조회 |
| GET | [/api/v1/network/l7-policies/{policyId}](/api/network/get-l7-policies-policyid) | L7 Policy 단건 조회 |
| PUT | [/api/v1/network/l7-policies/{policyId}](/api/network/put-l7-policies-policyid) | L7 Policy 수정 |
| DELETE | [/api/v1/network/l7-policies/{policyId}](/api/network/delete-l7-policies-policyid) | L7 Policy 삭제 |
| POST | [/api/v1/network/l7-policies/{policyId}/rules](/api/network/post-l7-policies-policyid-rules) | L7 Rule 생성 |
| GET | [/api/v1/network/l7-policies/{policyId}/rules](/api/network/get-l7-policies-policyid-rules) | L7 Rule 목록 조회 |
| PUT | [/api/v1/network/l7-policies/{policyId}/rules/{ruleId}](/api/network/put-l7-policies-policyid-rules-ruleid) | L7 Rule 수정 |
| DELETE | [/api/v1/network/l7-policies/{policyId}/rules/{ruleId}](/api/network/delete-l7-policies-policyid-rules-ruleid) | L7 Rule 삭제 |

## listeners

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/listeners](/api/network/post-listeners) | Listener 생성 |
| GET | [/api/v1/network/listeners](/api/network/get-listeners) | Listener 목록 조회 |
| GET | [/api/v1/network/listeners/{listenerId}](/api/network/get-listeners-listenerid) | Listener 단건 조회 |
| PUT | [/api/v1/network/listeners/{listenerId}](/api/network/put-listeners-listenerid) | Listener 수정 |
| DELETE | [/api/v1/network/listeners/{listenerId}](/api/network/delete-listeners-listenerid) | Delete Listener |
| GET | [/api/v1/network/listeners/{listenerId}/certificates](/api/network/get-listeners-listenerid-certificates) | Listener 인증서 목록 조회 |

## load-balancers

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/load-balancers](/api/network/post-load-balancers) | LoadBalancer 생성 |
| GET | [/api/v1/network/load-balancers](/api/network/get-load-balancers) | LoadBalancer 목록 조회 |
| GET | [/api/v1/network/load-balancers/export/csv](/api/network/get-load-balancers-export-csv) | Download Load Balancers |
| GET | [/api/v1/network/load-balancers/{loadBalancerId}](/api/network/get-load-balancers-loadbalancerid) | LoadBalancer 단건 조회 |
| PUT | [/api/v1/network/load-balancers/{loadBalancerId}](/api/network/put-load-balancers-loadbalancerid) | LoadBalancer 수정 |
| DELETE | [/api/v1/network/load-balancers/{loadBalancerId}](/api/network/delete-load-balancers-loadbalancerid) | LoadBalancer 삭제 |

## members

| 메서드 | 경로 | 설명 |
|---|---|---|
| PUT | [/api/v1/network/pools/{poolId}/members](/api/network/put-pools-poolid-members) | Member 일괄 생성 |
| GET | [/api/v1/network/pools/{poolId}/members](/api/network/get-pools-poolid-members) | Member 목록 조회 |
| PUT | [/api/v1/network/pools/{poolId}/members/{memberId}](/api/network/put-pools-poolid-members-memberid) | Member 수정 |
| DELETE | [/api/v1/network/pools/{poolId}/members/{memberId}](/api/network/delete-pools-poolid-members-memberid) | Delete Member |

## networks

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/networks/export/csv](/api/network/get-networks-export-csv) | Download Networks |
| GET | [/api/v1/network/networks](/api/network/get-networks) | List Networks |
| POST | [/api/v1/network/networks](/api/network/post-networks) | Create Network |
| GET | [/api/v1/network/networks/subnet-connectability](/api/network/get-networks-subnet-connectability) | List Connectable Networks |
| GET | [/api/v1/network/networks/external-gateway-connectability](/api/network/get-networks-external-gateway-connectability) | List External Gateway Connectability Networks |
| GET | [/api/v1/network/networks/{networkId}](/api/network/get-networks-networkid) | Get Network |
| PUT | [/api/v1/network/networks/{networkId}](/api/network/put-networks-networkid) | Update Network |
| DELETE | [/api/v1/network/networks/{networkId}](/api/network/delete-networks-networkid) | Delete Network |

## pools

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/pools](/api/network/post-pools) | Pool 생성 |
| GET | [/api/v1/network/pools](/api/network/get-pools) | Pool 목록 조회 |
| GET | [/api/v1/network/pools/{poolId}](/api/network/get-pools-poolid) | Pool 단건 조회 |
| PUT | [/api/v1/network/pools/{poolId}](/api/network/put-pools-poolid) | Pool 수정 |
| DELETE | [/api/v1/network/pools/{poolId}](/api/network/delete-pools-poolid) | Pool 삭제 |
| GET | [/api/v1/network/pools/{poolId}/instances/connectable](/api/network/get-pools-poolid-instances-connectable) | Member 추가 후보 인스턴스 목록 조회 |

## ports

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/ports/export/csv](/api/network/get-ports-export-csv) | Download Ports |
| GET | [/api/v1/network/ports](/api/network/get-ports) | List Ports |
| POST | [/api/v1/network/ports](/api/network/post-ports) | Create Port |
| GET | [/api/v1/network/ports/connectable](/api/network/get-ports-connectable) | List Connectable Ports |
| GET | [/api/v1/network/ports/instance-sg-candidates](/api/network/get-ports-instance-sg-candidates) | List Instance Sg Candidates Ports |
| GET | [/api/v1/network/ports/instance-fixed-ips/{instanceId}](/api/network/get-ports-instance-fixed-ips-instanceid) | List Instance Fixed Ips |
| GET | [/api/v1/network/ports/instance-interfaces/{instanceId}](/api/network/get-ports-instance-interfaces-instanceid) | List Instance Interfaces |
| GET | [/api/v1/network/ports/{portId}](/api/network/get-ports-portid) | Get Port |
| PUT | [/api/v1/network/ports/{portId}](/api/network/put-ports-portid) | Update Port |
| DELETE | [/api/v1/network/ports/{portId}](/api/network/delete-ports-portid) | Delete Port |
| GET | [/api/v1/network/ports/{portId}/fixed-ips](/api/network/get-ports-portid-fixed-ips) | List Port Fixed Ips |
| GET | [/api/v1/network/ports/{portId}/security-groups](/api/network/get-ports-portid-security-groups) | List Port Security Groups |
| GET | [/api/v1/network/ports/{portId}/allowed-address-pairs](/api/network/get-ports-portid-allowed-address-pairs) | List Port Allowed Address Pairs |

## quotas

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/quotas](/api/network/get-quotas) | 네트워크 리소스 할당량 조회 |

## routers

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/routers/export/csv](/api/network/get-routers-export-csv) | Download Routers |
| GET | [/api/v1/network/routers](/api/network/get-routers) | List Routers |
| POST | [/api/v1/network/routers](/api/network/post-routers) | Create Router |
| GET | [/api/v1/network/routers/{routerId}](/api/network/get-routers-routerid) | Get Router |
| PUT | [/api/v1/network/routers/{routerId}](/api/network/put-routers-routerid) | Update Router |
| DELETE | [/api/v1/network/routers/{routerId}](/api/network/delete-routers-routerid) | Delete Router |
| GET | [/api/v1/network/routers/{routerId}/interfaces](/api/network/get-routers-routerid-interfaces) | List Router Interfaces |
| POST | [/api/v1/network/routers/{routerId}/interfaces](/api/network/post-routers-routerid-interfaces) | Add Router Interface |
| DELETE | [/api/v1/network/routers/{routerId}/interfaces/{subnetId}](/api/network/delete-routers-routerid-interfaces-subnetid) | Remove Router Interface |
| POST | [/api/v1/network/routers/{routerId}/routes](/api/network/post-routers-routerid-routes) | Add Router Route |
| DELETE | [/api/v1/network/routers/{routerId}/routes](/api/network/delete-routers-routerid-routes) | Remove Router Route |
| GET | [/api/v1/network/routers/{routerId}/routes](/api/network/get-routers-routerid-routes) | List Router Routes |

## security-groups

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/network/security-groups](/api/network/post-security-groups) | Create Security Group |
| GET | [/api/v1/network/security-groups](/api/network/get-security-groups) | List Security Groups |
| GET | [/api/v1/network/security-groups/export/csv](/api/network/get-security-groups-export-csv) | Download Security Groups |
| GET | [/api/v1/network/security-groups/{securityGroupId}](/api/network/get-security-groups-securitygroupid) | Get Security Group |
| PUT | [/api/v1/network/security-groups/{securityGroupId}](/api/network/put-security-groups-securitygroupid) | Update Security Group |
| DELETE | [/api/v1/network/security-groups/{securityGroupId}](/api/network/delete-security-groups-securitygroupid) | Delete Security Group |
| GET | [/api/v1/network/security-groups/{securityGroupId}/rules](/api/network/get-security-groups-securitygroupid-rules) | List Security Group Rules |
| POST | [/api/v1/network/security-groups/{securityGroupId}/rules](/api/network/post-security-groups-securitygroupid-rules) | Create Security Group Rule |
| POST | [/api/v1/network/security-groups/{securityGroupId}/rules/batch](/api/network/post-security-groups-securitygroupid-rules-batch) | Create Security Group Rules Batch |
| DELETE | [/api/v1/network/security-groups/{securityGroupId}/rules/{ruleId}](/api/network/delete-security-groups-securitygroupid-rules-ruleid) | Delete Security Group Rule |

## subnets

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/subnets](/api/network/get-subnets) | List Subnets |
| POST | [/api/v1/network/subnets](/api/network/post-subnets) | Create Subnet |
| GET | [/api/v1/network/subnets/{subnetId}](/api/network/get-subnets-subnetid) | Get Subnet |
| PUT | [/api/v1/network/subnets/{subnetId}](/api/network/put-subnets-subnetid) | Update Subnet |
| DELETE | [/api/v1/network/subnets/{subnetId}](/api/network/delete-subnets-subnetid) | Delete Subnet |

## 기타

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/network/](/api/network/get) | Root |
| GET | [/api/v1/network/livez](/api/network/get-livez) | Liveness Check |
| GET | [/api/v1/network/readyz](/api/network/get-readyz) | Readiness Check |


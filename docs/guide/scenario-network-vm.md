# 네트워크 구성부터 VM 접속까지

네트워크·서브넷·라우터·보안 그룹을 새로 만들고, 그 위에 VM을 생성해 Floating IP로 외부 접속을 여는 전체 흐름입니다. 인증 헤더 준비는 [인증 준비](/guide/authentication)를 먼저 완료하십시오.

## 사전 준비

이후 모든 예시는 아래 헤더 배열과 기본 URL을 사용합니다.

```bash
H=(-H "Thaki-Api-Key: $KEY" -H "Thaki-Api-Secret: $SECRET" -H "X-Domain-Id: acme" -H "X-Domain-Name: acme" -H "X-Partition-Id: proj-batch")
B=https://<your-console-host>/api/v1
```

## 1. 네트워크와 서브넷 생성

네트워크와 서브넷을 한 번에 생성합니다. 응답은 전체 성공 시 201, 부분 성공 시 207입니다.

```bash
curl -s -X POST "$B/network/networks" "${H[@]}" -H 'Content-Type: application/json' -d '{
  "name": "app-net",
  "createSubnet": { "name": "app-subnet", "cidr": "10.0.0.0/24", "ipVersion": 4, "gatewayIp": "10.0.0.1" }
}'
```

::: warning 부분 성공(207) 확인
응답의 `result.status`가 `"partial"`이면 네트워크는 이미 생성된 상태입니다. `result.operations[]`에서 실패한 리소스를 확인하십시오.
:::

## 2. 라우터 생성

외부 네트워크는 `scope=external`로 조회한 `networkId`를 사용합니다.

```bash
curl -s "$B/network/networks?scope=external" "${H[@]}"

curl -s -X POST "$B/network/routers" "${H[@]}" -H 'Content-Type: application/json' -d '{
  "name": "app-router",
  "externalGatewayInfo": { "networkId": "<외부-네트워크-ID>" }
}'
```

## 3. 라우터에 내부 서브넷 인터페이스 추가

```bash
curl -s -X POST "$B/network/routers/<routerId>/interfaces" "${H[@]}" -H 'Content-Type: application/json' -d '{
  "subnetId": "<app-subnet-ID>"
}'
```

## 4. 보안 그룹 생성과 규칙 배치 추가

SSH(22)와 ICMP를 허용하는 규칙을 한 번에 추가합니다.

```bash
curl -s -X POST "$B/network/security-groups" "${H[@]}" -H 'Content-Type: application/json' -d '{ "name": "app-sg" }'

curl -s -X POST "$B/network/security-groups/<securityGroupId>/rules/batch" "${H[@]}" -H 'Content-Type: application/json' -d '{
  "rules": [
    { "direction": "INGRESS", "protocol": "TCP", "portRangeMin": 22, "portRangeMax": 22, "remoteIpPrefix": "0.0.0.0/0" },
    { "direction": "INGRESS", "protocol": "ICMP", "icmpType": 8, "icmpCode": 0, "remoteIpPrefix": "0.0.0.0/0" }
  ]
}'
```

## 5. VM 생성

앞서 만든 네트워크·서브넷·보안 그룹을 `networkInfo`에 지정합니다(생성 요청 전체 필드는 [컴퓨트 레퍼런스](/api/compute) 참조).

```bash
curl -s -X POST "$B/compute/instances" "${H[@]}" -H 'Content-Type: application/json' -d '{
  "basicInfo": { "name": "app-vm-01", "availabilityZone": "nova" },
  "flavorInfo": { "flavorId": "2" },
  "sourceInfo": { "sourceId": "<이미지-ID>", "sourceType": "image", "systemDisk": null },
  "networkInfo": {
    "networks": [ { "networkId": "<app-net-ID>", "virtualLans": [ { "type": "auto", "subnetId": "<app-subnet-ID>" } ] } ],
    "securityGroupIds": ["<securityGroupId>"]
  },
  "authenticationInfo": { "loginType": "keyPair", "keyPairName": "app-key" }
}'
```

201은 접수를 의미하며 상태는 `BUILDING`으로 시작합니다. `basicInfo.status`가 `ACTIVE`(성공) 또는 `ERROR`(실패)가 될 때까지 5~10초 간격으로 폴링합니다.

```bash
curl -s "$B/compute/instances/<instanceId>" "${H[@]}"
```

시작·정지도 같은 방식으로 202를 접수한 뒤 상태를 폴링해 완료를 확인합니다.

```bash
curl -s -X POST "$B/compute/instances/<instanceId>/actions?action=stop" "${H[@]}"
curl -s -X POST "$B/compute/instances/<instanceId>/actions?action=start" "${H[@]}"
```

## 6. Floating IP 생성 및 연결

Floating IP를 생성한 뒤 인스턴스의 포트에 연결합니다.

```bash
curl -s -X POST "$B/network/floating-ips" "${H[@]}" -H 'Content-Type: application/json' -d '{
  "floatingNetworkId": "<외부-네트워크-ID>"
}'

curl -s -X PUT "$B/network/floating-ips/<floatingIpId>" "${H[@]}" -H 'Content-Type: application/json' -d '{
  "portId": "<portId>", "instanceId": "<instanceId>"
}'
```

이제 발급된 Floating IP로 VM에 접속할 수 있습니다.

## 7. 정리(역순 삭제)

리소스는 생성의 역순으로 삭제해야 409가 나지 않습니다. 먼저 Floating IP를 해제·삭제해야 후속 삭제가 막히지 않습니다.

```bash
curl -s -X PUT "$B/network/floating-ips/<floatingIpId>" "${H[@]}" -H 'Content-Type: application/json' -d '{ "portId": null }'
curl -s -X DELETE "$B/network/floating-ips/<floatingIpId>" "${H[@]}"

curl -s -X DELETE "$B/compute/instances/<instanceId>" "${H[@]}"

curl -s -X DELETE "$B/network/routers/<routerId>/interfaces/<app-subnet-ID>" "${H[@]}"
curl -s -X DELETE "$B/network/routers/<routerId>" "${H[@]}"
curl -s -X DELETE "$B/network/subnets/<app-subnet-ID>" "${H[@]}"
curl -s -X DELETE "$B/network/networks/<app-net-ID>" "${H[@]}"
curl -s -X DELETE "$B/network/security-groups/<securityGroupId>" "${H[@]}"
```

VM 삭제는 204이며, 볼륨 동반 삭제 여부는 삭제 시점이 아니라 생성 시점의 `deletedWithInstance` 값으로 결정됩니다.

::: tip 운영 권고
- Floating IP 연결·해제는 요청 본문의 필드 조합으로 결정됩니다. `instanceId`만 단독으로 보내면 400이 반환되니 반드시 `portId`와 함께 보내십시오.
- `X-Partition-Id`는 대상 리소스가 속한 파티션과 정확히 일치해야 합니다.
- 컨테이너 서비스가 생성한 보안 그룹은 수정과 규칙 삭제가 403으로 막힙니다. 해당 리소스는 컨테이너 쪽 관리 절차를 따르십시오.
:::

전체 API 목록과 파라미터 상세는 [네트워크 레퍼런스](/api/network)와 [컴퓨트 레퍼런스](/api/compute)를 참조하십시오.

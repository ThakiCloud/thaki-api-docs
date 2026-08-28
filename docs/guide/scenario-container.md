# 쿠버네티스 클러스터와 워크로드

클러스터를 만들고, 그 위에 Deployment를 배포·운영한 뒤 정리하는 전체 흐름입니다. 인증 헤더 준비는 [인증 준비](/guide/authentication)를 먼저 완료하십시오.

## 1. 클러스터 생성

### 참조 값 조회

```bash
H=(-H "Thaki-Api-Key: $KEY" -H "Thaki-Api-Secret: $SECRET" -H "X-Domain-Id: acme" -H "X-Domain-Name: acme" -H "X-Partition-Id: proj-batch")
B=https://<your-console-host>/api/v1

curl -s "$B/container/cluster/cluster-provisioning/k8s-versions" "${H[@]}"   # 지원 버전
curl -s "$B/compute/images?access=all&osDistro=ubuntu" "${H[@]}"             # 노드 이미지
curl -s "$B/compute/flavors?flavorType=cpu" "${H[@]}"                        # 노드 Flavor
curl -s "$B/compute/key-pairs" "${H[@]}"                                     # 키 페어
curl -s "$B/network/networks" "${H[@]}"                                      # 외부/내부 네트워크
curl -s "$B/network/subnets?networkId=<internalNetworkId>" "${H[@]}"         # 내부 서브넷
```

### 생성 요청

```bash
curl -s -X POST "$B/container/cluster/cluster-provisioning" "${H[@]}" -H 'Content-Type: application/json' -d @cluster.json
```

202로 접수되며 `PENDING → PROVISIONING → ACTIVE/ERROR` 순으로 진행됩니다.

### 상태 폴링

```bash
curl -s "$B/container/cluster/clusters/<clusterId>" "${H[@]}"
```

`status`가 `ACTIVE`(성공) 또는 `ERROR`(실패)가 될 때까지 30초 간격으로 조회합니다. 생성은 수 분~십수 분이 걸릴 수 있습니다.

### kubeconfig 조회

`ACTIVE`가 된 이후에 조회할 수 있습니다.

```bash
curl -s "$B/container/cluster/clusters/<clusterId>/kubeconfig" "${H[@]}"
```

::: warning kubeconfig는 관리자 자격증명입니다
비밀 저장소에 보관하고, 자동화 파이프라인에는 범위가 좁은 클러스터 내부 토큰을 사용하십시오.
:::

## 2. Deployment 배포와 운영

클러스터가 `ACTIVE`가 되면 워크로드를 배포합니다. 워크로드 API는 `clusterId`와 `namespace`를 쿼리 파라미터로 받습니다.

```bash
H=(-H "Thaki-Api-Key: $KEY" -H "Thaki-Api-Secret: $SECRET" -H "X-Domain-Id: acme" -H "X-Domain-Name: acme")
B=https://<your-console-host>/api/v1/container/workload
Q="clusterId=123&namespace=default"
```

### 템플릿 조회 후 생성

기본 템플릿을 받아 수정한 뒤 생성합니다.

```bash
curl -s "$B/deployments/template/yaml" "${H[@]}"

curl -s -X POST "$B/deployments?$Q" "${H[@]}" -H 'Content-Type: application/json' \
  -d '{"yamlContent": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest"}'
```

### 상태 확인

`status`가 `Active`가 될 때까지 조회합니다.

```bash
curl -s "$B/deployments/my-app?$Q" "${H[@]}"
```

### 스케일 조정

```bash
curl -s -X POST "$B/deployments/my-app/scale?$Q" "${H[@]}" -H 'Content-Type: application/json' -d '{"replicas": 3}'
```

### 소속 Pod와 로그 확인

```bash
curl -s "$B/deployments/my-app/pods?$Q" "${H[@]}"
curl -s "$B/pods/my-app-6d4cf56db6-x1a2b/containers/nginx/logs?$Q&tail=200" "${H[@]}"
```

::: tip 실시간 로그는 미지원
로그 스트리밍(follow)은 지원하지 않습니다. 주기적으로 조회하는 방식으로 대체하십시오.
:::

### Service·Ingress로 외부 노출

```bash
curl -s -X POST "https://<your-console-host>/api/v1/container/service-routing/service?clusterId=123" "${H[@]}" \
  -H 'Content-Type: application/json' -d '{"yamlContent": "apiVersion: v1\nkind: Service\n..."}'

curl -s -X POST "https://<your-console-host>/api/v1/container/service-routing/ingress?clusterId=123" "${H[@]}" \
  -H 'Content-Type: application/json' -d '{"yamlContent": "apiVersion: networking.k8s.io/v1\nkind: Ingress\n..."}'
```

### 재시작·롤백·삭제

```bash
curl -s -X POST "$B/deployments/my-app/redeploy?$Q" "${H[@]}"
curl -s -X POST "$B/deployments/my-app/rollback?$Q" "${H[@]}" -H 'Content-Type: application/json' -d '{"toRevision": 2}'
curl -s -X DELETE "$B/deployments/my-app?$Q" "${H[@]}"
```

`redeploy`는 설정을 바꾸지 않고 Pod를 롤링 재시작만 합니다. 롤백 전에는 `revision-history`로 대상 리비전을 확인하십시오.

## 3. 클러스터 삭제

워크로드 정리가 끝나면 클러스터를 삭제합니다. 202로 접수되며 `status`가 `DELETING` → `DELETED`로 진행됩니다.

```bash
curl -s -X DELETE "$B/container/cluster/clusters/<clusterId>" "${H[@]}"
```

::: warning 삭제 가능 상태를 확인하십시오
삭제 가능한 클러스터 상태는 `ACTIVE`, `PROVISIONING`, `ERROR`, `PENDING`뿐입니다(그 외 409). App Catalog 앱이 남아 있으면 409가 반환되므로 먼저 제거하십시오.
:::

## 운영 권고

- 앱 노출 순서: Deployment `Active` 확인 → Service 생성 → Ingress 생성 → Ingress `Active` 후 접속 확인.
- 워크로드 수정은 전체 교체입니다. 반드시 현재 매니페스트를 조회해 수정한 뒤 제출하십시오.
- 클러스터는 스케일·업그레이드 API가 없으므로 사양 변경은 새 클러스터 생성 → 워크로드 이전 → 구 클러스터 삭제 순으로 진행하십시오.

전체 API 목록과 파라미터 상세는 [컨테이너 레퍼런스](/api/container/)를 참조하십시오.

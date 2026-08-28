# 컨테이너

오퍼레이션 245개. OpenAPI 스펙 내려받기 — [container.openapi.json](/container.openapi.json)

## App Catalog - Apps

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/app-catalog/apps](/api/container/get-app-catalog-apps) | List Catalog Apps |
| GET | [/api/v1/container/app-catalog/apps/{app_name}/values-schema](/api/container/get-app-catalog-apps-app-name-values-schema) | App Catalog values.schema.json 조회 |
| GET | [/api/v1/container/app-catalog/apps/{app_name}/install-check](/api/container/get-app-catalog-apps-app-name-install-check) | App Catalog 설치 의존성 확인 |
| GET | [/api/v1/container/app-catalog/apps/{app_name}/config-schema](/api/container/get-app-catalog-apps-app-name-config-schema) | App Catalog config 입력 schema 조회 |
| POST | [/api/v1/container/app-catalog/apps/{app_name}/values-yaml](/api/container/post-app-catalog-apps-app-name-values-yaml) | App Catalog values.yaml 생성 |
| GET | [/api/v1/container/app-catalog/apps/{app_name}/yaml-templates](/api/container/get-app-catalog-apps-app-name-yaml-templates) | App Catalog YAML template mode 목록 조회 |
| GET | [/api/v1/container/app-catalog/apps/{app_name}/yaml-templates/{mode}](/api/container/get-app-catalog-apps-app-name-yaml-templates-mode) | App Catalog YAML template 상세 조회 |

## App Catalog - Deployments

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/container/app-catalog/deployments](/api/container/post-app-catalog-deployments) | Create App Catalog Deployment |
| GET | [/api/v1/container/app-catalog/deployments](/api/container/get-app-catalog-deployments) | List App Catalog Deployments |
| GET | [/api/v1/container/app-catalog/deployments/name-check](/api/container/get-app-catalog-deployments-name-check) | App Catalog user-app 이름 중복 확인 |
| GET | [/api/v1/container/app-catalog/deployments/detail](/api/container/get-app-catalog-deployments-detail) | ArgoCD Application name으로 App Catalog 배포 상세 조회 |
| DELETE | [/api/v1/container/app-catalog/deployments/detail](/api/container/delete-app-catalog-deployments-detail) | ArgoCD Application name으로 App Catalog 배포 삭제 |
| POST | [/api/v1/container/app-catalog/deployments/detail/credentials/{credential_id}/reveal](/api/container/post-app-catalog-deployments-detail-credentials-credential-id-reveal) | ArgoCD Application name으로 App Catalog credential 조회 |
| GET | [/api/v1/container/app-catalog/deployments/{deployment_id}/bound-apps](/api/container/get-app-catalog-deployments-deployment-id-bound-apps) | Operator에 연결된 App Catalog application 배포 목록 |
| GET | [/api/v1/container/app-catalog/deployments/{deployment_id}](/api/container/get-app-catalog-deployments-deployment-id) | Get App Catalog Deployment Detail |
| PATCH | [/api/v1/container/app-catalog/deployments/{deployment_id}](/api/container/patch-app-catalog-deployments-deployment-id) | Update App Catalog Deployment |
| DELETE | [/api/v1/container/app-catalog/deployments/{deployment_id}](/api/container/delete-app-catalog-deployments-deployment-id) | Delete App Catalog Deployment |
| POST | [/api/v1/container/app-catalog/deployments/{deployment_id}/credentials/{credential_id}/reveal](/api/container/post-app-catalog-deployments-deployment-id-credentials-credential-id-reveal) | Reveal App Catalog Deployment Credential |
| POST | [/api/v1/container/app-catalog/deployments/{deployment_id}/redeploy](/api/container/post-app-catalog-deployments-deployment-id-redeploy) | Redeploy App Catalog Deployment |

## App Catalog - Values YAML

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/app-catalog/deployments/{app_name}/values-yaml](/api/container/get-app-catalog-deployments-app-name-values-yaml) | App Catalog 배포 values.yaml 다운로드 |

## Cluster - Clusters

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/clusters](/api/container/get-cluster-clusters) | List Clusters |
| POST | [/api/v1/container/cluster/clusters/register](/api/container/post-cluster-clusters-register) | Register Existing Cluster |
| GET | [/api/v1/container/cluster/clusters/{cluster_id}](/api/container/get-cluster-clusters-cluster-id) | Get Cluster Detail |
| DELETE | [/api/v1/container/cluster/clusters/{cluster_id}](/api/container/delete-cluster-clusters-cluster-id) | 클러스터 삭제 요청 (비동기) |
| PATCH | [/api/v1/container/cluster/clusters/{cluster_id}/appearance](/api/container/patch-cluster-clusters-cluster-id-appearance) | Update Cluster Appearance |
| GET | [/api/v1/container/cluster/clusters/{cluster_id}/kubeconfig](/api/container/get-cluster-clusters-cluster-id-kubeconfig) | Get Kubeconfig |
| POST | [/api/v1/container/cluster/clusters/{cluster_id}/shell](/api/container/post-cluster-clusters-cluster-id-shell) | Kubectl Shell 연결 URL 생성 |
| GET | [/api/v1/container/cluster/clusters/{cluster_id}/dashboard](/api/container/get-cluster-clusters-cluster-id-dashboard) | Get Cluster Dashboard |

## Cluster - Events

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/events](/api/container/get-cluster-events) | List Events |
| GET | [/api/v1/container/cluster/events/{event_name}/manifest](/api/container/get-cluster-events-event-name-manifest) | Get Existing Event Yaml |

## Cluster - Nodes

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/nodes](/api/container/get-cluster-nodes) | List Nodes |
| GET | [/api/v1/container/cluster/nodes/{node_name}](/api/container/get-cluster-nodes-node-name) | Get Node Detail |
| GET | [/api/v1/container/cluster/nodes/{node_name}/images](/api/container/get-cluster-nodes-node-name-images) | List Node Images |
| GET | [/api/v1/container/cluster/nodes/{node_name}/pods](/api/container/get-cluster-nodes-node-name-pods) | List Node Pods |
| GET | [/api/v1/container/cluster/nodes/{node_name}/conditions](/api/container/get-cluster-nodes-node-name-conditions) | List Node Conditions |
| GET | [/api/v1/container/cluster/nodes/{node_name}/events](/api/container/get-cluster-nodes-node-name-events) | List Node Events |
| GET | [/api/v1/container/cluster/nodes/{node_name}/manifest](/api/container/get-cluster-nodes-node-name-manifest) | Get Existing Node Yaml |
| GET | [/api/v1/container/cluster/nodes/{node_name}/manifest/preset](/api/container/get-cluster-nodes-node-name-manifest-preset) | Get Node Manifest Preset |
| PUT | [/api/v1/container/cluster/nodes/{node_name}/manifest/preset](/api/container/put-cluster-nodes-node-name-manifest-preset) | Update Node Manifest Preset |

## Cluster - Provisioning

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/cluster-provisioning/k8s-versions](/api/container/get-cluster-cluster-provisioning-k8s-versions) | List K8S Versions |
| POST | [/api/v1/container/cluster/cluster-provisioning](/api/container/post-cluster-cluster-provisioning) | Create Cluster |

## Cluster - ServiceAccount Token

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/token/{clusterId}/access-token](/api/container/get-cluster-token-clusterid-access-token) | Get Access Token |
| POST | [/api/v1/container/cluster/token/{clusterId}/access-token](/api/container/post-cluster-token-clusterid-access-token) | Create Access Token |
| DELETE | [/api/v1/container/cluster/token/{clusterId}/access-token](/api/container/delete-cluster-token-clusterid-access-token) | Delete Access Token |
| GET | [/api/v1/container/cluster/token/{clusterId}/kubeconfig](/api/container/get-cluster-token-clusterid-kubeconfig) | Get Kubeconfig |

## Policy - LimitRange

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/policy/limit-range](/api/container/get-policy-limit-range) | List Limit Ranges |
| POST | [/api/v1/container/policy/limit-range](/api/container/post-policy-limit-range) | Create Limit Range |
| GET | [/api/v1/container/policy/limit-range/template/yaml](/api/container/get-policy-limit-range-template-yaml) | Get Limit Range Template |
| POST | [/api/v1/container/policy/limit-range/manifest/bulk](/api/container/post-policy-limit-range-manifest-bulk) | Get Bulk Manifest |
| GET | [/api/v1/container/policy/limit-range/{limit_range_name}/manifest](/api/container/get-policy-limit-range-limit-range-name-manifest) | Get Existing Limit Range Yaml |
| PUT | [/api/v1/container/policy/limit-range/{limit_range_name}](/api/container/put-policy-limit-range-limit-range-name) | Update Limit Range |
| DELETE | [/api/v1/container/policy/limit-range/{limit_range_name}](/api/container/delete-policy-limit-range-limit-range-name) | Delete Limit Range |

## Policy - NetworkPolicy

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/policy/network-policy](/api/container/get-policy-network-policy) | List Network Policies |
| POST | [/api/v1/container/policy/network-policy](/api/container/post-policy-network-policy) | Create Network Policy |
| GET | [/api/v1/container/policy/network-policy/template/yaml](/api/container/get-policy-network-policy-template-yaml) | Get Network Policy Template |
| POST | [/api/v1/container/policy/network-policy/manifest/bulk](/api/container/post-policy-network-policy-manifest-bulk) | Get Bulk Manifest |
| GET | [/api/v1/container/policy/network-policy/{network_policy_name}](/api/container/get-policy-network-policy-network-policy-name) | Get Network Policy Detail |
| DELETE | [/api/v1/container/policy/network-policy/{network_policy_name}](/api/container/delete-policy-network-policy-network-policy-name) | Delete Network Policy |
| PUT | [/api/v1/container/policy/network-policy/{network_policy_name}](/api/container/put-policy-network-policy-network-policy-name) | Update Network Policy |
| GET | [/api/v1/container/policy/network-policy/{network_policy_name}/manifest](/api/container/get-policy-network-policy-network-policy-name-manifest) | Get Existing Network Policy Yaml |
| POST | [/api/v1/container/policy/network-policy/match-pods](/api/container/post-policy-network-policy-match-pods) | Match Pods |

## Policy - PodDisruptionBudget

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/policy/pod-disruption-budget](/api/container/get-policy-pod-disruption-budget) | List Pdbs |
| POST | [/api/v1/container/policy/pod-disruption-budget](/api/container/post-policy-pod-disruption-budget) | Create Pdb |
| GET | [/api/v1/container/policy/pod-disruption-budget/template/yaml](/api/container/get-policy-pod-disruption-budget-template-yaml) | Get Pdb Template |
| POST | [/api/v1/container/policy/pod-disruption-budget/manifest/bulk](/api/container/post-policy-pod-disruption-budget-manifest-bulk) | Get Bulk Manifest |
| GET | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}](/api/container/get-policy-pod-disruption-budget-pdb-name) | Get Pdb Detail |
| PUT | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}](/api/container/put-policy-pod-disruption-budget-pdb-name) | Update Pdb |
| DELETE | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}](/api/container/delete-policy-pod-disruption-budget-pdb-name) | Delete Pdb |
| GET | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}/manifest](/api/container/get-policy-pod-disruption-budget-pdb-name-manifest) | Get Existing Pdb Yaml |
| GET | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}/conditions](/api/container/get-policy-pod-disruption-budget-pdb-name-conditions) | List Pdb Conditions |
| GET | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}/events](/api/container/get-policy-pod-disruption-budget-pdb-name-events) | List Pdb Events |
| POST | [/api/v1/container/policy/pod-disruption-budget/match-pods](/api/container/post-policy-pod-disruption-budget-match-pods) | Match Pods |

## Policy - ResourceQuota

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/policy/resource-quota/template/yaml](/api/container/get-policy-resource-quota-template-yaml) | Get Resource Quota Template |
| GET | [/api/v1/container/policy/resource-quota](/api/container/get-policy-resource-quota) | List Resource Quotas |
| POST | [/api/v1/container/policy/resource-quota](/api/container/post-policy-resource-quota) | Create Resource Quota |
| POST | [/api/v1/container/policy/resource-quota/manifest/bulk](/api/container/post-policy-resource-quota-manifest-bulk) | Get Bulk Manifest |
| GET | [/api/v1/container/policy/resource-quota/{resource_quota_name}/manifest](/api/container/get-policy-resource-quota-resource-quota-name-manifest) | Get Existing Resource Quota Yaml |
| PUT | [/api/v1/container/policy/resource-quota/{resource_quota_name}](/api/container/put-policy-resource-quota-resource-quota-name) | Update Resource Quota |
| DELETE | [/api/v1/container/policy/resource-quota/{resource_quota_name}](/api/container/delete-policy-resource-quota-resource-quota-name) | Delete Resource Quota |

## Search - Resource Types

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/search/resource-types](/api/container/get-search-resource-types) | Get Resource Type Counts |

## Service - hpa

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/service-routing/hpa](/api/container/get-service-routing-hpa) | List Hpas |
| POST | [/api/v1/container/service-routing/hpa](/api/container/post-service-routing-hpa) | Create Hpa |
| GET | [/api/v1/container/service-routing/hpa/template/yaml](/api/container/get-service-routing-hpa-template-yaml) | Get Hpa Template |
| GET | [/api/v1/container/service-routing/hpa/{hpa_name}/manifest](/api/container/get-service-routing-hpa-hpa-name-manifest) | Get Existing Hpa Yaml |
| POST | [/api/v1/container/service-routing/hpa/manifest/bulk](/api/container/post-service-routing-hpa-manifest-bulk) | Get Bulk Manifest |
| GET | [/api/v1/container/service-routing/hpa/{hpa_name}](/api/container/get-service-routing-hpa-hpa-name) | Get Hpa Detail |
| PUT | [/api/v1/container/service-routing/hpa/{hpa_name}](/api/container/put-service-routing-hpa-hpa-name) | Update Hpa |
| DELETE | [/api/v1/container/service-routing/hpa/{hpa_name}](/api/container/delete-service-routing-hpa-hpa-name) | Delete Hpa |
| GET | [/api/v1/container/service-routing/hpa/{hpa_name}/conditions](/api/container/get-service-routing-hpa-hpa-name-conditions) | List Hpa Conditions |

## Service - ingress

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/service-routing/ingress](/api/container/get-service-routing-ingress) | List All Ingress |
| POST | [/api/v1/container/service-routing/ingress](/api/container/post-service-routing-ingress) | Create Ingress |
| GET | [/api/v1/container/service-routing/ingress/classes/options](/api/container/get-service-routing-ingress-classes-options) | List Ingress Class Options |
| GET | [/api/v1/container/service-routing/ingress/template/yaml](/api/container/get-service-routing-ingress-template-yaml) | Ingress 생성 YAML template 조회 |
| GET | [/api/v1/container/service-routing/ingress/{ingress_name}/manifest](/api/container/get-service-routing-ingress-ingress-name-manifest) | Get Existing Ingress Yaml |
| GET | [/api/v1/container/service-routing/ingress/{ingress_name}/rules](/api/container/get-service-routing-ingress-ingress-name-rules) | List Ingress Rules |
| POST | [/api/v1/container/service-routing/ingress/manifest/bulk](/api/container/post-service-routing-ingress-manifest-bulk) | Get Bulk Manifest |
| PUT | [/api/v1/container/service-routing/ingress/{ingress_name}](/api/container/put-service-routing-ingress-ingress-name) | Update Ingress |
| GET | [/api/v1/container/service-routing/ingress/{ingress_name}](/api/container/get-service-routing-ingress-ingress-name) | Get Ingress Detail |
| DELETE | [/api/v1/container/service-routing/ingress/{ingress_name}](/api/container/delete-service-routing-ingress-ingress-name) | Delete Ingress |

## Service - service

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/service-routing/service](/api/container/get-service-routing-service) | List Services |
| POST | [/api/v1/container/service-routing/service](/api/container/post-service-routing-service) | Create Service |
| GET | [/api/v1/container/service-routing/service/template/yaml](/api/container/get-service-routing-service-template-yaml) | Get Service Template |
| POST | [/api/v1/container/service-routing/service/pods/preview](/api/container/post-service-routing-service-pods-preview) | List Pods By Selector Preview |
| POST | [/api/v1/container/service-routing/service/manifest/bulk](/api/container/post-service-routing-service-manifest-bulk) | Get Bulk Manifest |
| GET | [/api/v1/container/service-routing/service/{service_name}/manifest](/api/container/get-service-routing-service-service-name-manifest) | Get Existing Service Yaml |
| GET | [/api/v1/container/service-routing/service/{service_name}/pods](/api/container/get-service-routing-service-service-name-pods) | List Service Pods |
| GET | [/api/v1/container/service-routing/service/{service_name}/ports](/api/container/get-service-routing-service-service-name-ports) | List Service Ports |
| GET | [/api/v1/container/service-routing/service/{service_name}/conditions](/api/container/get-service-routing-service-service-name-conditions) | List Service Conditions |
| GET | [/api/v1/container/service-routing/service/{service_name}](/api/container/get-service-routing-service-service-name) | Get Service Detail |
| DELETE | [/api/v1/container/service-routing/service/{service_name}](/api/container/delete-service-routing-service-service-name) | Delete Service |
| PUT | [/api/v1/container/service-routing/service/{service_name}](/api/container/put-service-routing-service-service-name) | Update Service |

## Storage - ConfigMaps

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/storage/configmaps](/api/container/get-storage-configmaps) | List Configmaps |
| POST | [/api/v1/container/storage/configmaps](/api/container/post-storage-configmaps) | Create Configmap |
| GET | [/api/v1/container/storage/configmaps/template/yaml](/api/container/get-storage-configmaps-template-yaml) | Get Configmap Template |
| GET | [/api/v1/container/storage/configmaps/{configmap_name}](/api/container/get-storage-configmaps-configmap-name) | Get Configmap Detail |
| PUT | [/api/v1/container/storage/configmaps/{configmap_name}](/api/container/put-storage-configmaps-configmap-name) | Update Configmap |
| DELETE | [/api/v1/container/storage/configmaps/{configmap_name}](/api/container/delete-storage-configmaps-configmap-name) | Delete Configmap |
| GET | [/api/v1/container/storage/configmaps/{configmap_name}/manifest](/api/container/get-storage-configmaps-configmap-name-manifest) | Get Existing Configmap Yaml |

## Storage - PersistentVolumeClaims

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/storage/pvc](/api/container/get-storage-pvc) | List Pvcs |
| POST | [/api/v1/container/storage/pvc](/api/container/post-storage-pvc) | Create Pvc |
| GET | [/api/v1/container/storage/pvc/template/yaml](/api/container/get-storage-pvc-template-yaml) | Get Pvc Template |
| GET | [/api/v1/container/storage/pvc/{pvc_name}](/api/container/get-storage-pvc-pvc-name) | Get Pvc Detail |
| PUT | [/api/v1/container/storage/pvc/{pvc_name}](/api/container/put-storage-pvc-pvc-name) | Update Pvc |
| DELETE | [/api/v1/container/storage/pvc/{pvc_name}](/api/container/delete-storage-pvc-pvc-name) | Delete Pvc |
| GET | [/api/v1/container/storage/pvc/{pvc_name}/conditions](/api/container/get-storage-pvc-pvc-name-conditions) | List Pvc Conditions |
| GET | [/api/v1/container/storage/pvc/{pvc_name}/events](/api/container/get-storage-pvc-pvc-name-events) | List Pvc Events |
| GET | [/api/v1/container/storage/pvc/{pvc_name}/manifest](/api/container/get-storage-pvc-pvc-name-manifest) | Get Existing Pvc Yaml |

## Storage - PersistentVolumes

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/storage/pv](/api/container/get-storage-pv) | List Pvs |
| POST | [/api/v1/container/storage/pv](/api/container/post-storage-pv) | Create Pv |
| GET | [/api/v1/container/storage/pv/template/yaml](/api/container/get-storage-pv-template-yaml) | Get Pv Template |
| GET | [/api/v1/container/storage/pv/{pv_name}](/api/container/get-storage-pv-pv-name) | Get Pv Detail |
| DELETE | [/api/v1/container/storage/pv/{pv_name}](/api/container/delete-storage-pv-pv-name) | Delete Pv |
| PUT | [/api/v1/container/storage/pv/{pv_name}](/api/container/put-storage-pv-pv-name) | Update Pv |
| GET | [/api/v1/container/storage/pv/{pv_name}/manifest](/api/container/get-storage-pv-pv-name-manifest) | Get Existing Pv Yaml |

## Storage - Secrets

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/storage/secrets](/api/container/get-storage-secrets) | List Secrets |
| POST | [/api/v1/container/storage/secrets](/api/container/post-storage-secrets) | Create Secret |
| GET | [/api/v1/container/storage/secrets/template/yaml](/api/container/get-storage-secrets-template-yaml) | Get Secret Template |
| GET | [/api/v1/container/storage/secrets/{secret_name}](/api/container/get-storage-secrets-secret-name) | Get Secret Detail |
| PUT | [/api/v1/container/storage/secrets/{secret_name}](/api/container/put-storage-secrets-secret-name) | Update Secret |
| DELETE | [/api/v1/container/storage/secrets/{secret_name}](/api/container/delete-storage-secrets-secret-name) | Delete Secret |
| GET | [/api/v1/container/storage/secrets/{secret_name}/manifest](/api/container/get-storage-secrets-secret-name-manifest) | Get Existing Secret Yaml |
| GET | [/api/v1/container/storage/secrets/{secret_name}/manifest/decode](/api/container/get-storage-secrets-secret-name-manifest-decode) | Get Existing Secret Yaml Decoded |

## Storage - StorageClasses

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/storage/storage-classes](/api/container/get-storage-storage-classes) | List Storage Classes |
| POST | [/api/v1/container/storage/storage-classes](/api/container/post-storage-storage-classes) | Create Storage Class |
| GET | [/api/v1/container/storage/storage-classes/template/yaml](/api/container/get-storage-storage-classes-template-yaml) | Get Storage Class Template |
| GET | [/api/v1/container/storage/storage-classes/{storage_class_name}/manifest](/api/container/get-storage-storage-classes-storage-class-name-manifest) | Get Existing Storage Class Yaml |
| GET | [/api/v1/container/storage/storage-classes/{storage_class_name}](/api/container/get-storage-storage-classes-storage-class-name) | Get Storage Class Detail |
| PUT | [/api/v1/container/storage/storage-classes/{storage_class_name}](/api/container/put-storage-storage-classes-storage-class-name) | Update Storage Class |
| DELETE | [/api/v1/container/storage/storage-classes/{storage_class_name}](/api/container/delete-storage-storage-classes-storage-class-name) | Delete Storage Class |
| PATCH | [/api/v1/container/storage/storage-classes/{storage_class_name}/default](/api/container/patch-storage-storage-classes-storage-class-name-default) | Set Storage Class As Default |

## Workload - CronJobs

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/cronjobs](/api/container/get-workload-cronjobs) | List Cronjobs |
| POST | [/api/v1/container/workload/cronjobs](/api/container/post-workload-cronjobs) | Create Cronjob |
| GET | [/api/v1/container/workload/cronjobs/template/yaml](/api/container/get-workload-cronjobs-template-yaml) | Get Cronjob Template |
| GET | [/api/v1/container/workload/cronjobs/{cronjob_name}](/api/container/get-workload-cronjobs-cronjob-name) | Get Cronjob Detail |
| PUT | [/api/v1/container/workload/cronjobs/{cronjob_name}](/api/container/put-workload-cronjobs-cronjob-name) | Update Cronjob |
| DELETE | [/api/v1/container/workload/cronjobs/{cronjob_name}](/api/container/delete-workload-cronjobs-cronjob-name) | Delete Cronjob |
| GET | [/api/v1/container/workload/cronjobs/{cronjob_name}/events](/api/container/get-workload-cronjobs-cronjob-name-events) | List Cronjob Events |
| GET | [/api/v1/container/workload/cronjobs/{cronjob_name}/jobs](/api/container/get-workload-cronjobs-cronjob-name-jobs) | List Cronjob Jobs |
| GET | [/api/v1/container/workload/cronjobs/{cronjob_name}/manifest](/api/container/get-workload-cronjobs-cronjob-name-manifest) | Get Existing Cronjob Yaml |
| POST | [/api/v1/container/workload/cronjobs/{cronjob_name}/run](/api/container/post-workload-cronjobs-cronjob-name-run) | Run Cronjob |
| POST | [/api/v1/container/workload/cronjobs/{cronjob_name}/suspend](/api/container/post-workload-cronjobs-cronjob-name-suspend) | Suspend Cronjob |
| POST | [/api/v1/container/workload/cronjobs/{cronjob_name}/resume](/api/container/post-workload-cronjobs-cronjob-name-resume) | Resume Cronjob |

## Workload - DaemonSets

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/daemonsets/template/yaml](/api/container/get-workload-daemonsets-template-yaml) | Get Daemonset Template |
| POST | [/api/v1/container/workload/daemonsets](/api/container/post-workload-daemonsets) | Create Daemonset |
| GET | [/api/v1/container/workload/daemonsets](/api/container/get-workload-daemonsets) | List Daemonsets |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}](/api/container/get-workload-daemonsets-daemonset-name) | Get Daemonset Detail |
| PUT | [/api/v1/container/workload/daemonsets/{daemonset_name}](/api/container/put-workload-daemonsets-daemonset-name) | Update Daemonset |
| DELETE | [/api/v1/container/workload/daemonsets/{daemonset_name}](/api/container/delete-workload-daemonsets-daemonset-name) | Delete Daemonset |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/manifest](/api/container/get-workload-daemonsets-daemonset-name-manifest) | Get Existing Daemonset Yaml |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/services](/api/container/get-workload-daemonsets-daemonset-name-services) | List Daemonset Services |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/events](/api/container/get-workload-daemonsets-daemonset-name-events) | List Daemonset Events |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/conditions](/api/container/get-workload-daemonsets-daemonset-name-conditions) | List Daemonset Conditions |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/pods](/api/container/get-workload-daemonsets-daemonset-name-pods) | List Daemonset Pods |
| POST | [/api/v1/container/workload/daemonsets/{daemonset_name}/redeploy](/api/container/post-workload-daemonsets-daemonset-name-redeploy) | Redeploy Daemonset |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/revision-history](/api/container/get-workload-daemonsets-daemonset-name-revision-history) | List Daemonset Revision History |
| POST | [/api/v1/container/workload/daemonsets/{daemonset_name}/rollback](/api/container/post-workload-daemonsets-daemonset-name-rollback) | Rollback Daemonset |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/shell/info](/api/container/get-workload-daemonsets-daemonset-name-shell-info) | DaemonSet Shell 연결 정보 조회 |

## Workload - Deployments

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/deployments/template/yaml](/api/container/get-workload-deployments-template-yaml) | Get Deployment Template |
| GET | [/api/v1/container/workload/deployments](/api/container/get-workload-deployments) | List Deployments |
| POST | [/api/v1/container/workload/deployments](/api/container/post-workload-deployments) | Create Deployment |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/pods](/api/container/get-workload-deployments-deployment-name-pods) | List Deployment Pods |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/services](/api/container/get-workload-deployments-deployment-name-services) | List Deployment Services |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/manifest](/api/container/get-workload-deployments-deployment-name-manifest) | Get Existing Deployment Yaml |
| GET | [/api/v1/container/workload/deployments/{deployment_name}](/api/container/get-workload-deployments-deployment-name) | Get Deployment Detail |
| PUT | [/api/v1/container/workload/deployments/{deployment_name}](/api/container/put-workload-deployments-deployment-name) | Update Deployment |
| DELETE | [/api/v1/container/workload/deployments/{deployment_name}](/api/container/delete-workload-deployments-deployment-name) | Delete Deployment |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/conditions](/api/container/get-workload-deployments-deployment-name-conditions) | List Deployment Conditions |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/events](/api/container/get-workload-deployments-deployment-name-events) | List Deployment Events |
| POST | [/api/v1/container/workload/deployments/{deployment_name}/pause](/api/container/post-workload-deployments-deployment-name-pause) | Pause Deployment |
| POST | [/api/v1/container/workload/deployments/{deployment_name}/resume](/api/container/post-workload-deployments-deployment-name-resume) | Resume Deployment |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/revision-history](/api/container/get-workload-deployments-deployment-name-revision-history) | List Deployment Revision History |
| POST | [/api/v1/container/workload/deployments/{deployment_name}/rollback](/api/container/post-workload-deployments-deployment-name-rollback) | Rollback Deployment |
| POST | [/api/v1/container/workload/deployments/{deployment_name}/redeploy](/api/container/post-workload-deployments-deployment-name-redeploy) | Redeploy Deployment |
| POST | [/api/v1/container/workload/deployments/{deployment_name}/scale](/api/container/post-workload-deployments-deployment-name-scale) | Scale Deployment |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/shell/info](/api/container/get-workload-deployments-deployment-name-shell-info) | Deployment Shell 연결 정보 조회 |

## Workload - Jobs

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/jobs](/api/container/get-workload-jobs) | List Jobs |
| POST | [/api/v1/container/workload/jobs](/api/container/post-workload-jobs) | Create Job |
| GET | [/api/v1/container/workload/jobs/template/yaml](/api/container/get-workload-jobs-template-yaml) | Get Job Template |
| GET | [/api/v1/container/workload/jobs/{job_name}](/api/container/get-workload-jobs-job-name) | Get Job Detail |
| PUT | [/api/v1/container/workload/jobs/{job_name}](/api/container/put-workload-jobs-job-name) | Update Job |
| DELETE | [/api/v1/container/workload/jobs/{job_name}](/api/container/delete-workload-jobs-job-name) | Delete Job |
| GET | [/api/v1/container/workload/jobs/{job_name}/pods](/api/container/get-workload-jobs-job-name-pods) | List Job Pods |
| GET | [/api/v1/container/workload/jobs/{job_name}/events](/api/container/get-workload-jobs-job-name-events) | List Job Events |
| GET | [/api/v1/container/workload/jobs/{job_name}/conditions](/api/container/get-workload-jobs-job-name-conditions) | List Job Conditions |
| GET | [/api/v1/container/workload/jobs/{job_name}/manifest](/api/container/get-workload-jobs-job-name-manifest) | Get Existing Job Yaml |

## Workload - Namespaces

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/namespaces](/api/container/get-cluster-namespaces) | List Namespaces |
| POST | [/api/v1/container/cluster/namespaces](/api/container/post-cluster-namespaces) | Create Namespace |
| GET | [/api/v1/container/cluster/namespaces/template/yaml](/api/container/get-cluster-namespaces-template-yaml) | Get Namespace Template |
| GET | [/api/v1/container/cluster/namespaces/{namespace_name}/manifest](/api/container/get-cluster-namespaces-namespace-name-manifest) | Get Existing Namespace Yaml |
| PUT | [/api/v1/container/cluster/namespaces/{namespace_name}](/api/container/put-cluster-namespaces-namespace-name) | Update Namespace |
| GET | [/api/v1/container/cluster/namespaces/{namespace_name}](/api/container/get-cluster-namespaces-namespace-name) | Get Namespace Detail |
| DELETE | [/api/v1/container/cluster/namespaces/{namespace_name}](/api/container/delete-cluster-namespaces-namespace-name) | Delete Namespace |
| GET | [/api/v1/container/cluster/namespaces/{namespace_name}/stats](/api/container/get-cluster-namespaces-namespace-name-stats) | Get Namespace Workload Stats |
| GET | [/api/v1/container/cluster/namespaces/{namespace_name}/workloads](/api/container/get-cluster-namespaces-namespace-name-workloads) | List Namespace Workloads |

## Workload - Pods

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/pods](/api/container/get-workload-pods) | List Pods |
| POST | [/api/v1/container/workload/pods](/api/container/post-workload-pods) | Create Pod |
| GET | [/api/v1/container/workload/pods/template/yaml](/api/container/get-workload-pods-template-yaml) | Get Pod Template |
| GET | [/api/v1/container/workload/pods/template/json](/api/container/get-workload-pods-template-json) | Get Pod Template Json |
| GET | [/api/v1/container/workload/pods/{pod_name}](/api/container/get-workload-pods-pod-name) | Get Pod Detail |
| PUT | [/api/v1/container/workload/pods/{pod_name}](/api/container/put-workload-pods-pod-name) | Update Pod |
| DELETE | [/api/v1/container/workload/pods/{pod_name}](/api/container/delete-workload-pods-pod-name) | Delete Pod |
| GET | [/api/v1/container/workload/pods/{pod_name}/manifest](/api/container/get-workload-pods-pod-name-manifest) | Get Existing Pod Yaml |
| GET | [/api/v1/container/workload/pods/{pod_name}/containers](/api/container/get-workload-pods-pod-name-containers) | List Pod Containers |
| GET | [/api/v1/container/workload/pods/{pod_name}/conditions](/api/container/get-workload-pods-pod-name-conditions) | List Pod Conditions |
| GET | [/api/v1/container/workload/pods/{pod_name}/events](/api/container/get-workload-pods-pod-name-events) | List Pod Events |
| GET | [/api/v1/container/workload/pods/{pod_name}/logs](/api/container/get-workload-pods-pod-name-logs) | Get Pod Logs |
| GET | [/api/v1/container/workload/pods/{pod_name}/containers/{container_name}/logs](/api/container/get-workload-pods-pod-name-containers-container-name-logs) | Get Pod Container Logs |
| GET | [/api/v1/container/workload/pods/{pod_name}/shell/info](/api/container/get-workload-pods-pod-name-shell-info) | Pod Shell 연결 정보 조회 |
| GET | [/api/v1/container/workload/pods/{pod_name}/containers/{container_name}/shell/docs](/api/container/get-workload-pods-pod-name-containers-container-name-shell-docs) | [WebSocket 문서] Pod 컨테이너 Shell 연결 API 문서 |

## Workload - StatefulSets

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/statefulsets/template/yaml](/api/container/get-workload-statefulsets-template-yaml) | Get Statefulset Template |
| POST | [/api/v1/container/workload/statefulsets](/api/container/post-workload-statefulsets) | Create Statefulset |
| GET | [/api/v1/container/workload/statefulsets](/api/container/get-workload-statefulsets) | List Statefulsets |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/conditions](/api/container/get-workload-statefulsets-statefulset-name-conditions) | List Statefulset Conditions |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/events](/api/container/get-workload-statefulsets-statefulset-name-events) | List Statefulset Events |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/services](/api/container/get-workload-statefulsets-statefulset-name-services) | List Statefulset Services |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/pods](/api/container/get-workload-statefulsets-statefulset-name-pods) | List Statefulset Pods |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}](/api/container/get-workload-statefulsets-statefulset-name) | Get Statefulset Detail |
| PUT | [/api/v1/container/workload/statefulsets/{statefulset_name}](/api/container/put-workload-statefulsets-statefulset-name) | Update Statefulset |
| DELETE | [/api/v1/container/workload/statefulsets/{statefulset_name}](/api/container/delete-workload-statefulsets-statefulset-name) | Delete Statefulset |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/manifest](/api/container/get-workload-statefulsets-statefulset-name-manifest) | Get Existing Statefulset Yaml |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/revision-history](/api/container/get-workload-statefulsets-statefulset-name-revision-history) | List Statefulset Revision History |
| POST | [/api/v1/container/workload/statefulsets/{statefulset_name}/rollback](/api/container/post-workload-statefulsets-statefulset-name-rollback) | Rollback Statefulset |
| POST | [/api/v1/container/workload/statefulsets/{statefulset_name}/redeploy](/api/container/post-workload-statefulsets-statefulset-name-redeploy) | Redeploy Statefulset |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/shell/info](/api/container/get-workload-statefulsets-statefulset-name-shell-info) | StatefulSet Shell 연결 정보 조회 |

## 기타

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/](/api/container/get) | Root |


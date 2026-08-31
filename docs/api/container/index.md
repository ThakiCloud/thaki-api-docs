# 컨테이너

API 243개.

## 검색 · 리소스 타입

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/search/resource-types](/api/container/get-search-resource-types) | 리소스 타입별 개수 조회 |

## 서비스 · HPA

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/service-routing/hpa](/api/container/get-service-routing-hpa) | HPA 목록 조회 |
| POST | [/api/v1/container/service-routing/hpa](/api/container/post-service-routing-hpa) | HPA 생성 |
| GET | [/api/v1/container/service-routing/hpa/template/yaml](/api/container/get-service-routing-hpa-template-yaml) | HPA 템플릿 YAML 조회 |
| GET | [/api/v1/container/service-routing/hpa/{hpa_name}/manifest](/api/container/get-service-routing-hpa-hpa-name-manifest) | 기존 HPA YAML 조회 |
| POST | [/api/v1/container/service-routing/hpa/manifest/bulk](/api/container/post-service-routing-hpa-manifest-bulk) | HPA Bulk Manifest 조회 |
| GET | [/api/v1/container/service-routing/hpa/{hpa_name}](/api/container/get-service-routing-hpa-hpa-name) | HPA 상세 조회 |
| PUT | [/api/v1/container/service-routing/hpa/{hpa_name}](/api/container/put-service-routing-hpa-hpa-name) | HPA 수정 |
| DELETE | [/api/v1/container/service-routing/hpa/{hpa_name}](/api/container/delete-service-routing-hpa-hpa-name) | HPA 삭제 |
| GET | [/api/v1/container/service-routing/hpa/{hpa_name}/conditions](/api/container/get-service-routing-hpa-hpa-name-conditions) | HPA Condition 목록 조회 |

## 서비스 · 서비스

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/service-routing/service](/api/container/get-service-routing-service) | Service 목록 조회 |
| POST | [/api/v1/container/service-routing/service](/api/container/post-service-routing-service) | Service 생성 |
| GET | [/api/v1/container/service-routing/service/template/yaml](/api/container/get-service-routing-service-template-yaml) | Service 템플릿 YAML 조회 |
| POST | [/api/v1/container/service-routing/service/pods/preview](/api/container/post-service-routing-service-pods-preview) | Selector로 매칭되는 파드 목록 미리보기 |
| POST | [/api/v1/container/service-routing/service/manifest/bulk](/api/container/post-service-routing-service-manifest-bulk) | Service Bulk Manifest 조회 |
| GET | [/api/v1/container/service-routing/service/{service_name}/manifest](/api/container/get-service-routing-service-service-name-manifest) | 기존 Service YAML 조회 |
| GET | [/api/v1/container/service-routing/service/{service_name}/pods](/api/container/get-service-routing-service-service-name-pods) | Service의 selector로 매칭되는 파드 목록 조회 |
| GET | [/api/v1/container/service-routing/service/{service_name}/ports](/api/container/get-service-routing-service-service-name-ports) | Service의 Port 목록 조회 |
| GET | [/api/v1/container/service-routing/service/{service_name}/conditions](/api/container/get-service-routing-service-service-name-conditions) | Service Condition 목록 조회 |
| GET | [/api/v1/container/service-routing/service/{service_name}](/api/container/get-service-routing-service-service-name) | Service 상세 정보 조회 |
| DELETE | [/api/v1/container/service-routing/service/{service_name}](/api/container/delete-service-routing-service-service-name) | Service 삭제 |
| PUT | [/api/v1/container/service-routing/service/{service_name}](/api/container/put-service-routing-service-service-name) | Service 수정 |

## 서비스 · 인그레스

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/service-routing/ingress](/api/container/get-service-routing-ingress) | 클러스터의 모든 네임스페이스에서 Ingress 목록 조회 |
| POST | [/api/v1/container/service-routing/ingress](/api/container/post-service-routing-ingress) | 인그레스 생성 |
| GET | [/api/v1/container/service-routing/ingress/classes/options](/api/container/get-service-routing-ingress-classes-options) | IngressClass 옵션 목록 조회 |
| GET | [/api/v1/container/service-routing/ingress/template/yaml](/api/container/get-service-routing-ingress-template-yaml) | 인그레스 매니페스트 템플릿 조회 |
| GET | [/api/v1/container/service-routing/ingress/{ingress_name}/manifest](/api/container/get-service-routing-ingress-ingress-name-manifest) | 인그레스 매니페스트 조회 |
| GET | [/api/v1/container/service-routing/ingress/{ingress_name}/rules](/api/container/get-service-routing-ingress-ingress-name-rules) | Ingress Rule 목록 조회 |
| POST | [/api/v1/container/service-routing/ingress/manifest/bulk](/api/container/post-service-routing-ingress-manifest-bulk) | Ingress Bulk Manifest 조회 |
| PUT | [/api/v1/container/service-routing/ingress/{ingress_name}](/api/container/put-service-routing-ingress-ingress-name) | 인그레스 수정 |
| GET | [/api/v1/container/service-routing/ingress/{ingress_name}](/api/container/get-service-routing-ingress-ingress-name) | 인그레스 단건 조회 |
| DELETE | [/api/v1/container/service-routing/ingress/{ingress_name}](/api/container/delete-service-routing-ingress-ingress-name) | 인그레스 삭제 |

## 스토리지 · ConfigMap

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/storage/configmaps](/api/container/get-storage-configmaps) | ConfigMap 목록 조회 |
| POST | [/api/v1/container/storage/configmaps](/api/container/post-storage-configmaps) | ConfigMap 생성 |
| GET | [/api/v1/container/storage/configmaps/template/yaml](/api/container/get-storage-configmaps-template-yaml) | ConfigMap 템플릿 YAML 조회 |
| GET | [/api/v1/container/storage/configmaps/{configmap_name}](/api/container/get-storage-configmaps-configmap-name) | ConfigMap 상세 조회 |
| PUT | [/api/v1/container/storage/configmaps/{configmap_name}](/api/container/put-storage-configmaps-configmap-name) | ConfigMap 수정 |
| DELETE | [/api/v1/container/storage/configmaps/{configmap_name}](/api/container/delete-storage-configmaps-configmap-name) | ConfigMap 삭제 |
| GET | [/api/v1/container/storage/configmaps/{configmap_name}/manifest](/api/container/get-storage-configmaps-configmap-name-manifest) | 기존 ConfigMap YAML 조회 |

## 스토리지 · PV

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/storage/pv](/api/container/get-storage-pv) | PV 목록 조회 |
| POST | [/api/v1/container/storage/pv](/api/container/post-storage-pv) | PV 생성 |
| GET | [/api/v1/container/storage/pv/template/yaml](/api/container/get-storage-pv-template-yaml) | PV 템플릿 YAML 조회 |
| GET | [/api/v1/container/storage/pv/{pv_name}](/api/container/get-storage-pv-pv-name) | PV 상세 조회 |
| DELETE | [/api/v1/container/storage/pv/{pv_name}](/api/container/delete-storage-pv-pv-name) | PV 삭제 |
| PUT | [/api/v1/container/storage/pv/{pv_name}](/api/container/put-storage-pv-pv-name) | PV 수정 |
| GET | [/api/v1/container/storage/pv/{pv_name}/manifest](/api/container/get-storage-pv-pv-name-manifest) | 기존 PV YAML 조회 |

## 스토리지 · PVC

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/storage/pvc](/api/container/get-storage-pvc) | PVC 목록 조회 |
| POST | [/api/v1/container/storage/pvc](/api/container/post-storage-pvc) | PVC 생성 |
| GET | [/api/v1/container/storage/pvc/template/yaml](/api/container/get-storage-pvc-template-yaml) | PVC 템플릿 YAML 조회 |
| GET | [/api/v1/container/storage/pvc/{pvc_name}](/api/container/get-storage-pvc-pvc-name) | PVC 상세 조회 |
| PUT | [/api/v1/container/storage/pvc/{pvc_name}](/api/container/put-storage-pvc-pvc-name) | PVC 수정 |
| DELETE | [/api/v1/container/storage/pvc/{pvc_name}](/api/container/delete-storage-pvc-pvc-name) | PVC 삭제 |
| GET | [/api/v1/container/storage/pvc/{pvc_name}/conditions](/api/container/get-storage-pvc-pvc-name-conditions) | PVC Condition 목록 조회 |
| GET | [/api/v1/container/storage/pvc/{pvc_name}/events](/api/container/get-storage-pvc-pvc-name-events) | PVC 이벤트 목록 조회 |
| GET | [/api/v1/container/storage/pvc/{pvc_name}/manifest](/api/container/get-storage-pvc-pvc-name-manifest) | 기존 PVC YAML 조회 |

## 스토리지 · Secret

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/storage/secrets](/api/container/get-storage-secrets) | Secret 목록 조회 |
| POST | [/api/v1/container/storage/secrets](/api/container/post-storage-secrets) | Secret 생성 |
| GET | [/api/v1/container/storage/secrets/template/yaml](/api/container/get-storage-secrets-template-yaml) | Secret 템플릿 YAML 조회 |
| GET | [/api/v1/container/storage/secrets/{secret_name}](/api/container/get-storage-secrets-secret-name) | Secret 상세 조회 |
| PUT | [/api/v1/container/storage/secrets/{secret_name}](/api/container/put-storage-secrets-secret-name) | Secret 수정 |
| DELETE | [/api/v1/container/storage/secrets/{secret_name}](/api/container/delete-storage-secrets-secret-name) | Secret 삭제 |
| GET | [/api/v1/container/storage/secrets/{secret_name}/manifest](/api/container/get-storage-secrets-secret-name-manifest) | 기존 Secret YAML 조회 |
| GET | [/api/v1/container/storage/secrets/{secret_name}/manifest/decode](/api/container/get-storage-secrets-secret-name-manifest-decode) | 기존 Secret YAML 조회 (디코딩) |

## 스토리지 · StorageClass

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/storage/storage-classes](/api/container/get-storage-storage-classes) | StorageClass 목록 조회 |
| POST | [/api/v1/container/storage/storage-classes](/api/container/post-storage-storage-classes) | StorageClass 생성 |
| GET | [/api/v1/container/storage/storage-classes/template/yaml](/api/container/get-storage-storage-classes-template-yaml) | StorageClass 템플릿 YAML 조회 |
| GET | [/api/v1/container/storage/storage-classes/{storage_class_name}/manifest](/api/container/get-storage-storage-classes-storage-class-name-manifest) | 기존 StorageClass YAML 조회 |
| GET | [/api/v1/container/storage/storage-classes/{storage_class_name}](/api/container/get-storage-storage-classes-storage-class-name) | StorageClass 상세 조회 |
| PUT | [/api/v1/container/storage/storage-classes/{storage_class_name}](/api/container/put-storage-storage-classes-storage-class-name) | StorageClass 수정 |
| DELETE | [/api/v1/container/storage/storage-classes/{storage_class_name}](/api/container/delete-storage-storage-classes-storage-class-name) | StorageClass 삭제 |
| PATCH | [/api/v1/container/storage/storage-classes/{storage_class_name}/default](/api/container/patch-storage-storage-classes-storage-class-name-default) | StorageClass 기본값 설정 |

## 앱 카탈로그 · YAML

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/app-catalog/deployments/{app_name}/values-yaml](/api/container/get-app-catalog-deployments-app-name-values-yaml) | values.yaml 파일 다운로드 |

## 앱 카탈로그 · 배포

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/container/app-catalog/deployments](/api/container/post-app-catalog-deployments) | 렌더링된 App Catalog values.yaml 배포를 요청 |
| GET | [/api/v1/container/app-catalog/deployments](/api/container/get-app-catalog-deployments) | 앱 카탈로그 배포 목록 조회 |
| GET | [/api/v1/container/app-catalog/deployments/name-check](/api/container/get-app-catalog-deployments-name-check) | 앱 배포 이름 중복 확인 |
| GET | [/api/v1/container/app-catalog/deployments/detail](/api/container/get-app-catalog-deployments-detail) | 앱 카탈로그 배포 상세 조회 |
| DELETE | [/api/v1/container/app-catalog/deployments/detail](/api/container/delete-app-catalog-deployments-detail) | 앱 카탈로그 배포 삭제 |
| POST | [/api/v1/container/app-catalog/deployments/detail/credentials/{credential_id}/reveal](/api/container/post-app-catalog-deployments-detail-credentials-credential-id-reveal) | 배포 자격증명 원문 조회 |
| GET | [/api/v1/container/app-catalog/deployments/{deployment_id}/bound-apps](/api/container/get-app-catalog-deployments-deployment-id-bound-apps) | 오퍼레이터 연결 앱 배포 목록 조회 |
| GET | [/api/v1/container/app-catalog/deployments/{deployment_id}](/api/container/get-app-catalog-deployments-deployment-id) | App Catalog 배포 상세와 values.yaml 텍스트 조회 |
| PATCH | [/api/v1/container/app-catalog/deployments/{deployment_id}](/api/container/patch-app-catalog-deployments-deployment-id) | App Catalog 배포의 values.yaml 또는 상태 수정 |
| DELETE | [/api/v1/container/app-catalog/deployments/{deployment_id}](/api/container/delete-app-catalog-deployments-deployment-id) | App Catalog 배포 삭제 |
| POST | [/api/v1/container/app-catalog/deployments/{deployment_id}/credentials/{credential_id}/reveal](/api/container/post-app-catalog-deployments-deployment-id-credentials-credential-id-reveal) | 배포 자격증명 원문 조회 |
| POST | [/api/v1/container/app-catalog/deployments/{deployment_id}/redeploy](/api/container/post-app-catalog-deployments-deployment-id-redeploy) | 앱 카탈로그 배포 재동기화 |

## 앱 카탈로그 · 앱

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/app-catalog/apps](/api/container/get-app-catalog-apps) | App Catalog 목록을 탭과 카테고리별로 조회 |
| GET | [/api/v1/container/app-catalog/apps/{app_name}/values-schema](/api/container/get-app-catalog-apps-app-name-values-schema) | 앱 입력 폼 스키마 조회 |
| GET | [/api/v1/container/app-catalog/apps/{app_name}/install-check](/api/container/get-app-catalog-apps-app-name-install-check) | 앱 설치 가능 여부 확인 |
| GET | [/api/v1/container/app-catalog/apps/{app_name}/config-schema](/api/container/get-app-catalog-apps-app-name-config-schema) | YAML template mode를 먼저 선택한 뒤 호출하는 API |
| POST | [/api/v1/container/app-catalog/apps/{app_name}/values-yaml](/api/container/post-app-catalog-apps-app-name-values-yaml) | values.yaml 초안 생성 |
| GET | [/api/v1/container/app-catalog/apps/{app_name}/yaml-templates](/api/container/get-app-catalog-apps-app-name-yaml-templates) | values.yaml 템플릿 모드 목록 조회 |
| GET | [/api/v1/container/app-catalog/apps/{app_name}/yaml-templates/{mode}](/api/container/get-app-catalog-apps-app-name-yaml-templates-mode) | values.yaml 템플릿 조회 |

## 워크로드 · CronJob

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/cronjobs](/api/container/get-workload-cronjobs) | CronJob 목록 조회 |
| POST | [/api/v1/container/workload/cronjobs](/api/container/post-workload-cronjobs) | CronJob 생성 |
| GET | [/api/v1/container/workload/cronjobs/template/yaml](/api/container/get-workload-cronjobs-template-yaml) | CronJob 템플릿 YAML 조회 |
| GET | [/api/v1/container/workload/cronjobs/{cronjob_name}](/api/container/get-workload-cronjobs-cronjob-name) | CronJob 상세 정보 조회 |
| PUT | [/api/v1/container/workload/cronjobs/{cronjob_name}](/api/container/put-workload-cronjobs-cronjob-name) | CronJob 수정 |
| DELETE | [/api/v1/container/workload/cronjobs/{cronjob_name}](/api/container/delete-workload-cronjobs-cronjob-name) | CronJob 삭제 |
| GET | [/api/v1/container/workload/cronjobs/{cronjob_name}/events](/api/container/get-workload-cronjobs-cronjob-name-events) | CronJob 이벤트 목록 조회 |
| GET | [/api/v1/container/workload/cronjobs/{cronjob_name}/jobs](/api/container/get-workload-cronjobs-cronjob-name-jobs) | CronJob의 Job 목록 조회 |
| GET | [/api/v1/container/workload/cronjobs/{cronjob_name}/manifest](/api/container/get-workload-cronjobs-cronjob-name-manifest) | 기존 CronJob YAML 조회 |
| POST | [/api/v1/container/workload/cronjobs/{cronjob_name}/run](/api/container/post-workload-cronjobs-cronjob-name-run) | CronJob 즉시 실행 |
| POST | [/api/v1/container/workload/cronjobs/{cronjob_name}/suspend](/api/container/post-workload-cronjobs-cronjob-name-suspend) | CronJob 일시 중지 |
| POST | [/api/v1/container/workload/cronjobs/{cronjob_name}/resume](/api/container/post-workload-cronjobs-cronjob-name-resume) | CronJob 재개 |

## 워크로드 · DaemonSet

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/daemonsets/template/yaml](/api/container/get-workload-daemonsets-template-yaml) | DaemonSet 템플릿 YAML 조회 |
| POST | [/api/v1/container/workload/daemonsets](/api/container/post-workload-daemonsets) | DaemonSet 생성 |
| GET | [/api/v1/container/workload/daemonsets](/api/container/get-workload-daemonsets) | DaemonSet 목록 조회 |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}](/api/container/get-workload-daemonsets-daemonset-name) | DaemonSet 상세 정보 조회 |
| PUT | [/api/v1/container/workload/daemonsets/{daemonset_name}](/api/container/put-workload-daemonsets-daemonset-name) | DaemonSet 수정 |
| DELETE | [/api/v1/container/workload/daemonsets/{daemonset_name}](/api/container/delete-workload-daemonsets-daemonset-name) | DaemonSet 삭제 |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/manifest](/api/container/get-workload-daemonsets-daemonset-name-manifest) | 기존 DaemonSet YAML 조회 |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/services](/api/container/get-workload-daemonsets-daemonset-name-services) | DaemonSet에 연결된 Service 목록 조회 |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/events](/api/container/get-workload-daemonsets-daemonset-name-events) | DaemonSet 이벤트 목록 조회 |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/conditions](/api/container/get-workload-daemonsets-daemonset-name-conditions) | DaemonSet Condition 목록 조회 |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/pods](/api/container/get-workload-daemonsets-daemonset-name-pods) | DaemonSet 파드 목록 조회 |
| POST | [/api/v1/container/workload/daemonsets/{daemonset_name}/redeploy](/api/container/post-workload-daemonsets-daemonset-name-redeploy) | DaemonSet 재배포 |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/revision-history](/api/container/get-workload-daemonsets-daemonset-name-revision-history) | DaemonSet Revision History 조회 |
| POST | [/api/v1/container/workload/daemonsets/{daemonset_name}/rollback](/api/container/post-workload-daemonsets-daemonset-name-rollback) | DaemonSet 롤백 |
| GET | [/api/v1/container/workload/daemonsets/{daemonset_name}/shell/info](/api/container/get-workload-daemonsets-daemonset-name-shell-info) | DaemonSet 셸 연결 정보 조회 |

## 워크로드 · Deployment

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/deployments/template/yaml](/api/container/get-workload-deployments-template-yaml) | Deployment 템플릿 YAML 조회 |
| GET | [/api/v1/container/workload/deployments](/api/container/get-workload-deployments) | Deployment 목록 조회 |
| POST | [/api/v1/container/workload/deployments](/api/container/post-workload-deployments) | Deployment 생성 |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/pods](/api/container/get-workload-deployments-deployment-name-pods) | Deployment에 속한 파드 목록 조회 |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/services](/api/container/get-workload-deployments-deployment-name-services) | Deployment에 연결된 Service 목록 조회 |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/manifest](/api/container/get-workload-deployments-deployment-name-manifest) | 기존 Deployment YAML 조회 |
| GET | [/api/v1/container/workload/deployments/{deployment_name}](/api/container/get-workload-deployments-deployment-name) | Deployment 상세 정보 조회 |
| PUT | [/api/v1/container/workload/deployments/{deployment_name}](/api/container/put-workload-deployments-deployment-name) | Deployment 수정 |
| DELETE | [/api/v1/container/workload/deployments/{deployment_name}](/api/container/delete-workload-deployments-deployment-name) | Deployment 삭제 |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/conditions](/api/container/get-workload-deployments-deployment-name-conditions) | Deployment Condition 목록 조회 |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/events](/api/container/get-workload-deployments-deployment-name-events) | Deployment 이벤트 목록 조회 |
| POST | [/api/v1/container/workload/deployments/{deployment_name}/pause](/api/container/post-workload-deployments-deployment-name-pause) | Deployment 롤아웃 일시 중지 |
| POST | [/api/v1/container/workload/deployments/{deployment_name}/resume](/api/container/post-workload-deployments-deployment-name-resume) | Deployment 롤아웃 재개 |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/revision-history](/api/container/get-workload-deployments-deployment-name-revision-history) | Deployment Revision History 조회 |
| POST | [/api/v1/container/workload/deployments/{deployment_name}/rollback](/api/container/post-workload-deployments-deployment-name-rollback) | Deployment 롤백 |
| POST | [/api/v1/container/workload/deployments/{deployment_name}/redeploy](/api/container/post-workload-deployments-deployment-name-redeploy) | Deployment 재배포 |
| POST | [/api/v1/container/workload/deployments/{deployment_name}/scale](/api/container/post-workload-deployments-deployment-name-scale) | Deployment 스케일 조정 |
| GET | [/api/v1/container/workload/deployments/{deployment_name}/shell/info](/api/container/get-workload-deployments-deployment-name-shell-info) | Deployment 셸 연결 정보 조회 |

## 워크로드 · Job

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/jobs](/api/container/get-workload-jobs) | Job 목록 조회 |
| POST | [/api/v1/container/workload/jobs](/api/container/post-workload-jobs) | Job 생성 |
| GET | [/api/v1/container/workload/jobs/template/yaml](/api/container/get-workload-jobs-template-yaml) | Job 템플릿 YAML 조회 |
| GET | [/api/v1/container/workload/jobs/{job_name}](/api/container/get-workload-jobs-job-name) | Job 상세 정보 조회 |
| PUT | [/api/v1/container/workload/jobs/{job_name}](/api/container/put-workload-jobs-job-name) | Job 수정 |
| DELETE | [/api/v1/container/workload/jobs/{job_name}](/api/container/delete-workload-jobs-job-name) | Job 삭제 |
| GET | [/api/v1/container/workload/jobs/{job_name}/pods](/api/container/get-workload-jobs-job-name-pods) | Job 파드 목록 조회 |
| GET | [/api/v1/container/workload/jobs/{job_name}/events](/api/container/get-workload-jobs-job-name-events) | Job 이벤트 목록 조회 |
| GET | [/api/v1/container/workload/jobs/{job_name}/conditions](/api/container/get-workload-jobs-job-name-conditions) | Job Condition 목록 조회 |
| GET | [/api/v1/container/workload/jobs/{job_name}/manifest](/api/container/get-workload-jobs-job-name-manifest) | 기존 Job YAML 조회 |

## 워크로드 · StatefulSet

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/statefulsets/template/yaml](/api/container/get-workload-statefulsets-template-yaml) | StatefulSet 템플릿 YAML 조회 |
| POST | [/api/v1/container/workload/statefulsets](/api/container/post-workload-statefulsets) | StatefulSet 생성 |
| GET | [/api/v1/container/workload/statefulsets](/api/container/get-workload-statefulsets) | StatefulSet 목록 조회 |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/conditions](/api/container/get-workload-statefulsets-statefulset-name-conditions) | StatefulSet Condition 목록 조회 |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/events](/api/container/get-workload-statefulsets-statefulset-name-events) | StatefulSet 이벤트 목록 조회 |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/services](/api/container/get-workload-statefulsets-statefulset-name-services) | StatefulSet에 연결된 Service 목록 조회 |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/pods](/api/container/get-workload-statefulsets-statefulset-name-pods) | StatefulSet에 속한 파드 목록 조회 |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}](/api/container/get-workload-statefulsets-statefulset-name) | StatefulSet 상세 정보 조회 |
| PUT | [/api/v1/container/workload/statefulsets/{statefulset_name}](/api/container/put-workload-statefulsets-statefulset-name) | StatefulSet 수정 |
| DELETE | [/api/v1/container/workload/statefulsets/{statefulset_name}](/api/container/delete-workload-statefulsets-statefulset-name) | StatefulSet 삭제 |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/manifest](/api/container/get-workload-statefulsets-statefulset-name-manifest) | 기존 StatefulSet YAML 조회 |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/revision-history](/api/container/get-workload-statefulsets-statefulset-name-revision-history) | StatefulSet Revision History 조회 |
| POST | [/api/v1/container/workload/statefulsets/{statefulset_name}/rollback](/api/container/post-workload-statefulsets-statefulset-name-rollback) | StatefulSet 롤백 |
| POST | [/api/v1/container/workload/statefulsets/{statefulset_name}/redeploy](/api/container/post-workload-statefulsets-statefulset-name-redeploy) | StatefulSet 재배포 |
| GET | [/api/v1/container/workload/statefulsets/{statefulset_name}/shell/info](/api/container/get-workload-statefulsets-statefulset-name-shell-info) | StatefulSet 셸 연결 정보 조회 |

## 워크로드 · 네임스페이스

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/namespaces](/api/container/get-cluster-namespaces) | 네임스페이스 목록 조회 |
| POST | [/api/v1/container/cluster/namespaces](/api/container/post-cluster-namespaces) | 네임스페이스 생성 |
| GET | [/api/v1/container/cluster/namespaces/template/yaml](/api/container/get-cluster-namespaces-template-yaml) | 네임스페이스 템플릿 YAML 조회 |
| GET | [/api/v1/container/cluster/namespaces/{namespace_name}/manifest](/api/container/get-cluster-namespaces-namespace-name-manifest) | 기존 네임스페이스 YAML 조회 |
| PUT | [/api/v1/container/cluster/namespaces/{namespace_name}](/api/container/put-cluster-namespaces-namespace-name) | 네임스페이스 수정 |
| GET | [/api/v1/container/cluster/namespaces/{namespace_name}](/api/container/get-cluster-namespaces-namespace-name) | 네임스페이스 상세 조회 |
| DELETE | [/api/v1/container/cluster/namespaces/{namespace_name}](/api/container/delete-cluster-namespaces-namespace-name) | 네임스페이스 삭제 |
| GET | [/api/v1/container/cluster/namespaces/{namespace_name}/stats](/api/container/get-cluster-namespaces-namespace-name-stats) | 네임스페이스 워크로드 상태 통계 조회 |
| GET | [/api/v1/container/cluster/namespaces/{namespace_name}/workloads](/api/container/get-cluster-namespaces-namespace-name-workloads) | 네임스페이스 내 Workload 리소스 목록 조회 |

## 워크로드 · 파드

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/workload/pods](/api/container/get-workload-pods) | 파드 목록 조회 |
| POST | [/api/v1/container/workload/pods](/api/container/post-workload-pods) | 파드 생성 |
| GET | [/api/v1/container/workload/pods/template/yaml](/api/container/get-workload-pods-template-yaml) | 파드 템플릿 YAML 조회 |
| GET | [/api/v1/container/workload/pods/template/json](/api/container/get-workload-pods-template-json) | 파드 템플릿 JSON 조회 |
| GET | [/api/v1/container/workload/pods/{pod_name}](/api/container/get-workload-pods-pod-name) | 파드 상세 정보 조회 |
| PUT | [/api/v1/container/workload/pods/{pod_name}](/api/container/put-workload-pods-pod-name) | 파드 수정 |
| DELETE | [/api/v1/container/workload/pods/{pod_name}](/api/container/delete-workload-pods-pod-name) | 파드 삭제 |
| GET | [/api/v1/container/workload/pods/{pod_name}/manifest](/api/container/get-workload-pods-pod-name-manifest) | 기존 파드 YAML 조회 |
| GET | [/api/v1/container/workload/pods/{pod_name}/containers](/api/container/get-workload-pods-pod-name-containers) | 파드 컨테이너 목록 조회 |
| GET | [/api/v1/container/workload/pods/{pod_name}/conditions](/api/container/get-workload-pods-pod-name-conditions) | 파드 Condition 목록 조회 |
| GET | [/api/v1/container/workload/pods/{pod_name}/events](/api/container/get-workload-pods-pod-name-events) | 파드 이벤트 목록 조회 |
| GET | [/api/v1/container/workload/pods/{pod_name}/logs](/api/container/get-workload-pods-pod-name-logs) | 파드 로그 조회 (모든 컨테이너) |
| GET | [/api/v1/container/workload/pods/{pod_name}/containers/{container_name}/logs](/api/container/get-workload-pods-pod-name-containers-container-name-logs) | 파드 특정 컨테이너 로그 조회 |
| GET | [/api/v1/container/workload/pods/{pod_name}/shell/info](/api/container/get-workload-pods-pod-name-shell-info) | 파드 셸 연결 정보 조회 |

## 정책 · LimitRange

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/policy/limit-range](/api/container/get-policy-limit-range) | LimitRange 목록 조회 |
| POST | [/api/v1/container/policy/limit-range](/api/container/post-policy-limit-range) | LimitRange 생성 |
| GET | [/api/v1/container/policy/limit-range/template/yaml](/api/container/get-policy-limit-range-template-yaml) | LimitRange 템플릿 YAML 조회 |
| POST | [/api/v1/container/policy/limit-range/manifest/bulk](/api/container/post-policy-limit-range-manifest-bulk) | LimitRange Bulk Manifest 조회 |
| GET | [/api/v1/container/policy/limit-range/{limit_range_name}/manifest](/api/container/get-policy-limit-range-limit-range-name-manifest) | 기존 LimitRange YAML 조회 |
| PUT | [/api/v1/container/policy/limit-range/{limit_range_name}](/api/container/put-policy-limit-range-limit-range-name) | LimitRange 수정 |
| DELETE | [/api/v1/container/policy/limit-range/{limit_range_name}](/api/container/delete-policy-limit-range-limit-range-name) | LimitRange 삭제 |

## 정책 · NetworkPolicy

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/policy/network-policy](/api/container/get-policy-network-policy) | NetworkPolicy 목록 조회 |
| POST | [/api/v1/container/policy/network-policy](/api/container/post-policy-network-policy) | NetworkPolicy 생성 |
| GET | [/api/v1/container/policy/network-policy/template/yaml](/api/container/get-policy-network-policy-template-yaml) | NetworkPolicy 템플릿 YAML 조회 |
| POST | [/api/v1/container/policy/network-policy/manifest/bulk](/api/container/post-policy-network-policy-manifest-bulk) | NetworkPolicy Bulk Manifest 조회 |
| GET | [/api/v1/container/policy/network-policy/{network_policy_name}](/api/container/get-policy-network-policy-network-policy-name) | NetworkPolicy 상세 정보 조회 |
| DELETE | [/api/v1/container/policy/network-policy/{network_policy_name}](/api/container/delete-policy-network-policy-network-policy-name) | NetworkPolicy 삭제 |
| PUT | [/api/v1/container/policy/network-policy/{network_policy_name}](/api/container/put-policy-network-policy-network-policy-name) | NetworkPolicy 수정 |
| GET | [/api/v1/container/policy/network-policy/{network_policy_name}/manifest](/api/container/get-policy-network-policy-network-policy-name-manifest) | 기존 NetworkPolicy YAML 조회 |
| POST | [/api/v1/container/policy/network-policy/match-pods](/api/container/post-policy-network-policy-match-pods) | 네트워크 정책 대상 파드 조회 |

## 정책 · PodDisruptionBudget

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/policy/pod-disruption-budget](/api/container/get-policy-pod-disruption-budget) | PodDisruptionBudget 목록 조회 |
| POST | [/api/v1/container/policy/pod-disruption-budget](/api/container/post-policy-pod-disruption-budget) | PodDisruptionBudget 생성 |
| GET | [/api/v1/container/policy/pod-disruption-budget/template/yaml](/api/container/get-policy-pod-disruption-budget-template-yaml) | PodDisruptionBudget 템플릿 YAML 조회 |
| POST | [/api/v1/container/policy/pod-disruption-budget/manifest/bulk](/api/container/post-policy-pod-disruption-budget-manifest-bulk) | PodDisruptionBudget Bulk Manifest 조회 |
| GET | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}](/api/container/get-policy-pod-disruption-budget-pdb-name) | PodDisruptionBudget 상세 정보 조회 |
| PUT | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}](/api/container/put-policy-pod-disruption-budget-pdb-name) | PodDisruptionBudget 수정 |
| DELETE | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}](/api/container/delete-policy-pod-disruption-budget-pdb-name) | PodDisruptionBudget 삭제 |
| GET | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}/manifest](/api/container/get-policy-pod-disruption-budget-pdb-name-manifest) | 기존 PodDisruptionBudget YAML 조회 |
| GET | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}/conditions](/api/container/get-policy-pod-disruption-budget-pdb-name-conditions) | PodDisruptionBudget Condition 목록 조회 |
| GET | [/api/v1/container/policy/pod-disruption-budget/{pdb_name}/events](/api/container/get-policy-pod-disruption-budget-pdb-name-events) | PodDisruptionBudget 이벤트 목록 조회 |
| POST | [/api/v1/container/policy/pod-disruption-budget/match-pods](/api/container/post-policy-pod-disruption-budget-match-pods) | PDB 대상 파드 조회 |

## 정책 · ResourceQuota

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/policy/resource-quota/template/yaml](/api/container/get-policy-resource-quota-template-yaml) | ResourceQuota 템플릿 YAML 조회 |
| GET | [/api/v1/container/policy/resource-quota](/api/container/get-policy-resource-quota) | ResourceQuota 목록 조회 |
| POST | [/api/v1/container/policy/resource-quota](/api/container/post-policy-resource-quota) | ResourceQuota 생성 |
| POST | [/api/v1/container/policy/resource-quota/manifest/bulk](/api/container/post-policy-resource-quota-manifest-bulk) | ResourceQuota Bulk Manifest 조회 |
| GET | [/api/v1/container/policy/resource-quota/{resource_quota_name}/manifest](/api/container/get-policy-resource-quota-resource-quota-name-manifest) | 기존 ResourceQuota YAML 조회 |
| PUT | [/api/v1/container/policy/resource-quota/{resource_quota_name}](/api/container/put-policy-resource-quota-resource-quota-name) | ResourceQuota 수정 |
| DELETE | [/api/v1/container/policy/resource-quota/{resource_quota_name}](/api/container/delete-policy-resource-quota-resource-quota-name) | ResourceQuota 삭제 |

## 클러스터 · SA 토큰

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/token/{clusterId}/access-token](/api/container/get-cluster-token-clusterid-access-token) | 서비스 계정 토큰 정보 조회 |
| POST | [/api/v1/container/cluster/token/{clusterId}/access-token](/api/container/post-cluster-token-clusterid-access-token) | 현재 사용자 ServiceAccount token 생성 |
| DELETE | [/api/v1/container/cluster/token/{clusterId}/access-token](/api/container/delete-cluster-token-clusterid-access-token) | 현재 사용자 유효 ServiceAccount token 폐기 |
| GET | [/api/v1/container/cluster/token/{clusterId}/kubeconfig](/api/container/get-cluster-token-clusterid-kubeconfig) | 현재 사용자 ServiceAccount 기반 kubeconfig 생성 |

## 클러스터 · 노드

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/nodes](/api/container/get-cluster-nodes) | 노드 목록 조회 |
| GET | [/api/v1/container/cluster/nodes/{node_name}](/api/container/get-cluster-nodes-node-name) | 노드 상세 조회 |
| GET | [/api/v1/container/cluster/nodes/{node_name}/images](/api/container/get-cluster-nodes-node-name-images) | 노드 이미지 목록 조회 |
| GET | [/api/v1/container/cluster/nodes/{node_name}/pods](/api/container/get-cluster-nodes-node-name-pods) | 노드 파드 목록 조회 |
| GET | [/api/v1/container/cluster/nodes/{node_name}/conditions](/api/container/get-cluster-nodes-node-name-conditions) | 노드 Condition 목록 조회 |
| GET | [/api/v1/container/cluster/nodes/{node_name}/events](/api/container/get-cluster-nodes-node-name-events) | 노드 이벤트 목록 조회 |
| GET | [/api/v1/container/cluster/nodes/{node_name}/manifest](/api/container/get-cluster-nodes-node-name-manifest) | 기존 노드 YAML 조회 |
| GET | [/api/v1/container/cluster/nodes/{node_name}/manifest/preset](/api/container/get-cluster-nodes-node-name-manifest-preset) | 기존 노드 manifest 기반 preset 조회 |
| PUT | [/api/v1/container/cluster/nodes/{node_name}/manifest/preset](/api/container/put-cluster-nodes-node-name-manifest-preset) | 노드 manifest preset 수정 |

## 클러스터 · 이벤트

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/events](/api/container/get-cluster-events) | 클러스터 이벤트 목록 조회 |
| GET | [/api/v1/container/cluster/events/{event_name}/manifest](/api/container/get-cluster-events-event-name-manifest) | 기존 이벤트 YAML 조회 |

## 클러스터 · 클러스터

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/clusters](/api/container/get-cluster-clusters) | 클러스터 목록 조회 |
| POST | [/api/v1/container/cluster/clusters/register](/api/container/post-cluster-clusters-register) | 기존 Kubernetes 클러스터를 kubeconfig로 등록 |
| GET | [/api/v1/container/cluster/clusters/{cluster_id}](/api/container/get-cluster-clusters-cluster-id) | 특정 클러스터의 상세 정보 조회 |
| DELETE | [/api/v1/container/cluster/clusters/{cluster_id}](/api/container/delete-cluster-clusters-cluster-id) | 클러스터 삭제를 비동기로 요청 |
| PATCH | [/api/v1/container/cluster/clusters/{cluster_id}/appearance](/api/container/patch-cluster-clusters-cluster-id-appearance) | 클러스터 사이드바 버튼 텍스트/색상 수정 |
| GET | [/api/v1/container/cluster/clusters/{cluster_id}/kubeconfig](/api/container/get-cluster-clusters-cluster-id-kubeconfig) | 특정 클러스터의 kubeConfig 조회 |
| POST | [/api/v1/container/cluster/clusters/{cluster_id}/shell](/api/container/post-cluster-clusters-cluster-id-shell) | 클러스터 셸 접속 URL 생성 |
| GET | [/api/v1/container/cluster/clusters/{cluster_id}/control-plane/health](/api/container/get-cluster-clusters-cluster-id-control-plane-health) | 컨트롤 플레인 상태 조회 |

## 클러스터 · 프로비저닝

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/container/cluster/cluster-provisioning/k8s-versions](/api/container/get-cluster-cluster-provisioning-k8s-versions) | Kubernetes 버전 목록 조회 (옵션) |
| POST | [/api/v1/container/cluster/cluster-provisioning](/api/container/post-cluster-cluster-provisioning) | 클러스터 프로비저닝 요청 (Stage 1) |


# Operator에 연결된 App Catalog application 배포 목록

Operator 삭제 확인 단계에서 해당 operator에 의존하는 같은 cluster의 application 배포 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/app-catalog/deployments/{deployment_id}/bound-apps
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| deployment_id | path | 필수 | integer | Operator 배포 ID. 범위 1~ |

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 보내도 무시됩니다.

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
| result.operator | 필수 | object | 삭제 대상으로 선택한 operator 배포 |
| result.operator.id | 필수 | integer 또는 null | DB 배포 ID. ArgoCD-only 항목은 null입니다 |
| result.operator.application | 필수 | string | App Catalog application 이름 |
| result.operator.version | 필수 | string | Chart version |
| result.operator.userApp | 필수 | string | 사용자 앱 이름 |
| result.operator.argoAppName | 선택 | string | ArgoCD Application 이름. 기본값 "" |
| result.operator.appName | 필수 | string | 화면 목록의 App name 컬럼 값 |
| result.operator.chartName | 필수 | string | 화면 목록의 Chart name 컬럼 값 |
| result.operator.clusterId | 필수 | integer | 배포 대상 k8s_clusters.id |
| result.operator.namespace | 필수 | string | 배포 네임스페이스 |
| result.operator.destinationServer | 선택 | string | ArgoCD destination.server URL. 기본값 "" |
| result.operator.deployable | 선택 | string 또는 null | apps/{application}/{deployable}/helm 구조의 deployable 이름 |
| result.operator.status | 필수 | string | 배포 상태. 값: deployed, pending, failed |
| result.operator.valuesFilePath | 필수 | string | tenant-catalog values 파일 경로 |
| result.operator.createdAt | 필수 | string (date-time) | 생성 시각 |
| result.operator.updatedAt | 필수 | string (date-time) | 수정 시각 |
| result.operator.lastDeployed | 필수 | string (date-time) | 화면 목록의 Last deployed 컬럼 값 |
| result.operator.metaData | 선택 | object | 목록 화면 부가 정보. 실패 상태일 때 messages가 채워집니다 |
| result.operator.metaData.messages | 선택 | array (string) | 실패 상태일 때 표시할 메시지 목록 |
| result.boundApps | 필수 | array (object) | 해당 operator에 의존하는 같은 cluster의 application 배포 목록 |
| result.boundApps[].id | 필수 | integer 또는 null | DB 배포 ID. ArgoCD-only 항목은 null입니다 |
| result.boundApps[].application | 필수 | string | App Catalog application 이름 |
| result.boundApps[].version | 필수 | string | Chart version |
| result.boundApps[].userApp | 필수 | string | 사용자 앱 이름 |
| result.boundApps[].argoAppName | 선택 | string | ArgoCD Application 이름. 기본값 "" |
| result.boundApps[].appName | 필수 | string | 화면 목록의 App name 컬럼 값 |
| result.boundApps[].chartName | 필수 | string | 화면 목록의 Chart name 컬럼 값 |
| result.boundApps[].clusterId | 필수 | integer | 배포 대상 k8s_clusters.id |
| result.boundApps[].namespace | 필수 | string | 배포 네임스페이스 |
| result.boundApps[].destinationServer | 선택 | string | ArgoCD destination.server URL. 기본값 "" |
| result.boundApps[].deployable | 선택 | string 또는 null | apps/{application}/{deployable}/helm 구조의 deployable 이름 |
| result.boundApps[].status | 필수 | string | 배포 상태. 값: deployed, pending, failed |
| result.boundApps[].valuesFilePath | 필수 | string | tenant-catalog values 파일 경로 |
| result.boundApps[].createdAt | 필수 | string (date-time) | 생성 시각 |
| result.boundApps[].updatedAt | 필수 | string (date-time) | 수정 시각 |
| result.boundApps[].lastDeployed | 필수 | string (date-time) | 화면 목록의 Last deployed 컬럼 값 |
| result.boundApps[].metaData | 선택 | object | 목록 화면 부가 정보. 실패 상태일 때 messages가 채워집니다 |
| result.boundApps[].metaData.messages | 선택 | array (string) | 실패 상태일 때 표시할 메시지 목록 |
| result.boundAppCount | 필수 | integer | 연결된 application 배포 수 |
| result.dependentApplications | 필수 | array (object) | 삭제 대상 dependency에 의존하는 application 배포 목록 |
| result.dependentApplications[].id | 필수 | integer 또는 null | DB 배포 ID. ArgoCD-only 항목은 null입니다 |
| result.dependentApplications[].application | 필수 | string | App Catalog application 이름 |
| result.dependentApplications[].version | 필수 | string | Chart version |
| result.dependentApplications[].userApp | 필수 | string | 사용자 앱 이름 |
| result.dependentApplications[].argoAppName | 선택 | string | ArgoCD Application 이름. 기본값 "" |
| result.dependentApplications[].appName | 필수 | string | 화면 목록의 App name 컬럼 값 |
| result.dependentApplications[].chartName | 필수 | string | 화면 목록의 Chart name 컬럼 값 |
| result.dependentApplications[].clusterId | 필수 | integer | 배포 대상 k8s_clusters.id |
| result.dependentApplications[].namespace | 필수 | string | 배포 네임스페이스 |
| result.dependentApplications[].destinationServer | 선택 | string | ArgoCD destination.server URL. 기본값 "" |
| result.dependentApplications[].deployable | 선택 | string 또는 null | apps/{application}/{deployable}/helm 구조의 deployable 이름 |
| result.dependentApplications[].status | 필수 | string | 배포 상태. 값: deployed, pending, failed |
| result.dependentApplications[].valuesFilePath | 필수 | string | tenant-catalog values 파일 경로 |
| result.dependentApplications[].createdAt | 필수 | string (date-time) | 생성 시각 |
| result.dependentApplications[].updatedAt | 필수 | string (date-time) | 수정 시각 |
| result.dependentApplications[].lastDeployed | 필수 | string (date-time) | 화면 목록의 Last deployed 컬럼 값 |
| result.dependentApplications[].metaData | 선택 | object | 목록 화면 부가 정보. 실패 상태일 때 messages가 채워집니다 |
| result.dependentApplications[].metaData.messages | 선택 | array (string) | 실패 상태일 때 표시할 메시지 목록 |
| result.depedentApplications | 필수 | array (object) | dependentApplications의 Figma 오타 호환 필드 |
| result.depedentApplications[].id | 필수 | integer 또는 null | DB 배포 ID. ArgoCD-only 항목은 null입니다 |
| result.depedentApplications[].application | 필수 | string | App Catalog application 이름 |
| result.depedentApplications[].version | 필수 | string | Chart version |
| result.depedentApplications[].userApp | 필수 | string | 사용자 앱 이름 |
| result.depedentApplications[].argoAppName | 선택 | string | ArgoCD Application 이름. 기본값 "" |
| result.depedentApplications[].appName | 필수 | string | 화면 목록의 App name 컬럼 값 |
| result.depedentApplications[].chartName | 필수 | string | 화면 목록의 Chart name 컬럼 값 |
| result.depedentApplications[].clusterId | 필수 | integer | 배포 대상 k8s_clusters.id |
| result.depedentApplications[].namespace | 필수 | string | 배포 네임스페이스 |
| result.depedentApplications[].destinationServer | 선택 | string | ArgoCD destination.server URL. 기본값 "" |
| result.depedentApplications[].deployable | 선택 | string 또는 null | apps/{application}/{deployable}/helm 구조의 deployable 이름 |
| result.depedentApplications[].status | 필수 | string | 배포 상태. 값: deployed, pending, failed |
| result.depedentApplications[].valuesFilePath | 필수 | string | tenant-catalog values 파일 경로 |
| result.depedentApplications[].createdAt | 필수 | string (date-time) | 생성 시각 |
| result.depedentApplications[].updatedAt | 필수 | string (date-time) | 수정 시각 |
| result.depedentApplications[].lastDeployed | 필수 | string (date-time) | 화면 목록의 Last deployed 컬럼 값 |
| result.depedentApplications[].metaData | 선택 | object | 목록 화면 부가 정보. 실패 상태일 때 messages가 채워집니다 |
| result.depedentApplications[].metaData.messages | 선택 | array (string) | 실패 상태일 때 표시할 메시지 목록 |
| result.dependentApplicationNum | 필수 | integer | 삭제 대상 dependency에 의존하는 application 배포 수 |
| result.hasBoundApps | 필수 | boolean | 연결된 application 배포 존재 여부 |


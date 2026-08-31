# 렌더링된 App Catalog values.yaml 배포를 요청

렌더링된 App Catalog values.yaml 배포를 요청합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/container/app-catalog/deployments
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 보내도 무시됩니다.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| application | 필수 | string | App Catalog 어플리케이션 이름 |
| version | 필수 | string | Chart 버전 |
| userApp | 필수 | string | 사용자가 정의한 어플리케이션 이름 |
| destination | 필수 | object | 배포 대상 정보 |
| destination.clusterId | 필수 | integer | 배포 대상 k8s_clusters.id. 범위 1~ |
| destination.namespace | 필수 | string | 배포 네임스페이스 |
| destination.server | 선택 | string 또는 null | ArgoCD destination.server URL |
| yamlContent | 선택 | string 또는 null | 사용자가 YAML editor에서 최종 확인한 values.yaml 내용 |
| mode | 선택 | string | 생성에 사용할 YAML template mode. 값: standalone, single, ha |
| config | 선택 | object 또는 null | deprecated: tenant-values.yaml placeholder 치환 값. 신규 생성 UX에서는 yamlContent를 사용합니다 |
| deployable | 선택 | string 또는 null | apps/{application}/{deployable}/helm 구조를 사용하는 경우 deployable 이름 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.id | 필수 | integer | 배포 ID. DB id가 없는 생성 직후 응답은 0입니다 |
| result.application | 필수 | string | App Catalog application 이름 |
| result.version | 필수 | string | Chart version |
| result.clusterId | 필수 | integer | 배포 대상 k8s_clusters.id |
| result.namespace | 필수 | string | 배포 네임스페이스 |
| result.destination | 필수 | object | Step5 배포 대상 정보 |
| result.destination.clusterId | 필수 | integer | 배포 대상 k8s_clusters.id |
| result.destination.namespace | 필수 | string | 배포 네임스페이스 |
| result.destination.server | 선택 | string | ArgoCD destination.server URL. 기본값 "" |
| result.lastDeployed | 필수 | string (date-time) | 상세 화면 Summary Last deployed |
| result.status | 필수 | string | 배포 상태. 값: deployed, pending, failed |
| result.statusMessage | 선택 | string | 배포 상태 메시지. 기본값 "" |
| result.connectionInfo | 선택 | object | 앱별 서비스 접속 정보 |
| result.credentialFields | 선택 | array (object) | raw credential 표시/Reveal/Copy 메타데이터 |
| result.credentialFields[].id | 필수 | string | 고정 credential id |
| result.credentialFields[].label | 필수 | string | 화면 표시 label |
| result.credentialFields[].category | 필수 | string | credential 분류. rawCredential |
| result.credentialFields[].displayValue | 필수 | string | 화면 표시 값. available=true이면 고정 마스크 |
| result.credentialFields[].masked | 필수 | boolean | 기본 마스킹 여부 |
| result.credentialFields[].available | 필수 | boolean | Secret/key 존재 여부 |
| result.credentialFields[].revealable | 필수 | boolean | Reveal 액션 가능 여부 |
| result.credentialFields[].copyable | 필수 | boolean | Copy 액션 가능 여부 |
| result.credentialFields[].secretRef | 선택 | object 또는 null | raw credential Secret key 참조 |
| result.credentialFields[].secretRef.secretName | 필수 | string | Kubernetes Secret 이름 |
| result.credentialFields[].secretRef.secretKey | 필수 | string | Kubernetes Secret key |
| result.modeName | 필수 | string | 생성 당시 mode 표시 이름 |
| result.yamlContent | 필수 | string | 렌더링된 values.yaml 텍스트 |


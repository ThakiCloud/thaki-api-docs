# List App Catalog Deployments

ArgoCD Application 기준으로 App Catalog 배포 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/app-catalog/deployments
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호. 기본값 1. 범위 1~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 10. 범위 1~100 |
| application | 선택 | string 또는 null | App Catalog application 필터 |
| clusterId | 선택 | integer 또는 null | 배포 대상 k8s_clusters.id 필터. 범위 1~ |
| namespace | 선택 | string 또는 null | 배포 네임스페이스 필터 |
| status | 선택 | string 또는 null | 배포 상태 필터 |
| keyword | 선택 | string 또는 null | application/userApp/clusterId/namespace 부분 일치 검색어 |
| packageType | 선택 | string 또는 null | App Catalog 패키지 타입 필터. apps 또는 operators만 허용합니다. 값: apps, operators |
| sortBy | 선택 | string | 정렬 기준. 값: appName, chartName, lastDeployed, createdAt, updatedAt, application, userApp, status. 기본값 "updatedAt" |
| sortOrder | 선택 | string | 정렬 순서. 값: asc, desc. 기본값 "desc" |

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
| result.data | 필수 | array (object) | packageType 필터가 적용된 배포 목록 |
| result.data[].id | 필수 | integer 또는 null | DB 배포 ID. ArgoCD-only 항목은 null입니다 |
| result.data[].application | 필수 | string | App Catalog application 이름 |
| result.data[].version | 필수 | string | Chart version |
| result.data[].userApp | 필수 | string | 사용자 앱 이름 |
| result.data[].argoAppName | 선택 | string | ArgoCD Application 이름. 기본값 "" |
| result.data[].appName | 필수 | string | 화면 목록의 App name 컬럼 값 |
| result.data[].chartName | 필수 | string | 화면 목록의 Chart name 컬럼 값 |
| result.data[].clusterId | 필수 | integer | 배포 대상 k8s_clusters.id |
| result.data[].namespace | 필수 | string | 배포 네임스페이스 |
| result.data[].destinationServer | 선택 | string | ArgoCD destination.server URL. 기본값 "" |
| result.data[].deployable | 선택 | string 또는 null | apps/{application}/{deployable}/helm 구조의 deployable 이름 |
| result.data[].status | 필수 | string | 배포 상태. 값: deployed, pending, failed |
| result.data[].valuesFilePath | 필수 | string | tenant-catalog values 파일 경로 |
| result.data[].createdAt | 필수 | string (date-time) | 생성 시각 |
| result.data[].updatedAt | 필수 | string (date-time) | 수정 시각 |
| result.data[].lastDeployed | 필수 | string (date-time) | 화면 목록의 Last deployed 컬럼 값 |
| result.data[].metaData | 선택 | object | 목록 화면 부가 정보. 실패 상태일 때 messages가 채워집니다 |
| result.data[].metaData.messages | 선택 | array (string) | 실패 상태일 때 표시할 메시지 목록 |
| result.dataCount | 필수 | integer | 현재 페이지 배포 개수 |
| result.pagination | 필수 | object | packageType 필터가 적용된 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


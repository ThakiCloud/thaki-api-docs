# List Catalog Apps

App Catalog 목록을 탭과 카테고리별로 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/app-catalog/apps
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| tab | 선택 | string | 조회할 App Catalog 탭. 조회할 App Catalog 탭. 값: applications, operators. 기본값 "applications" |
| category | 선택 | string | 조회할 App Catalog 카테고리 탭. 조회할 App Catalog 카테고리 탭. 값: all, database, developerTools, dataProcessing, hadoopEcosystem, storage, vectorDB. 기본값 "all" |
| appName | 선택 | string 또는 null | 앱 이름 부분 일치 필터. 앱 이름 부분 일치 필터 |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Domain-Id | 필수 | string | Domain ID. Domain ID |
| X-Domain-Name | 필수 | string | Domain Name. Domain Name |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.selectedTab | 필수 | string | 조회된 탭 |
| result.categoryTabs | 필수 | array (object) | 선택된 상단 탭에서 사용할 카테고리 탭 목록 |
| result.categoryTabs[].key | 필수 | string | 카테고리 탭 key |
| result.categoryTabs[].label | 필수 | string | 카테고리 탭 표시명 |
| result.categoryTabs[].totalCount | 필수 | integer | 카테고리 탭 앱 개수 |
| result.categories | 필수 | array (object) | 카테고리별 앱 목록 |
| result.categories[].key | 필수 | string | 카테고리 key |
| result.categories[].label | 필수 | string | 카테고리 표시명 |
| result.categories[].apps | 필수 | array (object) | 카테고리 앱 목록 |
| result.categories[].apps[].appName | 필수 | string | 앱 이름 |
| result.categories[].apps[].displayName | 필수 | string | 화면 표시 앱 이름 |
| result.categories[].apps[].category | 필수 | string | 앱 카테고리 |
| result.categories[].apps[].version | 필수 | string | 대표 버전 |
| result.categories[].apps[].availableVersions | 필수 | array (string) | 설치 가능한 버전 목록 |
| result.categories[].apps[].tags | 필수 | array (string) | 앱 카드 태그 |
| result.categories[].apps[].description | 필수 | string | 앱 설명 |
| result.categories[].apps[].url | 선택 | string 또는 null | 앱 상세/외부 참조 URL |
| result.categories[].apps[].imagePath | 선택 | string 또는 null | 앱 카드 이미지 경로 |
| result.categories[].apps[].deployable | 선택 | string 또는 null | apps/{appName}/{deployable}/helm 구조를 사용하는 경우 deployable 이름 |
| result.categories[].apps[].installable | 필수 | boolean | App Catalog 설치 플로우를 사용할 수 있는 항목인지 여부 |
| result.categories[].totalCount | 필수 | integer | 카테고리 앱 개수 |
| result.totalCount | 필수 | integer | 조회된 전체 앱 개수 |


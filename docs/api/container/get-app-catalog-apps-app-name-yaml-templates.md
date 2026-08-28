# App Catalog YAML template mode 목록 조회

앱과 Target version에 대해 선택 가능한 values.yaml template mode 목록을 조회합니다. 앱마다 single, cluster 등 서로 다른 mode를 가질 수 있으며, 응답은 app-catalog submodule의 template 메타데이터를 기준으로 합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/app-catalog/apps/{app_name}/yaml-templates
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| app_name | path | 필수 | string | 앱 이름. 앱 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| version | 필수 | string | Chart 버전. Chart 버전 |
| deployable | 선택 | string 또는 null | apps/{appName}/{deployable}/helm 구조를 사용하는 경우 deployable 이름. apps/{appName}/{deployable}/helm 구조를 사용하는 경우 deployable 이름 |

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
| 200 OK | 앱별 YAML template mode 목록 |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.appName | 필수 | string | 앱 이름 |
| result.version | 필수 | string | Chart 버전 |
| result.defaultMode | 필수 | string | 프론트가 자동 선택할 기본 mode |
| result.templates | 필수 | array (object) | mode별 YAML 템플릿 목록 |
| result.templates[].mode | 필수 | string | 생성 mode 식별자 |
| result.templates[].size | 필수 | string | 템플릿 size 식별자 |
| result.templates[].displayName | 필수 | string | 화면에 표시할 mode 이름 |
| result.templates[].description | 필수 | string | mode 설명 |
| result.templates[].isDefault | 필수 | boolean | 기본 선택 mode 여부 |
| result.templates[].isAvailable | 필수 | boolean | 선택 가능 여부 |
| result.templates[].templateName | 필수 | string | 원본 YAML 템플릿 파일명 |
| result.templates[].summary | 선택 | object | 화면 표시용 YAML 요약 값 |


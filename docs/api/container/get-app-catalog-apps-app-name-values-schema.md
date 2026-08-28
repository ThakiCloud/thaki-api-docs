# App Catalog values.schema.json 조회

App Catalog 앱 이름으로 UI 입력 폼 구성을 위한 원본 values.schema.json을 조회합니다. app-catalog submodule 또는 로컬 schema 데이터를 그대로 확인해야 할 때 사용합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/app-catalog/apps/{app_name}/values-schema
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| app_name | path | 필수 | string | 앱 이름. 앱 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
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
| 200 OK | 앱 values.schema.json 원본 |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |


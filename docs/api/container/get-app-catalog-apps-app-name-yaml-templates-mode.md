# App Catalog YAML template 상세 조회

선택한 앱, Target version, template mode에 해당하는 원본 values.yaml template을 조회합니다. 사용자가 config 값을 넣기 전의 template 내용을 확인하거나 비교할 때 사용합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/app-catalog/apps/{app_name}/yaml-templates/{mode}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| app_name | path | 필수 | string | 앱 이름. 앱 이름 |
| mode | path | 필수 | string | YAML template mode. YAML template mode. 값: standalone, single, ha |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| version | 필수 | string | Chart 버전. Chart 버전 |
| deployable | 선택 | string 또는 null | apps/{appName}/{deployable}/helm 구조를 사용하는 경우 deployable 이름. apps/{appName}/{deployable}/helm 구조를 사용하는 경우 deployable 이름 |
| size | 선택 | string | yaml-templates API에서 사용자가 선택한 YAML template size. yaml-templates API에서 사용자가 선택한 YAML template size. 값: default, small, medium, large |
| templateName | 선택 | string 또는 null | deprecated: 조회할 tenant values 템플릿 파일명. 미전달 시 mode + size로 템플릿을 선택합니다.. deprecated: 조회할 tenant values 템플릿 파일명. 미전달 시 mode + size로 템플릿을 선택합니다. |

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
| 200 OK | 선택한 mode의 원본 YAML template |
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
| result.mode | 필수 | string | 생성 mode 식별자 |
| result.size | 필수 | string | 템플릿 size 식별자 |
| result.displayName | 필수 | string | 화면에 표시할 mode 이름 |
| result.templateName | 필수 | string | 원본 YAML 템플릿 파일명 |
| result.sourceTemplatePath | 필수 | string | 원본 YAML 템플릿 경로 |
| result.templateChecksum | 필수 | string | 원본 YAML 템플릿 checksum |
| result.yamlContent | 필수 | string | 원본 values.yaml 템플릿 내용 |
| result.summary | 선택 | object | 화면 표시용 YAML 요약 값 |


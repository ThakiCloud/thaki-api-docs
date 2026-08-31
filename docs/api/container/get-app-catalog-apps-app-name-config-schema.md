# YAML template mode를 먼저 선택한 뒤 호출하는 API

YAML template mode를 먼저 선택한 뒤 호출하는 API입니다. 앱 이름, chart version, mode에 맞춰 선택된 tenant-values 템플릿에 필요한 config key, value type, section, validation rule 정보만 반환합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/app-catalog/apps/{app_name}/config-schema
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| app_name | path | 필수 | string | 앱 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| version | 필수 | string | Target chart version |
| mode | 필수 | string | yaml-templates API에서 사용자가 선택한 YAML template mode. 값: standalone, single, ha |
| size | 선택 | string | yaml-templates API에서 사용자가 선택한 YAML template size. 값: default, small, medium, large |
| templateName | 선택 | string 또는 null | deprecated: yaml-templates API에서 사용자가 선택한 tenant values 템플릿 파일명. 미전달 시 mode + size로 템플릿을 선택합니다. |
| deployable | 선택 | string 또는 null | apps/{appName}/{deployable}/helm 구조를 사용하는 경우 deployable 이름 |

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 보내도 무시됩니다.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | config 입력 필드 schema |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.appName | 필수 | string | 앱 이름 |
| result.version | 필수 | string | Target chart version |
| result.mode | 필수 | string | 선택한 YAML template mode |
| result.size | 필수 | string | 선택한 YAML template size |
| result.templateName | 필수 | string | config schema 산출 기준 tenant values 템플릿 파일명 |
| result.sourceTemplatePath | 필수 | string | config schema 산출 기준 tenant values 템플릿 경로 |
| result.deployable | 선택 | string 또는 null | deployable 이름 |
| result.source | 필수 | object | schema source metadata |
| result.sections | 필수 | array (object) | config form section 목록 |
| result.fields | 필수 | array (object) | input box 구성을 위한 key/type field 목록 |
| result.formValidationRules | 선택 | array (object) | form 단위 validation rule 목록 |


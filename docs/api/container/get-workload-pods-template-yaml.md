# Get Pod Template

Pod 템플릿 YAML 조회

Pod 생성을 위한 템플릿 YAML을 조회합니다.
응답에는 Pod 생성 시 함께 사용할 수 있는 관련 리소스 템플릿 정보(Service 등)가 포함됩니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/workload/pods/template/yaml
```

## URI 매개변수

없습니다.

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
| result.yamlContent | 필수 | string | Pod YAML 내용 |
| result.relatedTemplates | 선택 | array (object) | Pod 생성 시 함께 사용할 수 있는 관련 리소스 템플릿 목록 |
| result.relatedTemplates[].type | 필수 | string | 관련 리소스 타입 |
| result.relatedTemplates[].path | 필수 | string | 템플릿 조회 API 경로 |
| result.relatedTemplates[].description | 선택 | string | 템플릿 설명. 기본값 "" |


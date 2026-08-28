# Get Service Template

Service 템플릿 YAML 조회

Query 파라미터로 Service 타입을 지정하여 해당 타입의 템플릿을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/service-routing/service/template/yaml
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| type | 선택 | string | Service 타입. Service 타입. 값: ClusterIP, ExternalName, LoadBalancer, NodePort, Headless |

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
| result.yamlContent | 필수 | string | Service YAML 내용 |
| result.type | 필수 | string | Service 타입. 값: ClusterIP, ExternalName, LoadBalancer, NodePort, Headless |


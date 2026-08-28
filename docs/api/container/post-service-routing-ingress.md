# Create Ingress

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/container/service-routing/ingress
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Domain-Id | 필수 | string | Domain ID. Domain ID |
| X-Domain-Name | 필수 | string | Domain Name. Domain Name |

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| yamlContent | 필수 | string | Ingress 정의 YAML 문자열 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.ingressName | 필수 | string | 생성된 Ingress 이름 |
| result.namespace | 필수 | string | 네임스페이스 |
| result.createdAt | 필수 | string (date-time) | 생성 시간 |
| result.message | 선택 | string | 메시지. 기본값 "" |


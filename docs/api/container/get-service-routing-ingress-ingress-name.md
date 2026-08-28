# Get Ingress Detail

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/service-routing/ingress/{ingress_name}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| ingress_name | path | 필수 | string | Ingress 이름. Ingress 이름. 길이 0~253 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |
| namespace | 선택 | string | 네임스페이스. 네임스페이스. 기본값 "default". 길이 0~63 |

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
| result.name | 필수 | string | Ingress 이름 |
| result.namespace | 필수 | string | 네임스페이스 |
| result.description | 선택 | string | 설명. 기본값 "" |
| result.labels | 선택 | object | 레이블 |
| result.annotations | 선택 | object | 어노테이션 |
| result.createdAt | 선택 | string (date-time) | 생성 시각 |
| result.status | 선택 | string | Ingress 상태 (Active/Processing/Error). 기본값 "Processing" |
| result.ingressClassName | 선택 | string 또는 null | Ingress 클래스 이름 |
| result.defaultBackend | 선택 | object 또는 null | 기본 백엔드 |
| result.defaultBackend.serviceName | 선택 | string 또는 null | 서비스 이름 |
| result.defaultBackend.servicePort | 선택 | integer 또는 null | 서비스 포트 |
| result.defaultBackend.resourceApiGroup | 선택 | string 또는 null | 리소스 API 그룹 |
| result.defaultBackend.resourceKind | 선택 | string 또는 null | 리소스 종류 |
| result.defaultBackend.resourceName | 선택 | string 또는 null | 리소스 이름 |
| result.rules | 선택 | array (object) | 규칙 목록 |
| result.rules[].host | 선택 | string 또는 null | 호스트 |
| result.rules[].paths | 선택 | array (object) | 경로 목록 |
| result.rules[].paths[].path | 선택 | string 또는 null | 경로 |
| result.rules[].paths[].pathType | 선택 | string 또는 null | 경로 타입 |
| result.rules[].paths[].backend | 선택 | object 또는 null | 백엔드 |
| result.rules[].paths[].backend.serviceName | 선택 | string 또는 null | 서비스 이름 |
| result.rules[].paths[].backend.servicePort | 선택 | integer 또는 null | 서비스 포트 |
| result.rules[].paths[].backend.resourceApiGroup | 선택 | string 또는 null | 리소스 API 그룹 |
| result.rules[].paths[].backend.resourceKind | 선택 | string 또는 null | 리소스 종류 |
| result.rules[].paths[].backend.resourceName | 선택 | string 또는 null | 리소스 이름 |
| result.tls | 선택 | array (object) | TLS 설정 |
| result.tls[].hosts | 선택 | array (string) | 호스트 목록 |
| result.tls[].secretName | 선택 | string 또는 null | 시크릿 이름 |
| result.loadBalancerIngresses | 선택 | array (object) | 로드밸런서 Ingress 목록 |
| result.loadBalancerIngresses[].ip | 선택 | string 또는 null | IP 주소 |
| result.loadBalancerIngresses[].hostname | 선택 | string 또는 null | 호스트명 |
| result.relatedServices | 선택 | array (string) | 관련 서비스 목록 |
| result.age | 필수 | string | 생성 후 경과 시간 |


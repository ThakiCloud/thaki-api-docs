# NetworkPolicy 상세 정보 조회

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/policy/network-policy/{network_policy_name}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| network_policy_name | path | 필수 | string | NetworkPolicy 이름. 길이 0~253 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 범위 1~ |
| namespace | 필수 | string | 네임스페이스 이름. 길이 0~63 |

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
| result.name | 필수 | string | NetworkPolicy 이름 |
| result.namespace | 필수 | string | NetworkPolicy가 속한 네임스페이스 |
| result.labels | 선택 | object | 리소스 라벨 |
| result.annotations | 선택 | object | 리소스 어노테이션 |
| result.createdAt | 필수 | string (date-time) | 생성 시각 (ISO 8601 형식, UTC) |
| result.status | 선택 | string 또는 null | 상태 (조건 없음이면 null) |
| result.podSelectorItems | 선택 | array (object) | Pod Selector 조건 목록 |
| result.podSelectorItems[].scope | 필수 | string | Selector 적용 범위 (NAMESPACE 또는 POD). 값: NAMESPACE, POD |
| result.podSelectorItems[].key | 필수 | string | Label key |
| result.podSelectorItems[].op | 필수 | string | 연산자. 값: IN, NOT_IN, EXISTS, DOES_NOT_EXIST |
| result.podSelectorItems[].vals | 선택 | array (string) | 값 목록 (IN, NOT_IN에서 사용) |
| result.policyTypes | 선택 | array (string) | 정책 타입 목록 (Ingress, Egress) |
| result.ingressRules | 선택 | array (object) | Ingress 규칙 목록 |
| result.ingressRules[].target | 필수 | object | Rule Target 정보 |
| result.ingressRules[].target.ruleType | 필수 | string | Rule 타입. 값: NAMESPACE_ONLY, POD_ONLY, NAMESPACE_AND_POD, IP_BLOCK |
| result.ingressRules[].target.items | 선택 | array (object) | Selector 아이템 목록 |
| result.ingressRules[].target.items[].scope | 필수 | string | Selector 적용 범위 (NAMESPACE 또는 POD). 값: NAMESPACE, POD |
| result.ingressRules[].target.items[].key | 필수 | string | Label key |
| result.ingressRules[].target.items[].op | 필수 | string | 연산자. 값: IN, NOT_IN, EXISTS, DOES_NOT_EXIST |
| result.ingressRules[].target.items[].vals | 선택 | array (string) | 값 목록 (IN, NOT_IN에서 사용) |
| result.ingressRules[].target.ipBlock | 선택 | object 또는 null | IP Block 정보 (IP_BLOCK 타입일 때만 사용) |
| result.ingressRules[].target.ipBlock.cidr | 필수 | string | CIDR 표기법의 IP 대역 |
| result.ingressRules[].target.ipBlock.exceptions | 선택 | array (string) | CIDR에서 제외할 IP 대역 목록 |
| result.ingressRules[].allowedPorts | 선택 | array (object) | 허용된 포트 목록 |
| result.ingressRules[].allowedPorts[].protocol | 선택 | string | 프로토콜 (TCP, UDP, SCTP). 기본값 "TCP" |
| result.ingressRules[].allowedPorts[].port | 선택 | integer 또는 null | 포트 번호 또는 포트 이름 |
| result.ingressRules[].allowedPorts[].endPort | 선택 | integer 또는 null | 포트 범위 끝 (선택) |
| result.egressRules | 선택 | array (object) | Egress 규칙 목록 |
| result.egressRules[].target | 필수 | object | Rule Target 정보 |
| result.egressRules[].target.ruleType | 필수 | string | Rule 타입. 값: NAMESPACE_ONLY, POD_ONLY, NAMESPACE_AND_POD, IP_BLOCK |
| result.egressRules[].target.items | 선택 | array (object) | Selector 아이템 목록 |
| result.egressRules[].target.items[].scope | 필수 | string | Selector 적용 범위 (NAMESPACE 또는 POD). 값: NAMESPACE, POD |
| result.egressRules[].target.items[].key | 필수 | string | Label key |
| result.egressRules[].target.items[].op | 필수 | string | 연산자. 값: IN, NOT_IN, EXISTS, DOES_NOT_EXIST |
| result.egressRules[].target.items[].vals | 선택 | array (string) | 값 목록 (IN, NOT_IN에서 사용) |
| result.egressRules[].target.ipBlock | 선택 | object 또는 null | IP Block 정보 (IP_BLOCK 타입일 때만 사용) |
| result.egressRules[].target.ipBlock.cidr | 필수 | string | CIDR 표기법의 IP 대역 |
| result.egressRules[].target.ipBlock.exceptions | 선택 | array (string) | CIDR에서 제외할 IP 대역 목록 |
| result.egressRules[].allowedPorts | 선택 | array (object) | 허용된 포트 목록 |
| result.egressRules[].allowedPorts[].protocol | 선택 | string | 프로토콜 (TCP, UDP, SCTP). 기본값 "TCP" |
| result.egressRules[].allowedPorts[].port | 선택 | integer 또는 null | 포트 번호 또는 포트 이름 |
| result.egressRules[].allowedPorts[].endPort | 선택 | integer 또는 null | 포트 범위 끝 (선택) |


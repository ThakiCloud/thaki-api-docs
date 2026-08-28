# Update Node Manifest Preset

Node manifest preset 수정

preset 형태(JSON)로 Node 정보를 수정합니다.
- description은 내부적으로 annotations.description으로 저장합니다.
- labels/annotations는 merge-upsert (null이면 삭제, 없으면 유지)로 적용합니다.
- taints는 제공된 경우에만 최종 상태로 replace 적용합니다.

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/container/cluster/nodes/{node_name}/manifest/preset
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| node_name | path | 필수 | string | Node 이름. Node 이름. 길이 0~253 |

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
| name | 필수 | string | Node 이름 (Path node_name과 일치해야 합니다) |
| description | 선택 | string | Node 설명 (내부적으로 metadata.annotations.description으로 저장). 기본값 "" |
| taints | 선택 | array (object) | Node taints (spec.taints). 필드를 생략하면 기존 taints를 유지합니다. 배열을 보내면 그 값이 최종 상태로 replace 적용됩니다(빈 배열이면 전체 제거). |
| taints[].key | 필수 | string | Taint 키 |
| taints[].value | 선택 | string | Taint 값 (선택). 빈 문자열이면 내부적으로 value 없이 저장됩니다.. 기본값 "" |
| taints[].effect | 필수 | string | Taint effect (NoSchedule, PreferNoSchedule, NoExecute). 값: NoSchedule, PreferNoSchedule, NoExecute |
| labels | 선택 | object | Node labels (metadata.labels). 키가 없으면 유지, 값이 문자열이면 추가/수정, 값이 null이면 삭제됩니다. {}는 변경하지 않습니다. |
| annotations | 선택 | object | Node annotations (metadata.annotations, description 제외). 키가 없으면 유지, 값이 문자열이면 추가/수정, 값이 null이면 삭제됩니다. {}는 변경하지 않습니다. |

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
| result.name | 필수 | string | Node 이름 |
| result.description | 필수 | string | Node 설명 (annotations.description, 없으면 빈 문자열) |
| result.taints | 선택 | array (object) | Node taints |
| result.taints[].key | 필수 | string | taint key |
| result.taints[].value | 필수 | string | taint value |
| result.taints[].effect | 필수 | string | taint effect |
| result.labels | 선택 | object | 레이블 |
| result.annotations | 선택 | object | 어노테이션 (description 제외) |


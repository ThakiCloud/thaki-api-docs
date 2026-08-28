# Get Node Manifest Preset

기존 Node manifest 기반 preset 조회

특정 클러스터에 존재하는 Node의 manifest에서 편집/확인에 필요한 최소 필드만 추출합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/cluster/nodes/{node_name}/manifest/preset
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


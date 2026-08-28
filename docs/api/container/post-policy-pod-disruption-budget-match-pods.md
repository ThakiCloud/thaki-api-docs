# Match Pods

Namespace/Pod Selector 기반 Matching Pods 조회

사용자가 입력한 Namespace Selector 및 Pod Selector를 기준으로,
조건에 매칭되는 Pod 목록을 페이지네이션하여 조회합니다.

- Selector 조건이 없으면 필터링을 적용하지 않습니다.
- 모든 Selector 조건은 AND로 결합됩니다.
- namespace 파라미터가 있으면 해당 namespace 내에서만 검색합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/container/policy/pod-disruption-budget/match-pods
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |
| namespace | 선택 | string 또는 null | 네임스페이스 이름 (선택, 지정 시 해당 namespace 내에서만 검색). 네임스페이스 이름 (선택, 지정 시 해당 namespace 내에서만 검색). 길이 0~63 |
| page | 선택 | integer | 페이지 번호. 페이지 번호. 기본값 1. 범위 1~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 10. 범위 1~100 |

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
| selectors | 선택 | array (object) | Selector 조건 목록 (빈 배열이면 필터링 없이 전체 반환) |
| selectors[].scope | 필수 | string | Selector 적용 범위 (NAMESPACE 또는 POD). 값: NAMESPACE, POD |
| selectors[].key | 필수 | string | Label key. 길이 1~253 |
| selectors[].op | 필수 | string | 연산자 (IN, NOT_IN, EXISTS, DOES_NOT_EXIST). 값: IN, NOT_IN, EXISTS, DOES_NOT_EXIST |
| selectors[].vals | 선택 | array (string) | 값 목록 (IN, NOT_IN 연산자에서 필수) |

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
| result.data | 필수 | array (object) | 필터링된 Pod 목록 |
| result.data[].name | 필수 | string | Pod 이름 |
| result.data[].namespace | 필수 | string | Pod가 속한 네임스페이스 |
| result.data[].createdAt | 필수 | string (date-time) | Pod 생성 시각 (RFC 3339, UTC) |
| result.filterCnt | 필수 | integer | 필터링된 Pod 개수 |
| result.allCnt | 필수 | integer | 전체 Pod 개수 (검색 범위 내, 필터 미적용) |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 |
| result.pagination.pageSize | 필수 | integer | 페이지 크기 |
| result.pagination.totalCount | 필수 | integer | 필터 적용 후 총 Pod 개수 |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 수 |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


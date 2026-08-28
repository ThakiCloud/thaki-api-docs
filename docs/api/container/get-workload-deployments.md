# List Deployments

Deployment 목록 조회

특정 클러스터의 Deployment 목록을 페이지네이션하여 조회합니다.
네임스페이스를 지정하지 않으면 전체 네임스페이스를 조회하고,
여러 네임스페이스를 지정하면 해당 네임스페이스들만 필터링합니다.

See Also:
    [API 문서](https://www.notion.so/2bc9eddc34e68135a636ec3c7e13976d)

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/workload/deployments
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0이면 전체 반환). 페이지 번호 (0이면 전체 반환). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지당 항목 수. 페이지당 항목 수. 기본값 20. 범위 1~ |
| filterName | 선택 | array (string) | 이름 부분일치 필터 (다중값 OR 조건). 이름 부분일치 필터 (다중값 OR 조건) |
| filterImage | 선택 | array (string) | 이미지 부분일치 필터 (다중값 OR 조건). 이미지 부분일치 필터 (다중값 OR 조건) |
| createdAtGte | 선택 | string 또는 null | 생성일 이상 필터 (YYYY-MM-DD). 생성일 이상 필터 (YYYY-MM-DD) |
| createdAtLte | 선택 | string 또는 null | 생성일 이하 필터 (YYYY-MM-DD). 생성일 이하 필터 (YYYY-MM-DD) |
| sortBy | 선택 | string | 정렬 기준 (name, namespace, createdAt). 정렬 기준 (name, namespace, createdAt). 값: name, namespace, createdAt. 기본값 "createdAt" |
| sortOrder | 선택 | string | 정렬 순서 (asc, desc). 정렬 순서 (asc, desc). 값: asc, desc. 기본값 "desc" |
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |
| namespace | 선택 | array (string) | 네임스페이스 목록 (선택, 복수 지정 가능: namespace=default&namespace=kube-system), 없으면 전체 네임스페이스 조회. 네임스페이스 목록 (선택, 복수 지정 가능: namespace=default&namespace=kube-system), 없으면 전체 네임스페이스 조회 |

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
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].name | 필수 | string | Deployment 이름 |
| result.data[].namespace | 필수 | string | Deployment가 속한 네임스페이스 |
| result.data[].description | 필수 | string | Deployment 설명 (annotations.description) |
| result.data[].labels | 필수 | object | Deployment 레이블 |
| result.data[].annotations | 필수 | object | Deployment 어노테이션 (description 제외) |
| result.data[].createdAt | 필수 | string (date-time) | 생성 시각 (RFC 3339, UTC) |
| result.data[].status | 필수 | string | Deployment 상태 (Error, Stopped, Active, Processing) |
| result.data[].isPaused | 필수 | boolean | 롤아웃 일시 중지 여부 (Resume/Pause Orchestration 버튼 상태) |
| result.data[].ready | 필수 | string | 준비 상태 (readyReplicas/replicas) |
| result.data[].upToDate | 필수 | integer | 최신 스펙으로 생성된 Pod 수 (status.updatedReplicas) |
| result.data[].available | 필수 | integer | 사용 가능한 Pod 수 (status.availableReplicas) |
| result.data[].images | 선택 | array (string) | 컨테이너 이미지 목록 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


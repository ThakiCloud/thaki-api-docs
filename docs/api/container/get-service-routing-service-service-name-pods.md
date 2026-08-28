# List Service Pods

Service의 selector로 매칭되는 Pod 목록 조회

기존 Service의 selector를 조회하여 매칭되는 Pod들을 반환합니다.
페이지네이션을 지원하며, page=0이면 전체 목록을 반환합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/service-routing/service/{service_name}/pods
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| service_name | path | 필수 | string | Service 이름. Service 이름. 길이 0~63 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0이면 전체 반환). 페이지 번호 (0이면 전체 반환). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 10. 범위 1~ |
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
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].name | 필수 | string | Pod 이름 |
| result.data[].namespace | 필수 | string | 네임스페이스 |
| result.data[].description | 선택 | string | 설명. 기본값 "" |
| result.data[].createdAt | 선택 | string (date-time) | 생성 시각 |
| result.data[].status | 필수 | string | Pod 상태 (Running, Failed, Pending, Succeeded, Unknown) |
| result.data[].ready | 필수 | string | 컨테이너 준비 상태 |
| result.data[].restarts | 필수 | integer | 재시작 횟수 |
| result.data[].podIp | 필수 | string | Pod IP |
| result.data[].nodeName | 필수 | string | 노드 이름 |
| result.data[].images | 선택 | array (string) | 컨테이너 이미지 목록 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


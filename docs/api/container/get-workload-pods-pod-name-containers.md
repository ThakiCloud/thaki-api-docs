# 파드 컨테이너 목록 조회

Pod 컨테이너 목록 조회

특정 클러스터 및 네임스페이스에 존재하는 Pod의 컨테이너 목록을 페이지네이션하여 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/workload/pods/{pod_name}/containers
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| pod_name | path | 필수 | string | Pod 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호. 기본값 1. 범위 1~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 10. 범위 1~ |
| clusterId | 필수 | integer | 클러스터 ID. 범위 1~ |
| namespace | 필수 | string | 네임스페이스 이름. 길이 0~63 |
| filterName | 선택 | array (string) | 이벤트 이름 필터 목록 (선택, 복수 지정 가능: filterName=event1&filterName=event2). 부분일치(OR) 검색 |

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
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].podName | 필수 | string | Pod 이름 |
| result.data[].namespace | 필수 | string | 네임스페이스 |
| result.data[].containerName | 필수 | string | 컨테이너 이름 |
| result.data[].status | 필수 | string | 컨테이너 상태 (Running, Terminated, Error, Waiting) |
| result.data[].ready | 필수 | boolean | 컨테이너 준비 상태 |
| result.data[].restarts | 필수 | integer | 컨테이너 재시작 횟수 |
| result.data[].image | 필수 | string | 컨테이너 이미지 |
| result.data[].isInitContainer | 필수 | boolean | init 컨테이너 여부 |
| result.data[].createdAt | 선택 | string (date-time) | 컨테이너 생성 시각 (running 상태일 때 startedAt 값, 없으면 null) |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


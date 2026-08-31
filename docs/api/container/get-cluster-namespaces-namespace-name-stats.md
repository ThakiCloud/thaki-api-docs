# 네임스페이스 워크로드 상태 통계 조회

Namespace 내 Workload 리소스 상태 통계 조회 (삭제 예정)

특정 Namespace에 포함된 워크로드 리소스들을 조회하여,
status 값을 기준으로 상태별 개수를 집계합니다.
삭제 예정 API이며, 신규 화면은 Namespace workload 목록의 리소스별 status를 사용합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/cluster/namespaces/{namespace_name}/stats
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| namespace_name | path | 필수 | string | Namespace 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 범위 1~ |

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
| result.namespace | 필수 | string | Namespace 이름 |
| result.totals | 필수 | object | 전체 리소스 상태별 합계 |
| result.totals.active | 선택 | integer | active 집계 bucket 개수. 기본값 0 |
| result.totals.processing | 선택 | integer | processing 집계 bucket 개수. 기본값 0 |
| result.totals.stopped | 선택 | integer | stopped 집계 bucket 개수. 기본값 0 |
| result.totals.error | 선택 | integer | error 집계 bucket 개수. 기본값 0 |
| result.totals.total | 선택 | integer | 전체 개수. 기본값 0 |
| result.items | 선택 | array (object) | 리소스별 상태 통계 |
| result.items[].resource | 필수 | string | 리소스 타입 |
| result.items[].active | 선택 | integer | active 집계 bucket 개수. 기본값 0 |
| result.items[].processing | 선택 | integer | processing 집계 bucket 개수. 기본값 0 |
| result.items[].stopped | 선택 | integer | stopped 집계 bucket 개수. 기본값 0 |
| result.items[].error | 선택 | integer | error 집계 bucket 개수. 기본값 0 |
| result.items[].total | 선택 | integer | 전체 개수. 기본값 0 |


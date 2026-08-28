# List Instance Action Logs

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/instances/{instanceId}/action-logs
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| instanceId | path | 필수 | string | 인스턴스 ID. 인스턴스 ID |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sort | 선택 | string | 정렬 필드. 정렬 필드. 값: action, requestId, startTime |
| order | 선택 | string | 정렬 방향. 정렬 방향. 값: asc, desc |
| page | 선택 | integer | 페이지 번호 (0이면 전체 조회). 페이지 번호 (0이면 전체 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 10. 범위 1~ |
| action | 선택 | array (string) | 액션 필터 (정확 일치, 다중 값 OR). 액션 필터 (정확 일치, 다중 값 OR) |
| requestId | 선택 | array (string) | 요청 ID 필터 (부분 일치, 다중 값 OR). 요청 ID 필터 (부분 일치, 다중 값 OR) |
| startTimeGte | 선택 | string 또는 null | 시작일 이상 필터 (ISO8601: YYYY-MM-DD). 시작일 이상 필터 (ISO8601: YYYY-MM-DD) |
| startTimeLte | 선택 | string 또는 null | 시작일 이하 필터 (ISO8601: YYYY-MM-DD). 시작일 이하 필터 (ISO8601: YYYY-MM-DD) |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Project-Id | 선택 | string 또는 null | OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중). OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중) |
| X-Partition-Id | 선택 | string 또는 null | 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일). 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일) |

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
| result.data[].action | 선택 | string 또는 null | 액션 |
| result.data[].requestId | 선택 | string 또는 null | 요청 ID |
| result.data[].startTime | 선택 | string 또는 null | 시작 시간 |
| result.data[].errorMessage | 선택 | string 또는 null | 에러 메시지 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


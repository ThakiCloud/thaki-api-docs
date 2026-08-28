# List Selectable Ca Certificates

Two-way(mTLS) 설정 시 선택용 CA 인증서 목록을 조회합니다.

규칙:
- sort 미전달 또는 sort=expiresAt: expired 상태는 항상 맨 뒤로 정렬
- 사용자가 다른 sort를 명시한 경우: expired 우선 정렬 규칙을 무시하고 지정된 정렬만 적용

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/certificates/ca/selectable
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| status | 선택 | array (string) | 인증서 만료 상태 필터 (VALID, EXPIRING_SOON, EXPIRED). 인증서 만료 상태 필터 (VALID, EXPIRING_SOON, EXPIRED) |
| name | 선택 | array (string) | 인증서 이름 필터. 인증서 이름 필터 |
| id | 선택 | array (string) | 인증서 ID 필터. 인증서 ID 필터 |
| listener | 선택 | array (string) | 연결된 리스너 ID 또는 이름 필터. 연결된 리스너 ID 또는 이름 필터 |
| expiresAtGte | 선택 | string 또는 null | 만료 시작 일시 (포함), ISO8601 YYYY-MM-DD. 만료 시작 일시 (포함), ISO8601 YYYY-MM-DD |
| expiresAtLte | 선택 | string 또는 null | 만료 종료 일시 (포함), ISO8601 YYYY-MM-DD. 만료 종료 일시 (포함), ISO8601 YYYY-MM-DD |
| createdAtGte | 선택 | string 또는 null | 생성 시작 일시 (포함), ISO8601 YYYY-MM-DD. 생성 시작 일시 (포함), ISO8601 YYYY-MM-DD |
| createdAtLte | 선택 | string 또는 null | 생성 종료 일시 (포함), ISO8601 YYYY-MM-DD. 생성 종료 일시 (포함), ISO8601 YYYY-MM-DD |
| createdAtRange | 선택 | array (string) | 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨. 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨 |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼 (기본값: expiresAt). 정렬 대상 컬럼 (기본값: expiresAt). 값: expiresAt, createdAt, id, name |
| order | 선택 | string | 정렬 방향 asc/desc (기본값: asc). 정렬 방향 asc/desc (기본값: asc). 값: asc, desc |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result.data[].id | 선택 | string 또는 null |  |
| result.data[].name | 선택 | string 또는 null |  |
| result.data[].mode | 선택 | string 또는 null | 인증서 모드 Enum.. 값: SERVER, CA |
| result.data[].status | 선택 | string 또는 null | 인증서 상태.. 값: VALID, EXPIRING_SOON, EXPIRED |
| result.data[].createdAt | 선택 | string (date-time) |  |
| result.data[].updatedAt | 선택 | string (date-time) |  |
| result.data[].expiresAt | 선택 | string (date-time) |  |
| result.data[].san | 선택 | array (string) |  |
| result.data[].type | 선택 | string 또는 null |  |
| result.data[].listeners | 선택 | array (object) |  |
| result.data[].listeners[].id | 필수 | string |  |
| result.data[].listeners[].name | 선택 | string 또는 null |  |
| result.data[].listeners[].protocol | 선택 | string 또는 null |  |
| result.data[].listeners[].port | 선택 | integer 또는 null |  |
| result.data[].listeners[].loadBalancerId | 선택 | string 또는 null |  |
| result.data[].certificateRef | 선택 | string 또는 null |  |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


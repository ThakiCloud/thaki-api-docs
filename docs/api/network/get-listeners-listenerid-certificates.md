# Listener 인증서 목록 조회

Listener에 연동된 인증서(Server, CA, SNI) 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/listeners/{listenerId}/certificates
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| listenerId | path | 필수 | string |  |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| status | 선택 | array (string) | 인증서 상태 필터 (VALID, EXPIRING_SOON, EXPIRED) |
| type | 선택 | array (string) | 인증서 타입 필터 (server, ca, sni) |
| name | 선택 | array (string) | 인증서 이름 필터 (contains) |
| id | 선택 | array (string) | 인증서 ID 필터 (exact) |
| san | 선택 | array (string) | SAN 필터 (contains) |
| issuer | 선택 | array (string) | 발급자 필터 (contains) |
| expiresAtGte | 선택 | string 또는 null | 만료 시작 일시 (포함), ISO8601 YYYY-MM-DD |
| expiresAtLte | 선택 | string 또는 null | 만료 종료 일시 (포함), ISO8601 YYYY-MM-DD |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼. 값: name, type, issuer, expiresAt |
| order | 선택 | string | 정렬 방향 asc/desc. 값: asc, desc |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result.data[].id | 필수 | string |  |
| result.data[].name | 선택 | string 또는 null |  |
| result.data[].type | 필수 | string | Listener에 연동된 인증서 타입. 값: SERVER, CA, SNI |
| result.data[].san | 필수 | array (string) |  |
| result.data[].issuer | 선택 | string 또는 null |  |
| result.data[].expiresAt | 선택 | string (date-time) |  |
| result.data[].status | 선택 | string 또는 null | 인증서 상태. 값: VALID, EXPIRING_SOON, EXPIRED |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


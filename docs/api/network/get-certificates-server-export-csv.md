# Download Server Certificates

SERVER 인증서 목록을 CSV로 다운로드합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/certificates/server/export/csv
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
| sort | 선택 | string | 정렬 대상 컬럼. 정렬 대상 컬럼. 값: expiresAt, createdAt, id, name |
| order | 선택 | string | 정렬 방향 asc/desc. 정렬 방향 asc/desc. 값: asc, desc |
| san | 선택 | array (string) | SAN 필터. SAN 필터 |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | CSV 파일 다운로드 |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


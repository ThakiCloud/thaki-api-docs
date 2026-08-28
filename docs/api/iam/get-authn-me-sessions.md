# 본인 세션 목록 조회

본인의 활성 세션 목록을 조회합니다. 소유자는 인증 컨텍스트(JWT)에서 확정되며 타인 세션은 조회할 수 없습니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/me/sessions
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호. 페이지 번호. 기본값 1. 범위 1~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~100 |
| status | 선택 | string 또는 null | 세션 상태 필터 (active\|expired\|invalidated). 세션 상태 필터 (active\|expired\|invalidated) |
| clientIp | 선택 | string 또는 null | 클라이언트 IP 부분 일치 검색. 클라이언트 IP 부분 일치 검색 |
| device | 선택 | string 또는 null | 디바이스(User-Agent) 부분 일치 검색. 디바이스(User-Agent) 부분 일치 검색 |
| sort | 선택 | string 또는 null | 정렬 필드 (createdAt\|expiresAt\|lastActivity\|clientIp\|status). 정렬 필드 (createdAt\|expiresAt\|lastActivity\|clientIp\|status) |
| order | 선택 | string 또는 null | 정렬 방향 (asc\|desc). 정렬 방향 (asc\|desc) |

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
| result.data[].sessionId | 필수 | string |  |
| result.data[].userTpn | 필수 | string |  |
| result.data[].createdAt | 필수 | string | 세션 생성 시간 (ISO8601 UTC) |
| result.data[].expiresAt | 필수 | string | 세션 만료 시간 (ISO8601 UTC) |
| result.data[].lastActivity | 필수 | string | 마지막 활동 시간 (ISO8601 UTC) |
| result.data[].status | 필수 | string |  |
| result.data[].clientIp | 선택 | string 또는 null |  |
| result.data[].userAgent | 선택 | string 또는 null |  |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


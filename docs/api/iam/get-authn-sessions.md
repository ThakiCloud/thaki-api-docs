# List Active Sessions

활성 세션 목록 조회 (PG 기반 검색·필터·정렬·페이지네이션)

- 검색 필터: Started/LastAccess 기간, IP Address, Device, Name(username)
- search 파라미터: 필터 키 미선택 시 username에서 검색
- sort/order: 정렬 지원 (createdAt, expiresAt, lastActivity, clientIp, username, status, userTpn)
- **권한/범위**: 시스템 어드민은 전 조직(orgId 미지정 시 전체). 그 외에는 본인 org의
  admin(authz introspection)만 허용되며 orgId는 본인 org로 강제된다(타 org 지정 시 403).
  일반 멤버는 403 — 본인 세션은 `GET /me/sessions`를 사용한다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/sessions
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sort | 선택 | string 또는 null |  |
| order | 선택 | string 또는 null |  |
| page | 선택 | integer | 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 기본값 10. 범위 1~100 |
| userTpn | 선택 | string 또는 null |  |
| orgId | 선택 | string 또는 null |  |
| username | 선택 | string 또는 null |  |
| status | 선택 | string 또는 null |  |
| clientIp | 선택 | string 또는 null |  |
| device | 선택 | string 또는 null |  |
| search | 선택 | string 또는 null |  |
| createdAtGt | 선택 | string 또는 null |  |
| createdAtGte | 선택 | string 또는 null |  |
| createdAtLt | 선택 | string 또는 null |  |
| createdAtLte | 선택 | string 또는 null |  |
| lastActivityGt | 선택 | string 또는 null |  |
| lastActivityGte | 선택 | string 또는 null |  |
| lastActivityLt | 선택 | string 또는 null |  |
| lastActivityLte | 선택 | string 또는 null |  |
| expiresAtGt | 선택 | string 또는 null |  |
| expiresAtGte | 선택 | string 또는 null |  |
| expiresAtLt | 선택 | string 또는 null |  |
| expiresAtLte | 선택 | string 또는 null |  |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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


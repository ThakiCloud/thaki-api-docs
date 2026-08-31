# 바인딩 생성/삭제 이력 조회

바인딩 생성/삭제 이력을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/bindings/audit
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| policy_id | 선택 | string 또는 null | 정책 ID 필터 |
| target_id | 선택 | string 또는 null | 대상 ID 필터 |
| actor_tpn | 선택 | string 또는 null | 행위자 TPN 필터 |
| action | 선택 | string 또는 null | 액션 필터 (create, delete) |
| from_date | 선택 | string 또는 null | 시작 날짜 필터 (ISO 8601) |
| to_date | 선택 | string 또는 null | 종료 날짜 필터 (ISO 8601) |
| limit | 선택 | integer 또는 null | 최대 개수. 범위 1~1000 |
| offset | 선택 | integer 또는 null | 오프셋. 범위 0~ |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |
| 500 Internal Server Error | Internal Server Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].id | 필수 | string | 감사 로그 ID (UUID) |
| result.data[].bindingId | 선택 | string 또는 null | 바인딩 ID (UUID) |
| result.data[].policyId | 필수 | string | 정책 ID |
| result.data[].targetType | 필수 | string | 대상 타입 |
| result.data[].targetId | 필수 | string | 대상 ID |
| result.data[].action | 필수 | string | 액션 (create, delete) |
| result.data[].actorTpn | 필수 | string | 행위자 TPN |
| result.data[].actorSessionId | 선택 | string 또는 null | 행위자 세션 ID |
| result.data[].requestId | 선택 | string 또는 null | 요청 ID |
| result.data[].status | 필수 | string | 상태 (success, failed) |
| result.data[].errorMessage | 선택 | string 또는 null | 에러 메시지 |
| result.data[].createdAt | 필수 | string | 생성 시각 (ISO 8601) |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


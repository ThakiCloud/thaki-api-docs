# PDP 평가 감사 로그 조회

관리자 전용: 모든 PDP 평가 및 시뮬레이션 감사 로그를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/audit-logs/evaluations
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호. 페이지 번호. 기본값 1. 범위 1~ |
| pageSize | 선택 | integer | 페이지 크기 (최대 500). 페이지 크기 (최대 500). 기본값 20. 범위 1~500 |
| sort | 선택 | string 또는 null | 정렬 필드. 정렬 필드 |
| order | 선택 | string 또는 null | 정렬 방향 (asc \| desc). 정렬 방향 (asc \| desc) |
| timeGte | 선택 | string (date-time) | 조회 시작 시간 이상 (ISO8601). 조회 시작 시간 이상 (ISO8601) |
| timeLte | 선택 | string (date-time) | 조회 종료 시간 이하 (ISO8601). 조회 종료 시간 이하 (ISO8601) |
| eventType | 선택 | array (string) | 이벤트 타입 (pdp_evaluation, policy_simulation 등, 다중값 OR). 이벤트 타입 (pdp_evaluation, policy_simulation 등, 다중값 OR) |
| auditId | 선택 | string 또는 null | 감사 로그 ID (부분 매칭). 감사 로그 ID (부분 매칭) |
| principalTpn | 선택 | string 또는 null | Principal TPN (부분 매칭). Principal TPN (부분 매칭) |
| resourceTrn | 선택 | string 또는 null | Resource TRN (부분 매칭). Resource TRN (부분 매칭) |
| ipAddress | 선택 | string 또는 null | IP 주소 (부분 매칭). IP 주소 (부분 매칭) |
| action | 선택 | string 또는 null | Action (부분 매칭). Action (부분 매칭) |
| decision | 선택 | string 또는 null | 결정 결과 (Allow/Deny). 결정 결과 (Allow/Deny) |
| orgId | 선택 | string 또는 null | 조직 ID. 조직 ID |
| projectId | 선택 | string 또는 null | 프로젝트 ID. 프로젝트 ID |

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
| result.data[].auditId | 필수 | string | 감사 로그 ID |
| result.data[].eventType | 필수 | string | 이벤트 타입 |
| result.data[].timestamp | 필수 | string | 타임스탬프 |
| result.data[].requestId | 선택 | string 또는 null | 요청 ID |
| result.data[].principal | 필수 | object | Principal 정보 |
| result.data[].principal.tpn | 필수 | string | Principal TPN |
| result.data[].principal.sessionId | 선택 | string 또는 null | 세션 ID |
| result.data[].principal.ipAddress | 선택 | string 또는 null | IP 주소 |
| result.data[].request | 필수 | object | 요청 정보 |
| result.data[].request.action | 필수 | string | 액션 |
| result.data[].request.resourceTrn | 필수 | string | 리소스 TRN |
| result.data[].request.context | 선택 | object 또는 null | 컨텍스트 |
| result.data[].decision | 필수 | string | 결정 결과 (Allow/Deny) |
| result.data[].executionTimeMs | 선택 | integer 또는 null | 실행 시간 (밀리초) |
| result.data[].evaluatedPolicies | 선택 | array (string) | 평가된 정책 ID 목록. 기본값 [] |
| result.data[].metadata | 필수 | object | 메타데이터 (org_id, project_id 등) |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


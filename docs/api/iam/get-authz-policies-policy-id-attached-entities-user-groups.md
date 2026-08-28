# 정책이 연결된 사용자 그룹 목록 조회

정책이 연결된 사용자 그룹 목록을 조회합니다. 직접 바인딩된 그룹과 바인딩된 Role을 보유한 그룹을 포함합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/policies/{policy_id}/attached-entities/user-groups
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| policy_id | path | 필수 | string |  |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0: 전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 10. 범위 1~100 |
| name | 선택 | string 또는 null | 그룹명 부분 일치 필터 |
| id | 선택 | string 또는 null | 그룹 ID 부분 일치 필터 |
| memberCountGte | 선택 | integer 또는 null | 멤버 수 최소값 (포함) |
| memberCountLte | 선택 | integer 또는 null | 멤버 수 최대값 (포함) |
| createdAtGte | 선택 | string 또는 null | 생성일 시작 (ISO8601, 포함) |
| createdAtLte | 선택 | string 또는 null | 생성일 종료 (ISO8601, 포함) |

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
| result.data[].groupId | 필수 | string | 그룹 ID |
| result.data[].tpn | 선택 | string 또는 null | 그룹 TPN |
| result.data[].name | 선택 | string 또는 null | 그룹 표시명 |
| result.data[].description | 선택 | string 또는 null | 설명 |
| result.data[].status | 선택 | string 또는 null | 상태 |
| result.data[].memberCount | 선택 | integer 또는 null | 소속 사용자 수 |
| result.data[].attachment | 필수 | string | 연결 경로 (Direct \| Role:{name}) |
| result.data[].bindingId | 선택 | string 또는 null | 바인딩 ID (직접 그룹 바인딩만, Role 경유는 null). Detach에 사용 |
| result.data[].createdAt | 선택 | string 또는 null | 그룹 생성일 (ISO 8601) |
| result.data[].attachedAt | 선택 | string 또는 null | 바인딩 생성 시각 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


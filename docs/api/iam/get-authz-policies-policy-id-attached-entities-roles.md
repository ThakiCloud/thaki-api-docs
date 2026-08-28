# 정책이 바인딩된 Role 목록 조회

정책에 바인딩된 Role 목록을 조회합니다 (활성 부여 수 포함).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/policies/{policy_id}/attached-entities/roles
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| policy_id | path | 필수 | string |  |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0: 전체). 페이지 번호 (0: 전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 10. 범위 1~100 |
| name | 선택 | string 또는 null | Role 이름 부분 일치 필터. Role 이름 부분 일치 필터 |
| id | 선택 | string 또는 null | Role ID 부분 일치 필터. Role ID 부분 일치 필터 |
| description | 선택 | string 또는 null | 설명 부분 일치 필터. 설명 부분 일치 필터 |
| activeGrantsGte | 선택 | integer 또는 null | 활성 부여 수 최소값 (포함). 활성 부여 수 최소값 (포함) |
| activeGrantsLte | 선택 | integer 또는 null | 활성 부여 수 최대값 (포함). 활성 부여 수 최대값 (포함) |
| createdAtGte | 선택 | string 또는 null | 생성일 시작 (ISO8601, 포함). 생성일 시작 (ISO8601, 포함) |
| createdAtLte | 선택 | string 또는 null | 생성일 종료 (ISO8601, 포함). 생성일 종료 (ISO8601, 포함) |

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
| result.data[].bindingId | 필수 | string | 바인딩 ID |
| result.data[].roleId | 필수 | string | Role ID |
| result.data[].name | 필수 | string | Role 이름 |
| result.data[].description | 선택 | string 또는 null | 설명 |
| result.data[].type | 선택 | string 또는 null | Role 타입 |
| result.data[].activeGrants | 선택 | integer | 활성 부여(할당) 수. 기본값 0 |
| result.data[].createdAt | 선택 | string 또는 null | Role 생성일 |
| result.data[].attachedAt | 선택 | string 또는 null | 바인딩 생성 시각 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


# 대상별 바인딩 목록 조회

특정 대상에 연결된 모든 정책을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/bindings/by-target
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| target_type | 필수 | string | 대상 타입 (tpn, org, project). 대상 타입 (tpn, org, project) |
| target_id | 필수 | string | 대상 ID. 대상 ID |
| policy_kind | 선택 | string 또는 null | 정책 종류 필터. 정책 종류 필터 |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 400 Bad Request | Bad Request |
| 422 Unprocessable Entity | Validation Error |
| 500 Internal Server Error | Internal Server Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].bindingId | 필수 | string | 바인딩 ID (UUID) |
| result.data[].policyId | 필수 | string | 정책 ID |
| result.data[].policyName | 선택 | string 또는 null | 정책명 |
| result.data[].policyKind | 필수 | string | 정책 종류 |
| result.data[].targetType | 필수 | string | 대상 타입 |
| result.data[].targetId | 필수 | string | 대상 ID |
| result.data[].targetName | 선택 | string 또는 null | 대상명 (역할명, TPN 등) |
| result.data[].createdAt | 필수 | string | 생성 시각 (ISO 8601) |
| result.data[].createdBy | 필수 | string | 생성자 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


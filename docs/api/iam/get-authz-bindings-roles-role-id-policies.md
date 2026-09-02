# 역할에 연결된 정책 목록을 상세 정보와 함께 조회

Role에 연결된 정책 목록을 상세 정보와 함께 조회합니다.

**응답 필드 설명:**
- `policyName`: 정책 이름
- `policyType`: 정책 타입 (built-in, custom)
- `apps`: 정책에 포함된 앱 목록
- `roles`: 정책에 연결된 Role 목록
- `actions`: 정책에 포함된 Action 목록

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/bindings/roles/{role_id}/policies
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| role_id | path | 필수 | string |  |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| policyKind | 선택 | string 또는 null | 정책 종류 필터 (identity, resource, permission_boundary 등) |
| page | 선택 | integer | 페이지 번호 (0: 전체 데이터, 기본값: 1). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string 또는 null | 정렬 필드 |
| order | 선택 | string 또는 null | 정렬 방향 (asc \| desc) |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Role에 매핑된 정책 목록 |
| 422 Unprocessable Entity | Validation Error |
| 500 Internal Server Error | Internal Server Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | array (object) | 결과 데이터 |
| result[].bindingId | 필수 | string | 바인딩 ID (바인딩 삭제 시 사용) |
| result[].policyId | 필수 | string | 정책 ID |
| result[].policyName | 필수 | string | 정책 이름 |
| result[].policyType | 필수 | string | 정책 타입 (built-in, custom) |
| result[].policyKind | 필수 | string | 정책 종류 (identity, resource 등) |
| result[].description | 선택 | string 또는 null | 정책 설명 |
| result[].apps | 선택 | array (string) | 정책에 포함된 앱 목록 (예: Compute, Network) |
| result[].roles | 선택 | array (object) | 정책에 연결된 Role 목록 |
| result[].roles[].roleId | 필수 | string | Role ID |
| result[].roles[].roleName | 필수 | string | Role 이름 |
| result[].actions | 선택 | array (string) | 정책에 포함된 Action 목록 |
| result[].resources | 선택 | array (string) | 정책에 포함된 리소스 목록 (예: `trn:*:*::storage/*`) |
| result[].actionCategories | 선택 | array (string) | 액션 카테고리 목록 (예: Storage, Compute.Vm) |
| result[].permissions | 선택 | array (object) | 권한 목록 (UI 확장 행 표시용: App/Partition/Resource/ActionClass) |
| result[].permissions[].app | 필수 | string | App 이름 (예: Compute, Storage) |
| result[].permissions[].partition | 선택 | string 또는 null | 파티션 (예: tenantA, *all) |
| result[].permissions[].resource | 필수 | string | 리소스 (예: vm/*, volume/*) |
| result[].permissions[].actionClass | 선택 | array (string) | Action 클래스 목록 (예: [Read, List, Write]) |
| result[].permissions[].actions | 선택 | array (string) | 상세 Action ID 목록 (예: [thaki:Compute.ReadVm]) |
| result[].updatedAt | 필수 | string | 수정 시각 (ISO 8601) |
| result[].createdAt | 필수 | string | 생성 시각 (ISO 8601) |


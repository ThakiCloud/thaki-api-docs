# 묶음(Group) Action 생성 (Admin)

한 번의 요청으로 묶음 action(actions 행) + 대표식(api_mapping type=group) 행을 생성합니다.

**검증 규칙:**
- `apiMethod` 필수 (method-무관 묶음 금지 — Read/Write trust 분리 불가)
- `pathPattern`은 `*`, `**`, `{param}` 중 하나 이상 포함 (순수 리터럴 금지)
- `actionClass`는 Read, List, Write, Delete, Admin 중 하나
- 동일 `(orgId, apiMethod, pathPattern)` 묶음 중복 불가
- trust_status 자동 결정: Read/List → active, Write/Delete/Admin → pending (검수 전 fail-close)

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/action-catalog/actions/groups
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| app | 필수 | string | 서비스/도메인 이름 (예: Compute, Storage) |
| category | 필수 | string | 카테고리 (PascalCase). 길이 0~100 |
| alias | 필수 | string | PascalCase 별칭. 길이 0~150 |
| actionClass | 필수 | string | Action Class (Read, List, Write, Delete, Admin) |
| apiMethod | 필수 | string | HTTP 메서드 (GET, POST, PUT, PATCH, DELETE) |
| pathPattern | 필수 | string | 묶음 대표식 (와일드카드 포함 필수: *, **, {param}). 길이 0~500 |
| orgId | 선택 | string 또는 null | 대상 Org ID (미지정 시 null=전역 묶음) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| actionId | 필수 | string | 생성된 묶음 action ID |
| app | 필수 | string | 서비스/도메인 이름 |
| category | 필수 | string | 카테고리 (PascalCase) |
| alias | 필수 | string | 별칭 (PascalCase) |
| actionClass | 필수 | string | Action Class |
| trustStatus | 필수 | string | 신뢰 상태 (active=즉시 활성 / pending=검수 필요) |
| apiMethod | 필수 | string | HTTP 메서드 |
| pathPattern | 필수 | string | 묶음 대표식 |
| matchType | 필수 | string | 매칭 타입 (glob/template) |
| orgId | 선택 | string 또는 null | Org ID (null=전역) |


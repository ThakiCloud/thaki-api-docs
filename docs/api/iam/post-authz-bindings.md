# 바인딩 생성

정책을 대상(TPN, Org, Project)에 연결합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/bindings
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| policyId | 필수 | string | 정책 ID |
| targetType | 필수 | string | 대상 타입 (tpn, org, project) |
| targetId | 필수 | string | 대상 ID |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 400 Bad Request | Bad Request |
| 404 Not Found | Not Found |
| 409 Conflict | Conflict |
| 422 Unprocessable Entity | Validation Error |
| 500 Internal Server Error | Internal Server Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| bindingId | 필수 | string | 바인딩 ID (UUID) |
| policyId | 필수 | string | 정책 ID |
| policyName | 선택 | string 또는 null | 정책명 |
| policyKind | 필수 | string | 정책 종류 |
| targetType | 필수 | string | 대상 타입 |
| targetId | 필수 | string | 대상 ID |
| targetName | 선택 | string 또는 null | 대상명 (역할명, TPN 등) |
| createdAt | 필수 | string | 생성 시각 (ISO 8601) |
| createdBy | 필수 | string | 생성자 |


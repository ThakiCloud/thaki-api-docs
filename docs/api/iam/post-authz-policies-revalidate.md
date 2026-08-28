# Revalidate Policies Sync

정책 동기 재검증 (즉시 실행).

조직 또는 프로젝트의 모든 활성 정책을 재검증합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/policies/revalidate
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| scope | 필수 | string | 재검증 범위 (org, project) |
| orgId | 필수 | string | 조직 ID |
| projectId | 선택 | string 또는 null | 프로젝트 ID (project scope인 경우) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


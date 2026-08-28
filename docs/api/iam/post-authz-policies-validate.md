# Validate Policy Dry Run

정책 Dry-run 검증 (저장하지 않음).

검증 성공/실패 모두 200 OK 반환.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/policies/validate
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| policy | 필수 | object | 검증할 정책 문서 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


# 정책 동기화 요약(outdated 개수/ID)

템플릿 대비 outdated 정책의 개수와 ID 목록을 반환합니다 (IAM05).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/policies/sync-summary
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| type | 선택 | string | 정책 타입 필터 (기본 built-in). 정책 타입 필터 (기본 built-in). 기본값 "built-in" |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


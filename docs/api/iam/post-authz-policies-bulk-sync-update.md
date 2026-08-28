# 정책 일괄 동기화 (템플릿 기준 document 교체)

지정한 정책들을 origin 템플릿 기준으로 일괄 동기화합니다. document만 교체하며 type/admin_level은 불변입니다 (IAM05, ADR 0009).

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/policies/bulk-sync-update
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| policyIds | 필수 | array (string) | 동기화 대상 정책 ID 목록 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


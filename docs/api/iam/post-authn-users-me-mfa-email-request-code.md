# 이메일 코드 요청 (Deprecated)

이 API는 더 이상 사용되지 않습니다. Pre-Auth 플로우를 사용하세요.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/users/me/mfa/email/request-code
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 410 | Successful Response |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


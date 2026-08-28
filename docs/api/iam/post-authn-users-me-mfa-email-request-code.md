# 이메일 코드 요청 (Deprecated)

이 API는 더 이상 사용되지 않습니다. Pre-Auth 플로우를 사용하세요.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/users/me/mfa/email/request-code
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 410 | Successful Response |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


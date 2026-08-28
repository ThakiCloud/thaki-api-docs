# 임시 역할 부여 회수

즉시 효력을 중단합니다. 회수 이후 발급되는 세션부터 권한이 빠집니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/temporary-grants/{grant_id}/revoke
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| grant_id | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| revokeReason | 선택 | string 또는 null | 회수 사유(권장) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


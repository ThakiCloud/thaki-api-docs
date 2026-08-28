# Delete Api Key

API Key 삭제

API Key를 소프트 삭제합니다.
삭제된 키는 복구할 수 없으며, 해당 키를 사용한 인증은 즉시 실패합니다.

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/iam/authn/service-accounts/{sa_id}/keys/{key_id}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| sa_id | path | 필수 | string |  |
| key_id | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 204 No Content | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


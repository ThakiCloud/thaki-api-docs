# Delete Service Account

서비스 어카운트 삭제 (논리적 삭제)

서비스 어카운트를 삭제합니다 (실제로는 비활성화).
IAM 시스템에서는 감사 추적을 위해 물리적 삭제 대신 논리적 삭제를 수행합니다.

삭제 시:
- 모든 활성 API Key의 Redis 캐시가 삭제되고 STS 토큰이 revoke됩니다
- 해당 SA로 새로운 API Key를 발급할 수 없습니다
- 다시 활성화하려면 :enable 엔드포인트를 사용하세요

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/iam/authn/service-accounts/{sa_id}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| sa_id | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 204 No Content | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


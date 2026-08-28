# 서비스 계정 일괄 삭제

체크박스 액션용 SA 다건 논리 삭제. 각 SA 소유권을 검증하고 개별 처리합니다.

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/iam/authn/service-accounts
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sa_ids | 필수 | array (string) |  |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


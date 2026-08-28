# 정책 sync-diff (템플릿 대비 Field diff)

정책의 현재 active document와 origin 템플릿 document를 Field 단위로 비교한 결과를 반환합니다 (IAM05 Review changes 드로어용).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/policies/{policy_id}/sync-diff
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| policy_id | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


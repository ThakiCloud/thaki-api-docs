# Category 목록 조회 (DISTINCT)

특정 App에 등록된 고유 Category 목록과 각 Category의 Action 개수를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/action-catalog/actions/apps/{app}/categories
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| app | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


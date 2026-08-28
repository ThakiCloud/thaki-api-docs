# 서비스 계정 목록 Export (CSV)

필터 조건에 맞는 SA 목록을 CSV 형식으로 반환합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/service-accounts/export
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| org_id | 선택 | string 또는 null |  |
| project_id | 선택 | string 또는 null |  |
| status_filter | 선택 | string 또는 null |  |
| owner | 선택 | string 또는 null |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


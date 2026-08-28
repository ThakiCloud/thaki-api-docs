# TPN의 모든 Role Assignment 삭제

TPN에 할당된 모든 Role을 일괄 해제합니다. 사용자/그룹 삭제 시 호출됩니다.

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/iam/authz/tpns/assignments
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| tpn | 필수 | string | 삭제할 대상 TPN. 삭제할 대상 TPN |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


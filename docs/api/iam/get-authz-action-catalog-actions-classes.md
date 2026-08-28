# Action Class 집계 조회 (IAM05 아코디언)

Action Class(Read/List/Write/Delete/Admin)별 Action 개수를 집계합니다. app 쿼리로 특정 App에 한정할 수 있습니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/action-catalog/actions/classes
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| app | 선택 | string 또는 null | App 필터 (대소문자 무관). 미지정 시 전체.. App 필터 (대소문자 무관). 미지정 시 전체. |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


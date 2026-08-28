# 정책 복제

기존 정책을 복제하여 새로운 정책을 생성합니다. 모든 권한(Statement)이 복사됩니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/policies/{policy_id}:duplicate
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| policy_id | path | 필수 | string |  |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| newName | 선택 | string 또는 null | 새 정책 이름 (미지정 시 'Copy of {원본이름}'). 새 정책 이름 (미지정 시 'Copy of {원본이름}') |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


# Role 생성

새로운 Role을 생성합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/roles
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 필수 | string | Role 이름 (영문/숫자 및 +=,@-_ 기호만 허용). 길이 1~128 |
| description | 선택 | string 또는 null | Role 설명 (영문/숫자 및 +=,@-_()[] 기호와 공백만 허용). 길이 0~500 |
| orgId | 선택 | string | 조직 ID (생략 시 '*' = 플랫폼 전역). 기본값 "*". 길이 0~64 |
| projectId | 선택 | string 또는 null | 프로젝트 ID (선택). 길이 0~64 |
| policyIds | 선택 | array (string) | 바인딩할 정책 ID 목록 (선택, 최대 100개) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


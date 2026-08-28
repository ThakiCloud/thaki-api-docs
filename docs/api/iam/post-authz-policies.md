# 정책 생성

1~N개 정책을 생성합니다. 하나라도 실패 시 전체 롤백됩니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/policies
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| policies | 필수 | array (object) | 정책 목록 (1~100개) |
| policies[].name | 필수 | string | 정책 이름. 길이 1~ |
| policies[].description | 선택 | string 또는 null | 정책 설명 |
| policies[].kind | 필수 | string | 정책 종류 (identity, permission_boundary, scp, trust, resource, session) |
| policies[].scope | 필수 | string | 스코프 (org, project) |
| policies[].orgId | 선택 | string | 조직 ID (생략 시 '*' = 플랫폼 전역). 기본값 "*" |
| policies[].projectId | 선택 | string 또는 null | 프로젝트 ID (project scope인 경우) |
| policies[].policy | 필수 | object | 정책 문서 (Version, Statement) |
| policies[].tags | 선택 | object 또는 null | 정책 태그 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


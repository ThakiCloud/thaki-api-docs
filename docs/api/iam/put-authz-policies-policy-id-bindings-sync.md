# 정책에 대한 role 바인딩 동기화

정책에 연결된 role 목록을 동기화합니다.
- 기존 바인딩 중 요청에 없는 role은 삭제
- 요청에 있지만 기존에 없는 role은 생성
- 이미 존재하는 것은 skip
- 트랜잭션으로 처리: 전체 성공 또는 전체 실패

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authz/policies/{policy_id}/bindings/sync
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| policy_id | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| orgId | 선택 | string | 조직 ID (생략 시 '*' = 플랫폼 전역). 기본값 "*" |
| roleIds | 필수 | array (string) | 동기화할 role ID 목록 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 400 Bad Request | Bad Request |
| 404 Not Found | Not Found |
| 422 Unprocessable Entity | Validation Error |
| 500 Internal Server Error | Internal Server Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


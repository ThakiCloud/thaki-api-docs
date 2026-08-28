# 임시 역할 부여 연장

종료 시각만 변경합니다. 총 유효기간은 최대 12시간을 넘을 수 없습니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/temporary-grants/{grant_id}/extend
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| grant_id | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| newExpiresAt | 필수 | string (date-time) | 새 종료 시각(현재 종료시각보다 이후) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


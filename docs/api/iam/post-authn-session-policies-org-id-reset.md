# 세션 정책 초기화

조직의 세션 정책을 삭제하여 기본값으로 초기화합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/session-policies/{org_id}/reset
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| org_id | path | 필수 | string | 조직 ID. 조직 ID |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.orgId | 필수 | string |  |
| result.sessionIdleTimeoutMinutes | 필수 | integer |  |
| result.sessionMaxLifespanHours | 필수 | integer |  |
| result.loginTimeoutMinutes | 필수 | integer |  |
| result.loginActionTimeoutMinutes | 필수 | integer |  |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |
| result.updatedBy | 선택 | string 또는 null |  |


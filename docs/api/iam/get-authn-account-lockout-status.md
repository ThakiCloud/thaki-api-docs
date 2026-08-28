# 계정 잠금 상태 조회

특정 사용자의 로그인 실패 횟수 및 잠금 상태를 조회합니다 (임시/영구 모두).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/account-lockout/status
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| username | 필수 | string | 사용자명 또는 이메일. 사용자명 또는 이메일. 길이 1~255 |
| orgId | 필수 | string | 조직 ID. 조직 ID. 길이 1~64 |

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
| result.username | 필수 | string | 사용자명 또는 이메일 |
| result.orgId | 필수 | string | 조직 ID |
| result.failedCount | 필수 | integer | 현재 로그인 실패 횟수 (Redis) |
| result.isLocked | 필수 | boolean | 잠금 상태 여부 (failed_count &gt;= max_failures) |
| result.remainingAttempts | 필수 | integer | 남은 시도 횟수 (0 이하면 잠금) |
| result.ttlSeconds | 필수 | integer | 실패 카운터 만료까지 남은 시간 (초), -2면 카운터 없음 |
| result.permanentLocked | 선택 | boolean | 계정 비활성화 여부 (User.status='disabled') - 로그인 실패로 인한 잠금 시 true. 기본값 false |
| result.recentLockoutCount | 선택 | integer 또는 null | 최근 잠금 횟수 (이력 조회용) |


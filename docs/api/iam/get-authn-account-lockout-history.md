# 계정 잠금 이력 조회

특정 사용자의 계정 잠금 이력을 조회합니다 (임시/영구 모두).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/account-lockout/history
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| username | 필수 | string | 사용자명 또는 이메일. 사용자명 또는 이메일. 길이 1~255 |
| orgId | 필수 | string | 조직 ID. 조직 ID. 길이 1~64 |
| includeInactive | 선택 | boolean | 비활성화된 이력 포함 여부. 비활성화된 이력 포함 여부. 기본값 false |
| limit | 선택 | integer | 조회할 최대 이력 개수. 조회할 최대 이력 개수. 기본값 10. 범위 1~100 |

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
| result.userTpn | 필수 | string | 사용자 TPN |
| result.total | 필수 | integer | 전체 이력 개수 |
| result.history | 필수 | array (object) | 잠금 이력 목록 |
| result.history[].historyId | 필수 | string | 이력 ID |
| result.history[].userTpn | 필수 | string | 사용자 TPN |
| result.history[].orgId | 필수 | string | 조직 ID |
| result.history[].lockoutType | 필수 | string | 잠금 유형 (login_failure: 로그인 실패, permanent: 관리자 수동) |
| result.history[].lockedAt | 필수 | string | 잠금 발생 시각 (ISO 8601) |
| result.history[].unlockedAt | 선택 | string 또는 null | 잠금 해제 시각 (ISO 8601) |
| result.history[].failedCount | 필수 | integer | 잠금 시점의 실패 횟수 |
| result.history[].reason | 선택 | string 또는 null | 잠금 사유 |
| result.history[].lockedBy | 선택 | string 또는 null | 잠금 수행자 TPN (수동 잠금 시) |
| result.history[].unlockedBy | 선택 | string 또는 null | 잠금 해제자 TPN |
| result.history[].isActive | 필수 | boolean | 이력 활성화 여부 |


# 계정 잠금 정책 초기화

조직의 계정 잠금 정책을 삭제하여 Global Settings 기본값으로 초기화합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/account-lockout-policy/reset
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
| result.policyId | 필수 | string | 정책 ID |
| result.orgId | 필수 | string | 조직 ID |
| result.enabled | 필수 | boolean | 정책 활성화 여부 |
| result.lockoutType | 필수 | string | 잠금 유형 (temporary \| permanent) |
| result.maxFailures | 필수 | integer | 최대 실패 횟수. 범위 1~100 |
| result.strategy | 필수 | string | 대기 시간 증가 전략 (linear \| multiple) |
| result.waitIncrementMinutes | 필수 | integer | 실패마다 증가할 시간 (분) |
| result.maxWaitMinutes | 필수 | integer | 최대 대기 시간 (분) |
| result.failureResetHours | 필수 | integer | 실패 카운트 리셋 시간 (시간) |
| result.lookbackDays | 선택 | integer 또는 null | 최근 N일 이내 임시 잠금 추적 기간 (NULL이면 비활성화) |
| result.maxTemporaryLockouts | 선택 | integer 또는 null | 해당 기간 내 임시 잠금 최대 횟수 |
| result.updatedBy | 선택 | string 또는 null | 최종 수정자 TPN |


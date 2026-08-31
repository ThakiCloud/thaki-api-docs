# 조직의 계정 잠금 정책을 생성하거나 업데이트

조직의 계정 잠금 정책을 생성하거나 업데이트합니다.

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/account-lockout-policy
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| org_id | path | 필수 | string | 조직 ID |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| enabled | 선택 | boolean | 정책 활성화 여부. 기본값 true |
| lockoutType | 선택 | string | 잠금 유형 (temporary \| permanent). 기본값 "temporary" |
| maxFailures | 선택 | integer | 최대 실패 횟수 (1-100). 기본값 5. 범위 1~100 |
| strategy | 선택 | string | 대기 시간 증가 전략 (linear \| multiple). 기본값 "linear" |
| waitIncrementMinutes | 선택 | integer | 실패마다 증가할 대기 시간 (분). 기본값 10 |
| maxWaitMinutes | 선택 | integer | 최대 대기 시간 (분). 기본값 60 |
| failureResetHours | 선택 | integer | 실패 카운트 자동 리셋 시간 (시간). 기본값 12 |
| lookbackDays | 선택 | integer 또는 null | 최근 N일 이내 임시 잠금 추적 기간 (1-365, NULL이면 비활성화). 범위 1~365 |
| maxTemporaryLockouts | 선택 | integer 또는 null | 해당 기간 내 임시 잠금 최대 횟수 (1-10, 초과 시 영구 잠금). 범위 1~10 |
| resetHistory | 선택 | boolean | 기존 잠금 이력 리셋 여부 (정책 변경 시). 기본값 false |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

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


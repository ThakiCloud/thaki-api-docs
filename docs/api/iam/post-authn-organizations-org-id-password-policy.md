# 조직별 비밀번호 정책 생성

조직별 비밀번호 정책을 생성합니다. 이미 정책이 존재하면 400 오류를 반환합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/password-policy
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
| minLength | 선택 | integer | 최소 길이. 기본값 8. 범위 6~128 |
| maxLength | 선택 | integer | 최대 길이. 기본값 64. 범위 6~128 |
| requireUppercase | 선택 | boolean | 대문자 필수 여부. 기본값 false |
| requireLowercase | 선택 | boolean | 소문자 필수 여부. 기본값 false |
| requireDigit | 선택 | boolean | 숫자 필수 여부. 기본값 false |
| requireSpecial | 선택 | boolean | 특수문자 필수 여부. 기본값 false |
| passwordHistoryCount | 선택 | integer | 비밀번호 재사용 방지 개수 (0=비활성화). 기본값 0. 범위 0~24 |
| expiryDays | 선택 | integer | 비밀번호 만료 기간 (일, 0=비활성화). 기본값 30. 범위 0~1095 |
| minAgeDays | 선택 | integer | 비밀번호 최소 사용 기간 (일, 0=비활성화). 기본값 0. 범위 0~1095 |
| excludeUsername | 선택 | boolean | 비밀번호에 사용자명 포함 금지. 기본값 false |
| excludeEmail | 선택 | boolean | 비밀번호에 이메일 포함 금지. 기본값 false |
| passwordHistoryPeriodDays | 선택 | integer | 최근 N일간 비밀번호 재사용 방지 (0=비활성화). 기본값 0. 범위 0~365 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.policyId | 필수 | string | 정책 ID |
| result.orgId | 필수 | string | 조직 ID |
| result.minLength | 필수 | integer | 최소 길이. 범위 6~128 |
| result.maxLength | 필수 | integer | 최대 길이. 범위 6~128 |
| result.requireUppercase | 필수 | boolean | 대문자 필수 여부 |
| result.requireLowercase | 필수 | boolean | 소문자 필수 여부 |
| result.requireDigit | 필수 | boolean | 숫자 필수 여부 |
| result.requireSpecial | 필수 | boolean | 특수문자 필수 여부 |
| result.passwordHistoryCount | 필수 | integer | 비밀번호 재사용 방지 개수. 범위 0~24 |
| result.expiryDays | 필수 | integer | 비밀번호 만료 기간 (일). 범위 0~1095 |
| result.minAgeDays | 필수 | integer | 비밀번호 최소 사용 기간 (일). 범위 0~1095 |
| result.excludeUsername | 필수 | boolean | 비밀번호에 사용자명 포함 금지 |
| result.excludeEmail | 필수 | boolean | 비밀번호에 이메일 포함 금지 |
| result.passwordHistoryPeriodDays | 필수 | integer | 최근 N일간 비밀번호 재사용 방지 (0=비활성화). 범위 0~ |
| result.createdAt | 필수 | string (date-time) | 생성 일시 |
| result.updatedAt | 필수 | string (date-time) | 최종 수정 일시 |
| result.updatedBy | 선택 | string 또는 null | 최종 수정자 TPN |


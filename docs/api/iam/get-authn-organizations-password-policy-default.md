# Global Settings 기반 비밀번호 정책 기본값을 반환

Global Settings 기반 비밀번호 정책 기본값을 반환합니다. 아직 생성되지 않은 도메인의 정책 미리보기 등에 사용합니다. 특정 org에 종속되지 않으며, 인증만 필요합니다(authz 정책 평가 없음).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/organizations/password-policy/default
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

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


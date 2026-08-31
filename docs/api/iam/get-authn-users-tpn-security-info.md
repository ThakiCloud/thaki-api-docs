# 사용자의 보안 관련 정보 조회

사용자의 보안 관련 정보를 조회합니다. (비밀번호 마지막 변경 시간, MFA 사용 정보 등)

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/users/{tpn}/security-info
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| tpn | path | 필수 | string | 사용자 TPN. 길이 1~ |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.password | 필수 | object | 비밀번호 정보 |
| result.password.lastChangedAt | 선택 | string 또는 null | 마지막 변경 시간 (ISO8601 UTC) |
| result.password.changedBy | 선택 | string 또는 null | 변경한 사용자 TPN (본인 또는 관리자) |
| result.password.changeType | 선택 | string 또는 null | 변경 유형 (user, admin, system, locked, reset, expired) |
| result.mfa | 필수 | object | MFA 정보 |
| result.mfa.totpCreatedAt | 선택 | string 또는 null | TOTP 설정 생성 시간 (ISO8601 UTC) |
| result.mfa.totpLastUsedAt | 선택 | string 또는 null | TOTP 마지막 사용 시간 (ISO8601 UTC) |


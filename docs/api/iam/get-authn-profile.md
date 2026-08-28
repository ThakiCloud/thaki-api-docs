# 내 프로필 조회

인증된 사용자의 프로필 정보를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/profile
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.tpn | 필수 | string | 사용자 TPN |
| result.username | 필수 | string | 사용자명 |
| result.email | 선택 | string 또는 null | 이메일 주소 |
| result.displayName | 선택 | string 또는 null | 표시 이름 |
| result.domainId | 선택 | string 또는 null | 도메인(조직) ID |
| result.domainName | 선택 | string 또는 null | 도메인(조직) 이름 |
| result.level | 선택 | string 또는 null | 권한 레벨 (systemAdmin \| domainAdmin \| partitionAdmin; 일반 사용자 또는 조회 실패 시 null) |
| result.authentication | 선택 | object | 인증 정보 |
| result.authentication.passwordUpdatedAt | 선택 | string 또는 null | 비밀번호 최근 업데이트 일시 (ISO8601 UTC) |
| result.authentication.passwordChangeType | 선택 | string 또는 null | 비밀번호 변경 유형 (user, admin, system, locked, reset, expired) |
| result.authentication.mfa | 선택 | object | MFA 설정 정보 |
| result.authentication.mfa.enabled | 선택 | boolean | MFA 활성화 여부. 기본값 false |
| result.authentication.mfa.emailEnabled | 선택 | boolean | 이메일 MFA 활성화 여부. 기본값 false |
| result.authentication.mfa.totpEnabled | 선택 | boolean | TOTP MFA 활성화 여부. 기본값 false |
| result.authentication.mfa.totpCreatedAt | 선택 | string 또는 null | TOTP 등록 일시 (ISO8601 UTC); 미등록 시 null |
| result.createdAt | 선택 | string 또는 null | 생성일시 (ISO8601 UTC) |
| result.updatedAt | 선택 | string 또는 null | 정보 업데이트 일시 (ISO8601 UTC) |
| result.lastSignInAt | 선택 | string 또는 null | 마지막 로그인 일시 (ISO8601 UTC) |


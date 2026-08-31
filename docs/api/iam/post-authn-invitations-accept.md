# 초대 수락

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/public/invitations:accept
```

## URI 매개변수

없습니다.

## 요청 헤더

이 API 는 인증 없이 호출합니다. 위 경로의 /public 접두를 그대로 사용하십시오. /public 없이 호출하면 게이트웨이가 자격증명을 요구해 401 을 반환합니다.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| invitationToken | 필수 | string | 초대 토큰 (이메일 링크에서 전달됨). 길이 1~ |
| password | 필수 | string | 설정할 비밀번호. 길이 1~ |

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
| result.tpn | 필수 | string |  |
| result.orgId | 필수 | string |  |
| result.username | 필수 | string |  |
| result.displayName | 필수 | string 또는 null |  |
| result.status | 필수 | string |  |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |
| result.lastSignIn | 선택 | string (date-time) |  |
| result.presence | 선택 | string | 값: online, offline. 기본값 "offline" |
| result.groups | 선택 | array (object) |  |
| result.groups[].groupId | 필수 | string |  |
| result.groups[].groupTpn | 선택 | string 또는 null |  |
| result.groups[].displayName | 선택 | string 또는 null |  |
| result.roles | 선택 | array (object) |  |
| result.roles[].roleId | 필수 | string |  |
| result.roles[].roleName | 선택 | string 또는 null |  |
| result.roles[].assignedAt | 선택 | string 또는 null |  |
| result.emailEncrypted | 선택 | string 또는 null |  |
| result.mfaEnabled | 선택 | boolean | 기본값 false |
| result.mfaEmailEnabled | 선택 | boolean | 기본값 false |
| result.mfaTotpEnabled | 선택 | boolean | 기본값 false |
| result.region | 선택 | string 또는 null |  |
| result.tags | 선택 | object 또는 null |  |
| result.idpKind | 선택 | string 또는 null |  |
| result.idpRealm | 선택 | string 또는 null |  |
| result.forcePasswordChange | 선택 | boolean | 기본값 false |
| result.defaultOrgId | 선택 | string 또는 null |  |


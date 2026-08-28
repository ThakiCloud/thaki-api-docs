# Resend Invitation By User

사용자 TPN 기반 초대 재발송

- 해당 사용자의 pending 초대를 찾아 재발송합니다.
- UserDetailPage에서 invitation_id 없이 resend 가능하도록 지원.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/users/{user_tpn}/resend-invitation
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| user_tpn | path | 필수 | string | 사용자 TPN. 사용자 TPN |

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
| result.invitationId | 필수 | string | 초대 ID |
| result.email | 필수 | string | 마스킹된 이메일 |
| result.orgId | 필수 | string | 조직 ID |
| result.projectId | 선택 | string 또는 null | 프로젝트 ID |
| result.inviterTpn | 필수 | string | 초대자 TPN |
| result.status | 필수 | string | 초대 상태 |
| result.invitedAt | 필수 | string (date-time) | 초대 생성 시간 |
| result.acceptedAt | 선택 | string (date-time) | 초대 수락 시간 |
| result.expiresAt | 필수 | string (date-time) | 초대 만료 시간 |
| result.invitationLink | 선택 | string 또는 null | 초대 링크 |
| result.metadata | 선택 | object 또는 null | 메타데이터 |


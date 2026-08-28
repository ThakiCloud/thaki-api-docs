# Create Invitation

조직에 사용자 초대 생성

- `org_id`에 해당하는 조직에 사용자를 초대합니다.
- 초대 이메일이 발송됩니다.
- **권한**: `iam:organization:invitation:create`

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/invitations
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
| email | 필수 | string | 초대할 사용자 이메일. 길이 1~ |
| username | 필수 | string | 생성될 사용자명 (displayName으로도 사용됨). 길이 3~64 |
| projectId | 선택 | string 또는 null | 프로젝트 ID (선택, 생략 시 조직 레벨 초대) |
| tags | 선택 | object 또는 null | 사용자 태그 (선택) |
| metadata | 선택 | object 또는 null | 추가 메타데이터 (감사 로그용) |

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


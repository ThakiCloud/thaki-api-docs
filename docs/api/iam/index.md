# IAM

API 224개.

## API 키

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/api-keys](/api/iam/get-authn-api-keys) | 인증된 사용자의 API Key 목록 조회 |
| POST | [/api/v1/iam/authn/api-keys](/api/iam/post-authn-api-keys) | 인증된 사용자의 Personal API Key 발급 |
| GET | [/api/v1/iam/authn/api-keys/{key_id}](/api/iam/get-authn-api-keys-key-id) | 특정 API Key의 상세 정보 조회 |
| DELETE | [/api/v1/iam/authn/api-keys/{key_id}](/api/iam/delete-authn-api-keys-key-id) | API Key 폐기 |
| PATCH | [/api/v1/iam/authn/api-keys/{key_id}](/api/iam/patch-authn-api-keys-key-id) | API Key의 이름(설명) 및/또는 활성 상태 수정 |
| POST | [/api/v1/iam/authn/api-keys/{key_id}/deactivate](/api/iam/post-authn-api-keys-key-id-deactivate) | API Key를 비활성화 |
| POST | [/api/v1/iam/authn/api-keys/{key_id}/activate](/api/iam/post-authn-api-keys-key-id-activate) | 비활성화된 API Key를 재활성화 |
| POST | [/api/v1/iam/authn/api-keys/{key_id}/reset](/api/iam/post-authn-api-keys-key-id-reset) | 기존 Key ID를 유지하고 시크릿을 재생성 |
| POST | [/api/v1/iam/authn/api-keys/validate](/api/iam/post-authn-api-keys-validate) | 사용자 또는 SA API Key의 유효성을 검증 |

## MFA 설정

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/users/me/mfa/status](/api/iam/get-authn-users-me-mfa-status) | 사용자 MFA 상태 조회 |
| POST | [/api/v1/iam/authn/users/me/mfa/email/enable](/api/iam/post-authn-users-me-mfa-email-enable) | Email MFA 활성화 |
| POST | [/api/v1/iam/authn/users/me/mfa/email/disable](/api/iam/post-authn-users-me-mfa-email-disable) | Email MFA 비활성화 |
| POST | [/api/v1/iam/authn/users/me/mfa/totp/setup](/api/iam/post-authn-users-me-mfa-totp-setup) | TOTP 설정 시작 (QR 코드 발급) |
| POST | [/api/v1/iam/authn/users/me/mfa/totp/verify-setup](/api/iam/post-authn-users-me-mfa-totp-verify-setup) | TOTP 설정 검증 (최초 등록 시) |
| POST | [/api/v1/iam/authn/users/me/mfa/totp/disable](/api/iam/post-authn-users-me-mfa-totp-disable) | TOTP MFA 비활성화 |
| POST | [/api/v1/iam/authn/users/me/mfa/email/request-code](/api/iam/post-authn-users-me-mfa-email-request-code) | 이 API는 더 이상 사용되지 않습니다 |

## MFA 인증 흐름

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/mfa/code/request](/api/iam/post-authn-mfa-code-request) | MFA 코드 요청 (method 지정 필요) |
| POST | [/api/v1/iam/authn/mfa/code/verify](/api/iam/post-authn-mfa-code-verify) | MFA 코드 검증 |

## 감사 로그

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/audit-logs](/api/iam/get-authn-audit-logs) | 감사 로그 목록을 조회합니다 (관리자 전용) |
| GET | [/api/v1/iam/authn/audit-logs/{event_id}](/api/iam/get-authn-audit-logs-event-id) | 감사 로그 상세 조회 (org admin / 시스템 어드민 전용) |
| GET | [/api/v1/iam/authz/audit-logs/evaluations](/api/iam/get-authz-audit-logs-evaluations) | 관리자 전용: 모든 PDP 평가 및 시뮬레이션 감사 로그 조회 |

## 계정 잠금 관리

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/account-lockout/status](/api/iam/get-authn-account-lockout-status) | 계정 잠금 상태 조회 |
| POST | [/api/v1/iam/authn/account-lockout/lock](/api/iam/post-authn-account-lockout-lock) | 관리자가 특정 사용자 계정을 수동으로 잠급니다 |
| POST | [/api/v1/iam/authn/account-lockout/unlock](/api/iam/post-authn-account-lockout-unlock) | 계정 잠금 해제 |
| DELETE | [/api/v1/iam/authn/account-lockout/reset/{username}](/api/iam/delete-authn-account-lockout-reset-username) | 특정 사용자의 로그인 실패 카운트를 리셋 |
| GET | [/api/v1/iam/authn/account-lockout/history](/api/iam/get-authn-account-lockout-history) | 특정 사용자의 계정 잠금 이력을 조회합니다 (임시/영구 모두) |

## 그룹 동기화

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/sync](/api/iam/post-authn-organizations-org-id-groups-group-id-sync) | 단일 그룹 템플릿 동기화 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/sync](/api/iam/post-authn-organizations-org-id-groups-sync) | 일괄 그룹 템플릿 동기화 |

## 그룹 정책

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/policies](/api/iam/post-authn-organizations-org-id-groups-group-id-policies) | 그룹에 정책 연결 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/policies](/api/iam/get-authn-organizations-org-id-groups-group-id-policies) | 그룹의 정책 바인딩 목록 조회 |
| DELETE | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/policies/{policy_id}](/api/iam/delete-authn-organizations-org-id-groups-group-id-policies-policy-id) | 그룹에서 정책 연결 해제 |

## 그룹

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups](/api/iam/post-authn-organizations-org-id-groups) | 조직 내에 새 그룹 생성 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/groups](/api/iam/get-authn-organizations-org-id-groups) | 조직 내 그룹 목록 조회 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}:duplicate](/api/iam/post-authn-organizations-org-id-groups-group-id-duplicate) | 기존 그룹을 복제하여 새 그룹 생성 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}](/api/iam/get-authn-organizations-org-id-groups-group-id) | 그룹 상세 정보 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}](/api/iam/put-authn-organizations-org-id-groups-group-id) | 그룹 정보 수정 |
| DELETE | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}](/api/iam/delete-authn-organizations-org-id-groups-group-id) | 그룹을 삭제합니다 (Soft Delete) |
| GET | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/members](/api/iam/get-authn-organizations-org-id-groups-group-id-members) | 그룹에 속한 멤버 목록 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/members](/api/iam/put-authn-organizations-org-id-groups-group-id-members) | 그룹의 전체 멤버 목록을 동기화 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/members:batch-add](/api/iam/post-authn-organizations-org-id-groups-group-id-members-batch-add) | 그룹에 멤버를 일괄 추 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/members:batch-remove](/api/iam/post-authn-organizations-org-id-groups-group-id-members-batch-remove) | 그룹에서 멤버를 일괄 제거 |

## 내 보안 정보

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/me/security-info](/api/iam/get-authn-me-security-info) | 내 보안 정보 조회 |

## 내 비밀번호

| 메서드 | 경로 | 설명 |
|---|---|---|
| PUT | [/api/v1/iam/authn/me/password](/api/iam/put-authn-me-password) | 본인의 비밀번호 변경 |
| POST | [/api/v1/iam/authn/me/password/validate](/api/iam/post-authn-me-password-validate) | 비밀번호 변경 전에 조직 정책 위배 여부를 미리 확인 |

## 내 세션

| 메서드 | 경로 | 설명 |
|---|---|---|
| DELETE | [/api/v1/iam/authn/me/sessions](/api/iam/delete-authn-me-sessions) | 본인의 모든 세션을 즉시 종료 |
| GET | [/api/v1/iam/authn/me/sessions](/api/iam/get-authn-me-sessions) | 본인의 활성 세션 목록 조회 |
| DELETE | [/api/v1/iam/authn/me/sessions/{session_id}](/api/iam/delete-authn-me-sessions-session-id) | 본인의 특정 세션을 즉시 종료 |

## 내 액세스 키

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/me/access-keys](/api/iam/post-authn-me-access-keys) | 본인의 Access Key 발급 |
| GET | [/api/v1/iam/authn/me/access-keys](/api/iam/get-authn-me-access-keys) | 본인의 Access Key 목록 조회 |
| GET | [/api/v1/iam/authn/me/access-keys/{key_id}](/api/iam/get-authn-me-access-keys-key-id) | Access Key 상세 조회 |
| DELETE | [/api/v1/iam/authn/me/access-keys/{key_id}](/api/iam/delete-authn-me-access-keys-key-id) | Access Key를 즉시 폐기 |
| PATCH | [/api/v1/iam/authn/me/access-keys/{key_id}](/api/iam/patch-authn-me-access-keys-key-id) | Access Key 이름(Description)/상태 수정 |
| POST | [/api/v1/iam/authn/me/access-keys/{key_id}/deactivate](/api/iam/post-authn-me-access-keys-key-id-deactivate) | Access Key를 비활성화 |
| POST | [/api/v1/iam/authn/me/access-keys/{key_id}/activate](/api/iam/post-authn-me-access-keys-key-id-activate) | 비활성화된 Access Key를 재활성화 |
| POST | [/api/v1/iam/authn/me/access-keys/{key_id}/rotate](/api/iam/post-authn-me-access-keys-key-id-rotate) | 본인 Access Key의 시크릿 재발급 |

## 비밀번호 찾기

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/password/forgot](/api/iam/post-authn-password-forgot) | 비밀번호를 잊어버린 사용자가 이메일로 비밀번호 초기화 링크를 요청 |
| POST | [/api/v1/iam/authn/password/reset/verify](/api/iam/post-authn-password-reset-verify) | 이메일로 받은 비밀번호 초기화 토큰의 유효성을 검증 |
| PUT | [/api/v1/iam/authn/password/reset](/api/iam/put-authn-password-reset) | 비밀번호 초기화 토큰을 사용하여 새 비밀번호를 설정 |

## 사용자 비밀번호

| 메서드 | 경로 | 설명 |
|---|---|---|
| PUT | [/api/v1/iam/authn/users/{user_tpn}/password](/api/iam/put-authn-users-user-tpn-password) | 사용자 비밀번호 변경 |
| POST | [/api/v1/iam/authn/users/{user_tpn}/password/validate](/api/iam/post-authn-users-user-tpn-password-validate) | 비밀번호 정책 검증 |
| POST | [/api/v1/iam/authn/users/{user_tpn}/password/reset](/api/iam/post-authn-users-user-tpn-password-reset) | 관리자가 특정 사용자의 비밀번호 초기화 |

## 사용자 초대

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/organizations/{org_id}/invitations](/api/iam/post-authn-organizations-org-id-invitations) | 조직에 사용자 초대 생성 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/invitations](/api/iam/get-authn-organizations-org-id-invitations) | 조직의 초대 목록 조회 |
| GET | [/api/v1/iam/authn/invitations/{invitation_id}](/api/iam/get-authn-invitations-invitation-id) | 단일 초대 조회 |
| POST | [/api/v1/iam/authn/invitations/{invitation_id}:resend](/api/iam/post-authn-invitations-invitation-id-resend) | 초대 재발송 |
| POST | [/api/v1/iam/authn/invitations/{invitation_id}:cancel](/api/iam/post-authn-invitations-invitation-id-cancel) | 초대 취소 |
| POST | [/api/v1/iam/authn/users/{user_tpn}/resend-invitation](/api/iam/post-authn-users-user-tpn-resend-invitation) | 사용자 TPN 기반 초대 재발송 |

## 사용자

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/users](/api/iam/post-authn-users) | org_id를 body에 포함하여 사용자 생성 |
| PUT | [/api/v1/iam/authn/users/{tpn}](/api/iam/put-authn-users-tpn) | 사용자 수정 |
| DELETE | [/api/v1/iam/authn/users/{tpn}](/api/iam/delete-authn-users-tpn) | 사용자 삭제 |
| GET | [/api/v1/iam/authn/users/{tpn}](/api/iam/get-authn-users-tpn) | TPN으로 사용자의 상세 정보 조회 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/users](/api/iam/post-authn-organizations-org-id-users) | 지정된 조직 내에 새로운 사용자 생성 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/users](/api/iam/get-authn-organizations-org-id-users) | 지정된 조직의 사용자 목록 조회 |
| GET | [/api/v1/iam/authn/users/{tpn}/security-info](/api/iam/get-authn-users-tpn-security-info) | 사용자의 보안 관련 정보 조회 |
| POST | [/api/v1/iam/authn/users/{tpn}/mfa/totp:disable](/api/iam/post-authn-users-tpn-mfa-totp-disable) | 관리자가 특정 사용자의 TOTP MFA를 비활성화하고 Secret 삭제 |
| POST | [/api/v1/iam/authn/users/{tpn}/groups:batch-add](/api/iam/post-authn-users-tpn-groups-batch-add) | 한 명의 사용자를 여러 그룹에 동시에 추 |
| POST | [/api/v1/iam/authn/users/{tpn}/groups:sync](/api/iam/post-authn-users-tpn-groups-sync) | 사용자가 속한 그룹 목록을 지정한 목록으로 동기화 |

## 사전 인증

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/pre-auth/password/policy](/api/iam/get-authn-pre-auth-password-policy) | 비밀번호 정책 조회 |
| POST | [/api/v1/iam/authn/pre-auth/mfa/totp/setup](/api/iam/post-authn-pre-auth-mfa-totp-setup) | Pre-Auth 세션을 사용하여 TOTP를 설정 |
| POST | [/api/v1/iam/authn/pre-auth/mfa/totp/verify-setup](/api/iam/post-authn-pre-auth-mfa-totp-verify-setup) | Pre-Auth 세션을 사용하여 TOTP 설정을 검증 |
| POST | [/api/v1/iam/authn/pre-auth/mfa/email/request-code](/api/iam/post-authn-pre-auth-mfa-email-request-code) | Pre-Auth 세션을 사용하여 이메일로 MFA 코드를 요청 |
| POST | [/api/v1/iam/authn/pre-auth/mfa/verify](/api/iam/post-authn-pre-auth-mfa-verify) | Pre-Auth 세션을 사용하여 MFA 코드를 검증 |
| PUT | [/api/v1/iam/authn/pre-auth/password/change](/api/iam/put-authn-pre-auth-password-change) | 비밀번호 변경 |

## 서비스 계정

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/service-accounts](/api/iam/get-authn-service-accounts) | 서비스 어카운트 목록 조회 |
| POST | [/api/v1/iam/authn/service-accounts](/api/iam/post-authn-service-accounts) | 서비스 어카운트 생성 |
| DELETE | [/api/v1/iam/authn/service-accounts](/api/iam/delete-authn-service-accounts) | 체크박스 액션용 SA 다건 논리 삭제 |
| GET | [/api/v1/iam/authn/service-accounts/export](/api/iam/get-authn-service-accounts-export) | 필터 조건에 맞는 SA 목록을 CSV 형식으로 반환 |
| GET | [/api/v1/iam/authn/service-accounts/{sa_id}](/api/iam/get-authn-service-accounts-sa-id) | 서비스 어카운트 상세 조회 |
| DELETE | [/api/v1/iam/authn/service-accounts/{sa_id}](/api/iam/delete-authn-service-accounts-sa-id) | 서비스 어카운트 삭제 (논리적 삭제) |
| PUT | [/api/v1/iam/authn/service-accounts/{sa_id}](/api/iam/put-authn-service-accounts-sa-id) | 서비스 어카운트 업데이트 |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}/keys](/api/iam/post-authn-service-accounts-sa-id-keys) | API Key 발급 |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}/keys/{key_id}:disable](/api/iam/post-authn-service-accounts-sa-id-keys-key-id-disable) | API Key 비활성화 |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}/keys/{key_id}:enable](/api/iam/post-authn-service-accounts-sa-id-keys-key-id-enable) | API Key 활성화 |
| DELETE | [/api/v1/iam/authn/service-accounts/{sa_id}/keys/{key_id}](/api/iam/delete-authn-service-accounts-sa-id-keys-key-id) | API Key 삭제 |
| PATCH | [/api/v1/iam/authn/service-accounts/{sa_id}/keys/{key_id}](/api/iam/patch-authn-service-accounts-sa-id-keys-key-id) | API Key description/활성 상태 수정 |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}:disable](/api/iam/post-authn-service-accounts-sa-id-disable) | 서비스 어카운트 비활성화 |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}:enable](/api/iam/post-authn-service-accounts-sa-id-enable) | 서비스 어카운트 활성화 |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}/regenerate-secret](/api/iam/post-authn-service-accounts-sa-id-regenerate-secret) | Client Secret 재발급 |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}/keys/{key_id}/reset](/api/iam/post-authn-service-accounts-sa-id-keys-key-id-reset) | API Key Secret 재발급 |

## 세션 정책

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/session-policies/{org_id}](/api/iam/get-authn-session-policies-org-id) | 조직의 세션 정책 조회 |
| PUT | [/api/v1/iam/authn/session-policies/{org_id}](/api/iam/put-authn-session-policies-org-id) | 조직의 세션 정책을 생성하거나 수정 |
| POST | [/api/v1/iam/authn/session-policies/{org_id}/reset](/api/iam/post-authn-session-policies-org-id-reset) | 조직의 세션 정책을 삭제하여 기본값으로 초기화 |

## 액션 카탈로그

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/action-catalog/actions/groups](/api/iam/post-authz-action-catalog-actions-groups) | 그룹 액션 생성 |
| POST | [/api/v1/iam/authz/action-catalog/actions/import/openapi](/api/iam/post-authz-action-catalog-actions-import-openapi) | OpenAPI 스펙으로 액션 카탈로그 생성 |
| POST | [/api/v1/iam/authz/action-catalog/actions](/api/iam/post-authz-action-catalog-actions) | Action 생성 |
| GET | [/api/v1/iam/authz/action-catalog/actions](/api/iam/get-authz-action-catalog-actions) | Action 목록 조회 |
| PUT | [/api/v1/iam/authz/action-catalog/actions/{action_id}](/api/iam/put-authz-action-catalog-actions-action-id) | 기존 Action의 메타데이터 수정 |
| DELETE | [/api/v1/iam/authz/action-catalog/actions/{action_id}](/api/iam/delete-authz-action-catalog-actions-action-id) | Action을 삭제합니다 (soft delete) |
| GET | [/api/v1/iam/authz/action-catalog/actions/{action_id}](/api/iam/get-authz-action-catalog-actions-action-id) | 특정 Action의 상세 정보 조회 |
| GET | [/api/v1/iam/authz/action-catalog/actions/classes](/api/iam/get-authz-action-catalog-actions-classes) | 액션 클래스별 개수 조회 |
| GET | [/api/v1/iam/authz/action-catalog/actions/apps](/api/iam/get-authz-action-catalog-actions-apps) | 앱별 액션 개수 조회 |
| GET | [/api/v1/iam/authz/action-catalog/actions/apps/{app}/categories](/api/iam/get-authz-action-catalog-actions-apps-app-categories) | 카테고리별 액션 개수 조회 |
| GET | [/api/v1/iam/authz/action-catalog/actions/apps/{app}/resource-types](/api/iam/get-authz-action-catalog-actions-apps-app-resource-types) | 리소스 타입별 액션 개수 조회 |
| GET | [/api/v1/iam/authz/action-catalog/actions/search](/api/iam/get-authz-action-catalog-actions-search) | 키워드로 Action을 검색 |

## 역할 메타데이터

| 메서드 | 경로 | 설명 |
|---|---|---|
| PUT | [/api/v1/iam/authz/roles/{roleId}/metadata/{namespace}/{key}](/api/iam/put-authz-roles-roleid-metadata-namespace-key) | 역할에 Provider별 권한 매핑 정보를 설정합니다 (upsert) |
| GET | [/api/v1/iam/authz/roles/{roleId}/metadata/{namespace}/{key}](/api/iam/get-authz-roles-roleid-metadata-namespace-key) | 특정 역할 metadata 조회 |
| DELETE | [/api/v1/iam/authz/roles/{roleId}/metadata/{namespace}/{key}](/api/iam/delete-authz-roles-roleid-metadata-namespace-key) | 특정 역할 metadata 삭제 |
| GET | [/api/v1/iam/authz/roles/{roleId}/metadata](/api/iam/get-authz-roles-roleid-metadata) | 역할의 모든 metadata 조회 |
| GET | [/api/v1/iam/authz/roles/{roleId}/metadata/{namespace}](/api/iam/get-authz-roles-roleid-metadata-namespace) | 특정 Provider namespace의 모든 metadata 조회 |

## 역할 할당

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/roles/{role_id}/assignments](/api/iam/post-authz-roles-role-id-assignments) | 역할에 TPN(user/group)을 할당 |
| GET | [/api/v1/iam/authz/roles/{role_id}/assignments](/api/iam/get-authz-roles-role-id-assignments) | 역할에 할당된 TPN 목록 조회 |
| DELETE | [/api/v1/iam/authz/roles/{role_id}/assignments](/api/iam/delete-authz-roles-role-id-assignments) | 역할 ID와 TPN을 사용하여 RoleAssignment 삭제 |
| GET | [/api/v1/iam/authz/roles/{role_id}/assignments/{assignment_id}](/api/iam/get-authz-roles-role-id-assignments-assignment-id) | RoleAssignment 조회 |
| DELETE | [/api/v1/iam/authz/roles/{role_id}/assignments/{assignment_id}](/api/iam/delete-authz-roles-role-id-assignments-assignment-id) | RoleAssignment 삭제 |
| GET | [/api/v1/iam/authz/tpns/assignments](/api/iam/get-authz-tpns-assignments) | TPN이 가진 역할 목록 조회 |
| DELETE | [/api/v1/iam/authz/tpns/assignments](/api/iam/delete-authz-tpns-assignments) | TPN에 할당된 모든 역할을 일괄 해제 |
| GET | [/api/v1/iam/authz/role-assignments/me](/api/iam/get-authz-role-assignments-me) | 호출자(본인) TPN이 가진 역할 목록 조회 |
| GET | [/api/v1/iam/authz/roles/assignments/available](/api/iam/get-authz-roles-assignments-available) | 특정 TPN에 할당 가능한 역할 목록 조회 |
| GET | [/api/v1/iam/authz/assignments](/api/iam/get-authz-assignments) | 전체 역할 Assignment 목록 조회 |
| PUT | [/api/v1/iam/authz/roles/assignments/sync](/api/iam/put-authz-roles-assignments-sync) | TPN(사용자/그룹)에 할당된 역할 목록을 동기화 |

## 역할

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/roles](/api/iam/post-authz-roles) | 새로운 역할 생성 |
| GET | [/api/v1/iam/authz/roles](/api/iam/get-authz-roles) | 조직/프로젝트별 역할 목록 조회 |
| GET | [/api/v1/iam/authz/roles/{role_id}](/api/iam/get-authz-roles-role-id) | 역할 ID로 단건 조회 |
| PATCH | [/api/v1/iam/authz/roles/{role_id}](/api/iam/patch-authz-roles-role-id) | 역할 정보 수정 |
| DELETE | [/api/v1/iam/authz/roles/{role_id}](/api/iam/delete-authz-roles-role-id) | 역할을 소프트 삭제 |
| PUT | [/api/v1/iam/authz/roles/{role_id}/trust-policy](/api/iam/put-authz-roles-role-id-trust-policy) | 역할에 Trust 정책를 설정 |

## 인증

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/login](/api/iam/post-authn-login) | 사용자 로그인 |
| POST | [/api/v1/iam/authn/token/refresh](/api/iam/post-authn-token-refresh) | Access Token 갱신 — 쿠키 우선, body 폴백 |
| POST | [/api/v1/iam/authn/logout](/api/iam/post-authn-logout) | 로그아웃 및 세션 무효화 — 쿠키 우선 → body 폴백 |
| GET | [/api/v1/iam/authn/me](/api/iam/get-authn-me) | 현재 인증된 사용자 정보 조회 |
| GET | [/api/v1/iam/authn/sessions](/api/iam/get-authn-sessions) | 활성 세션 목록 조회 (PG 기반 검색·필터·정렬·페이지네이션) |
| GET | [/api/v1/iam/authn/sessions/{session_id}](/api/iam/get-authn-sessions-session-id) | 특정 세션 ID로 세션 상세 정보 조회 |
| POST | [/api/v1/iam/authn/sessions/revoke](/api/iam/post-authn-sessions-revoke) | 사용자가 자신의 특정 세션을 강제로 종료 |
| POST | [/api/v1/iam/authn/sessions/revoke-all](/api/iam/post-authn-sessions-revoke-all) | 사용자가 자신의 모든 활성 세션을 강제로 종료 |
| POST | [/api/v1/iam/authn/sessions/users/{user_tpn}/revoke-all](/api/iam/post-authn-sessions-users-user-tpn-revoke-all) | 관리자가 특정 사용자의 모든 활성 세션을 강제로 종료 |

## 임시 역할 부여

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/temporary-grants](/api/iam/post-authz-temporary-grants) | 대상 주체에게 역할을 한시적으로 부여 |
| GET | [/api/v1/iam/authz/temporary-grants](/api/iam/get-authz-temporary-grants) | 임시 역할 부여 목록 조회 |
| GET | [/api/v1/iam/authz/temporary-grants/me](/api/iam/get-authz-temporary-grants-me) | 호출자(본인)에게 부여된 임시 역할 목록 조회 |
| GET | [/api/v1/iam/authz/temporary-grants/{grant_id}](/api/iam/get-authz-temporary-grants-grant-id) | 임시 역할 부여 단건 조회 |
| POST | [/api/v1/iam/authz/temporary-grants/{grant_id}/extend](/api/iam/post-authz-temporary-grants-grant-id-extend) | 종료 시각만 변경 |
| POST | [/api/v1/iam/authz/temporary-grants/{grant_id}/revoke](/api/iam/post-authz-temporary-grants-grant-id-revoke) | 즉시 효력을 중단 |
| GET | [/api/v1/iam/authz/tpns/{tpn}/active-grants](/api/iam/get-authz-tpns-tpn-active-grants) | 특정 주체의 활성 임시 grant 조회 |

## 정책 바인딩

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/bindings](/api/iam/post-authz-bindings) | 정책을 대상(TPN, Org, Project)에 연결 |
| GET | [/api/v1/iam/authz/bindings](/api/iam/get-authz-bindings) | 전체 정책 Binding 목록 조회 |
| GET | [/api/v1/iam/authz/bindings/by-policy/{policy_id}](/api/iam/get-authz-bindings-by-policy-policy-id) | 특정 정책에 연결된 모든 대상 조회 |
| GET | [/api/v1/iam/authz/bindings/me](/api/iam/get-authz-bindings-me) | 호출자(본인) TPN에 직접 바인딩된 정책 목록 조회 |
| GET | [/api/v1/iam/authz/bindings/by-target](/api/iam/get-authz-bindings-by-target) | 특정 대상에 연결된 모든 정책 조회 |
| DELETE | [/api/v1/iam/authz/bindings/by-target](/api/iam/delete-authz-bindings-by-target) | 대상 기준 정책 바인딩 삭제 |
| DELETE | [/api/v1/iam/authz/bindings/by-tpn](/api/iam/delete-authz-bindings-by-tpn) | TPN에 연결된 모든 정책 바인딩을 일괄 해제 |
| GET | [/api/v1/iam/authz/bindings/{binding_id}](/api/iam/get-authz-bindings-binding-id) | 바인딩 ID로 단건 조회 |
| DELETE | [/api/v1/iam/authz/bindings/{binding_id}](/api/iam/delete-authz-bindings-binding-id) | 정책과 대상 간의 연결 제거 |
| GET | [/api/v1/iam/authz/bindings/audit](/api/iam/get-authz-bindings-audit) | 바인딩 생성/삭제 이력 조회 |
| GET | [/api/v1/iam/authz/bindings/roles/{role_id}/policies](/api/iam/get-authz-bindings-roles-role-id-policies) | 역할에 연결된 정책 목록을 상세 정보와 함께 조회 |
| GET | [/api/v1/iam/authz/bindings/tpns/{tpn}/policies](/api/iam/get-authz-bindings-tpns-tpn-policies) | TPN 직접 바인딩 정책 조회 |
| GET | [/api/v1/iam/authz/bindings/policies/{policy_id}/roles](/api/iam/get-authz-bindings-policies-policy-id-roles) | 특정 정책에 바인딩된 역할 목록을 상세 정보와 함께 조회 |

## 정책 연결 대상

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authz/policies/{policy_id}/attached-entities/users](/api/iam/get-authz-policies-policy-id-attached-entities-users) | 정책이 실효 적용되는 사용자 목록 조회 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/attached-entities/user-groups](/api/iam/get-authz-policies-policy-id-attached-entities-user-groups) | 정책이 연결된 사용자 그룹 목록 조회 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/attached-entities/roles](/api/iam/get-authz-policies-policy-id-attached-entities-roles) | 정책에 바인딩된 역할 목록을 조회합니다 (활성 부여 수 포함) |
| GET | [/api/v1/iam/authz/policies/{policy_id}/attached-entities/service-accounts](/api/iam/get-authz-policies-policy-id-attached-entities-service-accounts) | 정책이 직접 바인딩된 서비스 어카운트 목록 조회 |

## 정책

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/policies](/api/iam/post-authz-policies) | 1~N개 정책 생성 |
| GET | [/api/v1/iam/authz/policies](/api/iam/get-authz-policies) | 조직/프로젝트의 정책 목록 조회 |
| DELETE | [/api/v1/iam/authz/policies](/api/iam/delete-authz-policies) | 정책을 소프트 삭제 |
| GET | [/api/v1/iam/authz/policies/me/policies](/api/iam/get-authz-policies-me-policies) | 내 정책 목록 조회 |
| GET | [/api/v1/iam/authz/policies/sync-summary](/api/iam/get-authz-policies-sync-summary) | 정책 동기화 현황 조회 |
| GET | [/api/v1/iam/authz/policies/{policy_id}](/api/iam/get-authz-policies-policy-id) | 정책 ID로 정책 조회 |
| PUT | [/api/v1/iam/authz/policies/{policy_id}](/api/iam/put-authz-policies-policy-id) | 정책을 업데이트 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/permissions](/api/iam/get-authz-policies-policy-id-permissions) | 정책의 Statement를 파싱하여 권한 목록 조회 |
| POST | [/api/v1/iam/authz/policies/{policy_id}:activate](/api/iam/post-authz-policies-policy-id-activate) | 비활성화된 정책을 활성화 |
| POST | [/api/v1/iam/authz/policies/{policy_id}:deactivate](/api/iam/post-authz-policies-policy-id-deactivate) | 활성화된 정책을 비활성화 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/versions](/api/iam/get-authz-policies-policy-id-versions) | 정책의 모든 버전 조회 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/versions/{version}](/api/iam/get-authz-policies-policy-id-versions-version) | 정책의 특정 버전 조회 |
| DELETE | [/api/v1/iam/authz/policies/{policy_id}/versions/{version}](/api/iam/delete-authz-policies-policy-id-versions-version) | 정책의 특정 버전 삭제 |
| POST | [/api/v1/iam/authz/policies/{policy_id}/versions/{version}:rollback](/api/iam/post-authz-policies-policy-id-versions-version-rollback) | 정책을 특정 버전으로 롤백 |
| POST | [/api/v1/iam/authz/policies/{policy_id}/versions/{version}:activate](/api/iam/post-authz-policies-policy-id-versions-version-activate) | 정책의 특정 버전을 직접 활성화 |
| POST | [/api/v1/iam/authz/policies/{policy_id}:duplicate](/api/iam/post-authz-policies-policy-id-duplicate) | 기존 정책을 복제하여 새로운 정책 생성 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/diff](/api/iam/get-authz-policies-policy-id-diff) | 두 버전 간의 차이를 JSON Patch 형식으로 반환 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/sync-diff](/api/iam/get-authz-policies-policy-id-sync-diff) | 정책 변경 비교 조회 |
| GET | [/api/v1/iam/authz/policies/simulate/accessible-principals](/api/iam/get-authz-policies-simulate-accessible-principals) | 시뮬레이터 접근 주체 검색 |

## 조직

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/organizations/password-policy/default](/api/iam/get-authn-organizations-password-policy-default) | Global Settings 기반 비밀번호 정책 기본값을 반환 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/password-policy](/api/iam/post-authn-organizations-org-id-password-policy) | 조직별 비밀번호 정책 생성 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/password-policy](/api/iam/get-authn-organizations-org-id-password-policy) | 조직의 비밀번호 정책 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/password-policy](/api/iam/put-authn-organizations-org-id-password-policy) | 조직의 비밀번호 정책을 업데이트 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/password-policy/reset](/api/iam/post-authn-organizations-org-id-password-policy-reset) | 비밀번호 정책 초기화 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/otp-policy](/api/iam/get-authn-organizations-org-id-otp-policy) | 조직의 OTP(TOTP) 정책 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/otp-policy](/api/iam/put-authn-organizations-org-id-otp-policy) | 조직의 OTP(TOTP) 정책을 생성하거나 업데이트 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/otp-policy/reset](/api/iam/post-authn-organizations-org-id-otp-policy-reset) | OTP 정책 초기화 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/email-mfa-policy](/api/iam/get-authn-organizations-org-id-email-mfa-policy) | 조직의 Email MFA 정책 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/email-mfa-policy](/api/iam/put-authn-organizations-org-id-email-mfa-policy) | 조직의 Email MFA 정책을 생성하거나 업데이트 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/email-mfa-policy/reset](/api/iam/post-authn-organizations-org-id-email-mfa-policy-reset) | 조직의 Email MFA 정책을 삭제하여 기본값으로 초기화 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/account-lockout-policy](/api/iam/get-authn-organizations-org-id-account-lockout-policy) | 조직의 계정 잠금 정책 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/account-lockout-policy](/api/iam/put-authn-organizations-org-id-account-lockout-policy) | 조직의 계정 잠금 정책을 생성하거나 업데이트 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/account-lockout-policy/reset](/api/iam/post-authn-organizations-org-id-account-lockout-policy-reset) | 계정 잠금 정책 초기화 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/mfa-policy](/api/iam/put-authn-organizations-org-id-mfa-policy) | 조직의 MFA 정책(MFA 필수 여부 및 허용되는 MFA 방법)을 설정 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/mfa-policy](/api/iam/get-authn-organizations-org-id-mfa-policy) | 조직의 MFA 정책(MFA 필수 여부 및 허용되는 MFA 방법) 조회 |

## 초대 수락

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/invitations:accept](/api/iam/post-authn-invitations-accept) | 초대 수락 |

## 토큰 검증 공개키

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/jwks](/api/iam/get-authn-jwks) | 토큰 검증 공개키(JWKS) 조회 |

## 토큰 정책

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/token-policies/{org_id}](/api/iam/get-authn-token-policies-org-id) | 조직의 토큰 정책 조회 |
| PUT | [/api/v1/iam/authn/token-policies/{org_id}](/api/iam/put-authn-token-policies-org-id) | 조직의 토큰 정책을 생성하거나 수정 |
| POST | [/api/v1/iam/authn/token-policies/{org_id}/reset](/api/iam/post-authn-token-policies-org-id-reset) | 조직의 토큰 정책을 삭제하여 기본값으로 초기화 |

## 토큰 폐기

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/revoke/token](/api/iam/post-authn-revoke-token) | 특정 JWT ID(jti)를 가진 토큰만 무효화 |
| GET | [/api/v1/iam/authn/revoke/denylist](/api/iam/get-authn-revoke-denylist) | 무효화된 토큰/세션 목록 조회 |
| POST | [/api/v1/iam/authn/revoke/token/status](/api/iam/post-authn-revoke-token-status) | 특정 토큰 또는 세션이 무효화되었는지 확인 |

## 프로젝트

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/organizations/{org_id}/projects](/api/iam/post-authn-organizations-org-id-projects) | 조직 내에 새로운 프로젝트 생성 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/projects](/api/iam/get-authn-organizations-org-id-projects) | 특정 조직의 프로젝트 목록 조회 |
| GET | [/api/v1/iam/authn/projects/{project_id}](/api/iam/get-authn-projects-project-id) | 특정 프로젝트의 상세 정보 조회 |
| PUT | [/api/v1/iam/authn/projects/{project_id}](/api/iam/put-authn-projects-project-id) | 프로젝트의 이름, 표시명, 메타데이터 또는 상태를 업데이트 |
| DELETE | [/api/v1/iam/authn/projects/{project_id}](/api/iam/delete-authn-projects-project-id) | 프로젝트를 소프트 삭제 |

## 프로필

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/profile](/api/iam/get-authn-profile) | 인증된 사용자의 프로필 정보 조회 |
| PATCH | [/api/v1/iam/authn/profile](/api/iam/patch-authn-profile) | 인증된 사용자가 자신의 프로필 정보 수정 |
| GET | [/api/v1/iam/authn/profile/activity](/api/iam/get-authn-profile-activity) | 인증된 사용자의 로그인 이력 조회 |
| GET | [/api/v1/iam/authn/profile/organizations](/api/iam/get-authn-profile-organizations) | 인증된 사용자가 접근 가능한 조직 목록 조회 |
| GET | [/api/v1/iam/authn/profile/partitions](/api/iam/get-authn-profile-partitions) | 인증된 사용자 본인이 소속된 파티션(프로젝트) 목록 조회 |
| POST | [/api/v1/iam/authn/profile/mfa/totp/setup](/api/iam/post-authn-profile-mfa-totp-setup) | 인증된 사용자의 TOTP MFA 설정 시작 |
| POST | [/api/v1/iam/authn/profile/mfa/totp/verify-setup](/api/iam/post-authn-profile-mfa-totp-verify-setup) | TOTP 앱에서 생성된 6자리 코드를 입력하여 설정을 완료 |


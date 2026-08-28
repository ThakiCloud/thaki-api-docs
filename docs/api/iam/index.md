# IAM

오퍼레이션 244개. OpenAPI 스펙 내려받기 — [iam-authn.openapi.json](/iam-authn.openapi.json) · [iam-authz.openapi.json](/iam-authz.openapi.json)

## API Keys

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/api-keys](/api/iam/get-authn-api-keys) | API Key 목록 조회 |
| POST | [/api/v1/iam/authn/api-keys](/api/iam/post-authn-api-keys) | API Key 발급 |
| GET | [/api/v1/iam/authn/api-keys/{key_id}](/api/iam/get-authn-api-keys-key-id) | API Key 상세 조회 |
| DELETE | [/api/v1/iam/authn/api-keys/{key_id}](/api/iam/delete-authn-api-keys-key-id) | API Key 삭제 |
| PATCH | [/api/v1/iam/authn/api-keys/{key_id}](/api/iam/patch-authn-api-keys-key-id) | API Key 이름/상태 수정 |
| POST | [/api/v1/iam/authn/api-keys/{key_id}/deactivate](/api/iam/post-authn-api-keys-key-id-deactivate) | API Key 비활성화 |
| POST | [/api/v1/iam/authn/api-keys/{key_id}/activate](/api/iam/post-authn-api-keys-key-id-activate) | API Key 활성화 |
| POST | [/api/v1/iam/authn/api-keys/{key_id}/reset](/api/iam/post-authn-api-keys-key-id-reset) | API Key 시크릿 재발급 |
| POST | [/api/v1/iam/authn/api-keys/validate](/api/iam/post-authn-api-keys-validate) | API Key 검증 (User / SA 통합) |
| POST | [/api/v1/iam/authn/api-keys/exchange](/api/iam/post-authn-api-keys-exchange) | API Key로 내부 토큰 발급 |

## Account Lockout Management

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/account-lockout/status](/api/iam/get-authn-account-lockout-status) | 계정 잠금 상태 조회 |
| POST | [/api/v1/iam/authn/account-lockout/lock](/api/iam/post-authn-account-lockout-lock) | 계정 수동 잠금 |
| POST | [/api/v1/iam/authn/account-lockout/unlock](/api/iam/post-authn-account-lockout-unlock) | 계정 잠금 수동 해제 |
| DELETE | [/api/v1/iam/authn/account-lockout/reset/{username}](/api/iam/delete-authn-account-lockout-reset-username) | 계정 잠금 리셋 (Path Parameter) |
| GET | [/api/v1/iam/authn/account-lockout/history](/api/iam/get-authn-account-lockout-history) | 계정 잠금 이력 조회 |

## Action Catalog

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/action-catalog/actions/groups](/api/iam/post-authz-action-catalog-actions-groups) | 묶음(Group) Action 생성 (Admin) |
| POST | [/api/v1/iam/authz/action-catalog/actions/import/openapi](/api/iam/post-authz-action-catalog-actions-import-openapi) | OpenAPI 스펙으로부터 Action 일괄 생성 (Admin) |
| POST | [/api/v1/iam/authz/action-catalog/actions](/api/iam/post-authz-action-catalog-actions) | Action 생성 (Admin) |
| GET | [/api/v1/iam/authz/action-catalog/actions](/api/iam/get-authz-action-catalog-actions) | Action 목록 조회 |
| PUT | [/api/v1/iam/authz/action-catalog/actions/{action_id}](/api/iam/put-authz-action-catalog-actions-action-id) | Action 수정 (Admin) |
| DELETE | [/api/v1/iam/authz/action-catalog/actions/{action_id}](/api/iam/delete-authz-action-catalog-actions-action-id) | Action 삭제 (Admin) |
| GET | [/api/v1/iam/authz/action-catalog/actions/{action_id}](/api/iam/get-authz-action-catalog-actions-action-id) | Action 상세 조회 |
| GET | [/api/v1/iam/authz/action-catalog/actions/classes](/api/iam/get-authz-action-catalog-actions-classes) | Action Class 집계 조회 (IAM05 아코디언) |
| GET | [/api/v1/iam/authz/action-catalog/actions/apps](/api/iam/get-authz-action-catalog-actions-apps) | App 목록 조회 (DISTINCT) |
| GET | [/api/v1/iam/authz/action-catalog/actions/apps/{app}/categories](/api/iam/get-authz-action-catalog-actions-apps-app-categories) | Category 목록 조회 (DISTINCT) |
| GET | [/api/v1/iam/authz/action-catalog/actions/apps/{app}/resource-types](/api/iam/get-authz-action-catalog-actions-apps-app-resource-types) | Resource Type 목록 조회 (DISTINCT) |
| GET | [/api/v1/iam/authz/action-catalog/actions/search](/api/iam/get-authz-action-catalog-actions-search) | Action 검색 |

## Audit Logs

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/audit-logs](/api/iam/get-authn-audit-logs) | 감사 로그 목록 조회 |
| GET | [/api/v1/iam/authn/audit-logs/{event_id}](/api/iam/get-authn-audit-logs-event-id) | Get Audit Log |
| GET | [/api/v1/iam/authz/audit-logs/evaluations](/api/iam/get-authz-audit-logs-evaluations) | PDP 평가 감사 로그 조회 |

## Dashboard

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/dashboard/{orgId}](/api/iam/get-authn-dashboard-orgid) | 대시보드 데이터 조회 |

## My Access Keys

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/me/access-keys](/api/iam/post-authn-me-access-keys) | Access Key 발급 |
| GET | [/api/v1/iam/authn/me/access-keys](/api/iam/get-authn-me-access-keys) | Access Key 목록 조회 |
| GET | [/api/v1/iam/authn/me/access-keys/{key_id}](/api/iam/get-authn-me-access-keys-key-id) | Access Key 상세 조회 |
| DELETE | [/api/v1/iam/authn/me/access-keys/{key_id}](/api/iam/delete-authn-me-access-keys-key-id) | Access Key 폐기 |
| PATCH | [/api/v1/iam/authn/me/access-keys/{key_id}](/api/iam/patch-authn-me-access-keys-key-id) | Access Key 이름(Description)/상태 수정 |
| POST | [/api/v1/iam/authn/me/access-keys/{key_id}/deactivate](/api/iam/post-authn-me-access-keys-key-id-deactivate) | Access Key 비활성화 |
| POST | [/api/v1/iam/authn/me/access-keys/{key_id}/activate](/api/iam/post-authn-me-access-keys-key-id-activate) | Access Key 활성화 |
| POST | [/api/v1/iam/authn/me/access-keys/{key_id}/rotate](/api/iam/post-authn-me-access-keys-key-id-rotate) | Access Key 시크릿 재발급 (Rotate) |

## My Password

| 메서드 | 경로 | 설명 |
|---|---|---|
| PUT | [/api/v1/iam/authn/me/password](/api/iam/put-authn-me-password) | 본인 비밀번호 변경 |
| POST | [/api/v1/iam/authn/me/password/validate](/api/iam/post-authn-me-password-validate) | 본인 비밀번호 사전검증 |

## My Security Info

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/me/security-info](/api/iam/get-authn-me-security-info) | 본인 보안 정보 조회 |

## My Sessions

| 메서드 | 경로 | 설명 |
|---|---|---|
| DELETE | [/api/v1/iam/authn/me/sessions](/api/iam/delete-authn-me-sessions) | 본인 전체 세션 종료 |
| GET | [/api/v1/iam/authn/me/sessions](/api/iam/get-authn-me-sessions) | 본인 세션 목록 조회 |
| DELETE | [/api/v1/iam/authn/me/sessions/{session_id}](/api/iam/delete-authn-me-sessions-session-id) | 본인 세션 단건 종료 |

## Policies

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/policies](/api/iam/post-authz-policies) | 정책 생성 |
| GET | [/api/v1/iam/authz/policies](/api/iam/get-authz-policies) | 정책 목록 조회 |
| DELETE | [/api/v1/iam/authz/policies](/api/iam/delete-authz-policies) | 정책 삭제 |
| GET | [/api/v1/iam/authz/policies/me/policies](/api/iam/get-authz-policies-me-policies) | 내 연결 정책 목록 조회 (IAM1701) |
| GET | [/api/v1/iam/authz/policies/export/csv](/api/iam/get-authz-policies-export-csv) | 정책 목록 CSV export |
| GET | [/api/v1/iam/authz/policies/sync-summary](/api/iam/get-authz-policies-sync-summary) | 정책 동기화 요약(outdated 개수/ID) |
| GET | [/api/v1/iam/authz/policies/{policy_id}](/api/iam/get-authz-policies-policy-id) | 정책 조회 |
| PUT | [/api/v1/iam/authz/policies/{policy_id}](/api/iam/put-authz-policies-policy-id) | 정책 업데이트 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/permissions](/api/iam/get-authz-policies-policy-id-permissions) | 정책 권한 목록 조회 |
| POST | [/api/v1/iam/authz/policies/{policy_id}:activate](/api/iam/post-authz-policies-policy-id-activate) | 정책 활성화 |
| POST | [/api/v1/iam/authz/policies/{policy_id}:deactivate](/api/iam/post-authz-policies-policy-id-deactivate) | 정책 비활성화 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/versions](/api/iam/get-authz-policies-policy-id-versions) | 정책 버전 목록 조회 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/versions/{version}](/api/iam/get-authz-policies-policy-id-versions-version) | 특정 버전 조회 |
| DELETE | [/api/v1/iam/authz/policies/{policy_id}/versions/{version}](/api/iam/delete-authz-policies-policy-id-versions-version) | 정책 버전 삭제 |
| POST | [/api/v1/iam/authz/policies/{policy_id}/versions/{version}:rollback](/api/iam/post-authz-policies-policy-id-versions-version-rollback) | 정책 롤백 |
| POST | [/api/v1/iam/authz/policies/{policy_id}/versions/{version}:activate](/api/iam/post-authz-policies-policy-id-versions-version-activate) | 정책 버전 활성화 |
| POST | [/api/v1/iam/authz/policies/{policy_id}:duplicate](/api/iam/post-authz-policies-policy-id-duplicate) | 정책 복제 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/diff](/api/iam/get-authz-policies-policy-id-diff) | 정책 버전 비교 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/sync-diff](/api/iam/get-authz-policies-policy-id-sync-diff) | 정책 sync-diff (템플릿 대비 Field diff) |
| POST | [/api/v1/iam/authz/policies/bulk-sync-update](/api/iam/post-authz-policies-bulk-sync-update) | 정책 일괄 동기화 (템플릿 기준 document 교체) |
| POST | [/api/v1/iam/authz/policies/validate](/api/iam/post-authz-policies-validate) | Validate Policy Dry Run |
| POST | [/api/v1/iam/authz/policies/revalidate](/api/iam/post-authz-policies-revalidate) | Revalidate Policies Sync |
| POST | [/api/v1/iam/authz/policies/evaluate](/api/iam/post-authz-policies-evaluate) | 정책 평가 |
| PUT | [/api/v1/iam/authz/policies/{policy_id}/bindings/sync](/api/iam/put-authz-policies-policy-id-bindings-sync) | 정책에 대한 role 바인딩 동기화 |
| GET | [/api/v1/iam/authz/policies/simulate/accessible-principals](/api/iam/get-authz-policies-simulate-accessible-principals) | 시뮬레이션 대상 주체 검색 |
| POST | [/api/v1/iam/authz/policies/simulate](/api/iam/post-authz-policies-simulate) | 정책 시뮬레이션 (Batch) |

## Policy Attached Entities

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authz/policies/{policy_id}/attached-entities/users](/api/iam/get-authz-policies-policy-id-attached-entities-users) | 정책이 적용되는 사용자 목록 조회 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/attached-entities/user-groups](/api/iam/get-authz-policies-policy-id-attached-entities-user-groups) | 정책이 연결된 사용자 그룹 목록 조회 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/attached-entities/roles](/api/iam/get-authz-policies-policy-id-attached-entities-roles) | 정책이 바인딩된 Role 목록 조회 |
| GET | [/api/v1/iam/authz/policies/{policy_id}/attached-entities/service-accounts](/api/iam/get-authz-policies-policy-id-attached-entities-service-accounts) | 정책이 연결된 서비스 어카운트 목록 조회 |

## Policy Bindings

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/bindings](/api/iam/post-authz-bindings) | 바인딩 생성 |
| GET | [/api/v1/iam/authz/bindings](/api/iam/get-authz-bindings) | 전체 Policy Binding 목록 조회 |
| GET | [/api/v1/iam/authz/bindings/by-policy/{policy_id}](/api/iam/get-authz-bindings-by-policy-policy-id) | 정책별 바인딩 목록 조회 |
| GET | [/api/v1/iam/authz/bindings/me](/api/iam/get-authz-bindings-me) | 본인 바인딩 목록 조회 |
| GET | [/api/v1/iam/authz/bindings/by-target](/api/iam/get-authz-bindings-by-target) | 대상별 바인딩 목록 조회 |
| DELETE | [/api/v1/iam/authz/bindings/by-target](/api/iam/delete-authz-bindings-by-target) | 대상(TPN 등)으로 바인딩 삭제 |
| DELETE | [/api/v1/iam/authz/bindings/by-tpn](/api/iam/delete-authz-bindings-by-tpn) | TPN의 모든 Policy Binding 삭제 |
| GET | [/api/v1/iam/authz/bindings/{binding_id}](/api/iam/get-authz-bindings-binding-id) | 바인딩 단건 조회 |
| DELETE | [/api/v1/iam/authz/bindings/{binding_id}](/api/iam/delete-authz-bindings-binding-id) | 바인딩 삭제 |
| GET | [/api/v1/iam/authz/bindings/audit](/api/iam/get-authz-bindings-audit) | 바인딩 감사 로그 조회 |
| PUT | [/api/v1/iam/authz/bindings/sync](/api/iam/put-authz-bindings-sync) | 바인딩 동기화 |
| GET | [/api/v1/iam/authz/bindings/roles/{role_id}/policies](/api/iam/get-authz-bindings-roles-role-id-policies) | Role에 매핑된 정책 목록 조회 |
| GET | [/api/v1/iam/authz/bindings/tpns/{tpn}/policies](/api/iam/get-authz-bindings-tpns-tpn-policies) | TPN(서비스 계정 등)에 직접 연결된 정책 목록 조회 (IAM14 정방향) |
| GET | [/api/v1/iam/authz/bindings/policies/{policy_id}/roles](/api/iam/get-authz-bindings-policies-policy-id-roles) | 정책에 바인딩된 Role 목록 조회 |

## Profile

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/profile](/api/iam/get-authn-profile) | 내 프로필 조회 |
| PATCH | [/api/v1/iam/authn/profile](/api/iam/patch-authn-profile) | 내 프로필 수정 |
| GET | [/api/v1/iam/authn/profile/activity](/api/iam/get-authn-profile-activity) | 로그인 이력 조회 |
| GET | [/api/v1/iam/authn/profile/organizations](/api/iam/get-authn-profile-organizations) | 접근 가능한 조직 목록 조회 |
| GET | [/api/v1/iam/authn/profile/partitions](/api/iam/get-authn-profile-partitions) | 내 소속 파티션 목록 조회 |
| POST | [/api/v1/iam/authn/profile/mfa/totp/setup](/api/iam/post-authn-profile-mfa-totp-setup) | TOTP 설정 시작 |
| POST | [/api/v1/iam/authn/profile/mfa/totp/verify-setup](/api/iam/post-authn-profile-mfa-totp-verify-setup) | TOTP 설정 검증 |

## Project

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/organizations/{org_id}/projects](/api/iam/post-authn-organizations-org-id-projects) | 조직 내 프로젝트 생성 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/projects](/api/iam/get-authn-organizations-org-id-projects) | 조직별 프로젝트 목록 조회 |
| GET | [/api/v1/iam/authn/projects/{project_id}](/api/iam/get-authn-projects-project-id) | 프로젝트 상세 조회 |
| PUT | [/api/v1/iam/authn/projects/{project_id}](/api/iam/put-authn-projects-project-id) | 프로젝트 업데이트 |
| DELETE | [/api/v1/iam/authn/projects/{project_id}](/api/iam/delete-authn-projects-project-id) | 프로젝트 삭제 (Soft Delete) |

## Role Assignments

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/roles/{role_id}/assignments](/api/iam/post-authz-roles-role-id-assignments) | Role에 TPN 할당 |
| GET | [/api/v1/iam/authz/roles/{role_id}/assignments](/api/iam/get-authz-roles-role-id-assignments) | Role에 할당된 TPN 목록 조회 |
| DELETE | [/api/v1/iam/authz/roles/{role_id}/assignments](/api/iam/delete-authz-roles-role-id-assignments) | TPN으로 RoleAssignment 삭제 |
| GET | [/api/v1/iam/authz/roles/{role_id}/assignments/{assignment_id}](/api/iam/get-authz-roles-role-id-assignments-assignment-id) | RoleAssignment 조회 |
| DELETE | [/api/v1/iam/authz/roles/{role_id}/assignments/{assignment_id}](/api/iam/delete-authz-roles-role-id-assignments-assignment-id) | RoleAssignment 삭제 |
| GET | [/api/v1/iam/authz/tpns/assignments](/api/iam/get-authz-tpns-assignments) | TPN이 가진 Role 목록 조회 |
| DELETE | [/api/v1/iam/authz/tpns/assignments](/api/iam/delete-authz-tpns-assignments) | TPN의 모든 Role Assignment 삭제 |
| GET | [/api/v1/iam/authz/role-assignments/me](/api/iam/get-authz-role-assignments-me) | 본인 Role 목록 조회 |
| GET | [/api/v1/iam/authz/roles/assignments/available](/api/iam/get-authz-roles-assignments-available) | TPN에 할당 가능한 Role 목록 조회 |
| GET | [/api/v1/iam/authz/assignments](/api/iam/get-authz-assignments) | 전체 Role Assignment 목록 조회 |
| PUT | [/api/v1/iam/authz/roles/assignments/sync](/api/iam/put-authz-roles-assignments-sync) | TPN에 Role 동기화 |

## Role Metadata

| 메서드 | 경로 | 설명 |
|---|---|---|
| PUT | [/api/v1/iam/authz/roles/{roleId}/metadata/{namespace}/{key}](/api/iam/put-authz-roles-roleid-metadata-namespace-key) | Role Metadata 설정 |
| GET | [/api/v1/iam/authz/roles/{roleId}/metadata/{namespace}/{key}](/api/iam/get-authz-roles-roleid-metadata-namespace-key) | Role Metadata 단건 조회 |
| DELETE | [/api/v1/iam/authz/roles/{roleId}/metadata/{namespace}/{key}](/api/iam/delete-authz-roles-roleid-metadata-namespace-key) | Role Metadata 삭제 |
| GET | [/api/v1/iam/authz/roles/{roleId}/metadata](/api/iam/get-authz-roles-roleid-metadata) | Role Metadata 목록 조회 |
| GET | [/api/v1/iam/authz/roles/{roleId}/metadata/{namespace}](/api/iam/get-authz-roles-roleid-metadata-namespace) | Namespace별 Role Metadata 조회 |

## Roles

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/roles](/api/iam/post-authz-roles) | Role 생성 |
| GET | [/api/v1/iam/authz/roles](/api/iam/get-authz-roles) | Role 목록 조회 |
| GET | [/api/v1/iam/authz/roles/{role_id}](/api/iam/get-authz-roles-role-id) | Role 조회 |
| PATCH | [/api/v1/iam/authz/roles/{role_id}](/api/iam/patch-authz-roles-role-id) | Role 수정 |
| DELETE | [/api/v1/iam/authz/roles/{role_id}](/api/iam/delete-authz-roles-role-id) | Role 삭제 |
| PUT | [/api/v1/iam/authz/roles/{role_id}/trust-policy](/api/iam/put-authz-roles-role-id-trust-policy) | Trust Policy 설정 |

## Session Policies

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/session-policies/{org_id}](/api/iam/get-authn-session-policies-org-id) | 세션 정책 조회 |
| PUT | [/api/v1/iam/authn/session-policies/{org_id}](/api/iam/put-authn-session-policies-org-id) | 세션 정책 생성/수정 (Upsert) |
| POST | [/api/v1/iam/authn/session-policies/{org_id}/reset](/api/iam/post-authn-session-policies-org-id-reset) | 세션 정책 초기화 |

## Temporary Role Grants

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authz/temporary-grants](/api/iam/post-authz-temporary-grants) | 임시 역할 부여 생성 |
| GET | [/api/v1/iam/authz/temporary-grants](/api/iam/get-authz-temporary-grants) | 임시 역할 부여 목록 조회 |
| GET | [/api/v1/iam/authz/temporary-grants/me](/api/iam/get-authz-temporary-grants-me) | 본인 임시 역할 부여 목록 조회 |
| GET | [/api/v1/iam/authz/temporary-grants/{grant_id}](/api/iam/get-authz-temporary-grants-grant-id) | 임시 역할 부여 단건 조회 |
| POST | [/api/v1/iam/authz/temporary-grants/{grant_id}/extend](/api/iam/post-authz-temporary-grants-grant-id-extend) | 임시 역할 부여 연장 |
| POST | [/api/v1/iam/authz/temporary-grants/{grant_id}/revoke](/api/iam/post-authz-temporary-grants-grant-id-revoke) | 임시 역할 부여 회수 |
| GET | [/api/v1/iam/authz/tpns/{tpn}/active-grants](/api/iam/get-authz-tpns-tpn-active-grants) | 활성 임시 grant 조회 (STS/평가용) |

## Token Policies

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/token-policies/{org_id}](/api/iam/get-authn-token-policies-org-id) | 토큰 정책 조회 |
| PUT | [/api/v1/iam/authn/token-policies/{org_id}](/api/iam/put-authn-token-policies-org-id) | 토큰 정책 생성/수정 (Upsert) |
| POST | [/api/v1/iam/authn/token-policies/{org_id}/reset](/api/iam/post-authn-token-policies-org-id-reset) | 토큰 정책 초기화 |

## Token Revocation

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/revoke/session](/api/iam/post-authn-revoke-session) | 세션 기반 토큰 무효화 (관리자용) |
| POST | [/api/v1/iam/authn/revoke/token](/api/iam/post-authn-revoke-token) | 토큰 ID(jti) 기반 무효화 |
| POST | [/api/v1/iam/authn/revoke/user](/api/iam/post-authn-revoke-user) | 사용자 전체 세션 무효화 (관리자용) |
| GET | [/api/v1/iam/authn/revoke/denylist](/api/iam/get-authn-revoke-denylist) | Denylist 목록 조회 |
| POST | [/api/v1/iam/authn/revoke/token/status](/api/iam/post-authn-revoke-token-status) | 토큰/세션 무효화 상태 조회 |

## auth

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/login](/api/iam/post-authn-login) | Post Login |
| POST | [/api/v1/iam/authn/token/refresh](/api/iam/post-authn-token-refresh) | Post Refresh |
| POST | [/api/v1/iam/authn/logout](/api/iam/post-authn-logout) | Post Logout |
| GET | [/api/v1/iam/authn/me](/api/iam/get-authn-me) | Get Me |
| GET | [/api/v1/iam/authn/sessions](/api/iam/get-authn-sessions) | List Active Sessions |
| GET | [/api/v1/iam/authn/sessions/{session_id}](/api/iam/get-authn-sessions-session-id) | Get Session |
| POST | [/api/v1/iam/authn/sessions/revoke](/api/iam/post-authn-sessions-revoke) | 세션 강제 종료 (사용자 자신의 세션) |
| POST | [/api/v1/iam/authn/sessions/revoke-all](/api/iam/post-authn-sessions-revoke-all) | 모든 세션 강제 종료 (사용자 자신) |
| POST | [/api/v1/iam/authn/sessions/users/{user_tpn}/revoke-all](/api/iam/post-authn-sessions-users-user-tpn-revoke-all) | 관리자: 특정 사용자의 모든 세션 강제 종료 |

## group-policies

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/policies](/api/iam/post-authn-organizations-org-id-groups-group-id-policies) | 그룹에 정책 연결 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/policies](/api/iam/get-authn-organizations-org-id-groups-group-id-policies) | 그룹의 정책 바인딩 목록 조회 |
| DELETE | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/policies/{policy_id}](/api/iam/delete-authn-organizations-org-id-groups-group-id-policies-policy-id) | 그룹에서 정책 연결 해제 |

## group-sync

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/sync](/api/iam/post-authn-organizations-org-id-groups-group-id-sync) | 단일 그룹 템플릿 동기화 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/sync](/api/iam/post-authn-organizations-org-id-groups-sync) | 일괄 그룹 템플릿 동기화 |

## group-templates

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/group-templates](/api/iam/post-authn-group-templates) | 그룹 템플릿 생성 |
| GET | [/api/v1/iam/authn/group-templates](/api/iam/get-authn-group-templates) | 그룹 템플릿 목록 조회 |
| GET | [/api/v1/iam/authn/group-templates/{template_id}](/api/iam/get-authn-group-templates-template-id) | 그룹 템플릿 상세 조회 |
| PUT | [/api/v1/iam/authn/group-templates/{template_id}](/api/iam/put-authn-group-templates-template-id) | 그룹 템플릿 수정 |
| DELETE | [/api/v1/iam/authn/group-templates/{template_id}](/api/iam/delete-authn-group-templates-template-id) | 그룹 템플릿 삭제 (soft-delete) |
| GET | [/api/v1/iam/authn/group-templates/{template_id}/derived](/api/iam/get-authn-group-templates-template-id-derived) | 템플릿 파생 그룹 목록 |

## groups

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups](/api/iam/post-authn-organizations-org-id-groups) | 그룹 생성 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/groups](/api/iam/get-authn-organizations-org-id-groups) | 그룹 목록 조회 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}:duplicate](/api/iam/post-authn-organizations-org-id-groups-group-id-duplicate) | 그룹 복제 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}](/api/iam/get-authn-organizations-org-id-groups-group-id) | 그룹 상세 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}](/api/iam/put-authn-organizations-org-id-groups-group-id) | 그룹 수정 |
| DELETE | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}](/api/iam/delete-authn-organizations-org-id-groups-group-id) | 그룹 삭제 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/members](/api/iam/get-authn-organizations-org-id-groups-group-id-members) | 그룹 멤버 목록 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/members](/api/iam/put-authn-organizations-org-id-groups-group-id-members) | 멤버 동기화 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/members:batch-add](/api/iam/post-authn-organizations-org-id-groups-group-id-members-batch-add) | 멤버 일괄 추가 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/members:batch-remove](/api/iam/post-authn-organizations-org-id-groups-group-id-members-batch-remove) | 멤버 일괄 제거 |

## jwks

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/jwks](/api/iam/get-authn-jwks) | Thaki Token JWKS |

## mfa-auth-flow

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/mfa/code/request](/api/iam/post-authn-mfa-code-request) | Request Mfa Code |
| POST | [/api/v1/iam/authn/mfa/code/verify](/api/iam/post-authn-mfa-code-verify) | Verify Mfa Code |

## organizations

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/organizations/password-policy/default](/api/iam/get-authn-organizations-password-policy-default) | 비밀번호 정책 기본값 조회 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/password-policy](/api/iam/post-authn-organizations-org-id-password-policy) | 비밀번호 정책 생성 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/password-policy](/api/iam/get-authn-organizations-org-id-password-policy) | 비밀번호 정책 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/password-policy](/api/iam/put-authn-organizations-org-id-password-policy) | 비밀번호 정책 수정 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/password-policy/reset](/api/iam/post-authn-organizations-org-id-password-policy-reset) | 비밀번호 정책 초기화 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/otp-policy](/api/iam/get-authn-organizations-org-id-otp-policy) | OTP 정책 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/otp-policy](/api/iam/put-authn-organizations-org-id-otp-policy) | OTP 정책 생성/수정 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/otp-policy/reset](/api/iam/post-authn-organizations-org-id-otp-policy-reset) | OTP 정책 초기화 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/email-mfa-policy](/api/iam/get-authn-organizations-org-id-email-mfa-policy) | Email MFA 정책 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/email-mfa-policy](/api/iam/put-authn-organizations-org-id-email-mfa-policy) | Email MFA 정책 생성/수정 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/email-mfa-policy/reset](/api/iam/post-authn-organizations-org-id-email-mfa-policy-reset) | Email MFA 정책 초기화 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/account-lockout-policy](/api/iam/get-authn-organizations-org-id-account-lockout-policy) | 계정 잠금 정책 조회 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/account-lockout-policy](/api/iam/put-authn-organizations-org-id-account-lockout-policy) | 계정 잠금 정책 생성/수정 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/account-lockout-policy/reset](/api/iam/post-authn-organizations-org-id-account-lockout-policy-reset) | 계정 잠금 정책 초기화 |
| PUT | [/api/v1/iam/authn/organizations/{org_id}/mfa-policy](/api/iam/put-authn-organizations-org-id-mfa-policy) | 조직 MFA 정책 설정 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/mfa-policy](/api/iam/get-authn-organizations-org-id-mfa-policy) | 조직 MFA 정책 조회 |

## password-reset

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/password/forgot](/api/iam/post-authn-password-forgot) | 비밀번호 초기화 요청 (본인) |
| POST | [/api/v1/iam/authn/password/reset/verify](/api/iam/post-authn-password-reset-verify) | 비밀번호 초기화 토큰 검증 |
| PUT | [/api/v1/iam/authn/password/reset](/api/iam/put-authn-password-reset) | 비밀번호 재설정 완료 |

## pre-auth

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/pre-auth/password/policy](/api/iam/get-authn-pre-auth-password-policy) | 비밀번호 정책 조회 (Pre-Auth) |
| POST | [/api/v1/iam/authn/pre-auth/mfa/totp/setup](/api/iam/post-authn-pre-auth-mfa-totp-setup) | TOTP 설정 (Pre-Auth) |
| POST | [/api/v1/iam/authn/pre-auth/mfa/totp/verify-setup](/api/iam/post-authn-pre-auth-mfa-totp-verify-setup) | TOTP 설정 검증 (Pre-Auth) |
| POST | [/api/v1/iam/authn/pre-auth/mfa/email/request-code](/api/iam/post-authn-pre-auth-mfa-email-request-code) | 이메일 코드 요청 (Pre-Auth) |
| POST | [/api/v1/iam/authn/pre-auth/mfa/verify](/api/iam/post-authn-pre-auth-mfa-verify) | MFA 검증 (Pre-Auth) |
| PUT | [/api/v1/iam/authn/pre-auth/password/change](/api/iam/put-authn-pre-auth-password-change) | 비밀번호 변경 (Pre-Auth) |

## service-accounts

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/service-accounts](/api/iam/get-authn-service-accounts) | List Service Accounts |
| POST | [/api/v1/iam/authn/service-accounts](/api/iam/post-authn-service-accounts) | Create Service Account |
| DELETE | [/api/v1/iam/authn/service-accounts](/api/iam/delete-authn-service-accounts) | 서비스 계정 일괄 삭제 |
| GET | [/api/v1/iam/authn/service-accounts/export](/api/iam/get-authn-service-accounts-export) | 서비스 계정 목록 Export (CSV) |
| GET | [/api/v1/iam/authn/service-accounts/{sa_id}](/api/iam/get-authn-service-accounts-sa-id) | Get Service Account |
| DELETE | [/api/v1/iam/authn/service-accounts/{sa_id}](/api/iam/delete-authn-service-accounts-sa-id) | Delete Service Account |
| PUT | [/api/v1/iam/authn/service-accounts/{sa_id}](/api/iam/put-authn-service-accounts-sa-id) | Update Service Account |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}/keys](/api/iam/post-authn-service-accounts-sa-id-keys) | Issue Api Key |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}/keys/{key_id}:disable](/api/iam/post-authn-service-accounts-sa-id-keys-key-id-disable) | Disable Api Key |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}/keys/{key_id}:enable](/api/iam/post-authn-service-accounts-sa-id-keys-key-id-enable) | Enable Api Key |
| DELETE | [/api/v1/iam/authn/service-accounts/{sa_id}/keys/{key_id}](/api/iam/delete-authn-service-accounts-sa-id-keys-key-id) | Delete Api Key |
| PATCH | [/api/v1/iam/authn/service-accounts/{sa_id}/keys/{key_id}](/api/iam/patch-authn-service-accounts-sa-id-keys-key-id) | Update Api Key |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}:disable](/api/iam/post-authn-service-accounts-sa-id-disable) | Disable Service Account |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}:enable](/api/iam/post-authn-service-accounts-sa-id-enable) | Enable Service Account |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}/regenerate-secret](/api/iam/post-authn-service-accounts-sa-id-regenerate-secret) | Regenerate Client Secret |
| POST | [/api/v1/iam/authn/service-accounts/{sa_id}/keys/{key_id}/reset](/api/iam/post-authn-service-accounts-sa-id-keys-key-id-reset) | Reset Api Key Secret |

## user-invitation

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/organizations/{org_id}/invitations](/api/iam/post-authn-organizations-org-id-invitations) | Create Invitation |
| GET | [/api/v1/iam/authn/organizations/{org_id}/invitations](/api/iam/get-authn-organizations-org-id-invitations) | List Invitations |
| GET | [/api/v1/iam/authn/invitations/{invitation_id}](/api/iam/get-authn-invitations-invitation-id) | Get Invitation |
| POST | [/api/v1/iam/authn/invitations/{invitation_id}:resend](/api/iam/post-authn-invitations-invitation-id-resend) | Resend Invitation |
| POST | [/api/v1/iam/authn/invitations/{invitation_id}:cancel](/api/iam/post-authn-invitations-invitation-id-cancel) | Cancel Invitation |
| POST | [/api/v1/iam/authn/users/{user_tpn}/resend-invitation](/api/iam/post-authn-users-user-tpn-resend-invitation) | Resend Invitation By User |

## user-invitation-public

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/invitations:accept](/api/iam/post-authn-invitations-accept) | Accept Invitation |

## user-mfa

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/users/me/mfa/status](/api/iam/get-authn-users-me-mfa-status) | Get Mfa Status |
| POST | [/api/v1/iam/authn/users/me/mfa/email/enable](/api/iam/post-authn-users-me-mfa-email-enable) | Enable Email Mfa |
| POST | [/api/v1/iam/authn/users/me/mfa/email/disable](/api/iam/post-authn-users-me-mfa-email-disable) | Disable Email Mfa |
| POST | [/api/v1/iam/authn/users/me/mfa/totp/setup](/api/iam/post-authn-users-me-mfa-totp-setup) | Setup Totp |
| POST | [/api/v1/iam/authn/users/me/mfa/totp/verify-setup](/api/iam/post-authn-users-me-mfa-totp-verify-setup) | Verify Totp Setup |
| POST | [/api/v1/iam/authn/users/me/mfa/totp/disable](/api/iam/post-authn-users-me-mfa-totp-disable) | Disable Totp Mfa |
| POST | [/api/v1/iam/authn/users/me/mfa/email/request-code](/api/iam/post-authn-users-me-mfa-email-request-code) | 이메일 코드 요청 (Deprecated) |

## user-password

| 메서드 | 경로 | 설명 |
|---|---|---|
| PUT | [/api/v1/iam/authn/users/{user_tpn}/password](/api/iam/put-authn-users-user-tpn-password) | Patch User Password |
| POST | [/api/v1/iam/authn/users/{user_tpn}/password/validate](/api/iam/post-authn-users-user-tpn-password-validate) | Validate User Password |
| POST | [/api/v1/iam/authn/users/{user_tpn}/password/reset](/api/iam/post-authn-users-user-tpn-password-reset) | 관리자 비밀번호 초기화 |

## users

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/iam/authn/users](/api/iam/post-authn-users) | 사용자 생성 (레거시) |
| PUT | [/api/v1/iam/authn/users/{tpn}](/api/iam/put-authn-users-tpn) | Update User |
| DELETE | [/api/v1/iam/authn/users/{tpn}](/api/iam/delete-authn-users-tpn) | Delete User |
| GET | [/api/v1/iam/authn/users/{tpn}](/api/iam/get-authn-users-tpn) | 사용자 상세 조회 |
| POST | [/api/v1/iam/authn/organizations/{org_id}/users](/api/iam/post-authn-organizations-org-id-users) | 조직 내 새 사용자 생성 |
| GET | [/api/v1/iam/authn/organizations/{org_id}/users](/api/iam/get-authn-organizations-org-id-users) | 조직별 사용자 목록 조회 |
| GET | [/api/v1/iam/authn/users/{tpn}/security-info](/api/iam/get-authn-users-tpn-security-info) | 사용자 보안 정보 조회 |
| POST | [/api/v1/iam/authn/users/{tpn}/mfa/totp:disable](/api/iam/post-authn-users-tpn-mfa-totp-disable) | 사용자 TOTP MFA 비활성화 (관리자용) |
| POST | [/api/v1/iam/authn/users/{tpn}/groups:batch-add](/api/iam/post-authn-users-tpn-groups-batch-add) | 사용자를 여러 그룹에 일괄 추가 |
| POST | [/api/v1/iam/authn/users/{tpn}/groups:sync](/api/iam/post-authn-users-tpn-groups-sync) | 사용자가 속한 그룹 동기화 |

## 기타

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/iam/authn/](/api/iam/get-authn) | Root |
| GET | [/api/v1/iam/authz/](/api/iam/get-authz) | Root |


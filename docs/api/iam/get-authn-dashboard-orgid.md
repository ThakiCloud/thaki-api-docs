# 대시보드 데이터 조회

지정된 조직의 IAM 대시보드 통계 데이터를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/dashboard/{orgId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| orgId | path | 필수 | string | 조직 ID. 조직 ID |

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
| result.domain | 필수 | object | 도메인 정보 |
| result.domain.name | 필수 | string | 도메인 이름 |
| result.domain.displayName | 선택 | string 또는 null | 도메인 표시 이름 |
| result.domain.createdAt | 선택 | string 또는 null | 생성일시 (ISO8601 UTC) |
| result.domain.description | 선택 | string 또는 null | 도메인 설명 |
| result.authenticationSummary | 필수 | object | 인증 현황 요약 |
| result.authenticationSummary.todaySignIns | 선택 | object | 오늘의 로그인 통계 |
| result.authenticationSummary.todaySignIns.total | 선택 | integer | 총 로그인 시도 횟수. 기본값 0 |
| result.authenticationSummary.todaySignIns.success | 선택 | integer | 성공 횟수. 기본값 0 |
| result.authenticationSummary.todaySignIns.failure | 선택 | integer | 실패 횟수. 기본값 0 |
| result.authenticationSummary.mfaAdoption | 선택 | object | MFA 활성화 현황 |
| result.authenticationSummary.mfaAdoption.total | 선택 | integer | 총 사용자 수. 기본값 0 |
| result.authenticationSummary.mfaAdoption.enabled | 선택 | integer | MFA 활성화 사용자 수. 기본값 0 |
| result.authenticationSummary.mfaAdoption.disabled | 선택 | integer | MFA 비활성화 사용자 수. 기본값 0 |
| result.userStatus | 필수 | object | 사용자 상태 통계 |
| result.userStatus.total | 선택 | integer | 총 사용자 수. 기본값 0 |
| result.userStatus.online | 선택 | integer | 온라인 사용자 수. 기본값 0 |
| result.userStatus.disabled | 선택 | integer | 비활성화 사용자 수. 기본값 0 |
| result.userStatus.locked | 선택 | integer | 잠긴 사용자 수. 기본값 0 |
| result.iamResources | 필수 | object | IAM 리소스 통계 |
| result.iamResources.userGroups | 선택 | integer | 사용자 그룹 수. 기본값 0 |
| result.iamResources.roles | 선택 | integer | 역할 수. 기본값 0 |
| result.iamResources.policies | 선택 | integer | 정책 수. 기본값 0 |
| result.recentEvents | 선택 | array (object) | 최근 이벤트 목록 |
| result.recentEvents[].time | 필수 | string | 이벤트 발생 시간 (ISO8601 UTC) |
| result.recentEvents[].event | 필수 | string | 이벤트 유형 |
| result.recentEvents[].user | 선택 | string 또는 null | 사용자명 |
| result.recentEvents[].target | 선택 | string 또는 null | 대상 |
| result.recentEvents[].result | 필수 | string | 결과 (success, failure 등) |
| result.recentEvents[].ipAddress | 선택 | string 또는 null | IP 주소 |
| result.domainsCount | 선택 | integer | 전체 도메인 수. 기본값 0 |
| result.activeSessionsCount | 선택 | integer | 현재 활성 세션 수. 기본값 0 |
| result.longestActiveSessions | 선택 | array (object) | 최장 활성 세션 TOP3 |
| result.longestActiveSessions[].sessionId | 필수 | string | 세션 ID |
| result.longestActiveSessions[].userTpn | 선택 | string 또는 null | 사용자 TPN |
| result.longestActiveSessions[].username | 선택 | string 또는 null | 사용자명 |
| result.longestActiveSessions[].orgId | 선택 | string 또는 null | 조직 ID |
| result.longestActiveSessions[].startedAt | 선택 | string 또는 null | 세션 시작 시각 (ISO8601 UTC) |
| result.longestActiveSessions[].clientIp | 선택 | string 또는 null | 클라이언트 IP |
| result.serviceAccountsStatistics | 선택 | object 또는 null | 서비스 계정 통계 |
| result.serviceAccountsStatistics.total | 선택 | integer | 총 서비스 계정 수. 기본값 0 |
| result.serviceAccountsStatistics.active | 선택 | integer | 활성 서비스 계정 수. 기본값 0 |
| result.serviceAccountsStatistics.disabled | 선택 | integer | 비활성 서비스 계정 수. 기본값 0 |
| result.expiringActiveGrants | 선택 | array (object) | 만료 임박 활성 권한 TOP3 |
| result.expiringActiveGrants[].grantId | 선택 | string 또는 null | 권한 ID |
| result.expiringActiveGrants[].tpn | 선택 | string 또는 null | 사용자/그룹 TPN |
| result.expiringActiveGrants[].expiresAt | 선택 | string 또는 null | 만료 시각 (ISO8601 UTC) |
| result.expiringActiveGrants[].roleId | 선택 | string 또는 null | 역할 ID |


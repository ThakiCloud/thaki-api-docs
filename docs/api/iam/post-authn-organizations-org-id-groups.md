# 그룹 생성

조직 내에 새 그룹을 생성합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/groups
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
| scope | 선택 | string | 스코프 (org\|project, 기본값: org). 기본값 "org" |
| projectId | 선택 | string 또는 null | 프로젝트 ID (scope=project일 때 필수) |
| service | 선택 | string 또는 null | 서비스 구분 이름. 미지정 시 기존 서비스 무관 그룹으로 생성. 길이 0~32 |
| displayName | 선택 | string 또는 null | 그룹 표시 이름 |
| description | 선택 | string 또는 null | 그룹 설명 |
| tags | 선택 | object 또는 null | 태그 |
| type | 선택 | string | 그룹 타입 (built-in\|custom). 값: built-in, custom. 기본값 "custom" |
| members | 선택 | array (object) | 초기 멤버 목록 |
| members[].identifierType | 필수 | string |  |
| members[].identifier | 필수 | string | 길이 3~256 |
| policyIds | 선택 | array (string) | 생성 시 연결할 정책 ID 목록 |

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
| result.groupId | 필수 | string |  |
| result.tpn | 필수 | string |  |
| result.orgId | 필수 | string |  |
| result.projectId | 필수 | string 또는 null |  |
| result.scope | 필수 | string |  |
| result.service | 선택 | string 또는 null |  |
| result.displayName | 필수 | string 또는 null |  |
| result.description | 필수 | string 또는 null |  |
| result.tags | 필수 | object 또는 null |  |
| result.type | 필수 | string |  |
| result.status | 필수 | string |  |
| result.isBuiltin | 선택 | boolean | 기본값 false |
| result.sourceTemplateId | 선택 | string 또는 null |  |
| result.sourceTemplateVersion | 선택 | integer 또는 null |  |
| result.syncStatus | 선택 | string 또는 null |  |
| result.createdAt | 필수 | string |  |
| result.createdBy | 선택 | string 또는 null |  |
| result.memberCount | 선택 | integer | 기본값 0 |
| result.roles | 선택 | array (object) |  |
| result.policies | 선택 | array (object) |  |


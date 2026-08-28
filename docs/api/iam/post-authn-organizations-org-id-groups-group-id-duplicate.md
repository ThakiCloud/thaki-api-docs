# 그룹 복제

기존 그룹을 복제하여 새 그룹을 생성합니다. 이름 미지정 시 '{원본} (Copy)' 형식으로 자동 생성하며, 멤버·정책 승계는 옵션입니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}:duplicate
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| org_id | path | 필수 | string | 조직 ID. 조직 ID |
| group_id | path | 필수 | string | 원본 그룹 ID. 원본 그룹 ID |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| displayName | 선택 | string 또는 null | 새 그룹 이름. 미지정 시 '{원본} (Copy)' 형식으로 자동 생성 |
| includeMembers | 선택 | boolean | 원본 멤버(TPN) 승계 여부 (기본값: true). 기본값 true |
| includePolicies | 선택 | boolean | 원본 정책 바인딩 승계 여부 (기본값: true). 기본값 true |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

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


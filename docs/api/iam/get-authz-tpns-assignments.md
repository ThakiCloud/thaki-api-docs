# TPN이 가진 Role 목록 조회

TPN이 가진 Role 목록을 조회합니다.
Role에 바인딩된 Policy 정보도 함께 반환합니다.

**필수 조건:**
- **orgId**: 일반 사용자/그룹 TPN 조회 시 필수. 시스템 어드민 TPN 조회 시 생략 가능.
- **tpn**: 필수 (쉼표로 구분하여 여러 TPN 입력 가능)

**파라미터:**
- **tpn**: TPN 목록 (쉼표 구분)
  - 사용자 TPN: 사용자에게 직접 할당된 Role 조회
  - 그룹 TPN: 그룹에 할당된 Role 조회
  - 시스템 어드민 TPN: `tpn::::user/sysadmin.xxx` 형식 (orgId 불필요)
  - 혼합 가능: 예) `tpn:kr:org::user/john,tpn:kr:org::group/admin`

응답에 roleName, assignmentType, policies 정보를 포함합니다.
- `assignmentType`:
  - `direct`: user TPN에 직접 할당된 Role
  - `group`: group TPN에 할당된 Role
- `policies`: Role에 바인딩된 정책 목록 (정책 ID, 이름)

**사용 예시:**
```
# 사용자 TPN으로 조회 (직접 할당만)
GET /tpns/assignments?orgId=973hbqrxn6gv&tpn=tpn:kr:973hbqrxn6gv::user/jhlee

# 시스템 어드민 TPN으로 조회 (orgId 생략 가능)
GET /tpns/assignments?tpn=tpn::::user/sysadmin.jhlee

# 사용자 + 그룹 Role 자동 조회 (유효 권한)
GET /tpns/assignments?orgId=973hbqrxn6gv&tpn=tpn:kr:973hbqrxn6gv::user/jhlee&includeGroupRoles=true
Authorization: Bearer {access_token}

# 그룹 TPN으로 조회
GET /tpns/assignments?orgId=973hbqrxn6gv&tpn=tpn:kr:973hbqrxn6gv::group/admin

# 여러 TPN 동시 조회 (사용자 + 그룹 명시)
GET /tpns/assignments?orgId=973hbqrxn6gv&tpn=tpn:kr:973hbqrxn6gv::user/john,tpn:kr:973hbqrxn6gv::group/dev
```

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/tpns/assignments
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| tpn | 필수 | string | TPN 목록 (쉼표 구분). 예: tpn:kr:org::user/john,tpn:kr:org::group/admin. TPN 목록 (쉼표 구분). 예: tpn:kr:org::user/john,tpn:kr:org::group/admin |
| orgId | 선택 | string 또는 null | 조직 ID (시스템 어드민 TPN 조회 시 생략 가능). 조직 ID (시스템 어드민 TPN 조회 시 생략 가능) |
| projectId | 선택 | string 또는 null | 프로젝트 ID. 프로젝트 ID |
| page | 선택 | integer | 페이지 번호 (0: 전체 조회, 1+: 페이징 조회). 페이지 번호 (0: 전체 조회, 1+: 페이징 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~100 |
| includeDeleted | 선택 | boolean | 삭제된 항목 포함 여부. 삭제된 항목 포함 여부. 기본값 false |
| includeGroupRoles | 선택 | boolean | 사용자가 속한 그룹의 Role도 포함 (User TPN인 경우에만 적용). 사용자가 속한 그룹의 Role도 포함 (User TPN인 경우에만 적용). 기본값 false |
| sort | 선택 | string 또는 null | 정렬 필드. 정렬 필드 |
| order | 선택 | string 또는 null | 정렬 방향 (asc \| desc). 정렬 방향 (asc \| desc) |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


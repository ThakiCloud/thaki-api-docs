# 조직별 사용자 목록 조회

지정된 조직의 사용자 목록을 조회합니다. 다양한 필터와 검색 조건을 지원합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/users
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| org_id | path | 필수 | string | 조직 ID. 조직 ID. 길이 1~64 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| username | 선택 | array (string) | 사용자명 부분 일치 검색 (반복키 다중 값 OR: ?username=a&username=b). 사용자명 부분 일치 검색 (반복키 다중 값 OR: ?username=a&username=b) |
| status | 선택 | array (string) | 상태 필터 (online\|offline\|disabled\|active\|deleted\|all), 반복키 다중 값: ?status=active&status=disabled. 상태 필터 (online\|offline\|disabled\|active\|deleted\|all), 반복키 다중 값: ?status=active&status=disabled |
| email | 선택 | array (string) | 이메일 완전일치 필터 (반복키 다중 값 OR: ?email=a@x.com&email=b@x.com). 부분검색은 지원하지 않음. 이메일 완전일치 필터 (반복키 다중 값 OR: ?email=a@x.com&email=b@x.com). 부분검색은 지원하지 않음 |
| sort | 선택 | string 또는 null |  |
| order | 선택 | string 또는 null |  |
| page | 선택 | integer | 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 기본값 10. 범위 1~100 |
| id | 선택 | string 또는 null |  |
| displayName | 선택 | string 또는 null |  |
| search | 선택 | string 또는 null |  |
| mfa | 선택 | string 또는 null |  |
| locked | 선택 | boolean 또는 null |  |
| groups | 선택 | string 또는 null |  |
| groupIds | 선택 | string 또는 null |  |
| roles | 선택 | string 또는 null |  |
| lastSignInGt | 선택 | string 또는 null |  |
| lastSignInGte | 선택 | string 또는 null |  |
| lastSignInLt | 선택 | string 또는 null |  |
| lastSignInLte | 선택 | string 또는 null |  |
| createdAtGt | 선택 | string 또는 null |  |
| createdAtGte | 선택 | string 또는 null |  |
| createdAtLt | 선택 | string 또는 null |  |
| createdAtLte | 선택 | string 또는 null |  |

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
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].tpn | 필수 | string |  |
| result.data[].orgId | 선택 | string 또는 null |  |
| result.data[].username | 필수 | string |  |
| result.data[].displayName | 선택 | string 또는 null |  |
| result.data[].email | 선택 | string 또는 null |  |
| result.data[].status | 필수 | string |  |
| result.data[].lastSignIn | 선택 | string 또는 null |  |
| result.data[].presence | 선택 | string | 값: online, offline. 기본값 "offline" |
| result.data[].groups | 선택 | array (object) |  |
| result.data[].groups[].groupId | 필수 | string | 그룹 ID |
| result.data[].groups[].groupTpn | 선택 | string 또는 null | 그룹 TPN |
| result.data[].groups[].displayName | 선택 | string 또는 null | 그룹 이름 |
| result.data[].roles | 선택 | array (object) |  |
| result.data[].roles[].roleId | 필수 | string | 역할 ID |
| result.data[].roles[].roleName | 선택 | string 또는 null | 역할 이름 |
| result.data[].roles[].assignedAt | 선택 | string 또는 null | 할당 시각 (ISO8601) |
| result.data[].failedLoginCount | 선택 | integer | 현재 로그인 실패 횟수 (max 도달 시 status=disabled로 변경). 기본값 0 |
| result.data[].mfaEnabled | 선택 | boolean | 기본값 false |
| result.data[].mfaEmailEnabled | 선택 | boolean | 기본값 false |
| result.data[].mfaTotpEnabled | 선택 | boolean | 기본값 false |
| result.data[].region | 선택 | string 또는 null |  |
| result.data[].tags | 선택 | object 또는 null |  |
| result.data[].idpKind | 선택 | string 또는 null |  |
| result.data[].idpRealm | 선택 | string 또는 null |  |
| result.data[].forcePasswordChange | 선택 | boolean | 기본값 false |
| result.data[].defaultOrgId | 선택 | string 또는 null |  |
| result.data[].createdAt | 선택 | string 또는 null |  |
| result.data[].updatedAt | 선택 | string 또는 null |  |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


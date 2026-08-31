# 사용자 수정

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authn/users/{tpn}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| tpn | path | 필수 | string | 길이 1~ |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| displayName | 선택 | string 또는 null | 길이 0~128 |
| email | 선택 | string 또는 null |  |
| tags | 선택 | object 또는 null |  |
| status | 선택 | string 또는 null | 상태 변경 (enable: 활성화, disable: 비활성화) |

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
| result.orgId | 선택 | string 또는 null |  |
| result.username | 필수 | string |  |
| result.displayName | 선택 | string 또는 null |  |
| result.email | 선택 | string 또는 null |  |
| result.status | 필수 | string |  |
| result.lastSignIn | 선택 | string 또는 null |  |
| result.presence | 선택 | string | 값: online, offline. 기본값 "offline" |
| result.groups | 선택 | array (object) |  |
| result.groups[].groupId | 필수 | string | 그룹 ID |
| result.groups[].groupTpn | 선택 | string 또는 null | 그룹 TPN |
| result.groups[].displayName | 선택 | string 또는 null | 그룹 이름 |
| result.roles | 선택 | array (object) |  |
| result.roles[].roleId | 필수 | string | 역할 ID |
| result.roles[].roleName | 선택 | string 또는 null | 역할 이름 |
| result.roles[].assignedAt | 선택 | string 또는 null | 할당 시각 (ISO8601) |
| result.failedLoginCount | 선택 | integer | 현재 로그인 실패 횟수 (max 도달 시 status=disabled로 변경). 기본값 0 |
| result.mfaEnabled | 선택 | boolean | 기본값 false |
| result.mfaEmailEnabled | 선택 | boolean | 기본값 false |
| result.mfaTotpEnabled | 선택 | boolean | 기본값 false |
| result.region | 선택 | string 또는 null |  |
| result.tags | 선택 | object 또는 null |  |
| result.idpKind | 선택 | string 또는 null |  |
| result.idpRealm | 선택 | string 또는 null |  |
| result.forcePasswordChange | 선택 | boolean | 기본값 false |
| result.defaultOrgId | 선택 | string 또는 null |  |
| result.createdAt | 선택 | string 또는 null |  |
| result.updatedAt | 선택 | string 또는 null |  |


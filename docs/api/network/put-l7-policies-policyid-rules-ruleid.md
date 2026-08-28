# L7 Rule 수정

L7 Rule을 수정합니다.

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/network/l7-policies/{policyId}/rules/{ruleId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| policyId | path | 필수 | string |  |
| ruleId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| type | 선택 | string 또는 null | L7 Rule 타입. 값: HOST_NAME, PATH, FILE_TYPE, HEADER, COOKIE |
| compareType | 선택 | string 또는 null | 비교 타입. 값: REGEX, EQUAL_TO, STARTS_WITH, ENDS_WITH, CONTAINS |
| ruleValue | 선택 | string 또는 null | 비교할 값 |
| key | 선택 | string 또는 null | 키 (HEADER, COOKIE 타입 시 필수) |
| invert | 선택 | boolean 또는 null | 규칙 반전 여부 |
| adminStateUp | 선택 | boolean 또는 null | 관리 상태 |

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
| result.id | 필수 | string | L7 Rule ID |
| result.type | 필수 | string | L7 Rule 타입 |
| result.compareType | 필수 | string | 비교 타입 |
| result.ruleValue | 필수 | string | 비교할 값 |
| result.key | 선택 | string 또는 null | 키 |
| result.invert | 필수 | boolean | 규칙 반전 여부 |
| result.adminStateUp | 필수 | boolean | 관리 상태 |
| result.projectId | 선택 | string 또는 null | 프로젝트 ID |
| result.status | 선택 | string 또는 null | 상태. 값: ONLINE, DEGRADED, OFFLINE, NO_MONITOR, OPERATING_ERROR, DRAINING, PROVISIONING_ERROR, CREATING, UPDATING, DELETING, UNKNOWN |
| result.createdAt | 선택 | string (date-time) | 생성 시간 |
| result.updatedAt | 선택 | string (date-time) | 수정 시간 |


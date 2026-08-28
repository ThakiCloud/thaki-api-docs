# L7 Policy 생성

L7 Policy를 생성합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/l7-policies
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| listenerId | 필수 | string | 연결할 Listener ID |
| behavior | 필수 | string | L7 Policy 동작(behavior). 값: REDIRECT_TO_POOL, REDIRECT_TO_URL, REDIRECT_PREFIX, REJECT |
| position | 선택 | integer 또는 null | 우선순위 (기본: 맨 뒤). 범위 1~ |
| name | 선택 | string 또는 null | L7 Policy 이름 |
| description | 선택 | string 또는 null | L7 Policy 설명 |
| adminStateUp | 선택 | boolean | 관리자 상태. 기본값 true |
| redirectPoolId | 선택 | string 또는 null | 리다이렉트 Pool ID (REDIRECT_TO_POOL 시 필수) |
| redirectUrl | 선택 | string 또는 null | 리다이렉트 URL (REDIRECT_TO_URL 시 필수). 길이 1~2083 |
| redirectPrefix | 선택 | string 또는 null | 리다이렉트 URL prefix (REDIRECT_PREFIX 시 필수, 예: /api/v2) |
| redirectHttpCode | 선택 | integer | 리다이렉트 HTTP 코드 (3xx). 기본값 302. 범위 300~399 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌·사용 중) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.id | 필수 | string | L7 Policy ID |
| result.listenerId | 필수 | string | Listener ID |
| result.behavior | 필수 | string | L7 Policy 동작(behavior) |
| result.position | 필수 | integer | L7 Policy 우선순위 |
| result.adminStateUp | 필수 | boolean | 관리자 상태 |
| result.name | 선택 | string 또는 null | L7 Policy 이름 |
| result.description | 선택 | string 또는 null | L7 Policy 설명 |
| result.redirectPoolId | 선택 | string 또는 null | 리다이렉트 Pool ID |
| result.redirectPoolName | 선택 | string 또는 null | 리다이렉트 Pool 이름 |
| result.redirectUrl | 선택 | string 또는 null | 리다이렉트 URL |
| result.redirectPrefix | 선택 | string 또는 null | 리다이렉트 URL prefix |
| result.redirectHttpCode | 선택 | integer 또는 null | 리다이렉트 HTTP 코드 |
| result.projectId | 선택 | string 또는 null | 프로젝트 ID |
| result.status | 선택 | string 또는 null | 상태. 값: ONLINE, DEGRADED, OFFLINE, NO_MONITOR, OPERATING_ERROR, DRAINING, PROVISIONING_ERROR, CREATING, UPDATING, DELETING, UNKNOWN |
| result.createdAt | 선택 | string (date-time) | 생성일시 |
| result.updatedAt | 선택 | string (date-time) | 수정일시 |
| result.rules | 선택 | array (object) | 연결된 규칙 목록 |


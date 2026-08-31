# TPN(사용자/그룹)에 할당된 역할 목록을 동기화

TPN(사용자/그룹)에 할당된 Role 목록을 동기화합니다.
- 기존 할당 중 요청에 없는 것은 삭제
- 요청에 있지만 기존에 없는 것은 생성
- 이미 존재하는 것은 skip
- 트랜잭션으로 처리: 전체 성공 또는 전체 실패

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authz/roles/assignments/sync
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| tpn | 필수 | string | TPN (사용자 또는 그룹). 길이 1~256 |
| orgId | 선택 | string | 조직 ID (생략 시 '*' = 플랫폼 전역). 기본값 "*". 길이 0~64 |
| projectId | 선택 | string 또는 null | 프로젝트 ID (선택 사항). 길이 1~64 |
| roleIds | 필수 | array (string) | 동기화할 Role ID 목록 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 400 Bad Request | 잘못된 요청 (존재하지 않는 Role ID 포함) |
| 422 Unprocessable Entity | Validation Error |
| 500 Internal Server Error | Internal Server Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | array (object) | 결과 데이터 |
| result[].assignmentId | 필수 | string | Assignment ID |
| result[].roleId | 필수 | string | Role ID |
| result[].roleName | 선택 | string 또는 null | Role 이름 |
| result[].roleType | 선택 | string 또는 null | Role 타입 (built-in: 시스템 정의, custom: 사용자 정의) |
| result[].operation | 필수 | string | 수행된 작업 (created: 생성됨, deleted: 삭제됨, skipped: 이미 존재하여 스킵) |
| result[].tpn | 필수 | string | TPN |
| result[].orgId | 선택 | string 또는 null | 조직 ID (SystemAdmin 등 플랫폼 레벨 Role은 null) |
| result[].projectId | 선택 | string 또는 null | 프로젝트 ID |
| result[].createdAt | 선택 | string 또는 null | Assignment 생성 시간 (삭제된 경우 null) |


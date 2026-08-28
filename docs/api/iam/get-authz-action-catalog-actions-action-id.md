# Action 상세 조회

특정 Action의 상세 정보를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/action-catalog/actions/{action_id}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| action_id | path | 필수 | string |  |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| actionId | 필수 | string | Action ID (thaki:{App}.{Category}.{Alias}) |
| app | 필수 | string | 애플리케이션 이름 (소문자) |
| category | 필수 | string | 카테고리 (PascalCase) |
| actionClass | 필수 | string | Action Class (List, Read, Write, Delete, Admin) |
| alias | 필수 | string | Alias (PascalCase, action_id의 일부) |
| apiMethod | 선택 | string 또는 null | HTTP 메서드 |
| apiPath | 선택 | string 또는 null | API 경로 |
| operationId | 선택 | string 또는 null | OpenAPI operationId |
| resourceType | 선택 | string 또는 null | 리소스 타입 (instance, network 등) |
| resourceIdParam | 선택 | string 또는 null | 리소스 ID 파라미터명 |
| resourceIdSource | 선택 | string 또는 null | 리소스 ID 출처 (path, query) |
| conditionParams | 선택 | array (string) | 정책 조건 파라미터 목록 |
| createdAt | 필수 | string 또는 null |  |
| createdBy | 필수 | string |  |
| updatedAt | 필수 | string 또는 null |  |
| updatedBy | 필수 | string |  |
| notes | 필수 | string 또는 null |  |
| catalogVersion | 필수 | string |  |


# Action 생성 (Admin)

Action을 생성합니다. 단일/다중 모두 지원합니다.

**단일 생성:**
```json
{"app": "Compute", "api_method": "GET", "api_path": "/v1/compute/flavors"}
```

**다중 생성:**
```json
{"actions": [{"app": "Compute", ...}, {"app": "Storage", ...}]}
```

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/action-catalog/actions
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| app | 필수 | string | 서비스/도메인 이름 (예: Compute, Storage) |
| category | 선택 | string 또는 null | 카테고리 (PascalCase, 미제공 시 apiPath에서 자동 생성). 길이 0~100 |
| alias | 선택 | string 또는 null | PascalCase 별칭 (자동 생성 시 생략). 길이 0~150 |
| apiMethod | 선택 | string 또는 null | HTTP 메서드 (GET, POST, PUT, PATCH, DELETE) |
| apiPath | 선택 | string 또는 null | API 경로 (예: /v1/compute/storage/volumes/{id}). 길이 0~500 |
| notes | 선택 | string 또는 null | 메모 |
| catalogVersion | 선택 | string | Catalog 버전. 기본값 "v1.0.0" |
| resourceType | 선택 | string 또는 null | 리소스 타입 (예: instance, network) |
| resourceIdParam | 선택 | string 또는 null | 리소스 ID를 추출할 파라미터 이름 (예: instanceId) |
| resourceIdSource | 선택 | string 또는 null | 리소스 ID의 소스 (path 또는 query) |
| conditionParams | 선택 | array (string) | 정책 조건으로 사용될 쿼리 파라미터 목록 (예: ["action", "force"]) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| total | 필수 | integer | 요청된 Action 총 개수 |
| created | 필수 | integer | 생성된 Action 개수 |
| failed | 필수 | integer | 실패한 개수 |
| actions | 선택 | array (object) | 생성된 Action 목록 |
| actions[].actionId | 필수 | string | Action ID (thaki:{App}.{Category}.{Alias}) |
| actions[].app | 필수 | string | 애플리케이션 이름 (소문자) |
| actions[].category | 필수 | string | 카테고리 (PascalCase) |
| actions[].actionClass | 필수 | string | Action Class (List, Read, Write, Delete, Admin) |
| actions[].alias | 필수 | string | Alias (PascalCase, action_id의 일부) |
| actions[].apiMethod | 선택 | string 또는 null | HTTP 메서드 |
| actions[].apiPath | 선택 | string 또는 null | API 경로 |
| actions[].operationId | 선택 | string 또는 null | OpenAPI operationId |
| actions[].resourceType | 선택 | string 또는 null | 리소스 타입 (instance, network 등) |
| actions[].resourceIdParam | 선택 | string 또는 null | 리소스 ID 파라미터명 |
| actions[].resourceIdSource | 선택 | string 또는 null | 리소스 ID 출처 (path, query) |
| actions[].conditionParams | 선택 | array (string) | 정책 조건 파라미터 목록 |
| actions[].createdAt | 필수 | string 또는 null |  |
| actions[].createdBy | 필수 | string |  |
| actions[].updatedAt | 필수 | string 또는 null |  |
| actions[].updatedBy | 필수 | string |  |
| actions[].notes | 필수 | string 또는 null |  |
| actions[].catalogVersion | 필수 | string |  |
| errors | 선택 | array (object) | 에러 상세 (index, error) |


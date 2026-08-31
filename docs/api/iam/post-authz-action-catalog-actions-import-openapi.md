# OpenAPI 스펙으로 액션 카탈로그 생성

OpenAPI 3.0 스펙을 파싱하여 Action Catalog를 자동 생성합니다. dry_run=true로 미리보기 가능.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/action-catalog/actions/import/openapi
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| openapiSpec | 필수 | object | OpenAPI 3.0 스펙 JSON |
| appName | 선택 | string 또는 null | App 이름 (미지정 시 자동 추출). 길이 1~100 |
| category | 선택 | string 또는 null | 카테고리 (PascalCase, 미지정 시 api_path에서 자동 생성). 길이 0~100 |
| dryRun | 선택 | boolean | 미리보기 모드 (실제 생성하지 않음). 기본값 false |
| overrideExisting | 선택 | boolean | 기존 Action 덮어쓰기 여부 (False면 스킵). 기본값 false |
| catalogVersion | 선택 | string 또는 null | 카탈로그 버전 (미지정 시 OpenAPI info.version 사용) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Dry run 성공 (미리보기) |
| 201 Created | 실제 생성 성공 |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| totalParsed | 필수 | integer | 파싱된 Action 총 개수 |
| created | 필수 | integer | 생성된 Action 개수 |
| skipped | 필수 | integer | 중복으로 스킵된 개수 |
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
| errors | 선택 | array (object) | 에러 상세 |
| errors[].actionId | 선택 | string 또는 null | Action ID |
| errors[].error | 필수 | string | 에러 메시지 |
| skippedDetails | 선택 | array (object) | 스킵 상세 |
| skippedDetails[].actionId | 필수 | string | Action ID |
| skippedDetails[].apiMethod | 선택 | string 또는 null | HTTP 메서드 |
| skippedDetails[].apiPath | 선택 | string 또는 null | API 경로 |
| skippedDetails[].operationId | 선택 | string 또는 null | OpenAPI operationId |
| skippedDetails[].reason | 필수 | string | 스킵 사유 |
| preview | 선택 | array (object) | dry_run=True 시 미리보기 데이터 |
| preview[].actionId | 필수 | string | Action ID |
| preview[].app | 필수 | string | 애플리케이션 이름 |
| preview[].category | 필수 | string | 카테고리 |
| preview[].actionClass | 필수 | string | Action Class |
| preview[].alias | 필수 | string | Alias |
| preview[].apiMethod | 선택 | string 또는 null | HTTP 메서드 |
| preview[].apiPath | 선택 | string 또는 null | API 경로 |
| preview[].operationId | 선택 | string 또는 null | OpenAPI operationId |
| preview[].notes | 선택 | string 또는 null | 설명 |
| preview[].resourceType | 선택 | string 또는 null | 리소스 타입 (예: instance) |
| preview[].resourceIdParam | 선택 | string 또는 null | 리소스 ID 파라미터 (예: instanceId) |
| preview[].resourceIdSource | 선택 | string 또는 null | 리소스 ID 소스 (path 또는 query) |
| preview[].conditionParams | 선택 | array (string) | 정책 조건 파라미터 |
| preview[].status | 필수 | string | 상태 (will_create, will_skip 등) |


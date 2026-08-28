# List Projects

OpenStack 프로젝트 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/projects
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| projectId | 선택 | string 또는 null | 프로젝트 ID 필터 (부분 일치). 프로젝트 ID 필터 (부분 일치) |
| projectName | 선택 | string 또는 null | 프로젝트 이름 필터 (부분 일치). 프로젝트 이름 필터 (부분 일치) |

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
| result | 필수 | object | 결과 데이터 |
| result.projects | 선택 | array (object) | 프로젝트 목록 |
| result.projects[].projectId | 필수 | string | 프로젝트 ID |
| result.projects[].name | 필수 | string | 프로젝트 이름 |
| result.projects[].domainId | 필수 | string | 도메인 ID |
| result.projects[].description | 선택 | string 또는 null | 프로젝트 설명 |
| result.projects[].enabled | 선택 | boolean | 활성화 여부. 기본값 true |
| result.projects[].isPrimary | 선택 | boolean | Primary Tenant 여부. 기본값 false |
| result.projects[].isDefault | 선택 | boolean | Default Tenant 여부. 기본값 false |


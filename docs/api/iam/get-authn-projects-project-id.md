# 프로젝트 상세 조회

특정 프로젝트의 상세 정보를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/projects/{project_id}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| project_id | path | 필수 | string | 프로젝트 ID. 프로젝트 ID. 길이 1~64 |

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
| result.projectId | 필수 | string | 프로젝트 ID |
| result.orgId | 필수 | string | 조직 ID |
| result.name | 필수 | string | 프로젝트명 |
| result.displayName | 선택 | string 또는 null | 프로젝트 표시명 |
| result.meta | 선택 | object 또는 null | 프로젝트 메타데이터 |
| result.status | 필수 | string | 프로젝트 상태 (active\|disabled\|deleted) |
| result.createdAt | 필수 | string (date-time) | 생성 시각 |
| result.updatedAt | 필수 | string (date-time) | 수정 시각 |
| result.deletedAt | 선택 | string (date-time) | 삭제 시각 |


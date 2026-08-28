# Create Security Group

Security Group을 생성합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/security-groups
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 필수 | string | Security Group 이름. 길이 1~255 |
| description | 선택 | string 또는 null | Security Group 설명. 길이 0~255 |
| origin | 선택 | string 또는 null | 생성 주체 origin |
| originName | 선택 | string 또는 null | 생성 주체 이름 |
| originId | 선택 | string 또는 null | 생성 주체 ID |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.id | 필수 | string |  |
| result.name | 필수 | string |  |
| result.description | 필수 | string 또는 null |  |
| result.stateful | 필수 | boolean |  |
| result.shared | 필수 | boolean |  |
| result.projectId | 필수 | string 또는 null |  |
| result.tenantId | 필수 | string 또는 null |  |
| result.createdAt | 필수 | string (date-time) |  |
| result.updatedAt | 필수 | string (date-time) |  |
| result.revisionNumber | 필수 | integer 또는 null |  |
| result.origin | 선택 | string | 기본값 "compute" |
| result.originName | 선택 | string 또는 null |  |
| result.originId | 선택 | string 또는 null |  |


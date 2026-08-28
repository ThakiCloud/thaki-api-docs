# 그룹 템플릿 생성

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/group-templates
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| scope | 필수 | string |  |
| relationId | 선택 | string 또는 null |  |
| templateKey | 필수 | string | 길이 1~64 |
| displayName | 선택 | string 또는 null |  |
| description | 선택 | string 또는 null |  |
| tags | 선택 | object 또는 null |  |

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
| result.templateId | 필수 | string |  |
| result.scope | 선택 | string | 기본값 "domain" |
| result.relationId | 선택 | string 또는 null |  |
| result.templateKey | 필수 | string |  |
| result.version | 선택 | integer | 기본값 1 |
| result.displayName | 선택 | string 또는 null |  |
| result.description | 선택 | string 또는 null |  |
| result.tags | 선택 | object 또는 null |  |


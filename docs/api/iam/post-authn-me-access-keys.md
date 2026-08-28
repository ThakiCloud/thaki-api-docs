# Access Key 발급

본인의 Access Key를 발급합니다. expires_at 필수.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/me/access-keys
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 선택 | string 또는 null | Key 이름. 길이 0~128 |
| expiresAt | 선택 | string (date-time) | 만료 시간 (ISO8601 UTC) |

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
| result.keyId | 필수 | string | Key ID |
| result.secret | 필수 | string | API Key secret (1회만 노출) |
| result.name | 선택 | string 또는 null | Key 이름 |
| result.description | 선택 | string 또는 null | Key 설명 (name alias) |
| result.expiresAt | 선택 | string 또는 null | 만료 시간 (ISO8601 UTC) |
| result.createdAt | 필수 | string | 생성 시간 (ISO8601 UTC) |


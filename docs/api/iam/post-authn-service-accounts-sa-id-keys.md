# Issue Api Key

API Key 발급

서비스 어카운트에 새로운 API Key를 발급합니다.
발급된 secret은 최초 1회만 반환되므로 안전하게 보관해야 합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/service-accounts/{sa_id}/keys
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| sa_id | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| Idempotency-Key | 선택 | string 또는 null |  |

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| description | 선택 | string 또는 null |  |
| expiresInDays | 선택 | integer 또는 null |  |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| keyId | 필수 | string |  |
| secret | 필수 | string |  |


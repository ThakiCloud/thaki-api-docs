# API Key로 내부 토큰 발급

User 또는 SA API Key를 검증하여 내부 토큰을 직접 발급합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/api-keys/exchange
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| keyId | 필수 | string | API Key ID (pak_ for user, sak_ for SA). 길이 1~128 |
| secret | 필수 | string | API Key secret. 길이 1~256 |
| durationSeconds | 선택 | integer 또는 null | 토큰 유효시간 (초). 기본 3600, 최대 86400 (24시간). 범위 60~86400 |

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
| result.accessToken | 필수 | string | 내부 액세스 토큰 |
| result.tokenType | 선택 | string | 토큰 타입. 기본값 "Bearer" |
| result.expiresIn | 필수 | integer | 토큰 유효시간 (초) |
| result.sid | 선택 | string 또는 null | 세션 ID |
| result.jti | 필수 | string | JWT ID |
| result.tpn | 선택 | string 또는 null | 사용자 TPN |
| result.principalType | 선택 | string | 주체 유형 (user \| service_account). 기본값 "user" |


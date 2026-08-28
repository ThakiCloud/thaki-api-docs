# Thaki Token JWKS

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/jwks
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| issuedAt | 필수 | string (date-time) | JWKS issuance timestamp |
| expiresAt | 필수 | string (date-time) | JWKS expiry timestamp |
| rolloverAfter | 필수 | integer | Rollover hint in seconds |
| keys | 필수 | array (object) | JWKS key set |
| keys[].kid | 필수 | string | Key identifier |
| keys[].kty | 필수 | string | Key type |
| keys[].use | 필수 | string | Intended use |
| keys[].alg | 필수 | string | Algorithm |
| keys[].n | 필수 | string | RSA modulus (base64url) |
| keys[].e | 필수 | string | RSA exponent (base64url) |
| keys[].status | 필수 | string | Key status |
| keys[].notBefore | 선택 | string (date-time) | Optional activation timestamp |
| keys[].expiresAt | 선택 | string (date-time) | Optional expiration timestamp |


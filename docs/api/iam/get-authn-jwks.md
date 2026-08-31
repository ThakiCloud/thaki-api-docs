# 토큰 검증 공개키(JWKS) 조회

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/public/jwks
```

## URI 매개변수

없습니다.

## 요청 헤더

이 API 는 인증 없이 호출합니다. 위 경로의 /public 접두를 그대로 사용하십시오. /public 없이 호출하면 게이트웨이가 자격증명을 요구해 401 을 반환합니다.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

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


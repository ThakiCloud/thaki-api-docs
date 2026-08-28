# 비밀번호 정책 조회 (Pre-Auth)

Pre-Auth 세션 또는 비밀번호 초기화 토큰을 사용하여 비밀번호 정책을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/pre-auth/password/policy
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| token | 선택 | string 또는 null | 비밀번호 초기화 토큰. 비밀번호 초기화 토큰 |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Session-ID | 선택 | string 또는 null |  |

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
| result.minLength | 필수 | integer | 최소 길이 |
| result.requireUppercase | 필수 | boolean | 대문자 필수 여부 |
| result.requireLowercase | 필수 | boolean | 소문자 필수 여부 |
| result.requireDigit | 필수 | boolean | 숫자 필수 여부 |
| result.requireSpecialChar | 필수 | boolean | 특수문자 필수 여부 |
| result.maxHistory | 필수 | integer | 히스토리 제한 |
| result.expiryDays | 선택 | integer 또는 null | 만료 일수 |


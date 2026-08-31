# 사용자 또는 SA API Key의 유효성을 검증

User 또는 SA API Key의 유효성을 검증합니다. key_id가 sak_ prefix면 SA, 없으면 User.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/public/api-keys/validate
```

## URI 매개변수

없습니다.

## 요청 헤더

이 API 는 인증 없이 호출합니다. 위 경로의 /public 접두를 그대로 사용하십시오. /public 없이 호출하면 게이트웨이가 자격증명을 요구해 401 을 반환합니다.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| keyId | 필수 | string | API Key ID (pak_ for user, sak_ for SA). 길이 1~128 |
| secret | 필수 | string | API Key secret. 길이 1~256 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.valid | 필수 | boolean | 유효 여부 |
| result.userTpn | 선택 | string 또는 null | 주체 TPN (user 또는 SA) |
| result.keyId | 선택 | string 또는 null | Key ID |
| result.name | 선택 | string 또는 null | Key 이름 |
| result.saId | 선택 | string 또는 null | SA ID (SA key인 경우) |
| result.principalType | 선택 | string 또는 null | 주체 유형 (user \| service_account) |
| result.expiresAt | 선택 | string 또는 null | 만료 시간 (ISO8601 UTC) |
| result.reason | 선택 | string 또는 null | 무효 사유 (invalid_credentials — 열거 공격 방지를 위해 통일된 사유) |


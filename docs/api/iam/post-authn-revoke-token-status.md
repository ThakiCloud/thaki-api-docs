# 토큰/세션 무효화 상태 조회

특정 토큰 또는 세션이 무효화되었는지 확인합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/revoke/token/status
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| jti | 선택 | string 또는 null | JWT ID |
| sessionId | 선택 | string 또는 null | 세션 ID |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| isRevoked | 필수 | boolean | 무효화 여부 |
| revokedAt | 선택 | string (date-time) | 무효화 시각 |
| reason | 선택 | string 또는 null | 무효화 사유 |
| revokedBy | 선택 | string 또는 null | 무효화 요청자 |


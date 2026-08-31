# 관리자가 특정 사용자의 비밀번호 초기화

관리자가 특정 사용자의 비밀번호를 초기화합니다.
사용자에게 비밀번호 초기화 이메일이 발송됩니다.

### 프로세스
1. Keycloak 비밀번호를 임시값으로 설정
2. IAM DB에 `force_password_change=true` 설정
3. 초기화 토큰 생성 및 Redis 저장 (24시간 유효)
4. 이메일 발송

### 권한
- 대상 사용자 org의 admin(authz introspection) 또는 시스템 어드민

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/users/{user_tpn}/password/reset
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| user_tpn | path | 필수 | string |  |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류) · 429(시도 제한 초과)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.message | 선택 | string | 응답 메시지. 기본값 "비밀번호 초기화 이메일이 전송되었습니다." |


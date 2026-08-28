# Validate User Password

비밀번호 정책 검증

비밀번호 변경 전에 정책 위배 여부를 미리 확인할 수 있습니다.
실제 비밀번호 변경 없이 검증만 수행합니다.

- `user_tpn`에 해당하는 사용자의 조직 정책을 기준으로 검증합니다.
- **권한**: 본인, 또는 대상 사용자 org의 admin(authz introspection) / 시스템 어드민

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/users/{user_tpn}/password/validate
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| user_tpn | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| password | 필수 | string | 검증할 비밀번호. 길이 1~ |

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
| result.valid | 필수 | boolean | 검증 통과 여부 |
| result.errors | 선택 | array (string) | 검증 실패 사유 목록 |


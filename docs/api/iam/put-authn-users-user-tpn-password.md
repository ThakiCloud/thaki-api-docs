# Patch User Password

사용자 비밀번호 변경

- `user_tpn`에 해당하는 사용자의 비밀번호를 변경합니다.
- `force_password_change` 플래그가 `True`인 경우, 비밀번호 변경 후 `False`로 업데이트합니다.
- **권한**: 본인, 또는 대상 사용자 org의 admin(authz introspection) / 시스템 어드민

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authn/users/{user_tpn}/password
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
| newPassword | 필수 | string | 새 비밀번호. 길이 1~ |

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
| result | 필수 | null | 결과 데이터 |


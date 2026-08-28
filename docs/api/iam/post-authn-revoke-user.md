# 사용자 전체 세션 무효화 (관리자용)

관리자가 특정 사용자(TPN)의 모든 활성 세션과 토큰을 무효화합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/revoke/user
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| userTpn | 필수 | string | 무효화할 사용자 TPN |
| reason | 선택 | string 또는 null | 무효화 사유. 길이 1~500 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | 무효화 성공 |
| 401 Unauthorized | 인증 실패 |
| 403 Forbidden | 권한 없음 (관리자 권한 필요) |
| 404 Not Found | 활성 세션을 찾을 수 없음 |
| 422 Unprocessable Entity | Validation Error |
| 500 Internal Server Error | 내부 서버 오류 |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.success | 필수 | boolean | 무효화 성공 여부 |
| result.revokedCount | 필수 | integer | 무효화된 토큰/세션 수 |
| result.revocationId | 선택 | string 또는 null | 무효화 ID (추적용) |
| result.affectedSessions | 선택 | array (string) | 영향받은 세션 ID 목록 |
| result.affectedTokens | 선택 | array (string) | 영향받은 토큰 jti 목록 |
| result.keycloakLogout | 선택 | string | Keycloak 로그아웃 상태 (success/failed/not_attempted). 기본값 "not_attempted" |
| result.stsNotified | 선택 | boolean | STS 알림 전송 여부. 기본값 false |
| result.message | 선택 | string 또는 null | 추가 메시지 |


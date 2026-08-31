# 무효화된 토큰/세션 목록 조회

무효화된 토큰/세션 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/revoke/denylist
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| user_tpn | 선택 | string 또는 null |  |
| session_id | 선택 | string 또는 null |  |
| from_date | 선택 | string 또는 null |  |
| to_date | 선택 | string 또는 null |  |
| reason | 선택 | string 또는 null |  |
| page | 선택 | integer | 기본값 1 |
| page_size | 선택 | integer | 기본값 20 |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| items | 선택 | array (object) | 목록 |
| items[].id | 필수 | integer | 내부 ID |
| items[].jti | 필수 | string | JWT ID |
| items[].sessionId | 선택 | string 또는 null | 세션 ID |
| items[].userTpn | 필수 | string | 사용자 TPN |
| items[].revocationType | 필수 | string | 무효화 타입 (session/token/user) |
| items[].reason | 필수 | string | 무효화 사유 |
| items[].revokedBy | 필수 | string | 무효화 요청자 |
| items[].revokedAt | 필수 | string (date-time) | 무효화 시각 |
| items[].expiresAt | 필수 | string (date-time) | 만료 시각 |
| total | 필수 | integer | 전체 개수 |
| page | 필수 | integer | 현재 페이지 |
| pageSize | 필수 | integer | 페이지 크기 |


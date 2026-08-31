# 사용자가 자신의 특정 세션을 강제로 종료

사용자가 자신의 특정 세션을 강제로 종료합니다. 자신의 세션만 취소할 수 있습니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/sessions/revoke
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sessionId | 필수 | string | 무효화할 세션 ID |
| reason | 선택 | string 또는 null | 무효화 사유. 길이 1~500 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | 세션 취소 성공 |
| 401 Unauthorized | 인증 실패 |
| 403 Forbidden | 권한 없음 (다른 사용자의 세션) |
| 404 Not Found | 세션을 찾을 수 없음 |
| 422 Unprocessable Entity | Validation Error |
| 500 Internal Server Error | 내부 서버 오류 |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |


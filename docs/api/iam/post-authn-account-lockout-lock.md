# 계정 수동 잠금

관리자가 특정 사용자 계정을 수동으로 잠급니다. 잠금된 계정은 로그인이 불가능하며, 계정 수정/삭제가 제한됩니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/account-lockout/lock
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| userTpn | 필수 | string | 사용자 TPN (예: tpn:kr:orgId::user/username). 길이 10~255 |
| reason | 선택 | string 또는 null | 잠금 사유. 길이 0~512 |

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
| result.success | 필수 | boolean | 잠금 성공 여부 |
| result.message | 필수 | string | 응답 메시지 |
| result.userTpn | 필수 | string | 사용자 TPN |
| result.lockedBy | 선택 | string 또는 null | 잠금 수행자 TPN |
| result.revokedSessionsCount | 선택 | integer | 무효화된 세션 수. 기본값 0 |


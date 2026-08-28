# 임시 역할 부여 생성

대상 주체에게 역할을 한시적으로 부여합니다. 관리자 인가는 AuthZ 평가로 검사합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/temporary-grants
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| tpn | 필수 | string | 대상 주체 TPN (user 또는 group). 길이 1~256 |
| roleId | 필수 | string | 부여할 Role ID. 길이 1~64 |
| reason | 필수 | string | 부여 사유(필수). 길이 1~ |
| orgId | 선택 | string 또는 null | 조직 ID. 길이 0~64 |
| projectId | 선택 | string 또는 null | 프로젝트 ID. 길이 0~64 |
| startsAt | 선택 | string (date-time) | 효력 시작 시각(미지정 시 현재 시각) |
| requestedDurationMinutes | 선택 | integer 또는 null | 요청 기간(분, 최소 15 / 최대 720). 범위 15~720 |
| expiresAt | 선택 | string (date-time) | 효력 종료 시각(duration 대신 지정 가능) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


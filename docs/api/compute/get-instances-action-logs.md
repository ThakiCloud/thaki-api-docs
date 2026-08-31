# 전체 인스턴스 액션 로그 조회

프로젝트 내 모든 인스턴스의 Action Log를 조회합니다 (상위 5개).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/instances/action-logs
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 조직·파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | array (object) | 결과 데이터 |
| result[].startTime | 선택 | string 또는 null | 시작 시간 |
| result[].resource | 필수 | string | 리소스 (instance 고정) |
| result[].action | 선택 | string 또는 null | 액션 |
| result[].target | 필수 | object | 대상 인스턴스 |
| result[].target.instanceId | 필수 | string | 인스턴스 ID |
| result[].target.instanceName | 선택 | string 또는 null | 인스턴스 이름 |


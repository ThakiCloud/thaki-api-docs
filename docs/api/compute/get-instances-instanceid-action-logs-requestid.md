# Get Instance Action Log Detail

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/instances/{instanceId}/action-logs/{requestId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| instanceId | path | 필수 | string | 인스턴스 ID |
| requestId | path | 필수 | string | 액션 로그 request_id |

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
| result | 필수 | object | 결과 데이터 |
| result.firstEventStartTime | 선택 | string 또는 null | 첫 이벤트 시작 시간 |
| result.lastEventFinishTime | 선택 | string 또는 null | 마지막 이벤트 종료 시간 |
| result.finalResult | 선택 | string 또는 null | 최종 결과 (Success \| Error) |
| result.events | 선택 | array (object) | 이벤트 목록 |
| result.events[].event | 선택 | string 또는 null | 이벤트 |
| result.events[].result | 선택 | string 또는 null | 결과 |
| result.events[].startTime | 선택 | string 또는 null | 시작 시간 |
| result.events[].finishTime | 선택 | string 또는 null | 종료 시간 |


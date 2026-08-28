# Get Instance Action Log Detail

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/instances/{instanceId}/action-logs/{requestId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| instanceId | path | 필수 | string | 인스턴스 ID. 인스턴스 ID |
| requestId | path | 필수 | string | 액션 로그 request_id. 액션 로그 request_id |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Project-Id | 선택 | string 또는 null | OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중). OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중) |
| X-Partition-Id | 선택 | string 또는 null | 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일). 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일) |

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
| result.firstEventStartTime | 선택 | string 또는 null | 첫 이벤트 시작 시간 |
| result.lastEventFinishTime | 선택 | string 또는 null | 마지막 이벤트 종료 시간 |
| result.finalResult | 선택 | string 또는 null | 최종 결과 (Success \| Error) |
| result.events | 선택 | array (object) | 이벤트 목록 |
| result.events[].event | 선택 | string 또는 null | 이벤트 |
| result.events[].result | 선택 | string 또는 null | 결과 |
| result.events[].startTime | 선택 | string 또는 null | 시작 시간 |
| result.events[].finishTime | 선택 | string 또는 null | 종료 시간 |


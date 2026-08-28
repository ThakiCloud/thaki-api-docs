# Get Instance Cpu Utilization

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/instances/{instanceId}/metrics/cpu-utilization
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| instanceId | path | 필수 | string | 인스턴스 ID. 인스턴스 ID |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| start | 필수 | integer | 조회 시작 시각 (unix epoch seconds 또는 ISO 8601). 조회 시작 시각 (unix epoch seconds 또는 ISO 8601) |
| end | 선택 | integer 또는 null | 조회 종료 시각 (unix epoch seconds 또는 ISO 8601). 조회 종료 시각 (unix epoch seconds 또는 ISO 8601) |

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
| result.unit | 필수 | string | 단위 (percent) |
| result.instanceId | 필수 | string | 인스턴스 ID |
| result.series | 선택 | array (object) | 시계열 series 목록 |
| result.series[].values | 선택 | array (object) | 시계열 값 목록 |
| result.series[].values[].timestamp | 필수 | integer | epoch seconds |
| result.series[].values[].value | 필수 | number | 값 |


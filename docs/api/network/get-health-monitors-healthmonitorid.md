# Health Monitor 조회

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/health-monitors/{healthMonitorId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| healthMonitorId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result.id | 필수 | string |  |
| result.type | 필수 | string |  |
| result.delay | 필수 | integer |  |
| result.timeout | 필수 | integer |  |
| result.maxRetries | 필수 | integer |  |
| result.adminStateUp | 필수 | boolean |  |
| result.projectId | 필수 | string 또는 null |  |
| result.name | 필수 | string 또는 null |  |
| result.maxRetriesDown | 필수 | integer 또는 null |  |
| result.httpMethod | 필수 | string 또는 null |  |
| result.urlPath | 필수 | string 또는 null |  |
| result.expectedCodes | 필수 | string 또는 null |  |
| result.httpVersion | 필수 | string 또는 null |  |
| result.domainName | 필수 | string 또는 null |  |
| result.status | 필수 | string 또는 null | Octavia 리소스 상태. OpenStack Octavia의 operating_status와 provisioning_status를 비즈니스 관점의 단일 상태로 통합한 Enum.. 값: ONLINE, DEGRADED, OFFLINE, NO_MONITOR, OPERATING_ERROR, DRAINING, PROVISIONING_ERROR, CREATING, UPDATING, DELETING, UNKNOWN |
| result.createdAt | 필수 | string (date-time) |  |
| result.updatedAt | 필수 | string (date-time) |  |
| result.pools | 필수 | array (object) |  |
| result.tenantId | 필수 | string 또는 null |  |


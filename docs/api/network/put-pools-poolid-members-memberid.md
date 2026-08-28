# Member 수정

Pool Member를 수정합니다.

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/network/pools/{poolId}/members/{memberId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| poolId | path | 필수 | string |  |
| memberId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| weight | 선택 | integer 또는 null | 가중치. 범위 0~ |
| adminStateUp | 선택 | boolean 또는 null | 관리자 상태 |
| name | 선택 | string 또는 null | 멤버 이름 |
| monitorAddress | 선택 | string 또는 null | 모니터링 주소 |
| monitorPort | 선택 | integer 또는 null | 모니터링 포트. 범위 1~65535 |
| backup | 선택 | boolean 또는 null | 백업 멤버 여부 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌·사용 중) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.id | 필수 | string |  |
| result.address | 필수 | string |  |
| result.protocolPort | 필수 | integer |  |
| result.weight | 필수 | integer |  |
| result.adminStateUp | 필수 | boolean |  |
| result.subnetId | 필수 | string 또는 null |  |
| result.name | 필수 | string 또는 null |  |
| result.projectId | 필수 | string 또는 null |  |
| result.monitorAddress | 필수 | string 또는 null |  |
| result.monitorPort | 필수 | integer 또는 null |  |
| result.backup | 필수 | boolean 또는 null |  |
| result.status | 필수 | string 또는 null | Octavia 리소스 상태. OpenStack Octavia의 operating_status와 provisioning_status를 비즈니스 관점의 단일 상태로 통합한 Enum. 값: ONLINE, DEGRADED, OFFLINE, NO_MONITOR, OPERATING_ERROR, DRAINING, PROVISIONING_ERROR, CREATING, UPDATING, DELETING, UNKNOWN |
| result.createdAt | 필수 | string (date-time) |  |
| result.updatedAt | 필수 | string (date-time) |  |


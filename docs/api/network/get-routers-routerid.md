# Get Router

라우터 단건을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/routers/{routerId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| routerId | path | 필수 | string |  |

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
| result.id | 선택 | string 또는 null |  |
| result.name | 선택 | string 또는 null |  |
| result.description | 선택 | string 또는 null |  |
| result.projectId | 선택 | string 또는 null |  |
| result.status | 선택 | string 또는 null | 라우터 상태.. 값: ACTIVE, ERROR |
| result.adminStateUp | 선택 | boolean 또는 null |  |
| result.enableDefaultRouteEcmp | 선택 | boolean 또는 null |  |
| result.enableDefaultRouteBfd | 선택 | boolean 또는 null |  |
| result.availabilityZones | 선택 | array (string) |  |
| result.availabilityZoneHints | 선택 | array (string) |  |
| result.routes | 선택 | array (object) |  |
| result.routes[].destination | 선택 | string 또는 null |  |
| result.routes[].nexthop | 선택 | string 또는 null |  |
| result.externalGatewayInfo | 선택 | object 또는 null | 외부 게이트웨이 응답. |
| result.externalGatewayInfo.networkId | 선택 | string 또는 null |  |
| result.externalGatewayInfo.networkName | 선택 | string 또는 null |  |
| result.externalGatewayInfo.enableSnat | 선택 | boolean 또는 null |  |
| result.externalGatewayInfo.externalFixedIps | 선택 | array (object) |  |
| result.externalGatewayInfo.externalFixedIps[].subnetId | 선택 | string 또는 null |  |
| result.externalGatewayInfo.externalFixedIps[].subnetName | 선택 | string 또는 null |  |
| result.externalGatewayInfo.externalFixedIps[].ipAddress | 선택 | string 또는 null |  |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |
| result.revisionNumber | 선택 | integer 또는 null |  |
| result.tenantId | 선택 | string 또는 null |  |
| result.hasInterfaces | 선택 | boolean | 기본값 false |


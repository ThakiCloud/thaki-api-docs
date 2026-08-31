# 네트워크 수정

네트워크를 수정합니다.

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/network/networks/{networkId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| networkId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| name | 선택 | string 또는 null |  |
| description | 선택 | string 또는 null |  |
| adminStateUp | 선택 | boolean 또는 null |  |
| portSecurityEnabled | 선택 | boolean 또는 null |  |

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
| result.id | 선택 | string 또는 null |  |
| result.name | 선택 | string 또는 null |  |
| result.projectId | 선택 | string 또는 null |  |
| result.description | 선택 | string 또는 null |  |
| result.status | 선택 | string 또는 null | 네트워크 상태. 값: ACTIVE, DOWN, BUILDING, ERROR |
| result.adminStateUp | 선택 | boolean 또는 null |  |
| result.shared | 선택 | boolean 또는 null |  |
| result.routerExternal | 선택 | boolean 또는 null |  |
| result.portSecurityEnabled | 선택 | boolean 또는 null |  |
| result.isDefault | 선택 | boolean 또는 null |  |
| result.mtu | 선택 | integer 또는 null |  |
| result.availabilityZones | 선택 | array (string) |  |
| result.availabilityZoneHints | 선택 | array (string) |  |
| result.ipv4AddressScope | 선택 | string 또는 null |  |
| result.ipv6AddressScope | 선택 | string 또는 null |  |
| result.revisionNumber | 선택 | integer 또는 null |  |
| result.tenantId | 선택 | string 또는 null |  |
| result.providerNetworkType | 선택 | string 또는 null |  |
| result.providerPhysicalNetwork | 선택 | string 또는 null |  |
| result.providerSegmentationId | 선택 | integer 또는 null |  |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |


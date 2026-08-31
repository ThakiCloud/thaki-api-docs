# 네트워크 목록 조회

네트워크 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/networks
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| status | 선택 | array (string) | 네트워크 상태 필터 (복수 선택 시 OR) |
| name | 선택 | array (string) | 네트워크 이름 필터 |
| id | 선택 | array (string) | 네트워크 ID 필터 |
| description | 선택 | array (string) | 설명 필터 |
| subnetCidr | 선택 | array (string) | 서브넷 CIDR 필터 |
| external | 선택 | boolean 또는 null | 외부 네트워크 필터 |
| shared | 선택 | boolean 또는 null | 공유 네트워크 필터 |
| adminStateUp | 선택 | boolean 또는 null | 관리 상태 필터 |
| portSecurity | 선택 | boolean 또는 null | 포트 시큐리티 필터 |
| isCurrentTenant | 선택 | boolean 또는 null | 현재 테넌트 여부 필터 |
| createdAtGte | 선택 | string 또는 null | 생성 일시 시작 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtLte | 선택 | string 또는 null | 생성 일시 종료 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtRange | 선택 | array (string) | 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨 |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼. 값: createdAt, name, id |
| order | 선택 | string | 정렬 방향 asc/desc. 값: asc, desc |
| scope | 선택 | string | 조회 스코프 (tenant/shared/external/all). 값: tenant, shared, external, all |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].id | 선택 | string 또는 null |  |
| result.data[].name | 선택 | string 또는 null |  |
| result.data[].projectId | 선택 | string 또는 null |  |
| result.data[].description | 선택 | string 또는 null |  |
| result.data[].status | 선택 | string 또는 null | 네트워크 상태. 값: ACTIVE, DOWN, BUILDING, ERROR |
| result.data[].adminStateUp | 선택 | boolean 또는 null |  |
| result.data[].shared | 선택 | boolean 또는 null |  |
| result.data[].routerExternal | 선택 | boolean 또는 null |  |
| result.data[].portSecurityEnabled | 선택 | boolean 또는 null |  |
| result.data[].isDefault | 선택 | boolean 또는 null |  |
| result.data[].mtu | 선택 | integer 또는 null |  |
| result.data[].subnets | 선택 | array (object) |  |
| result.data[].subnets[].id | 필수 | string |  |
| result.data[].subnets[].name | 선택 | string 또는 null |  |
| result.data[].subnets[].cidr | 필수 | string |  |
| result.data[].subnets[].ipVersion | 필수 | integer |  |
| result.data[].subnets[].gatewayIp | 선택 | string 또는 null |  |
| result.data[].subnets[].dnsNameservers | 선택 | array (string) |  |
| result.data[].availabilityZones | 선택 | array (string) |  |
| result.data[].availabilityZoneHints | 선택 | array (string) |  |
| result.data[].ipv4AddressScope | 선택 | string 또는 null |  |
| result.data[].ipv6AddressScope | 선택 | string 또는 null |  |
| result.data[].revisionNumber | 선택 | integer 또는 null |  |
| result.data[].tenantId | 선택 | string 또는 null |  |
| result.data[].providerNetworkType | 선택 | string 또는 null |  |
| result.data[].providerPhysicalNetwork | 선택 | string 또는 null |  |
| result.data[].providerSegmentationId | 선택 | integer 또는 null |  |
| result.data[].createdAt | 선택 | string (date-time) |  |
| result.data[].updatedAt | 선택 | string (date-time) |  |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


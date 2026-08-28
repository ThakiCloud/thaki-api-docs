# Download Ports

포트 목록을 CSV로 다운로드합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/ports/export/csv
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| status | 선택 | array (string) | 포트 상태 필터 (복수 선택 시 OR). 포트 상태 필터 (복수 선택 시 OR) |
| name | 선택 | array (string) | 포트 이름 필터. 포트 이름 필터 |
| description | 선택 | array (string) | 포트 설명 필터. 포트 설명 필터 |
| id | 선택 | array (string) | 포트 ID 필터. 포트 ID 필터 |
| deviceId | 선택 | array (string) | 디바이스 ID 필터 (예: 라우터 ID). 디바이스 ID 필터 (예: 라우터 ID) |
| deviceOwner | 선택 | array (string) | 디바이스 Owner 필터 (instance/load_balancer/router_interface/router_gateway/floating_ip/dhcp_agent/others/unbounded). 디바이스 Owner 필터 (instance/load_balancer/router_interface/router_gateway/floating_ip/dhcp_agent/others/unbounded) |
| subnetId | 선택 | string 또는 null | 서브넷 ID 필터 (해당 서브넷에 fixed IP가 있는 포트만 조회). 서브넷 ID 필터 (해당 서브넷에 fixed IP가 있는 포트만 조회) |
| networkName | 선택 | array (string) | 포트 네트워크 이름 필터. 포트 네트워크 이름 필터 |
| securityGroupName | 선택 | array (string) | 보안 그룹 이름 필터. 보안 그룹 이름 필터 |
| securityGroupId | 선택 | array (string) | 보안 그룹 ID 필터. 보안 그룹 ID 필터 |
| fixedIp | 선택 | array (string) | 포트 고정 IP 필터. 포트 고정 IP 필터 |
| floatingIp | 선택 | array (string) | 포트에 연결된 Floating IP 필터. 포트에 연결된 Floating IP 필터 |
| macAddress | 선택 | array (string) | MAC 주소 필터. MAC 주소 필터 |
| adminStateUp | 선택 | boolean 또는 null | 관리 상태(admin_state_up) 필터. 관리 상태(admin_state_up) 필터 |
| portSecurityEnabled | 선택 | array (boolean) | 포트 시큐리티 활성화 여부 필터(복수 지정 시 OR). 포트 시큐리티 활성화 여부 필터(복수 지정 시 OR) |
| createdAtGte | 선택 | string 또는 null | 생성 일시 시작 필터 (포함), ISO8601 YYYY-MM-DD. 생성 일시 시작 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtLte | 선택 | string 또는 null | 생성 일시 종료 필터 (포함), ISO8601 YYYY-MM-DD. 생성 일시 종료 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtRange | 선택 | array (string) | 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨. 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨 |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼. 정렬 대상 컬럼. 값: createdAt, name, id, networkName, connectable |
| order | 선택 | string | 정렬 방향 asc/desc. 정렬 방향 asc/desc. 값: asc, desc |
| networkId | 선택 | string 또는 null | 포트 네트워크 ID 필터 (단일값). 포트 네트워크 ID 필터 (단일값) |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | CSV 파일 다운로드 |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


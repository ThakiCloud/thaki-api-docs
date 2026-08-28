# Download Floating Ips

Floating IP 목록을 CSV로 다운로드합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/floating-ips/export/csv
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| status | 선택 | array (string) | Floating IP 상태 필터 (복수 선택 시 OR). Floating IP 상태 필터 (복수 선택 시 OR) |
| floatingIpAddress | 선택 | array (string) | Floating IP 주소 필터. Floating IP 주소 필터 |
| deviceType | 선택 | array (string) | 연결된 리소스 타입 필터 (INSTANCE/LOAD_BALANCER/PORT/OTHERS/UNBOUNDED). 연결된 리소스 타입 필터 (INSTANCE/LOAD_BALANCER/PORT/OTHERS/UNBOUNDED) |
| deviceName | 선택 | array (string) | 연결된 디바이스 이름 필터. 연결된 디바이스 이름 필터 |
| deviceId | 선택 | array (string) | 연결된 디바이스 ID 필터 (예: 인스턴스 ID, 로드밸런서 ID). 연결된 디바이스 ID 필터 (예: 인스턴스 ID, 로드밸런서 ID) |
| fixedIpAddress | 선택 | array (string) | 고정 IP 주소 필터. 고정 IP 주소 필터 |
| floatingNetworkId | 선택 | array (string) | Floating 네트워크 ID 필터. Floating 네트워크 ID 필터 |
| floatingNetworkName | 선택 | array (string) | Floating 네트워크 이름 필터. Floating 네트워크 이름 필터 |
| createdAtGte | 선택 | string 또는 null | 생성 일시 시작 필터 (포함), ISO8601 YYYY-MM-DD. 생성 일시 시작 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtLte | 선택 | string 또는 null | 생성 일시 종료 필터 (포함), ISO8601 YYYY-MM-DD. 생성 일시 종료 필터 (포함), ISO8601 YYYY-MM-DD |
| createdAtRange | 선택 | array (string) | 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨. 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨 |
| id | 선택 | array (string) | Floating IP ID 필터. Floating IP ID 필터 |
| description | 선택 | array (string) | 설명 필터. 설명 필터 |
| origin | 선택 | array (string) | Floating IP 생성 주체 origin 필터. Floating IP 생성 주체 origin 필터 |
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼. 정렬 대상 컬럼. 값: floatingIp, fixedIp, network, createdAt, id, description, connectable |
| order | 선택 | string | 정렬 방향 asc/desc. 정렬 방향 asc/desc. 값: asc, desc |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | CSV 파일 다운로드 |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


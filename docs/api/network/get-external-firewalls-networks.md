# List External Networks

방화벽 부착 대상 external network 목록을 has_firewall과 함께 조회합니다.

이미 방화벽이 있는(``has_firewall=true``) 네트워크는 새 방화벽을 붙일 수
없으므로 UI에서 비활성화한다. status/name/id/subnetCidr 필터와 name 정렬을
지원한다(필터/정렬은 표준 network 목록과 동일하게 동작).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/external-firewalls/networks
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼 (name). 값: name |
| order | 선택 | string | 정렬 방향 asc/desc. 값: asc, desc |
| status | 선택 | array (string) | 네트워크 상태 필터 (ACTIVE/DOWN/ERROR 등, 복수 선택 시 OR) |
| name | 선택 | array (string) | 이름 부분검색 필터 |
| id | 선택 | array (string) | 네트워크 ID 부분검색 필터 |
| subnetCidr | 선택 | array (string) | 서브넷 CIDR 부분검색 필터 |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다.

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
| result.data[].networkId | 필수 | string |  |
| result.data[].name | 선택 | string 또는 null |  |
| result.data[].shared | 선택 | boolean | 기본값 false |
| result.data[].status | 선택 | string 또는 null | 네트워크 상태. 값: ACTIVE, DOWN, BUILDING, ERROR |
| result.data[].hasFirewall | 선택 | boolean | 기본값 false |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


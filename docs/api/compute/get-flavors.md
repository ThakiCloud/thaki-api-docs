# List Flavors

Flavor 목록을 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/flavors
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sort | 선택 | string | 정렬 필드. 값: flavorName, flavorId, cpuCount, ram, disk |
| order | 선택 | string | 정렬 방향. 값: asc, desc |
| flavorType | 필수 | string | Flavor 타입 (cpu/gpu/npu/bareMetal). 값: cpu, gpu, npu, bareMetal |
| flavorId | 선택 | array (string) | Flavor ID 필터 (부분 일치, 다중 값 OR) |
| flavorName | 선택 | array (string) | Flavor 이름 필터 (부분 일치, 다중 값 OR) |
| extraSpec | 선택 | array (string) | extra_specs 검색 필터 (key/value 구분 없음, 부분 일치, 다중 값 OR) |
| cpuCount | 선택 | array (integer) | CPU 수 필터 (완전 일치, 다중 값 OR) |
| cpuCountGte | 선택 | integer 또는 null | CPU 수 이상 필터 (vCPU &gt;= N). Container 서비스에서 호출. 범위 0~ |
| ram | 선택 | array (number) | RAM 크기 필터 GiB 단위 (완전 일치, 다중 값 OR) |
| disk | 선택 | array (integer) | Disk 필터 GiB 단위 (완전 일치, 다중 값 OR) |
| isPublic | 선택 | boolean 또는 null | 공개 여부 필터 (true/false) |
| pool | 선택 | array (string) | AZ pool 필터 (shared/dedicated/gpu 등, 완전 일치, 다중 값 OR). instance 생성 시 선택 AZ에 맞는 flavor만 노출하기 위해 사용. |
| page | 선택 | integer | 페이지 번호 (0이면 전체 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 10. 범위 1~ |

## 요청 헤더

인증 헤더와 조직·파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result.data[].basicInfo | 필수 | object | Flavor 기본 정보 응답 |
| result.data[].basicInfo.flavorId | 필수 | string | Flavor ID |
| result.data[].basicInfo.flavorName | 필수 | string | Flavor 이름 |
| result.data[].basicInfo.category | 선택 | string 또는 null | Flavor 카테고리 (cpu, gpu, npu, bareMetal, 미분류=null) |
| result.data[].specInfo | 필수 | object | Flavor 스펙 정보 응답 |
| result.data[].specInfo.cpuCount | 필수 | integer | vCPU 수 |
| result.data[].specInfo.ram | 필수 | number | RAM 크기 (GiB) |
| result.data[].specInfo.disk | 필수 | integer | 루트 디스크 크기 (GiB) |
| result.data[].specInfo.ephemeralDisk | 필수 | integer | Ephemeral 디스크 크기 (GiB) |
| result.data[].specInfo.swapDisk | 필수 | number | Swap 디스크 크기 (GiB) |
| result.data[].securityInfo | 필수 | object | Flavor 보안 정보 응답 |
| result.data[].securityInfo.isPublic | 필수 | boolean | 공개 여부 (is_public) |
| result.data[].extraSpec | 선택 | object | Flavor extra_specs (OpenStack extra_specs 원본) |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


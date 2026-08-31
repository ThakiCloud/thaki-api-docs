# 방화벽에 속한 허용 규칙 목록 조회

방화벽에 속한 허용 규칙 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/external-firewalls/{firewallId}/rules
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| firewallId | path | 필수 | string |  |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 조회 페이지 번호 (0=전체). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string | 정렬 대상 컬럼. 값: id, firewallId, status, createdAt, updatedAt, syncedAt |
| order | 선택 | string | 정렬 방향 asc/desc. 값: asc, desc |
| id | 선택 | array (string) | 규칙 ID 필터 |
| firewallId | 선택 | array (string) | 방화벽 ID 필터 |
| srcCidr | 선택 | array (string) | Source CIDR 필터 |
| dstCidr | 선택 | array (string) | Dest CIDR 필터 |
| protocol | 선택 | array (string) | protocol 필터 |
| status | 선택 | array (string) | 상태 필터 (CREATING/ACTIVE/DELETING/ERROR, 복수 선택 시 OR) |
| projectId | 선택 | array (string) | 프로젝트 ID 필터 |
| lastCorrelationId | 선택 | array (string) | 마지막 correlation ID 필터 |
| createdAtGte | 선택 | string 또는 null | 생성일시 시작 |
| createdAtLte | 선택 | string 또는 null | 생성일시 종료 |
| createdAtRange | 선택 | array (string) | 생성 일시 구간 필터 (복수 선택 시 OR). 형식 'YYYY-MM-DD..YYYY-MM-DD' (열린 구간 'a..'/'..b' 허용). 지정 시 created_at_gte/lte 는 무시됨 |
| updatedAtGte | 선택 | string 또는 null | 수정일시 시작 |
| updatedAtLte | 선택 | string 또는 null | 수정일시 종료 |

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
| result.data[].id | 필수 | string |  |
| result.data[].firewallId | 필수 | string |  |
| result.data[].action | 필수 | string | 규칙 ACL action. allow-related는 사용자/서비스 허용 규칙, drop은 방화벽 기본 전체 차단(default-deny) 규칙에 쓴다. 둘 다 동일한 AWX 템플릿(ext-fw-rule-create)으로 action만 달리 보낸다. 값: allow-related, drop |
| result.data[].status | 필수 | string | API 노출용 방화벽/규칙 상태 (다른 status API와 동일한 대문자 값). 내부 lifecycle(ProvisioningStatus)을 사용자 관점 상태로 축약해 노출한다. CREATING(생성 요청됨) / ACTIVE(실제 적용 완료) / DELETING(삭제 요청됨)이 확정된 기준이며, 재시도/확인을 위해 행이 남는 생성 실패(create_failed)는 ERROR로 노출한다. 값: CREATING, ACTIVE, DELETING, ERROR |
| result.data[].desiredRevision | 필수 | integer |  |
| result.data[].appliedRevision | 필수 | integer |  |
| result.data[].isDefault | 선택 | boolean | 기본값 false |
| result.data[].externalNetworkId | 선택 | string 또는 null |  |
| result.data[].srcCidr | 선택 | string 또는 null |  |
| result.data[].dstCidr | 선택 | string 또는 null |  |
| result.data[].srcPort | 선택 | string 또는 null |  |
| result.data[].dstPort | 선택 | string 또는 null |  |
| result.data[].protocol | 선택 | string 또는 null |  |
| result.data[].domainName | 선택 | string 또는 null |  |
| result.data[].lastMessageId | 선택 | string 또는 null |  |
| result.data[].lastCorrelationId | 선택 | string 또는 null |  |
| result.data[].lastErrorMessage | 선택 | string 또는 null |  |
| result.data[].rawData | 선택 | object 또는 null |  |
| result.data[].syncedAt | 선택 | string (date-time) |  |
| result.data[].deletedAt | 선택 | string (date-time) |  |
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


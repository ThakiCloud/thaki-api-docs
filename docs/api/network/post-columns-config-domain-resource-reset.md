# 테이블 컬럼 설정 기본값 초기화

domain/resource 기반 테이블 컬럼 설정을 기본값으로 초기화합니다. 저장된 사용자 설정을 삭제하고 기본 컬럼 설정을 반환합니다.

현재 지원되는 domain/resource 조합:
- network/networks-tenant
- network/networks-shared
- network/networks-external
- network/admin-networks
- network/routers
- network/admin-routers
- network/floating-ips
- network/admin-floating-ips
- network/security-groups
- network/admin-security-groups
- network/load-balancers
- network/admin-load-balancers
- network/certificates

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/columns-config/{domain}/{resource}/reset
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| domain | path | 필수 | string | 도메인 (현재: network). 도메인 (현재: network) |
| resource | path | 필수 | string | 리소스 (상세 목록은 설명 참조). 리소스 (상세 목록은 설명 참조) |

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
| result.domain | 필수 | string |  |
| result.resource | 필수 | string |  |
| result.schemaVersion | 필수 | integer |  |
| result.pageSize | 필수 | integer |  |
| result.columns | 필수 | array (object) |  |
| result.columns[].key | 필수 | string |  |
| result.columns[].visible | 필수 | boolean |  |
| result.columns[].order | 필수 | integer |  |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |


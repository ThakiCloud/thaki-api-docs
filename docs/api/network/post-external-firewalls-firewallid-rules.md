# Create Firewall Rule

허용 규칙(allow-related ACL) 생성 요청을 접수합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/external-firewalls/{firewallId}/rules
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| firewallId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| srcCidr | 선택 | string 또는 null | 허용할 source CIDR (미지정/ANY 시 절 생략) |
| dstCidr | 선택 | string 또는 null | 허용할 목적지 CIDR (미지정/ANY 시 절 생략) |
| srcPort | 선택 | string 또는 null | 소스 포트 (1-65535) 또는 ANY |
| dstPort | 선택 | string 또는 null | 목적지 포트 (1-65535) 또는 ANY |
| protocol | 선택 | string 또는 null | tcp/udp/sctp/icmp4/icmp6 등 또는 ANY (포트 사용 시 tcp/udp/sctp) |
| rawData | 선택 | object 또는 null | 전담 서비스 전달용 부가 데이터 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 202 Accepted | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 202

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.id | 필수 | string |  |
| result.firewallId | 필수 | string |  |
| result.action | 필수 | string | 규칙 ACL action. allow-related는 사용자/서비스 허용 규칙, drop은 방화벽 기본 전체 차단(default-deny) 규칙에 쓴다. 둘 다 동일한 AWX 템플릿(ext-fw-rule-create)으로 action만 달리 보낸다.. 값: allow-related, drop |
| result.status | 필수 | string | API 노출용 방화벽/규칙 상태 (다른 status API와 동일한 대문자 값). 내부 lifecycle(ProvisioningStatus)을 사용자 관점 상태로 축약해 노출한다. CREATING(생성 요청됨) / ACTIVE(실제 적용 완료) / DELETING(삭제 요청됨)이 확정된 기준이며, 재시도/확인을 위해 행이 남는 생성 실패(create_failed)는 ERROR로 노출한다.. 값: CREATING, ACTIVE, DELETING, ERROR |
| result.desiredRevision | 필수 | integer |  |
| result.appliedRevision | 필수 | integer |  |
| result.isDefault | 선택 | boolean | 기본값 false |
| result.externalNetworkId | 선택 | string 또는 null |  |
| result.srcCidr | 선택 | string 또는 null |  |
| result.dstCidr | 선택 | string 또는 null |  |
| result.srcPort | 선택 | string 또는 null |  |
| result.dstPort | 선택 | string 또는 null |  |
| result.protocol | 선택 | string 또는 null |  |
| result.domainName | 선택 | string 또는 null |  |
| result.lastMessageId | 선택 | string 또는 null |  |
| result.lastCorrelationId | 선택 | string 또는 null |  |
| result.lastErrorMessage | 선택 | string 또는 null |  |
| result.rawData | 선택 | object 또는 null |  |
| result.syncedAt | 선택 | string (date-time) |  |
| result.deletedAt | 선택 | string (date-time) |  |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |


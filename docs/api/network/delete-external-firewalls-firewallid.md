# 방화벽 전체(drop + allow) 삭제 요청을 접수

방화벽 전체(drop + allow) 삭제 요청을 접수합니다.

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/network/external-firewalls/{firewallId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| firewallId | path | 필수 | string |  |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 202 Accepted | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌·사용 중) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 202

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.id | 필수 | string |  |
| result.name | 필수 | string |  |
| result.externalNetworkId | 필수 | string |  |
| result.externalNetworkName | 선택 | string 또는 null |  |
| result.ruleCount | 선택 | integer 또는 null |  |
| result.status | 필수 | string | API 노출용 방화벽/규칙 상태 (다른 status API와 동일한 대문자 값). 내부 lifecycle(ProvisioningStatus)을 사용자 관점 상태로 축약해 노출한다. CREATING(생성 요청됨) / ACTIVE(실제 적용 완료) / DELETING(삭제 요청됨)이 확정된 기준이며, 재시도/확인을 위해 행이 남는 생성 실패(create_failed)는 ERROR로 노출한다. 값: CREATING, ACTIVE, DELETING, ERROR |
| result.desiredRevision | 필수 | integer |  |
| result.appliedRevision | 필수 | integer |  |
| result.description | 선택 | string 또는 null |  |
| result.domainName | 선택 | string 또는 null |  |
| result.lastMessageId | 선택 | string 또는 null |  |
| result.lastCorrelationId | 선택 | string 또는 null |  |
| result.lastErrorMessage | 선택 | string 또는 null |  |
| result.rawData | 선택 | object 또는 null |  |
| result.syncedAt | 선택 | string (date-time) |  |
| result.deletedAt | 선택 | string (date-time) |  |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |


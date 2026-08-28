# Access Key 목록 조회

본인의 Access Key 목록을 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/me/access-keys
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sortBy | 선택 | string 또는 null | 정렬 필드 |
| sortOrder | 선택 | string 또는 null | 정렬 방향 (asc/desc) |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result | 필수 | object | 결과 데이터 |
| result.items | 필수 | array (object) | Access Key 목록 |
| result.items[].keyId | 필수 | string | Key ID |
| result.items[].name | 선택 | string 또는 null | Key 이름 |
| result.items[].description | 선택 | string 또는 null | Key 설명 (name alias) |
| result.items[].status | 필수 | string | DB 원시 상태 (active, deactivated). 만료/revoke를 반영하지 않으므로 상태 표시는 effectiveStatus를 사용할 것 |
| result.items[].effectiveStatus | 필수 | string | 유효 상태 (active, deactivated, revoked) — 표시용 정본 |
| result.items[].expiresAt | 선택 | string 또는 null | 만료 시간 (ISO8601 UTC) — revoke 시 revoke 시각으로 재작성됨 |
| result.items[].revokedAt | 선택 | string 또는 null | 수동 폐기 시각 (ISO8601 UTC) — 자연 만료와 구분용, 폐기된 키만 |
| result.items[].createdAt | 필수 | string | 생성 시간 (ISO8601 UTC) |
| result.items[].lastUsedAt | 선택 | string 또는 null | 마지막 사용 시간 (ISO8601 UTC) |
| result.currentCount | 필수 | integer | 현재 활성 키 개수 |
| result.maxCount | 필수 | integer | 최대 키 개수 |


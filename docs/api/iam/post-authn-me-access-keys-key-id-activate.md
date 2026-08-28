# Access Key 활성화

비활성화된 Access Key를 재활성화합니다. 만료 전에만 가능합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/me/access-keys/{key_id}/activate
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| key_id | path | 필수 | string | Key ID |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.keyId | 필수 | string | Key ID |
| result.name | 선택 | string 또는 null | Key 이름 |
| result.description | 선택 | string 또는 null | Key 설명 (name alias) |
| result.status | 필수 | string | DB 원시 상태 (active, deactivated). 만료/revoke를 반영하지 않으므로 상태 표시는 effectiveStatus를 사용할 것 |
| result.effectiveStatus | 필수 | string | 유효 상태 (active, deactivated, revoked) — 표시용 정본 |
| result.expiresAt | 선택 | string 또는 null | 만료 시간 (ISO8601 UTC) — revoke 시 revoke 시각으로 재작성됨 |
| result.revokedAt | 선택 | string 또는 null | 수동 폐기 시각 (ISO8601 UTC) — 자연 만료와 구분용, 폐기된 키만 |
| result.createdAt | 필수 | string | 생성 시간 (ISO8601 UTC) |
| result.lastUsedAt | 선택 | string 또는 null | 마지막 사용 시간 (ISO8601 UTC) |


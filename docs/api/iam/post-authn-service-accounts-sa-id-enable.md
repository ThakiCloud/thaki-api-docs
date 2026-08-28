# Enable Service Account

서비스 어카운트 활성화

비활성화된 서비스 어카운트를 다시 활성화합니다.
활성화된 서비스 어카운트의 API Key는 다시 인증에 사용할 수 있습니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/service-accounts/{sa_id}:enable
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| sa_id | path | 필수 | string |  |

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
| result.saId | 필수 | string |  |
| result.tpn | 필수 | string |  |
| result.orgId | 필수 | string |  |
| result.projectId | 필수 | string 또는 null |  |
| result.name | 필수 | string |  |
| result.owner | 필수 | string |  |
| result.displayName | 필수 | string 또는 null |  |
| result.description | 필수 | string 또는 null |  |
| result.tags | 필수 | object 또는 null |  |
| result.status | 필수 | string |  |
| result.createdAt | 필수 | string (date-time) |  |
| result.updatedAt | 필수 | string (date-time) |  |
| result.disabledAt | 필수 | string (date-time) |  |
| result.disabledReason | 필수 | string 또는 null |  |
| result.secretLastIssuedAt | 선택 | string (date-time) |  |
| result.keys | 선택 | array (object) |  |
| result.keys[].keyId | 필수 | string |  |
| result.keys[].status | 필수 | string |  |
| result.keys[].effectiveStatus | 필수 | string |  |
| result.keys[].description | 필수 | string 또는 null |  |
| result.keys[].expiresAt | 필수 | string (date-time) |  |
| result.keys[].createdAt | 필수 | string (date-time) |  |
| result.keys[].lastUsedAt | 필수 | string (date-time) |  |
| result.aliasClientId | 선택 | string 또는 null |  |
| result.aliasClientSecret | 선택 | string 또는 null |  |


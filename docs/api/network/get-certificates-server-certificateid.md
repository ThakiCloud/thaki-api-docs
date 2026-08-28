# SERVER 인증서 단건을 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/certificates/server/{certificateId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| certificateId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result.id | 선택 | string 또는 null |  |
| result.name | 선택 | string 또는 null |  |
| result.mode | 선택 | string 또는 null | 인증서 모드 Enum. 값: SERVER, CA |
| result.status | 선택 | string 또는 null | 인증서 상태. 값: VALID, EXPIRING_SOON, EXPIRED |
| result.createdAt | 선택 | string (date-time) |  |
| result.updatedAt | 선택 | string (date-time) |  |
| result.expiresAt | 선택 | string (date-time) |  |
| result.certificateRef | 선택 | string 또는 null |  |
| result.privateKeyRef | 선택 | string 또는 null |  |
| result.certificateChainRef | 선택 | string 또는 null |  |
| result.type | 선택 | string 또는 null |  |
| result.listeners | 선택 | array (object) |  |
| result.listeners[].id | 필수 | string |  |
| result.listeners[].name | 선택 | string 또는 null |  |
| result.listeners[].protocol | 선택 | string 또는 null |  |
| result.listeners[].port | 선택 | integer 또는 null |  |
| result.listeners[].loadBalancerId | 선택 | string 또는 null |  |
| result.certificateContent | 선택 | string 또는 null |  |
| result.privateKey | 선택 | string 또는 null |  |
| result.certificateChain | 선택 | string 또는 null |  |
| result.certificateDetail | 선택 | object 또는 null | 인증서 세부 정보 응답 |
| result.certificateDetail.issuer | 선택 | string 또는 null |  |
| result.certificateDetail.type | 선택 | string 또는 null |  |
| result.certificateDetail.cn | 선택 | string 또는 null |  |
| result.certificateDetail.san | 선택 | array (string) |  |
| result.certificateDetail.signatureType | 선택 | string 또는 null |  |
| result.certificateDetail.validFrom | 선택 | string (date-time) |  |
| result.certificateDetail.validTo | 선택 | string (date-time) |  |


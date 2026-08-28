# Add Router Interface

라우터에 인터페이스를 추가합니다 (서브넷 연결).

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/routers/{routerId}/interfaces
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| routerId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| subnetId | 선택 | string 또는 null | 연결할 서브넷 ID. 길이 1~ |
| portId | 선택 | string 또는 null | 연결할 포트 ID. 길이 1~ |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌·사용 중) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.id | 필수 | string |  |
| result.subnetId | 필수 | string |  |
| result.tenantId | 필수 | string |  |
| result.networkId | 선택 | string 또는 null |  |
| result.portId | 선택 | string 또는 null |  |


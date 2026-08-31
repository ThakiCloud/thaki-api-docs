# Compute Quota 정보 조회

Compute Quota 정보를 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/meta/quota
```

## URI 매개변수

없습니다.

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
| result | 필수 | object | 결과 데이터 |
| result.instances | 필수 | object | 인스턴스 개수 quota |
| result.instances.used | 선택 | integer 또는 null | 사용량 |
| result.instances.limit | 선택 | integer 또는 null | 제한량 |
| result.vcpus | 필수 | object | vCPU(코어) quota |
| result.vcpus.used | 선택 | integer 또는 null | 사용량 |
| result.vcpus.limit | 선택 | integer 또는 null | 제한량 |
| result.ram | 필수 | object | RAM quota (GiB) |
| result.ram.used | 선택 | number 또는 null | 사용량 |
| result.ram.limit | 선택 | number 또는 null | 제한량 |
| result.serverGroups | 필수 | object | 서버 그룹 개수 quota |
| result.serverGroups.used | 선택 | integer 또는 null | 사용량 |
| result.serverGroups.limit | 선택 | integer 또는 null | 제한량 |


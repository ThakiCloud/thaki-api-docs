# Accept Transfer

볼륨 Transfer를 수락합니다

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/compute/storage/volumes/transfers/{transferId}/accept
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| transferId | path | 필수 | string | Transfer ID |

## 요청 헤더

인증 헤더와 조직·파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| authKey | 필수 | string | Transfer 생성 시 발급된 인증 키. 길이 1~ |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 202 Accepted | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(잠금·상태 전이 불가) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 202

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.transferId | 필수 | string | Transfer ID |
| result.volumeId | 선택 | string 또는 null | 볼륨 ID |
| result.name | 선택 | string 또는 null | Transfer 이름 |
| result.authKey | 선택 | string 또는 null | 인증 키 (생성 시에만 포함) |
| result.createdAt | 선택 | string 또는 null | 생성 일시 |


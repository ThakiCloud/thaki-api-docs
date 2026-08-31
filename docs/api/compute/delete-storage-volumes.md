# 볼륨 일괄 삭제

볼륨을 다중 삭제합니다 (부분 성공/실패 허용, 결과를 result로 반환)

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/compute/storage/volumes
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| volumeId | 필수 | array (string) | 대상 볼륨 ID 목록 |

## 요청 헤더

인증 헤더와 조직·파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result.requestedCount | 필수 | integer | 요청한 삭제 개수 |
| result.successCount | 필수 | integer | 삭제 요청 성공 개수(멱등 포함) |
| result.failureCount | 필수 | integer | 삭제 실패 개수 |
| result.deletedIds | 선택 | array (string) | 삭제 요청이 수락된 볼륨 ID 목록 |
| result.missingIds | 선택 | array (string) | 이미 없어 멱등 처리된 볼륨 ID 목록 |
| result.failures | 선택 | array (object) | 삭제 실패 목록 |
| result.failures[].volumeId | 필수 | string | 삭제 실패한 볼륨 ID |
| result.failures[].statusCode | 필수 | integer | 실패 HTTP 상태 코드 |
| result.failures[].message | 필수 | string | 실패 메시지 |


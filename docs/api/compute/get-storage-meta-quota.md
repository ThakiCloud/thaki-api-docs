# Storage Quota 정보를 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/storage/meta/quota
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
| result.volumes | 필수 | object | 볼륨 개수 quota |
| result.volumes.used | 선택 | integer 또는 null | 사용량 (in_use + reserved) |
| result.volumes.limit | 선택 | integer 또는 null | 제한량 |
| result.snapshots | 필수 | object | 스냅샷 개수 quota |
| result.snapshots.used | 선택 | integer 또는 null | 사용량 (in_use + reserved) |
| result.snapshots.limit | 선택 | integer 또는 null | 제한량 |
| result.backups | 필수 | object | 백업 개수 quota |
| result.backups.used | 선택 | integer 또는 null | 사용량 (in_use + reserved) |
| result.backups.limit | 선택 | integer 또는 null | 제한량 |
| result.volumeCapacity | 필수 | object | 볼륨+스냅샷 총 용량(GB) quota |
| result.volumeCapacity.used | 선택 | integer 또는 null | 사용량 (in_use + reserved) |
| result.volumeCapacity.limit | 선택 | integer 또는 null | 제한량 |
| result.backupGigabytes | 필수 | object | 백업 총 용량(GB) quota |
| result.backupGigabytes.used | 선택 | integer 또는 null | 사용량 (in_use + reserved) |
| result.backupGigabytes.limit | 선택 | integer 또는 null | 제한량 |
| result.perVolumeGigabytes | 필수 | object | 볼륨당 용량(GB) quota |
| result.perVolumeGigabytes.used | 선택 | integer 또는 null | 사용량 (in_use + reserved) |
| result.perVolumeGigabytes.limit | 선택 | integer 또는 null | 제한량 |
| result.volumeTypes | 선택 | object | Volume Type별 quota (동적) |


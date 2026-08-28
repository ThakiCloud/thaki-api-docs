# Get Quota

Storage Quota 정보를 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/storage/meta/quota
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Project-Id | 선택 | string 또는 null | OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중). OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중) |
| X-Partition-Id | 선택 | string 또는 null | 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일). 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

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


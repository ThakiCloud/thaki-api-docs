# Create Volume Backup

볼륨 백업을 생성합니다

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/compute/storage/volume-backups
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

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| volumeId | 필수 | string | 원본 볼륨 ID |
| volumeBackupName | 필수 | string | 볼륨 백업 이름 (1~255자, 인쇄 가능 문자, 선행/후행 공백 금지) |
| backupMode | 필수 | string | 백업 모드 (FULL \| INCREMENTAL). 값: FULL, INCREMENTAL |
| description | 선택 | string 또는 null | 볼륨 백업 설명 (선택) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.basicInfo | 필수 | object | 기본 정보 |
| result.basicInfo.volumeBackupId | 선택 | string 또는 null | 볼륨 백업 ID |
| result.basicInfo.volumeBackupName | 선택 | string 또는 null | 볼륨 백업 이름 |
| result.basicInfo.status | 선택 | string 또는 null | 볼륨 백업 상태 |
| result.basicInfo.size | 선택 | integer 또는 null | 볼륨 백업 크기(GiB) |
| result.basicInfo.createdAt | 선택 | string 또는 null | 생성 일시 |
| result.basicInfo.description | 선택 | string 또는 null | 설명 |
| result.basicInfo.errorDetail | 선택 | string 또는 null | 에러 상세 정보 |
| result.specInfo | 필수 | object | 스펙 정보 |
| result.specInfo.backupMode | 선택 | string 또는 null | 백업 모드 (FULL \| INCREMENTAL) |
| result.specInfo.size | 선택 | integer 또는 null | 볼륨 백업 크기(GiB) |
| result.sourceVolumeId | 선택 | string 또는 null | 원본 볼륨 ID |
| result.sourceVolumeName | 선택 | string 또는 null | 원본 볼륨 이름 |
| result.sourceVolumeType | 선택 | string 또는 null | 원본 볼륨 타입 |


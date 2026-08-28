# Get Snapshot

인스턴스 스냅샷 상세 정보를 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/instance-snapshots/{instanceSnapshotId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| instanceSnapshotId | path | 필수 | string | 인스턴스 스냅샷 ID. 인스턴스 스냅샷 ID |

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
| result.basicInfo | 필수 | object | 스냅샷 기본 정보 응답 |
| result.basicInfo.status | 선택 | string 또는 null | 스냅샷 상태 |
| result.basicInfo.instanceSnapshotId | 선택 | string 또는 null | 스냅샷 ID |
| result.basicInfo.instanceSnapshotName | 선택 | string 또는 null | 스냅샷 이름 |
| result.basicInfo.size | 선택 | number 또는 null | 스냅샷 크기 (GiB) |
| result.basicInfo.createdAt | 선택 | string 또는 null | 생성 일시 |
| result.basicInfo.description | 선택 | string 또는 null | 스냅샷 설명 |
| result.basicInfo.instanceId | 선택 | string 또는 null | 인스턴스 ID |
| result.basicInfo.instanceName | 선택 | string 또는 null | 인스턴스 이름 |
| result.basicInfo.isVolumeBased | 선택 | boolean | 볼륨 기반 인스턴스 스냅샷 여부. 기본값 false |
| result.basicInfo.protected | 선택 | boolean | 삭제 보호 여부. 기본값 false |
| result.specInfo | 필수 | object | 스냅샷 스펙 정보 응답 |
| result.specInfo.size | 선택 | number 또는 null | 스냅샷 크기 (GiB) |
| result.specInfo.osDistro | 선택 | string 또는 null | OS 배포판 |
| result.specInfo.osVersion | 선택 | string 또는 null | OS 버전 |
| result.specInfo.minDisk | 선택 | integer | 최소 디스크 요구사항 (GB, 0 = 제약 없음). 기본값 0 |
| result.specInfo.minRam | 선택 | number | 최소 RAM 요구사항 (GiB, 0 = 제약 없음). 기본값 0 |
| result.specInfo.diskFormat | 선택 | string 또는 null | 디스크 포맷 |
| result.specInfo.containerFormat | 선택 | string 또는 null | 컨테이너 포맷 |
| result.securityInfo | 필수 | object | 스냅샷 보안 정보 응답 |
| result.securityInfo.ownerProjectId | 선택 | string 또는 null | 소유자 프로젝트 ID |
| result.securityInfo.ownerProjectName | 선택 | string 또는 null | 소유자 프로젝트 이름 |
| result.securityInfo.access | 선택 | string 또는 null | 접근 권한 (visibility) |
| result.securityInfo.protected | 선택 | boolean | 삭제 보호 여부. 기본값 false |
| result.securityInfo.filename | 선택 | string 또는 null | 파일명 |
| result.securityInfo.checksum | 선택 | string 또는 null | 체크섬 |
| result.metadata | 선택 | object | 메타데이터 (OpenStack properties) |


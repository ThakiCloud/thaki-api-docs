# 인스턴스 스냅샷 정보 수정

인스턴스 스냅샷 정보를 수정합니다

## HTTP 요청

```http
PATCH https://<your-console-host>/api/v1/compute/instance-snapshots/{instanceSnapshotId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| instanceSnapshotId | path | 필수 | string | 인스턴스 스냅샷 ID |

## 요청 헤더

인증 헤더와 조직·파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| instanceSnapshotName | 선택 | string 또는 null | 스냅샷 이름 (1~255자, 인쇄 가능 문자, 선행/후행 공백 금지) |
| description | 선택 | string 또는 null | 스냅샷 설명 (null 전송 시 빈 값으로 설정, 미전송 시 기존 값 유지) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(잠금·상태 전이 불가) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

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


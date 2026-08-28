# List Snapshots

인스턴스 스냅샷 목록을 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/instance-snapshots
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sort | 선택 | string | 정렬 필드. 값: instanceSnapshotId, instanceSnapshotName, size, diskFormat, instanceName, instanceId, description, createdAt |
| order | 선택 | string | 정렬 방향. 값: asc, desc |
| prioritizeActiveStatus | 선택 | boolean | true면 ACTIVE 상태 스냅샷을 목록 상단으로 우선 정렬. 기본값 false |
| instanceSnapshotName | 선택 | array (string) | 스냅샷 이름 필터 (부분 일치, 다중 값 OR) |
| instanceSnapshotId | 선택 | array (string) | 스냅샷 ID 필터 (부분 일치, 다중 값 OR) |
| instanceId | 선택 | array (string) | 인스턴스 ID 필터 (부분 일치, 다중 값 OR) |
| instanceName | 선택 | array (string) | 인스턴스 이름 필터 (부분 일치, 다중 값 OR) |
| description | 선택 | array (string) | 설명 필터 (부분 일치, 다중 값 OR) |
| status | 선택 | array (string) | 상태 필터 (값 일치, 다중 값 OR) |
| size | 선택 | array (number) | 크기 필터 GiB 단위 (bytes→GiB 변환 후 소수점 2자리 반올림 값 기준 비교 / 다중 값 OR) |
| diskFormat | 선택 | array (string) | 디스크 포맷 필터 (값 일치, 다중 값 OR: RAW, QCOW2, ISO, AKI, ARI) |
| createdAtRange | 선택 | array (string) | 생성일 범위 필터 (반복 가능). 형식 'YYYY-MM-DD..YYYY-MM-DD', 여러 개 지정 시 OR 결합. |
| page | 선택 | integer | 페이지 번호 (0이면 전체 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 10. 범위 1~ |

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
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].basicInfo | 필수 | object | 스냅샷 기본 정보 응답 |
| result.data[].basicInfo.status | 선택 | string 또는 null | 스냅샷 상태 |
| result.data[].basicInfo.instanceSnapshotId | 선택 | string 또는 null | 스냅샷 ID |
| result.data[].basicInfo.instanceSnapshotName | 선택 | string 또는 null | 스냅샷 이름 |
| result.data[].basicInfo.size | 선택 | number 또는 null | 스냅샷 크기 (GiB) |
| result.data[].basicInfo.createdAt | 선택 | string 또는 null | 생성 일시 |
| result.data[].basicInfo.description | 선택 | string 또는 null | 스냅샷 설명 |
| result.data[].basicInfo.instanceId | 선택 | string 또는 null | 인스턴스 ID |
| result.data[].basicInfo.instanceName | 선택 | string 또는 null | 인스턴스 이름 |
| result.data[].basicInfo.isVolumeBased | 선택 | boolean | 볼륨 기반 인스턴스 스냅샷 여부. 기본값 false |
| result.data[].basicInfo.protected | 선택 | boolean | 삭제 보호 여부. 기본값 false |
| result.data[].specInfo | 필수 | object | 스냅샷 스펙 정보 응답 |
| result.data[].specInfo.size | 선택 | number 또는 null | 스냅샷 크기 (GiB) |
| result.data[].specInfo.osDistro | 선택 | string 또는 null | OS 배포판 |
| result.data[].specInfo.osVersion | 선택 | string 또는 null | OS 버전 |
| result.data[].specInfo.minDisk | 선택 | integer | 최소 디스크 요구사항 (GB, 0 = 제약 없음). 기본값 0 |
| result.data[].specInfo.minRam | 선택 | number | 최소 RAM 요구사항 (GiB, 0 = 제약 없음). 기본값 0 |
| result.data[].specInfo.diskFormat | 선택 | string 또는 null | 디스크 포맷 |
| result.data[].specInfo.containerFormat | 선택 | string 또는 null | 컨테이너 포맷 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


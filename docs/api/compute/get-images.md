# List Images

이미지 목록을 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/images
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sort | 선택 | string | 정렬 필드. 정렬 필드. 값: imageName, osName, size, access, createdAt, imageId, description, diskFormat, containerFormat, ownerProjectName, visibility, osVersion, minDisk, minRam |
| order | 선택 | string | 정렬 방향. 정렬 방향. 값: asc, desc |
| prioritizeActiveStatus | 선택 | boolean | true면 ACTIVE 상태 이미지를 목록 상단으로 우선 정렬. true면 ACTIVE 상태 이미지를 목록 상단으로 우선 정렬. 기본값 false |
| access | 필수 | string | 접근 권한 필터 - UI 탭용 (current_project: 소유, shared: 공유받음, public: 공개, all: current+shared+public). 접근 권한 필터 - UI 탭용 (current_project: 소유, shared: 공유받음, public: 공개, all: current+shared+public). 값: current_project, shared, public, all |
| imageName | 선택 | array (string) | 이미지 이름 필터 (부분 일치, 다중 값 OR). 이미지 이름 필터 (부분 일치, 다중 값 OR) |
| imageId | 선택 | array (string) | 이미지 ID 필터 (부분 일치, 다중 값 OR). 이미지 ID 필터 (부분 일치, 다중 값 OR) |
| description | 선택 | array (string) | 설명 필터 (부분 일치, 다중 값 OR). 설명 필터 (부분 일치, 다중 값 OR) |
| ownerProjectName | 선택 | array (string) | 소유자 프로젝트 이름 필터 (부분 일치, 다중 값 OR). 소유자 프로젝트 이름 필터 (부분 일치, 다중 값 OR) |
| osDistro | 선택 | array (string) | OS 배포판 필터 (값 일치, 다중 값 OR). OS 배포판 필터 (값 일치, 다중 값 OR) |
| osVersion | 선택 | array (string) | OS 버전 필터 (부분 일치, 다중 값 OR). OS 버전 필터 (부분 일치, 다중 값 OR) |
| minDisk | 선택 | array (integer) | 최소 디스크 요구사항 필터 (값 일치, 다중 값 OR, 단위 GiB). 최소 디스크 요구사항 필터 (값 일치, 다중 값 OR, 단위 GiB) |
| minRam | 선택 | array (number) | 최소 RAM 요구사항 필터 (값 일치, 다중 값 OR, 단위 GiB). 최소 RAM 요구사항 필터 (값 일치, 다중 값 OR, 단위 GiB) |
| status | 선택 | array (string) | 상태 필터 (값 일치, 다중 값 OR). 상태 필터 (값 일치, 다중 값 OR) |
| size | 선택 | array (number) | 크기 필터 GiB 단위 (소수점 둘째자리 반올림 후 허용 오차 0.01(GiB)로 비교 / 다중 값 OR). 크기 필터 GiB 단위 (소수점 둘째자리 반올림 후 허용 오차 0.01(GiB)로 비교 / 다중 값 OR) |
| visibility | 선택 | array (string) | Visibility 필터 (값 일치, 다중 값 OR, public/private/shared). Visibility 필터 (값 일치, 다중 값 OR, public/private/shared) |
| protected | 선택 | boolean 또는 null | 삭제 보호 여부 필터 (true/false). 삭제 보호 여부 필터 (true/false) |
| rescueImage | 선택 | boolean 또는 null | BFV rescue 전용 이미지 필터 (true: hw_rescue_device/hw_rescue_bus 속성이 모두 있는 이미지만, false: 없는 이미지만). BFV rescue 전용 이미지 필터 (true: hw_rescue_device/hw_rescue_bus 속성이 모두 있는 이미지만, false: 없는 이미지만) |
| service | 선택 | string 또는 null | 서비스 전용 이미지 필터 (container: thaki_service_container property가 'true'인 이미지만). 서비스 전용 이미지 필터 (container: thaki_service_container property가 'true'인 이미지만). 값: container |
| diskFormat | 선택 | array (string) | 디스크 포맷 필터 (값 일치, 다중 값 OR, raw/qcow2/iso). 디스크 포맷 필터 (값 일치, 다중 값 OR, raw/qcow2/iso) |
| containerFormat | 선택 | array (string) | 컨테이너 포맷 필터 (값 일치, 다중 값 OR). 컨테이너 포맷 필터 (값 일치, 다중 값 OR) |
| createdAtRange | 선택 | array (string) | 생성일 범위 필터 (반복 가능). 형식 'YYYY-MM-DD..YYYY-MM-DD', 여러 개 지정 시 OR 결합.. 생성일 범위 필터 (반복 가능). 형식 'YYYY-MM-DD..YYYY-MM-DD', 여러 개 지정 시 OR 결합. |
| page | 선택 | integer | 페이지 번호 (0이면 전체 조회). 페이지 번호 (0이면 전체 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 10. 범위 1~ |

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
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].basicInfo | 필수 | object | 이미지 기본 정보 응답 |
| result.data[].basicInfo.status | 선택 | string 또는 null | 이미지 상태 |
| result.data[].basicInfo.imageId | 선택 | string 또는 null | 이미지 ID |
| result.data[].basicInfo.imageName | 선택 | string 또는 null | 이미지 이름 |
| result.data[].basicInfo.usageType | 선택 | string 또는 null | 사용 유형 (common_server/bare_metal) |
| result.data[].basicInfo.osDistro | 선택 | string 또는 null | OS 배포판 |
| result.data[].basicInfo.osVersion | 선택 | string 또는 null | OS 버전 |
| result.data[].basicInfo.size | 선택 | number 또는 null | 이미지 크기 (GiB) |
| result.data[].basicInfo.createdAt | 선택 | string 또는 null | 생성 일시 |
| result.data[].basicInfo.description | 선택 | string 또는 null | 이미지 설명 |
| result.data[].basicInfo.diskFormat | 선택 | string 또는 null | 디스크 포맷 |
| result.data[].basicInfo.containerFormat | 선택 | string 또는 null | 컨테이너 포맷 |
| result.data[].basicInfo.ownerProjectId | 선택 | string 또는 null | 소유자 프로젝트 ID |
| result.data[].basicInfo.ownerProjectName | 선택 | string 또는 null | 소유자 프로젝트 이름 |
| result.data[].basicInfo.visibility | 선택 | string 또는 null | 접근 권한 (visibility) |
| result.data[].specInfo | 필수 | object | 이미지 스펙 정보 응답 |
| result.data[].specInfo.size | 선택 | number 또는 null | 이미지 크기 (GiB) |
| result.data[].specInfo.virtualSize | 선택 | number 또는 null | 이미지 가상 크기 (GiB) - 실제 디스크 이미지 크기 |
| result.data[].specInfo.osDistro | 선택 | string 또는 null | OS 배포판 |
| result.data[].specInfo.osVersion | 선택 | string 또는 null | OS 버전 |
| result.data[].specInfo.diskFormat | 선택 | string 또는 null | 디스크 포맷 |
| result.data[].specInfo.containerFormat | 선택 | string 또는 null | 컨테이너 포맷 |
| result.data[].specInfo.minDisk | 선택 | integer | 최소 디스크 요구사항 (GB, 0 = 제약 없음). 기본값 0 |
| result.data[].specInfo.minRam | 선택 | number | 최소 RAM 요구사항 (GiB, 0 = 제약 없음). 기본값 0 |
| result.data[].securityInfo | 필수 | object | 이미지 보안 정보 응답 |
| result.data[].securityInfo.ownerProjectId | 선택 | string 또는 null | 소유자 프로젝트 ID |
| result.data[].securityInfo.ownerProjectName | 선택 | string 또는 null | 소유자 프로젝트 이름 |
| result.data[].securityInfo.visibility | 선택 | string 또는 null | 접근 권한 (visibility) |
| result.data[].securityInfo.protected | 선택 | boolean 또는 null | 삭제 보호 여부 |
| result.data[].securityInfo.filename | 선택 | string 또는 null | 파일명 |
| result.data[].securityInfo.checksum | 선택 | string 또는 null | 체크섬 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


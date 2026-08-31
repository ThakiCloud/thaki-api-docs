# 인스턴스 목록 조회

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/instances
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sort | 선택 | string | 정렬 필드. 값: instanceName, imageName, flavorName, description, os, vcpus, ram, disk, gpus, availabilityZone, instanceId, createdAt |
| order | 선택 | string | 정렬 방향. 값: asc, desc |
| prioritizeStableStates | 선택 | boolean | 안정 상태(ACTIVE/STOPPED/PAUSED) 인스턴스를 목록 상단으로 우선 정렬. 기본값 false |
| type | 선택 | string 또는 null | 인스턴스 타입 필터 (vm\|bareMetal, 미전송 시 전체). 값: vm, bareMetal |
| origin | 선택 | string 또는 null | 인스턴스 origin 필터 (compute\|container, 미전송 시 전체). 값: compute, container |
| instanceName | 선택 | array (string) | 인스턴스 이름 필터 (부분 일치, 다중 값 OR) |
| instanceId | 선택 | array (string) | 인스턴스 ID 필터 (부분 일치, 다중 값 OR) |
| fixedIp | 선택 | array (string) | Fixed IP 필터 (부분 일치, 다중 값 OR) |
| floatingIp | 선택 | array (string) | Floating IP 필터 (부분 일치, 다중 값 OR) |
| imageName | 선택 | array (string) | 이미지 이름 필터 (부분 일치, 다중 값 OR) |
| imageId | 선택 | array (string) | 이미지 ID 필터 (부분 일치, 다중 값 OR) |
| flavorName | 선택 | array (string) | 플레이버 이름 필터 (부분 일치, 다중 값 OR) |
| flavorId | 선택 | array (string) | 플레이버 ID 필터 (부분 일치, 다중 값 OR) |
| availabilityZone | 선택 | array (string) | 가용영역 필터 (부분 일치, 다중 값 OR) |
| tagKey | 선택 | array (string) | 태그 키 필터 (부분 일치, 다중 값 OR) |
| tagValue | 선택 | array (string) | 태그 값 필터 (부분 일치, 다중 값 OR) |
| securityGroupName | 선택 | array (string) | 보안 그룹 이름 필터 (부분 일치, 다중 값 OR) |
| securityGroupId | 선택 | array (string) | 보안 그룹 ID 필터 (부분 일치, 다중 값 OR) |
| networkId | 선택 | array (string) | 네트워크 ID 필터 (부분 일치, 다중 값 OR) |
| networkName | 선택 | array (string) | 네트워크 이름 필터 (부분 일치, 다중 값 OR) |
| description | 선택 | array (string) | 설명 필터 (부분 일치, 다중 값 OR) |
| osDistro | 선택 | array (string) | OS 배포판 필터 (정확 일치, 다중 값 OR: ubuntu, windows, rocky, others) |
| serverGroupId | 선택 | string 또는 null | 서버 그룹 ID 필터 (정확 일치) |
| status | 선택 | array (string) | 상태 필터 (전체 일치, 다중 값 OR) |
| locked | 선택 | boolean 또는 null | 잠금 상태 필터 (true/false) |
| vcpus | 선택 | array (integer) | vCPU 개수 필터 (정확 일치, 다중 값 OR) |
| ram | 선택 | array (number) | RAM 필터 GiB 단위 (정확 일치, 다중 값 OR) |
| disk | 선택 | array (integer) | Disk 필터 GB 단위 (정확 일치, 다중 값 OR) |
| gpus | 선택 | array (integer) | GPU 개수 필터 (정확 일치, 다중 값 OR) |
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
| result.data[].basicInfo | 필수 | object | 기본 정보 |
| result.data[].basicInfo.instanceName | 선택 | string 또는 null | 인스턴스 이름 |
| result.data[].basicInfo.instanceId | 선택 | string 또는 null | 인스턴스 ID |
| result.data[].basicInfo.status | 선택 | string 또는 null | 인스턴스 상태 |
| result.data[].basicInfo.host | 선택 | string 또는 null | 호스트명 |
| result.data[].basicInfo.hostId | 선택 | string 또는 null | 호스트 ID |
| result.data[].basicInfo.createdAt | 선택 | string 또는 null | 생성 일시 |
| result.data[].basicInfo.availabilityZone | 선택 | string 또는 null | 가용 영역 |
| result.data[].basicInfo.description | 선택 | string 또는 null | 설명 |
| result.data[].basicInfo.locked | 선택 | boolean 또는 null | 잠금 여부 |
| result.data[].basicInfo.projectId | 선택 | string 또는 null | 프로젝트 ID |
| result.data[].basicInfo.projectName | 선택 | string 또는 null | 프로젝트 이름 |
| result.data[].basicInfo.isTransitioning | 선택 | boolean 또는 null | 전이 중 여부 |
| result.data[].basicInfo.errorDetail | 선택 | string 또는 null | 에러 상세 정보 |
| result.data[].basicInfo.errorCreatedAt | 선택 | string 또는 null | 에러 발생 일시 |
| result.data[].fixedAddresses | 선택 | array (string) | 고정 IP 목록 |
| result.data[].floatingAddresses | 선택 | array (string) | 플로팅 IP 목록 |
| result.data[].flavorInfo | 선택 | object 또는 null | Flavor 정보 |
| result.data[].flavorInfo.flavorId | 선택 | string 또는 null | Flavor ID |
| result.data[].flavorInfo.flavorName | 선택 | string 또는 null | Flavor 이름 |
| result.data[].flavorInfo.vcpus | 선택 | integer 또는 null | vCPU 수 |
| result.data[].flavorInfo.ram | 선택 | number 또는 null | RAM 용량(GiB) |
| result.data[].flavorInfo.disk | 선택 | integer 또는 null | 디스크 용량(GB) |
| result.data[].flavorInfo.gpus | 선택 | integer 또는 null | GPU 개수 |
| result.data[].flavorInfo.isBareMetal | 선택 | boolean | 베어메탈 여부. 기본값 false |
| result.data[].sourceInfo | 선택 | object 또는 null | 소스 정보 |
| result.data[].sourceInfo.sourceId | 선택 | string 또는 null | 소스 ID |
| result.data[].sourceInfo.sourceName | 선택 | string 또는 null | 소스 이름 |
| result.data[].sourceInfo.sourceKind | 선택 | string 또는 null | 소스 종류 (image \| snapshot \| volume) |
| result.data[].sourceInfo.imageId | 선택 | string 또는 null | 이미지 ID (volume 기반이면 root volume의 backing image) |
| result.data[].sourceInfo.imageName | 선택 | string 또는 null | 이미지 이름 (volume 기반이면 root volume의 backing image) |
| result.data[].sourceInfo.osDistro | 선택 | string 또는 null | OS 배포판 |
| result.data[].sourceInfo.osVersion | 선택 | string 또는 null | OS 버전 |
| result.data[].sourceInfo.rootVolumeSize | 선택 | integer 또는 null | Boot from Volume(System Disk 사용) 인스턴스의 루트 볼륨 크기(GiB). source_kind == 'volume'일 때만 채워지며, Local Boot이면 null |
| result.data[].networks | 선택 | array (object) | 네트워크 목록 |
| result.data[].networks[].networkId | 선택 | string 또는 null | 네트워크 ID |
| result.data[].networks[].networkName | 선택 | string 또는 null | 네트워크 이름 |
| result.data[].securityGroups | 선택 | array (object) | 보안 그룹 목록 |
| result.data[].securityGroups[].securityGroupId | 선택 | string 또는 null | 보안 그룹 ID |
| result.data[].securityGroups[].securityGroupName | 선택 | string 또는 null | 보안 그룹 이름 |
| result.data[].attachedVolumes | 선택 | array (object) | 연결된 볼륨 목록 |
| result.data[].attachedVolumes[].volumeId | 필수 | string | 볼륨 ID |
| result.data[].attachedVolumes[].volumeName | 선택 | string 또는 null | 볼륨 이름 |
| result.data[].advancedInfo | 선택 | object | 고급 정보 |
| result.data[].advancedInfo.tags | 선택 | array (object) | 태그 목록 |
| result.data[].advancedInfo.tags[].key | 필수 | string | 태그 키 |
| result.data[].advancedInfo.tags[].value | 선택 | string 또는 null | 태그 값 |
| result.data[].origin | 선택 | string | 리소스 origin. 기본값 "compute" |
| result.data[].originName | 선택 | string 또는 null | origin 리소스 이름 |
| result.data[].originId | 선택 | string 또는 null | origin 리소스 ID |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


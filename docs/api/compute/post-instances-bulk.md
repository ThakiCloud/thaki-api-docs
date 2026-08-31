# 인스턴스 일괄 생성

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/compute/instances/bulk
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 조직·파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| basicInfo | 필수 | object | 기본 정보 |
| basicInfo.name | 필수 | string | 인스턴스 이름 (1~255자, 인쇄 가능 문자, 선행/후행 공백 금지) |
| basicInfo.availabilityZone | 선택 | string 또는 null | 가용성 영역 |
| basicInfo.description | 선택 | string 또는 null | 설명 (free-text, 제어문자 및 &lt; &gt; 금지, 최대 255자) |
| flavorInfo | 필수 | object | 플레이버 정보 |
| flavorInfo.flavorId | 필수 | string | 플레이버 ID |
| sourceInfo | 필수 | object | 소스 및 시스템 디스크 정보 |
| sourceInfo.sourceId | 필수 | string | 소스 ID (이미지/스냅샷/볼륨) |
| sourceInfo.sourceType | 필수 | string | 소스 타입 (image, snapshot, volume). 값: image, volume |
| sourceInfo.systemDisk | 선택 | object 또는 null | 시스템 디스크 정보 (boot-from-volume일 때 필요) |
| sourceInfo.systemDisk.volumeTypeId | 선택 | string 또는 null | 시스템 디스크 볼륨 타입 ID (image/snapshot 타입 전용) |
| sourceInfo.systemDisk.size | 선택 | integer 또는 null | 시스템 디스크 크기 (GB) (image/snapshot 타입 전용) |
| sourceInfo.systemDisk.deletedWithInstance | 필수 | boolean | 시스템 디스크 인스턴스 삭제 시 함께 삭제 여부 (필수) |
| dataDisks | 선택 | array (object) | 데이터 디스크 목록 |
| dataDisks[].volumeTypeId | 필수 | string | 볼륨 타입 ID |
| dataDisks[].size | 필수 | integer | 디스크 크기 (GB) |
| dataDisks[].deletedWithInstance | 필수 | boolean | 인스턴스 삭제 시 함께 삭제 여부 |
| existingVolumes | 선택 | array (object) | 기존 볼륨 연결 목록 |
| existingVolumes[].volumeId | 선택 | string 또는 null | 연결할 볼륨 ID (UUID) |
| existingVolumes[].deviceName | 선택 | string 또는 null | 디바이스 이름 (예: /dev/vdb). 미지정/null이면 OpenStack이 자동 할당 |
| existingVolumes[].deletedWithInstance | 선택 | boolean | 인스턴스 삭제 시 볼륨을 함께 삭제할지 여부. 기본값 false |
| existingVolumes[].bootIndex | 선택 | integer | 부팅 순서 (-1: 데이터 디스크, 0: 부팅 디스크). 기본값 -1 |
| networkInfo | 필수 | object | 네트워크 정보 |
| networkInfo.networks | 선택 | array (object) | 네트워크 목록 |
| networkInfo.networks[].networkId | 필수 | string | 네트워크 ID |
| networkInfo.networks[].virtualLans | 필수 | array (object) | VirtualLAN 목록 (최소 1개 이상) |
| networkInfo.networks[].virtualLans[].type | 필수 | string | VirtualLAN 타입 (auto: 자동, manual: 수동). 값: auto, manual |
| networkInfo.networks[].virtualLans[].subnetId | 선택 | string 또는 null | 서브넷 ID (Port binding 생성에 사용; UI에서 선택한 subnet) |
| networkInfo.networks[].virtualLans[].fixedIp | 선택 | string 또는 null | 고정 IP (manual일 때 필수, x.x.x.x 형식) |
| networkInfo.portIds | 선택 | array (string) | 포트 ID 목록 |
| networkInfo.securityGroupIds | 선택 | array (string) | 보안 그룹 ID 목록 (pre-existing port에는 적용되지 않음) |
| authenticationInfo | 필수 | object | 인증 정보 |
| authenticationInfo.loginType | 필수 | string | 로그인 타입 (keyPair \| password). 값: keyPair, password |
| authenticationInfo.keyPairName | 선택 | string 또는 null | KeyPair 이름 (keyPair일 때 필수) |
| authenticationInfo.loginName | 선택 | string 또는 null | 로그인 이름 (password일 때 필수) |
| authenticationInfo.loginPassword | 선택 | string 또는 null | 로그인 비밀번호 (password일 때 필수) |
| authenticationInfo.confirmPassword | 선택 | string 또는 null | 비밀번호 확인 (password일 때 필수) |
| advancedInfo | 선택 | object 또는 null | 고급 정보 |
| advancedInfo.serverGroupId | 선택 | string 또는 null | 서버 그룹 ID |
| advancedInfo.userData | 선택 | string 또는 null | cloud-init 스크립트 |
| advancedInfo.tags | 선택 | array (object) | 태그 목록 (최대 50개, Key 중복 불가) |
| advancedInfo.tags[].key | 필수 | string | 태그 키 (1~256자, 영문 대/소문자, 숫자, 특수문자 가능). 길이 1~256 |
| advancedInfo.tags[].value | 선택 | string 또는 null | 태그 값 (0~256자, null 또는 빈값 가능, 영문 대/소문자, 숫자, 특수문자 가능). 길이 0~256 |
| waitCallBackInfo | 선택 | object 또는 null | 생성 후 ACTIVE 대기 콜백 정보 |
| waitCallBackInfo.requestCode | 필수 | string | 요청 코드. 길이 1~ |
| waitCallBackInfo.callbackUrl | 필수 | string | 콜백 URL. 길이 1~ |
| waitCallBackInfo.callbackMethod | 필수 | string | 콜백 HTTP 메서드. 값: POST |
| waitCallBackInfo.nodeId | 필수 | string | 노드 ID. 길이 1~ |
| waitCallBackInfo.poolId | 필수 | string | 풀 ID. 길이 1~ |
| waitCallBackInfo.clusterId | 필수 | string | 클러스터 ID. 길이 1~ |
| origin | 선택 | string 또는 null | 리소스 origin 값 |
| originName | 선택 | string 또는 null | origin 리소스 이름 |
| originId | 선택 | string 또는 null | origin 리소스 ID |
| count | 필수 | integer | 생성할 인스턴스 개수 (1-100). 범위 1~100 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(잠금·상태 전이 불가) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.requestedCount | 필수 | integer | 요청한 생성 개수 |
| result.successCount | 필수 | integer | 생성 성공 개수 |
| result.failureCount | 필수 | integer | 생성 실패 개수 |
| result.successes | 선택 | array (object) | 생성 성공 목록 |
| result.successes[].basicInfo | 필수 | object | 기본 정보 |
| result.successes[].basicInfo.instanceName | 선택 | string 또는 null | 인스턴스 이름 |
| result.successes[].basicInfo.instanceId | 선택 | string 또는 null | 인스턴스 ID |
| result.successes[].basicInfo.status | 선택 | string 또는 null | 인스턴스 상태 |
| result.successes[].basicInfo.host | 선택 | string 또는 null | 호스트명 |
| result.successes[].basicInfo.hostId | 선택 | string 또는 null | 호스트 ID |
| result.successes[].basicInfo.createdAt | 선택 | string 또는 null | 생성 일시 |
| result.successes[].basicInfo.availabilityZone | 선택 | string 또는 null | 가용 영역 |
| result.successes[].basicInfo.description | 선택 | string 또는 null | 설명 |
| result.successes[].basicInfo.locked | 선택 | boolean 또는 null | 잠금 여부 |
| result.successes[].basicInfo.projectId | 선택 | string 또는 null | 프로젝트 ID |
| result.successes[].basicInfo.projectName | 선택 | string 또는 null | 프로젝트 이름 |
| result.successes[].basicInfo.isTransitioning | 선택 | boolean 또는 null | 전이 중 여부 |
| result.successes[].basicInfo.errorDetail | 선택 | string 또는 null | 에러 상세 정보 |
| result.successes[].basicInfo.errorCreatedAt | 선택 | string 또는 null | 에러 발생 일시 |
| result.successes[].fixedAddresses | 선택 | array (string) | 고정 IP 목록 |
| result.successes[].floatingAddresses | 선택 | array (string) | 플로팅 IP 목록 |
| result.successes[].flavorInfo | 선택 | object 또는 null | Flavor 정보 |
| result.successes[].flavorInfo.flavorId | 선택 | string 또는 null | Flavor ID |
| result.successes[].flavorInfo.flavorName | 선택 | string 또는 null | Flavor 이름 |
| result.successes[].flavorInfo.vcpus | 선택 | integer 또는 null | vCPU 수 |
| result.successes[].flavorInfo.ram | 선택 | number 또는 null | RAM 용량(GiB) |
| result.successes[].flavorInfo.disk | 선택 | integer 또는 null | 디스크 용량(GB) |
| result.successes[].flavorInfo.gpus | 선택 | integer 또는 null | GPU 개수 |
| result.successes[].flavorInfo.isBareMetal | 선택 | boolean | 베어메탈 여부. 기본값 false |
| result.successes[].sourceInfo | 선택 | object 또는 null | 소스 정보 |
| result.successes[].sourceInfo.sourceId | 선택 | string 또는 null | 소스 ID |
| result.successes[].sourceInfo.sourceName | 선택 | string 또는 null | 소스 이름 |
| result.successes[].sourceInfo.sourceKind | 선택 | string 또는 null | 소스 종류 (image \| snapshot \| volume) |
| result.successes[].sourceInfo.imageId | 선택 | string 또는 null | 이미지 ID (volume 기반이면 root volume의 backing image) |
| result.successes[].sourceInfo.imageName | 선택 | string 또는 null | 이미지 이름 (volume 기반이면 root volume의 backing image) |
| result.successes[].sourceInfo.osDistro | 선택 | string 또는 null | OS 배포판 |
| result.successes[].sourceInfo.osVersion | 선택 | string 또는 null | OS 버전 |
| result.successes[].sourceInfo.rootVolumeSize | 선택 | integer 또는 null | Boot from Volume(System Disk 사용) 인스턴스의 루트 볼륨 크기(GiB). source_kind == 'volume'일 때만 채워지며, Local Boot이면 null |
| result.successes[].networks | 선택 | array (object) | 네트워크 목록 |
| result.successes[].networks[].networkId | 선택 | string 또는 null | 네트워크 ID |
| result.successes[].networks[].networkName | 선택 | string 또는 null | 네트워크 이름 |
| result.successes[].securityGroups | 선택 | array (object) | 보안 그룹 목록 |
| result.successes[].securityGroups[].securityGroupId | 선택 | string 또는 null | 보안 그룹 ID |
| result.successes[].securityGroups[].securityGroupName | 선택 | string 또는 null | 보안 그룹 이름 |
| result.successes[].attachedVolumes | 선택 | array (object) | 연결된 볼륨 목록 |
| result.successes[].attachedVolumes[].volumeId | 필수 | string | 볼륨 ID |
| result.successes[].attachedVolumes[].volumeName | 선택 | string 또는 null | 볼륨 이름 |
| result.successes[].advancedInfo | 선택 | object | 고급 정보 |
| result.successes[].advancedInfo.tags | 선택 | array (object) | 태그 목록 |
| result.successes[].advancedInfo.tags[].key | 필수 | string | 태그 키 |
| result.successes[].advancedInfo.tags[].value | 선택 | string 또는 null | 태그 값 |
| result.successes[].origin | 선택 | string | 리소스 origin. 기본값 "compute" |
| result.successes[].originName | 선택 | string 또는 null | origin 리소스 이름 |
| result.successes[].originId | 선택 | string 또는 null | origin 리소스 ID |
| result.failures | 선택 | array (object) | 생성 실패 목록 |
| result.failures[].index | 필수 | integer | 요청 순번 (1부터) |
| result.failures[].instanceName | 필수 | string | 생성 시도한 인스턴스 이름 |
| result.failures[].statusCode | 필수 | integer | 실패 HTTP 상태 코드 |
| result.failures[].message | 필수 | string | 실패 메시지 |


# Get Instance

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/instances/{instanceId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| instanceId | path | 필수 | string | 인스턴스 ID. 인스턴스 ID |

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
| result.basicInfo | 필수 | object | 기본 정보 |
| result.basicInfo.instanceName | 선택 | string 또는 null | 인스턴스 이름 |
| result.basicInfo.instanceId | 선택 | string 또는 null | 인스턴스 ID |
| result.basicInfo.status | 선택 | string 또는 null | 인스턴스 상태 |
| result.basicInfo.host | 선택 | string 또는 null | 호스트명 |
| result.basicInfo.hostId | 선택 | string 또는 null | 호스트 ID |
| result.basicInfo.createdAt | 선택 | string 또는 null | 생성 일시 |
| result.basicInfo.availabilityZone | 선택 | string 또는 null | 가용 영역 |
| result.basicInfo.description | 선택 | string 또는 null | 설명 |
| result.basicInfo.locked | 선택 | boolean 또는 null | 잠금 여부 |
| result.basicInfo.projectId | 선택 | string 또는 null | 프로젝트 ID |
| result.basicInfo.projectName | 선택 | string 또는 null | 프로젝트 이름 |
| result.basicInfo.isTransitioning | 선택 | boolean 또는 null | 전이 중 여부 |
| result.basicInfo.errorDetail | 선택 | string 또는 null | 에러 상세 정보 |
| result.basicInfo.errorCreatedAt | 선택 | string 또는 null | 에러 발생 일시 |
| result.flavorInfo | 선택 | object 또는 null | Flavor 정보 |
| result.flavorInfo.flavorId | 선택 | string 또는 null | Flavor ID |
| result.flavorInfo.flavorName | 선택 | string 또는 null | Flavor 이름 |
| result.flavorInfo.vcpus | 선택 | integer 또는 null | vCPU 수 |
| result.flavorInfo.ram | 선택 | number 또는 null | RAM 용량(GiB) |
| result.flavorInfo.disk | 선택 | integer 또는 null | 디스크 용량(GB) |
| result.flavorInfo.gpus | 선택 | integer 또는 null | GPU 개수 |
| result.flavorInfo.isBareMetal | 선택 | boolean | 베어메탈 여부. 기본값 false |
| result.sourceInfo | 선택 | object 또는 null | 소스 정보 |
| result.sourceInfo.sourceId | 선택 | string 또는 null | 소스 ID |
| result.sourceInfo.sourceName | 선택 | string 또는 null | 소스 이름 |
| result.sourceInfo.sourceKind | 선택 | string 또는 null | 소스 종류 (image \| snapshot \| volume) |
| result.sourceInfo.imageId | 선택 | string 또는 null | 이미지 ID (volume 기반이면 root volume의 backing image) |
| result.sourceInfo.imageName | 선택 | string 또는 null | 이미지 이름 (volume 기반이면 root volume의 backing image) |
| result.sourceInfo.osDistro | 선택 | string 또는 null | OS 배포판 |
| result.sourceInfo.osVersion | 선택 | string 또는 null | OS 버전 |
| result.sourceInfo.rootVolumeSize | 선택 | integer 또는 null | Boot from Volume(System Disk 사용) 인스턴스의 루트 볼륨 크기(GiB). source_kind == 'volume'일 때만 채워지며, Local Boot이면 null |
| result.connectedInterfaceCount | 선택 | integer | 연결된 네트워크 인터페이스 수. 기본값 0 |
| result.authnInfo | 선택 | object 또는 null | 인증 정보 |
| result.authnInfo.authnId | 선택 | string 또는 null | 인증 ID (keyPair일 때만) |
| result.authnInfo.authnName | 선택 | string 또는 null | 인증 이름 |
| result.authnInfo.authnKind | 선택 | string 또는 null | 인증 방식 (keyPair \| password) |
| result.advancedInfo | 선택 | object 또는 null | 고급 정보 |
| result.advancedInfo.tags | 선택 | array (object) | 태그 목록 |
| result.advancedInfo.tags[].key | 필수 | string | 태그 키 |
| result.advancedInfo.tags[].value | 선택 | string 또는 null | 태그 값 |
| result.advancedInfo.serverGroupId | 선택 | string 또는 null | 서버 그룹 ID |
| result.advancedInfo.serverGroupName | 선택 | string 또는 null | 서버 그룹 이름 |
| result.advancedInfo.hasUserData | 선택 | boolean | User data 존재 여부. 기본값 false |
| result.fixedAddresses | 선택 | array (string) | 고정 IP 목록 |
| result.floatingAddresses | 선택 | array (string) | 플로팅 IP 목록 |
| result.networks | 선택 | array (object) | 연결된 네트워크 목록 |
| result.networks[].networkId | 선택 | string 또는 null | 네트워크 ID |
| result.networks[].networkName | 선택 | string 또는 null | 네트워크 이름 |
| result.origin | 선택 | string | 리소스 origin. 기본값 "compute" |
| result.originName | 선택 | string 또는 null | origin 리소스 이름 |
| result.originId | 선택 | string 또는 null | origin 리소스 ID |


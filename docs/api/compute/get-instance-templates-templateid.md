# Get Instance Template

인스턴스 템플릿 상세 정보를 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/instance-templates/{templateId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| templateId | path | 필수 | string | 템플릿 ID. 템플릿 ID |

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
| result.basicInfo.templateId | 필수 | string | 템플릿 ID |
| result.basicInfo.name | 필수 | string | 템플릿 이름 |
| result.basicInfo.visibility | 필수 | string | 공개 범위 (public: 공개, private: 비공개) |
| result.basicInfo.projectId | 선택 | string 또는 null | 소유 프로젝트 ID |
| result.basicInfo.projectName | 선택 | string 또는 null | 프로젝트 이름 |
| result.basicInfo.isFavorited | 필수 | boolean | 즐겨찾기 여부 |
| result.basicInfo.description | 선택 | string 또는 null | 설명 |
| result.basicInfo.createdAt | 선택 | string (date-time) | 생성 일시 |
| result.azInfo | 필수 | object | 가용성 영역 정보 |
| result.azInfo.availabilityZone | 선택 | string 또는 null | 가용성 영역 |
| result.flavorInfo | 필수 | object | 플레이버 정보 |
| result.flavorInfo.flavorId | 선택 | string 또는 null | 플레이버 ID |
| result.flavorInfo.flavorName | 선택 | string 또는 null | 플레이버 이름 |
| result.flavorInfo.vcpus | 선택 | integer 또는 null | vCPU 수 |
| result.flavorInfo.ram | 선택 | number 또는 null | RAM 크기 (GiB) |
| result.flavorInfo.disk | 선택 | integer 또는 null | 디스크 크기 (GB) |
| result.sourceInfo | 필수 | object | 소스 및 시스템 디스크 정보 |
| result.sourceInfo.sourceId | 선택 | string 또는 null | 소스 ID (이미지, 스냅샷, 볼륨) |
| result.sourceInfo.sourceName | 선택 | string 또는 null | 소스 이름 |
| result.sourceInfo.sourceType | 선택 | string 또는 null | 소스 타입 (image: 일반 이미지, snapshot: 인스턴스 스냅샷, volume: 부팅 가능한 볼륨, null: 미설정) |
| result.sourceInfo.systemDisk | 선택 | object | 시스템 디스크 |
| result.sourceInfo.systemDisk.volumeTypeId | 선택 | string 또는 null | 볼륨 타입 ID (volume 타입일 때 null) |
| result.sourceInfo.systemDisk.size | 선택 | integer 또는 null | 디스크 크기 (GB) (volume 타입일 때 null) |
| result.sourceInfo.systemDisk.deletedWithInstance | 선택 | boolean 또는 null | 인스턴스 삭제 시 함께 삭제 여부 (source 없으면 null) |
| result.dataDisks | 선택 | array (object) | 데이터 디스크 목록 |
| result.dataDisks[].volumeTypeId | 필수 | string | 볼륨 타입 ID |
| result.dataDisks[].size | 필수 | integer | 디스크 크기 (GB) |
| result.dataDisks[].deletedWithInstance | 필수 | boolean | 인스턴스 삭제 시 함께 삭제 여부 |
| result.networkInfo | 필수 | object | 네트워크 정보 |
| result.networkInfo.networks | 선택 | array (object) | 네트워크 목록 |
| result.networkInfo.networks[].networkId | 필수 | string | 네트워크 ID |
| result.networkInfo.networks[].networkScope | 선택 | string 또는 null | 네트워크 범위 (private, shared, external) |
| result.networkInfo.networks[].networkName | 선택 | string 또는 null | 네트워크 이름 |
| result.networkInfo.networks[].virtualLans | 선택 | array (object) | VirtualLAN 목록 |
| result.networkInfo.networks[].virtualLans[].type | 필수 | string | VirtualLAN 타입 (auto: 자동, manual: 수동) |
| result.networkInfo.networks[].virtualLans[].subnetId | 필수 | string | 서브넷 ID |
| result.networkInfo.networks[].virtualLans[].fixedIp | 선택 | string 또는 null | 고정 IP (manual일 때) |
| result.networkInfo.ports | 선택 | array (object) | 포트 목록 |
| result.networkInfo.ports[].portId | 필수 | string | 포트 ID |
| result.networkInfo.ports[].portName | 선택 | string 또는 null | 포트 이름 |
| result.networkInfo.securityGroups | 선택 | array (object) | 보안 그룹 목록 |
| result.networkInfo.securityGroups[].securityGroupId | 필수 | string | 보안 그룹 ID |
| result.networkInfo.securityGroups[].securityGroupName | 선택 | string 또는 null | 보안 그룹 이름 |
| result.advancedInfo | 필수 | object | 추가 정보 |
| result.advancedInfo.userData | 선택 | string 또는 null | cloud-init 스크립트 |
| result.advancedInfo.tags | 선택 | array (object) | 태그 목록 |
| result.advancedInfo.tags[].key | 필수 | string | 태그 키 |
| result.advancedInfo.tags[].value | 선택 | string 또는 null | 태그 값 (null 가능) |


# Update Volume

볼륨 정보를 수정합니다

## HTTP 요청

```http
PATCH https://<your-console-host>/api/v1/compute/storage/volumes/{volumeId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| volumeId | path | 필수 | string | 볼륨 ID. 볼륨 ID |

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
| volumeName | 선택 | string 또는 null | 볼륨 이름 (1~255자, 인쇄 가능 문자, 선행/후행 공백 금지) |
| description | 선택 | string 또는 null | 볼륨 설명 (free-text, 제어문자 및 &lt; &gt; 금지, 최대 255자; null=빈 값, 미전송=기존 값 유지) |
| bootable | 선택 | boolean | 부팅 가능 여부 (true/false, 미전송 시 기존 값 유지) |

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
| result.basicInfo.volumeId | 선택 | string 또는 null | 볼륨 ID |
| result.basicInfo.volumeName | 선택 | string 또는 null | 볼륨 이름 |
| result.basicInfo.status | 선택 | string 또는 null | 볼륨 상태 |
| result.basicInfo.size | 선택 | integer 또는 null | 볼륨 크기(GiB) |
| result.basicInfo.createdAt | 선택 | string 또는 null | 생성 일시 |
| result.basicInfo.availabilityZone | 선택 | string 또는 null | 가용 영역 |
| result.basicInfo.description | 선택 | string 또는 null | 설명 |
| result.basicInfo.errorDetail | 선택 | string 또는 null | 에러 상세 정보 |
| result.attachmentInfo | 선택 | object 또는 null | 연결 정보 |
| result.attachmentInfo.instanceId | 선택 | string 또는 null | 인스턴스 ID |
| result.attachmentInfo.instanceName | 선택 | string 또는 null | 인스턴스 이름 |
| result.specInfo | 필수 | object | 스펙 정보 |
| result.specInfo.volumeType | 선택 | string 또는 null | 볼륨 타입 |
| result.specInfo.bootable | 선택 | boolean | 부팅 가능 여부. 기본값 false |
| result.specInfo.encrypted | 선택 | boolean | 암호화 여부. 기본값 false |
| result.sourceInfo | 필수 | object | 소스 정보 |
| result.sourceInfo.sourceType | 필수 | string | 소스 타입 (volume \| snapshot \| image \| blank) |
| result.sourceInfo.sourceId | 선택 | string 또는 null | 소스 리소스 ID |
| result.sourceInfo.sourceName | 선택 | string 또는 null | 소스 리소스 이름(best-effort) |
| result.diskTag | 선택 | string | 디스크 태그. 기본값 "DATA_DISK" |
| result.origin | 선택 | string | 리소스 origin. 기본값 "compute" |
| result.originName | 선택 | string 또는 null | origin 리소스 이름 |
| result.originId | 선택 | string 또는 null | origin 리소스 ID |
| result.metadata | 선택 | object | 볼륨 metadata |
| result.computedQos | 선택 | object 또는 null | 계산된 IOPS/BW (QoS 미적용 시 null) |
| result.computedQos.iops | 필수 | integer | 계산된 IOPS |
| result.computedQos.bw | 필수 | integer | 계산된 대역폭(Bytes/s) |
| result.computedQos.iopsBurst | 선택 | integer 또는 null | IOPS burst |
| result.computedQos.bwBurst | 선택 | integer 또는 null | 대역폭 burst(Bytes/s) |
| result.computedQos.burstSeconds | 선택 | integer 또는 null | Burst 지속(초) |
| result.snapshots | 선택 | array (object) | 이 볼륨이 보유한 스냅샷 목록 |
| result.snapshots[].volumeSnapshotId | 필수 | string | 볼륨 스냅샷 ID |
| result.snapshots[].volumeSnapshotName | 선택 | string 또는 null | 볼륨 스냅샷 이름 |
| result.snapshots[].status | 선택 | string 또는 null | 볼륨 스냅샷 상태 |
| result.snapshots[].size | 선택 | integer 또는 null | 볼륨 스냅샷 크기(GiB) |
| result.snapshots[].createdAt | 선택 | string 또는 null | 생성 일시 |


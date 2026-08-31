# 컴퓨트

API 86개.

## application-credentials

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/application-credentials](/api/compute/post-application-credentials) | Application Credential 생성 |
| DELETE | [/api/v1/compute/application-credentials/{credentialId}](/api/compute/delete-application-credentials-credentialid) | Application Credential 삭제 |

## compute-meta

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/meta/quota](/api/compute/get-meta-quota) | Compute Quota 정보 조회 |

## flavors

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/flavors](/api/compute/get-flavors) | Flavor 목록 조회 |
| GET | [/api/v1/compute/flavors/{flavorId}](/api/compute/get-flavors-flavorid) | Flavor 상세 정보 조회 |

## host-aggregates

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/host-aggregates/availability-zones](/api/compute/get-host-aggregates-availability-zones) | Compute availability zone(기본) 목록 조회 |

## images

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/images](/api/compute/post-images) | 이미지 생성 |
| GET | [/api/v1/compute/images](/api/compute/get-images) | 이미지 목록 조회 |
| DELETE | [/api/v1/compute/images](/api/compute/delete-images) | 이미지를 다중 삭제 |
| GET | [/api/v1/compute/images/name-availability](/api/compute/get-images-name-availability) | 이미지 이름 중복 여부를 검사 |
| GET | [/api/v1/compute/images/{imageId}](/api/compute/get-images-imageid) | 이미지 상세 정보 조회 |
| PATCH | [/api/v1/compute/images/{imageId}](/api/compute/patch-images-imageid) | 이미지 수정 |
| DELETE | [/api/v1/compute/images/{imageId}](/api/compute/delete-images-imageid) | 이미지 삭제 |

## instance-snapshots

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/instance-snapshots](/api/compute/post-instance-snapshots) | 인스턴스 스냅샷 생성 |
| GET | [/api/v1/compute/instance-snapshots](/api/compute/get-instance-snapshots) | 인스턴스 스냅샷 목록 조회 |
| DELETE | [/api/v1/compute/instance-snapshots](/api/compute/delete-instance-snapshots) | 인스턴스 스냅샷을 다중 삭제 |
| GET | [/api/v1/compute/instance-snapshots/{instanceSnapshotId}](/api/compute/get-instance-snapshots-instancesnapshotid) | 인스턴스 스냅샷 상세 정보 조회 |
| PATCH | [/api/v1/compute/instance-snapshots/{instanceSnapshotId}](/api/compute/patch-instance-snapshots-instancesnapshotid) | 인스턴스 스냅샷 정보 수정 |
| DELETE | [/api/v1/compute/instance-snapshots/{instanceSnapshotId}](/api/compute/delete-instance-snapshots-instancesnapshotid) | 인스턴스 스냅샷 삭제 |

## instance-templates

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/instance-templates](/api/compute/post-instance-templates) | 인스턴스 템플릿 생성 |
| GET | [/api/v1/compute/instance-templates](/api/compute/get-instance-templates) | 인스턴스 템플릿 목록 조회 |
| DELETE | [/api/v1/compute/instance-templates](/api/compute/delete-instance-templates) | 인스턴스 템플릿을 다중 삭제 |
| GET | [/api/v1/compute/instance-templates/{templateId}](/api/compute/get-instance-templates-templateid) | 인스턴스 템플릿 상세 정보 조회 |
| PATCH | [/api/v1/compute/instance-templates/{templateId}](/api/compute/patch-instance-templates-templateid) | 인스턴스 템플릿 수정 |
| DELETE | [/api/v1/compute/instance-templates/{templateId}](/api/compute/delete-instance-templates-templateid) | 인스턴스 템플릿 삭제 |

## instances

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/instances](/api/compute/post-instances) | 인스턴스 생성 |
| GET | [/api/v1/compute/instances](/api/compute/get-instances) | 인스턴스 목록 조회 |
| DELETE | [/api/v1/compute/instances](/api/compute/delete-instances) | 인스턴스를 다중 삭제 |
| POST | [/api/v1/compute/instances/bulk](/api/compute/post-instances-bulk) | 인스턴스 일괄 생성 |
| POST | [/api/v1/compute/instances/actions](/api/compute/post-instances-actions) | 배치 인스턴스 액션 처리 |
| GET | [/api/v1/compute/instances/summary](/api/compute/get-instances-summary) | 인스턴스 상태 요약 조회 |
| GET | [/api/v1/compute/instances/action-logs](/api/compute/get-instances-action-logs) | 전체 인스턴스 액션 로그 조회 |
| GET | [/api/v1/compute/instances/{instanceId}](/api/compute/get-instances-instanceid) | 인스턴스 단건 조회 |
| PATCH | [/api/v1/compute/instances/{instanceId}](/api/compute/patch-instances-instanceid) | 인스턴스 이름/설명 수정 |
| DELETE | [/api/v1/compute/instances/{instanceId}](/api/compute/delete-instances-instanceid) | 인스턴스 삭제 |
| PUT | [/api/v1/compute/instances/{instanceId}/tags](/api/compute/put-instances-instanceid-tags) | 인스턴스 tags 수정 |
| GET | [/api/v1/compute/instances/{instanceId}/action-logs](/api/compute/get-instances-instanceid-action-logs) | 인스턴스 액션 로그 목록 조회 |
| GET | [/api/v1/compute/instances/{instanceId}/action-logs/{requestId}](/api/compute/get-instances-instanceid-action-logs-requestid) | 인스턴스 액션 로그 단건 조회 |
| GET | [/api/v1/compute/instances/{instanceId}/console-logs](/api/compute/get-instances-instanceid-console-logs) | 인스턴스 콘솔 로그 조회 |
| POST | [/api/v1/compute/instances/{instanceId}/remote-console](/api/compute/post-instances-instanceid-remote-console) | 인스턴스 원격 콘솔 생성 |
| POST | [/api/v1/compute/instances/{instanceId}/actions](/api/compute/post-instances-instanceid-actions) | 단일 인스턴스 액션 처리 |
| GET | [/api/v1/compute/instances/{instanceId}/metrics/cpu-utilization](/api/compute/get-instances-instanceid-metrics-cpu-utilization) | 인스턴스 CPU 사용률 조회 |
| GET | [/api/v1/compute/instances/{instanceId}/metrics/network-traffic](/api/compute/get-instances-instanceid-metrics-network-traffic) | 인스턴스 네트워크 트래픽 조회 |
| GET | [/api/v1/compute/instances/{instanceId}/metrics/network-packets](/api/compute/get-instances-instanceid-metrics-network-packets) | 인스턴스 네트워크 패킷 조회 |
| GET | [/api/v1/compute/instances/{instanceId}/metrics/disk-usage](/api/compute/get-instances-instanceid-metrics-disk-usage) | 인스턴스 디스크 사용량 조회 |
| GET | [/api/v1/compute/instances/{instanceId}/metrics/disk-iops](/api/compute/get-instances-instanceid-metrics-disk-iops) | 인스턴스 디스크 IOPS 조회 |

## key-pairs

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/key-pairs/quota](/api/compute/get-key-pairs-quota) | 키 페어 Quota 정보 조회 |
| POST | [/api/v1/compute/key-pairs](/api/compute/post-key-pairs) | 키 페어 생성 |
| GET | [/api/v1/compute/key-pairs](/api/compute/get-key-pairs) | 키 페어 목록을 조회합니다 (페이지네이션, 필터링, 정렬) |
| DELETE | [/api/v1/compute/key-pairs](/api/compute/delete-key-pairs) | 키 페어를 다중 삭제 |
| GET | [/api/v1/compute/key-pairs/{keyPairName}](/api/compute/get-key-pairs-keypairname) | 키 페어 상세 정보 조회 |
| DELETE | [/api/v1/compute/key-pairs/{keyPairName}](/api/compute/delete-key-pairs-keypairname) | 키 페어 삭제 |

## primary-tenant

| 메서드 | 경로 | 설명 |
|---|---|---|
| PUT | [/api/v1/compute/primary-tenant](/api/compute/put-primary-tenant) | 사용자의 Primary Tenant를 설정 |

## projects

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/projects](/api/compute/get-projects) | OpenStack 프로젝트 목록 조회 |

## server-groups

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/server-groups](/api/compute/post-server-groups) | ServerGroup 생성 |
| GET | [/api/v1/compute/server-groups](/api/compute/get-server-groups) | ServerGroup 목록을 조회합니다 (페이지네이션, 필터링, 정렬) |
| DELETE | [/api/v1/compute/server-groups](/api/compute/delete-server-groups) | ServerGroup을 다중 삭제 |
| DELETE | [/api/v1/compute/server-groups/{serverGroupId}](/api/compute/delete-server-groups-servergroupid) | ServerGroup 삭제 |

## storage-meta

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/storage/meta/quota](/api/compute/get-storage-meta-quota) | Storage Quota 정보 조회 |
| GET | [/api/v1/compute/storage/meta/availability-zones](/api/compute/get-storage-meta-availability-zones) | 가용 영역 목록 조회 |

## table-settings

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/table-settings](/api/compute/get-table-settings) | 테이블 설정 조회 |
| PUT | [/api/v1/compute/table-settings](/api/compute/put-table-settings) | 테이블 설정 수정 |

## volume-backups

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/storage/volume-backups](/api/compute/post-storage-volume-backups) | 볼륨 백업 생성 |
| GET | [/api/v1/compute/storage/volume-backups](/api/compute/get-storage-volume-backups) | 볼륨 백업 목록 조회 |
| DELETE | [/api/v1/compute/storage/volume-backups](/api/compute/delete-storage-volume-backups) | 볼륨 백업을 다중 삭제 |
| GET | [/api/v1/compute/storage/volume-backups/{volumeBackupId}](/api/compute/get-storage-volume-backups-volumebackupid) | 볼륨 백업 단건 조회 |
| PATCH | [/api/v1/compute/storage/volume-backups/{volumeBackupId}](/api/compute/patch-storage-volume-backups-volumebackupid) | 볼륨 백업 정보 수정 |
| DELETE | [/api/v1/compute/storage/volume-backups/{volumeBackupId}](/api/compute/delete-storage-volume-backups-volumebackupid) | 볼륨 백업 삭제 |
| POST | [/api/v1/compute/storage/volume-backups/{volumeBackupId}/actions](/api/compute/post-storage-volume-backups-volumebackupid-actions) | 단일 볼륨 백업 액션 처리 |

## volume-snapshots

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/storage/volume-snapshots](/api/compute/post-storage-volume-snapshots) | 볼륨 스냅샷 생성 |
| GET | [/api/v1/compute/storage/volume-snapshots](/api/compute/get-storage-volume-snapshots) | 볼륨 스냅샷 목록 조회 |
| DELETE | [/api/v1/compute/storage/volume-snapshots](/api/compute/delete-storage-volume-snapshots) | 볼륨 스냅샷을 다중 삭제 |
| GET | [/api/v1/compute/storage/volume-snapshots/{volumeSnapshotId}](/api/compute/get-storage-volume-snapshots-volumesnapshotid) | 볼륨 스냅샷 단건 조회 |
| DELETE | [/api/v1/compute/storage/volume-snapshots/{volumeSnapshotId}](/api/compute/delete-storage-volume-snapshots-volumesnapshotid) | 볼륨 스냅샷 삭제 |
| PATCH | [/api/v1/compute/storage/volume-snapshots/{volumeSnapshotId}](/api/compute/patch-storage-volume-snapshots-volumesnapshotid) | 볼륨 스냅샷 정보 수정 |

## volumes

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/storage/volumes](/api/compute/get-storage-volumes) | 볼륨 목록 조회 |
| POST | [/api/v1/compute/storage/volumes](/api/compute/post-storage-volumes) | 볼륨 생성 |
| DELETE | [/api/v1/compute/storage/volumes](/api/compute/delete-storage-volumes) | 볼륨 일괄 삭제 |
| GET | [/api/v1/compute/storage/volumes/types](/api/compute/get-storage-volumes-types) | 볼륨 타입 목록 조회 |
| GET | [/api/v1/compute/storage/volumes/{volumeId}](/api/compute/get-storage-volumes-volumeid) | 볼륨 단건 조회 |
| DELETE | [/api/v1/compute/storage/volumes/{volumeId}](/api/compute/delete-storage-volumes-volumeid) | 볼륨 삭제 |
| PATCH | [/api/v1/compute/storage/volumes/{volumeId}](/api/compute/patch-storage-volumes-volumeid) | 볼륨 정보 수정 |
| POST | [/api/v1/compute/storage/volumes/{volumeId}/actions](/api/compute/post-storage-volumes-volumeid-actions) | 볼륨 액션 실행 |
| POST | [/api/v1/compute/storage/volumes/{volumeId}/transfers](/api/compute/post-storage-volumes-volumeid-transfers) | 볼륨 Transfer 생성 |
| DELETE | [/api/v1/compute/storage/volumes/{volumeId}/transfers](/api/compute/delete-storage-volumes-volumeid-transfers) | 볼륨 Transfer를 취소/삭제 |
| POST | [/api/v1/compute/storage/volumes/transfers/{transferId}/accept](/api/compute/post-storage-volumes-transfers-transferid-accept) | 볼륨 Transfer를 수락 |


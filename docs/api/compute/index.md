# 컴퓨트

API 86개.

## application-credentials

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/application-credentials](/api/compute/post-application-credentials) | Create Application Credential |
| DELETE | [/api/v1/compute/application-credentials/{credentialId}](/api/compute/delete-application-credentials-credentialid) | Application Credential을 삭제합니다 |

## compute-meta

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/meta/quota](/api/compute/get-meta-quota) | Compute Quota 정보를 조회합니다 |

## flavors

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/flavors](/api/compute/get-flavors) | List Flavors |
| GET | [/api/v1/compute/flavors/{flavorId}](/api/compute/get-flavors-flavorid) | Flavor 상세 정보를 조회합니다 |

## host-aggregates

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/host-aggregates/availability-zones](/api/compute/get-host-aggregates-availability-zones) | List Availability Zones |

## images

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/images](/api/compute/post-images) | Create Image |
| GET | [/api/v1/compute/images](/api/compute/get-images) | List Images |
| DELETE | [/api/v1/compute/images](/api/compute/delete-images) | 이미지를 다중 삭제합니다 |
| GET | [/api/v1/compute/images/name-availability](/api/compute/get-images-name-availability) | Check Image Name Availability |
| GET | [/api/v1/compute/images/{imageId}](/api/compute/get-images-imageid) | 이미지 상세 정보를 조회합니다 |
| PATCH | [/api/v1/compute/images/{imageId}](/api/compute/patch-images-imageid) | Update Image |
| DELETE | [/api/v1/compute/images/{imageId}](/api/compute/delete-images-imageid) | 이미지를 삭제합니다 |

## instance-snapshots

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/instance-snapshots](/api/compute/post-instance-snapshots) | Create Snapshot |
| GET | [/api/v1/compute/instance-snapshots](/api/compute/get-instance-snapshots) | List Snapshots |
| DELETE | [/api/v1/compute/instance-snapshots](/api/compute/delete-instance-snapshots) | 인스턴스 스냅샷을 다중 삭제합니다 |
| GET | [/api/v1/compute/instance-snapshots/{instanceSnapshotId}](/api/compute/get-instance-snapshots-instancesnapshotid) | 인스턴스 스냅샷 상세 정보를 조회합니다 |
| PATCH | [/api/v1/compute/instance-snapshots/{instanceSnapshotId}](/api/compute/patch-instance-snapshots-instancesnapshotid) | Update Snapshot |
| DELETE | [/api/v1/compute/instance-snapshots/{instanceSnapshotId}](/api/compute/delete-instance-snapshots-instancesnapshotid) | 인스턴스 스냅샷을 삭제합니다 |

## instance-templates

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/instance-templates](/api/compute/post-instance-templates) | Create Instance Template |
| GET | [/api/v1/compute/instance-templates](/api/compute/get-instance-templates) | List Instance Templates |
| DELETE | [/api/v1/compute/instance-templates](/api/compute/delete-instance-templates) | 인스턴스 템플릿을 다중 삭제합니다 |
| GET | [/api/v1/compute/instance-templates/{templateId}](/api/compute/get-instance-templates-templateid) | 인스턴스 템플릿 상세 정보를 조회합니다 |
| PATCH | [/api/v1/compute/instance-templates/{templateId}](/api/compute/patch-instance-templates-templateid) | Update Instance Template |
| DELETE | [/api/v1/compute/instance-templates/{templateId}](/api/compute/delete-instance-templates-templateid) | 인스턴스 템플릿을 삭제합니다 |

## instances

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/instances](/api/compute/post-instances) | Create Instance |
| GET | [/api/v1/compute/instances](/api/compute/get-instances) | List Instances |
| DELETE | [/api/v1/compute/instances](/api/compute/delete-instances) | 인스턴스를 다중 삭제합니다 |
| POST | [/api/v1/compute/instances/bulk](/api/compute/post-instances-bulk) | Create Instances Bulk |
| POST | [/api/v1/compute/instances/actions](/api/compute/post-instances-actions) | Batch Instance Actions |
| GET | [/api/v1/compute/instances/summary](/api/compute/get-instances-summary) | 인스턴스 상태 요약을 조회합니다 |
| GET | [/api/v1/compute/instances/action-logs](/api/compute/get-instances-action-logs) | List Project Instance Action Logs |
| GET | [/api/v1/compute/instances/{instanceId}](/api/compute/get-instances-instanceid) | Get Instance |
| PATCH | [/api/v1/compute/instances/{instanceId}](/api/compute/patch-instances-instanceid) | Update Instance |
| DELETE | [/api/v1/compute/instances/{instanceId}](/api/compute/delete-instances-instanceid) | Delete Instance |
| PUT | [/api/v1/compute/instances/{instanceId}/tags](/api/compute/put-instances-instanceid-tags) | Update Instance Tags |
| GET | [/api/v1/compute/instances/{instanceId}/action-logs](/api/compute/get-instances-instanceid-action-logs) | List Instance Action Logs |
| GET | [/api/v1/compute/instances/{instanceId}/action-logs/{requestId}](/api/compute/get-instances-instanceid-action-logs-requestid) | Get Instance Action Log Detail |
| GET | [/api/v1/compute/instances/{instanceId}/console-logs](/api/compute/get-instances-instanceid-console-logs) | Get Instance Console Logs |
| POST | [/api/v1/compute/instances/{instanceId}/remote-console](/api/compute/post-instances-instanceid-remote-console) | Create Instance Remote Console |
| POST | [/api/v1/compute/instances/{instanceId}/actions](/api/compute/post-instances-instanceid-actions) | Instance Action |
| GET | [/api/v1/compute/instances/{instanceId}/metrics/cpu-utilization](/api/compute/get-instances-instanceid-metrics-cpu-utilization) | Get Instance Cpu Utilization |
| GET | [/api/v1/compute/instances/{instanceId}/metrics/network-traffic](/api/compute/get-instances-instanceid-metrics-network-traffic) | Get Instance Network Traffic |
| GET | [/api/v1/compute/instances/{instanceId}/metrics/network-packets](/api/compute/get-instances-instanceid-metrics-network-packets) | Get Instance Network Packets |
| GET | [/api/v1/compute/instances/{instanceId}/metrics/disk-usage](/api/compute/get-instances-instanceid-metrics-disk-usage) | Get Instance Disk Usage |
| GET | [/api/v1/compute/instances/{instanceId}/metrics/disk-iops](/api/compute/get-instances-instanceid-metrics-disk-iops) | Get Instance Disk Iops |

## key-pairs

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/key-pairs/quota](/api/compute/get-key-pairs-quota) | KeyPair Quota 정보를 조회합니다 |
| POST | [/api/v1/compute/key-pairs](/api/compute/post-key-pairs) | Create Keypair |
| GET | [/api/v1/compute/key-pairs](/api/compute/get-key-pairs) | List Keypairs |
| DELETE | [/api/v1/compute/key-pairs](/api/compute/delete-key-pairs) | KeyPair를 다중 삭제합니다 |
| GET | [/api/v1/compute/key-pairs/{keyPairName}](/api/compute/get-key-pairs-keypairname) | KeyPair 상세 정보를 조회합니다 |
| DELETE | [/api/v1/compute/key-pairs/{keyPairName}](/api/compute/delete-key-pairs-keypairname) | KeyPair를 삭제합니다 |

## primary-tenant

| 메서드 | 경로 | 설명 |
|---|---|---|
| PUT | [/api/v1/compute/primary-tenant](/api/compute/put-primary-tenant) | Set Primary Tenant |

## projects

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/projects](/api/compute/get-projects) | List Projects |

## server-groups

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/server-groups](/api/compute/post-server-groups) | Create Server Group |
| GET | [/api/v1/compute/server-groups](/api/compute/get-server-groups) | List Server Groups |
| DELETE | [/api/v1/compute/server-groups](/api/compute/delete-server-groups) | ServerGroup을 다중 삭제합니다 |
| DELETE | [/api/v1/compute/server-groups/{serverGroupId}](/api/compute/delete-server-groups-servergroupid) | ServerGroup을 삭제합니다 |

## storage-meta

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/storage/meta/quota](/api/compute/get-storage-meta-quota) | Storage Quota 정보를 조회합니다 |
| GET | [/api/v1/compute/storage/meta/availability-zones](/api/compute/get-storage-meta-availability-zones) | List Availability Zones |

## table-settings

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/table-settings](/api/compute/get-table-settings) | Get Table Settings |
| PUT | [/api/v1/compute/table-settings](/api/compute/put-table-settings) | Update Table Settings |

## volume-backups

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/storage/volume-backups](/api/compute/post-storage-volume-backups) | Create Volume Backup |
| GET | [/api/v1/compute/storage/volume-backups](/api/compute/get-storage-volume-backups) | List Volume Backups |
| DELETE | [/api/v1/compute/storage/volume-backups](/api/compute/delete-storage-volume-backups) | 볼륨 백업을 다중 삭제합니다 |
| GET | [/api/v1/compute/storage/volume-backups/{volumeBackupId}](/api/compute/get-storage-volume-backups-volumebackupid) | Get Volume Backup |
| PATCH | [/api/v1/compute/storage/volume-backups/{volumeBackupId}](/api/compute/patch-storage-volume-backups-volumebackupid) | Update Volume Backup |
| DELETE | [/api/v1/compute/storage/volume-backups/{volumeBackupId}](/api/compute/delete-storage-volume-backups-volumebackupid) | 볼륨 백업을 삭제합니다 |
| POST | [/api/v1/compute/storage/volume-backups/{volumeBackupId}/actions](/api/compute/post-storage-volume-backups-volumebackupid-actions) | Volume Backup Action |

## volume-snapshots

| 메서드 | 경로 | 설명 |
|---|---|---|
| POST | [/api/v1/compute/storage/volume-snapshots](/api/compute/post-storage-volume-snapshots) | Create Volume Snapshot |
| GET | [/api/v1/compute/storage/volume-snapshots](/api/compute/get-storage-volume-snapshots) | List Volume Snapshots |
| DELETE | [/api/v1/compute/storage/volume-snapshots](/api/compute/delete-storage-volume-snapshots) | 볼륨 스냅샷을 다중 삭제합니다 |
| GET | [/api/v1/compute/storage/volume-snapshots/{volumeSnapshotId}](/api/compute/get-storage-volume-snapshots-volumesnapshotid) | Get Volume Snapshot |
| DELETE | [/api/v1/compute/storage/volume-snapshots/{volumeSnapshotId}](/api/compute/delete-storage-volume-snapshots-volumesnapshotid) | 볼륨 스냅샷을 삭제합니다 |
| PATCH | [/api/v1/compute/storage/volume-snapshots/{volumeSnapshotId}](/api/compute/patch-storage-volume-snapshots-volumesnapshotid) | Update Volume Snapshot |

## volumes

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | [/api/v1/compute/storage/volumes](/api/compute/get-storage-volumes) | List Volumes |
| POST | [/api/v1/compute/storage/volumes](/api/compute/post-storage-volumes) | Create Volume |
| DELETE | [/api/v1/compute/storage/volumes](/api/compute/delete-storage-volumes) | 볼륨을 다중 삭제합니다 (부분 성공/실패 허용, 결과를 result로 반환) |
| GET | [/api/v1/compute/storage/volumes/types](/api/compute/get-storage-volumes-types) | List Volume Types |
| GET | [/api/v1/compute/storage/volumes/{volumeId}](/api/compute/get-storage-volumes-volumeid) | Get Volume |
| DELETE | [/api/v1/compute/storage/volumes/{volumeId}](/api/compute/delete-storage-volumes-volumeid) | 볼륨을 삭제합니다 |
| PATCH | [/api/v1/compute/storage/volumes/{volumeId}](/api/compute/patch-storage-volumes-volumeid) | Update Volume |
| POST | [/api/v1/compute/storage/volumes/{volumeId}/actions](/api/compute/post-storage-volumes-volumeid-actions) | Volume Action |
| POST | [/api/v1/compute/storage/volumes/{volumeId}/transfers](/api/compute/post-storage-volumes-volumeid-transfers) | Create Transfer |
| DELETE | [/api/v1/compute/storage/volumes/{volumeId}/transfers](/api/compute/delete-storage-volumes-volumeid-transfers) | 볼륨 Transfer를 취소/삭제합니다 |
| POST | [/api/v1/compute/storage/volumes/transfers/{transferId}/accept](/api/compute/post-storage-volumes-transfers-transferid-accept) | Accept Transfer |


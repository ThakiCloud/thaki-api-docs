# List Storage Classes

StorageClass 목록 조회

특정 클러스터에 존재하는 StorageClass 목록을 페이지네이션과 함께 조회합니다.
StorageClass는 클러스터 범위(cluster-scoped) 리소스이므로 네임스페이스가 필요하지 않습니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/storage/storage-classes
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |
| scName | 선택 | array (string) | StorageClass 이름 목록 (선택, 복수 지정 가능: scName=ceph&scName=local, 부분일치 OR 검색). StorageClass 이름 목록 (선택, 복수 지정 가능: scName=ceph&scName=local, 부분일치 OR 검색) |
| page | 선택 | integer | 페이지 번호 (1부터 시작). 페이지 번호 (1부터 시작). 기본값 1. 범위 1~ |
| pageSize | 선택 | integer | 페이지 크기 (최소 1, 최대 100). 페이지 크기 (최소 1, 최대 100). 기본값 10. 범위 1~100 |
| sortBy | 선택 | string | 정렬 기준 (name, createdAt). 정렬 기준 (name, createdAt). 값: name, createdAt. 기본값 "createdAt" |
| sortOrder | 선택 | string | 정렬 순서 (asc, desc). 정렬 순서 (asc, desc). 값: asc, desc. 기본값 "desc" |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Domain-Id | 필수 | string | Domain ID. Domain ID |
| X-Domain-Name | 필수 | string | Domain Name. Domain Name |

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
| result.data[].name | 필수 | string | StorageClass 이름 |
| result.data[].status | 선택 | string 또는 null | StorageClass 상태 (조건 없음이면 null) |
| result.data[].description | 선택 | string | StorageClass 설명 (annotations의 description 키). 기본값 "" |
| result.data[].labels | 선택 | object | StorageClass 레이블 |
| result.data[].annotations | 선택 | object | StorageClass 어노테이션 (description 제외) |
| result.data[].createdAt | 필수 | string (date-time) | 생성 시각 (ISO 8601 형식, UTC) |
| result.data[].default | 선택 | boolean | 기본 StorageClass 여부 (false 일때: UI에서 Set as Default 버튼 활성화). 기본값 false |
| result.data[].provisioner | 필수 | string | 스토리지 프로비저너 |
| result.data[].parameters | 선택 | object | 프로비저너별 파라미터 |
| result.data[].reclaimPolicy | 선택 | string | 회수 정책 (Delete, Retain). 기본값 "Delete" |
| result.data[].allowVolumeExpansion | 선택 | boolean | 볼륨 확장 허용 여부. 기본값 false |
| result.data[].volumeBindingMode | 선택 | string | 볼륨 바인딩 모드 (Immediate, WaitForFirstConsumer). 기본값 "Immediate" |
| result.data[].mountOptions | 선택 | array (string) | 마운트 옵션 목록 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


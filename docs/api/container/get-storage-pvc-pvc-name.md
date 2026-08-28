# Get Pvc Detail

PVC 상세 조회

특정 클러스터 및 네임스페이스에 존재하는 PVC의 상세 정보를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/storage/pvc/{pvc_name}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| pvc_name | path | 필수 | string | PVC 이름. PVC 이름. 길이 0~253 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |
| namespace | 필수 | string | 네임스페이스 이름. 네임스페이스 이름. 길이 0~63 |

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
| result | 필수 | object | 결과 데이터 |
| result.status | 필수 | string | PVC 상태 (Bound, Lost, Pending) |
| result.name | 필수 | string | PVC 이름 |
| result.namespace | 필수 | string | PVC가 속한 네임스페이스 |
| result.description | 선택 | string | 설명 (annotations['description']). 기본값 "" |
| result.labels | 선택 | object | PVC 레이블 |
| result.annotations | 선택 | object | PVC 어노테이션 (description 제외) |
| result.createdAt | 필수 | string (date-time) | 생성 시각 (ISO 8601 형식, UTC) |
| result.volumeName | 선택 | string | 바인딩된 볼륨 이름. 기본값 "" |
| result.capacity | 선택 | string | PV의 실제 용량. 기본값 "" |
| result.accessModes | 선택 | object | 접근 모드 요약 |
| result.accessModes.singleNodeReadWrite | 선택 | boolean | ReadWriteOnce 포함 여부. 기본값 false |
| result.accessModes.manyNodesReadOnly | 선택 | boolean | ReadOnlyMany 포함 여부. 기본값 false |
| result.accessModes.manyNodesReadWrite | 선택 | boolean | ReadWriteMany 포함 여부. 기본값 false |
| result.accessModeList | 선택 | array (string) | 접근 모드 원본 목록 |
| result.volumeAttributesClass | 선택 | string | 볼륨 속성 클래스 이름. 기본값 "" |
| result.source | 필수 | string | PVC 생성/바인딩 방식 (STORAGE_CLASS, EXISTING_PV) |
| result.storageClass | 선택 | string | StorageClass 이름. 기본값 "" |
| result.requestStorage | 선택 | string | 요청된 스토리지 용량. 기본값 "" |


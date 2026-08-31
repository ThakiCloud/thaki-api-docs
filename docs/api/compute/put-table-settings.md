# 테이블 설정 수정

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/compute/table-settings
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| resource | 필수 | string | Registered table settings resources. 값: instance, baremetal, adminInstance, instanceTemplate, instanceSnapshot, adminInstanceSnapshot, image, adminImage, flavor, adminFlavor, keyPair, serverGroup, adminServerGroup, adminInstanceTemplate, volume, adminVolume, volumeSnapshot, adminVolumeSnapshot, volumeBackup, adminVolumeBackup, adminVolumeType, adminBaremetalNode, adminTenant, adminMetadataDefinition |
| default | 선택 | boolean | 기본값 false |

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 파티션을 선택하기 전에도 호출할 수 있습니다.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| pageSize | 필수 | integer | Rows per page. 범위 1~100 |
| columns | 필수 | array (object) | Column settings array |
| columns[].key | 필수 | string | Column key. 길이 1~ |
| columns[].visible | 필수 | boolean | Column visibility |
| columns[].order | 필수 | integer | Sort order (0-based). 범위 0~ |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(잠금·상태 전이 불가) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.domain | 필수 | string | Domain |
| result.resource | 필수 | string | Resource type |
| result.schemaVersion | 필수 | integer | Schema version |
| result.pageSize | 필수 | integer | Rows per page |
| result.columns | 필수 | array (object) | Column settings |
| result.columns[].key | 필수 | string | Column key |
| result.columns[].visible | 필수 | boolean | Column visibility |
| result.columns[].order | 필수 | integer | Sort order. 범위 0~ |
| result.createdAt | 선택 | string 또는 null | Created timestamp |
| result.updatedAt | 선택 | string 또는 null | Updated timestamp |


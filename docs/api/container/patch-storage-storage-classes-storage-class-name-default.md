# Set Storage Class As Default

StorageClass 기본값 설정

특정 StorageClass를 기본 StorageClass로 설정합니다.
기존에 기본값으로 설정된 다른 StorageClass가 있는 경우 자동으로 해제됩니다.

## HTTP 요청

```http
PATCH https://<your-console-host>/api/v1/container/storage/storage-classes/{storage_class_name}/default
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| storage_class_name | path | 필수 | string | StorageClass 이름. StorageClass 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |

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
| result.storageClassName | 필수 | string | 기본값으로 설정된 StorageClass 이름 |
| result.previousDefaultNames | 선택 | array (string) | 이전에 기본값이었던 StorageClass 이름 목록 |
| result.message | 선택 | string | 추가 메시지. 기본값 "" |


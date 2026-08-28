# Volume Action

단일 볼륨 액션 처리 (retype, extend, revert, uploadToImage)

uploadToImage 액션만 생성된 이미지 정보를 result로 반환하며, 그 외 액션은
result가 null입니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/compute/storage/volumes/{volumeId}/actions
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| volumeId | path | 필수 | string | 볼륨 ID. 볼륨 ID |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| action | 필수 | string | 수행할 액션. 수행할 액션. 값: retype, extend, revert, uploadToImage |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Project-Id | 선택 | string 또는 null | OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중). OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중) |
| X-Partition-Id | 선택 | string 또는 null | 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일). 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일) |

## 요청 본문

본문 스키마가 정의되어 있지 않습니다.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 202 Accepted | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 202

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object 또는 null | 결과 데이터 |
| result.imageId | 선택 | string 또는 null | 생성된 이미지 ID |
| result.imageName | 선택 | string 또는 null | 생성된 이미지 이름 |
| result.status | 선택 | string 또는 null | 볼륨 측 업로드 진행 상태 |
| result.diskFormat | 선택 | string 또는 null | 디스크 포맷 |
| result.containerFormat | 선택 | string 또는 null | 컨테이너 포맷 |
| result.size | 선택 | integer 또는 null | 볼륨 크기(GiB) |
| result.volumeId | 선택 | string 또는 null | 원본 볼륨 ID |


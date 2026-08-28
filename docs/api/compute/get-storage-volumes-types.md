# List Volume Types

볼륨 타입 목록을 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/storage/volumes/types
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sort | 선택 | string | 정렬 필드. 정렬 필드. 값: name, description |
| order | 선택 | string | 정렬 방향. 정렬 방향. 값: asc, desc |
| typeId | 선택 | string 또는 null | 볼륨 타입 ID 필터 (부분 일치). 볼륨 타입 ID 필터 (부분 일치) |
| name | 선택 | string 또는 null | 타입 이름 필터 (부분 일치). 타입 이름 필터 (부분 일치) |
| description | 선택 | string 또는 null | 설명 필터 (부분 일치). 설명 필터 (부분 일치) |
| isPublic | 선택 | boolean 또는 null | 공개 여부 필터 (true/false/null). 공개 여부 필터 (true/false/null) |
| availabilityZone | 선택 | string 또는 null | Storage AZ 필터 — volume type의 RESKEY:availability_zones 원소와 완전 일치(대소문자 무관). RESKEY 미설정 타입은 제외. Storage AZ 필터 — volume type의 RESKEY:availability_zones 원소와 완전 일치(대소문자 무관). RESKEY 미설정 타입은 제외 |
| page | 선택 | integer | 페이지 번호 (0이면 전체 조회). 페이지 번호 (0이면 전체 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 10. 범위 1~ |

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
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].typeId | 필수 | string | 볼륨 타입 ID |
| result.data[].typeName | 선택 | string 또는 null | 볼륨 타입 이름 |
| result.data[].description | 선택 | string 또는 null | 설명 |
| result.data[].isPublic | 선택 | boolean | 공개 여부. 기본값 true |
| result.data[].availabilityZones | 선택 | array (string) | 소속 Storage AZ 목록 (RESKEY:availability_zones 파생, 미설정 시 null) |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


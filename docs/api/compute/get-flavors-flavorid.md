# Get Flavor

Flavor 상세 정보를 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/flavors/{flavorId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| flavorId | path | 필수 | string | Flavor ID. Flavor ID |

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
| result.basicInfo | 필수 | object | Flavor 기본 정보 응답 |
| result.basicInfo.flavorId | 필수 | string | Flavor ID |
| result.basicInfo.flavorName | 필수 | string | Flavor 이름 |
| result.basicInfo.category | 선택 | string 또는 null | Flavor 카테고리 (cpu, gpu, npu, bareMetal, 미분류=null) |
| result.specInfo | 필수 | object | Flavor 스펙 정보 응답 |
| result.specInfo.cpuCount | 필수 | integer | vCPU 수 |
| result.specInfo.ram | 필수 | number | RAM 크기 (GiB) |
| result.specInfo.disk | 필수 | integer | 루트 디스크 크기 (GiB) |
| result.specInfo.ephemeralDisk | 필수 | integer | Ephemeral 디스크 크기 (GiB) |
| result.specInfo.swapDisk | 필수 | number | Swap 디스크 크기 (GiB) |
| result.securityInfo | 필수 | object | Flavor 보안 정보 응답 |
| result.securityInfo.isPublic | 필수 | boolean | 공개 여부 (is_public) |
| result.extraSpec | 선택 | object | Flavor extra_specs (OpenStack extra_specs 원본) |
| result.parameter | 선택 | object | Flavor 전체 응답 데이터 (OpenStack API 원본) |


# Flavor 상세 정보 조회

Flavor 상세 정보를 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/flavors/{flavorId}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| flavorId | path | 필수 | string | Flavor ID |

## 요청 헤더

인증 헤더와 조직·파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

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


# Get Hpa Detail

HPA 상세 조회

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/service-routing/hpa/{hpa_name}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| hpa_name | path | 필수 | string | HPA 이름. HPA 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |
| namespace | 선택 | string | 네임스페이스. 네임스페이스. 기본값 "default". 길이 0~63 |

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
| result.name | 필수 | string | HPA 이름 |
| result.namespace | 필수 | string | 네임스페이스 |
| result.description | 선택 | string | 설명. 기본값 "" |
| result.labels | 선택 | object | 레이블 정보 |
| result.annotations | 선택 | object | 어노테이션 정보 |
| result.createdAt | 선택 | string (date-time) | 생성 시각 |
| result.age | 선택 | string | 생성 이후 경과 시간. 기본값 "" |
| result.status | 필수 | string | HPA 상태 (Error, Active, Processing) |
| result.scaleTargetRefName | 선택 | string | ScaleTargetRef 이름. 기본값 "" |
| result.scaleTargetRefKind | 선택 | string | ScaleTargetRef 종류. 기본값 "" |
| result.minReplicas | 선택 | integer 또는 null | 최소 replica 수 |
| result.maxReplicas | 선택 | integer 또는 null | 최대 replica 수 |
| result.currentReplicas | 선택 | integer 또는 null | 현재 replica 수 |
| result.lastScaleTime | 선택 | string | 마지막 스케일 시간 (RFC3339). 기본값 "" |
| result.resourceMetric | 선택 | object | 목표 메트릭 정보 |
| result.currentMetrics | 선택 | object | 현재 메트릭 정보 |
| result.behaviorInfo | 선택 | object 또는 null | HPA behavior 정보 |
| result.behaviorInfo.scaleUp | 선택 | object 또는 null | ScaleUp behavior 정보 |
| result.behaviorInfo.scaleUp.policies | 선택 | array (string) | Policy 목록 |
| result.behaviorInfo.scaleUp.selectPolicy | 선택 | string 또는 null | Select policy |
| result.behaviorInfo.scaleUp.stabilizationWindow | 선택 | string | Stabilization window. 기본값 "" |
| result.behaviorInfo.scaleDown | 선택 | object 또는 null | ScaleDown behavior 정보 |
| result.behaviorInfo.scaleDown.policies | 선택 | array (string) | Policy 목록 |
| result.behaviorInfo.scaleDown.selectPolicy | 선택 | string 또는 null | Select policy |
| result.behaviorInfo.scaleDown.stabilizationWindow | 선택 | string | Stabilization window. 기본값 "" |


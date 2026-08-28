# Get Pod Logs

Pod 로그 조회 (모든 컨테이너)

특정 클러스터 및 네임스페이스에 존재하는 Pod의 모든 컨테이너 로그를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/workload/pods/{pod_name}/logs
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| pod_name | path | 필수 | string | Pod 이름. Pod 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |
| namespace | 필수 | string | 네임스페이스 이름. 네임스페이스 이름. 길이 0~63 |
| tail | 선택 | integer | 로그 라인 수 (기본값: 100, 최대: 10000). 로그 라인 수 (기본값: 100, 최대: 10000). 기본값 100. 범위 1~10000 |

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
| result | 필수 | array (object) | 결과 데이터 |
| result[].containerName | 필수 | string | 컨테이너 이름 |
| result[].logs | 선택 | array (string) | 로그 라인 리스트 |


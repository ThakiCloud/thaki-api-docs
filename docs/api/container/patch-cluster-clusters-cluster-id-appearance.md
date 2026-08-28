# Update Cluster Appearance

클러스터 사이드바 버튼 텍스트/색상을 수정합니다.

## HTTP 요청

```http
PATCH https://<your-console-host>/api/v1/container/cluster/clusters/{cluster_id}/appearance
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| cluster_id | path | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Domain-Id | 필수 | string | Domain ID. Domain ID |
| X-Domain-Name | 필수 | string | Domain Name. Domain Name |

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| buttonText | 필수 | string 또는 null | 사이드바 primary menu에 표시할 클러스터 버튼 텍스트. 길이 0~3 |
| buttonColor | 선택 | string 또는 null | 사이드바 primary menu 버튼 배경색 (hex, 비우면 기본값 사용) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 404 Not Found | 클러스터 또는 kubeConfig를 찾을 수 없음 |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.clusterId | 필수 | integer | 클러스터 ID |
| result.clusterTitle | 필수 | string | 클러스터 이름 |
| result.buttonText | 필수 | string 또는 null | 사이드바 클러스터 버튼 텍스트 |
| result.buttonColor | 필수 | string 또는 null | 사이드바 클러스터 버튼 색상(hex) |


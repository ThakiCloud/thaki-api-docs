# Register Existing Cluster

기존 Kubernetes 클러스터를 kubeconfig로 등록합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/container/cluster/clusters/register
```

## URI 매개변수

없습니다.

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
| title | 필수 | string | 등록할 클러스터 이름. 길이 1~512 |
| domainId | 선택 | string 또는 null | 도메인 ID (legacy, X-Domain-Id 헤더 우선). 길이 1~512 |
| kubeConfig | 필수 | string | raw kubeconfig YAML. 길이 1~ |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.clusterId | 필수 | integer | 클러스터 ID |
| result.clusterTitle | 필수 | string | 클러스터 이름 |
| result.domainId | 필수 | string | 도메인 ID |
| result.clusterType | 필수 | string | 클러스터 등록 유형 |
| result.status | 필수 | string | 클러스터 상태. 가능 값: PENDING(요청 수락), PROVISIONING(프로비저닝 중), ACTIVE(정상 운영), ERROR(오류), DELETING(삭제 중), DELETED(삭제 완료). |


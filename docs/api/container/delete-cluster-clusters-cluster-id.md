# 클러스터 삭제를 비동기로 요청

클러스터 삭제를 비동기로 요청합니다.

### 동작
- 클러스터 존재 확인 후 해당 클러스터의 App Catalog 런타임 배포를 먼저 조회합니다.
- App Catalog 앱 또는 Operator가 하나라도 남아 있으면 `409 Conflict`를 반환하며 삭제를 시작하지 않습니다.
- 요청이 수락되면 즉시 `202 Accepted`를 반환합니다.
- 실제 삭제는 백그라운드에서 진행되며, 응답의 `result.status`는 `DELETING`입니다.
- `DELETING` 상태에서 재요청해도 멱등하게 `202`를 반환합니다.

### 상태별 처리
- 삭제 수락 가능 상태: `ACTIVE`, `PROVISIONING`, `ERROR`, `PENDING`
- 등록 클러스터는 App Catalog 배포 검사를 통과하면 백그라운드 작업 없이 즉시 soft delete합니다.
- kubeconfig가 있으면 상태와 관계없이 Authn partition 다음에 K8s LB Service를 정리합니다.
- K8s LB Service 정리가 완료된 뒤 ArgoCD와 cleanup 리소스 삭제를 진행합니다.

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/container/cluster/clusters/{cluster_id}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| cluster_id | path | 필수 | integer | 클러스터 ID. 범위 1~ |

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 보내도 무시됩니다.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 202 Accepted | 클러스터 삭제 요청 수락 (비동기 처리 시작) |
| 404 Not Found | 클러스터 또는 kubeConfig를 찾을 수 없음 |
| 409 Conflict | 삭제할 수 없는 클러스터 상태 또는 설치된 App Catalog 앱 존재 |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 202

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.clusterId | 필수 | integer | 클러스터 ID |
| result.status | 필수 | string | 삭제 상태 |
| result.message | 선택 | string | 추가 메시지. 기본값 "" |


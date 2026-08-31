# 클러스터 셸 접속 URL 생성

클러스터 내 전용 namespace에서 kubectl shell Pod을 재사용 우선으로 준비하고 Pod 준비를 최대 10초 대기한 뒤,
Pod 컨테이너 Shell WebSocket 연결 URL을 반환합니다.

### 동작
- 재사용 가능한 고정 `k8s-shell` Pod이 있으면 삭제/생성 없이 사용
- 고정 Pod을 재사용할 수 없으면 `k8s-shell-{uuid12}` session Pod 생성
- ServiceAccount, ClusterRoleBinding은 없을 때만 생성
- `shell` 컨테이너가 exec 가능한 상태인지 최대 10초 대기
- WebSocket URL 반환

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/container/cluster/clusters/{cluster_id}/shell
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
| 200 OK | Successful Response |
| 404 Not Found | 클러스터 또는 kubeConfig를 찾을 수 없음 |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.websocketUrl | 필수 | string | Pod 컨테이너 Shell WebSocket 연결 URL |


# StatefulSet 셸 연결 정보 조회

StatefulSet에 속한 가장 최신의 Running Pod를 기준으로 Shell 연결 정보를 조회합니다.

### Pod 선택 기준

1. StatefulSet에 속한 Pod 목록 조회
2. `status == "Running"` Pod만 필터링
3. `createdAt` 기준 최신순 정렬
4. 첫 번째 Pod 선택

### Shell 연결 가능 조건

| 조건 | 설명 |
|------|------|
| Pod Phase == "Running" | Pod이 Running 상태 |
| Container State == "running" | container.state.running 객체 존재 |

**두 조건을 모두 만족해야 `isShellAvailable: true`**

### 에러 케이스

- **404**: Running 상태의 Pod가 없는 경우

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/workload/statefulsets/{statefulset_name}/shell/info
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| statefulset_name | path | 필수 | string | StatefulSet 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 범위 1~ |
| namespace | 필수 | string | 네임스페이스 이름. 길이 0~63 |

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 보내도 무시됩니다.

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
| result.podName | 필수 | string | Pod 이름 |
| result.namespace | 필수 | string | 네임스페이스 |
| result.containers | 선택 | array (object) | 컨테이너별 Shell 연결 정보 목록 **UI 사용 가이드** \| 사용 위치 \| 동작 \| 매칭 방식 \| \|-----------\|------\|-----------\| \| Pod 디테일 페이지 Execute Shell \| 첫 번째 컨테이너 접속 \| containers[0] \| \| 컨테이너 리스트 Execute Shell \| 선택한 컨테이너 접속 \| containerName 매칭 \| |
| result.containers[].containerName | 필수 | string | 컨테이너 이름 |
| result.containers[].isShellAvailable | 필수 | boolean | Shell 연결 가능 여부 (Pod Running + Container running일 때 true) |
| result.containers[].websocketUrl | 선택 | string 또는 null | WebSocket URL (is_shell_available이 false면 null) |


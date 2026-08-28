# [WebSocket 문서] Pod 컨테이너 Shell 연결 API 문서

## WebSocket Shell API 문서

이 엔드포인트는 WebSocket shell API의 사용 방법을 설명하는 문서입니다.
실제 shell 연결은 WebSocket 전용 prefix인 `/ws/workload` 경로를 사용하세요.

### WebSocket 연결 방법

```
wss://{host}/v1/container/ws/workload/pods/{pod_name}/containers/{container_name}/shell?clusterId={cluster_id}&namespace={namespace}
```

### 메시지 형식

| 방향 | 형식 | 설명 |
|------|------|------|
| **송신 (Client → Server)** | `string` | 터미널 입력 (예: `ls -la\n`) |
| **수신 (Server → Client)** | `string` | 터미널 출력 (stdout/stderr) |

성공 시 별도의 JSON 이벤트(`success`, `ready`, `connected` 등)는 전송하지 않습니다.
컨테이너 shell이 정상 실행되면 prompt 또는 명령 결과가 문자열로 내려갑니다.

### Shell 실행 후보

서버는 WebSocket 연결 시점에 아래 순서로 shell을 직접 실행합니다.

1. `/bin/bash -i`
2. `/bin/sh -i`

### Shell 없음 에러

대상 컨테이너 이미지에 `/bin/bash`, `/bin/sh`가 모두 없어 터미널을 시작할 수 없는 경우,
서버는 아래 문자열을 WebSocket text frame으로 전송한 뒤 연결을 종료합니다.

```
__ERROR_CODE__:10000:SHELL_NOT_FOUND
```

종료 정보:

| 항목 | 값 |
|------|------|
| close code | `1011` |
| close reason | `SHELL_NOT_FOUND` |

프론트엔드는 위 문자열을 일반 터미널 출력으로 렌더링하지 않고,
아래 사용자 메시지로 표시해야 합니다.

```
This container image does not include sh or bash, so the terminal cannot be started.
```

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/workload/pods/{pod_name}/containers/{container_name}/shell/docs
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| pod_name | path | 필수 | string | Pod 이름. Pod 이름 |
| container_name | path | 필수 | string | 컨테이너 이름. 컨테이너 이름 |

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
| result.message | 필수 | string | 안내 메시지 |
| result.websocketUrl | 필수 | string | WebSocket 연결 URL 템플릿 |
| result.pathParameters | 필수 | object | Path 파라미터 설명 |
| result.queryParameters | 필수 | object | Query 파라미터 설명 |
| result.messageFormat | 필수 | object | 메시지 형식 설명 |
| result.usageExamples | 필수 | object | 사용 예시 |
| result.errorCodes | 필수 | object | WebSocket 에러 코드 |


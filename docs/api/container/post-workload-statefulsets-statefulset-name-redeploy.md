# Redeploy Statefulset

StatefulSet 재배포

kubectl rollout restart statefulset와 동일한 동작을 수행합니다.
Pod 템플릿에 restartedAt 어노테이션을 추가하여 새로운 롤아웃을 트리거합니다.

See Also:
    [API 문서](https://www.notion.so/2bd9eddc34e6819fb4fad7835d7b8805)

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/container/workload/statefulsets/{statefulset_name}/redeploy
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| statefulset_name | path | 필수 | string | StatefulSet 이름. StatefulSet 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |
| namespace | 필수 | string | 네임스페이스 이름. 네임스페이스 이름. 길이 0~63 |

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
| result.statefulsetName | 필수 | string | 재배포된 StatefulSet 이름 |
| result.namespace | 필수 | string | StatefulSet이 속한 네임스페이스 |
| result.clusterId | 필수 | integer | 클러스터 ID |
| result.restartedAt | 필수 | string (date-time) | 재시작 시각 (restartedAt 어노테이션 값, RFC 3339 UTC) |
| result.message | 선택 | string | 추가 메시지. 기본값 "" |


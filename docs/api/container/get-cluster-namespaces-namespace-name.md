# Get Namespace Detail

Namespace 상세 조회

특정 클러스터에 존재하는 Namespace의 상세 정보를 조회합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/cluster/namespaces/{namespace_name}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| namespace_name | path | 필수 | string | Namespace 이름. Namespace 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 클러스터 ID. 범위 1~ |

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
| result.status | 필수 | string | Namespace 상태 (Terminating, Active, Unknown) |
| result.createdAt | 필수 | string (date-time) | 생성 시각 (ISO 8601 형식, UTC) |
| result.description | 선택 | string 또는 null | Namespace 설명 |
| result.labels | 선택 | object | 레이블 |
| result.annotations | 선택 | object | 어노테이션 (description 제외) |


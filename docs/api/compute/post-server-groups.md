# Create Server Group

ServerGroup을 생성합니다

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/compute/server-groups
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Project-Id | 선택 | string 또는 null | OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중). OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중) |
| X-Partition-Id | 선택 | string 또는 null | 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일). 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일) |

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| serverGroupName | 필수 | string | ServerGroup 이름 (1~255자, 인쇄 가능 문자, 선행/후행 공백 금지) |
| createType | 필수 | string | 생성 타입 (Policy: anti-affinity, affinity, soft-anti-affinity, soft-affinity). 값: affinity, anti-affinity, soft-affinity, soft-anti-affinity |

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
| result.serverGroupName | 필수 | string | ServerGroup 이름 |
| result.serverGroupId | 필수 | string | ServerGroup ID (고유 식별자) |
| result.policy | 필수 | string | 배치 정책 (affinity, anti-affinity, soft-affinity, soft-anti-affinity) |
| result.memberCount | 필수 | integer | 서버그룹에 속한 인스턴스 수 |


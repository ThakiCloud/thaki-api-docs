# 바인딩 동기화

대상(TPN, org, project, role)에 연결된 정책 목록을 동기화합니다.
- 기존 바인딩 중 요청에 없는 것은 삭제
- 요청에 있지만 기존에 없는 것은 생성
- 이미 존재하는 것은 skip
- 트랜잭션으로 처리: 전체 성공 또는 전체 실패

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authz/bindings/sync
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| targetType | 필수 | string | 대상 타입 (tpn, org, project, role) |
| targetId | 필수 | string | 대상 ID |
| orgId | 선택 | string | 조직 ID (생략 시 '*' = 플랫폼 전역). 기본값 "*" |
| policyIds | 필수 | array (string) | 동기화할 정책 ID 목록 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 400 Bad Request | Bad Request |
| 404 Not Found | Not Found |
| 422 Unprocessable Entity | Validation Error |
| 500 Internal Server Error | Internal Server Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.createdCount | 필수 | integer | 생성된 바인딩 수 |
| result.deletedCount | 필수 | integer | 삭제된 바인딩 수 |
| result.skippedCount | 필수 | integer | 유지된 바인딩 수 |
| result.bindings | 선택 | array (object) | 동기화 이후 최종 바인딩 목록 |
| result.bindings[].bindingId | 필수 | string | 바인딩 ID (UUID) |
| result.bindings[].policyId | 필수 | string | 정책 ID |
| result.bindings[].policyName | 선택 | string 또는 null | 정책명 |
| result.bindings[].policyKind | 필수 | string | 정책 종류 |
| result.bindings[].targetType | 필수 | string | 대상 타입 |
| result.bindings[].targetId | 필수 | string | 대상 ID |
| result.bindings[].targetName | 선택 | string 또는 null | 대상명 (역할명, TPN 등) |
| result.bindings[].createdAt | 필수 | string | 생성 시각 (ISO 8601) |
| result.bindings[].createdBy | 필수 | string | 생성자 |


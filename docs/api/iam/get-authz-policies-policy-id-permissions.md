# 정책의 Statement를 파싱하여 권한 목록 조회

정책의 Statement를 파싱하여 권한 목록을 조회합니다.

**응답 필드 설명:**
- `app`: 애플리케이션 이름 (예: Compute, Storage)
- `partition`: 파티션 (예: tenantA, *all)
- `resource`: 리소스 패턴 (예: vm/*, volume/*)
- `action_class`: Action 클래스 목록 (예: [Read, List, Write])
- `actions`: 상세 Action ID 목록

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/policies/{policy_id}/permissions
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| policy_id | path | 필수 | string |  |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| orgId | 선택 | string 또는 null | 조직 ID |
| page | 선택 | integer | 페이지 번호 (0: 전체 데이터). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string 또는 null | 정렬 필드 |
| order | 선택 | string 또는 null | 정렬 방향 (asc \| desc) |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


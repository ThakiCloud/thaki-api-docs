# 임시 역할 부여 목록 조회

필터(tpn, roleId, status, orgId, projectId)와 페이지네이션을 지원합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/temporary-grants
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| tpn | 선택 | string 또는 null | 대상 주체 TPN 필터 |
| roleId | 선택 | string 또는 null | Role ID 필터 |
| status | 선택 | string 또는 null | 상태 필터 |
| orgId | 선택 | string 또는 null | 조직 ID 필터 |
| projectId | 선택 | string 또는 null | 프로젝트 ID 필터 |
| page | 선택 | integer | 페이지 번호. 기본값 1. 범위 1~ |
| page_size | 선택 | integer | 페이지 크기. 기본값 10. 범위 1~100 |
| sort | 선택 | string 또는 null | 정렬 필드 |
| order | 선택 | string 또는 null | 정렬 방향(asc/desc) |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


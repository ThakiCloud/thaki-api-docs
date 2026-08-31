# 조직/프로젝트별 역할 목록 조회

조직/프로젝트별 Role 목록을 조회합니다. org_id가 없으면 전체 조직의 Role을 조회합니다 (관리자용).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/roles
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0=전체 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 10. 범위 1~100 |
| sort | 선택 | string 또는 null | 정렬 필드 |
| order | 선택 | string 또는 null | 정렬 방향 (asc \| desc) |
| orgId | 선택 | string 또는 null | 조직 ID (없으면 전체 조회) |
| projectId | 선택 | string 또는 null | 프로젝트 ID |
| name | 선택 | string 또는 null | 이름 부분 일치. 길이 2~ |
| description | 선택 | string 또는 null | 설명 부분 일치 |
| policy | 선택 | string 또는 null | 연결된 정책명 부분 일치 |
| type | 선택 | string 또는 null | 타입 필터 (built-in, custom) |
| createdAtGte | 선택 | string 또는 null | 생성일 이상 (ISO8601) |
| createdAtLte | 선택 | string 또는 null | 생성일 이하 (ISO8601) |
| userCountGte | 선택 | integer 또는 null | 사용자 수 이상. 범위 0~ |
| userCountLte | 선택 | integer 또는 null | 사용자 수 이하. 범위 0~ |
| userGroupCountGte | 선택 | integer 또는 null | 그룹 수 이상. 범위 0~ |
| userGroupCountLte | 선택 | integer 또는 null | 그룹 수 이하. 범위 0~ |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


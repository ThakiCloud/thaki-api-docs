# 시뮬레이션 대상 주체 검색

정책 시뮬레이터에서 접근 가능한 주체(User/Group/SA/Role)를 검색합니다. 요청자의 role assignment 기반으로 접근 범위를 결정하고, 해당 범위 내의 주체 목록을 반환합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/policies/simulate/accessible-principals
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| type | 선택 | string 또는 null | 주체 유형 필터 (user, userGroup, role, systemAccount) |
| q | 선택 | string 또는 null | 검색어 (이름/TPN 부분 일치). 길이 0~200 |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


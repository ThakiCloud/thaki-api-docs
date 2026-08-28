# 본인 Role 목록 조회

호출자(본인) TPN이 가진 Role 목록을 조회합니다. 대상은 인증 컨텍스트(JWT)에서 확정되며 타인 Role은 조회할 수 없습니다. 직접 할당된 Role과 소속 그룹을 통해 부여된 Role을 함께 포함합니다. 응답 스키마는 GET /tpns/assignments와 동일합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/role-assignments/me
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0: 전체 조회, 1+: 페이징 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


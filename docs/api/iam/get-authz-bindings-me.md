# 호출자(본인) TPN에 직접 바인딩된 정책 목록 조회

호출자(본인) TPN에 직접 바인딩된 정책 목록을 조회합니다. 본인 TPN 직접 바인딩과 본인이 속한 그룹 경유 바인딩의 합집합을 반환합니다. 대상은 인증 컨텍스트(JWT)에서 확정되며 타인 바인딩은 조회할 수 없습니다. 응답 스키마는 GET /bindings(전체 목록)와 동일하며, 그룹 경유 항목은 target_type=tpn·target_id가 그룹 TPN으로 표기됩니다(개인이 해제 불가).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/bindings/me
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0: 전체 데이터, 기본값: 1). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 기본값 20. 범위 1~100 |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


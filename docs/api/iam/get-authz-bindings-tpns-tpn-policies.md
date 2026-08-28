# TPN(서비스 계정 등)에 직접 연결된 정책 목록 조회 (IAM14 정방향)

특정 TPN(예: service account)에 직접 바인딩된 정책 목록을 상세 정보와 함께 조회합니다. Role/Group 경유 간접 연결은 제외합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/bindings/tpns/{tpn}/policies
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| tpn | path | 필수 | string | 대상 TPN (예: tpn:kr:org-1:proj-a:sa/my-sa). 대상 TPN (예: tpn:kr:org-1:proj-a:sa/my-sa) |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| policyKind | 선택 | string 또는 null | 정책 종류 필터. 정책 종류 필터 |
| page | 선택 | integer | 페이지 번호 (0: 전체 데이터). 페이지 번호 (0: 전체 데이터). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 20. 범위 1~100 |
| sort | 선택 | string 또는 null | 정렬 필드. 정렬 필드 |
| order | 선택 | string 또는 null | 정렬 방향 (asc \| desc). 정렬 방향 (asc \| desc) |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |
| 500 Internal Server Error | Internal Server Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


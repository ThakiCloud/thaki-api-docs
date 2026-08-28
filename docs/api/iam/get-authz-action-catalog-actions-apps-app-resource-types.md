# Resource Type 목록 조회 (DISTINCT)

특정 App에 등록된 고유 Resource Type 목록과 각 Resource Type의 Action 개수를 조회합니다. page=0이면 전체 조회, page &gt; 0이면 페이지네이션 적용.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/action-catalog/actions/apps/{app}/resource-types
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| app | path | 필수 | string |  |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| page | 선택 | integer | 페이지 번호 (0=전체, 1부터 페이지네이션). 페이지 번호 (0=전체, 1부터 페이지네이션). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 100. 범위 1~1000 |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


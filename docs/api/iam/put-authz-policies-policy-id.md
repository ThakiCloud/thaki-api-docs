# 정책 업데이트

정책을 업데이트합니다. 새로운 버전이 생성됩니다. If-Match 헤더로 동시성 제어를 지원합니다.

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authz/policies/{policy_id}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| policy_id | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| if-match | 선택 | string 또는 null |  |

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| meta | 필수 | object | 정책 메타데이터 |
| version | 선택 | string | 정책 스키마 버전 (기본값: 2025-10-01). 기본값 "2025-10-01" |
| statement | 필수 | array (object) | 정책 Statement 목록 |
| name | 선택 | string 또는 null | 정책 이름 |
| description | 선택 | string 또는 null | 정책 설명 |
| changeSummary | 선택 | string 또는 null | 변경 사항 요약 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


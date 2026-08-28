# Role에 TPN 할당

Role에 TPN(user/group)을 할당합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/roles/{role_id}/assignments
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| role_id | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| tpn | 필수 | string | TPN (예: trn:aws:iam::user/john). 길이 1~256 |
| orgId | 선택 | string | 조직 ID (생략 시 '*' = 플랫폼 전역). 기본값 "*". 길이 0~64 |
| projectId | 선택 | string 또는 null | 프로젝트 ID (선택 사항). 길이 1~64 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


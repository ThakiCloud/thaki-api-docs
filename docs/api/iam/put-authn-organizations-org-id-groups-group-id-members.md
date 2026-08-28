# 멤버 동기화

그룹의 전체 멤버 목록을 동기화합니다. 기존 멤버 중 요청에 없는 멤버는 제거되고, 새 멤버는 추가됩니다.

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/groups/{group_id}/members
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| org_id | path | 필수 | string | 조직 ID. 조직 ID |
| group_id | path | 필수 | string | 그룹 ID. 그룹 ID |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| members | 필수 | array (object) | 동기화할 전체 멤버 목록 |
| members[].identifierType | 필수 | string |  |
| members[].identifier | 필수 | string | 길이 3~256 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |


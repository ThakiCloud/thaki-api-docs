# 사용자가 속한 그룹 동기화

사용자가 속한 그룹 목록을 지정한 목록으로 동기화합니다. 빈 목록 전달 시 모든 그룹에서 제거됩니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/users/{tpn}/groups:sync
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| tpn | path | 필수 | string | 사용자 TPN. 사용자 TPN. 길이 1~ |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| groupIds | 필수 | array (string) | 동기화할 그룹 ID 목록 (빈 목록 시 모든 그룹에서 제거) |

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


# 본인 비밀번호 사전검증

비밀번호 변경 전에 조직 정책 위배 여부를 미리 확인합니다. 실제 변경은 수행하지 않습니다. 대상은 인증 컨텍스트(JWT)에서 확정되며 타인 정책으로는 검증할 수 없습니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/me/password/validate
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| password | 필수 | string | 검증할 비밀번호. 길이 1~ |

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
| result.valid | 필수 | boolean | 검증 통과 여부 |
| result.errors | 선택 | array (string) | 검증 실패 사유 목록 |


# 비밀번호 초기화 요청 (본인)

비밀번호를 잊어버린 사용자가 이메일로 비밀번호 초기화 링크를 요청합니다.

**인증 불필요** (Public 엔드포인트)

### 요청
- `email`: 초기화할 계정의 이메일
- `orgId`: 조직 ID

### 응답
보안을 위해 사용자 존재 여부와 관계없이 동일한 응답을 반환합니다.

### 프로세스
1. 사용자 조회 (이메일 + 조직)
2. Keycloak 비밀번호를 임시값으로 설정
3. IAM DB에 `force_password_change=true` 설정
4. 초기화 토큰 생성 및 Redis 저장 (24시간 유효)
5. 이메일 발송

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authn/password/forgot
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| email | 필수 | string | 비밀번호를 초기화할 계정의 이메일. 길이 1~255 |
| orgId | 필수 | string | 조직 ID. 길이 1~64 |

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
| result.message | 선택 | string | 응답 메시지. 기본값 "비밀번호 초기화 이메일이 전송되었습니다." |


# 조직 MFA 정책 설정

조직의 MFA 정책(MFA 필수 여부 및 허용되는 MFA 방법)을 설정합니다.

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/mfa-policy
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| org_id | path | 필수 | string | 조직 ID. 조직 ID |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| mfaPolicy | 필수 | string | MFA 정책 (voluntary: 자발적, required: 필수). 값: voluntary, required |
| allowedMethods | 필수 | array (string) | 허용된 MFA 방법 |

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
| result.orgId | 필수 | string | 조직 ID |
| result.mfaPolicy | 필수 | string | MFA 정책 (voluntary: 자발적, required: 필수). 값: voluntary, required |
| result.allowedMethods | 필수 | array (string) | 허용된 MFA 방법 |


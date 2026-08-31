# 인증된 사용자가 접근 가능한 조직 목록 조회

인증된 사용자가 접근 가능한 조직 목록을 조회합니다. 시스템 어드민은 전체 조직, 일반 사용자는 자신이 속한 조직만 반환됩니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/profile/organizations
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.organizations | 선택 | array (object) | 접근 가능한 조직 목록 |
| result.organizations[].orgId | 필수 | string | 조직 ID |
| result.organizations[].name | 필수 | string | 조직 이름 |
| result.organizations[].displayName | 선택 | string 또는 null | 표시 이름 |
| result.organizations[].status | 필수 | string | 조직 상태 (active, disabled 등) |


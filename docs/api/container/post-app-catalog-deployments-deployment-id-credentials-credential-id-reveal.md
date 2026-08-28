# Reveal App Catalog Deployment Credential

App Catalog raw credential 값을 Reveal/Copy 목적 호출로 조회합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/container/app-catalog/deployments/{deployment_id}/credentials/{credential_id}/reveal
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| deployment_id | path | 필수 | integer | App Catalog 배포 ID. App Catalog 배포 ID. 범위 1~ |
| credential_id | path | 필수 | string | 고정 credential id. 고정 credential id |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Domain-Id | 필수 | string | Domain ID. Domain ID |
| X-Domain-Name | 필수 | string | Domain Name. Domain Name |

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| purpose | 필수 | string | credential 조회 목적. reveal 또는 copy. 값: reveal, copy |

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
| result.credentialId | 필수 | string | 고정 credential id |
| result.value | 필수 | string | Secret에서 decode한 raw credential 값 |


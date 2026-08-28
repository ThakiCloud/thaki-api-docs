# 정책 평가

접근 제어 요청을 평가하여 Allow/Deny 결정을 반환합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/policies/evaluate
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| principalTpn | 필수 | string | 주체 TPN (예: tpn:ap-ne2:org-1::user/alice) |
| apiMethod | 필수 | string | HTTP 메서드 (GET, POST, PUT, PATCH, DELETE) |
| apiPath | 필수 | string | API 경로 (예: /v1/compute/instances/{instanceId}) |
| pathParams | 선택 | object | 경로 파라미터 (예: {instanceId: 'vm-123'}) |
| queryParams | 선택 | object | 쿼리 파라미터 (예: {k: ['v1', 'v2'], k2: ['v']}) |
| context | 선택 | object | 평가 컨텍스트. PEP에서 전달하는 요청 정보: thaki:projectId, thaki:userAgent, thaki:requestId, thaki:sourceIp, thaki:mfaPresent, time:currentTime 등 |
| verbose | 선택 | boolean | 상세 평가 정보 반환 여부. 기본값 false |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


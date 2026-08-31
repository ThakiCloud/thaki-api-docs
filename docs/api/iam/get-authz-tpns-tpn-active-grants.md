# 특정 주체의 활성 임시 grant 조회

특정 주체의 활성 임시 grant를 조회합니다. role_id와 expires_at을 반환하여 STS가 세션 TTL 상한을 계산할 수 있게 합니다. 임의 주체의 grant를 노출하므로 호출자 스코프를 검증합니다(설계 10장).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authz/tpns/{tpn}/active-grants
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| tpn | path | 필수 | string |  |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


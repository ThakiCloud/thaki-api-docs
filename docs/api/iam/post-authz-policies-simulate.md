# 정책 시뮬레이션 (Batch)

정책을 배포하기 전에 조건별·액션별 판정을 시뮬레이션합니다. 단건/다건 모두 이 API로 처리합니다. 정책 검증 모드(policyValidation)와 주체 권한 검증 모드(principalValidation)를 지원합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/iam/authz/policies/simulate
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| mode | 필수 | string | 시뮬레이션 모드. 값: policyValidation, principalValidation |
| principal | 선택 | object 또는 null | 주체 (principalValidation 모드에서 필수) |
| principal.tpn | 필수 | string | 평가 대상 주체 TPN |
| principal.type | 필수 | string | 주체 유형. 값: user, userGroup, role, systemAccount |
| principal.groupTpns | 선택 | array (string) | User 선택 시 소속 그룹 TPN 목록 |
| policyIds | 선택 | array (string) | 평가할 정책 ID 목록 (policyValidation 모드에서 필수) |
| conditions | 필수 | array (object) | 시뮬레이션 조건 목록 |
| conditions[].resourceTrn | 필수 | string | 평가 대상 TRN |
| conditions[].actionIds | 필수 | array (string) | 평가할 액션 목록 |
| context | 선택 | object | MFA, source IP 등 공통 평가 컨텍스트 |
| verbose | 선택 | boolean | Statement 상세 반환 여부. 기본값 false |
| clientToken | 선택 | string 또는 null | FE stale 감지용 클라이언트 토큰 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


# Role Metadata 설정

Role에 Provider별 권한 매핑 정보를 설정합니다 (upsert).

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/iam/authz/roles/{roleId}/metadata/{namespace}/{key}
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| roleId | path | 필수 | string | Role ID |
| namespace | path | 필수 | string | Provider namespace (openstack, k8s, ceph) |
| key | path | 필수 | string | Metadata key (role_name, cluster_role, capability) |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| value | 필수 | object | Metadata 값 (JSON) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(중복·상태 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


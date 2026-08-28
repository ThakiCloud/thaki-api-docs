# Get Secret Template

Secret 템플릿 YAML 조회

Secret 생성을 위한 템플릿 YAML을 조회합니다.
secretType 파라미터에 따라 YAML의 type 필드가 동적으로 변경됩니다.

- null (미전송): Opaque
- default: Opaque
- opaque: Opaque
- httpBasicAuth: kubernetes.io/basic-auth
- registry: kubernetes.io/dockerconfigjson
- sshKey: kubernetes.io/ssh-auth
- tls: kubernetes.io/tls

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/storage/secrets/template/yaml
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| secretType | 선택 | string 또는 null | Secret 유형 (default, opaque, httpBasicAuth, registry, sshKey, tls). Secret 유형 (default, opaque, httpBasicAuth, registry, sshKey, tls). 값: default, opaque, httpBasicAuth, registry, sshKey, tls |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Domain-Id | 필수 | string | Domain ID. Domain ID |
| X-Domain-Name | 필수 | string | Domain Name. Domain Name |

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
| result.yamlContent | 필수 | string | Secret YAML 내용 |


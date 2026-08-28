# App Catalog 배포 values.yaml 다운로드

App name으로 저장된 App Catalog 배포 리소스를 찾아 렌더링된 values.yaml 파일을 다운로드합니다. 응답은 JSON 래퍼가 아닌 YAML 파일 본문이며, Content-Disposition 헤더로 다운로드 파일명을 전달합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/app-catalog/deployments/{app_name}/values-yaml
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| app_name | path | 필수 | string | App name. App name |

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
| 200 OK | values.yaml 파일 다운로드 성공 |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


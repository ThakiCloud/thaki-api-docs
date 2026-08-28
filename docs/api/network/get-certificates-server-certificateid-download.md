# Download Server Certificate

SERVER 인증서를 ZIP 번들로 다운로드합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/network/certificates/server/{certificateId}/download
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| certificateId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | ZIP 파일 다운로드 |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.


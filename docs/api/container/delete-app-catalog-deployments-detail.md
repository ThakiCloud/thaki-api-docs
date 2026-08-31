# 앱 카탈로그 배포 삭제

DB ID가 없는 ArgoCD-only 배포도 목록 응답의 argoAppName으로 ArgoCD Application과 tenant-catalog values 파일 삭제를 요청합니다.

## HTTP 요청

```http
DELETE https://<your-console-host>/api/v1/container/app-catalog/deployments/detail
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| argoAppName | 필수 | string | 목록 응답의 argoAppName 값 |

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 보내도 무시됩니다.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.id | 필수 | integer | 삭제한 배포 ID. ArgoCD-only 항목은 0입니다 |
| result.appName | 필수 | string | 삭제한 App name |
| result.namespace | 필수 | string | 삭제한 배포 네임스페이스 |
| result.status | 필수 | string | 삭제 처리 상태 |
| result.message | 필수 | string | 삭제 처리 메시지 |


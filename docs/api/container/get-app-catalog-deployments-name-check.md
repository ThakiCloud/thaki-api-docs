# App Catalog user-app 이름 중복 확인

App Catalog 설치 플로우에서 사용자가 입력한 user-app 이름이 선택한 application과 cluster에 이미 사용 중인지 확인하는 API입니다. 동일한 application + clusterId + userApp 조합의 배포가 이미 존재하면 available=false, 사용 가능하면 available=true를 반환합니다. 중복 확인은 namespace와 무관하게 application + cluster 단위로 수행합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/app-catalog/deployments/name-check
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| application | 필수 | string | App Catalog 어플리케이션 이름 |
| clusterId | 필수 | integer | 배포 대상 k8s_clusters.id. 범위 1~ |
| userApp | 필수 | string | 중복 확인할 사용자 정의 어플리케이션 이름 |

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 보내도 무시됩니다.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | user-app 이름 사용 가능 여부 |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.available | 필수 | boolean | user-app 이름 사용 가능 여부. 중복이면 false, 사용 가능하면 true |


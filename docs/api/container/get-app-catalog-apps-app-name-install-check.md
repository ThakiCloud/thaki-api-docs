# App Catalog 설치 의존성 확인

리스트 화면에서 install 버튼을 눌렀을 때 호출하는 사전 점검 API입니다. 선택한 앱이 단독 설치 가능한지, 다른 application 또는 operator 의존성이 필요한지 확인하고, 미설치 의존성이 있으면 dependencyMessage로 required_operator, application_name, required_message를 반환합니다.

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/app-catalog/apps/{app_name}/install-check
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| app_name | path | 필수 | string | 앱 이름 |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 설치 여부를 확인할 k8s_clusters.id. 범위 1~ |
| tab | 선택 | string | 설치 버튼이 눌린 App Catalog 탭. 값: applications, operators. 기본값 "applications" |
| namespace | 선택 | string 또는 null | 현재 화면의 namespace. 의존성 설치 여부는 cluster 단위로 확인합니다. |

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 보내도 무시됩니다.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | 의존성 타입과 미설치 의존성 안내 메시지 |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.dependencyType | 필수 | string | 의존성 타입. application, operator, none 중 하나. 값: application, operator, none |
| result.dependencyMessage | 필수 | object 또는 null | 미설치 의존성이 있을 때 표시할 안내 메시지 |
| result.dependencyMessage.required_operator | 필수 | string 또는 null | 필요한 operator 이름. operator 의존성이 아니면 null |
| result.dependencyMessage.application_name | 필수 | string 또는 null | 필요한 application 또는 operator App Catalog app 이름 |
| result.dependencyMessage.required_message | 필수 | string | 사용자에게 보여줄 의존성 안내 메시지 |


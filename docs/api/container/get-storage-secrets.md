# List Secrets

Secret 목록 조회

특정 클러스터의 Secret 목록을 조회합니다.
페이지네이션 및 필터링을 지원합니다.

- namespace: 네임스페이스 필터 (복수 지정 가능, 생략 시 전체 네임스페이스 조회)
- secretType: Secret 타입 필터 (단일)
- secretName: Secret 이름 필터 (복수 지정 가능, OR 조건)

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/storage/secrets
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 범위 1~ |
| namespace | 선택 | array (string) | 네임스페이스 목록 (선택, 복수 지정 가능: namespace=default&namespace=kube-system). None이면 전체 네임스페이스 조회 |
| secretType | 선택 | string 또는 null | Secret 타입 필터 (단일, 선택). 가능한 값: opaque, basicAuth, dockerConfigJson, dockerCfg, sshAuth, tls, serviceAccountToken, bootstrapToken. 값: opaque, basicAuth, dockerConfigJson, dockerCfg, sshAuth, tls, serviceAccountToken, bootstrapToken |
| secretName | 선택 | array (string) | Secret 이름 필터 (복수 지정 가능: secretName=test&secretName=rock). OR 조건 + 부분 일치 (test → test-1, test-secret 등 포함) |
| page | 선택 | integer | 페이지 번호 (1부터 시작). 기본값 1. 범위 1~ |
| pageSize | 선택 | integer | 페이지 크기 (최소 1, 최대 100). 기본값 10. 범위 1~100 |
| sortBy | 선택 | string | 정렬 기준 (name, namespace, type, createdAt). 값: name, namespace, type, createdAt. 기본값 "createdAt" |
| sortOrder | 선택 | string | 정렬 순서 (asc, desc). 값: asc, desc. 기본값 "desc" |

## 요청 헤더

인증 헤더와 조직 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 파티션 헤더(X-Partition-Id)를 사용하지 않습니다. 보내도 무시됩니다.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].name | 필수 | string | Secret 이름 |
| result.data[].namespace | 필수 | string | Secret이 속한 네임스페이스 |
| result.data[].secretType | 필수 | string | Secret 타입 (Opaque, kubernetes.io/tls 등) |
| result.data[].status | 선택 | string 또는 null | Secret 상태 (조건 없음이면 null) |
| result.data[].description | 선택 | string | Secret 설명 (annotations의 description 키). 기본값 "" |
| result.data[].labels | 선택 | object | Secret 레이블 |
| result.data[].annotations | 선택 | object | Secret 어노테이션 (description 제외) |
| result.data[].createdAt | 필수 | string (date-time) | 생성 시각 (ISO 8601 형식, UTC) |
| result.data[].stringData | 선택 | object | Secret 데이터 (base64 디코딩된 값) |
| result.data[].keys | 선택 | array (string) | Secret 데이터 키 목록 (stringData의 모든 키) |
| result.data[].dataDisplay | 선택 | string | 데이터 표시 형식 (첫 번째 키 + 나머지 개수). 기본값 "" |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


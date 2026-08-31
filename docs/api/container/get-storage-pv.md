# PV 목록 조회

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/container/storage/pv
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| clusterId | 필수 | integer | 클러스터 ID. 범위 1~ |
| filterName | 선택 | array (string) | 이름 필터 목록 (선택, 복수 지정 가능: filterName=app&filterName=data). 부분일치(OR) 검색 |
| page | 선택 | integer | 페이지 번호 (1부터 시작). 기본값 1. 범위 1~ |
| pageSize | 선택 | integer | 페이지 크기 (1~100). 기본값 10. 범위 1~100 |
| sortBy | 선택 | string | 정렬 기준 (name, reclaimPolicy, persistentVolumeClaim, reason, createdAt). 값: name, reclaimPolicy, persistentVolumeClaim, reason, createdAt. 기본값 "createdAt" |
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
| result.data[].status | 필수 | string | PV 상태 (Available, Pending, Failed, Released, Bound) |
| result.data[].name | 필수 | string | PV 이름 |
| result.data[].description | 선택 | string | 설명 (annotations['description']). 기본값 "" |
| result.data[].labels | 선택 | object | PV 레이블 |
| result.data[].annotations | 선택 | object | PV 어노테이션 (description 제외) |
| result.data[].createdAt | 필수 | string (date-time) | 생성 시각 (ISO 8601 형식, UTC) |
| result.data[].reclaimPolicy | 선택 | string | 리클레임 정책 (Retain, Delete, Recycle). 기본값 "unknown" |
| result.data[].persistentVolumeClaim | 선택 | object 또는 null | 바인딩된 PVC 참조 정보 (없으면 null) |
| result.data[].persistentVolumeClaim.namespace | 필수 | string | PVC 네임스페이스 |
| result.data[].persistentVolumeClaim.name | 필수 | string | PVC 이름 |
| result.data[].source | 선택 | string | CSI 드라이버 식별자. 기본값 "" |
| result.data[].capacity | 선택 | string | PV 용량. 기본값 "" |
| result.data[].accessModes | 선택 | object | 접근 모드 요약 |
| result.data[].accessModes.singleNodeReadWrite | 선택 | boolean | ReadWriteOnce 포함 여부. 기본값 false |
| result.data[].accessModes.manyNodesReadOnly | 선택 | boolean | ReadOnlyMany 포함 여부. 기본값 false |
| result.data[].accessModes.manyNodesReadWrite | 선택 | boolean | ReadWriteMany 포함 여부. 기본값 false |
| result.data[].accessModeList | 선택 | array (string) | 접근 모드 원본 목록 |
| result.data[].reason | 선택 | string | 상태 사유. 기본값 "" |
| result.data[].nodeSelectors | 선택 | array (array (object)) | 노드 셀렉터 표현식 (nodeSelectorTerms) |
| result.data[].mountOptions | 선택 | array (string) | PV 마운트 시 적용할 옵션 목록 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


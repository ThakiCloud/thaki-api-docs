# List Instance Templates

인스턴스 템플릿 목록을 조회합니다

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/compute/instance-templates
```

## URI 매개변수

없습니다.

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sort | 선택 | string | 정렬 필드. 정렬 필드. 값: name, description, createdAt, visibility |
| order | 선택 | string | 정렬 방향. 정렬 방향. 값: asc, desc |
| visibilityCategory | 필수 | string | 조회 범주 (public: 공개 템플릿, private: 내 프로젝트 템플릿, favorites: 즐겨찾기 템플릿). 조회 범주 (public: 공개 템플릿, private: 내 프로젝트 템플릿, favorites: 즐겨찾기 템플릿). 값: public, private, favorites |
| visibility | 선택 | string 또는 null | 공개 상태 필터 (public: 공개, private: 비공개, 미전송 시 전체). 공개 상태 필터 (public: 공개, private: 비공개, 미전송 시 전체). 값: public, private |
| name | 선택 | array (string) | 이름 필터 (부분 일치, 다중 값 OR). 이름 필터 (부분 일치, 다중 값 OR) |
| templateId | 선택 | array (string) | 템플릿 ID 필터 (부분 일치, 다중 값 OR). 템플릿 ID 필터 (부분 일치, 다중 값 OR) |
| description | 선택 | array (string) | 설명 필터 (부분 일치, 다중 값 OR). 설명 필터 (부분 일치, 다중 값 OR) |
| isFavorite | 선택 | boolean 또는 null | 즐겨찾기 여부 필터 (true: 즐겨찾기만, false: 즐겨찾기 제외, 미전송 시 전체). 즐겨찾기 여부 필터 (true: 즐겨찾기만, false: 즐겨찾기 제외, 미전송 시 전체) |
| createdAtRange | 선택 | array (string) | 생성일 범위 필터 (반복 가능). 형식 'YYYY-MM-DD..YYYY-MM-DD', 여러 개 지정 시 OR 결합.. 생성일 범위 필터 (반복 가능). 형식 'YYYY-MM-DD..YYYY-MM-DD', 여러 개 지정 시 OR 결합. |
| page | 선택 | integer | 페이지 번호 (0이면 전체 조회). 페이지 번호 (0이면 전체 조회). 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 페이지 크기. 페이지 크기. 기본값 10. 범위 1~ |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Project-Id | 선택 | string 또는 null | OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중). OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중) |
| X-Partition-Id | 선택 | string 또는 null | 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일). 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일) |

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
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.data[].basicInfo | 필수 | object | 기본 정보 |
| result.data[].basicInfo.templateId | 필수 | string | 템플릿 ID |
| result.data[].basicInfo.name | 필수 | string | 템플릿 이름 |
| result.data[].basicInfo.visibility | 필수 | string | 공개 범위 (public: 공개, private: 비공개) |
| result.data[].basicInfo.projectId | 선택 | string 또는 null | 소유 프로젝트 ID |
| result.data[].basicInfo.projectName | 선택 | string 또는 null | 프로젝트 이름 |
| result.data[].basicInfo.isFavorited | 필수 | boolean | 즐겨찾기 여부 |
| result.data[].basicInfo.description | 선택 | string 또는 null | 설명 |
| result.data[].basicInfo.createdAt | 선택 | string (date-time) | 생성 일시 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


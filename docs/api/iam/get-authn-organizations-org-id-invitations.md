# 조직의 초대 목록 조회

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/organizations/{org_id}/invitations
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| org_id | path | 필수 | string | 조직 ID |

## 쿼리 매개변수

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| sort | 선택 | string 또는 null |  |
| order | 선택 | string 또는 null |  |
| page | 선택 | integer | 기본값 1. 범위 0~ |
| pageSize | 선택 | integer | 기본값 10. 범위 1~100 |
| status | 선택 | string 또는 null |  |
| inviterTpn | 선택 | string 또는 null |  |
| emailPrefix | 선택 | string 또는 null | 길이 0~128 |

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

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
| result.data[].invitationId | 필수 | string | 초대 ID |
| result.data[].email | 필수 | string | 마스킹된 이메일 |
| result.data[].orgId | 필수 | string | 조직 ID |
| result.data[].projectId | 선택 | string 또는 null | 프로젝트 ID |
| result.data[].inviterTpn | 필수 | string | 초대자 TPN |
| result.data[].status | 필수 | string | 초대 상태 |
| result.data[].invitedAt | 필수 | string (date-time) | 초대 생성 시간 |
| result.data[].acceptedAt | 선택 | string (date-time) | 초대 수락 시간 |
| result.data[].expiresAt | 필수 | string (date-time) | 초대 만료 시간 |
| result.data[].invitationLink | 선택 | string 또는 null | 초대 링크 |
| result.data[].metadata | 선택 | object 또는 null | 메타데이터 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


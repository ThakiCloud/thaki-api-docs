# 감사 로그 목록 조회

감사 로그 목록을 조회합니다 (관리자 전용).

## 검색 필드
- `action` (Event): 선택형 필터 (Sign-in, Sign-out 등 정확 일치)
- `eventId`: 이벤트 ID 부분 일치 검색 (ILIKE)
- `result`: 선택형 (success, failure)
- `actorTpn` (User): 사용자 TPN 부분 일치 검색 (ILIKE)
- `targetType`, `targetId` (Target): 대상 타입/ID 필터
- `ipAddress`: IP 주소 부분 일치 검색 (ILIKE)
- `search`: 기본 검색 (필터 키 미선택 시 eventId에서 검색)
- `timestampGte/Lte` (Time): 기간 범위 필터 (ISO8601)

## 정렬
- `sort`: 정렬 필드 (timestamp, action, actorTpn, targetType, result)
- `order`: asc | desc (기본 timestamp desc)

## 페이지네이션
- `page`: 페이지 번호 (0=전체 조회, 기본 1)
- `pageSize`: 페이지 크기 (기본 10, 최대 100)

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/audit-logs
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 데이터 목록 + 페이지네이션 |
| result.data | 선택 | array (object) | 데이터 목록 |
| result.dataCount | 필수 | integer | 데이터 개수. 범위 0~ |
| result.pagination | 필수 | object | 페이지네이션 정보 |
| result.pagination.page | 필수 | integer | 현재 페이지 번호 (0=전체 조회). 범위 0~ |
| result.pagination.pageSize | 필수 | integer | 페이지 크기. 범위 1~ |
| result.pagination.totalCount | 필수 | integer | 전체 데이터 개수. 범위 0~ |
| result.pagination.totalPages | 필수 | integer | 전체 페이지 개수. 범위 0~ |
| result.pagination.hasNext | 필수 | boolean | 다음 페이지 존재 여부 |
| result.pagination.hasPrev | 필수 | boolean | 이전 페이지 존재 여부 |


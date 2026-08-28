# 내 소속 파티션 목록 조회

인증된 사용자 본인이 소속된 파티션(프로젝트) 목록을 조회합니다. 소속 판정은 그룹 멤버십 기반이며 internal 사용자 파티션 조회(GET /internal/users/{tpn}/partitions)와 동일한 로직을 공유합니다. 역할과 무관하게 항상 토큰 주체의 그룹 멤버십 기준 소속을 반환하므로 관리자(domainAdmin/systemAdmin)는 대개 빈 목록입니다. 서버는 파티션 status로 필터링하지 않습니다(항목의 status로 FE에서 제어).

## HTTP 요청

```http
GET https://<your-console-host>/api/v1/iam/authn/profile/partitions
```

## URI 매개변수

없습니다.

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 응답

| 상태 코드 | 설명 |
|---|---|
| 200 OK | Successful Response |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 200

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.partitions | 선택 | array (object) | 내 소속 파티션(프로젝트) 목록 |
| result.partitions[].projectId | 필수 | string | 파티션(프로젝트) ID |
| result.partitions[].name | 필수 | string | 파티션(프로젝트) 이름. 프로젝트 행이 없으면 그룹 tags 기반 파티션명(없으면 ID)으로 폴백 |
| result.partitions[].displayName | 선택 | string 또는 null | 파티션(프로젝트) 표시명 |
| result.partitions[].status | 선택 | string 또는 null | 프로젝트 상태 (active\|disabled\|deleted); 프로젝트 행이 없으면 null. 서버는 status로 필터링하지 않는다 |


# 풀 멤버를 일괄 생성합니다 (비동기 처리)

Pool Member를 일괄 생성합니다 (비동기 처리).

## HTTP 요청

```http
PUT https://<your-console-host>/api/v1/network/pools/{poolId}/members
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| poolId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| [].address | 필수 | string | 멤버 IP 주소 |
| [].protocolPort | 필수 | integer | 프로토콜 포트. 범위 1~65535 |
| [].weight | 선택 | integer | 가중치. 기본값 1. 범위 0~ |
| [].adminStateUp | 선택 | boolean | 관리자 상태. 기본값 true |
| [].subnetId | 선택 | string 또는 null | 서브넷 ID (생략 시 멤버 주소로 포트를 역조회해 라우팅 가능한 서브넷을 자동 채움) |
| [].name | 선택 | string 또는 null | 멤버 이름 |
| [].monitorAddress | 선택 | string 또는 null | 모니터링 주소 |
| [].monitorPort | 선택 | integer 또는 null | 모니터링 포트. 범위 1~65535 |
| [].backup | 선택 | boolean 또는 null | 백업 멤버 여부 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 202 Accepted | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌·사용 중) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.


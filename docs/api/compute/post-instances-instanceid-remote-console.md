# Create Instance Remote Console

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/compute/instances/{instanceId}/remote-console
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| instanceId | path | 필수 | string | 인스턴스 ID. 인스턴스 ID |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

이 API 는 다음 헤더를 추가로 받습니다.

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| X-Project-Id | 선택 | string 또는 null | OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중). OpenStack Project ID (과도기 fallback — X-Partition-Id로 전환 중) |
| X-Partition-Id | 선택 | string 또는 null | 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일). 플랫폼 partition ID (표준 헤더, 값은 OpenStack Project ID와 동일) |

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| protocol | 선택 | string | Remote Console 프로토콜 (예: vnc, spice, rdp, serial, mks). 값: vnc |
| type | 선택 | string | Remote Console 타입 (예: novnc, spice-html5, rdp-html5, serial, webmks). 값: novnc |

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
| result | 필수 | object | 결과 데이터 |
| result.protocol | 필수 | string | Remote Console 프로토콜 |
| result.type | 필수 | string | Remote Console 타입 |
| result.token | 필수 | string | noVNC 프록시 접속용 세션 토큰 |


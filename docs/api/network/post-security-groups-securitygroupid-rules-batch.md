# 보안 그룹 Rule을 배치 생성

Security Group Rule을 배치 생성합니다.

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/network/security-groups/{securityGroupId}/rules/batch
```

## URI 매개변수

| 이름 | 위치 | 필수 | 형식 | 설명 |
|---|---|---|---|---|
| securityGroupId | path | 필수 | string |  |

## 요청 헤더

인증 헤더와 파티션 헤더는 모든 API 가 같습니다. [공통 규약](/guide/conventions)을 참고하십시오.

## 요청 본문

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| rules | 필수 | array (object) | 생성할 Security Group Rule 목록 |
| rules[].direction | 필수 | string | 트래픽 방향 (INGRESS/EGRESS). 값: INGRESS, EGRESS |
| rules[].etherType | 선택 | string | 이더넷 타입 (IPv4/IPv6). 기본값: IPv4. 값: IPv4, IPv6 |
| rules[].protocol | 필수 | string | 프로토콜 (TCP/UDP/ICMP 등). 값: TCP, UDP, ICMP, ANY |
| rules[].portRangeMin | 선택 | integer 또는 null | 포트 범위 시작 (tcp/udp). 범위 1~65535 |
| rules[].portRangeMax | 선택 | integer 또는 null | 포트 범위 끝 (tcp/udp). 범위 1~65535 |
| rules[].icmpType | 선택 | integer 또는 null | ICMP Type. 범위 0~255 |
| rules[].icmpCode | 선택 | integer 또는 null | ICMP Code. 범위 0~255 |
| rules[].remoteIpPrefix | 선택 | string 또는 null | 원격 IP 프리픽스 (CIDR) |
| rules[].remoteGroupId | 선택 | string 또는 null | 원격 Security Group ID |
| rules[].description | 선택 | string 또는 null | 설명. 길이 0~255 |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

위 표는 정상 응답과 요청 검증 실패만 나열합니다. 이 API 는 그 밖에 401(인증 실패) · 403(권한 없음) · 404(리소스 없음) · 409(리소스 충돌·사용 중) · 413(쿼터 초과) · 502(인프라 오류)를 반환할 수 있습니다. 조건은 [오류 처리](/guide/errors)를 참고하십시오.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | array (object) | 결과 데이터 |
| result[].id | 필수 | string 또는 null |  |
| result[].direction | 필수 | string | Security Group Rule 방향. 값: INGRESS, EGRESS |
| result[].etherType | 필수 | string |  |
| result[].protocol | 필수 | string 또는 null | Security Group Rule 프로토콜. 값: TCP, UDP, ICMP, ANY |
| result[].portRange | 선택 | string 또는 null |  |
| result[].icmpType | 선택 | integer 또는 null |  |
| result[].icmpCode | 선택 | integer 또는 null |  |
| result[].remoteIpPrefix | 필수 | string 또는 null |  |
| result[].remoteGroupId | 필수 | string 또는 null |  |
| result[].remoteGroupName | 선택 | string 또는 null |  |
| result[].remoteAddressGroupId | 필수 | string 또는 null |  |
| result[].normalizedCidr | 필수 | string 또는 null |  |
| result[].securityGroupId | 필수 | string |  |
| result[].description | 필수 | string 또는 null |  |
| result[].projectId | 필수 | string 또는 null |  |
| result[].tenantId | 필수 | string 또는 null |  |
| result[].standardAttrId | 필수 | integer 또는 null |  |
| result[].createdAt | 필수 | string (date-time) |  |
| result[].updatedAt | 필수 | string (date-time) |  |
| result[].revisionNumber | 필수 | integer 또는 null |  |


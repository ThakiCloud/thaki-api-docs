# Create Keypair

KeyPair를 생성합니다.

- publicKey 제공 시: import 모드 (공개키 등록)
- publicKey 미제공 시: create 모드 (서버에서 키쌍 생성, privateKey 1회 반환)

## HTTP 요청

```http
POST https://<your-console-host>/api/v1/compute/key-pairs
```

## URI 매개변수

없습니다.

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
| keyPairName | 필수 | string | KeyPair 이름 (1~255자, 영문/숫자/공백 및 - _ . @ 허용, 한글 불허) |
| publicKey | 선택 | string 또는 null | 공개키 (미제공 시 서버에서 키쌍 자동 생성) |

## 응답

| 상태 코드 | 설명 |
|---|---|
| 201 Created | Successful Response |
| 422 Unprocessable Entity | Validation Error |

그 밖의 상태 코드는 [오류 처리](/guide/errors)를 따릅니다.

### 응답 본문 — 201

| 이름 | 필수 | 형식 | 설명 |
|---|---|---|---|
| message | 선택 | string 또는 null | 응답 메시지 |
| timestamp | 선택 | string | 응답 생성 시간 |
| requestId | 필수 | string | 요청 식별자 |
| result | 필수 | object | 결과 데이터 |
| result.basicInfo | 필수 | object | KeyPair 기본 정보 응답 |
| result.basicInfo.keyPairName | 필수 | string | KeyPair 이름 (고유 식별자) |
| result.basicInfo.userId | 선택 | string 또는 null | 사용자 ID |
| result.basicInfo.createdAt | 선택 | string 또는 null | 생성 일시 |
| result.keyIdentity | 필수 | object | KeyPair 키 정보 응답 |
| result.keyIdentity.fingerprint | 선택 | string 또는 null | 지문 (Fingerprint) |
| result.keyIdentity.publicKey | 선택 | string 또는 null | 공개키 |
| result.privateKey | 선택 | string 또는 null | 개인키 (create 모드에서만 1회 반환) |


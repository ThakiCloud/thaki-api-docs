# 개요

이 문서는 Thaki Cloud Aegis 연동에 필요한 API를 다섯 영역으로 나누어 설명합니다.

| 영역 | 내용 | 레퍼런스 |
|---|---|---|
| 서비스 계정(SA)과 API 키 | 인증 준비, 권한 부여, 공통 규약 | [IAM 인증](/api/iam/) · [IAM 인가](/api/iam/) |
| 인스턴스(VM) | 조회·생성·상태 변경·삭제와 참조 리소스 | [컴퓨트](/api/compute/) |
| Kubernetes 클러스터 | 조회·생성·삭제 | [컨테이너](/api/container/) |
| 워크로드 | Pod·Deployment 등과 Namespace·Service·Ingress | [컨테이너](/api/container/) |
| 네트워크 | 네트워크·서브넷·라우터·Floating IP·보안 그룹 | [네트워크](/api/network/) |

처음 연동한다면 [인증 준비](/guide/authentication)부터 순서대로 진행하십시오. 이후 시나리오 문서들은 인증 준비에서 다루는 공통 규약(경로·인증 헤더·응답 형식)을 전제로 합니다.

## 서버-투-서버 연동

서버-투-서버 연동(배치, CI/CD, 자동화)을 위해서는 서비스 계정(SA)을 만들고, API 키를 발급받아 Thaki Cloud의 서비스 API(VM, 클러스터 등)를 호출합니다. 전체 흐름은 다음과 같습니다.

| 단계 | 작업 | 자격증명 | API |
|---|---|---|---|
| 0 | 관리자 로그인 | ID/PW | `POST /api/v1/iam/authn/public/login` |
| 1 | 서비스 계정 생성 | 사용자 토큰 | `POST /api/v1/iam/authn/service-accounts` |
| 2 | 권한(정책) 부여 | 사용자 토큰 | `PUT /api/v1/iam/authz/bindings/sync` |
| 3 | API 키 발급 | 사용자 토큰 | `POST /api/v1/iam/authn/service-accounts/{saId}/keys` |
| 4 | 서비스 API 호출 | API 키 헤더 | 예: `GET /api/v1/compute/instances` |

핵심 원칙은 다음 세 가지입니다.

1. 서비스 계정은 생성 직후 권한이 없습니다(기본 거부). 정책을 바인딩해야 서비스 API를 호출할 수 있습니다.
2. API 키의 `secret`은 발급 응답에서 한 번만 노출됩니다. 서버는 해시만 저장하므로 분실 시 재발급해야 합니다.
3. API 키는 매 요청의 `Thaki-Api-Key` / `Thaki-Api-Secret` 헤더로 보냅니다. 서버가 요청마다 키를 검증하므로 별도의 토큰 발급·갱신이 필요 없습니다.

## 읽는 순서

1. [인증 준비](/guide/authentication) — 서비스 계정 생성부터 API 키 발급까지
2. [공통 규약](/guide/conventions) — 경로, 인증 헤더, 요청·응답 형식
3. [오류 처리](/guide/errors) — 오류 응답 형식과 서비스별 상태 코드
4. 시나리오
   - [네트워크 구성부터 VM 접속까지](/guide/scenario-network-vm)
   - [NPU 서버 만들기](/guide/scenario-npu)
   - [사용량 모니터링](/guide/scenario-metrics)
   - [쿠버네티스 클러스터와 워크로드](/guide/scenario-container)

각 서비스의 전체 API 목록과 상세 파라미터는 [API 레퍼런스](/api/)를 참조하십시오.

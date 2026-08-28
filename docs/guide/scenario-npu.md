# NPU 서버 만들기

NPU 서버는 별도의 생성 API가 없습니다. NPU Flavor를 조회해 그 `flavorId`로 일반 VM 생성 API를 호출하는 것이 전부입니다. 인증 헤더 준비는 [인증 준비](/guide/authentication)를 먼저 완료하십시오.

## 1. NPU Flavor 조회

`flavorType=npu`로 조회한 Flavor 중 하나를 고릅니다. 가용 영역에 맞는 Flavor만 보려면 `pool` 필터를 함께 사용하십시오.

```bash
curl -s "$B/compute/flavors?flavorType=npu" "${H[@]}"
```

::: warning NPU 수량·모델 확인
Flavor 응답에는 NPU 수량·모델을 나타내는 전용 필드가 없습니다. 필요하다면 Flavor 상세(`GET /compute/flavors/{flavorId}`)의 `extraSpec`(원본 속성 객체)을 참조해야 합니다.
:::

## 2. 이미지 조회

`access` 파라미터는 필수이며 다음 중 하나입니다.

| 값 | 의미 |
|---|---|
| `current_project` | 현재 파티션이 소유한 이미지 |
| `shared` | 다른 파티션에서 공유받은 이미지 |
| `public` | 공개 이미지 |
| `all` | 위 세 가지의 합 |

```bash
curl -s "$B/compute/images?access=all&osDistro=ubuntu" "${H[@]}"
```

주요 필터로 `osVersion[]`(부분 일치), `minDisk[]`(GiB), `minRam[]`(GiB), `status[]`(`active`/`error`/`deactivated`), `diskFormat[]`, `visibility[]`(`public`/`private`/`shared`)가 있습니다.

## 3. 키 페어 준비

키 페어 이름은 1~255자이며 영문·숫자·공백과 `-`·`_`·`.`·`@`만 허용합니다(한글 등 그 외 문자는 422).

```bash
curl -s "$B/compute/key-pairs" "${H[@]}"
```

새로 만들려면 `publicKey`를 생략해 서버가 키 쌍을 생성하게 하거나(개인키가 응답에 1회 노출), 이미 가진 공개키를 `publicKey`로 보내 임포트합니다.

```bash
curl -s -X POST "$B/compute/key-pairs" "${H[@]}" -H 'Content-Type: application/json' -d '{
  "keyPairName": "npu-key"
}'
```

::: warning 개인키는 1회만 노출됩니다
생성 모드 응답의 `privateKey`는 서버가 어디에도 저장하지 않으므로 이 응답에서만 볼 수 있습니다. 받는 즉시 안전한 곳에 보관하십시오. 임포트 모드에서는 `privateKey`가 `null`입니다.
:::

## 4. NPU 서버 생성 요청

조회한 `flavorId`를 인스턴스 생성 요청의 `flavorInfo.flavorId`에 넣습니다. 소스·네트워크·인증 정보 구성, 생성 후 상태 폴링, 그 외 조회·상태 변경·삭제 API는 일반 VM과 동일합니다.

```bash
curl -s -X POST "$B/compute/instances" "${H[@]}" -H 'Content-Type: application/json' -d '{
  "basicInfo": { "name": "npu-worker-01", "availabilityZone": "nova" },
  "flavorInfo": { "flavorId": "npu-flavor-id" },
  "sourceInfo": {
    "sourceId": "image-id",
    "sourceType": "image",
    "systemDisk": { "volumeTypeId": "volume-type-id", "size": 100, "deletedWithInstance": true }
  },
  "dataDisks": [ { "volumeTypeId": "volume-type-id", "size": 200, "deletedWithInstance": false } ],
  "networkInfo": {
    "networks": [ { "networkId": "network-id", "virtualLans": [ { "type": "auto", "subnetId": "subnet-id" } ] } ],
    "securityGroupIds": [ "security-group-id" ]
  },
  "authenticationInfo": { "loginType": "keyPair", "keyPairName": "npu-key" }
}'
```

201은 접수를 의미하며 상태는 `BUILDING`으로 시작합니다. `GET /compute/instances/{instanceId}`로 5~10초 간격 폴링하여 `basicInfo.status`가 `ACTIVE`(성공) 또는 `ERROR`(실패)가 될 때까지 확인하십시오. 네트워크 리소스를 함께 준비하는 절차는 [네트워크 구성부터 VM 접속까지](/guide/scenario-network-vm)를 참조하십시오.

## NPU Flavor로 만든 인스턴스의 차이점

NPU Flavor로 만든 인스턴스는 일반 VM과 비교해 다음 차이가 관찰됩니다.

- 포트 대역폭 QoS(제어)가 적용되지 않습니다.
- NPU·GPU 사용률 메트릭은 제공하지 않습니다. 가속기 정보가 필요하면 Flavor 조회의 `extraSpec`을 참조하십시오. 인스턴스 자체의 사용량 조회는 [사용량 모니터링](/guide/scenario-metrics)을 참조하십시오.

전체 API 목록과 파라미터 상세는 [컴퓨트 레퍼런스](/api/compute/)를 참조하십시오.

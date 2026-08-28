# 사용량 모니터링

인스턴스의 사용량 지표를 시계열로 조회하는 방법을 설명합니다. 모두 `GET /compute/instances/{instanceId}/metrics/{metric}` 형태이며 200을 반환합니다.

## 지원 메트릭

| 메트릭 경로 | 단위 | 설명 |
|---|---|---|
| `cpu-utilization` | percent | CPU 사용률 |
| `network-traffic` | B/s | 네트워크 트래픽(수신·송신) |
| `network-packets` | p/s | 네트워크 패킷 수(수신·송신) |
| `disk-usage` | percent | 디스크 사용률(디바이스·마운트포인트별) |
| `disk-iops` | ops/s | 디스크 IOPS(읽기·쓰기, 디바이스별) |

## 쿼리 파라미터

| 파라미터 | 필수 | 기본값 | 설명 |
|---|---|---|---|
| `start` | O | — | 조회 시작 시각. epoch 초 또는 ISO 8601 |
| `end` | X | 요청 시각(UTC) | 조회 종료 시각. 형식은 `start`와 동일 |

```bash
curl -s "$B/compute/instances/<instanceId>/metrics/cpu-utilization?start=1769503000&end=1769503600" "${H[@]}"
```

::: warning 시각 표기 규칙
- 숫자로만 이루어진 값은 9자리 이상일 때만 epoch 초로 해석합니다. 8자리(예: `20260825`)는 ISO 8601 basic 날짜로 해석되므로 epoch 의도라면 자릿수를 확인하십시오.
- epoch 밀리초는 지원하지 않습니다. 13자리 값은 "미래 시각"으로 판정되어 422가 됩니다.
- 타임존을 표기하지 않으면 UTC로 간주합니다.
- 타임존 오프셋의 `+`는 URL에서 `%2B`로 인코딩하십시오.
- `start`·`end` 모두 현재 시각보다 미래일 수 없고, `start`는 `end`보다 클 수 없습니다.
- 이 표에 없는 쿼리 파라미터를 추가하면 422입니다.
:::

집계 간격은 15초로 고정되어 있으며 파라미터로 바꿀 수 없습니다. 조회 기간 상한은 없습니다.

## 응답 구조

응답 `result` 공통 구조: `{unit, instanceId, series[]}`. `series[]`의 형태는 메트릭마다 다릅니다.

| 메트릭 | series 개수 | series 필드 |
|---|---|---|
| `cpu-utilization` | 1개 고정 | `values[]`만(`kind`·`device` 없음) |
| `network-traffic`, `network-packets` | 2개 고정(`in`, `out` 순) | `kind`, `values[]` |
| `disk-usage` | 디바이스·마운트포인트 조합 수만큼(0개 가능) | `device`, `mountpoint`, `values[]` |
| `disk-iops` | 디바이스·방향 조합 수만큼(0개 가능) | `kind`(`read`/`write`), `device`, `values[]` |

`values[]` 항목: `{timestamp(epoch 초), value}`.

예시 응답 — CPU 사용률:

```json
{
  "message": "요청이 성공적으로 처리되었습니다.",
  "timestamp": "2026-08-27T00:00:00Z",
  "requestId": "550e8400-e29b-41d4-a716-446655440000",
  "result": {
    "unit": "percent",
    "instanceId": "957f244b-7b7e-48eb-88be-eba3a377a1e3",
    "series": [
      { "values": [ { "timestamp": 1769503485, "value": 0.55 }, { "timestamp": 1769503500, "value": 0.52 } ] }
    ]
  }
}
```

예시 응답 — 디스크 IOPS:

```json
{
  "message": "요청이 성공적으로 처리되었습니다.",
  "timestamp": "2026-08-27T00:00:00Z",
  "requestId": "550e8400-e29b-41d4-a716-446655440000",
  "result": {
    "unit": "ops/s",
    "instanceId": "957f244b-7b7e-48eb-88be-eba3a377a1e3",
    "series": [
      { "kind": "read",  "device": "sda", "values": [ { "timestamp": 1769415300, "value": 0.73 } ] },
      { "kind": "write", "device": "sda", "values": [ { "timestamp": 1769415300, "value": 0.80 } ] }
    ]
  }
}
```

## 데이터가 없을 때

데이터가 없어도 오류가 아니라 200으로 응답하며, 메트릭별로 빈 형태가 다릅니다.

| 메트릭 | 데이터 없음일 때 |
|---|---|
| `cpu-utilization` | `series` 1개, `values: []` |
| `network-traffic`, `network-packets` | `series` 2개(`in`/`out`), 각 `values: []` |
| `disk-usage`, `disk-iops` | `series: []` |

## 오류

| 상태 | 상황 |
|---|---|
| 404 | 인스턴스 없음 |
| 422 | `start` 누락·형식 오류, `start`가 `end`보다 큼, 미래 시각, 정의되지 않은 파라미터 |
| 502 | 메트릭 저장소 조회 실패 |

## 전제 조건

이 API는 게스트 OS 안에서 동작하는 메트릭 수집 에이전트(Linux는 node-exporter, Windows는 windows-exporter)의 값을 읽습니다. 인스턴스에 에이전트가 설치·동작하고 있지 않으면 오류 없이 빈 `values`/빈 `series`로 응답합니다.

::: tip NPU·GPU 사용률은 별도 조회
NPU·GPU 사용률 메트릭은 제공하지 않습니다. 가속기 정보가 필요하면 Flavor 조회의 `extraSpec`을 참조하십시오. NPU 서버 생성 절차는 [NPU 서버 만들기](/guide/scenario-npu)를 참조하십시오.
:::

## 운영 권고

메트릭 폴링 간격은 15초 미만으로 좁혀도 의미가 없습니다(집계 간격 자체가 15초 고정). 긴 구간을 조회할 때는 한 번에 요청하지 말고 나누어 조회하십시오.

전체 API 목록과 파라미터 상세는 [컴퓨트 레퍼런스](/api/compute/)를 참조하십시오.

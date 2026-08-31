#!/usr/bin/env bash
# 서비스 리포에서 OpenAPI 스펙을 그대로 받아 적는다.
#
# FastAPI 앱을 import 해 app.openapi() 를 부르므로, 결과는 그 시점 소스 코드가
# 선언한 라우터·스키마 자체다. 문서가 코드와 어긋났는지 보려면 이걸 다시 뽑아
# spec/raw/ 와 비교한다.
#
#   scripts/extract-openapi.sh <리포경로> <출력파일>
set -euo pipefail
repo="$1"; out="$2"
cd "$repo"
uv run python -c "
import json, sys
from app.main import app
json.dump(app.openapi(), open('$out','w'), ensure_ascii=False, indent=2)
"

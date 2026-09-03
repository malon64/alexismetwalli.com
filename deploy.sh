#!/usr/bin/env bash
set -euo pipefail

npm ci
npm run check
npm run build

rsync -av --delete \
  dist/ \
  <user>@<ip-du-raspberry>:/srv/alexismetwalli.com/
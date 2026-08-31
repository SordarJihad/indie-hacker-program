#!/usr/bin/env bash
# Downloads builder photos listed in photos.txt into assets/founders/,
# then flips the matching photo: field on in data.js.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p assets/founders
n=0
while IFS=, read -r slug url; do
  [[ -z "${slug// }" || "${slug:0:1}" == "#" ]] && continue
  slug="$(echo "$slug" | tr -d '[:space:]')"
  url="$(echo "$url" | tr -d '[:space:]')"
  out="assets/founders/${slug}.jpg"
  echo "→ $slug"
  curl -fsSL "$url" -o "$out"
  # point data.js at the downloaded file
  perl -0pi -e "s|(slug: '${slug}',(?:.|\n)*?photo: ')('?)|\${1}assets/founders/${slug}.jpg|" data.js
  n=$((n+1))
done < photos.txt
echo "done — $n photo(s) wired into data.js"

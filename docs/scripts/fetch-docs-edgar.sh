#!/usr/bin/env bash

# Fetch the canonical accessing-edgar-data.htm from www.sec.gov
# and make it suitable for offline reading

set -e

OUT="SEC.gov_accessing-edgar-data"

# Ensure that sed is GNU sed
sed --version | grep 'GNU sed' > /dev/null

(
  cd 3rdparty

  rm -f $OUT.html
  rm -f $OUT.css

  # Fetch original html file
  curl -sSo $OUT.html https://www.sec.gov/edgar/searchedgar/accessing-edgar-data.htm

  # Find linked stylesheets in original HTML file. Save.
  grep '<link rel=.stylesheet' $OUT.html > $OUT.sheets

  # Strip unwanted HTML content and expand relative URLs. Assume GNU sed here
  sed --regexp-extended -z -i.bak \
    -e 's#<script [^>]+>[^<]*</script>##g' \
    -e 's#<link [^>]+>#<link rel="stylesheet" type="text/css" href="./SEC.gov_accessing-edgar-data.css">#g' \
    -e 's#<img [^>]+>##g' \
    -e 's#<a href="/#<a href="https://www.sec.gov/#g' \
    $OUT.html
  echo "$OUT.html updated"

  # Process the .sheets file and retrieve linked stylesheets
  # 1. Make URLs absolute
  # 2. Extract just the "href="
  # 3. Loop over URLs, fetch, concatenate
  sed -r -i -e 's#href="/#href="https://www.sec.gov/#g' $OUT.sheets

  egrep -o 'https.*css' $OUT.sheets | while read p
  do
    echo "< " $p
    curl -sS $p >> $OUT.css
  done

  echo "$OUT.css updated"

  rm -f $OUT.sheets $OUT.html.bak
)
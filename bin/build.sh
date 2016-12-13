#!/usr/bin/bash

# Quick and dirty build script.
# TODO(kangas): Replace with working build.js

set -ex

rm -rf dist

mkdir -p dist
mkdir -p docs/built

for DOTPATH in docs/*.gv
do
	DOTFILE=$(basename $DOTPATH)
	dot -odocs/built/${DOTFILE}.svg -Tsvg $DOTPATH
done

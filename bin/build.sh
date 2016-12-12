#!/usr/bin/bash

# Quick and dirty build script.
# TODO(kangas): Replace with working build.js

set -ex

rm -rf dist

mkdir -p dist
mkdir -p dist/doc

for DOTPATH in docs/*.gv
do
	DOTFILE=$(basename $DOTPATH)
	dot -odist/doc/${DOTFILE}.svg -Tsvg $DOTPATH
done

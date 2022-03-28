#!/usr/bin/env sh

# abort on errors
set -e

# build commands
yarn build

# navigate into the build output directory
cd .vuepress/dist

git init
git add -A
git commit -m "deploy with vuepress script"
#github pages branch 생성
git push -f https://github.com/jiwongut/jiwon_til.git master:gh-pages

cd -

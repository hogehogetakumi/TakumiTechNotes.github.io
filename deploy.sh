#!/usr/bin/env sh

# エラー時に停止
set -e

# ビルド
npm run docs:build

# distディレクトリに移動
cd docs/.vuepress/dist

# GitHubにデプロイ
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:hogehogetakumi/TakumiTechNotes.git master:gh-pages

cd -

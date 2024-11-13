#!/usr/bin/env sh

# エラー時に停止
set -e

# 依存関係のインストール
npm install

# ビルド
npm run docs:build

# .nojekyllファイルを追加
touch docs/.vuepress/dist/.nojekyll

# デプロイ
npm run deploy

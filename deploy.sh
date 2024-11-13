#!/usr/bin/env sh

# エラー時に停止
set -e

# 依存関係のインストール
npm install

# ビルド
npm run docs:build

# デプロイ
npm run deploy

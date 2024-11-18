---
permalink: /
data:
  articles:
    - title: "ライフサイクルフックbeforeCreate編"
      link: "/TakumiTechNotes.github.io/posts/Tech/lifecycle_hook/beforeCreate"
      description: "継続的インテグレーションについての基礎知識。"
    - title: "ライフサイクルフックcreated編"
      link: "/TakumiTechNotes.github.io/posts/Tech/lifecycle_hook/created"
      description: "継続的インテグレーションについての基礎知識。"
    - title: "ライフサイクルフックbeforeMount編"
      link: "/TakumiTechNotes.github.io/posts/Tech/lifecycle_hook/beforeMount"
      description: "継続的インテグレーションについての基礎知識。"
    - title: "Options APIとComposition APIの比較"
      link: "/TakumiTechNotes.github.io/posts/Tech/options-vs-composition-api"
      description: "Vue.jsのOptions APIとComposition APIを比較します。"
    - title: "初めての投稿"
      link: "/TakumiTechNotes.github.ioposts/first-post"
      description: "私の最初の投稿です。"
---

# おすすめ記事

アウトプット用にIT技術とキャリア関連の記事を掲載しています。

<!-- ## カテゴリ一覧

- [IT技術関連の記事はこちら](./posts/Tech/)
- [転職・副業関連はこちら](./posts/Job/) -->

<template>
  <div class="articles">
    <ArticleCard v-for="(article, index) in $frontmatter.data.articles" :key="index" :article="article" />
  </div>
</template>

<style scoped>
.articles {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>

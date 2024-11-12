# おすすめ記事

アウトプット用にIT技術とキャリア関連の記事を掲載しています。

<!-- ## カテゴリ一覧

- [IT技術関連の記事はこちら](./posts/Tech/)
- [転職・副業関連はこちら](./posts/Job/) -->

<template>
<div class="articles">
  <ArticleCard v-for="(article, index) in articles" :key="index" :article="article" />
</div>
</template>

<script>
import ArticleCard from './.vuepress/components/ArticleCard.vue';

export default {
  components: {
    ArticleCard,
  },
  data() {
    return {
      articles: [
        {
          title: "ライフサイクルフックbeforeCreate編",
          link: "/posts/Tech/lifecycle_hook/beforeCreate",
          description: "継続的インテグレーションについての基礎知識。",
        },
        {
          title: "ライフサイクルフックcreated編",
          link: "/posts/Tech/lifecycle_hook/created",
          description: "継続的インテグレーションについての基礎知識。",
        },
        {
          title: "Options APIとComposition APIの比較",
          link: "/posts/Tech/options-vs-composition-api",
          description: "Vue.jsのOptions APIとComposition APIを比較します。",
        },
        {
          title: "初めての投稿",
          link: "/posts/first-post",
          description: "私の最初の投稿です。",
        },
      ],
    };
  },
};
</script>

<style scoped>
.articles {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
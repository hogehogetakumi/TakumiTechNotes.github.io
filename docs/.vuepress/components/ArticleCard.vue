<!-- docs/.vuepress/components/ArticleCard.vue -->
<template>
    <div class="article-card">
      <h3><a :href="article.link">{{ article.title }}</a></h3>
      <p>{{ article.description }}</p>
    </div>
</template>
  
  <script>
  export default {
    props: {
      article: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .article-card {
    width: 300px; /* 固定幅 */
    height: 200px; /* 固定高さ */
    border: 1px solid #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .article-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .article-card h3 {
    margin: 0;
    font-size: 1.25rem;
  }
  .article-card p {
    color: #555;
    flex-grow: 1; /* 余白を埋める */
  }
  </style>
  
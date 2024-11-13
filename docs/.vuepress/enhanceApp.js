// .vuepress/enhanceApp.js
export default ({ Vue, options, router, siteData }) => {
    // コンポーネントをグローバル登録
    Vue.component('ArticleCard', () => import('./components/ArticleCard.vue'));
  };
  
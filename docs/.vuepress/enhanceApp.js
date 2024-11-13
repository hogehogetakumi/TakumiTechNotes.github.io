// enhanceApp.js
export default ({ Vue }) => {
    Vue.component('ArticleCard', () => import('./components/ArticleCard.vue'));
  };
  
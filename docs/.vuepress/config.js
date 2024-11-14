// config.js
const sidebar = require('./sidebar.js'); // sidebar.jsの読み込み

module.exports = {
  base: '/TakumiTechNotes.github.io/',
  title: 'TechNotes',
  description: 'Welcome to my blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Posts', link: '/posts/' } // postsディレクトリへのリンクを追加
    ],
    sidebar: sidebar // sidebar.jsで定義したカスタムサイドバーを適用
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ],
};

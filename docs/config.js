module.exports = {
    title: 'My Personal Blog',
    description: 'Welcome to my blog',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about/' }
      ],
      sidebar: [
        '/',
        '/about/',
        '/posts/first-post',
        '/posts/options-vs-composition-api'
      ]
    }
  }
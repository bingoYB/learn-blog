const nav = require('./nav.js')
const sidebar = require('./sidebar.js')

module.exports = {
  title: 'BINGO BLOG',
  description: 'BINGO BLOG 学然后知不足 非淡泊无以明志，非宁静无以致远',
  head: [
    [
      'link', { rel: 'icon', href: '/logo.png' },
      'meta', { name:'keywords',content: '博客，前端，代码，个人博客，学习，兴趣，BINGOBLOG'}
    ]
  ],
  base:'/learn-blog/dist/',
  dest: './dist',
  port:8886,
  markdown: {
    lineNumbers: true
  },
  extraWatchFiles: [
    './nav.js',
    './sidebar.js'
  ],
  themeConfig: {
    logo: '/logo.png',
    sidebarDepth: 2,
    smoothScroll: true,
    repo: 'bingoYB/learn-blog',
    nav,
    sidebar,
    docsDir: 'docs',
    editLinks: false,
    lastUpdated: '更新时间',
  },
  plugins: [
    ["@vuepress/medium-zoom", true],
    ["@vuepress/back-to-top", true],
  ],
}
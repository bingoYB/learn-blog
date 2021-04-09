const nav = require('./nav.js')
const sidebar = require('./sidebar.js')

module.exports = {
  title: 'BINGO',
  description: '学然后知不足',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  base:'/learn-blog/',
  markdown: {
    lineNumbers: true
  },
  extraWatchFiles: [
    './nav.js',
    './sidebar.js'
  ],
  themeConfig: {
    sidebarDepth: 2,
    smoothScroll: true,
    repo: 'bingoYB/learn-blog',
    nav,
    sidebar,
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 Github 上编辑此页',
    lastUpdated: '更新时间',
  },
  plugins: [
    ["@vuepress/medium-zoom", true],
    ["@vuepress/back-to-top", true],
  ],
}
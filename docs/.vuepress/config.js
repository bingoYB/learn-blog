const nav = require('./nav.js')
const sidebar = require('./sidebar.js')

module.exports = {
  title: 'BINGO',
  description: '学然后知不足',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
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
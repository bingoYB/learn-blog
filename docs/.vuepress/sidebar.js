// note
const {getChildren} = require("vuepress-sidebar-atuo")

const notePath = './docs/note'

console.log(getChildren(`${notePath}/css`))

const note = [
  {
    title: 'CSS',
    collapsable: false,
    children: getChildren(`${notePath}/css`)
  },
  {
    title: '编程思想',
    collapsable: false,
    children: getChildren(`${notePath}/编程思想`)
  },
  {
    title: 'JavaScript',
    collapsable: false,
    children: getChildren(`${notePath}/javascript`)
  },
  {
    title: 'HTTP',
    collapsable: false,
    children: getChildren(`${notePath}/HTTP`)
  },
  {
    title: 'Node',
    collapsable: false,
    children: getChildren(`${notePath}/Node`)
  },
  {
    title: 'React',
    collapsable: false,
    children: getChildren(`${notePath}/React`)
  },
  {
    title: 'webpack',
    collapsable: false,
    children: getChildren(`${notePath}/webpack`)
  },
  {
    title: '前端图形学',
    collapsable: false,
    children: getChildren(`${notePath}/graphics`)
  },
  {
    title: '前端工程化',
    collapsable: false,
    children: getChildren(`${notePath}/engineering`)
  }
]

const algorithmPath = './docs/algorithm'

const algorithm = [
  {
    title: '每日一题',
    collapsable: false,
    children: getChildren(`${algorithmPath}/every`)
  },
  {
    title: '基础算法',
    collapsable: false,
    children: getChildren(`${algorithmPath}/basic`)
  },
  {
    title: '数据结构',
    collapsable: false,
    children: getChildren(`${algorithmPath}/struct`)
  },
]

module.exports = {
    '/note/': note,
    '/algorithm/': algorithm,
    // '/open_source/': open_source
}
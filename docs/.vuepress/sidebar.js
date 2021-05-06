// note
const {getChildren} = require("vuepress-sidebar-atuo")

const notePath = './docs/note'

console.log(getChildren(`${notePath}/css`))

const note = [
  {
    title: 'CSS',
    collapsable: true,
    children: getChildren(`${notePath}/css`)
  },
  {
    title: '编程思想',
    collapsable: true,
    children: getChildren(`${notePath}/编程思想`)
  },
  {
    title: 'JavaScript',
    collapsable: true,
    children: getChildren(`${notePath}/javascript`)
  },
  {
    title: 'HTTP',
    collapsable: true,
    children: getChildren(`${notePath}/HTTP`)
  },
  {
    title: 'Node',
    collapsable: true,
    children: getChildren(`${notePath}/Node`)
  },
  {
    title: 'React',
    collapsable: true,
    children: getChildren(`${notePath}/React`)
  },
  {
    title: 'webpack',
    collapsable: true,
    children: getChildren(`${notePath}/webpack`)
  },
  {
    title: '前端图形学',
    collapsable: true,
    children: getChildren(`${notePath}/graphics`)
  },
  {
    title: '前端工程化',
    collapsable: true,
    children: getChildren(`${notePath}/engineering`)
  }
]

const algorithm = []

module.exports = {
    '/note/': note,
    '/algorithm/': algorithm,
    // '/open_source/': open_source
}
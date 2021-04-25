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
]

const algorithm = []

module.exports = {
    '/note/': note,
    '/algorithm/': algorithm,
    // '/open_source/': open_source
}
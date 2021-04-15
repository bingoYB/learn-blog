// note
const note = [
  {
    title: 'CSS',
    collapsable: true,
    children: [
      'css/定位与布局',
      'css/现代化CSS',
    ]
  },
  {
    title: '编程思想',
    collapsable: true,
    children: [
      '编程思想/函数式编程',
      '编程思想/面向切面编程',
      '编程思想/SOLID设计原则',
      '编程思想/IOC控制反转DI依赖注入',
    ]
  },
  {
    title: 'JavaScript',
    collapsable: true,
    children: [
      'javascript/webpack5新特性',
      'javascript/webpack打包优化之路'
    ]
  },
  {
    title: 'HTTP',
    collapsable: true,
    children: [
      'HTTP/RPC',
      'HTTP/HTTP',
      'HTTP/TCP'
    ]
  },
]

const algorithm = []

module.exports = {
    '/note/': note,
    '/algorithm/': algorithm,
    // '/open_source/': open_source
}
(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{536:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2"}},[t._v("#")]),t._v(" PM2")]),t._v(" "),a("p",[t._v("PM2 是 node 进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://pm2.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pm2 官网"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pm2 start app.js  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动入口文件")]),t._v("\npm2 list  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看进程列表")]),t._v("\npm2 stop app "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#停止进程")]),t._v("\npm2 restart app "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启")]),t._v("\npm2 delete app "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#杀死")]),t._v("\npm2 logs "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看日志")]),t._v("\npm2 monit "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看监控信息")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"配置文件启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件启动"}},[t._v("#")]),t._v(" 配置文件启动")]),t._v(" "),a("p",[t._v("启动命令")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pm2 start process.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("配置文件")]),t._v(" "),a("p",[t._v("执行以下命令会生成一个简单的配置文件"),a("code",[t._v("ecosystem.config.js")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pm2 ecosystem\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("module.exports = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  apps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./app.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    env"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      NODE_ENV"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    env_production"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      NODE_ENV"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("可以通过命令启动/重新启动/停止/删除此文件")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pm2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("stop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("delete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ecosystem.config.js\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"一般参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般参数"}},[t._v("#")]),t._v(" 一般参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("示例")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("“my-api”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("应用名称 (默认是应用入口文件名)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("script")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("”./api/app.js”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("应用启动入口文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cwd")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("“/var/www/”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("你的应用启动目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("args")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("“-a 13 -b 12”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("启动参数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("interpreter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("“/usr/bin/python”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("解释器的绝对路径，默认为node")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("interpreter_args")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("”–harmony”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("传递给执行器的选项参数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("node_args")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("解释器的别名s")])])])]),t._v(" "),a("h4",{attrs:{id:"高级参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级参数"}},[t._v("#")]),t._v(" 高级参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("instances")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("实例个数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("exec_mode")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("“cluster”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定执行模式，可选‘’cluster“|”fork“，默认是fork")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("watch")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean or []")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("启用监视和重新启动功能，如果文件夹或子文件夹中的文件发生更改，则将重新加载您的应用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ignore_watch")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("list")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("[”[/\\]./”, “node_modules”]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("监视忽略文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max_memory_restart")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("“150M”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果您的应用超出了指定的内存量，则会重新启动。支持的格式：“ 10M”，“ 100K”，“ 2G”等。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("env")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{“NODE_ENV”: “development”, “ID”: “42”}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定应用环境变量")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("env_")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("{“NODE_ENV”: “production”, “ID”: “89”}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("配置文件为yml格式时使用，指定应用环境变量")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("source_map_support")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("默认为true，[启用/禁用源映射文件]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("instance_var")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("“NODE_APP_INSTANCE”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/environment/#specific-environment-variables",target:"_blank",rel:"noopener noreferrer"}},[t._v("see documentation"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("filter_env")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("array of string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("[ “REACT_” ]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("排除以“ REACT_”开头的全局变量，并且不允许它们渗透到集群中。（暂时不太明白啥作用）")])])])]),t._v(" "),a("h4",{attrs:{id:"日志配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志配置"}},[t._v("#")]),t._v(" 日志配置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("log_date_format")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("“YYYY-MM-DD HH:mm Z”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("日志格式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("error_file")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("错误日志文件地址 (默认 $HOME/.pm2/logs/XXXerr.log)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("out_file")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输出日志文件地址 (默认 $HOME/.pm2/logs/XXXout.log)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("combine_logs")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果设置为true，请避免在日志文件后缀加进程ID")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("merge_logs")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("功能同上，别名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("pid_file")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("pid文件路径（默认为$ HOME / .pm2 / pid / app-pm_id.pid）")])])])]),t._v(" "),a("h4",{attrs:{id:"流程配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程配置"}},[t._v("#")]),t._v(" 流程配置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("min_uptime")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("该应用的最小正常运行时间被视为已启动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("listen_timeout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果应用未监听，则在强制重新加载之前的时间（以毫秒为单位）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("kill_timeout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1600")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("发送最终SIGKILL之前的时间（以毫秒为单位）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("shutdown_with_message")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使用process.send（'shutdown'）而不是process.kill（pid，SIGINT）关闭应用程序")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("wait_ready")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("无需重新加载等待侦听事件，而是等待process.send（'ready'）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max_restarts")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在您的应用被视为错误并停止重新启动之前，连续不稳定重新启动的次数（小于1秒间隔或通过min_uptime的自定义时间）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("restart_delay")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("默认0  重启延迟时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("autorestart")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("默认为true，如果设置为false，在应用抛出异常时，pm2将不会重启应用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cron_restart")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("“1 0 * * *”")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使用CRON表达式来定时重启应用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vizion")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("默认为true。如果为false，则PM2将在没有Vizion功能（版本控制元数据）的情况下启动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("post_update")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("list")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("[“npm install”, “echo launching the app”]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("从Keymetrics仪表板执行拉/升级操作后将执行的命令列表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("force")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("默认为false。如果为true，则可以多次启动同一脚本，而这通常是PM2不允许的")])])])]),t._v(" "),a("h4",{attrs:{id:"部署配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署配置"}},[t._v("#")]),t._v(" 部署配置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Entry name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("SSH密钥路径")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("$HOME/.ssh")])]),t._v(" "),a("tr",[a("td",[t._v("user")]),t._v(" "),a("td",[t._v("SSH 用户名")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("host")]),t._v(" "),a("td",[t._v("SSH 地址")]),t._v(" "),a("td",[t._v("[String]")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("ssh_options")]),t._v(" "),a("td",[t._v("没有命令行标志的SSH选项，请参见“ man ssh”")]),t._v(" "),a("td",[t._v("String or [String]")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("ref")]),t._v(" "),a("td",[t._v("GIT远程/分支")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("repo")]),t._v(" "),a("td",[t._v("GIT远程仓库")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("path")]),t._v(" "),a("td",[t._v("服务器部署路径")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("pre-setup")]),t._v(" "),a("td",[t._v("预启动命令或本地计算机上脚本的路径")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("post-setup")]),t._v(" "),a("td",[t._v("启动后命令或主机上脚本的路径")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("pre-deploy-local")]),t._v(" "),a("td",[t._v("部署前动作")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("post-deploy")]),t._v(" "),a("td",[t._v("部署后动作")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
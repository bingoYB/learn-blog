# PM2

PM2 是 node 进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。

[pm2 官网](https://pm2.io/)

### 常用命令

```shell
pm2 start app.js  #启动入口文件
pm2 list  #查看进程列表
pm2 stop app #停止进程
pm2 restart app #重启
pm2 delete app #杀死
pm2 logs #查看日志
pm2 monit #查看监控信息
```

### 配置文件启动

启动命令

```shell
pm2 start process.json
```

配置文件

执行以下命令会生成一个简单的配置文件`ecosystem.config.js`

```shell
pm2 ecosystem
```

```json
module.exports = {
  apps : [{
    name: "app",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
```

可以通过命令启动/重新启动/停止/删除此文件

```shell
pm2 [start|restart|stop|delete] ecosystem.config.js
```

#### 一般参数

| 字段             |   类型   |       示例        | 描述                            |
| :--------------- | :------: | :---------------: | :------------------------------ |
| name             | (string) |     “my-api”      | 应用名称 (默认是应用入口文件名) |
| script           | (string) |  ”./api/app.js”   | 应用启动入口文件                |
| cwd              | (string) |    “/var/www/”    | 你的应用启动目录                |
| args             | (string) |   “-a 13 -b 12”   | 启动参数                        |
| interpreter      | (string) | “/usr/bin/python” | 解释器的绝对路径，默认为node    |
| interpreter_args | (string) |    ”–harmony”     | 传递给执行器的选项参数          |
| node_args        | (string) |         s         | 解释器的别名s                   |

#### 高级参数

| Field              |      Type       |                 Example                 | Description                                                  |
| :----------------- | :-------------: | :-------------------------------------: | :----------------------------------------------------------- |
| instances          |     number      |                   -1                    | 实例个数                                                     |
| exec_mode          |     string      |                “cluster”                | 指定执行模式，可选‘’cluster“\|”fork“，默认是fork             |
| watch              |  boolean or []  |                  true                   | 启用监视和重新启动功能，如果文件夹或子文件夹中的文件发生更改，则将重新加载您的应用 |
| ignore_watch       |      list       |      [”[\/\\]\./”, “node_modules”]      | 监视忽略文件                                                 |
| max_memory_restart |     string      |                 “150M”                  | 如果您的应用超出了指定的内存量，则会重新启动。支持的格式：“ 10M”，“ 100K”，“ 2G”等。 |
| env                |     object      | {“NODE_ENV”: “development”, “ID”: “42”} | 指定应用环境变量                                             |
| env_               |     object      | {“NODE_ENV”: “production”, “ID”: “89”}  | 配置文件为yml格式时使用，指定应用环境变量                    |
| source_map_support |     boolean     |                  true                   | 默认为true，[启用/禁用源映射文件]                            |
| instance_var       |     string      |           “NODE_APP_INSTANCE”           | [see documentation](http://pm2.keymetrics.io/docs/usage/environment/#specific-environment-variables) |
| filter_env         | array of string |              [ “REACT_” ]               | 排除以“ REACT_”开头的全局变量，并且不允许它们渗透到集群中。（暂时不太明白啥作用） |

#### 日志配置

| Field           |   Type   |       Example        | Description                                              |
| :-------------- | :------: | :------------------: | :------------------------------------------------------- |
| log_date_format | (string) | “YYYY-MM-DD HH:mm Z” | 日志格式                                                 |
| error_file      | (string) |                      | 错误日志文件地址 (默认 $HOME/.pm2/logs/XXXerr.log)       |
| out_file        | (string) |                      | 输出日志文件地址 (默认 $HOME/.pm2/logs/XXXout.log)       |
| combine_logs    | boolean  |         true         | 如果设置为true，请避免在日志文件后缀加进程ID             |
| merge_logs      | boolean  |         true         | 功能同上，别名                                           |
| pid_file        | (string) |                      | pid文件路径（默认为$ HOME / .pm2 / pid / app-pm_id.pid） |

#### 流程配置

| Field                 |   Type   |                  Example                  | Description                                                  |
| :-------------------- | :------: | :---------------------------------------: | :----------------------------------------------------------- |
| min_uptime            | (string) |                                           | 该应用的最小正常运行时间被视为已启动                         |
| listen_timeout        |  number  |                   8000                    | 如果应用未监听，则在强制重新加载之前的时间（以毫秒为单位）   |
| kill_timeout          |  number  |                   1600                    | 发送最终SIGKILL之前的时间（以毫秒为单位）                    |
| shutdown_with_message | boolean  |                   false                   | 使用process.send（'shutdown'）而不是process.kill（pid，SIGINT）关闭应用程序 |
| wait_ready            | boolean  |                   false                   | 无需重新加载等待侦听事件，而是等待process.send（'ready'）    |
| max_restarts          |  number  |                    10                     | 在您的应用被视为错误并停止重新启动之前，连续不稳定重新启动的次数（小于1秒间隔或通过min_uptime的自定义时间） |
| restart_delay         |  number  |                   4000                    | 默认0  重启延迟时间                                          |
| autorestart           | boolean  |                   false                   | 默认为true，如果设置为false，在应用抛出异常时，pm2将不会重启应用 |
| cron_restart          |  string  |                “1 0 * * *”                | 使用CRON表达式来定时重启应用                                 |
| vizion                | boolean  |                   false                   | 默认为true。如果为false，则PM2将在没有Vizion功能（版本控制元数据）的情况下启动 |
| post_update           |   list   | [“npm install”, “echo launching the app”] | 从Keymetrics仪表板执行拉/升级操作后将执行的命令列表          |
| force                 | boolean  |                   true                    | 默认为false。如果为true，则可以多次启动同一脚本，而这通常是PM2不允许的 |

#### 部署配置

| Entry name       | Description                               | Type               | Default    |
| ---------------- | ----------------------------------------- | ------------------ | ---------- |
| key              | SSH密钥路径                               | String             | $HOME/.ssh |
| user             | SSH 用户名                                | String             |            |
| host             | SSH 地址                                  | [String]           |            |
| ssh_options      | 没有命令行标志的SSH选项，请参见“ man ssh” | String or [String] |            |
| ref              | GIT远程/分支                              | String             |            |
| repo             | GIT远程仓库                               | String             |            |
| path             | 服务器部署路径                            | String             |            |
| pre-setup        | 预启动命令或本地计算机上脚本的路径        | String             |            |
| post-setup       | 启动后命令或主机上脚本的路径              | String             |            |
| pre-deploy-local | 部署前动作                                | String             |            |
| post-deploy      | 部署后动作                                | String             |            |




(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{432:function(t,s,v){"use strict";v.r(s);var _=v(19),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"dns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),v("h2",{attrs:{id:"什么是dns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是dns"}},[t._v("#")]),t._v(" 什么是DNS")]),t._v(" "),v("p",[t._v('简单的来说输入就是你在浏览器窗口 "www.baidu.com" 域名时，会有一个叫做 '),v("strong",[t._v("DNS服务器")]),t._v(" 的计算机自动把我们输入的域名翻译成相应的IP地址，然后调出IP地址对应的网页")]),t._v(" "),v("h2",{attrs:{id:"本地dns服务器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#本地dns服务器"}},[t._v("#")]),t._v(" 本地dns服务器")]),t._v(" "),v("p",[t._v("本地区的域名服务器,本地DNS一般是指你电脑上网时IPv4或者IPv6设置中填写的那个DNS。这个有可能是手工指定的或者是DHCP自动分配的。")]),t._v(" "),v("p",[t._v("如果你的电脑是直连运营商网络，一般默认设置情况下DNS为DHCP分配到的运营商的服务器地址。如果你的电脑和运营商之间还加了无线或者有线路由，那极有可能路由器本身还内置了一个DNS转发器，这玩意的作用是将发往他所有的DNS请求转发到上层DNS。此时由于路由器本身也接管了下挂电脑的DHCP服务，所以它分配给下面电脑的DNS地址就是它自身，所以你能看到电脑的DNS分配到的可能是192.168.1.1。实际上就是路由器自身，而路由器的DNS转发器将请求转发到上层ISP的DNS。所以这里说DNS是局域网或者是运营商的都可以")]),t._v(" "),v("h3",{attrs:{id:"递归查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#递归查询"}},[t._v("#")]),t._v(" 递归查询")]),t._v(" "),v("p",[t._v("如果主机所询问的本地域名服务器不知道被查询的域名的IP地址，那么本地域名服务器就以DNS客户的身份，向其它根域名服务器继续发出查询请求报文(即替主机继续查询)，而不是让主机自己进行下一步查询。")]),t._v(" "),v("h3",{attrs:{id:"迭代查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迭代查询"}},[t._v("#")]),t._v(" 迭代查询")]),t._v(" "),v("p",[t._v("本地域名服务器向根域名服务器的查询的迭代查询。迭代查询的特点：当根域名服务器收到本地域名服务器发出的迭代查询请求报文时，要么给出所要查询的IP地址，要么告诉本地服务器：“你下一步应当向哪一个域名服务器进行查询”。然后让本地服务器进行后续的查询。根域名服务器通常是把自己知道的顶级域名服务器的IP地址告诉本地域名服务器，让本地域名服务器再向顶级域名服务器查询。顶级域名服务器在收到本地域名服务器的查询请求后，要么给出所要查询的IP地址，要么告诉本地服务器下一步应当向哪一个权限域名服务器进行查询。")]),t._v(" "),v("h2",{attrs:{id:"dns解析顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns解析顺序"}},[t._v("#")]),t._v(" DNS解析顺序")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("浏览器缓存")]),t._v("：当用户通过浏览器访问某域名时，浏览器首先会在自己的缓存中查找是否有该域名对应的IP地址（若曾经访问过该域名且没有清空缓存便存在")]),t._v(" "),v("li",[v("strong",[t._v("系统缓存")]),t._v("：当浏览器缓存中无域名对应IP则会自动检查用户计算机系统Hosts文件DNS缓存是否有该域名对应IP；")]),t._v(" "),v("li",[v("strong",[t._v("路由器缓存")]),t._v("：当浏览器及系统缓存中均无域名对应IP则进入路由器缓存中检查，以上三步均为客服端的DNS缓存；")]),t._v(" "),v("li",[v("strong",[t._v("ISP（互联网服务提供商）DNS缓存")]),t._v("：当在用户客服端查找不到域名对应IP地址，则将进入ISP DNS缓存中进行查询。比如你用的是电信的网络，则会进入电信的DNS缓存服务器中进行查找；")]),t._v(" "),v("li",[v("strong",[t._v("根域名服务器")]),t._v("：当以上均未完成，则进入根服务器进行查询。全球仅有13台根域名服务器，1个主根域名服务器，其余12为辅根域名服务器。根域名收到请求后会查看区域文件记录，若无则将其管辖范围内顶级域名（如.com）服务器IP告诉本地DNS服务器；")]),t._v(" "),v("li",[v("strong",[t._v("顶级域名服务器")]),t._v("：顶级域名服务器收到请求后查看区域文件记录，若无则将其管辖范围内主域名服务器的IP地址告诉本地DNS服务器；")]),t._v(" "),v("li",[v("strong",[t._v("主域名服务器")]),t._v("：主域名服务器接受到请求后查询自己的缓存，如果没有则进入下一级域名服务器进行查找，并重复该步骤直至找到正确纪录；")]),t._v(" "),v("li",[v("strong",[t._v("保存结果至缓存")]),t._v("：本地域名服务器把返回的结果保存到缓存，以备下一次使用，同时将该结果反馈给客户端，客户端通过这个IP地址与web服务器建立链接")])])])}),[],!1,null,null,null);s.default=a.exports}}]);
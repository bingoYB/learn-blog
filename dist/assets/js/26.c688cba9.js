(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{424:function(t,s,v){"use strict";v.r(s);var _=v(19),r=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"dns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),v("h2",{attrs:{id:"什么是dns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是dns"}},[t._v("#")]),t._v(" 什么是DNS")]),t._v(" "),v("p",[t._v('简单的来说输入就是你在浏览器窗口 "www.baidu.com" 域名时，会有一个叫做 '),v("strong",[t._v("DNS服务器")]),t._v(" 的计算机自动把我们输入的域名翻译成相应的IP地址，然后调出IP地址对应的网页")]),t._v(" "),v("h2",{attrs:{id:"dns解析顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns解析顺序"}},[t._v("#")]),t._v(" DNS解析顺序")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("浏览器缓存")]),t._v("：当用户通过浏览器访问某域名时，浏览器首先会在自己的缓存中查找是否有该域名对应的IP地址（若曾经访问过该域名且没有清空缓存便存在")]),t._v(" "),v("li",[v("strong",[t._v("系统缓存")]),t._v("：当浏览器缓存中无域名对应IP则会自动检查用户计算机系统Hosts文件DNS缓存是否有该域名对应IP；")]),t._v(" "),v("li",[v("strong",[t._v("路由器缓存")]),t._v("：当浏览器及系统缓存中均无域名对应IP则进入路由器缓存中检查，以上三步均为客服端的DNS缓存；")]),t._v(" "),v("li",[v("strong",[t._v("ISP（互联网服务提供商）DNS缓存")]),t._v("：当在用户客服端查找不到域名对应IP地址，则将进入ISP DNS缓存中进行查询。比如你用的是电信的网络，则会进入电信的DNS缓存服务器中进行查找；")]),t._v(" "),v("li",[v("strong",[t._v("根域名服务器")]),t._v("：当以上均未完成，则进入根服务器进行查询。全球仅有13台根域名服务器，1个主根域名服务器，其余12为辅根域名服务器。根域名收到请求后会查看区域文件记录，若无则将其管辖范围内顶级域名（如.com）服务器IP告诉本地DNS服务器；")]),t._v(" "),v("li",[v("strong",[t._v("顶级域名服务器")]),t._v("：顶级域名服务器收到请求后查看区域文件记录，若无则将其管辖范围内主域名服务器的IP地址告诉本地DNS服务器；")]),t._v(" "),v("li",[v("strong",[t._v("主域名服务器")]),t._v("：主域名服务器接受到请求后查询自己的缓存，如果没有则进入下一级域名服务器进行查找，并重复该步骤直至找到正确纪录；")]),t._v(" "),v("li",[v("strong",[t._v("保存结果至缓存")]),t._v("：本地域名服务器把返回的结果保存到缓存，以备下一次使用，同时将该结果反馈给客户端，客户端通过这个IP地址与web服务器建立链接")])])])}),[],!1,null,null,null);s.default=r.exports}}]);
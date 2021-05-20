(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{386:function(t,v,_){t.exports=_.p+"assets/img/http-wireshark.bc8490be.png"},387:function(t,v,_){t.exports=_.p+"assets/img/image-20210317151643602.a2a99eac.png"},388:function(t,v,_){t.exports=_.p+"assets/img/http_proxy.9956d058.png"},389:function(t,v,_){t.exports=_.p+"assets/img/proxy_1.14139fe8.png"},495:function(t,v,_){"use strict";_.r(v);var s=_(19),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),s("p",[t._v("HTTP协议是Hyper Text Transfer Protocol(超文本传输协议) 的缩写,是用于从万维网 (WWW:World Wide Web) 服务器传输超文本到本地浏览器的传送协议。")]),t._v(" "),s("p",[t._v("HTTP是一个基于TCP/IP通信协议来传递数据 (HTML 文件, 图片文件, 查询结果等)。")]),t._v(" "),s("p",[t._v("HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。目前在WWW中使用的是HTTP/1.0的第六版，HTTP/1.1的规范化工作正在进行之中，而且HTTP-NG(Next Generation of HTTP)的建议已经提出。")]),t._v(" "),s("p",[t._v("HTTP协议是由从客户机到服务器的请求(Request)和从服务器到客户机的响应(response)进行约束和规范")]),t._v(" "),s("blockquote",[s("p",[t._v("http 协议在哪一层")])]),t._v(" "),s("p",[s("strong",[t._v("ISO/OSI估计标准组织定义")]),t._v("：应用层 表示层 会话层 传输层  网络层 数据链路层 物理层")]),t._v(" "),s("p",[t._v("应用层：为用户提供服务 http ftp dns smtp")]),t._v(" "),s("p",[t._v("传输层：为应用层实体提供端到端的通信功能，保证数据包的顺序传送及数据的完整性（TCP/UDP）")]),t._v(" "),s("p",[t._v("网络层：IP协议 解决主机到主机的通信问题")]),t._v(" "),s("p",[t._v("网络接口层（数据链路层 ：比特信号转成光信号/电信号；物理层）：监视数据在主机与网络间交换")]),t._v(" "),s("h2",{attrs:{id:"http工作过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http工作过程"}},[t._v("#")]),t._v(" http工作过程")]),t._v(" "),s("p",[t._v("一次HTTP操作称为一个事务，其工作过程可分为四步:")]),t._v(" "),s("p",[t._v("1、客户端与服务器建立TCP连接")]),t._v(" "),s("p",[t._v("2、客户端发送请求给服务器")]),t._v(" "),s("p",[t._v("3、服务器接到请求给出响应")]),t._v(" "),s("p",[t._v("4、客户端收到信息展示到浏览器中，然后断开连接")]),t._v(" "),s("h2",{attrs:{id:"url-和-uri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-和-uri"}},[t._v("#")]),t._v(" URL 和 URI")]),t._v(" "),s("p",[t._v("每个web 服务器资源都有一个名字,服务器资源名称被称为 "),s("strong",[t._v("统一资源标识符")]),t._v(",如 web 服务器上一个图片资源的 URI:")]),t._v(" "),s("p",[t._v("http://www.joes-hardware.com/specials/saw-blade.gif")]),t._v(" "),s("p",[t._v("URI 有两种形式,分别称为 "),s("strong",[t._v("URL")]),t._v(" 和 "),s("strong",[t._v("URN")])]),t._v(" "),s("h3",{attrs:{id:"url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URl")]),t._v(" "),s("p",[s("strong",[t._v("统一资源定位符 (URL)")]),t._v(" 是资源标识符最常见的形式。URL 描述了一台特定服务器 上某资源的特定位置。它们可以明确说明如何从一个精确、固定的位置获取资源")]),t._v(" "),s("p",[t._v("URL 说明了协议,服务器和本地资源")]),t._v(" "),s("p",[t._v("大部分 URL 都遵循一种标准格式，这种格式包含三个部分")]),t._v(" "),s("ul",[s("li",[t._v("URL的第一部分被称为 方案,说明了访问资源所使用的的协议类型. 这部分通常就是 "),s("strong",[t._v("HTTP")]),t._v(" 协议(http://)")]),t._v(" "),s("li",[t._v("第二部分给出了服务器的因特网地址(如,www.joes-hardware.com)")]),t._v(" "),s("li",[t._v("其余部分指定了 Web 服务器上的某个资源(如,/imgage/asw.gif)")])]),t._v(" "),s("p",[t._v("现在,几乎所有的 URI 都是 URL")]),t._v(" "),s("h3",{attrs:{id:"urn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urn"}},[t._v("#")]),t._v(" URN")]),t._v(" "),s("p",[t._v("URI 的第二种形式就是统一资源名(URN). URN是作为特定内容的唯一名称使用的,与目前的资源所在地无关. 通过 URN,还可以用同一个名字通过多种网络协议来访问资源")]),t._v(" "),s("h2",{attrs:{id:"get-和-post-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-有什么区别"}},[t._v("#")]),t._v(" GET 和 POST 有什么区别?")]),t._v(" "),s("p",[t._v("差别如下:")]),t._v(" "),s("ul",[s("li",[t._v("从缓存的角度，GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会")]),t._v(" "),s("li",[t._v("从编码的角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制")]),t._v(" "),s("li",[t._v("从参数的角度，GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息。")]),t._v(" "),s("li",[t._v("从幂等性的角度，GET是幂等的，而POST不是。(幂等表示执行相同的操作，结果也是相同的)")]),t._v(" "),s("li",[t._v("从TCP的角度，GET 请求会把请求报文一次性发出去，而 POST 会分为两个 TCP 数据包，首先发 header 部分，如果服务器响应 100(continue), 然后发 body 部分。(火狐浏览器除外，它的 POST 请求只发一个 TCP 包)")])]),t._v(" "),s("h2",{attrs:{id:"状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),s("p",[s("strong",[t._v("状态代码有三位数字组成，第一个数字定义了响应的类别，共分五种类别:")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("1xx：指示信息--表示请求已接收，继续处理")])]),t._v(" "),s("li",[s("strong",[t._v("2xx：成功--表示请求已被成功接收、理解、接受")])]),t._v(" "),s("li",[s("strong",[t._v("3xx：重定向--要完成请求必须进行更进一步的操作")])]),t._v(" "),s("li",[s("strong",[t._v("4xx：客户端错误--请求有语法错误或请求无法实现")])]),t._v(" "),s("li",[s("strong",[t._v("5xx：服务器端错误--服务器未能实现合法的请求")])])]),t._v(" "),s("p",[s("strong",[t._v("常见状态码：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("状态码")]),t._v(" "),s("th",[t._v("解释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("200 OK")]),t._v(" "),s("td",[t._v("客户端请求成功")])]),t._v(" "),s("tr",[s("td",[t._v("304 Not Modified")]),t._v(" "),s("td",[t._v("当协商缓存命中时会返回这个状态码")])]),t._v(" "),s("tr",[s("td",[t._v("400 Bad Request")]),t._v(" "),s("td",[t._v("客户端请求有语法错误，不能被服务器所理解")])]),t._v(" "),s("tr",[s("td",[t._v("401 Unauthorized")]),t._v(" "),s("td",[t._v("请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用")])]),t._v(" "),s("tr",[s("td",[t._v("403 Forbidden")]),t._v(" "),s("td",[t._v("服务器收到请求，但是拒绝提供服务")])]),t._v(" "),s("tr",[s("td",[t._v("404 Not Found")]),t._v(" "),s("td",[t._v("请求资源不存在，eg：输入了错误的URL")])]),t._v(" "),s("tr",[s("td",[t._v("500 Internal Server Error")]),t._v(" "),s("td",[t._v("服务器发生不可预期的错误")])]),t._v(" "),s("tr",[s("td",[t._v("503 Server Unavailable")]),t._v(" "),s("td",[t._v("服务器当前不能处理客户端的请求，一段时间后可能恢复正常")])])])]),t._v(" "),s("h2",{attrs:{id:"https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),s("h3",{attrs:{id:"秘钥交换算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#秘钥交换算法"}},[t._v("#")]),t._v(" 秘钥交换算法")]),t._v(" "),s("p",[t._v("1）Alice与Bob确定两个大素数n和g，这两个数不用保密")]),t._v(" "),s("p",[t._v("（2）Alice选择另一个大随机数x，并计算A如下：A=gx mod n")]),t._v(" "),s("p",[t._v("（3）Alice将A发给Bob")]),t._v(" "),s("p",[t._v("（4）Bob选择另一个大随机数y，并计算B如下：B=gy mod n")]),t._v(" "),s("p",[t._v("（5）Bob将B发给Alice")]),t._v(" "),s("p",[t._v("（6）计算秘密密钥K1如下：K1=Bx mod n")]),t._v(" "),s("p",[t._v("（7）计算秘密密钥K2如下：K2=Ay mod n K1=K2，因此Alice和Bob可以用其进行加解密")]),t._v(" "),s("h3",{attrs:{id:"https加密过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https加密过程"}},[t._v("#")]),t._v(" https加密过程")]),t._v(" "),s("p",[t._v("认证服务器。浏览器内置一个受信任的CA机构列表，并保存了这些CA机构的证书。第一阶段服务器会提供经CA机构认证颁发的服务器证书，如果认证该服务器证书的CA机构，存在于浏览器的受信任CA机构列表中，并且服务器证书中的信息与当前正在访问的网站（域名等）一致，那么浏览器就认为服务端是可信的，并从服务器证书中取得服务器公钥，用于后续流程。否则，浏览器将提示用户，根据用户的选择，决定是否继续。当然，我们可以管理这个受信任CA机构列表，添加我们想要信任的CA机构，或者移除我们不信任的CA机构。")]),t._v(" "),s("p",[t._v("协商会话密钥。客户端在认证完服务器，获得服务器的公钥之后，利用该公钥与服务器进行加密通信，协商出两个会话密钥，分别是用于加密客户端往服务端发送数据的客户端会话密钥，用于加密服务端往客户端发送数据的服务端会话密钥。在已有服务器公钥，可以加密通讯的前提下，还要协商两个对称密钥的原因，是因为非对称加密相对复杂度更高，在数据传输过程中，使用对称加密，可以节省计算资源。另外，会话密钥是随机生成，每次协商都会有不一样的结果，所以安全性也比较高。")]),t._v(" "),s("p",[t._v("加密通讯。此时客户端服务器双方都有了本次通讯的会话密钥，之后传输的所有Http数据，都通过会话密钥加密。这样网路上的其它用户，将很难窃取和篡改客户端和服务端之间传输的数据，从而保证了数据的私密性和完整性。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("https协议 SSL协议 TLS协议、握手协议的关系")])]),t._v(" "),s("li",[s("p",[t._v("https 基于ssl的http协议")])]),t._v(" "),s("li",[s("p",[t._v("SSL协议是一种记录协议，扩展性良好，可以方便添加子协议")])]),t._v(" "),s("li",[s("p",[t._v("握手协议是SSL的一个子协议")])]),t._v(" "),s("li",[s("p",[t._v("TLS是SSL的后续版本")])])]),t._v(" "),s("h3",{attrs:{id:"tls握手过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tls握手过程"}},[t._v("#")]),t._v(" TLS握手过程")]),t._v(" "),s("ol",[s("li",[t._v("ClientHello：客户端发送所支持的 SSL/TLS 最高协议版本号和所支持的加密算法集合及压缩方法集合等信息给 服务器端。")]),t._v(" "),s("li",[t._v("ServerHello：服务器端收到客户端信息后，选定双方都能够支持的 SSL/TLS 协议版本和加密方法及压缩方法， 返回给客户端。")]),t._v(" "),s("li",[t._v("SendCertificate（可选）：服务器端发送服务端证书给客户端。")]),t._v(" "),s("li",[t._v("RequestCertificate（可选）：如果选择双向验证，服务器端向客户端请求客户端证书")]),t._v(" "),s("li",[t._v("ServerHelloDone：服务器端通知客户端初始协商结束。")]),t._v(" "),s("li",[t._v("ResponseCertificate（可选）：如果选择双向验证，客户端向服务器端发送客户端证书。")]),t._v(" "),s("li",[t._v("ClientKeyExchange：客户端使用服务器端的公钥，对客户端公钥和密钥种子进行加密，再发送给服务器端。")]),t._v(" "),s("li",[t._v("CertificateVerify（可选）：如果选择双向验证，客户端用本地私钥生成数字签名，并发送给服务器端，让其通 过收到的客户端公钥进行身份验证。")]),t._v(" "),s("li",[t._v("CreateSecretKey：通讯双方基于密钥种子等信息生成通讯密钥。")]),t._v(" "),s("li",[t._v("ChangeCipherSpec：客户端通知服务器端已将通讯方式切换到加密模式。")]),t._v(" "),s("li",[t._v("Finished：客户端做好加密通讯的准备。")]),t._v(" "),s("li",[t._v("ChangeCipherSpec：服务器端通知客户端已将通讯方式切换到加密模式。")]),t._v(" "),s("li",[t._v("Finished：服务器做好加密通讯的准备。")]),t._v(" "),s("li",[t._v("Encrypted/DecryptedData：双方使用客户端密钥，通过对称加密算法对通讯内容进行加密。")]),t._v(" "),s("li",[t._v("ClosedConnection：通讯结束后，任何一方发出断开 SSL 连接的消息。")])]),t._v(" "),s("p",[t._v("这个过程可通过wireshark抓包分析出来")]),t._v(" "),s("p",[s("img",{attrs:{src:_(386),alt:"image-20210520211145292"}})]),t._v(" "),s("p",[t._v("从图中就可看出主要的一些步骤信息")]),t._v(" "),s("h2",{attrs:{id:"http2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[t._v("#")]),t._v(" HTTP2")]),t._v(" "),s("p",[s("strong",[t._v("特点：")])]),t._v(" "),s("p",[t._v("​\t1、使用二进制格式传输，更高效，更紧凑；原本是用ASCII码进行传输，也就是纯文本，对于大的纯数字的时候，二进制格式占用容器更小")]),t._v(" "),s("p",[t._v("​\t2、报头压缩，降低开销")]),t._v(" "),s("p",[t._v("​\t3、多路复用，一个网络连接实现并行请求")]),t._v(" "),s("p",[t._v("​\t4、服务器主动推送，减少请求的延迟")]),t._v(" "),s("p",[t._v("​\t5、默认使用加密")]),t._v(" "),s("h3",{attrs:{id:"二进制分帧层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧层"}},[t._v("#")]),t._v(" "),s("strong",[t._v("二进制分帧层")])]),t._v(" "),s("p",[t._v("HTTP2定义了如何封装HTTP消息在客户端与服务端的传输")]),t._v(" "),s("p",[t._v("在1.1之前的模型中，HTTP消息是一串文本，以换行符作为请求头请求体的分隔符，而HTTP2则对HTTP消息进行了封装，把头与数据分成了两个更小的二进制格式数据帧。这个”层“是位于套接字接口与应用的HTTP API之间的一个优化的新编码机制，所以对应用使用不影响。")]),t._v(" "),s("p",[t._v("在 HTTP/2 中，有了二进制分帧之后，HTTP 2.0不再依赖TCP链接去实现多流并行了，在HTTP/2：")]),t._v(" "),s("ul",[s("li",[t._v("同域名下所有通信都在单个连接上完成。")]),t._v(" "),s("li",[t._v("单个连接可以承载任意数量的双向数据流。")]),t._v(" "),s("li",[t._v("数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装。")])]),t._v(" "),s("p",[t._v("这一特性，性能会有极大的提升，因为：")]),t._v(" "),s("ul",[s("li",[t._v("同个域名只需要占用一个TCP连接，消除了因多个TCP连接而带来的延时和内存消耗。")]),t._v(" "),s("li",[t._v("单个连接上可以并行交错的请求和响应，之间互不干扰。")])]),t._v(" "),s("h3",{attrs:{id:"报头压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报头压缩"}},[t._v("#")]),t._v(" 报头压缩")]),t._v(" "),s("p",[t._v("在 HTTP/1 中，我们使用文本的形式传输 header，在 header 携带 cookie 的情况下，可能每次都需要重复传输几百到几千的字节。")]),t._v(" "),s("p",[t._v("在 HTTP /2 中，使用了 HPACK 压缩格式对传输的 header 进行编码，减少了 header 的大小。并在两端维护了索引表，用于记录出现过的 header ，后面在传输过程中就可以传输已经记录过的 header 的键名，对端收到数据后就可以通过键名找到对应的值。")]),t._v(" "),s("h3",{attrs:{id:"多路复用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[t._v("#")]),t._v(" "),s("strong",[t._v("多路复用")])]),t._v(" "),s("p",[t._v("在1.1中，客户端想要发起多个并行请求，必须使用多个TCP连接，这种模式会导致队首阻塞，降低连接效率。且在HTTP1.1中浏览器会限制一个域名的TCP连接请求数，一般为6个")]),t._v(" "),s("p",[t._v("HTTP2则将消息分解成一个一个的独立数据帧，交错发送，接收端再将帧重组成HTTP消息。")]),t._v(" "),s("p",[t._v("特点：1、交错发送多个请求，互不影响；2、并行交错发送多个响应，互不干扰；3、使用一个TCP连接发送多个请求和响应；4、消除不必要的延迟和提高现有网络容量的利用率；")]),t._v(" "),s("h3",{attrs:{id:"服务器推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送"}},[t._v("#")]),t._v(" "),s("strong",[t._v("服务器推送")]),t._v("：")]),t._v(" "),s("p",[t._v("Server push是HTTP/2中一个很强大的功能：")]),t._v(" "),s("ul",[s("li",[t._v("服务器除了响应客户端的请求外，还可以向客户端额外推送资源。")]),t._v(" "),s("li",[t._v("服务器推送的资源有自己独立的URL， 可以被浏览器缓存，可以达到多页面共享。")]),t._v(" "),s("li",[t._v("资源推送遵守同源策略，服务器不可随便推送第三方资源给客户端。")]),t._v(" "),s("li",[t._v("客户端可以拒绝推送过来的资源。")])]),t._v(" "),s("p",[t._v("服务端可以对一个客户端请求发送多个响应。")]),t._v(" "),s("ul",[s("li",[t._v("应用可以通过额外的http头部，列出需要服务器推送哪些资源。")]),t._v(" "),s("li",[t._v("服务器可以解析请求的html，推测出客户端接下来需要请求的资源，然后提前向客户端推送。")])]),t._v(" "),s("p",[s("strong",[t._v("场景")]),t._v("：服务器已经知道客户端下一步要请求什么资源，这时候服务推送即可派上用场")]),t._v(" "),s("p",[t._v("服务器推送有一个很麻烦的问题。所要推送的资源文件，如果浏览器已经有缓存，推送就是浪费带宽。即使推送的文件版本更新，浏览器也会优先使用本地缓存。")]),t._v(" "),s("p",[t._v("一种解决办法是，只对第一次访问的用户开启服务器推送。下面是 Nginx 官方给出的示例，根据 Cookie 判断是否为第一次访问。")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen 443 ssl http2 default_server;\n\n    ssl_certificate ssl/certificate.pem;\n    ssl_certificate_key ssl/key.pem;\n\n    root /var/www/html;\n    http2_push_preload on;\n\n    location = /demo.html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        add_header Set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('Cookie "session=1";\n        add_header Link $resources;\n    '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\nmap $http_cookie $resources "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n    "~'),s("span",{pre:!0,attrs:{class:"token important"}},[t._v('*session=1"')]),t._v(' "";\n    default "</style.css'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v('; as=style; rel=preload";\n'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("h4",{attrs:{id:"伪头字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪头字段"}},[t._v("#")]),t._v(" "),s("strong",[t._v("伪头字段")])]),t._v(" "),s("p",[t._v("http2内置了几个特殊的已“:”开始的key，用以替代HTTP/1.x中请求行/响应行的信息")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(":method  请求方法\n:scheme 请求协议\n:authority 请求域名\n:path 请求地址\n\n:status 响应状态\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("img",{attrs:{src:_(387),alt:"image-20210317151643602"}})]),t._v(" "),s("h5",{attrs:{id:"存在的缺点-其实是tcp的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存在的缺点-其实是tcp的缺点"}},[t._v("#")]),t._v(" 存在的缺点（其实是tcp的缺点）")]),t._v(" "),s("ul",[s("li",[t._v("tcp 以及tcp+tls建立连接延时，两个握手延时")]),t._v(" "),s("li",[t._v("tcp队头阻塞：队头阻塞会导致 HTTP/2 在更容易丢包的弱网络环境下比 HTTP/1.1 更慢")])]),t._v(" "),s("h3",{attrs:{id:"http1-x存在的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http1-x存在的缺点"}},[t._v("#")]),t._v(" http1.x存在的缺点")]),t._v(" "),s("p",[t._v("1.请求阻塞 如上已清晰说明")]),t._v(" "),s("p",[t._v("2.以明文文本字符串的形式传输内容，存在安全问题")]),t._v(" "),s("p",[t._v("3.http 请求头无状态特性 导致传输效率低下\n多个http请求头大部分信息是相同的，重复传输，导致宽带浪费.请求头多达几百字节，而请求主体却只有十几个字节，有效信息比很低。")]),t._v(" "),s("p",[t._v("4.只能浏览器主动请求响应，不能服务器主动推送信息过来")]),t._v(" "),s("h3",{attrs:{id:"http-3特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-3特点"}},[t._v("#")]),t._v(" HTTP 3特点")]),t._v(" "),s("p",[t._v("基于QUIC协议（UDP协议）")]),t._v(" "),s("ul",[s("li",[t._v("减少了握手的延迟（1-RTT 或 0-RTT）")]),t._v(" "),s("li",[t._v("多路复用，并且没有 TCP 的阻塞问题")]),t._v(" "),s("li",[t._v("连接迁移，（主要是在客户端）当由 Wifi 转移到 4G 时，连接不会被断开")])]),t._v(" "),s("p",[t._v("HTTP 3与HTTP 1.1和HTTP 2没有直接的关系，也不是http2的扩展")]),t._v(" "),s("p",[t._v("HTTP 3将会是一个全新的WEB协议")]),t._v(" "),s("p",[t._v("HTTP 3目前处于制订和测试阶段")]),t._v(" "),s("p",[t._v("https://www.chromium.org/quic")]),t._v(" "),s("h2",{attrs:{id:"http与代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http与代理"}},[t._v("#")]),t._v(" HTTP与代理")]),t._v(" "),s("p",[s("img",{attrs:{src:_(388),alt:"http3"}})]),t._v(" "),s("h4",{attrs:{id:"正向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正向代理"}},[t._v("#")]),t._v(" 正向代理")]),t._v(" "),s("p",[t._v("正向代理代理一般是指代理客户端，为客户端收发请求，使真实客户端对服务器不可见")]),t._v(" "),s("h4",{attrs:{id:"反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[t._v("#")]),t._v(" 反向代理")]),t._v(" "),s("p",[t._v("反向代理是代理服务器端，为服务器收发请求，使真实服务器对客户端不可见")]),t._v(" "),s("h4",{attrs:{id:"反向代理的用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向代理的用途"}},[t._v("#")]),t._v(" 反向代理的用途")]),t._v(" "),s("ul",[s("li",[t._v("加密和SSL加速")]),t._v(" "),s("li",[t._v("负载均衡")]),t._v(" "),s("li",[t._v("缓存静态内容")]),t._v(" "),s("li",[t._v("压缩")]),t._v(" "),s("li",[t._v("减速上传")]),t._v(" "),s("li",[t._v("安全")]),t._v(" "),s("li",[t._v("外网发布")])]),t._v(" "),s("h4",{attrs:{id:"反向代理做负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向代理做负载均衡"}},[t._v("#")]),t._v(" 反向代理做负载均衡")]),t._v(" "),s("p",[t._v("反向代理服务器位于用户与目标服务器之间，但是对于用户而言，反向代理服务器就相当于目标服务器，即用户直接访问反向代理服务器就可以获得目标服务器的资源。同时，用户不需要知道目标服务器的地址，也无须在用户端作任何设定。反向代理服务器通常可用来作为Web加速，即使用反向代理作为Web服务器的前置机来降低网络和服务器的负载，提高访问效率;")]),t._v(" "),s("p",[s("img",{attrs:{src:_(389),alt:"http3"}})])])}),[],!1,null,null,null);v.default=a.exports}}]);
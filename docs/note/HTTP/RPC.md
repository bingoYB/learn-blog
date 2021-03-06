# RPC

RPC 的全称是 Remote Procedure Call 是一种进程间通信方式。它允许程序调用另一个地址空间（通常是共享网络的另一台机器上）的过程或函数，而不用程序员显式编码这个远程调用的细节。即无论是调用本地接口/服务的还是远程的接口/服务，本质上编写的调用代码基本相同。

比如两台服务器A，B，一个应用部署在A服务器上，想要调用B服务器上应用提供的函数或者方法，由于不在一个内存空间，不能直接调用，这时候需要通过就可以应用RPC框架的实现来解决。

RPC 会隐藏底层的通讯细节（不需要直接处理Socket通讯或Http通讯）

RPC 是一个请求响应模型。客户端发起请求，服务器返回响应（类似于Http的工作方式）

RPC 在使用形式上像调用本地函数（或方法）一样去调用远程的函数（或方法）。

RPC调用的流程:

     要让网络通信细节对使用者透明，我们自然需要对通信细节进行封装，我们先看下一个RPC调用的流程：

![img](../img/HTTP/522490.png)

1）服务消费方（client）调用以本地调用方式调用服务；
2）client stub接收到调用后负责将方法、参数等组装成能够进行网络传输的消息体；
3）client stub找到服务地址，并将消息发送到服务端；
4）server stub收到消息后进行解码；
5）server stub根据解码结果调用本地的服务；
6）本地服务执行并将结果返回给server stub；
7）server stub将返回结果打包成消息并发送至消费方；
8）client stub接收到消息，并进行解码；
9）服务消费方得到最终结果。

## 既 REST ，何 RPC ？
在 OpenStack 里的进程间通信方式主要有两种，一种是基于HTTP协议的RESTFul API方式，另一种则是RPC调用。

- 前者（RESTful）主要用于各组件之间的通信，或者说用于组件对外提供调用接口
- 而后者（RPC）则用于同一组件中各个不同模块之间的通信。

## GRPC

gRPC 一开始由 Google 开发，是一款语言中立、平台中立、开源的远程过程调用(RPC)系统。

在 gRPC 里客户端应用可以像调用本地对象一样直接调用另一台不同的机器上服务端应用的方法，使得您能够更容易地创建分布式应用和服务。与许多 RPC 系统类似，gRPC 也是基于以下理念：定义一个服务，指定其能够被远程调用的方法（包含参数和返回类型）。在服务端实现这个接口，并运行一个 gRPC 服务器来处理客户端调用。在客户端拥有一个存根能够像服务端一样的方法。


1. grpc 相比 http 的优势？

2. rpc 的调用流程？前端怎么调用 grpc 的？

3. 为什么要用 grpc？

   1. 生态

   - Nginx。gRPC有Nginx加持（详见 [此处](https://nginx.org/en/docs/http/ngx_http_grpc_module.html)），可以方便的配置 证书、负载均衡等。此外还有其他众多软件，只要支持HTTP/2的，自然就能支持gRPC。

   - 众多语言支持
   
   2. 性能

     - Protobuf。Protobuf的压缩率是非常高的，可以参考 [这里](https://auth0.com/blog/beating-json-performance-with-protobuf/)， 即使你对gRPC没有兴趣，也应该去读一下[Protobuf编码规则](https://developers.google.com/protocol-buffers/docs/encoding)， 相信会对你有所启发。
     - HTTP/2。HTTP/2的优势很多

   3. 强类型。强类型，也就是说，写的时候，编译器会帮你检查很多东西，这样就不会留着在运行时报错，正所谓动态一时爽，重构火葬场。 从我个人体验来说，强类型的确能够帮助减少很多bug。

   4. 自动生成SDK。当你对接很多RESTful API时，你会发现，每个语言都要封装一份SDK，否则就只能大家都裸写JSON，这是一件很蛋疼的 重复劳动的事情，gRPC解决了这个痛点(其它RPC大多也解决了)。

5. 编写 grpc 服务和 http 服务的区别？

     (比较 gRPC 服务和 HTTP API)[https://docs.microsoft.com/zh-cn/aspnet/core/grpc/comparison?view=aspnetcore-5.0]

6. Grpc 的优缺点？


[**Grpc接口的优缺点**](https://www.cnblogs.com/seedss/p/12835566.html)



**gRPC的特性**

**基于HTTP/2**

HTTP/2 提供了连接多路复用、双向流、服务器推送、请求优先级、首部压缩等机制。可以节省带宽、降低TCP链接次数、节省CPU，帮助移动设备延长电池寿命等。gRPC 的协议设计上使用了HTTP2 现有的语义，请求和响应的数据使用HTTP Body 发送，其他的控制信息则用Header 表示。

**IDL使用ProtoBuf**

gRPC使用ProtoBuf来定义服务，ProtoBuf是由Google开发的一种数据序列化协议（类似于XML、JSON、hessian）。ProtoBuf能够将数据进行序列化，并广泛应用在数据存储、通信协议等方面。压缩和传输效率高，语法简单，表达力强。

**多语言支持**

gRPC支持多种语言（C, C++, Python, PHP, Nodejs, C#, Objective-C、Golang、Java），并能够基于语言自动生成客户端和服务端功能库。目前已提供了C版本grpc、Java版本grpc-java 和 Go版本grpc-go，其它语言的版本正在积极开发中，其中，grpc支持C、C++、Node.js、Python、Ruby、Objective-C、PHP和C#等语言，grpc-java已经支持Android开发。

gRPC优缺点：

优点：

protobuf二进制消息，性能好/效率高（空间和时间效率都很不错）

proto文件生成目标代码，简单易用

序列化反序列化直接对应程序中的数据类，不需要解析后在进行映射(XML,JSON都是这种方式)

支持向前兼容（新加字段采用默认值）和向后兼容（忽略新加字段），简化升级

支持多种语言（可以把proto文件看做IDL文件）

Netty等一些框架集成

缺点：

1）GRPC尚未提供连接池，需要自行实现

2）尚未提供“服务发现”、“负载均衡”机制

3）因为基于HTTP2，绝大部多数HTTP Server、Nginx都尚不支持，即Nginx不能将GRPC请求作为HTTP请求来负载均衡，而是作为普通的TCP请求。（nginx1.9版本已支持）

4） Protobuf二进制可读性差（貌似提供了Text_Fromat功能）

默认不具备动态特性（可以通过动态定义生成消息类型或者动态编译支持）
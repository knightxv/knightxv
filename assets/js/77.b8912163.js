(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{401:function(t,a,v){"use strict";v.r(a);var _=v(4),s=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-长连接和短连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-长连接和短连接"}},[t._v("#")]),t._v(" HTTP 长连接和短连接？")]),t._v(" "),a("h2",{attrs:{id:"短链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#短链接"}},[t._v("#")]),t._v(" 短链接")]),t._v(" "),a("p",[t._v("在 HTTP/1.0 中，默认使用的是短连接。也就是说，浏览器和服务器每进行一次 HTTP 操作，就建立一次连接，但任务结束就中断连接。如果客户端浏览器访问的某个 HTML 或其他类型的 Web 页中包含有其他的 Web 资源，如 JavaScript 文件、图像文件、CSS 文件等；当浏览器每遇到这样一个 Web 资源，就会建立一个 HTTP 会话。")]),t._v(" "),a("h3",{attrs:{id:"短连接的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#短连接的优缺点"}},[t._v("#")]),t._v(" 短连接的优缺点:")]),t._v(" "),a("p",[t._v("管理起来比较简单，存在的连接都是有用的连接，不需要额外的控制手段。")]),t._v(" "),a("p",[t._v("但从 HTTP/1.1 起，默认使用长连接，用以保持连接特性。使用长连接的 HTTP 协议，会在响应头有加入这行代码：Connection:keep-alive")]),t._v(" "),a("h3",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景：")]),t._v(" "),a("p",[t._v("通常浏览器访问服务器的时候就是短连接。")]),t._v(" "),a("p",[t._v("对于服务端来说，长连接会耗费服务端的资源，而且用户用浏览器访问服务端相对而言不是很频繁的")]),t._v(" "),a("p",[t._v("如果有几十万，上百万的连接，服务端的压力会非常大，甚至会崩溃。")]),t._v(" "),a("p",[t._v("所以对于并发量大，请求频率低的，建议使用短连接。")]),t._v(" "),a("h2",{attrs:{id:"长链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#长链接"}},[t._v("#")]),t._v(" 长链接：")]),t._v(" "),a("p",[t._v("在使用长连接的情况下，当一个网页打开完成后，客户端和服务器之间用于传输 HTTP 数据的 TCP 连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接。Keep-Alive 不会永久保持连接，它有一个保持时间，可以在不同的服务器软件（如 Apache）中设定这个时间。实现长连接要客户端和服务端都支持长连接。")]),t._v(" "),a("h3",{attrs:{id:"长连接的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#长连接的生命周期"}},[t._v("#")]),t._v(" 长连接的生命周期")]),t._v(" "),a("p",[t._v("正常情况下，一条 TCP 长连接建立后，只要双不提出关闭请求并且不出现异常情况，这条连接是一直存在的.")]),t._v(" "),a("p",[t._v("操作系统不会自动去关闭它，甚至经过物理网络拓扑的改变之后仍然可以使用。")]),t._v(" "),a("p",[t._v("所以一条连接保持几天、几个月、几年或者更长时间都有可能，只要不出现异常情况或由用户（应用层）主动关闭。")]),t._v(" "),a("p",[t._v("客户端和服务单可一直使用该连接进行数据通信。")]),t._v(" "),a("h3",{attrs:{id:"长连接的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#长连接的优点"}},[t._v("#")]),t._v(" 长连接的优点：")]),t._v(" "),a("p",[t._v("长连接可以省去较多的 TCP 建立和关闭的操作，减少网络阻塞的影响，\n当发生错误时，可以在不关闭连接的情况下进行提示，\n减少 CPU 及内存的使用，因为不需要经常的建立及关闭连接。\n长连接的缺点：")]),t._v(" "),a("p",[t._v("连接数过多时，影响服务端的性能和并发数量。")]),t._v(" "),a("h3",{attrs:{id:"使用场景-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-2"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),a("p",[t._v("数据库的连接就是采用 TCP 长连接.\nRPC，远程服务调用，在服务器，一个服务进程频繁调用另一个服务进程，可使用长连接，减少连接花费的时间。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("对于长连接和短连接的使用是需要根据应用场景来判断的")])]),t._v(" "),a("li",[a("p",[t._v("长连接并不是万能的，也是需要维护的，")])])]),t._v(" "),a("p",[t._v("HTTP 协议的长连接和短连接，实质上是 TCP 协议的长连接和短连接。")])])}),[],!1,null,null,null);a.default=s.exports}}]);
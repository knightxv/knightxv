(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{402:function(s,a,t){"use strict";t.r(a);var r=t(4),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"网络攻击方式总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络攻击方式总结"}},[s._v("#")]),s._v(" 网络攻击方式总结")]),s._v(" "),a("h2",{attrs:{id:"csrf-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf-攻击"}},[s._v("#")]),s._v(" CSRF 攻击？")]),s._v(" "),a("h3",{attrs:{id:"什么是-csrf-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-csrf-攻击"}},[s._v("#")]),s._v(" 什么是 CSRF 攻击？")]),s._v(" "),a("p",[s._v("CSRF，跨站请求伪造（英文全称是 Cross-site request forgery），是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。")]),s._v(" "),a("h3",{attrs:{id:"csrf-是如何攻击的呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf-是如何攻击的呢"}},[s._v("#")]),s._v(" CSRF 是如何攻击的呢？")]),s._v(" "),a("p",[s._v("举例：")]),s._v(" "),a("ol",[a("li",[s._v("Tom 登陆银行，没有退出，浏览器包含了 Tom 在银行的身份认证信息。")]),s._v(" "),a("li",[s._v("黑客 Jerry 将伪造的转账请求，包含在在帖子")]),s._v(" "),a("li",[s._v("Tom 在银行网站保持登陆的情况下，浏览帖子")]),s._v(" "),a("li",[s._v("将伪造的转账请求连同身份认证信息，发送到银行网站")]),s._v(" "),a("li",[s._v("银行网站看到身份认证信息，以为就是 Tom 的合法操作，最后造成 Tom 资金损失。")])]),s._v(" "),a("h3",{attrs:{id:"怎么解决-csrf-攻击呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么解决-csrf-攻击呢"}},[s._v("#")]),s._v(" 怎么解决 CSRF 攻击呢？")]),s._v(" "),a("ul",[a("li",[s._v("检查 Referer 字段。")]),s._v(" "),a("li",[s._v("添加校验 token。")])]),s._v(" "),a("h2",{attrs:{id:"xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击"}},[s._v("#")]),s._v(" XSS 攻击")]),s._v(" "),a("h3",{attrs:{id:"什么是-xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-xss-攻击"}},[s._v("#")]),s._v(" 什么是 XSS 攻击?")]),s._v(" "),a("p",[s._v("XSS 攻击也是比较常见，XSS，叫跨站脚本攻击（Cross-Site Scripting），因为会与层叠样式表 (Cascading Style Sheets, CSS) 的缩写混淆，因此有人将跨站脚本攻击缩写为 XSS。它指的是恶意攻击者往 Web 页面里插入恶意 html 代码，当用户浏览该页之时，嵌入其中 Web 里面的 html 代码会被执行，从而达到恶意攻击用户的特殊目的。XSS 攻击一般分三种类型：存储型 、反射型 、DOM 型 XSS")]),s._v(" "),a("h3",{attrs:{id:"xss-是如何攻击的呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-是如何攻击的呢"}},[s._v("#")]),s._v(" XSS 是如何攻击的呢？")]),s._v(" "),a("p",[s._v("拿反射型举个例子吧:")]),s._v(" "),a("ol",[a("li",[s._v("发送带有 XSS 恶意脚本的链接")]),s._v(" "),a("li",[s._v("用户点击了恶意链接，访问了正常服务器")]),s._v(" "),a("li",[s._v("服务器讲 XSS 同正常页面放回给用户浏览器")]),s._v(" "),a("li",[s._v("用户浏览器解析了 XSS 恶意代码，向恶意服务器发起请求")]),s._v(" "),a("li",[s._v("黑客从自己的恶意服务器获取用户提交的信息")])]),s._v(" "),a("h3",{attrs:{id:"如何解决-xss-攻击问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决-xss-攻击问题"}},[s._v("#")]),s._v(" 如何解决 XSS 攻击问题？")]),s._v(" "),a("ul",[a("li",[s._v("对输入进行过滤，过滤标签等，只允许合法值。")]),s._v(" "),a("li",[s._v("HTML 转义")]),s._v(" "),a("li",[s._v('对于链接跳转，如 < a href="xxx" 等，要校验内容，禁止以 script 开头的非法链接。')]),s._v(" "),a("li",[s._v("限制输入长度")])]),s._v(" "),a("h2",{attrs:{id:"sql-注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入"}},[s._v("#")]),s._v(" SQL 注入")]),s._v(" "),a("h3",{attrs:{id:"什么是-sql-注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-sql-注入"}},[s._v("#")]),s._v(" 什么是 SQL 注入？")]),s._v(" "),a("p",[s._v("SQL 注入是一种代码注入技术，一般被应用于攻击 web 应用程序。它通过在 web 应用接口传入一些特殊参数字符，来欺骗应用服务器，执行恶意的 SQL 命令，以达到非法获取系统信息的目的。它目前是黑客对数据库进行攻击的最常用手段之一。")]),s._v(" "),a("h3",{attrs:{id:"sql-注入是如何攻击的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入是如何攻击的"}},[s._v("#")]),s._v(" SQL 注入是如何攻击的？")]),s._v(" "),a("p",[s._v("举个常见的业务场景：在 web 表单搜索框输入员工名字，然后后台查询出对应名字的员工。")]),s._v(" "),a("p",[s._v("这种场景下，一般都是前端页面, 把一个名字参数 name 传到后台，然后后台通过 SQL 把结果查询出来")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"田螺"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 前端传过来的")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据前端传过来的 name 参数，查询数据库员工表 staff")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select * from staff where name="')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("因为 SQL 是直接拼接的，如果我们完全信任前端传的参数的话。假如前端传这么一个参数时''or'1'='1'，SQL 就变成酱紫的啦。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" staff "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个 SQL 会把所有的员工信息全都查出来了，酱紫就请求用户已经越权啦。请求者可以获取所有员工的信息，信息已经暴露了啦。")]),s._v(" "),a("h3",{attrs:{id:"如何预防-sql-注入问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何预防-sql-注入问题"}},[s._v("#")]),s._v(" 如何预防 SQL 注入问题")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("使用 #{} 而不是 ${}")]),s._v(" "),a("p",[s._v("在 MyBatis 中, 使用**#{}"),a("strong",[s._v("而不是")]),s._v("${}**，可以很大程度防止 sql 注入。")]),s._v(" "),a("p",[s._v('因为**#{}**是一个参数占位符，对于字符串类型，会自动加上 ""，其他类型不加。由于 Mybatis 采用预编译，其后的参数不会再进行 SQL 编译，所以一定程度上防止 SQL 注入。\n**${}**是一个简单的字符串替换，字符串是什么，就会解析成什么，存在 SQL 注入风险')])]),s._v(" "),a("li",[a("p",[s._v("不要暴露一些不必要的日志或者安全信息，比如避免直接响应一些 sql 异常信息。")]),s._v(" "),a("p",[s._v("如果 SQL 发生异常了，不要把这些信息暴露响应给用户，可以自定义异常进行响应")])]),s._v(" "),a("li",[a("p",[s._v("不相信任何外部输入参数，过滤参数中含有的一些数据库关键词关键词")]),s._v(" "),a("p",[s._v("可以加个参数校验过滤的方法，过滤 union，or 等数据库关键词")])]),s._v(" "),a("li",[a("p",[s._v("适当的权限控制")]),s._v(" "),a("p",[s._v("在你查询信息时，先校验下当前用户是否有这个权限。比如说，实现代码的时候，可以让用户多传一个企业 Id 什么的，或者获取当前用户的 session 信息等，在查询前，先校验一下当前用户是否是这个企业下的等等，是的话才有这个查询员工的权限。")])])]),s._v(" "),a("h2",{attrs:{id:"什么是-dos、ddos、drdos-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dos、ddos、drdos-攻击"}},[s._v("#")]),s._v(" . 什么是 DoS、DDoS、DRDoS 攻击？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("DOS: (Denial of Service), 翻译过来就是拒绝服务, 一切能引起 DOS 行为的攻击都被称为 DOS 攻击。最常见的 DoS 攻击就有计算机网络宽带攻击、连通性攻击。")])]),s._v(" "),a("li",[a("p",[s._v("DDoS: (Distributed Denial of Service), 翻译过来是分布式拒绝服务。是指处于不同位置的多个攻击者同时向一个或几个目标发动攻击，或者一个攻击者控制了位于不同位置的多台机器并利用这些机器对受害者同时实施攻击。常见的 DDos 有 SYN Flood、Ping of Death、ACK Flood、UDP Flood 等。")])]),s._v(" "),a("li",[a("p",[s._v("DRDoS: (Distributed Reflection Denial of Service)，中文是分布式反射拒绝服务，该方式靠的是发送大量带有被害者 IP 地址的数据包给攻击主机，然后攻击主机对 IP 地址源做出大量回应，从而形成拒绝服务攻击。")])])]),s._v(" "),a("h3",{attrs:{id:"syn-flood-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syn-flood-攻击"}},[s._v("#")]),s._v(" SYN Flood 攻击")]),s._v(" "),a("p",[s._v("SYN Flood 是一种典型的 DDos 攻击，它在短时间内，伪造不存在的 IP 地址, 向服务器大量发起 SYN 报文。当服务器回复 SYN+ACK 报文后，不会收到 ACK 回应报文，导致服务器上建立大量的半连接半连接队列满了，这就无法处理正常的 TCP 请求啦。")]),s._v(" "),a("h4",{attrs:{id:"那么有哪些方案应对呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那么有哪些方案应对呢"}},[s._v("#")]),s._v(" 那么有哪些方案应对呢？")]),s._v(" "),a("p",[s._v("主要有 syn cookie 和 SYN Proxy 防火墙等。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("syn cookie：")]),s._v(" "),a("p",[s._v("在收到 SYN 包后，服务器根据一定的方法，以数据包的源地址、端口等信息为参数计算出一个 cookie 值作为自己的 SYNACK 包的序列号，回复 SYN+ACK 后，服务器并不立即分配资源进行处理，等收到发送方的 ACK 包后，重新根据数据包的源地址、端口计算该包中的确认序列号是否正确，如果正确则建立连接，否则丢弃该包。")])]),s._v(" "),a("li",[a("p",[s._v("SYN Proxy 防火墙：")]),s._v(" "),a("p",[s._v("服务器防火墙会对收到的每一个 SYN 报文进行代理和回应，并保持半连接。等发送方将 ACK 包返回后，再重新构造 SYN 包发到服务器，建立真正的 TCP 连接。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{390:function(t,e,i){"use strict";i.r(e);var a=i(4),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("#MySQL 执行查询过程")]),t._v(" "),e("h3",{attrs:{id:"mysql-执行查询过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-执行查询过程"}},[t._v("#")]),t._v(" MySQL 执行查询过程")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/21380271/1646468335457-8f286a22-e1a3-4dbf-9a2a-e9f4d62371d3.png#averageHue=%23ebeee1&clientId=ub63f7278-093b-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=srts0&margin=%5Bobject%20Object%5D&name=image-20220305154020996.png&originHeight=507&originWidth=648&originalType=binary&ratio=1&rotation=0&showTitle=false&size=199722&status=done&style=none&taskId=u3abf2dfb-ddf9-48a2-9c0f-577a1ff1957&title=",alt:"image-20220305154020996.png"}})]),t._v(" "),e("ol",[e("li",[t._v("客户端通过 TCP 连接发生连接请求到 MySQL 连接器, 连接器会对该请求进行权限验证以及连接资源分配")]),t._v(" "),e("li",[e("strong",[t._v("查询缓存")]),t._v("(8.0 之后没了, 原因是一般失效会非常频繁)。\n"),e("ol",[e("li",[t._v("当判断缓存是否命中时，MySQL 不会进行解析查询语句，而是直接使用 SQL 语句和客户端发送过来的其他原始信息。所以，任何字符上的不同，例如空格、注解等都会导致缓存的不命中。）")])])]),t._v(" "),e("li",[t._v("分析器(词法分析 ->** 语法分析**)\n"),e("ol",[e("li",[t._v("（SQL 语法是否写错了）。 如何把语句给到预处理器，检查数据表和数据列是否存在，解析别名看是否存在歧义。")])])]),t._v(" "),e("li",[e("strong",[t._v("优化")]),t._v("器(决定索引的最佳使用方案)。是否使用索引，生成执行计划。")]),t._v(" "),e("li",[t._v("执行器(检查权限 -> 执行语句 -> 返回结果集)\n"),e("ol",[e("li",[t._v("交给执行器，将数据保存到结果集中，同时会逐步将数据缓存到查询缓存中，最终将结果集返回给客户端。")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
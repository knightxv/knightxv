(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{432:function(a,s,t){"use strict";t.r(s);var v=t(4),_=Object(v.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"缓存一致性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存一致性"}},[a._v("#")]),a._v(" 缓存一致性")]),a._v(" "),s("h2",{attrs:{id:"需求背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求背景"}},[a._v("#")]),a._v(" 需求背景")]),a._v(" "),s("p",[a._v("在 IM 系统中，用户需要获取好友列表，不可能每次都从 MySQL 磁盘中获取好友相关信息，因此考虑引入缓存。并且当好友列表发生变化，需要及时的更新到缓存里面，mysql 和 redis 的数据一致性。")]),a._v(" "),s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),s("p",[a._v("我们采用"),s("code",[a._v("旁路缓存(Cache-aside)")]),a._v("的方案来解决数据一致性问题。它可以分为读和写策略。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("读策略：")]),a._v(" "),s("p",[a._v("从缓存中读取数据；如果缓存命中，则直接返回数据；如果缓存不命中，则从数据库中查询数据；查询到数据后，将数据写入到缓存中，并且返回给用户。")])]),a._v(" "),s("li",[s("p",[a._v("写策略：")]),a._v(" "),s("p",[a._v("更新数据库中 Redis 的记录；删除缓存记录。")])])]),a._v(" "),s("h3",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),s("p",[a._v("当我们进行数据库操作的时候，同时要更新 redis 缓存，这就会产生分布式事务问题，即缓存更新成功，数据库更新失败或数据库更新成功，缓存更新失败。引入 TCC 等分布式方案也会引发幂等性，空回滚等一些问题，导致业务过于复杂。")]),a._v(" "),s("h3",{attrs:{id:"mysql-主从同步原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-主从同步原理"}},[a._v("#")]),a._v(" Mysql 主从同步原理")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("MySQL master 将数据变更写入二进制日志( binary log , 其中记录叫做二进制日志事件 binary log events 可以通过 show binlog events 进行查看)")])]),a._v(" "),s("li",[s("p",[a._v("MySQL slave 将 master 的 binary log events 拷贝到它的中继日志( relay log )")])]),a._v(" "),s("li",[s("p",[a._v("MySQL slave 重放 relay log 中事件，将数据变更反映它自己的数据")])])]),a._v(" "),s("h3",{attrs:{id:"canal-工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canal-工作原理"}},[a._v("#")]),a._v(" Canal 工作原理")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("canal 模拟 MySQL slave 的交互协议，伪装自己为 MySQL slave ，向 MySQL master 发送 dump 协议")])]),a._v(" "),s("li",[s("p",[a._v("MySQL\nmaster 收到 dump 请求，开始推送 binary log 给 slave (即 canal )")])]),a._v(" "),s("li",[s("p",[a._v("canal 解析 binary log 对象(原始为 byte 流)\n"),s("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230119/ms-3.2wcws3amepc0.webp",alt:""}})])])]),a._v(" "),s("h3",{attrs:{id:"解决方案-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-2"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),s("p",[a._v("利用 Mysql 主从同步原理，用户每次操作数据库的时候，使用 Canal 监听数据库好友表的增量变化，Hook 事件并删除 Redis 缓存。")]),a._v(" "),s("h3",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),s("p",[a._v("在缓存未命中的情况下，"),s("code",[a._v("查询 mysql 并更新缓存需要添加分布式锁")]),a._v("，防止查询期间过多的查询请求落到数据库中。")]),a._v(" "),s("p",[a._v("在删除缓存的时候会有一种情况：")]),a._v(" "),s("p",[a._v("步骤 1： 就是用户未命中缓存，在查询数据库并更新时，此时网络出现了延迟，更新操作被滞后了")]),a._v(" "),s("p",[a._v("步骤 2： 好友表发生了数据变动，此时会去删除缓存。")]),a._v(" "),s("p",[a._v("当步骤 2 执行完成后，此时步骤 1 的网络恢复，执行了更新操作。此时就会访问到旧的数据。")]),a._v(" "),s("p",[a._v("所以在"),s("code",[a._v("删除缓存的时候也需要添加分布式锁")]),a._v("，保证删除更新的一致性。")])])}),[],!1,null,null,null);s.default=_.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{376:function(t,_,v){"use strict";v.r(_);var a=v(4),s=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"分布式事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[t._v("#")]),t._v(" 分布式事务")]),t._v(" "),_("p",[t._v("分布式事务是分布式系统中非常重要的一部分，最典型的例子是银行转账和扣款，A 和 B 的账户信息在不同的服务器上，A 给 B 转账 100 元，要完成这个操作，需要两个步骤，从 A 的账户上扣款，以及在 B 的账户上增加金额，两个步骤必须全部执行成功；否则如果有一个失败，那么另一个操作也不能执行。")]),t._v(" "),_("p",[t._v("那么像这种转账扣款的例子，在业务中如何保证一致性，有哪些解决方案呢？")]),t._v(" "),_("h2",{attrs:{id:"分布式事务是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务是什么"}},[t._v("#")]),t._v(" 分布式事务是什么")]),t._v(" "),_("p",[t._v("顾名思义，分布式事务关注的是分布式场景下如何处理事务，是指事务的参与者、支持事务操作的服务器、存储等资源分别位于分布式系统的不同节点之上。")]),t._v(" "),_("p",[t._v("简单来说，分布式事务就是一个业务操作，是由多个细分操作完成的，而这些细分操作又分布在不同的服务器上；事务，就是这些操作要么全部成功执行，要么全部不执行。")]),t._v(" "),_("h2",{attrs:{id:"分布式事务产生的原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务产生的原因"}},[t._v("#")]),t._v(" 分布式事务产生的原因")]),t._v(" "),_("p",[t._v("分布式事务是伴随着系统拆分出现的，前面我们说过，分布式系统解决了海量数据服务对扩展性的要求，但是增加了架构上的复杂性，在这一点上，分布式事务就是典型的体现。")]),t._v(" "),_("p",[t._v("在实际开发中，分布式事务产生的原因主要来源于存储和服务的拆分。")]),t._v(" "),_("h3",{attrs:{id:"存储层拆分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储层拆分"}},[t._v("#")]),t._v(" 存储层拆分")]),t._v(" "),_("p",[t._v("存储层拆分，最典型的就是数据库分库分表，一般来说，当单表容量达到千万级，就要考虑数据库拆分，从单一数据库变成多个分库和多个分表。在业务中如果需要进行跨库或者跨表更新，同时要保证数据的一致性，就产生了分布式事务问题。在后面的课程中，也会专门来讲解数据库拆分相关的内容。")]),t._v(" "),_("img",{attrs:{src:"https://s0.lgstatic.com/i/image3/M01/03/73/CgoCgV6YKgWAC4JgAAB2eZ1XI1A491.png"}}),t._v("\n### 服务层拆分\n服务层拆分也就是业务的服务化，系统架构的演进是从集中式到分布式，业务功能之间越来越解耦合。\n"),_("p",[t._v("比如电商网站系统，业务初期可能是一个单体工程支撑整套服务，但随着系统规模进一步变大，参考康威定律，大多数公司都会将核心业务抽取出来，以作为独立的服务。商品、订单、库存、账号信息都提供了各自领域的服务，业务逻辑的执行散落在不同的服务器上。")]),t._v(" "),_("p",[t._v("用户如果在某网站上进行一个下单操作，那么会同时依赖订单服务、库存服务、支付扣款服务，这几个操作如果有一个失败，那下单操作也就完不成，这就需要分布式事务来保证了。")]),t._v(" "),_("img",{attrs:{src:"https://s0.lgstatic.com/i/image3/M01/10/A7/Ciqah16YM9CAZN3eAAEQmtX7AiM805.png"}}),t._v(" "),_("h2",{attrs:{id:"分布式事务解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务解决方案"}},[t._v("#")]),t._v(" 分布式事务解决方案")]),t._v(" "),_("p",[t._v("分布式事务的解决方案，典型的有两阶段和三阶段提交协议、 TCC 分段提交，和基于消息队列的最终一致性设计。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("2PC 两阶段提交")]),t._v(" "),_("p",[t._v("两阶段提交（2PC，Two-phase Commit Protocol）是非常经典的强一致性、中心化的原子提交协议，在各种事务和一致性的解决方案中，都能看到两阶段提交的应用。")])]),t._v(" "),_("li",[_("p",[t._v("3PC 三阶段提交")]),t._v(" "),_("p",[t._v("三阶段提交协议（3PC，Three-phase_commit_protocol）是在 2PC 之上扩展的提交协议，主要是为了解决两阶段提交协议的阻塞问题，从原来的两个阶段扩展为三个阶段，增加了超时机制。")])]),t._v(" "),_("li",[_("p",[t._v("TCC 分段提交")]),t._v(" "),_("p",[t._v("TCC 是一个分布式事务的处理模型，将事务过程拆分为 Try、Confirm、Cancel 三个步骤，在保证强一致性的同时，最大限度提高系统的可伸缩性与可用性。")])])]),t._v(" "),_("p",[t._v("两阶段、三阶段以及 TCC 协议在后面的课程中我会详细介绍，接下来介绍几种系统设计中常用的一致性解决方案。")]),t._v(" "),_("h3",{attrs:{id:"基于消息补偿的最终一致性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基于消息补偿的最终一致性"}},[t._v("#")]),t._v(" 基于消息补偿的最终一致性")]),t._v(" "),_("p",[t._v("异步化在分布式系统设计中随处可见，基于消息队列的最终一致性就是一种异步事务机制，在业务中广泛应用。")]),t._v(" "),_("p",[t._v("在具体实现上，基于消息补偿的一致性主要有本地消息表和第三方可靠消息队列等。")]),t._v(" "),_("p",[t._v("下面介绍一下本地消息表，本地消息表的方案最初是由 ebay 的工程师提出，核心思想是将分布式事务拆分成本地事务进行处理，通过消息日志的方式来异步执行。")]),t._v(" "),_("p",[t._v("本地消息表是一种业务耦合的设计，消息生产方需要额外建一个事务消息表，并记录消息发送状态，消息消费方需要处理这个消息，并完成自己的业务逻辑，另外会有一个异步机制来定期扫描未完成的消息，确保最终一致性。")]),t._v(" "),_("p",[t._v("下面我们用下单减库存业务来简单模拟本地消息表的实现过程：")]),t._v(" "),_("img",{attrs:{src:"https://s0.lgstatic.com/i/image3/M01/89/B8/Cgq2xl6YKgaAVUwAAAFePtc8mmU340.png"}}),t._v(" "),_("p",[t._v("（1）系统收到下单请求，将订单业务数据存入到订单库中，并且同时存储该订单对应的消息数据，比如购买商品的 ID 和数量，消息数据与订单库为同一库，更新订单和存储消息为一个本地事务，要么都成功，要么都失败。\n（2）库存服务通过消息中间件收到库存更新消息，调用库存服务进行业务操作，同时返回业务处理结果。\n（3）消息生产方，也就是订单服务收到处理结果后，将本地消息表的数据删除或者设置为已完成。\n（4）设置异步任务，定时去扫描本地消息表，发现有未完成的任务则重试，保证最终一致性。")]),t._v(" "),_("p",[t._v("以上就是基于本地消息表一致性的主流程，在具体实践中，还有许多分支情况，比如消息发送失败、下游业务方处理失败等，感兴趣的同学可以思考下。")]),t._v(" "),_("h3",{attrs:{id:"不要求最终一致性的柔性事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不要求最终一致性的柔性事务"}},[t._v("#")]),t._v(" 不要求最终一致性的柔性事务")]),t._v(" "),_("p",[t._v("除了上述几种，还有一种不保证最终一致性的柔性事务，也称为"),_("strong",[t._v("尽最大努力通知")]),t._v("，这种方式适合可以接受部分不一致的业务场景。")])])}),[],!1,null,null,null);_.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{434:function(s,a,t){"use strict";t.r(a);var v=t(4),e=Object(v.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"秒杀业务场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#秒杀业务场景"}},[s._v("#")]),s._v(" 秒杀业务场景")]),s._v(" "),a("h2",{attrs:{id:"需求背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求背景"}},[s._v("#")]),s._v(" 需求背景")]),s._v(" "),a("p",[s._v("春节活动中，有个活动设计到数字商品的抢购，且对 QPS 有明确的需求。因此，我们需要设计、开发一个能够支持上万级 QPS 的抢购系统，并且对商品完整的生命周期进行维护。")]),s._v(" "),a("h2",{attrs:{id:"需求拆解及技术选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求拆解及技术选型"}},[s._v("#")]),s._v(" 需求拆解及技术选型")]),s._v(" "),a("h3",{attrs:{id:"存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[s._v("#")]),s._v(" 存储")]),s._v(" "),a("p",[s._v("要配置商品，会涉及到商品的创建，以及商品的库存信息，同时无论是商品模板还是商品抢购记录，都需要开放查询接口。这些都是需要持久化的数据，同时还需要支持条件查询，所以我们选用通用的结构化存储 "),a("code",[s._v("MySQL")]),s._v(" 作为存储中间件。")]),s._v(" "),a("h3",{attrs:{id:"缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[s._v("#")]),s._v(" 缓存")]),s._v(" "),a("p",[s._v("由于抢购时需要商品模板信息，大流量情况下，不可能每次都从 MySQL 获取模板信息，因此考虑引入缓存。同理，商品的库存管理，或者叫库存扣减，也是一个高频、实时的操作，因此也考虑放入缓存中。")]),s._v(" "),a("p",[s._v("主流的缓存 Redis 可以满足我们的需求，因此我们选用 "),a("code",[s._v("Redis")]),s._v(" 作为缓存中间件。")]),s._v(" "),a("h2",{attrs:{id:"大流量、高并发场景下的问题及解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大流量、高并发场景下的问题及解决方案"}},[s._v("#")]),s._v(" 大流量、高并发场景下的问题及解决方案")]),s._v(" "),a("h3",{attrs:{id:"瓶颈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#瓶颈"}},[s._v("#")]),s._v(" 瓶颈")]),s._v(" "),a("p",[s._v("在系统架构中，我们使用了 MySQL、Redis 作为存储组件。我们知道，单个服务器的 I/O 能力终是有限的，在实际测试过程中，能够得到如下的数据：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("单个 MySQL 的每秒写入在 4000 QPS 左右，超过这个数字，MySQL 的 I/O 时延会剧量增长。")])]),s._v(" "),a("li",[a("p",[s._v("MySQL 单表记录到达了千万级别，查询效率会大大降低，如果过亿的话，数据查询会成为一个问题。")])]),s._v(" "),a("li",[a("p",[s._v("Redis 单分片的写入瓶颈在 2w 左右，读瓶颈在 10w 左右")])])]),s._v(" "),a("h3",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("blockquote",[a("p",[s._v("在软件设计中，有一种分治的思想，对于存储瓶颈的问题，业界常用的方案就是分而治之：流量分散、存储分散，即：分库分表。")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("读写分离。")]),s._v(" "),a("p",[s._v("在查询商品模板、查询商品抢购记录等场景下，我们可以将 MySQL 进行读写分离，让这部分查询流量走 MySQL 的读库，从而减轻 MySQL 写库的查询压力。")])]),s._v(" "),a("li",[a("p",[s._v("查询记录的水平拆分")]),s._v(" "),a("p",[s._v("用户查询自己抢购的商品，我们以 user_id 后四位为分片键，对用户领取的记录表做水平拆分，以支持用户维度的领券记录的查询。")])]),s._v(" "),a("li",[a("p",[s._v("MySQL 水平扩容")]),s._v(" "),a("p",[s._v("抢购商品，归根结底是要对用户的领商品记录做持久化存储。对于 MySQL 本身 I/O 瓶颈来说，我们可以在不同服务器上部署 MySQL 的不同分片，对 MySQL 做水平扩容，这样一来，写请求就会分布在不同的 MySQL 主机上，这样就能够大幅提升 MySQL 整体的吞吐量。")])]),s._v(" "),a("li",[a("p",[s._v("Redis 做水平扩容")]),s._v(" "),a("p",[s._v("每种商品都有对应的数量，在给用户抢购商品的过程中，我们是将抢购商品数记录在 Redis 中的，大流量的情况下，我们也需要对 Redis 做水平扩容，减轻 Redis 单机的压力。")])])]),s._v(" "),a("h3",{attrs:{id:"容量预估"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容量预估"}},[s._v("#")]),s._v(" 容量预估：")]),s._v(" "),a("p",[s._v("基于上述思路，假设要满足 2.4w QPS 的需求下，我们预估一下存储资源。")]),s._v(" "),a("ul",[a("li",[s._v("MySQL 资源")])]),s._v(" "),a("p",[s._v("在实际测试中，MySQL 的单机的写入瓶颈为 4000，据此可以计算我们需要的 MySQL 主库资源为：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24000")]),s._v("/4000 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("Redis 资源")])]),s._v(" "),a("p",[s._v("Redis 写入瓶颈为 2w，则需要的最少 Redis 分片为：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24000")]),s._v("/20000 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"热点库存问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热点库存问题"}},[s._v("#")]),s._v(" 热点库存问题")]),s._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),a("p",[s._v("对于单个商品，在秒杀期间，那么每次扣减库存时，访问到的 Redis 必然是特定的一个分片，因此，一定会达到这个分片的写入瓶颈。")]),s._v(" "),a("h3",{attrs:{id:"解决方案-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-2"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("p",[s._v("热点库存的问题，尽量让扣减的库存 key 不要集中在某一个分片上。如何保证这一个商品的 key 不集中在某一个分片上呢，我们拆 key（拆库存），即把库存拆成"),a("code",[s._v("key_1")]),s._v(","),a("code",[s._v("key_2")]),s._v("，这种格式，并分散到不同的 redis 分片中去。")]),s._v(" "),a("p",[s._v("这样的话，库存的扣减逻辑就变成：\n"),a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230119/640.74ge8ekk4nw0.webp",alt:""}})]),s._v(" "),a("p",[s._v("在扣减子库存时，我们先生成对应分片总数的随机不重复数组，如第一次是[1,2,3]，第二次可能是[3,1,2]，这样，每次扣减子库存的请求，就会分布到不同的 Redis 分片上，缓轻 Redis 单分片压力的同时，也能支持更高 QPS 的扣减请求。")]),s._v(" "),a("p",[s._v("然后在我们可以在每次请求的时候，将子库存的剩余量记录下来，当某一个商品的子库存耗尽后，随机不重复的轮询操作直接跳过这个子库存分片，减少一些无效访问。")]),s._v(" "),a("h2",{attrs:{id:"商品模板-big-key-问题以及超时问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#商品模板-big-key-问题以及超时问题"}},[s._v("#")]),s._v(" 商品模板 Big Key 问题以及超时问题")]),s._v(" "),a("h3",{attrs:{id:"问题-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-2"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("我们在 redis 上缓存了商品的信息，当商品信息数据很大或者在高并发场景，这部分流量的出口流量是很大的，容易引发 redis 阻塞和网络阻塞，影响 redis 其它实例")])]),s._v(" "),a("li",[a("p",[s._v("由于项目强依赖于 Redis，高 QPS，高并发的场景下，Redis 超时的概率大概在万分之 2、3。因此，这部分模板请求是必然失败的。")])])]),s._v(" "),a("h3",{attrs:{id:"解决方案-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-3"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("p",[s._v("将商品模板信息缓存到实例的本地内存中，即引入二级缓存。当然，引入了本地缓存，我们还需要在每个服务实例中启动一个定时任务来将最新的商品模板信息刷入到本地缓存和 Redis 中，将模板信息刷入 Redis 中时，要加分布式锁，防止多个实例同时写 Redis 给 Redis 造成不必要的压力。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230119/ms-2.20jobqxlnoqo.webp",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"压测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压测"}},[s._v("#")]),s._v(" 压测")]),s._v(" "),a("p",[s._v("由于我们一开始无法确定 docker 的瓶颈、存储组件的瓶颈等。所以我们的压测思路一般是：")]),s._v(" "),a("p",[s._v("（1）找到单实例瓶颈")]),s._v(" "),a("p",[s._v("（2）找到 MySQL 一主的写瓶颈、读瓶颈")]),s._v(" "),a("p",[s._v("（3）找到 Redis 单分片写瓶颈、读瓶颈")]),s._v(" "),a("p",[s._v("得到了上述数据后，我们就可以粗略估算所需要的资源数，进行服务整体的压测了。")]),s._v(" "),a("p",[s._v("压测资源也很重要，提前申请到足量的压测资源，才能合理制定压测计划。\n压测过程中，要注意服务和资源的监控，对不符合预期的部分要深入思考，优化代码。\n适时记录压测数据，才能更好的复盘。")]),s._v(" "),a("p",[s._v("实际的使用资源，一般是压测数据的 1.5 倍，我们需要保证线上有部分资源冗余以应对突发的流量增长。")]),s._v(" "),a("h2",{attrs:{id:"服务治理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务治理"}},[s._v("#")]),s._v(" 服务治理")]),s._v(" "),a("p",[s._v("系统开发完成后，还需要通过一系列操作保障系统的可靠运行。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("超时设置。")]),s._v(" "),a("p",[s._v("秒杀系统是一个 RPC 服务，因此我们需要设置合理的 RPC 超时时间，保证系统不会因为上游系统的故障而被拖垮。例如抢购接口，我们内部执行时间不超过 100ms，因此接口超时我们可以设置为 500ms，如果有异常请求，在 500ms 后，就会被拒绝，从而保障我们服务稳定的运行。")])]),s._v(" "),a("li",[a("p",[s._v("监控与报警。")]),s._v(" "),a("p",[s._v("对于一些核心接口的监控、稳定性、重要数据，以及系统 CPU、内存等的监控，我们会在 Grafana 上建立对应的可视化图表，在春节活动期间，实时观测 Grafana 仪表盘，以保证能够最快观测到系统异常。同时，对于一些异常情况，我们还有完善的报警机制，从而能够第一时间感知到系统的异常。")])]),s._v(" "),a("li",[a("p",[s._v("资源隔离。")]),s._v(" "),a("p",[s._v("因为我们服务都是部署在 docker 集群中的，因此为了保证服务的高可用，服务部署的集群资源尽量分布在不同的物理区域上，以避免由集群导致的服务不可用。")])])]),s._v(" "),a("h2",{attrs:{id:"库存实例深入分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#库存实例深入分析"}},[s._v("#")]),s._v(" 库存实例深入分析")]),s._v(" "),a("p",[s._v("在实际业务中，我们可以使用类似的 sql 来实现库存的扣减")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" db_commodity "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过 Mysql 天然的保证数据的可靠性，有了数据库的兜底，也就不会出现超卖的情况。")]),s._v(" "),a("p",[s._v("但是由于单机的 Mysql 只能承载 4000 的 QPS，所以要对数据库进行水平的拆分，让商品分散于不同的数据库中，对于库存量比较大的商品，可以通过拆库存的方式，防止大库存商品处于单个 Mysql 分片，导致某个商品在抢购的时候，压力集中在某个 Mysql 分片。")]),s._v(" "),a("p",[s._v("当商品库存为 0 的时候，用户仍会抢购商品，此时对 mysql 产生的查询就是无效访问， 故可以引入了 redis 用来过滤一些无效的请求，"),a("code",[s._v("扣减时，先去redis上扣减，如果成功再走mysql")]),s._v("，尽量让访问 Mysql 的流量都是有效流量。")]),s._v(" "),a("p",[s._v("这种场景会出现一个问题，当用户成功扣减了 redis 的库存，但是却没有成功发起 mysql 库存的扣减，就会发生"),a("code",[s._v("少卖")]),s._v("的情况，这时候可以在 redis 库存扣减到 0 的时候，发起一个 mysql 查询，对比真实的库存，并同步给 redis。")]),s._v(" "),a("p",[s._v("在流量比较小的时候，其实是不需要在 redis 上进行分片处理的，如果在流量比较大的情况，可以参照上面的分片思路对 redis 进行"),a("code",[s._v("分key")]),s._v("处理。")]),s._v(" "),a("p",[s._v("上诉情况其实已经可以很好处理并发，但应对突发的流量增长的能力还是有所欠缺，很容易被突发的流量打垮，导致 IO 处理不过来引发系统崩溃，可以引入 MQ，先把请求放入 "),a("code",[s._v("消息队列")]),s._v("，再根据 系统 IO 的处理能力，平滑的处理请求。")])])}),[],!1,null,null,null);a.default=e.exports}}]);
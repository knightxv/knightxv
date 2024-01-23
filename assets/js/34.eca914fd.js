(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{358:function(a,s,_){"use strict";_.r(s);var t=_(4),e=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"redis-持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-持久化"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#redis%E6%8C%81%E4%B9%85%E5%8C%96"}},[a._v("#")]),a._v(" Redis 持久化")]),a._v(" "),s("h2",{attrs:{id:"_1、总体介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、总体介绍"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_1%E3%80%81%E6%80%BB%E4%BD%93%E4%BB%8B%E7%BB%8D"}},[a._v("#")]),a._v(" 1、总体介绍")]),a._v(" "),s("ul",[s("li",[a._v("Redis 提供了 2 个不同形式的持久化方式。\n"),s("ul",[s("li",[a._v("RDB（Redis DataBase）")]),a._v(" "),s("li",[a._v("AOF（Append Of File）")])])])]),a._v(" "),s("h2",{attrs:{id:"_2、rdb-redis-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、rdb-redis-database"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_2%E3%80%81rdb-redis-database"}},[a._v("#")]),a._v(" 2、RDB（Redis DataBase）")]),a._v(" "),s("h3",{attrs:{id:"_1、rdb-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、rdb-是什么"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_1%E3%80%81rdb%E6%98%AF%E4%BB%80%E4%B9%88"}},[a._v("#")]),a._v(" 1、RDB 是什么")]),a._v(" "),s("ul",[s("li",[a._v("在指定的时间间隔内将内存中的数据集快照写入磁盘， 也就是行话讲的 Snapshot 快照，它恢复时是将快照文件直接读到内存里")])]),a._v(" "),s("h3",{attrs:{id:"_2、备份是如何执行的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、备份是如何执行的"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_2%E3%80%81%E5%A4%87%E4%BB%BD%E6%98%AF%E5%A6%82%E4%BD%95%E6%89%A7%E8%A1%8C%E7%9A%84"}},[a._v("#")]),a._v(" 2、备份是如何执行的")]),a._v(" "),s("p",[a._v("​ Redis 会单独创建（fork）一个子进程来进行持久化，会先将数据写入到 一个临时文件中，待持久化过程都结束了，再用这个临时文件替换上次持久化好的文件。 整个过程中，主进程是不进行任何 IO 操作的，这就确保了极高的性能 如果需要进行大规模数据的恢复，且对于数据恢复的完整性不是非常敏感，那 RDB 方式要比 AOF 方式更加的高效。"),s("strong",[a._v("RDB")]),a._v("的缺点是最后一次持久化后的数据可能丢失。")]),a._v(" "),s("h3",{attrs:{id:"_3、fork"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、fork"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_3%E3%80%81fork"}},[a._v("#")]),a._v(" 3、Fork")]),a._v(" "),s("ul",[s("li",[a._v("Fork 的作用是复制一个与当前进程一样的进程。新进程的所有数据（变量、环境变量、程序计数器等） 数值都和原进程一致，但是是一个全新的进程，并作为原进程的子进程")]),a._v(" "),s("li",[a._v("在 Linux 程序中，fork()会产生一个和父进程完全相同的子进程，但子进程在此后多会 exec 系统调用，出于效率考虑，Linux 中引入了“"),s("strong",[a._v("写时复制技术")]),a._v("”")]),a._v(" "),s("li",[s("strong",[a._v("一般情况父进程和子进程会共用同一段物理内存")]),a._v("，只有进程空间的各段的内容要发生变化时，才会将父进程的内容复制一份给子进程。")])]),a._v(" "),s("h3",{attrs:{id:"_4、rdb-持久化流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、rdb-持久化流程"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_4%E3%80%81rdb%E6%8C%81%E4%B9%85%E5%8C%96%E6%B5%81%E7%A8%8B"}},[a._v("#")]),a._v(" 4、RDB 持久化流程")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/ba5f939e589042aeb8d23bc3a2fb5d24.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_8,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),a._v(" "),s("h3",{attrs:{id:"_5、dump-rdb-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、dump-rdb-文件"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_5%E3%80%81dump-rdb%E6%96%87%E4%BB%B6"}},[a._v("#")]),a._v(" 5、dump.rdb 文件")]),a._v(" "),s("ul",[s("li",[a._v("在 redis.conf 中配置文件名称，默认为 dump.rdb")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("dbfilename dump.rdb\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_6、配置位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、配置位置"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_6%E3%80%81%E9%85%8D%E7%BD%AE%E4%BD%8D%E7%BD%AE"}},[a._v("#")]),a._v(" 6、配置位置")]),a._v(" "),s("p",[a._v("rdb 文件的保存路径，也可以修改。默认为 Redis 启动时命令行所在的目录下")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dir")]),a._v(" ./\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_7、如何触发-rdb-快照-保持策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、如何触发-rdb-快照-保持策略"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_7%E3%80%81%E5%A6%82%E4%BD%95%E8%A7%A6%E5%8F%91rdb%E5%BF%AB%E7%85%A7-%E4%BF%9D%E6%8C%81%E7%AD%96%E7%95%A5"}},[a._v("#")]),a._v(" 7、如何触发 RDB 快照；保持策略")]),a._v(" "),s("h4",{attrs:{id:"_1、配置文件中默认的快照配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、配置文件中默认的快照配置"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_1%E3%80%81%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E9%BB%98%E8%AE%A4%E7%9A%84%E5%BF%AB%E7%85%A7%E9%85%8D%E7%BD%AE"}},[a._v("#")]),a._v(" 1、配置文件中默认的快照配置")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unless specified otherwise, by default Redis will save the DB:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#   * After 3600 seconds (an hour) if at least 1 key changed")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#   * After 300 seconds (5 minutes) if at least 100 keys changed")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#   * After 60 seconds if at least 10000 keys changed")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# You can set these explicitly by uncommenting the three following lines.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# save 3600 1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# save 300 100")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# save 60 10000")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h4",{attrs:{id:"_2、命令-save-vs-bgsave"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、命令-save-vs-bgsave"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_2%E3%80%81%E5%91%BD%E4%BB%A4save-vs-bgsave"}},[a._v("#")]),a._v(" 2、命令 save VS bgsave")]),a._v(" "),s("ul",[s("li",[a._v("save ：save 时只管保存，其它不管，全部阻塞。手动保存。不建议。")]),a._v(" "),s("li",[a._v("bgsave：Redis 会在后台异步进行快照操作， "),s("strong",[a._v("快照同时还可以响应客户端请求。")])]),a._v(" "),s("li",[a._v("可以通过 lastsave 命令获取最后一次成功执行快照的时间")])]),a._v(" "),s("h4",{attrs:{id:"_3、flushall-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、flushall-命令"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_3%E3%80%81flushall%E5%91%BD%E4%BB%A4"}},[a._v("#")]),a._v(" 3、flushall 命令")]),a._v(" "),s("ul",[s("li",[a._v("执行 flushall 命令，也会产生 dump.rdb 文件，但里面是空的，无意义")])]),a._v(" "),s("h4",{attrs:{id:"_4、save"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、save"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_4%E3%80%81save"}},[a._v("#")]),a._v(" 4、Save")]),a._v(" "),s("ul",[s("li",[a._v("格式：save 秒钟 写操作次数")]),a._v(" "),s("li",[a._v("RDB 是整个内存的压缩过的 Snapshot，RDB 的数据结构，可以配置复合的快照触发条件")]),a._v(" "),s("li",[a._v("默认是 1 分钟内改了 1 万次，或 5 分钟内改了 10 次，或 15 分钟内改了 1 次。")]),a._v(" "),s("li",[a._v("禁用\n"),s("ul",[s("li",[a._v("不设置 save 指令，或者给 save 传入空字符串")])])])]),a._v(" "),s("h4",{attrs:{id:"_5、stop-writes-on-bgsave-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、stop-writes-on-bgsave-error"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_5%E3%80%81stop-writes-on-bgsave-error"}},[a._v("#")]),a._v(" 5、stop-writes-on-bgsave-error")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("stop-writes-on-bgsave-error "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yes")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("当 Redis 无法写入磁盘的话，直接关掉 Redis 的写操作。推荐 yes.")])]),a._v(" "),s("h4",{attrs:{id:"_6、rdbcompression-压缩文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、rdbcompression-压缩文件"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_6%E3%80%81rdbcompression-%E5%8E%8B%E7%BC%A9%E6%96%87%E4%BB%B6"}},[a._v("#")]),a._v(" 6、rdbcompression 压缩文件")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("rdbcompression "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yes")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("对于存储到磁盘中的快照，可以设置是否进行压缩存储。如果是的话，redis 会采用 LZF 算法进行压缩。")]),a._v(" "),s("li",[a._v("如果你不想消耗 CPU 来进行压缩的话，可以设置为关闭此功能。推荐 yes.")])]),a._v(" "),s("h4",{attrs:{id:"_7、rdbchecksum-检查完整性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、rdbchecksum-检查完整性"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_7%E3%80%81rdbchecksum-%E6%A3%80%E6%9F%A5%E5%AE%8C%E6%95%B4%E6%80%A7"}},[a._v("#")]),a._v(" 7、rdbchecksum 检查完整性")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("rdbchecksum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yes")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("在存储快照后，还可以让 redis 使用 CRC64 算法来进行数据校验，")]),a._v(" "),s("li",[a._v("但是这样做会增加大约 10%的性能消耗，如果希望获取到最大的性能提升，可以关闭此功能。推荐 yes.")])]),a._v(" "),s("h4",{attrs:{id:"_8、rdb-的备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、rdb-的备份"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_8%E3%80%81rdb%E7%9A%84%E5%A4%87%E4%BB%BD"}},[a._v("#")]),a._v(" 8、rdb 的备份")]),a._v(" "),s("ul",[s("li",[a._v("先通过 config get dir 查询 rdb 文件的目录")]),a._v(" "),s("li",[a._v("将*.rdb 的文件拷贝到别的地方")]),a._v(" "),s("li",[a._v("rdb 的恢复\n"),s("ul",[s("li",[a._v("关闭 Redis")]),a._v(" "),s("li",[a._v("先把备份的文件拷贝到工作目录下 cp dump2.rdb dump.rdb")]),a._v(" "),s("li",[a._v("启动 Redis, 备份数据会直接加载")])])])]),a._v(" "),s("h3",{attrs:{id:"_8、优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、优势"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_8%E3%80%81%E4%BC%98%E5%8A%BF"}},[a._v("#")]),a._v(" 8、优势")]),a._v(" "),s("ul",[s("li",[a._v("适合大规模的数据恢复")]),a._v(" "),s("li",[a._v("对数据完整性和一致性要求不高更适合使用")]),a._v(" "),s("li",[a._v("节省磁盘空间")]),a._v(" "),s("li",[a._v("恢复速度快")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/533a43123fdb404ab817dfbd01b447f6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_11,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),a._v(" "),s("h3",{attrs:{id:"_9、劣势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、劣势"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_9%E3%80%81%E5%8A%A3%E5%8A%BF"}},[a._v("#")]),a._v(" 9、劣势")]),a._v(" "),s("ul",[s("li",[a._v("Fork 的时候，内存中的数据被克隆了一份，大致 2 倍的膨胀性需要考虑")]),a._v(" "),s("li",[a._v("虽然 Redis 在 fork 时使用了"),s("strong",[a._v("写时拷贝技术")]),a._v(",但是如果数据庞大时还是比较消耗性能。")]),a._v(" "),s("li",[a._v("在备份周期在一定间隔时间做一次备份，所以如果 Redis 意外 down 掉的话，就会丢失最后一次快照后的所有修改。")])]),a._v(" "),s("h3",{attrs:{id:"_10、如何停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、如何停止"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_10%E3%80%81%E5%A6%82%E4%BD%95%E5%81%9C%E6%AD%A2"}},[a._v("#")]),a._v(" 10、如何停止")]),a._v(" "),s("ul",[s("li",[a._v('动态停止 RDB：redis-cli config set save ""#save 后给空值，表示禁用保存策略')])]),a._v(" "),s("h3",{attrs:{id:"_11、rdb-小总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11、rdb-小总结"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_11%E3%80%81rdb%E5%B0%8F%E6%80%BB%E7%BB%93"}},[a._v("#")]),a._v(" 11、RDB 小总结")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/9d73eb48c1a04135be465d219a171e9d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_12,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),a._v(" "),s("h2",{attrs:{id:"_3、aof-append-only-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、aof-append-only-file"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_3%E3%80%81aof-append-only-file"}},[a._v("#")]),a._v(" 3、AOF（Append Only File）")]),a._v(" "),s("h3",{attrs:{id:"_1、aof-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、aof-是什么"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_1%E3%80%81aof%E6%98%AF%E4%BB%80%E4%B9%88"}},[a._v("#")]),a._v(" 1、AOF 是什么")]),a._v(" "),s("p",[a._v("​ 以"),s("strong",[a._v("日志")]),a._v("的形式来记录每个写操作（增量保存），将 Redis 执行过的所有写指令记录下来("),s("strong",[a._v("读操作不记录")]),a._v(")， "),s("strong",[a._v("只许追加文件但不可以改写文件")]),a._v("，redis 启动之初会读取该文件重新构建数据，换言之，redis 重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作")]),a._v(" "),s("h3",{attrs:{id:"_2、aof-持久化流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、aof-持久化流程"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_2%E3%80%81aof%E6%8C%81%E4%B9%85%E5%8C%96%E6%B5%81%E7%A8%8B"}},[a._v("#")]),a._v(" 2、AOF 持久化流程")]),a._v(" "),s("ul",[s("li",[a._v("客户端的请求写命令会被 append 追加到 AOF 缓冲区内；")]),a._v(" "),s("li",[a._v("AOF 缓冲区根据 AOF 持久化策略[always,everysec,no]将操作 sync 同步到磁盘的 AOF 文件中；")]),a._v(" "),s("li",[a._v("AOF 文件大小超过重写策略或手动重写时，会对 AOF 文件 rewrite 重写，压缩 AOF 文件容量；")]),a._v(" "),s("li",[a._v("Redis 服务重启时，会重新 load 加载 AOF 文件中的写操作达到数据恢复的目的；")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/830242f4a20541f9a4a2d37185e861e2.png",alt:"在这里插入图片描述"}})]),a._v(" "),s("h3",{attrs:{id:"_3、aof-默认不开启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、aof-默认不开启"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_3%E3%80%81aof%E9%BB%98%E8%AE%A4%E4%B8%8D%E5%BC%80%E5%90%AF"}},[a._v("#")]),a._v(" 3、AOF 默认不开启")]),a._v(" "),s("p",[a._v("可以在 redis.conf 中配置文件名称，默认为 appendonly.aof")]),a._v(" "),s("p",[a._v("AOF 文件的保存路径，同 RDB 的路径一致。")]),a._v(" "),s("h3",{attrs:{id:"_4、aof-和-rdb-同时开启-redis-听谁的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、aof-和-rdb-同时开启-redis-听谁的"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_4%E3%80%81aof%E5%92%8Crdb%E5%90%8C%E6%97%B6%E5%BC%80%E5%90%AF-redis%E5%90%AC%E8%B0%81%E7%9A%84"}},[a._v("#")]),a._v(" 4、AOF 和 RDB 同时开启，redis 听谁的？")]),a._v(" "),s("p",[a._v("AOF 和 RDB 同时开启，系统默认取 AOF 的数据（数据丢失概率小很多）")]),a._v(" "),s("h3",{attrs:{id:"_5、aof-启动、修复、恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、aof-启动、修复、恢复"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_5%E3%80%81aof%E5%90%AF%E5%8A%A8%E3%80%81%E4%BF%AE%E5%A4%8D%E3%80%81%E6%81%A2%E5%A4%8D"}},[a._v("#")]),a._v(" 5、AOF 启动、修复、恢复")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("AOF 的备份机制和性能虽然和 RDB 不同, 但是备份和恢复的操作同 RDB 一样，都是拷贝备份文件，需要恢复时再拷贝到 Redis 工作目录下，启动系统即加载。")])]),a._v(" "),s("li",[s("p",[a._v("正常恢复")]),a._v(" "),s("ul",[s("li",[a._v("修改默认的 appendonly no，改为 yes")]),a._v(" "),s("li",[a._v("将有数据的 aof 文件复制一份保存到对应目录(查看目录：config get dir)")]),a._v(" "),s("li",[a._v("恢复：重启 redis 然后重新加载")])])]),a._v(" "),s("li",[s("p",[a._v("异常恢复")]),a._v(" "),s("ul",[s("li",[a._v("修改默认的 appendonly no，改为 yes")]),a._v(" "),s("li",[a._v("如遇到 AOF 文件损坏，通过/usr/local/bin/redis-check-aof--fix appendonly.aof 进行恢复")]),a._v(" "),s("li",[a._v("备份被写坏的 AOF 文件")]),a._v(" "),s("li",[a._v("恢复：重启 redis，然后重新加载")])])])]),a._v(" "),s("h3",{attrs:{id:"_6、aof-同步频率设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、aof-同步频率设置"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_6%E3%80%81aof%E5%90%8C%E6%AD%A5%E9%A2%91%E7%8E%87%E8%AE%BE%E7%BD%AE"}},[a._v("#")]),a._v(" 6、AOF 同步频率设置")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("appendfsync always\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 始终同步，每次Redis的写入都会立刻记入日志；性能较差但数据完整性比较好")]),a._v("\n\nappendfsync everysec\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 每秒同步，每秒记入日志一次，如果宕机，本秒的数据可能丢失。")]),a._v("\n\nappendfsync no\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# redis不主动进行同步，把同步时机交给操作系统。")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h3",{attrs:{id:"_7、rewrite-压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、rewrite-压缩"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_7%E3%80%81rewrite%E5%8E%8B%E7%BC%A9"}},[a._v("#")]),a._v(" 7、Rewrite 压缩")]),a._v(" "),s("h4",{attrs:{id:"_1、是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、是什么"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_1%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88"}},[a._v("#")]),a._v(" 1、是什么")]),a._v(" "),s("p",[a._v("​ AOF 采用文件追加方式，文件会越来越大为避免出现此种情况，新增了重写机制, 当 AOF 文件的大小超过所设定的阈值时，Redis 就会启动 AOF 文件的内容压缩， 只保留可以恢复数据的最小指令集.可以使用命令 bgrewriteaof")]),a._v(" "),s("h4",{attrs:{id:"_2、重写原理-如何实现重写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、重写原理-如何实现重写"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_2%E3%80%81%E9%87%8D%E5%86%99%E5%8E%9F%E7%90%86-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E9%87%8D%E5%86%99"}},[a._v("#")]),a._v(" 2、重写原理，如何实现重写")]),a._v(" "),s("p",[a._v("​ AOF 文件持续增长而过大时，会 fork 出一条新进程来将文件重写(也是先写临时文件最后再 rename)，redis4.0 版本后的重写，是指上就是把 rdb 的快照，以二级制的形式附在新的 aof 头部，作为已有的历史数据，替换掉原来的流水账操作。")]),a._v(" "),s("ul",[s("li",[a._v("no-appendfsync-on-rewrite：")])]),a._v(" "),s("p",[a._v("​ 如果 no-appendfsync-on-rewrite=yes ,不写入 aof 文件只写入缓存，用户请求不会阻塞，但是在这段时间如果宕机会丢失这段时间的缓存数据。（降低数据安全性，提高性能）")]),a._v(" "),s("p",[a._v("​ 如果 no-appendfsync-on-rewrite=no, 还是会把数据往磁盘里刷，但是遇到重写操作，可能会发生阻塞。（数据安全，但是性能降低）")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("触发机制，何时重写")]),a._v(" "),s("ul",[s("li",[a._v("Redis 会记录上次重写时的 AOF 大小，默认配置是当 AOF 文件大小是上次 rewrite 后大小的一倍且文件大于 64M 时触发")]),a._v(" "),s("li",[a._v("重写虽然可以节约大量磁盘空间，减少恢复时间。但是每次重写还是有一定的负担的，因此设定 Redis 要满足一定条件才会进行重写。")]),a._v(" "),s("li",[a._v("auto-aof-rewrite-percentage：设置重写的基准值，文件达到 100%时开始重写（文件是原来重写后文件的 2 倍时触发）")]),a._v(" "),s("li",[a._v("auto-aof-rewrite-min-size：设置重写的基准值，最小文件 64MB。达到这个值开始重写。")])])]),a._v(" "),s("li",[s("p",[a._v("例如：文件达到 70MB 开始重写，降到 50MB，下次什么时候开始重写？100MB")]),a._v(" "),s("p",[a._v("系统载入时或者上次重写完毕时，Redis 会记录此时 AOF 大小，设为 base_size,")]),a._v(" "),s("p",[a._v("如果 Redis 的 AOF 当前大小>= base_size +base_size*100% (默认)且当前大小>=64mb(默认)的情况下，Redis 会对 AOF 进行重写。")])])]),a._v(" "),s("h4",{attrs:{id:"_3、重写流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、重写流程"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_3%E3%80%81%E9%87%8D%E5%86%99%E6%B5%81%E7%A8%8B"}},[a._v("#")]),a._v(" 3、重写流程")]),a._v(" "),s("ul",[s("li",[a._v("bgrewriteaof 触发重写，判断是否当前有 bgsave 或 bgrewriteaof 在运行，如果有，则等待该命令结束后再继续执行。")]),a._v(" "),s("li",[a._v("主进程 fork 出子进程执行重写操作，保证主进程不会阻塞。")]),a._v(" "),s("li",[a._v("子进程遍历 redis 内存中数据到临时文件，客户端的写请求同时写入 aof_buf 缓冲区和 aof_rewrite_buf 重写缓冲区保证原 AOF 文件完整以及新 AOF 文件生成期间的新的数据修改动作不会丢失。")]),a._v(" "),s("li",[a._v("子进程写完新的 AOF 文件后，向主进程发信号，父进程更新统计信息。")]),a._v(" "),s("li",[a._v("主进程把 aof_rewrite_buf 中的数据写入到新的 AOF 文件。")]),a._v(" "),s("li",[a._v("使用新的 AOF 文件覆盖旧的 AOF 文件，完成 AOF 重写。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/f1b8f17077254570b8a08f0b10dc992c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_9,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),a._v(" "),s("h3",{attrs:{id:"_8、优势-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、优势-2"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_8%E3%80%81%E4%BC%98%E5%8A%BF-2"}},[a._v("#")]),a._v(" 8、优势")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/89c2c8be91ca42f6b208f1b97ceb4579.png",alt:"在这里插入图片描述"}})]),a._v(" "),s("ul",[s("li",[a._v("备份机制更稳健，丢失数据概率更低。")]),a._v(" "),s("li",[a._v("可读的日志文本，通过操作 AOF 稳健，可以处理误操作。")])]),a._v(" "),s("h3",{attrs:{id:"_9、劣势-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、劣势-2"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_9%E3%80%81%E5%8A%A3%E5%8A%BF-2"}},[a._v("#")]),a._v(" 9、劣势")]),a._v(" "),s("ul",[s("li",[a._v("比起 RDB 占用更多的磁盘空间。")]),a._v(" "),s("li",[a._v("恢复备份速度要慢。")]),a._v(" "),s("li",[a._v("每次读写都同步的话，有一定的性能压力。")])]),a._v(" "),s("h3",{attrs:{id:"_10、aof-小总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、aof-小总结"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_10%E3%80%81aof%E5%B0%8F%E6%80%BB%E7%BB%93"}},[a._v("#")]),a._v(" 10、AOF 小总结")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/b5f6c3f615b443ec9a0bafc41016499b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_12,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),a._v(" "),s("h2",{attrs:{id:"_4、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、总结"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_4%E3%80%81%E6%80%BB%E7%BB%93"}},[a._v("#")]),a._v(" 4、总结")]),a._v(" "),s("h3",{attrs:{id:"_1、用哪个好"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、用哪个好"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_1%E3%80%81%E7%94%A8%E5%93%AA%E4%B8%AA%E5%A5%BD"}},[a._v("#")]),a._v(" 1、用哪个好")]),a._v(" "),s("ul",[s("li",[a._v("官方推荐两个都启用。")]),a._v(" "),s("li",[a._v("如果对数据不敏感，可以选单独用 RDB。")]),a._v(" "),s("li",[a._v("不建议单独用 AOF，因为可能会出现 Bug。")]),a._v(" "),s("li",[a._v("如果只是做纯内存缓存，可以都不用。")])]),a._v(" "),s("h3",{attrs:{id:"_2、官网建议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、官网建议"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"#_2%E3%80%81%E5%AE%98%E7%BD%91%E5%BB%BA%E8%AE%AE"}},[a._v("#")]),a._v(" 2、官网建议")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/915613bfdb324ae8b4da24e82c63df61.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_12,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),a._v(" "),s("ul",[s("li",[a._v("RDB 持久化方式能够在指定的时间间隔能对你的数据进行快照存储")]),a._v(" "),s("li",[a._v("AOF 持久化方式记录每次对服务器写的操作,当服务器重启的时候会重新执行这些命令来恢复原始的数据,AOF 命令以 redis 协议追加保存每次写的操作到文件末尾.")]),a._v(" "),s("li",[a._v("Redis 还能对 AOF 文件进行后台重写,使得 AOF 文件的体积不至于过大")]),a._v(" "),s("li",[a._v("只做缓存：如果你只希望你的数据在服务器运行的时候存在,你也可以不使用任何持久化方式.")]),a._v(" "),s("li",[a._v("同时开启两种持久化方式")]),a._v(" "),s("li",[a._v("在这种情况下,当 redis 重启的时候会优先载入 AOF 文件来恢复原始的数据, 因为在通常情况下 AOF 文件保存的数据集要比 RDB 文件保存的数据集要完整.")]),a._v(" "),s("li",[a._v("RDB 的数据不实时，同时使用两者时服务器重启也只会找 AOF 文件。那要不要只使用 AOF 呢？")]),a._v(" "),s("li",[a._v("建议不要，因为 RDB 更适合用于备份数据库(AOF 在不断变化不好备份)， 快速重启，而且不会有 AOF 可能潜在的 bug，留着作为一个万一的手段。")]),a._v(" "),s("li",[a._v("性能建议")]),a._v(" "),s("li",[a._v("因为 RDB 文件只用作后备用途，建议只在 Slave 上持久化 RDB 文件，而且只要 15 分钟备份一次就够了，只保留 save 900 1 这条规则。")]),a._v(" "),s("li",[a._v("如果使用 AOF，好处是在最恶劣情况下也只会丢失不超过两秒数据，启动脚本较简单只 load 自己的 AOF 文件就可以了。")]),a._v(" "),s("li",[a._v("代价,一是带来了持续的 IO，二是 AOF rewrite 的最后将 rewrite 过程中产生的新数据写到新文件造成的阻塞几乎是不可避免的。")]),a._v(" "),s("li",[a._v("只要硬盘许可，应该尽量减少 AOF rewrite 的频率，AOF 重写的基础大小默认值 64M 太小了，可以设到 5G 以上。")]),a._v(" "),s("li",[a._v("默认超过原大小 100%大小时重写可以改到适当的数值。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
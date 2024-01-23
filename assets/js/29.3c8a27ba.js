(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{354:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis-常见数据类型和命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-常见数据类型和命令"}},[s._v("#")]),s._v(" Redis 常见数据类型和命令")]),s._v(" "),a("h2",{attrs:{id:"常见命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见命令"}},[s._v("#")]),s._v(" 常见命令")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("keys *")]),s._v(" "),a("th",[s._v("查看当前库所有 key (匹配：keys *1)")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("exists key")]),s._v(" "),a("td",[s._v("判断某个 key 是否存在")])]),s._v(" "),a("tr",[a("td",[s._v("type key")]),s._v(" "),a("td",[s._v("查看你的 key 是什么类型")])]),s._v(" "),a("tr",[a("td",[s._v("del key")]),s._v(" "),a("td",[s._v("删除指定的 key 数据")])]),s._v(" "),a("tr",[a("td",[s._v("unlink key")]),s._v(" "),a("td",[s._v("根据 value 选择非阻塞删除,仅将 keys 从 keyspace 元数据中删除，真正的删除会在后续异步操作。")])]),s._v(" "),a("tr",[a("td",[s._v("expire key 10")]),s._v(" "),a("td",[s._v("10 秒钟：为给定的 key 设置过期时间")])]),s._v(" "),a("tr",[a("td",[s._v("ttl key")]),s._v(" "),a("td",[s._v("查看还有多少秒过期，-1 表示永不过期，-2 表示已过期")])]),s._v(" "),a("tr",[a("td",[s._v("select")]),s._v(" "),a("td",[s._v("命令切换数据库")])]),s._v(" "),a("tr",[a("td",[s._v("dbsize")]),s._v(" "),a("td",[s._v("查看当前数据库的 key 的数量")])]),s._v(" "),a("tr",[a("td",[s._v("flushdb")]),s._v(" "),a("td",[s._v("清空当前库")])]),s._v(" "),a("tr",[a("td",[s._v("flushall")]),s._v(" "),a("td",[s._v("通杀全部库")])])])]),s._v(" "),a("h2",{attrs:{id:"常见数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见数据结构"}},[s._v("#")]),s._v(" "),a("strong",[s._v("常见数据结构")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"string字符串类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string字符串类型"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"string"}},[s._v("#")]),a("code",[s._v("String字符串类型")])]),s._v(" "),a("h3",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("ul",[a("li",[s._v("String 是 Redis 最基本的类型，你可以理解成与 Memcached 一模一样的类型，一个 key 对应一个 value.")]),s._v(" "),a("li",[s._v("String 类型是二进制安全的。意味着 Redis 的 string 可以包含任何数据。比如 jpg 图片或者序列化的对象.")]),s._v(" "),a("li",[s._v("String 类型是 Redis 最基本的数据类型，一个 Redis 中字符串 value 最多可以是 512M.")])]),s._v(" "),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nget "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置键值的同时，设置过期时间，单位秒")]),s._v("\nsetex  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("过期时间"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以新换旧，设置了新值同时获得旧值。")]),s._v("\ngetset "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量设置/获取多个键值")]),s._v("\nMSET key value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nMGET key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"数值增减"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值增减"}},[s._v("#")]),s._v(" 数值增减")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递增数字")]),s._v("\nINCR "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加指定的整数")]),s._v("\nINCRBY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("increment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递减数值")]),s._v("\nDECR "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 减少指定的整数")]),s._v("\nDECRBY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("decrement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"获取字符串长度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取字符串长度"}},[s._v("#")]),s._v(" 获取字符串长度")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("STRLEN key\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"设置过期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置过期"}},[s._v("#")]),s._v(" 设置过期")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("setnx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("EX seconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PX milliseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("NX"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("XX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("EX: key 在多少秒之后过期")]),s._v(" "),a("li",[s._v("PX: key 在多少毫秒之后过期")]),s._v(" "),a("li",[s._v("NX: 当 key 不存在的时候，才创建 key,效果等同于 setnx")]),s._v(" "),a("li",[s._v("XX: 当 key 不存在的时候，覆盖 key")])]),s._v(" "),a("h3",{attrs:{id:"底层数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#底层数据结构"}},[s._v("#")]),s._v(" 底层数据结构")]),s._v(" "),a("p",[s._v("​ String 的数据结构为简单动态字符串(Simple Dynamic String,缩写 SDS)。是可以修改的字符串，内部结构实现上类似于 Java 的 ArrayList，采用预分配冗余空间的方式来减少内存的频繁分配.")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/d1cb1d8b20a04efabeeb4d011eb4a176.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("​ 如图中所示，内部为当前字符串实际分配的空间 capacity 一般要高于实际字符串长度 len。当字符串长度小于 1M 时，扩容都是加倍现有的空间，如果超过 1M，扩容时一次只会多扩 1M 的空间。需要注意的是字符串最大长度为 512M。")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"hash"}},[s._v("#")]),a("code",[s._v("hash")])]),s._v(" "),a("h3",{attrs:{id:"简介-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介-2"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("ul",[a("li",[s._v("Redis hash 是一个键值对集合。 Map<String,Map<Object,Object>>")]),s._v(" "),a("li",[s._v("Redis hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象。")]),s._v(" "),a("li",[s._v("用户 ID 为查找的 key，存储的 value 用户对象包含姓名，年龄，生日等信息，如果用普通的 key/value 结构来存储")])]),s._v(" "),a("h3",{attrs:{id:"常用命令-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-2"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一次设置一个字段值")]),s._v("\nHSET key field value\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一次获取一个字段值")]),s._v("\nHGET key field\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一次设置多个字段值")]),s._v("\nHMSET key field value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("field value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一次获取多个字段值")]),s._v("\nHMGET key field "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("field "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取所有字段值")]),s._v("\nhgetall key\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取某个key内的全部数量")]),s._v("\nhlen\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除一个key")]),s._v("\nhdel\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# key中某字段是否存在")]),s._v("\nhexists "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("field"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为哈希表 key 中的域 field 的值加上增量 1")]),s._v("\nhincrby "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("field"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("increment"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将哈希表key中的域field的值设置为value，当且仅当域 field 不存在")]),s._v("\nhsetnx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("field"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[s._v("#")]),s._v(" 数据结构")]),s._v(" "),a("p",[s._v("​ Hash 类型对应的数据结构是两种：ziplist（压缩列表），hashtable（哈希表）。当 field-value 长度较短且个数较少时，使用 ziplist，否则使用 hashtable。")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"list"}},[s._v("#")]),a("code",[s._v("list")])]),s._v(" "),a("h3",{attrs:{id:"简介-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介-3"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("ul",[a("li",[s._v("Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）。")]),s._v(" "),a("li",[s._v("它的底层实际是个双向链表，对两端的操作性能很高，通过索引下标的操作中间的节点性能会较差。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/b3c9a07ceacd48b588e8659e2105d827.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("​ 一个双端链表的结构，容量是 2 的 32 次方减 1 个元素，大概 40 多亿，主要功能有 push/pop 等，一般用在栈、队列、消息队列等场景。")]),s._v(" "),a("h3",{attrs:{id:"向列表左边添加、获取元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向列表左边添加、获取元素"}},[s._v("#")]),s._v(" 向列表左边添加、获取元素")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("LPUSH "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nLPOP "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从左边删除n个value(从左到右)")]),s._v("\nlrem "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将列表key下标为index的值替换成value")]),s._v("\nlset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"向列表右边添加、获取元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向列表右边添加、获取元素"}},[s._v("#")]),s._v(" 向列表右边添加、获取元素")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("RPUSH "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nRPOP "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列表右边吐出一个值，插到<key2>列表左边")]),s._v("\nrpoplpush  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在<value>的后面插入<newvalue>插入值")]),s._v("\nlinsert "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  before "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("newvalue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"查看列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看列表"}},[s._v("#")]),s._v(" 查看列表")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("LRANGE key start stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"获取列表中元素的个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取列表中元素的个数"}},[s._v("#")]),s._v(" 获取列表中元素的个数")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("LLEN key\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"数据结构-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构-2"}},[s._v("#")]),s._v(" 数据结构")]),s._v(" "),a("ul",[a("li",[s._v("List 的数据结构为快速链表 quickList。")]),s._v(" "),a("li",[s._v("首先在列表元素较少的情况下会使用一块连续的内存存储，这个结构是 ziplist，也即是压缩列表。")]),s._v(" "),a("li",[s._v("它将所有的元素紧挨着一起存储，分配的是一块连续的内存。")]),s._v(" "),a("li",[s._v("当数据量比较多的时候才会改成 quicklist。")]),s._v(" "),a("li",[s._v("因为普通的链表需要的附加指针空间太大，会比较浪费空间。比如这个列表里存的只是 int 类型的数据，结构上还需要两个额外的指针 prev 和 next。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/920305a61a354c1a92e78d75ed5c6aa8.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("ul",[a("li",[s._v("Redis 将链表和 ziplist 结合起来组成了 quicklist。也就是将多个 ziplist 使用双向指针串起来使用。这样既满足了快速的插入删除性能，又不会出现太大的空间冗余。")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"set"}},[s._v("#")]),a("code",[s._v("set")])]),s._v(" "),a("h3",{attrs:{id:"简介-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介-4"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("ul",[a("li",[s._v("Redis set 对外提供的功能与 list 类似是一个列表的功能，特殊之处在于 set 是可以"),a("strong",[s._v("自动排重")]),s._v("的，当你需要存储一个列表数据，又不希望出现重复数据时，set 是一个很好的选择，并且 set 提供了判断某个成员是否在一个 set 集合内的重要接口，这个也是 list 所不能提供的。")]),s._v(" "),a("li",[s._v("Redis 的 Set 是 string 类型的无序集合。它底层其实是一个 value 为 null 的 hash 表，所以添加，删除，查找的复杂度都是 O(1)。")]),s._v(" "),a("li",[s._v("一个算法，随着数据的增加，执行时间的长短，如果是 O(1)，数据增加，查找数据的时间不变")])]),s._v(" "),a("h3",{attrs:{id:"常用命令-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-3"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加元素")]),s._v("\nSADD key member "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("member "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除元素")]),s._v("\nSREM key member "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("member "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 遍历集合中的所有元素")]),s._v("\nSMEMBERS key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断元素是否在集合中")]),s._v("\nSISMEMBER key member\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取集合中的元素总数")]),s._v("\nSCARD key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从集合中随机弹出一个元素，元素不删除")]),s._v("\nSRANDMEMBER key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("数字"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从集合中随机弹出一个元素，出一个删一个")]),s._v("\nSPOP key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("数字"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h4",{attrs:{id:"集合的差集运算-a-b"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合的差集运算-a-b"}},[s._v("#")]),s._v(" 集合的差集运算 A-B")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("属于A但不属于B的元素构成的集合\nSDIFF key [key ...]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"集合的交集运算-a-∩-b"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合的交集运算-a-∩-b"}},[s._v("#")]),s._v(" 集合的交集运算 A ∩ B")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("属于A同时也属于B的共同拥有的元素构成的集合\nSINTER key [key ...]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"集合的并集运算-a-∪-b"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合的并集运算-a-∪-b"}},[s._v("#")]),s._v(" 集合的并集运算 A ∪ B")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("属于A或者属于B的元素合并后的集合\nSUNION key [key ...]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"数据结构-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构-3"}},[s._v("#")]),s._v(" 数据结构")]),s._v(" "),a("ul",[a("li",[s._v("Set 数据结构是 dict 字典，字典是用哈希表实现的。")]),s._v(" "),a("li",[s._v("Java 中 HashSet 的内部实现使用的是 HashMap，只不过所有的 value 都指向同一个对象。Redis 的 set 结构也是一样，它的内部也使用 hash 结构，所有的 value 都指向同一个内部值。")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"zset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zset"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"Zset"}},[s._v("#")]),a("code",[s._v("Zset")])]),s._v(" "),a("h3",{attrs:{id:"简介-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介-5"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("ul",[a("li",[s._v("Redis 有序集合 zset 与普通集合 set 非常相似，是一个没有重复元素的字符串集合。")]),s._v(" "),a("li",[s._v("不同之处是有序集合的每个成员都关联了一个"),a("strong",[s._v("评分（score）")]),s._v(",这个评分（score）被用来按照从最低分到最高分的方式排序集合中的成员。集合的成员是唯一的，但是评分可以是重复了 。")]),s._v(" "),a("li",[s._v("因为元素是有序的, 所以你也可以很快的根据评分（score）或者次序（position）来获取一个范围的元素。")]),s._v(" "),a("li",[s._v("访问有序集合的中间元素也是非常快的,因此你能够使用有序集合作为一个没有重复成员的智能列表。")])]),s._v(" "),a("h3",{attrs:{id:"常用命令-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-4"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加元素")]),s._v("\nZADD key score member "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("score member "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照元素分数从小到大的顺序 返回索引从start到stop之间的所有元素")]),s._v("\nZRANGE key start stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WITHSCORES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取元素的分数")]),s._v("\nZSCORE key member\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除元素")]),s._v("\nZREM key member "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("member "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取指定分数范围的元素")]),s._v("\nZRANGEBYSCORE key min max "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WITHSCORES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("LIMIT offset count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加某个元素的分数")]),s._v("\nZINCRBY key increment member\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取集合中元素的数量")]),s._v("\nZCARD key\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获得指定分数范围内的元素个数")]),s._v("\nZCOUNT key min max\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照排名范围删除元素")]),s._v("\nZREMRANGEBYRANK key start stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取元素的排名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从小到大")]),s._v("\nZRANK key member\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从大到小")]),s._v("\nZREVRANK key member\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h3",{attrs:{id:"数据结构-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构-4"}},[s._v("#")]),s._v(" 数据结构")]),s._v(" "),a("p",[s._v("​ SortedSet(zset)是 Redis 提供的一个非常特别的数据结构，一方面它等价于 Java 的数据结构 Map<String, Double>，可以给每一个元素 value 赋予一个权重 score，另一方面它又类似于 TreeSet，内部的元素会按照权重 score 进行排序，可以得到每个元素的名次，还可以通过 score 的范围来获取元素的列表。")]),s._v(" "),a("ul",[a("li",[s._v("zset 底层使用了两个数据结构")]),s._v(" "),a("li",[s._v("hash，hash 的作用就是关联元素 value 和权重 score，保障元素 value 的唯一性，可以通过元素 value 找到相应的 score 值。")]),s._v(" "),a("li",[s._v("跳跃表，跳跃表的目的在于给元素 value 排序，根据 score 的范围获取元素列表。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
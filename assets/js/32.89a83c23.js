(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{357:function(_,t,v){"use strict";v.r(t);var a=v(4),s=Object(a.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"布隆过滤器-bloomfilter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#布隆过滤器-bloomfilter"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"#%E5%B8%83%E9%9A%86%E8%BF%87%E6%BB%A4%E5%99%A8bloomfilter"}},[_._v("#")]),_._v(" 布隆过滤器 BloomFilter")]),_._v(" "),t("h2",{attrs:{id:"_1、案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、案例"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"#_1%E3%80%81%E6%A1%88%E4%BE%8B"}},[_._v("#")]),_._v(" 1、案例")]),_._v(" "),t("p",[_._v("现有 50 亿个电话号码，现有 10 万个电话号码，如何要快速准确的判断这些电话号码是否已经存在？")]),_._v(" "),t("p",[_._v("1、通过数据库查询-------实现快速有点难。")]),_._v(" "),t("p",[_._v("2、数据预放到内存集合中：50 亿*8 字节大约 40G，内存太大了。")]),_._v(" "),t("h2",{attrs:{id:"_2、介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、介绍"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"#_2%E3%80%81%E4%BB%8B%E7%BB%8D"}},[_._v("#")]),_._v(" 2、介绍")]),_._v(" "),t("ul",[t("li",[_._v("由一个初值都为零的 bit 数组和多个哈希函数构成，用来快速判断某个数据是否存在")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/71bb0892221e4c37963a1781988a5e53.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_16,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("ul",[t("li",[_._v("本质就是判断具体数据存不存在一个大的集合中")]),_._v(" "),t("li",[_._v("布隆过滤器是一种类似 set 的数据结构，只是统计结果不太准确")])]),_._v(" "),t("h2",{attrs:{id:"_3、特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、特点"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"#_3%E3%80%81%E7%89%B9%E7%82%B9"}},[_._v("#")]),_._v(" 3、特点")]),_._v(" "),t("ul",[t("li",[_._v("高效地插入和查询，占用空间少，返回的结果是不确定性的。")]),_._v(" "),t("li",[_._v("一个元素如果判断结果为存在的时候元素不一定存在，但是判断结果为不存在的时候则一定不存在。")]),_._v(" "),t("li",[_._v("布隆过滤器可以添加元素，但是不能删除元素。因为删掉元素会导致误判率增加。")]),_._v(" "),t("li",[_._v("误判只会发生在过滤器没有添加过的元素，对于添加过的元素不会发生误判。")])]),_._v(" "),t("h2",{attrs:{id:"_4、使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用场景"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"#_4%E3%80%81%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF"}},[_._v("#")]),_._v(" 4、使用场景")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("解决缓存穿透的问题")]),_._v(" "),t("p",[_._v("缓存穿透是什么")]),_._v(" "),t("p",[_._v("一般情况下，先查询缓存 redis 是否有该条数据，缓存中没有时，再查询数据库。")]),_._v(" "),t("p",[_._v("当数据库也不存在该条数据时，每次查询都要访问数据库，这就是缓存穿透。")]),_._v(" "),t("p",[_._v("缓存透带来的问题是，当有大量请求查询数据库不存在的数据时，就会给数据库带来压力，甚至会拖垮数据库。")]),_._v(" "),t("p",[_._v("可以使用布隆过滤器解决缓存穿透的问题，把已存在数据的 key 存在布隆过滤器中，相当于 redis 前面挡着一个布隆过滤器。")]),_._v(" "),t("p",[_._v("当有新的请求时，先到布隆过滤器中查询是否存在：")]),_._v(" "),t("p",[_._v("如果布隆过滤器中不存在该条数据则直接返回；")]),_._v(" "),t("p",[_._v("如果布隆过滤器中已存在，才去查询缓存 redis，如果 redis 里没查询到则穿透到 Mysql 数据库")])]),_._v(" "),t("li",[t("p",[_._v("黑名单校验")]),_._v(" "),t("p",[_._v("发现存在黑名单中的，就执行特定操作。比如：识别垃圾邮件，只要是邮箱在黑名单中的邮件，就识别为垃圾邮件。")]),_._v(" "),t("p",[_._v("假设黑名单的数量是数以亿计的，存放起来就是非常耗费存储空间的，布隆过滤器则是一个较好的解决方案。")]),_._v(" "),t("p",[_._v("把所有黑名单都放在布隆过滤器中，在收到邮件时，判断邮件地址是否在布隆过滤器中即可。")])])]),_._v(" "),t("h2",{attrs:{id:"_5、原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、原理"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"#_5%E3%80%81%E5%8E%9F%E7%90%86"}},[_._v("#")]),_._v(" 5、原理")]),_._v(" "),t("p",[_._v("哈希函数的概念是：将任意大小的输入数据转换成特定大小的输出数据的函数，转换后的数据称为哈希值或哈希编码，也叫散列值")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/9bc6ae358de040d0b388bdee1c036d38.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_15,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("如果两个散列值是不相同的（根据同一函数）那么这两个散列值的原始输入也是不相同的。")]),_._v(" "),t("p",[_._v("这个特性是散列函数具有确定性的结果，具有这种性质的散列函数称为单向散列函数。")]),_._v(" "),t("p",[_._v("散列函数的输入和输出不是唯一对应关系的，如果两个散列值相同，两个输入值很可能是相同的，但也可能不同，")]),_._v(" "),t("p",[_._v("这种情况称为“散列碰撞（collision）”。")]),_._v(" "),t("p",[_._v("用 hash 表存储大数据量时，空间效率还是很低，当只有一个 hash 函数时，还很容易发生哈希碰撞。")]),_._v(" "),t("h3",{attrs:{id:"_1、布隆过滤器实现原理和数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、布隆过滤器实现原理和数据结构"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"#_1%E3%80%81%E5%B8%83%E9%9A%86%E8%BF%87%E6%BB%A4%E5%99%A8%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E5%92%8C%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84"}},[_._v("#")]),_._v(" 1、布隆过滤器实现原理和数据结构")]),_._v(" "),t("p",[_._v("布隆过滤器原理")]),_._v(" "),t("p",[_._v("布隆过滤器(Bloom Filter) 是一种专门用来解决去重问题的高级数据结构。")]),_._v(" "),t("p",[_._v("实质就是一个大型位数组和几个不同的无偏 hash 函数(无偏表示分布均匀)。由一个初值都为零的 bit 数组和多个个哈希函数构成，用来快速判断某个数据是否存在。但是跟 HyperLogLog 一样，它也一样有那么一点点不精确，也存在一定的误判概率")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/7cfef311d6ba4187996ebdb0b972a7f0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_16,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("添加 key 时使用多个 hash 函数对 key 进行 hash 运算得到一个整数索引值，对位数组长度进行取模运算得到一个位置，")]),_._v(" "),t("p",[_._v("每个 hash 函数都会得到一个不同的位置，将这几个位置都置 1 就完成了 add 操作。")]),_._v(" "),t("p",[_._v("查询 key 时只要有其中一位是零就表示这个 key 不存在，但如果都是 1，则不一定存在对应的 key。")]),_._v(" "),t("p",[_._v("结论：")]),_._v(" "),t("p",[_._v("有，是可能有")]),_._v(" "),t("p",[_._v("无，是肯定无")]),_._v(" "),t("p",[_._v("当有变量被加入集合时，通过 N 个映射函数将这个变量映射成位图中的 N 个点，")]),_._v(" "),t("p",[_._v("把它们置为 1（假定有两个变量都通过 3 个映射函数）。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/80821329822c42d1b5b1a5008276ad87.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_16,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("查询某个变量的时候我们只要看看这些点是不是都是 1， 就可以大概率知道集合中有没有它了")]),_._v(" "),t("p",[_._v("如果这些点，有任何一个为零则被查询变量一定不在，")]),_._v(" "),t("p",[_._v("如果都是 1，则被查询变量很可能存在，")]),_._v(" "),t("p",[_._v("为什么说是可能存在，而不是一定存在呢？那是因为映射函数本身就是散列函数，散列函数是会有碰撞的。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/33b96b295c744ed2bb0b10db86c73896.png",alt:"在这里插入图片描述"}})]),_._v(" "),t("h3",{attrs:{id:"_2、3-步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、3-步骤"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"#_2%E3%80%813%E6%AD%A5%E9%AA%A4"}},[_._v("#")]),_._v(" 2、3 步骤")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/daa4e28fbe704f6f88c19c0d562636af.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}}),_._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/e20ca2a86b364eeaba2b93d00b2b19eb.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("向布隆过滤器查询某个 key 是否存在时，先把这个 key 通过相同的多个 hash 函数进行运算，查看对应的位置是否都为 1，")]),_._v(" "),t("p",[_._v("只要有一个位为 0，那么说明布隆过滤器中这个 key 不存在；")]),_._v(" "),t("p",[_._v("如果这几个位置全都是 1，那么说明极有可能存在；")]),_._v(" "),t("p",[_._v("因为这些位置的 1 可能是因为其他的 key 存在导致的，也就是前面说过的 hash 冲突。。。。。")]),_._v(" "),t("p",[_._v("就比如我们在 add 了字符串 wmyskxz 数据之后，很明显下面 1/3/5 这几个位置的 1 是因为第一次添加的 wmyskxz 而导致的；")]),_._v(" "),t("p",[_._v("此时我们查询一个没添加过的不存在的字符串 inexistent-key，它有可能计算后坑位也是 1/3/5 ，这就是误判了...... "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/55f1d3ebbe844156bcff58cbca73dc39.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}}),_._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/0318283063d94a04b67692291c42b2d9.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGlhb3h1ZUB4dWUuY29t,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("h3",{attrs:{id:"_3、布隆过滤器误判率-为什么不要删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、布隆过滤器误判率-为什么不要删除"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"#_3%E3%80%81%E5%B8%83%E9%9A%86%E8%BF%87%E6%BB%A4%E5%99%A8%E8%AF%AF%E5%88%A4%E7%8E%87-%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%A6%81%E5%88%A0%E9%99%A4"}},[_._v("#")]),_._v(" 3、布隆过滤器误判率，为什么不要删除")]),_._v(" "),t("p",[_._v("布隆过滤器的误判是指多个输入经过哈希之后在相同的 bit 位置 1 了，这样就无法判断究竟是哪个输入产生的，")]),_._v(" "),t("p",[_._v("因此误判的根源在于相同的 bit 位被多次映射且置 1。")]),_._v(" "),t("p",[_._v("这种情况也造成了布隆过滤器的删除问题，因为布隆过滤器的每一个 bit 并不是独占的，很有可能多个元素共享了某一位。如果我们直接删除这一位的话，会影响其他的元素")]),_._v(" "),t("p",[_._v("特性")]),_._v(" "),t("p",[_._v("一个元素判断结果为没有时则一定没有，如果判断结果为存在的时候元素不一定存在。")]),_._v(" "),t("p",[_._v("布隆过滤器可以添加元素，但是不能删除元素。因为删掉元素会导致误判率增加。")]),_._v(" "),t("h3",{attrs:{id:"_4、总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、总结"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"#_4%E3%80%81%E6%80%BB%E7%BB%93"}},[_._v("#")]),_._v(" 4、总结")]),_._v(" "),t("ul",[t("li",[_._v("是否存在")]),_._v(" "),t("li",[t("ul",[t("li",[_._v("有，是很可能有")])])]),_._v(" "),t("li",[t("ul",[t("li",[_._v("无，是肯定无")])])]),_._v(" "),t("li",[_._v("可以保证的是，如果布隆过滤器判断一个元素不在一个集合中，那这个元素一定不会在集合中")]),_._v(" "),t("li",[_._v("使用时最好不要让实际元素数量远大于初始化数量")]),_._v(" "),t("li",[_._v("当实际元素数量超过初始化数量时，应该对布隆过滤器进行重建，重新分配一个 size 更大的过滤器，再将所有的历史元素批量 add 进行")])]),_._v(" "),t("h2",{attrs:{id:"_6、优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、优缺点"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"#_6%E3%80%81%E4%BC%98%E7%BC%BA%E7%82%B9"}},[_._v("#")]),_._v(" 6、优缺点")]),_._v(" "),t("ul",[t("li",[_._v("优点:")]),_._v(" "),t("li",[t("ul",[t("li",[_._v("高效地插入和查询，占用空间少")])])]),_._v(" "),t("li",[_._v("缺点")]),_._v(" "),t("li",[t("ul",[t("li",[_._v("不能删除元素。因为删掉元素会导致误判率增加，因为 hash 冲突同一个位置可能存的东西是多个共有的，你删除一个元素的同时可能也把其它的删除了。")])])]),_._v(" "),t("li",[_._v("存在误判不同的数据可能出来相同的 hash 值")])])])}),[],!1,null,null,null);t.default=s.exports}}]);
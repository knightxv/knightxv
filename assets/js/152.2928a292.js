(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{473:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"管道模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管道模式"}},[s._v("#")]),s._v(" 管道模式")]),s._v(" "),t("h2",{attrs:{id:"什么是管道模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是管道模式"}},[s._v("#")]),s._v(" 什么是管道模式？")]),s._v(" "),t("p",[s._v("管道模式（Pipeline 模式）也称为流水线模式，模拟的就是现实世界中的流水线生产。以手机组装为例，整条生产流水线可能有成百上千道工序，每道工序只负责自己的事情，最终经过一道道工序组装，就完成了一部手机的生产。")]),s._v(" "),t("p",[s._v("从技术上看，每一道工序的输出，就是下一道工序的输入，在工序之间传递的东西就是数据，这种模式称为流水线模式，而传递的数据称为数据流。")]),s._v(" "),t("h2",{attrs:{id:"案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[s._v("#")]),s._v(" 案例")]),s._v(" "),t("p",[s._v("现在我以组装手机为例，讲解流水线模式的使用。假设一条组装手机的流水线有 3 道工序，分别是配件采购、配件组装、打包成品。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230128/1-1.70v0hq9jwqs0.webp",alt:""}})]),s._v(" "),t("p",[s._v("从以上示意图中可以看到，采购的配件通过 channel 传递给工序 2 进行组装，然后再通过 channel 传递给工序 3 打包成品。相对工序 2 来说，工序 1 是生产者，工序 3 是消费者。相对工序 1 来说，工序 2 是消费者。相对工序 3 来说，工序 2 是生产者。")]),s._v(" "),t("p",[s._v("下面用一组代码演示：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//工序1采购")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("buy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   out "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         out "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sprint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"配件"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" out\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//工序2组装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("in "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   out "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" in "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         out "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"组装("')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('")"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" out\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//工序3打包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("in "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   out "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" in "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         out "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"打包("')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('")"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" out\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   coms "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("buy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//采购10套配件")]),s._v("\n   phones "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("coms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//组装10部手机")]),s._v("\n   packs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("phones"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//打包它们以便售卖")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出测试，看看效果")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" packs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br")])]),t("p",[s._v("按照流水线工序进行调用，最终把手机打包以便售卖，过程如下所示：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("打包(组装(配件1))\n打包(组装(配件2))\n打包(组装(配件3))\n打包(组装(配件4))\n打包(组装(配件5))\n打包(组装(配件6))\n打包(组装(配件7))\n打包(组装(配件8))\n打包(组装(配件9))\n打包(组装(配件10))\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("从上述例子中，我们可以总结出一个流水线模式的构成：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("流水线由一道道工序构成，每道工序通过 channel 把数据传递到下一个工序；")])]),s._v(" "),t("li",[t("p",[s._v("每道工序一般会对应一个函数，函数里有协程和 channel，协程一般用于处理数据并把它放入 channel 中，整个函数会返回这个 channel 以供下一道工序使用；")])]),s._v(" "),t("li",[t("p",[s._v("最终要有一个组织者（示例中的 main 函数）把这些工序串起来，这样就形成了一个完整的流水线，对于数据来说就是数据流。")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
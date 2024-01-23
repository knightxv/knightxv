(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{398:function(s,t,v){"use strict";v.r(t);var _=v(4),n=Object(_.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"tcp-的拥塞控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的拥塞控制"}},[s._v("#")]),s._v(" TCP 的拥塞控制")]),s._v(" "),t("p",[s._v("拥塞控制是作用于网络的，防止过多的数据包注入到网络中，避免出现网络负载过大的情况。它的目标主要是最大化利用网络上瓶颈链路的带宽。它跟流量控制又有什么区别呢？流量控制是作用于接收者的，根据接收端的实际接收能力控制发送速度，防止分组丢失的。")]),s._v(" "),t("p",[s._v("我们可以把网络链路比喻成一根水管，如果我们想最大化利用网络来传输数据，那就是尽快让水管达到最佳充满状态。")]),s._v(" "),t("blockquote",[t("p",[s._v("发送方维护一个拥塞窗口 cwnd（congestion window） 的变量，用来估算在一段时间内这条链路（水管）可以承载和运输的数据（水）的数量。它大小代表着网络的拥塞程度，并且是动态变化的，但是为了达到最大的传输效率，我们该如何知道这条水管的运送效率是多少呢？")])]),s._v(" "),t("p",[s._v("一个比较简单的方法就是不断增加传输的水量，直到水管快要爆裂为止（对应到网络上就是发生丢包），用 TCP 的描述就是：")]),s._v(" "),t("p",[s._v("★ "),t("code",[s._v("只要网络中没有出现拥塞，拥塞窗口的值就可以再增大一些，以便把更多的数据包发送出去，但只要网络出现拥塞，拥塞窗口的值就应该减小一些，以减少注入到网络中的数据包数。")])]),s._v(" "),t("p",[s._v("实际上，拥塞控制主要有这几种常用算法")]),s._v(" "),t("ul",[t("li",[s._v("慢启动")]),s._v(" "),t("li",[s._v("拥塞避免")]),s._v(" "),t("li",[s._v("拥塞发生")]),s._v(" "),t("li",[s._v("快速恢复")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230128/7.403hsc84mqi0.webp",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"慢启动算法-慢开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#慢启动算法-慢开始"}},[s._v("#")]),s._v(" 慢启动算法（慢开始）")]),s._v(" "),t("p",[s._v("cwnd 初始值为 1，每个轮次 cwnd 加倍")]),s._v(" "),t("p",[s._v("慢启动算法，表面意思就是，别急慢慢来。它表示 TCP 建立连接完成后，一开始不要发送大量的数据，而是先探测一下网络的拥塞程度。由小到大逐渐增加拥塞窗口的大小，如果没有出现丢包，每收到一个 ACK，就将拥塞窗口 cwnd 大小就加 1（单位是 MSS）。每轮次发送窗口增加一倍，呈指数增长，如果出现丢包，拥塞窗口就减半，进入拥塞避免阶段。")]),s._v(" "),t("ul",[t("li",[s._v("TCP 连接完成，初始化 cwnd = 1，表明可以传一个 MSS 单位大小的数据。")]),s._v(" "),t("li",[s._v("每当收到一个 ACK，cwnd 就加一;")]),s._v(" "),t("li",[s._v("每当过了一个 RTT，cwnd 就增加一倍; 呈指数让升")])]),s._v(" "),t("p",[s._v("为了防止 cwnd 增长过大引起网络拥塞，还需设置一个慢启动阀值 ssthresh（slow start threshold）状态变量。当 cwnd 到达该阀值后，就好像水管被关小了水龙头一样，减少拥塞状态。即当 cwnd >ssthresh 时，进入了拥塞避免算法。")]),s._v(" "),t("h2",{attrs:{id:"拥塞避免算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拥塞避免算法"}},[s._v("#")]),s._v(" 拥塞避免算法")]),s._v(" "),t("p",[s._v("慢开始门限 ssthresh，当 cwnd>ssthresh 时，进入拥塞避免，让 cwnd 每个轮次+1。出现超时，就令 ssthresh = cwnd/2，重新进行慢开始。")]),s._v(" "),t("p",[s._v("一般来说，慢启动阀值 ssthresh 是 65535 字节，cwnd 到达慢启动阀值后")]),s._v(" "),t("p",[s._v("每收到一个 ACK 时，cwnd = cwnd + 1/cwnd\n当每过一个 RTT 时，cwnd = cwnd + 1\n显然这是一个线性上升的算法，避免过快导致网络拥塞问题。")]),s._v(" "),t("h1",{attrs:{id:"拥塞发生-快速重传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拥塞发生-快速重传"}},[s._v("#")]),s._v(" 拥塞发生(快速重传）")]),s._v(" "),t("p",[s._v("接收方只对最后一个收到的有序报文段进行确认，若发送方介绍重复确认，就判断下一个报文段丢失，执行快重传，即立即重传下一报文段。")]),s._v(" "),t("p",[s._v("发送方收到 3 个连续重复的 ACK 时，就会快速地重传，不必等待 RTO 超时再重传。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230128/8.7eleg9tzwq80.webp",alt:""}})]),s._v(" "),t("p",[s._v("慢启动阀值 ssthresh 和 cwnd 变化如下：")]),s._v(" "),t("ul",[t("li",[s._v("拥塞窗口大小 cwnd = cwnd/2")]),s._v(" "),t("li",[s._v("慢启动阀值 ssthresh = cwnd")]),s._v(" "),t("li",[s._v("进入快速恢复算法")])]),s._v(" "),t("h2",{attrs:{id:"快速恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速恢复"}},[s._v("#")]),s._v(" 快速恢复")]),s._v(" "),t("p",[s._v("若丢失个别报文段，执行快恢复，令\n"),t("code",[s._v("ssthresh = cwnd/2, cwnd = ssthresh")]),s._v("\n直接进入拥塞避免。")]),s._v(" "),t("p",[s._v("快速重传和快速恢复算法一般同时使用。快速恢复算法认为，还有 3 个重复 ACK 收到，说明网络也没那么糟糕，所以没有必要像 RTO 超时那么强烈。")]),s._v(" "),t("p",[s._v("正如前面所说，进入快速恢复之前，cwnd 和 sshthresh 已被更新：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[s._v("cwnd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cwnd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" sshthresh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cwnd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后，真正的快速算法如下：")]),s._v(" "),t("ul",[t("li",[s._v("cwnd = sshthresh + 3")]),s._v(" "),t("li",[s._v("重传重复的那几个 ACK（即丢失的那几个数据包）")]),s._v(" "),t("li",[s._v("如果再收到重复的 ACK，那么 cwnd = cwnd +1")]),s._v(" "),t("li",[s._v("如果收到新数据的 ACK 后, cwnd = sshthresh。因为收到新数据的 ACK，表明恢复过程已经结束，可以再次进入了拥塞避免的算法了。")])]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("拥塞控制是为了防止过多数据注入网络，导致网络过载。TCP 的拥塞控制采用四个算法实现：慢开始、拥塞避免、快重传、快恢复。 发送方维护一个拥塞窗口(cwnd)的状态变量。")]),s._v(" "),t("ul",[t("li",[s._v("慢开始：cwnd 初始值为 1，每个轮次 cwnd 加倍")]),s._v(" "),t("li",[s._v("拥塞避免：慢开始门限 ssthresh，当 cwnd>ssthresh 时，进入拥塞避免，让 cwnd 每个轮次+1。出现超时，就令 ssthresh = cwnd/2，重新进行慢开始。")]),s._v(" "),t("li",[s._v("快重传：接收方只对最后一个收到的有序报文段进行确认，若发送方介绍重复确认，就判断下一个报文段丢失，执行快重传，即立即重传下一报文段。")]),s._v(" "),t("li",[s._v("快恢复：若丢失个别报文段，执行快恢复，令 ssthresh = cwnd/2, cwnd = ssthresh，直接进入拥塞避免。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{382:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),t("h2",{attrs:{id:"_1、docker介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、docker介绍"}},[s._v("#")]),s._v(" 1、Docker介绍")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/202206281708847.5j3lscddnsc0.webp",alt:"image-20210628114723041"}})]),s._v(" "),t("blockquote",[t("p",[s._v("K8S：CRI（Container Runtime Interface）")]),s._v(" "),t("p",[s._v("Client： 客户端；操作 docker 服务器的客户端（命令行或者界面）")]),s._v(" "),t("p",[s._v("Docker_Host：Docker 主机；安装 Docker 服务的主机")]),s._v(" "),t("p",[s._v("Docker_Daemon：后台进程；运行在 Docker 服务器的后台进程")]),s._v(" "),t("p",[s._v("Containers：容器；在 Docker 服务器中的容器（一个容器一般是一个应用实例，容器间互相隔离）")]),s._v(" "),t("p",[s._v("Images：镜像、映像、程序包；Image 是只读模板，其中包含创建 Docker 容器的说明。容器是由 Image 运")]),s._v(" "),t("p",[s._v("行而来，Image 固定不变。")]),s._v(" "),t("p",[s._v("Registries：仓库；存储 Docker Image 的地方。官方远程仓库地址： https://hub.docker.com/search")])]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("Docker 用 Go 编程语言编写，并利用 Linux 内核的多种功能来交付其功能。 Docker 使用一种称为名称")])]),s._v(" "),t("p",[t("strong",[s._v("空间的技术来提供容器的隔离工作区。 运行容器时，Docker 会为该容器创建一组名称空间。 这些")])]),s._v(" "),t("p",[t("strong",[s._v("名称空间提供了一层隔离。 容器的每个方面都在单独的名称空间中运行，并且对其的访问仅限于")])]),s._v(" "),t("p",[t("strong",[s._v("该名称空间。")])])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[s._v("Docker")])]),s._v(" "),t("th",[t("strong",[s._v("面向对象")])])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("镜像（Image）")]),s._v(" "),t("td",[s._v("类")])]),s._v(" "),t("tr",[t("td",[s._v("容器（Container）")]),s._v(" "),t("td",[s._v("对象（实例）")])])])]),s._v(" "),t("p",[t("strong",[s._v("容器与虚拟机")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/202206281713680.kwdoediqw98.webp",alt:"image-20210628114739120"}})]),s._v(" "),t("h2",{attrs:{id:"_2、docker-隔离原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、docker-隔离原理"}},[s._v("#")]),s._v(" 2、Docker 隔离原理")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("namespace 6 项隔离 （资源隔离）")])])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[s._v("namespace")])]),s._v(" "),t("th",[t("strong",[s._v("系统调用参数")])]),s._v(" "),t("th",[t("strong",[s._v("隔离内容")])])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("UTS")]),s._v(" "),t("td",[s._v("CLONE_NEWUTS")]),s._v(" "),t("td",[s._v("主机和域名")])]),s._v(" "),t("tr",[t("td",[s._v("IPC")]),s._v(" "),t("td",[s._v("CLONE_NEWIPC")]),s._v(" "),t("td",[s._v("信号量、消息队列和共享内存")])]),s._v(" "),t("tr",[t("td",[s._v("PID")]),s._v(" "),t("td",[s._v("CLONE_NEWPID")]),s._v(" "),t("td",[s._v("进程编号")])]),s._v(" "),t("tr",[t("td",[s._v("Network")]),s._v(" "),t("td",[s._v("CLONE_NEWNET")]),s._v(" "),t("td",[s._v("网络设备、网络栈、端口等")])]),s._v(" "),t("tr",[t("td",[s._v("Mount")]),s._v(" "),t("td",[s._v("CLONE_NEWNS")]),s._v(" "),t("td",[s._v("挂载点(文件系统)")])]),s._v(" "),t("tr",[t("td",[s._v("User")]),s._v(" "),t("td",[s._v("CLONE_NEWUSER")]),s._v(" "),t("td",[s._v("用户和用户组")])])])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("cgroups 资源限制 （资源限制）")])])]),s._v(" "),t("p",[s._v("cgroup 提供的主要功能如下：")]),s._v(" "),t("ul",[t("li",[t("ul",[t("li",[s._v("资源限制：限制任务使用的资源总额，并在超过这个 配额 时发出提示")]),s._v(" "),t("li",[s._v("优先级分配：分配 CPU 时间片数量及磁盘 IO 带宽大小、控制任务运行的优先级")]),s._v(" "),t("li",[s._v("资源统计：统计系统资源使用量，如 CPU 使用时长、内存用量等")]),s._v(" "),t("li",[s._v("任务控制：对任务执行挂起、恢复等操作")])])])]),s._v(" "),t("blockquote",[t("p",[s._v("cgroup 资源控制系统，每种子系统独立地控制一种资源。功能如下")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[s._v("子系统")])]),s._v(" "),t("th",[t("strong",[s._v("功能")])])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("cpu")]),s._v(" "),t("td",[s._v("使用调度程序控制任务对 CPU 的使用")])]),s._v(" "),t("tr",[t("td",[s._v("cpuacct(CPU Accounting)")]),s._v(" "),t("td",[s._v("自动生成 cgroup 中任务对 CPU 资源使用情况的报告")])]),s._v(" "),t("tr",[t("td",[s._v("cpuset")]),s._v(" "),t("td",[s._v("为 cgroup 中的任务分配独立的 CPU(多处理器系统时)和内存")])]),s._v(" "),t("tr",[t("td",[s._v("devices")]),s._v(" "),t("td",[s._v("开启或关闭 cgroup 中任务对设备的访问")])]),s._v(" "),t("tr",[t("td",[s._v("freezer")]),s._v(" "),t("td",[s._v("挂起或恢复 cgroup 中的任务")])]),s._v(" "),t("tr",[t("td",[s._v("memory")]),s._v(" "),t("td",[s._v("设定 cgroup 中任务对内存使用量的限定，并生成这些任务对内存资源使用情况的报告")])]),s._v(" "),t("tr",[t("td",[s._v("perf_event(Linux CPU 性能探测器)")]),s._v(" "),t("td",[s._v("使 cgroup 中的任务可以进行统一的性能测试")])]),s._v(" "),t("tr",[t("td",[s._v("net_cls(Docker 未使用)")]),s._v(" "),t("td",[s._v("通过等级识别符标记网络数据包，从而允许 Linux 流量监控程序(Tra?icController)识别从具体 cgroup 中生成的数据包")])])])]),s._v(" "),t("h2",{attrs:{id:"_3、docker-如何工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、docker-如何工作"}},[s._v("#")]),s._v(" 3、Docker 如何工作？")]),s._v(" "),t("p",[s._v("​ Docker 技术使用 Linux 内核和内核功能（例如 Cgroups 和 namespaces）来分隔进程，以便各进程相互独立运行。这种独立性正是采用容器的目的所在；它可以独立运行多种进程、多个应用程序，更加充分地发挥基础设施的作用，同时保持各个独立系统的安全性。")]),s._v(" "),t("p",[s._v("​ 容器工具（包括 Docker）可提供基于镜像的部署模式。这使得它能够轻松跨多种环境，与其依赖程序共享应用或服务组。Docker 还可在这一容器环境中自动部署应用程序（或者合并多种流程，以构建单个应用程序）。")]),s._v(" "),t("h2",{attrs:{id:"_4、docker-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、docker-安装"}},[s._v("#")]),s._v(" 4、Docker 安装")]),s._v(" "),t("blockquote",[t("p",[s._v("以下以 centos 为例；")]),s._v(" "),t("p",[s._v("更多其他安装方式，详细参照文档： https://docs.docker.com/engine/install/centos/")])]),s._v(" "),t("h3",{attrs:{id:"_1、移除旧版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、移除旧版本"}},[s._v("#")]),s._v(" 1、移除旧版本")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove docker*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2、设置-docker-yum-源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、设置-docker-yum-源"}},[s._v("#")]),s._v(" 2、设置 docker yum 源")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" yum-utils\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo yum install docker-ce docker-ce-cli containerd.io")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3、安装指定版本-docker-engine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装指定版本-docker-engine"}},[s._v("#")]),s._v(" 3、安装指定版本 docker engine")]),s._v(" "),t("h4",{attrs:{id:"_1、在线安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、在线安装"}},[s._v("#")]),s._v(" 1、在线安装")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#找到所有可用docker版本列表")]),s._v("\nyum list docker-ce "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--showduplicates")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装指定版本，用上面的版本号替换<VERSION_STRING>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sudo yum install docker-ce-<VERSION_STRING>.x86_64 docker-ce-cli-<VERSION_STRING>.x86_64 containerd.io")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#例如")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" docker-ce-19.03.9  docker-ce-cli-19.03.9 containerd.io\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"_2、离线安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、离线安装"}},[s._v("#")]),s._v(" 2、离线安装")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("https://download.docker.com/linux/centos/7/x86_64/stable/Packages/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ivh")]),s._v(" xxx.rpm\n可以下载 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v("\n解压启动即可\nhttps://docs.docker.com/engine/install/binaries/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#install-daemon-and-client-binaries-on-linux")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_4、启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、启动服务"}},[s._v("#")]),s._v(" 4、启动服务")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nsystemctl start "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机自启")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_5、镜像加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、镜像加速"}},[s._v("#")]),s._v(" 5、镜像加速")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/docker\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n  "registry-mirrors": ["https://c9jwzg2k.mirror.aliyuncs.com"]\n}\nEOF')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 阿里云的镜像是从docker hub来的，我们配置了加速，默认是从阿里云（缓存）下载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以后docker下载直接从阿里云拉取相关镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#/etc/docker/daemon.json 是Docker的核心配置文件。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mirror.ccs.tencentyun.com"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"_5、docker-镜像生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、docker-镜像生命周期"}},[s._v("#")]),s._v(" 5、Docker 镜像生命周期")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/202206281713598.5662fc7z6000.webp",alt:"image-20211104103406528"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);
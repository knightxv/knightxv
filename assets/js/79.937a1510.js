(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{400:function(t,s,l){"use strict";l.r(s);var p=l(4),v=Object(p.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"https-工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-工作流程"}},[t._v("#")]),t._v(" Https 工作流程")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("客户端发起 Https 请求，连接到服务器的 443 端口。\n服务器必须要有一套数字证书（证书内容有公钥、证书颁发机构、失效日期等）。")])]),t._v(" "),s("li",[s("p",[t._v("服务器将自己的数字证书发送给客户端（公钥在证书里面，私钥由服务器持有）。")])]),t._v(" "),s("li",[s("p",[t._v("客户端收到数字证书之后，会验证证书的合法性。如果证书验证通过，就会生成一个随机的对称密钥，用证书的公钥加密。")])]),t._v(" "),s("li",[s("p",[t._v("客户端将公钥加密后的密钥发送到服务器。")])]),t._v(" "),s("li",[s("p",[t._v("服务器接收到客户端发来的密文密钥之后，用自己之前保留的私钥对其进行非对称解密，解密之后就得到客户端的密钥，然后用客户端密钥对返回数据进行对称加密，酱紫传输的数据都是密文啦。")])]),t._v(" "),s("li",[s("p",[t._v("服务器将加密后的密文返回到客户端。")])]),t._v(" "),s("li",[s("p",[t._v("客户端收到后，用自己的密钥对其进行对称解密，得到服务器返回的数据。")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);
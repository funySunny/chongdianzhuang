(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fail"],{"1b63":function(t,e,s){},c8b2:function(t,e,s){"use strict";var c=s("1b63"),i=s.n(c);i.a},cc89:function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("exception-page",{attrs:{type:"404"}})},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exception"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.config[t.type].img}})]),s("div",{staticClass:"content"},[s("h1",[t._v(t._s(t.config[t.type].title))]),s("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),s("div",{staticClass:"action"},[s("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},a=[],o={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},p=o,l={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:p}},methods:{handleToHome:function(){this.$router.push({name:"index"})}}},r=l,u=(s("c8b2"),s("2877")),d=Object(u["a"])(r,n,a,!1,null,"5a579940",null),m=d.exports,g={components:{ExceptionPage:m}},f=g,v=Object(u["a"])(f,c,i,!1,null,"4ff23dea",null);e["default"]=v.exports}}]);
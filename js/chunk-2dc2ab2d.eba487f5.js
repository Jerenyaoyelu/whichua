(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dc2ab2d"],{"02ea":function(t,e,n){},"1a5e":function(t,e,n){},"2f22":function(t,e,n){"use strict";n("1a5e")},5104:function(t,e,n){"use strict";n("02ea")},"9d64":function(t,e,n){t.exports=n.p+"img/logo.74a04c21.png"},e4e5:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("Header"),n("router-view")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"hd-lt",on:{click:t.goToHome}},[n("img",{attrs:{src:t.Logo}}),t._m(0)]),n("div",{staticClass:"hd-rt"},[n("el-menu",{staticClass:"menus",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("关于作者")])],1),n("j-icon",{staticClass:"icon",attrs:{type:"github",size:24},on:{click:t.goToGithub}})],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-text"},[n("div",{staticClass:"title"},[t._v("WhichUA")]),n("div",{staticClass:"desc"},[t._v("Detect every phone")])])}],c=n("9d64"),u=n.n(c),l={data:function(){return{Logo:u.a,activeIndex:"1"}},methods:{goToHome:function(){this.$router.push({name:"Home"})},handleSelect:function(t){"1"===t&&this.$router.push({name:"AboutMe"})},goToGithub:function(){window.open("https://github.com/Jerenyaoyelu/whichua","_blank")}}},r=l,d=(n("5104"),n("2877")),h=Object(d["a"])(r,a,o,!1,null,"6a77627e",null),f=h.exports,p={components:{Header:f}},m=p,v=(n("2f22"),Object(d["a"])(m,i,s,!1,null,"630270c5",null));e["default"]=v.exports}}]);
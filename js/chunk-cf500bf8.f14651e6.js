(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf500bf8"],{"14ac":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-autocomplete",{style:"width: "+t.width+"px",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入手机品牌"},on:{select:t.handleSelect,change:t.handleSearch},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])},c=[],i=(n("a9e3"),n("159b"),n("b64b"),n("b0c0"),n("4de4"),{props:{width:{type:Number,default:650}},data:function(){return{content:"",uaList:[]}},created:function(){var t=this,e=this.$route.params.key;e&&(this.content=e),Object.keys(this.$store.getters.uaMap).forEach((function(e){t.uaList.push({value:e})}))},methods:{handleSearch:function(){if(this.content){var t=this.$route,e=t.name,n=t.params;"Search"===e&&n.key===this.content||this.$router.push({name:"Search",params:{key:this.content}})}},handleSelect:function(t){this.content=t.value,this.handleSearch()},querySearch:function(t,e){var n=t?this.uaList.filter(this.createFilter(t)):this.uaList;e(n)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}}}}),s=i,r=n("2877"),o=Object(r["a"])(s,a,c,!1,null,null,null);e["a"]=o.exports},1563:function(t,e,n){},"2f22":function(t,e,n){"use strict";n("802f")},"4de4":function(t,e,n){"use strict";var a=n("23e7"),c=n("b727").filter,i=n("1dde"),s=i("filter");a({target:"Array",proto:!0,forced:!s},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"802f":function(t,e,n){},"95ef":function(t,e,n){"use strict";n("1563")},"9d64":function(t,e,n){t.exports=n.p+"img/logo.74a04c21.png"},b64b:function(t,e,n){var a=n("23e7"),c=n("7b0b"),i=n("df75"),s=n("d039"),r=s((function(){i(1)}));a({target:"Object",stat:!0,forced:r},{keys:function(t){return i(c(t))}})},e4e5:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("Header"),n("router-view")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"hd-lt",on:{click:t.goToHome}},[n("img",{attrs:{src:t.Logo}}),t._m(0)]),n("div",{staticClass:"hd-rt"},["Search"===t.$route.name?n("SearchBar",{staticClass:"hd-inline",attrs:{width:300}}):t._e(),n("el-menu",{staticClass:"menus",attrs:{mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("About Me")])],1),n("j-icon",{staticClass:"icon",attrs:{type:"github",size:24},on:{click:t.goToGithub}})],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-text"},[n("div",{staticClass:"title"},[t._v("WhichUA")]),n("div",{staticClass:"desc"},[t._v("手机UA大全")])])}],r=n("9d64"),o=n.n(r),u=n("14ac"),l={components:{SearchBar:u["a"]},data:function(){return{Logo:o.a}},methods:{goToHome:function(){this.$router.push({name:"Home"})},handleSelect:function(t){"1"===t&&this.$router.push({name:"AboutMe"})},goToGithub:function(){window.open("https://github.com/Jerenyaoyelu/whichua","_blank")}}},h=l,f=(n("95ef"),n("2877")),d=Object(f["a"])(h,i,s,!1,null,"7ca6f802",null),p=d.exports,m={components:{Header:p}},v=m,b=(n("2f22"),Object(f["a"])(v,a,c,!1,null,"630270c5",null));e["default"]=b.exports}}]);
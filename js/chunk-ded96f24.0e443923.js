(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ded96f24"],{"14ac":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-autocomplete",{style:"width: "+t.width+"px",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入手机品牌"},on:{select:t.handleSelect,change:t.handleSearch},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])},r=[],c=(n("a9e3"),n("159b"),n("b64b"),n("b0c0"),n("4de4"),{props:{width:{type:Number,default:650}},data:function(){return{content:"",uaList:[]}},created:function(){var t=this,e=this.$route.params.key;e&&(this.content=e),Object.keys(this.$store.getters.uaMap).forEach((function(e){t.uaList.push({value:e})}))},methods:{handleSearch:function(){if(this.content){var t=this.$route,e=t.name,n=t.params;"Search"===e&&n.key===this.content||this.$router.push({name:"Search",params:{key:this.content}})}},handleSelect:function(t){this.content=t.value,this.handleSearch()},querySearch:function(t,e){var n=t?this.uaList.filter(this.createFilter(t)):this.uaList;e(n)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}}}}),i=c,s=n("2877"),o=Object(s["a"])(i,a,r,!1,null,null,null);e["a"]=o.exports},2973:function(t,e,n){"use strict";n("633b")},"4c9f":function(t,e,n){t.exports=n.p+"img/home-default-bg.b851278d.jpg"},"4de4":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").filter,c=n("1dde"),i=c("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"633b":function(t,e,n){},b64b:function(t,e,n){var a=n("23e7"),r=n("7b0b"),c=n("df75"),i=n("d039"),s=i((function(){c(1)}));a({target:"Object",stat:!0,forced:s},{keys:function(t){return c(r(t))}})},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"page-top",style:"background-image:url("+t.HomeDefaultBg+")"},[n("SearchBar")],1),n("div",{staticClass:"page-btm"})])},r=[],c=n("4c9f"),i=n.n(c),s=n("14ac"),o={data:function(){return{HomeDefaultBg:i.a}},components:{SearchBar:s["a"]}},u=o,l=(n("2973"),n("2877")),h=Object(l["a"])(u,a,r,!1,null,"04e05e09",null);e["default"]=h.exports}}]);
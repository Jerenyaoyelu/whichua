(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e266b8c"],{"2d3b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"keyword"},[s("span",{on:{click:function(e){return t.handleClick("")}}},[t._v(t._s(t.keyword))])]),s("div",{staticClass:"sub-keyword"},[t._l(t.subKeys,(function(e,a){return[s("el-button",{key:a,on:{click:function(s){return t.handleClick(e)}}},[t._v(t._s(e))])]}))],2),s("div",{staticClass:"res-list"},t._l(t.list,(function(t,e){return s("UACard",{key:e,attrs:{data:t}})})),1)])},i=[],n=s("6b75");function r(t){if(Array.isArray(t))return Object(n["a"])(t)}s("a4d3"),s("e01a"),s("d3b7"),s("d28b"),s("3ca3"),s("ddb0"),s("a630");function c(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=s("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return r(t)||c(t)||Object(o["a"])(t)||u()}s("b64b"),s("159b"),s("99af");var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-container"},[s("div",{staticClass:"text-item"},[s("label",[s("j-icon",{staticClass:"icon",attrs:{type:"device",size:16}}),s("j-icon",{staticClass:"icon-active",attrs:{type:"device-active",size:16}}),t._v("机型：")],1),t._v(" "+t._s(t.data.device)+" ")]),s("div",{staticClass:"text-item"},[s("label",[s("j-icon",{staticClass:"icon",attrs:{type:"browser",size:16}}),s("j-icon",{staticClass:"icon-active",attrs:{type:"browser-active",size:16}}),t._v("浏览器：")],1),t._v(" "+t._s(t.data.browser)+" ")]),s("div",{staticClass:"text-item"},[s("label",[s("j-icon",{staticClass:"icon",attrs:{type:t.systemIcon,size:16}}),s("j-icon",{staticClass:"icon-active",attrs:{type:t.systemIconActive,size:16}}),t._v(" 操作系统：")],1),t._v(" "+t._s(t.data.system)+" ")]),s("div",{staticClass:"text-item"},[s("label",[s("j-icon",{staticClass:"icon",attrs:{type:"user-agent",size:16}}),s("j-icon",{staticClass:"icon-active",attrs:{type:"user-agent-active",size:16}}),t._v("UA：")],1),s("div",{staticClass:"ua-block"},[t._v(t._s(t.data.ua))])])])},f=[],b=(s("caad"),{props:{data:{type:Object,required:!0}},computed:{systemIcon:function(){var t=this.data.system.toLowerCase();return"android"===t?"android":["iphone","ipad"].includes(t)?"ios":"system"},systemIconActive:function(){var t=this.data.system.toLowerCase();return"android"===t?"android-active":["iphone","ipad"].includes(t)?"ios-active":"system"}}}),v=b,p=(s("ff70"),s("2877")),y=Object(p["a"])(v,l,f,!1,null,"cb50fe3e",null),h=y.exports,m={components:{UACard:h},data:function(){return{subKey:""}},watch:{$route:{handler:function(){this.subKey=""}}},computed:{keyword:function(){return this.$route.params.key},uaMap:function(){return this.$store.getters.uaMap},mappedResult:function(){return this.uaMap[this.keyword]||{}},subKeys:function(){return Object.keys(this.mappedResult)},list:function(){var t=this;if(this.subKey)return this.mappedResult[this.subKey]||[];var e=[];return Object.keys(this.mappedResult).forEach((function(s){e=[].concat(d(e),d(t.mappedResult[s]))})),e}},methods:{handleClick:function(t){this.subKey=t}}},C=m,w=(s("4124"),Object(p["a"])(C,a,i,!1,null,"315825ac",null));e["default"]=w.exports},4124:function(t,e,s){"use strict";s("717d")},"717d":function(t,e,s){},"99af":function(t,e,s){"use strict";var a=s("23e7"),i=s("d039"),n=s("e8b5"),r=s("861d"),c=s("7b0b"),o=s("07fa"),u=s("8418"),d=s("65f0"),l=s("1dde"),f=s("b622"),b=s("2d00"),v=f("isConcatSpreadable"),p=9007199254740991,y="Maximum allowed index exceeded",h=b>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=l("concat"),C=function(t){if(!r(t))return!1;var e=t[v];return void 0!==e?!!e:n(t)},w=!h||!m;a({target:"Array",proto:!0,forced:w},{concat:function(t){var e,s,a,i,n,r=c(this),l=d(r,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?r:arguments[e],C(n)){if(i=o(n),f+i>p)throw TypeError(y);for(s=0;s<i;s++,f++)s in n&&u(l,f,n[s])}else{if(f>=p)throw TypeError(y);u(l,f++,n)}return l.length=f,l}})},b64b:function(t,e,s){var a=s("23e7"),i=s("7b0b"),n=s("df75"),r=s("d039"),c=r((function(){n(1)}));a({target:"Object",stat:!0,forced:c},{keys:function(t){return n(i(t))}})},c972:function(t,e,s){},caad:function(t,e,s){"use strict";var a=s("23e7"),i=s("4d64").includes,n=s("44d2");a({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},ff70:function(t,e,s){"use strict";s("c972")}}]);
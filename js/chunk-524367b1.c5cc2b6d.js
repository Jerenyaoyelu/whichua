(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-524367b1"],{"0e34":function(t,e,a){"use strict";a("2b9e")},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var s=a("6b75");function i(t){if(Array.isArray(t))return Object(s["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=a("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return i(t)||n(t)||Object(r["a"])(t)||c()}},"2b9e":function(t,e,a){},"2d3b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"keyword"},[a("span",{on:{click:function(e){return t.handleClick("")}}},[t._v(t._s(t.keyword))])]),a("div",{staticClass:"sub-keyword"},[t._l(t.subKeys,(function(e,s){return[a("el-button",{key:s,on:{click:function(a){return t.handleClick(e)}}},[t._v(t._s(e))])]}))],2),a("div",{staticClass:"res-list"},t._l(t.list,(function(t,e){return a("UACard",{key:e,attrs:{data:t}})})),1)])},i=[],n=a("2909"),r=(a("b64b"),a("159b"),a("99af"),a("5a70")),c=a("e325"),o={mixins:[c["a"]],components:{UACard:r["a"]},data:function(){return{subKey:""}},watch:{$route:{handler:function(){this.subKey=""}}},computed:{keyword:function(){return this.$route.params.key},mappedResult:function(){return this.uaMap[this.keyword]||{}},subKeys:function(){return Object.keys(this.mappedResult)},list:function(){var t=this;if(this.subKey)return this.mappedResult[this.subKey]||[];var e=[];return Object.keys(this.mappedResult).forEach((function(a){e=[].concat(Object(n["a"])(e),Object(n["a"])(t.mappedResult[a]))})),e}},methods:{handleClick:function(t){this.subKey=t}}},u=o,d=(a("0e34"),a("2877")),l=Object(d["a"])(u,s,i,!1,null,"258c249d",null);e["default"]=l.exports},"5a70":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container"},[a("div",{staticClass:"text-item"},[a("label",[a("j-icon",{staticClass:"icon",attrs:{type:"device",size:16}}),a("j-icon",{staticClass:"icon-active",attrs:{type:"device-active",size:16}}),t._v("机型：")],1),t._v(" "+t._s(t.data.device)+" ")]),a("div",{staticClass:"text-item"},[a("label",[a("j-icon",{staticClass:"icon",attrs:{type:"browser",size:16}}),a("j-icon",{staticClass:"icon-active",attrs:{type:"browser-active",size:16}}),t._v("浏览器：")],1),t._v(" "+t._s(t.data.browser)+" ")]),a("div",{staticClass:"text-item"},[a("label",[a("j-icon",{staticClass:"icon",attrs:{type:t.systemIcon,size:16}}),a("j-icon",{staticClass:"icon-active",attrs:{type:t.systemIconActive,size:16}}),t._v(" 操作系统：")],1),t._v(" "+t._s(t.data.system)+" ")]),a("div",{staticClass:"text-item"},[a("label",[a("j-icon",{staticClass:"icon",attrs:{type:"user-agent",size:16}}),a("j-icon",{staticClass:"icon-active",attrs:{type:"user-agent-active",size:16}}),t._v("UA：")],1),a("div",{staticClass:"ua-block"},[t._v(t._s(t.data.ua))])])])},i=[],n=(a("caad"),{props:{data:{type:Object,required:!0}},computed:{systemIcon:function(){var t=this.data.system.toLowerCase();return"android"===t?"android":["iphone","ipad"].includes(t)?"ios":"system"},systemIconActive:function(){var t=this.data.system.toLowerCase();return"android"===t?"android-active":["iphone","ipad"].includes(t)?"ios-active":"system"}}}),r=n,c=(a("ff70"),a("2877")),o=Object(c["a"])(r,s,i,!1,null,"cb50fe3e",null);e["a"]=o.exports},"99af":function(t,e,a){"use strict";var s=a("23e7"),i=a("d039"),n=a("e8b5"),r=a("861d"),c=a("7b0b"),o=a("07fa"),u=a("8418"),d=a("65f0"),l=a("1dde"),f=a("b622"),b=a("2d00"),v=f("isConcatSpreadable"),p=9007199254740991,y="Maximum allowed index exceeded",h=b>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=l("concat"),C=function(t){if(!r(t))return!1;var e=t[v];return void 0!==e?!!e:n(t)},w=!h||!m;s({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,s,i,n,r=c(this),l=d(r,0),f=0;for(e=-1,s=arguments.length;e<s;e++)if(n=-1===e?r:arguments[e],C(n)){if(i=o(n),f+i>p)throw TypeError(y);for(a=0;a<i;a++,f++)a in n&&u(l,f,n[a])}else{if(f>=p)throw TypeError(y);u(l,f++,n)}return l.length=f,l}})},b64b:function(t,e,a){var s=a("23e7"),i=a("7b0b"),n=a("df75"),r=a("d039"),c=r((function(){n(1)}));s({target:"Object",stat:!0,forced:c},{keys:function(t){return n(i(t))}})},c972:function(t,e,a){},caad:function(t,e,a){"use strict";var s=a("23e7"),i=a("4d64").includes,n=a("44d2");s({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},e325:function(t,e,a){"use strict";e["a"]={computed:{uaMap:function(){return this.$store.getters.uaMap}}}},ff70:function(t,e,a){"use strict";a("c972")}}]);
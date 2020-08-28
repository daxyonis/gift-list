(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0d6e":function(t,e,r){},1483:function(t,e,r){"use strict";var n=r("2693"),i=r.n(n);i.a},2693:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("0cdd");var n=r("2b0e"),i=r("5f5b"),a=r("b1e0");r("ab8b"),r("2dd8"),r("f163");n["default"].use(i["a"]),n["default"].use(a["a"]);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:"",id:"app"}},[r("Home")],1)},s=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-3"},[r("b-col"),r("b-col",{attrs:{cols:"10",lg:"8"}},[r("h1",[t._v(t._s(t.title))]),r("p",{staticClass:"text-center"},[t._v(t._s(t.helper))]),r("Gift",{on:{"gift-added":t.giftAdded}}),r("GiftList",{attrs:{"gift-list":t.gifts},on:{"update-gift":t.updateGift}}),t.gifts.length>0?r("div",{staticClass:"mt-3 right"},[r("b-button-group",[r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.checkAll}},[t._v("Check All")]),r("b-button",{attrs:{variant:"outline-secondary"},on:{click:t.uncheckAll}},[t._v("Uncheck All")]),r("b-button",{attrs:{variant:"outline-danger"},on:{click:t.clearAll}},[t._v("Clear All")])],1)],1):t._e(),r("div",{staticClass:"clearfix"}),r("Action")],1),r("b-col")],1)},l=[],u=(r("99af"),r("4160"),r("159b"),r("96cf"),r("1da1")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{lg:"1"}}),r("b-col",{attrs:{lg:"10"}},[r("b-form",{attrs:{inline:""}},[r("label",{staticClass:"sr-only",attrs:{for:"description"}},[t._v("Description")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"description",placeholder:"Gift description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),r("label",{staticClass:"sr-only",attrs:{for:"giveto"}},[t._v("Give To")]),r("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"for"}},[r("b-input",{attrs:{id:"giveto",placeholder:"... recipient name"},model:{value:t.giveTo,callback:function(e){t.giveTo=e},expression:"giveTo"}})],1),r("label",{staticClass:"sr-only",attrs:{for:"giveDate"}},[t._v("Give Date")]),r("b-form-datepicker",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"giveDate",placeholder:"Giving date","date-format-options":{year:"numeric",month:"numeric",day:"numeric"},locale:"fr"},model:{value:t.giveDate,callback:function(e){t.giveDate=e},expression:"giveDate"}}),r("b-button",{attrs:{variant:"primary"},on:{click:t.addGift}},[t._v("Add")])],1)],1),r("b-col",{attrs:{lg:"1"}})],1)},f=[],d=(r("a4d3"),r("e01a"),{data:function(){return{description:"",giveTo:"",giveDate:""}},methods:{addGift:function(){if(this.description&&this.giveTo&&this.giveDate){var t={description:this.description,giveTo:this.giveTo,giveDate:this.giveDate};this.$emit("gift-added",t),this.reset()}},reset:function(){this.description="",this.giveTo="",this.giveDate=""}}}),v=d,h=r("2877"),b=Object(h["a"])(v,p,f,!1,null,"157819ba",null),g=b.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-3"},[r("b-list-group",t._l(t.giftList,(function(e){return r("b-list-group-item",{key:e.id,class:{done:e.done}},[t._v(" Get "),r("span",{staticClass:"ital"},[t._v(t._s(e.description))]),t._v(" for "),r("span",{staticClass:"bold"},[t._v(t._s(e.giveTo))]),t._v(" before "),r("span",{class:{"text-primary":!e.done}},[t._v(t._s(e.giveDate))]),r("span",{staticClass:"right"},[r("b-check",{on:{change:function(r){return t.updateGift(e,r)}},model:{value:e.done,callback:function(r){t.$set(e,"done",r)},expression:"gift.done"}})],1)])})),1)],1)},_=[],y={props:{giftList:Array},methods:{updateGift:function(t,e){t.done=e,this.$emit("update-gift",t)}}},k=y,x=(r("89dd"),Object(h["a"])(k,m,_,!1,null,"330260f7",null)),w=x.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-5"},[r("b-col",{attrs:{lg:"3"}}),r("b-col",{attrs:{lg:"6"}},[r("b-alert",{attrs:{show:""}},[t._v(" Ready to build your next app ? "),r("a",{attrs:{href:"https://evamaciejko.com/#contact"}},[t._v("Contact me")]),t._v(" for details ")])],1),r("b-col",{attrs:{lg:"3"}})],1)},j=[],C={},G=C,A=(r("c759"),Object(h["a"])(G,O,j,!1,null,null,null)),$=A.exports,D={name:"Home",data:function(){return{title:"My Gift List",helper:"Remind yourself what gifts to get your loved ones",gifts:[],errors:[]}},components:{Gift:g,GiftList:w,Action:$},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("".concat("https://gift-list-10365.herokuapp.com/api","/gift"));case 3:r=e.sent,t.gifts=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.errors.push(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:{giftAdded:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$http.post("".concat("https://gift-list-10365.herokuapp.com/api","/gift"),t);case 3:n=r.sent,e.gifts.push(n.data),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),e.errors.push(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},updateGift:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$http.post("".concat("https://gift-list-10365.herokuapp.com/api","/gift/").concat(t.id),t);case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),e.errors.push(r.t0);case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()},checkAll:function(){var t=this;this.gifts.forEach((function(e){e.done||(e.done=!0,t.updateGift(e))}))},uncheckAll:function(){var t=this;this.gifts.forEach((function(e){e.done&&(e.done=!1,t.updateGift(e))}))},clearAll:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.delete("".concat("https://gift-list-10365.herokuapp.com/api","/gift"));case 3:t.gifts=[],e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.errors.push(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},T=D,R=(r("1483"),Object(h["a"])(T,c,l,!1,null,"b5102a72",null)),E=R.exports,P={name:"App",components:{Home:E}},L=P,M=Object(h["a"])(L,o,s,!1,null,null,null),S=M.exports,H=r("bc3a"),J=r.n(H);n["default"].prototype.$http=J.a,n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(S)}}).$mount("#app")},"89dd":function(t,e,r){"use strict";var n=r("e579"),i=r.n(n);i.a},c759:function(t,e,r){"use strict";var n=r("0d6e"),i=r.n(n);i.a},e579:function(t,e,r){},f163:function(t,e,r){}});
//# sourceMappingURL=app.528abc82.js.map
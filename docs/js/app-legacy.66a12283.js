(function(t){function e(e){for(var o,i,u=e[0],c=e[1],l=e[2],s=0,d=[];s<u.length;s++)i=u[s],r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/components/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("e2a1"),r=n.n(o);r.a},"1f63":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\nform[data-v-77d6e230],input[type=text][data-v-77d6e230]{padding:10px;width:100%\n}\ninput[type=text][data-v-77d6e230]{margin:5px 0;border:none;border-top-left-radius:3px;border-top-right-radius:3px;transition:.3s;-webkit-transition:.3s;background-color:#e7e7e7;outline:none;color:#363636\n}\ninput[type=text][data-v-77d6e230]:focus{border-bottom:2px solid #747474\n}\ninput[type=number][data-v-77d6e230]{width:100%;padding:20px;margin:5px 0;border:1px solid #747474;border-radius:40px;transition:.3s;-webkit-transition:.3s;color:#363636;outline:none;background-color:#fff\n}\ninput[type=number][data-v-77d6e230]:focus{border:2px solid #747474\n}",""])},"26fc":function(t,e,n){var o=n("1f63");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("499e").default;r("72328042",o,!0,{sourceMap:!1,shadowMode:!1})},"3f8c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n*{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale\n}\nbody{margin:0\n}\nbody,html{height:100%;width:100%\n}\n*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box\n}",""])},"40a9":function(t,e,n){"use strict";var o=n("26fc"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=n("ecee"),a=n("c074"),i=n("ad3d"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},c=[],l=(n("034f"),n("2877")),p={},s=Object(l["a"])(p,u,c,!1,null,null,null);s.options.__file="App.vue";var d=s.exports,f=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("This is home")])},h=[],v={name:"home"},x=v,m=Object(l["a"])(x,b,h,!1,null,null,null);m.options.__file="Home.vue";var g=m.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"30px"}},[n("Button",{attrs:{"color-button":"red","color-text":"white"},on:{click:t.greet}},[t._v("\n    Execute\n  ")])],1)},y=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button",style:{background:t.colorButton,color:t.colorText},on:{click:function(e){t.$emit("click")}}},[t._t("default",[t._v("button")])],2)},k=[],O={props:{colorButton:{type:String,default:"red"},colorText:{type:String,default:"white"}}},j=O,M=(n("a70a"),Object(l["a"])(j,_,k,!1,null,"29449c86",null));M.options.__file="Button.vue";var S=M.exports,$={components:{Button:S},methods:{greet:function(){alert("Hello world!")}}},B=$,E=Object(l["a"])(B,w,y,!1,null,null,null);E.options.__file="Button.vue";var P=E.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("label",[t._v("Years")]),n("input",{attrs:{type:"number",placeholder:"Age"}}),n("label",[t._v("Input with icon")]),n("br"),n("fa",{attrs:{icon:"search"}}),n("input",{staticStyle:{"background-image":"url(searchicon.png)"},attrs:{type:"text",placeholder:"Search.."}})],1)},z=[],A=void 0,H=(n("40a9"),Object(l["a"])(A,T,z,!1,null,"77d6e230",null));H.options.__file="Form.vue";var J=H.exports;o["a"].use(f["a"]);var C=new f["a"]({routes:[{path:"/",name:"home",component:g},{path:"/button",name:"button",component:P},{path:"/form",name:"form",component:J}]});r["c"].add(a["a"]),o["a"].component("fa",i["a"]),o["a"].config.productionTip=!1,new o["a"]({router:C,render:function(t){return t(d)}}).$mount("#app")},a70a:function(t,e,n){"use strict";var o=n("f7ee"),r=n.n(o);r.a},b9bf:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.button[data-v-29449c86]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding-left:20px;padding-right:20px;padding-top:10px;padding-bottom:10px;font-size:1.2em;font-weight:500;border-radius:4px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2);box-shadow:0 2px 4px 0 rgba(0,0,0,.2);cursor:pointer\n}\n.button[data-v-29449c86]:hover{-webkit-box-shadow:0 2px 4px 2px rgba(0,0,0,.2);box-shadow:0 2px 4px 2px rgba(0,0,0,.2)\n}",""])},e2a1:function(t,e,n){var o=n("3f8c");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("499e").default;r("1f50beb8",o,!0,{sourceMap:!1,shadowMode:!1})},f7ee:function(t,e,n){var o=n("b9bf");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("499e").default;r("7cab15c1",o,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app-legacy.66a12283.js.map
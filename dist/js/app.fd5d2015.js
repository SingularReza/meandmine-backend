(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],f=0,p=[];f<i.length;f++)a=i[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"23662b77"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e),u=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+u+")");a.type=r,a.request=u,n[1](a)}o[e]=void 0}};var s=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var l=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],a=(n("034f"),n("2877")),i={},c=Object(a["a"])(i,o,u,!1,null,null,null),s=c.exports,f=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home row"},[n("div",{staticClass:"menu col-xl-4 col-md-6"},[n("div",{staticClass:"menu-wrapper"},e._l(e.options,function(t,r){return n("div",{key:r,staticClass:"menu-option"},[e._v("\n          "+e._s(t)+"\n      ")])}),0)]),e._m(0)])},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("video",{staticClass:"background-video",attrs:{autoplay:"",loop:""}},[r("source",{attrs:{src:n("78cf"),type:"video/webm"}})])}],d={name:"home",data:function(){return{options:["Anime","Movies","Music","Games","Projects","Things","About","And Stuff"]}}},v=d,m=(n("68f9"),Object(a["a"])(v,l,p,!1,null,"3e97380a",null)),b=m.exports;r["a"].use(f["a"]);var h=new f["a"]({mode:"history",routes:[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});n("4989"),n("ab8b");r["a"].config.productionTip=!1,new r["a"]({router:h,render:function(e){return e(s)}}).$mount("#app")},"64a9":function(e,t,n){},"68f9":function(e,t,n){"use strict";var r=n("f7f8"),o=n.n(r);o.a},"78cf":function(e,t,n){e.exports=n.p+"media/hero.9c648db4.webm"},f7f8:function(e,t,n){}});
//# sourceMappingURL=app.fd5d2015.js.map
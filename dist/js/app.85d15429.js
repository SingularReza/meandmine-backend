(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1fdab5cd":"bd0ad32e","chunk-2d22d746":"256d4e45","chunk-514b4f6e":"01bc4286","chunk-7e4c5438":"0e72fd7b"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-1fdab5cd":1,"chunk-514b4f6e":1,"chunk-7e4c5438":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1fdab5cd":"44806444","chunk-2d22d746":"31d6cfe0","chunk-514b4f6e":"5a3dc2d6","chunk-7e4c5438":"f9fcd908"}[t]+".css",s=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}s[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0a9f":function(t,e,n){},"12d4":function(t,e,n){},"18eb":function(t,e,n){},"3f4a":function(t,e,n){"use strict";n("5df3"),n("1c4c"),n("ac6a");var a=n("bc3a"),r=n.n(a),s=r.a.create({baseURL:"http://gudnight.me/"});e["a"]={getArticle:function(t){return s.get("/article/"+t)},createArticle:function(t){var e=new FormData;for(var n in t)"images"!=n&&"tags"!=n&&e.append(n,t[n]);return e.append("tags",JSON.stringify(t.tags)),Array.from(t.images).forEach(function(t){e.append("images",t)}),s.post("/article/create",e,{headers:{"Content-Type":"multipart/form-data"}})},login:function(t){return s.post("/login",t)},getArticleList:function(){return s.get("/blog/list")},createUpdate:function(t){var e=new FormData;for(var n in t)e.append(n,t[n]);return s.post("/update/create",e,{headers:{"Content-Type":"multipart/form-data"}})},getLatestUpdates:function(){return s.get("/updates/latest")},getLatestArticles:function(){return s.get("/articles/latest")}}},5344:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),n("router-view"),n("myfooter")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"nav-wrapper container row"},[n("div",{staticClass:"centered site-name col-3 col-md-2",on:{click:function(e){return t.changeRoute("/")}}},[t._v("Oyasumi")]),n("div",{staticClass:"site-options row col-md-5"},t._l(t.options,function(e,a){return n("div",{key:a,staticClass:"centered col",on:{click:function(n){return t.changeRoute(e.path)}}},[t._v(t._s(e.name))])}),0),n("div",{staticClass:"site-menu row col-3 offset-6 col-md-1 offset-md-4"},[n("magnify",{staticClass:"search-icon"}),n("menu-icon",{staticClass:"menu-icon",on:{click:function(e){t.sidemenu=!t.sidemenu}}})],1)]),n("transition",{attrs:{name:"slide"}},[t.sidemenu?n("div",{staticClass:"side-menu"},[n("div",{staticClass:"side-options row"},t._l(t.options,function(e,a){return n("div",{key:a,staticClass:"col-12",on:{click:function(n){return t.changeRoute(e.path)}}},[t._v(t._s(e.name))])}),0)]):t._e()])],1)},o=[],c=n("8aa8"),u=n("bbc4"),l={name:"navbar",components:{MenuIcon:c["a"],magnify:u["a"]},data:function(){return{sidemenu:!1,options:[{name:"Blog",path:"/blog"},{name:"News",path:"/news"},{name:"Resources",path:"/resources"},{name:"Works",path:"/works"},{name:"About me",path:"/"}]}},methods:{changeRoute:function(t){this.$router.push(t),this.sidemenu=!1}}},d=l,f=(n("8403"),n("2877")),p=Object(f["a"])(d,i,o,!1,null,"61974e17",null),m=p.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-wrapper centered"},[t._v("\n  © SingularReza 2019-"),n("br"),t._v("\n  Site in work\n")])}],g={name:"myfooter"},b=g,y=(n("944e"),Object(f["a"])(b,h,v,!1,null,"386113d6",null)),_=y.exports,w={name:"App",components:{navbar:m,myfooter:_}},k=w,C=(n("034f"),Object(f["a"])(k,r,s,!1,null,null,null)),x=C.exports,A=n("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home row"},[t._m(0),a("video",{staticClass:"background-video",attrs:{muted:"",autoplay:"",loop:""},domProps:{muted:!0}},[a("source",{attrs:{src:n("78cf"),type:"video/webm"}})]),t._m(1),a("div",{staticClass:"latest col-12 row"},[t._m(2),a("div",{staticClass:"latest-content centered col-md-9"},[Object.keys(t.latestArticles).length>0?a("flickity",{ref:"flickity",staticClass:"slider",attrs:{options:t.flickityOptions}},t._l(t.latestArticles,function(t,e){return a("div",{key:e,staticClass:"info-card centered carousel-cell"},[a("card",{attrs:{title:t.title,image:t.titleImage,tags:t.tags,text:t.pretext}})],1)}),0):t._e()],1)]),a("div",{staticClass:"miscellaneous col-12 row"},[a("div",{staticClass:"miscellaneous-content centered col-md-9 row"},t._l(t.latestUpdates,function(t,e){return a("div",{key:e,staticClass:"update col-12"},[a("update",{attrs:{"update-data":t}})],1)}),0),t._m(3)])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-title col-12 col-md-6"},[n("div",[n("span",{staticClass:"title"},[t._v("Oyasumi")]),n("span",{staticClass:"subtitle"},[t._v("Just a Blog")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-me col-12 row"},[n("div",{staticClass:"about-content centered col-md-9"},[t._v("\n      A goofy but a mostly silent weeb and xenophiliac, who likes tech, internet culture, humanities, worldbuilding and everything weird.\n      Read a shit ton of books on topics ranging from grand stories set in imaginary universes to theological debates about\n      effects of Platonism on modern ethics to trashy xianxia webnovels with overpowered MCs. My usual form of entertainment is critically analysing things I gain\n      the entertainment from. Mostly listens to animusic and OSTs, but usually forays into different genres (because of osu!). Likes simulation, rpg or strategy games\n      (mobile gaming is trash by the way). I am a free interent enthusiast and always try to self host things as much as possible.\n      As far as politics is considered, stauchly classic liberal (or libertarian as known in the US).\n      "),n("br"),t._v("\n      I am available on discord at Chandandharana #8314\n    ")]),n("div",{staticClass:"about-title centered order-first order-md-0 col-md-3"},[n("h3",[t._v("About")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"latest-title centered col-md-3"},[n("h3",[t._v("Latest")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"miscellaneous-title centered order-first order-md-0 col-md-3"},[n("h3",[t._v("Things")])])}],j=n("3f4a"),S=n("ae8d"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-wrapper row"},[n("div",{staticClass:"image-wrapper col-2"},[t.imageUrl?n("img",{staticClass:"updateImage",attrs:{src:t.imageUrl}}):t._e()]),n("div",{staticClass:"content-wrapper col-10"},[n("div",{staticClass:"title-wrapper"},[n("span",{staticClass:"title"},[t._v(t._s(t.updateData.title))]),n("span",{staticClass:"date"},[t._v(t._s(t.timeSince(new Date(t.updateData.date)))+" ago")])]),n("div",{staticClass:"text-wrapper"},[t._v(t._s(t.updateData.text))])])])},T=[],I=(n("4917"),n("a481"),{name:"update",props:["updateData"],computed:{imageUrl:function(){return"http://gudnight.me/"+this.updateData.image}},methods:{timeSince:function(t){var e=new Date,n=(e.getTime()-t.getTime())/1e3;return n<60?parseInt(n)+" s":n<3600?parseInt(n/60)+" m":n<=86400?parseInt(n/3600)+" h":n>86400?(day=t.getDate(),month=t.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ",""),year=t.getFullYear()==e.getFullYear()?"":" "+t.getFullYear(),day+" "+month+year):void 0}}}),$=I,L=(n("a27c"),Object(f["a"])($,D,T,!1,null,"8afb9414",null)),P=L.exports,U=n("b394"),M={name:"home",components:{card:S["a"],update:P,Flickity:U["a"]},data:function(){return{flickityOptions:{initialIndex:3,prevNextButtons:!1,pageDots:!1,wrapAround:!0,autoPlay:!0},latestArticles:[],latestUpdates:[]}},methods:{},mounted:function(){var t=this;j["a"].getLatestUpdates().then(function(e){t.latestUpdates=e.data})},beforeMount:function(){var t=this;j["a"].getLatestArticles().then(function(e){t.latestArticles=e.data})}},N=M,R=(n("5bce"),Object(f["a"])(N,O,E,!1,null,"0657a9eb",null)),F=R.exports;a["a"].use(A["a"]);var B=new A["a"]({mode:"history",routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/article/:id",name:"article",component:function(){return n.e("chunk-7e4c5438").then(n.bind(null,"fd3f"))},props:!0},{path:"/editor",name:"editor",component:function(){return n.e("chunk-1fdab5cd").then(n.bind(null,"49d7"))}},{path:"/blog",name:"blog",component:function(){return n.e("chunk-514b4f6e").then(n.bind(null,"1a33"))}},{path:"/news",name:"news",component:function(){return n.e("chunk-514b4f6e").then(n.bind(null,"1a33"))}},{path:"/resources",name:"resources",component:function(){return n.e("chunk-514b4f6e").then(n.bind(null,"1a33"))}},{path:"/works",name:"works",component:function(){return n.e("chunk-514b4f6e").then(n.bind(null,"1a33"))}}]});n("d48d"),n("4989"),n("ab8b");a["a"].config.productionTip=!1,new a["a"]({router:B,render:function(t){return t(x)}}).$mount("#app")},"5bce":function(t,e,n){"use strict";var a=n("c296"),r=n.n(a);r.a},"64a9":function(t,e,n){},"78cf":function(t,e,n){t.exports=n.p+"media/hero.9c648db4.webm"},8403:function(t,e,n){"use strict";var a=n("5344"),r=n.n(a);r.a},"944e":function(t,e,n){"use strict";var a=n("18eb"),r=n.n(a);r.a},a27c:function(t,e,n){"use strict";var a=n("0a9f"),r=n.n(a);r.a},ae8d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-wrapper row"},[n("div",{staticClass:"title-wrapper col-12",style:{background:"url("+t.cardImage+")"}},[t._v(t._s(t.title))]),n("div",{staticClass:"tags-wrapper col-12"},[n("div",{staticClass:"tags"},[t._v("\n        |"),t._l(t.tags,function(e,a){return n("span",{key:a},[t._v(" "+t._s(e)+" |")])})],2)]),n("div",{staticClass:"subtext col-12"},[t._v(t._s(t.text))])])},r=[],s={name:"card",props:["title","text","tags","image","date"],computed:{cardImage:function(){return"http://1227.0.0.1:3300/"+this.image}}},i=s,o=(n("bff1"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,"697e1a01",null);e["a"]=c.exports},bff1:function(t,e,n){"use strict";var a=n("12d4"),r=n.n(a);r.a},c296:function(t,e,n){}});
//# sourceMappingURL=app.85d15429.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61a100ed"],{"19f8":function(t,e,s){"use strict";var i=s("94d8"),a=s.n(i);a.a},"1a33":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view-wrapper"},[i("video",{staticClass:"background-video",attrs:{muted:"",autoplay:"",loop:""},domProps:{muted:!0}},[i("source",{attrs:{src:s("78cf"),type:"video/webm"}})]),"blog"==t.path?i("div",[i("titlecard",{attrs:{title:"Blog",text:"All things that are worth an article or two"}}),i("div",{staticClass:"blog-list row"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"info-card col-12 col-sm-6 col-md-3",on:{click:function(s){return t.pushRoute(e._id)}}},[i("card",{key:s,attrs:{title:e.title,text:e.subtext,image:e.titleImage}})],1)}),0)],1):"news"==t.path?i("div",[i("titlecard",{attrs:{title:"Updates",text:"What's happening?"}}),i("div",{staticClass:"blog-list row"},t._l(t.list,function(t,e){return i("div",{key:e,staticClass:"info-card col-3"},[i("card",{key:e,attrs:{title:t.title,text:t.subtext}})],1)}),0)],1):"resources"==t.path?i("div",[i("titlecard",{attrs:{title:"Resources",text:"Useful Things"}}),i("div",{staticClass:"blog-list row"},t._l(t.list,function(t,e){return i("div",{key:e,staticClass:"info-card col-3"},[i("card",{key:e,attrs:{title:t.title,text:t.subtext}})],1)}),0)],1):"works"==t.path?i("div",[i("titlecard",{attrs:{title:"Works",text:"Feels good to create, heh?"}}),i("div",{staticClass:"blog-list row"},t._l(t.list,function(t,e){return i("div",{key:e,staticClass:"info-card col-3"},[i("card",{key:e,attrs:{title:t.title,text:t.subtext}})],1)}),0)],1):t._e()])},a=[],l=(s("7f7f"),s("3f4a")),r=s("ae8d"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-card"},[s("div",{staticClass:"card-fill"}),s("div",{staticClass:"card-title"},[s("div",{staticClass:"title-wrapper row"},[s("div",{staticClass:"title col-xs-12 col-md-5"},[s("h1",[t._v(t._s(t.title))])]),s("div",{staticClass:"sub-text col-xs-12 col-md-6"},[s("h3",[t._v(t._s(t.text))])])])])])},o=[],n={name:"titleCard",props:["title","text"]},d=n,u=(s("f14c"),s("2877")),f=Object(u["a"])(d,c,o,!1,null,"a1beda6a",null),v=f.exports,p={name:"list",components:{card:r["a"],titlecard:v},data:function(){return{list:null}},computed:{path:function(){return this.$route.name}},methods:{pushRoute:function(t){this.$router.push("/article/"+t)}},beforeMount:function(){var t=this;l["a"].getArticleList().then(function(e){t.list=e.data})}},h=p,w=(s("19f8"),Object(u["a"])(h,i,a,!1,null,"f687c24e",null));e["default"]=w.exports},"94d8":function(t,e,s){},"9f7f":function(t,e,s){},f14c:function(t,e,s){"use strict";var i=s("9f7f"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-61a100ed.158573ff.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e4c5438"],{e28b:function(t,e,a){"use strict";var i=a("e9d3"),s=a.n(i);s.a},e9d3:function(t,e,a){},fd3f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[a("div",{staticClass:"title-card"},[a("div",{staticClass:"card-fill",style:{background:"linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("+t.titleImageUrl+")"}}),a("div",{staticClass:"card-title"},[a("div",{staticClass:"title-wrapper row",style:{backgroundImage:"url("+t.titleImageUrl+")"}},[a("div",{staticClass:"title col-xs-12 col-md-5"},[t._v(t._s(t.article.title))]),a("div",{staticClass:"sub-text col-xs-12 col-md-6"},[t._v(t._s(t.article.subtext))])])])]),a("div",{staticClass:"article-content"},[a("div",{staticClass:"article-tags"},[a("div",{staticClass:"tags"},[t._v("\n        |"),t._l(t.article.tags,function(e,i){return a("span",{key:i},[t._v(" "+t._s(e)+" |")])})],2),a("hr")]),a("div",{staticClass:"article-pretext"}),a("div",{staticClass:"article-text",domProps:{innerHTML:t._s(t.article.content)}})])])},s=[],l=a("3f4a"),c={name:"blog",props:["id"],data:function(){return{article:{title:"",titleImage:"images/test.jpg",subtext:"",pretext:"",tags:[],content:"",images:null,date:new Date}}},computed:{titleImageUrl:function(){return"http://127.0.0.1:3300/"+this.article.titleImage}},methods:{},mounted:function(){var t=this;l["a"].getArticle(this.id).then(function(e){t.article=e.data})}},r=c,n=(a("e28b"),a("2877")),d=Object(n["a"])(r,i,s,!1,null,"99bdbb4a",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7e4c5438.0e72fd7b.js.map
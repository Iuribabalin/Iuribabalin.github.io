(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d709e7d0"],{"11f3":function(t,e,o){},"8c5d":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("upper"),o("h1",[t._v("Мои посты:")]),0!=t.posts.length?o("div",t._l(t.posts,(function(t){return o("post",{key:t.members,attrs:{post_title:t.title,post_text:t.text,post_members:t.members,post_time:t.time}})})),1):o("div",[o("h1",[t._v("Постов не найдено")])]),o("div",{attrs:{id:"footer"}},[o("downer")],1)],1)},n=[],a=o("8298"),i=o("7fea"),c=o("a07a"),r=o("fbd7"),u=o("2b0e"),p=o("bc3a"),d=o.n(p),l={name:"mePosts",components:{FilterCard:r["a"],Post:c["a"],upper:a["a"],downer:i["a"]},data:function(){return{posts:[]}},methods:{checkLog:function(){"false"===u["a"].$cookies.get("FlagLog")&&this.$router.push("/main")},getPosts:function(){var t=this,e={login:u["a"].$cookies.get("login")};d()({method:"post",url:"https://ict-tagall.herokuapp.com/api/aunt/getinfo",data:e}).then((function(e){t.posts=e.data.posts,console.log(t.posts)}))["catch"]((function(t){}))}},mounted:function(){this.checkLog(),this.getPosts()}},f=l,h=(o("9962"),o("2877")),m=Object(h["a"])(f,s,n,!1,null,"78a24e66",null);e["default"]=m.exports},9962:function(t,e,o){"use strict";o("11f3")}}]);
//# sourceMappingURL=chunk-d709e7d0.541b2bb4.js.map
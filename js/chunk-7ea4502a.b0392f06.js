(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ea4502a"],{"0c18":function(t,e,i){},1701:function(t,e,i){"use strict";i("f6ac")},"2b27":function(t,e,i){(function(){var e={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},i={install:function(t){t.prototype.$cookies=this,t.$cookies=this},config:function(t,i,r,o,n){e.expires=t||"1d",e.path=i?"; path="+i:"; path=/",e.domain=r?"; domain="+r:"",e.secure=o?"; Secure":"",e.sameSite=n?"; SameSite="+n:"; SameSite=Lax"},get:function(t){var e=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(e&&"{"===e.substring(0,1)&&"}"===e.substring(e.length-1,e.length))try{e=JSON.parse(e)}catch(i){return e}return e},set:function(t,i,r,o,n,a,s){if(!t)throw new Error("Cookie name is not find in first argument.");if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(t))throw new Error('Cookie key name illegality, Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]\t current key name: '+t);i&&i.constructor===Object&&(i=JSON.stringify(i));var c="";if(r=void 0==r?e.expires:r,r&&0!=r)switch(r.constructor){case Number:c=r===1/0||-1===r?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+r;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(r)){var l=r.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(r.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":c="; max-age="+2592e3*+l;break;case"d":c="; max-age="+86400*+l;break;case"h":c="; max-age="+3600*+l;break;case"min":c="; max-age="+60*+l;break;case"s":c="; max-age="+l;break;case"y":c="; max-age="+31104e3*+l;break;default:new Error('unknown exception of "set operation"')}}else c="; expires="+r;break;case Date:c="; expires="+r.toUTCString();break}return document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(i)+c+(n?"; domain="+n:e.domain)+(o?"; path="+o:e.path)+(void 0==a?e.secure:a?"; Secure":"")+(void 0==s?e.sameSite:s?"; SameSite="+s:""),this},remove:function(t,i,r){return!(!t||!this.isKey(t))&&(document.cookie=encodeURIComponent(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(r?"; domain="+r:e.domain)+(i?"; path="+i:e.path)+"; SameSite=Lax",this)},isKey:function(t){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var t=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),e=0;e<t.length;e++)t[e]=decodeURIComponent(t[e]);return t}};t.exports=i,"undefined"!==typeof window&&(window.$cookies=i)})()},"4bd4":function(t,e,i){"use strict";var r=i("5530"),o=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("d3b7"),i("159b"),i("7db0"),i("58df")),n=i("7e2b"),a=i("3206");e["a"]=Object(o["a"])(n["a"],Object(a["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(o){o&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=i(t)))})):r.valid=i(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"5e99":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"no-gutters"},[r("v-col",{attrs:{cols:"max"}},[r("InputBlock")],1),r("v-col",{attrs:{cols:"5"}},[r("v-img",{staticStyle:{padding:"30px",background:"#000000",border:"10px solid #000000"},attrs:{src:i("8e57"),height:t.height}})],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticStyle:{"margin-top":"5%"},attrs:{width:"70%",rounded:"0",elevation:"0"}},[i("v-card",{staticStyle:{"margin-left":"10%","margin-top":"3%"},attrs:{color:"#C2D3EF",width:"190px",height:"60px",elevation:"0",rounded:"0"}},[i("v-card-text",[i("p",{staticStyle:{"font-family":"'Century Gothic',serif","font-size":"35px",color:"black",margin:"3% auto auto 4%"}},[t._v(" Tips&Bills ")])])],1),i("div",{staticStyle:{"margin-left":"10%"}},[i("p",{staticStyle:{"font-family":"'Century Gothic',serif","font-size":"35px",color:"black","margin-left":"10%","margin-top":"10%"}},[t._v(" Добро пожаловать! ")]),i("p",{staticStyle:{"font-family":"'Century Gothic',serif","font-size":"25px",color:"black","margin-left":"10%","margin-top":"1%"}},[t._v(" Вы входите в личный кабинет своей огранизации ")]),i("v-form",{staticStyle:{"margin-left":"15%"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("p",{staticStyle:{"font-family":"'Century Gothic',serif","font-size":"24px",color:"black","margin-top":"8%"}},[t._v(" Ваше имя пользователя ")]),i("v-text-field",{attrs:{"error-messages":t.loginErrors,placeholder:"      Имя пользователя"},on:{input:function(e){return t.$v.login.$touch()},blur:function(e){return t.$v.login.$touch()}},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}}),i("p",{staticStyle:{"font-family":"'Century Gothic',serif","font-size":"24px",color:"black","margin-top":"5%"}},[t._v(" Ваш пороль ")]),i("v-text-field",{attrs:{"append-icon":t.eyeFlag?"mdi-eye":"mdi-eye-off",type:t.eyeFlag?"text":"password","error-messages":t.passwordErrors,placeholder:"      Пароль"},on:{"click:append":function(e){t.eyeFlag=!t.eyeFlag},input:function(e){return t.$v.password.$touch()},blur:function(e){return t.$v.password.$touch()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-btn",{staticStyle:{"font-family":"'Century Gothic',serif","font-size":"30px","margin-left":"10%",color:"black","margin-top":"3%","margin-bottom":"70px"},attrs:{color:"#C2D3EF","x-large":"",elevation:"0",width:"60%",height:"90px"},on:{click:function(e){return t.submit()}}},[t._v(" Войти в систему ")]),t.errorFlag?i("v-alert",{attrs:{type:"error"}},[t._v(" "+t._s(t.errorText)+" ")]):t._e()],1),i("div",[i("p",{staticStyle:{"font-family":"'Century Gothic',serif","font-size":"24px",color:"black","margin-top":"6%","margin-left":"10%"}},[t._v(" Техническая поддержка ")]),i("p",{staticStyle:{"font-family":"'Century Gothic',serif","font-size":"24px",color:"black","margin-left":"10%","line-height":"0.1"}},[t._v(" +7 (9XX) XXX-XX-XX ")])])],1)},a=[],s=(i("d3b7"),i("25f0"),i("1dce")),c=i("b5ae"),l=i("bc3a"),u=i.n(l),d=i("2b27"),h=i.n(d),p=i("a18c"),f={mixins:[s["validationMixin"]],validations:{password:{required:c["required"]},login:{required:c["required"]}},name:"InputBlock",data:function(){return{eyeFlag:!1,password:"",login:"",valid:!1,errorFlag:!1,errorText:""}},computed:{loginErrors:function(){var t=[];return this.$v.login.$dirty?(!this.$v.login.required&&t.push("Поле не может быть пустым"),t):t},passwordErrors:function(){var t=[];return this.$v.password.$dirty?(!this.$v.password.required&&t.push("Поле не может быть пустым"),t):t}},methods:{submit:function(){var t=this;if(this.$v.$touch(),this.valid&&""!==this.login&&""!==this.password){console.log(this.phone);var e={username:this.login,password:this.password};u.a.create({baseURL:"https://tipsnbills.herokuapp.com/"}).post("/api/auth/signin",e).then((function(e){console.log(e.data.token),h.a.set("token",e.data.token?e.data.token.toString():"","10h"),t.errorFlag=!1,p["a"].push({path:"/admin/statistic"})})).catch((function(e){t.errorFlag=!0,t.errorText=e.response.data.message}))}}}},m=f,g=(i("1701"),i("2877")),v=i("6544"),b=i.n(v),y=i("5530"),x=i("ade3"),w=(i("caad"),i("0c18"),i("10d2")),$=i("afdd"),k=i("9d26"),_=i("f2e7"),C=i("7560"),S=i("2b0e"),B=S["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),E=i("58df"),I=i("d9bd"),V=Object(E["a"])(w["a"],_["a"],B).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(x["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement($["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(k["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(k["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(y["a"])(Object(y["a"])({},w["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||C["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(I["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),O=i("8336"),T=i("b0af"),F=i("99d9"),j=i("4bd4"),z=i("8654"),R=Object(g["a"])(m,n,a,!1,null,"12f82efc",null),G=R.exports;b()(R,{VAlert:V,VBtn:O["a"],VCard:T["a"],VCardText:F["b"],VForm:j["a"],VTextField:z["a"]});var A={name:"Auth",components:{InputBlock:G},data:function(){return{height:0}},methods:{updateWidth:function(){this.height=window.innerHeight}},created:function(){window.addEventListener("resize",this.updateWidth),this.updateWidth()}},U=A,X=i("62ad"),D=i("adda"),L=i("0fd9"),q=Object(g["a"])(U,r,o,!1,null,"bf9bc898",null);e["default"]=q.exports;b()(q,{VCol:X["a"],VImg:D["a"],VRow:L["a"]})},"8e57":function(t,e,i){t.exports=i.p+"img/img5.9468878a.jpg"},afdd:function(t,e,i){"use strict";var r=i("8336");e["a"]=r["a"]},f6ac:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7ea4502a.b0392f06.js.map
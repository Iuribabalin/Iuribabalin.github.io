(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af49c"],{"0e4e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"no-gutters"},[a("v-col",{attrs:{cols:"2 "}},[a("NavigationBarLeft")],1),a("v-col",{attrs:{cols:"max"}},[a("ProfileBar"),a("InfoComponent")],1)],1)},i=[],r=a("2b27"),s=a.n(r),o=a("1dbd"),l=a("c325"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"rounded-0",staticStyle:{"font-family":"'Century Gothic',serif","font-size":"30px"},attrs:{elevation:"0"}},[a("v-row",[a("v-col",[a("v-row",{staticStyle:{"margin-top":"5%"}},[a("v-col",{staticStyle:{"margin-left":"20%"}},[a("p",[t._v("Человек оставивших")]),a("p",[t._v("отзыв:")])]),a("v-col",[a("p",{staticStyle:{"font-size":"50px"}},[t._v(" "+t._s(t.num)+" ")])])],1)],1),a("v-col",[a("v-row",{staticStyle:{"margin-top":"5%"}},[a("v-col",[a("p",[t._v("Фиксированный процент")]),a("p",[t._v("от чаевых::")])]),a("v-col",[a("p",{staticStyle:{"font-size":"50px"}},[t._v(" "+t._s(t.fix)+" ")])])],1)],1)],1),a("v-row",[a("v-col",[a("v-row",[a("v-col",{staticStyle:{"margin-left":"20%"}},[a("p",[t._v("Человек оставивших")]),a("p",[t._v("отзыв:")])]),a("v-col",[a("p",{staticStyle:{"font-size":"50px"}},[t._v(" "+t._s(t.num)+" ")])])],1)],1),a("v-col",[a("v-row",[a("v-col",[a("p",[t._v("Фиксированный процент")]),a("p",[t._v("от чаевых::")])]),a("v-col",[a("p",{staticStyle:{"font-size":"50px"}},[t._v(" "+t._s(t.fix)+" ")])])],1)],1)],1),a("v-row",[a("v-card",{staticClass:"rounded-0",staticStyle:{"margin-left":"10%","margin-top":"5%"},attrs:{width:"70%",elevation:"0"}},[a("p",{staticStyle:{color:"black","font-family":"'Century Gothic',serif","font-size":"35px","text-align":"center"}},[t._v(" Сотрудникии организации ")]),a("v-sparkline",{attrs:{value:t.value,gradient:t.gradient,smooth:t.radius||!1,padding:t.padding,"line-width":t.width,"stroke-linecap":t.lineCap,"gradient-direction":t.gradientDirection,type:t.type,"auto-draw":"",labels:t.labels}})],1)],1)],1)},c=[],u=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],d={name:"InfoComponent",data:function(){return{num:14,fix:3,width:2,radius:10,padding:8,lineCap:"round",gradient:u[5],value:[0,2,5,9,5,10,3,5],labels:["12am","3am","6am","9am","12pm","3pm","6pm","9pm"],gradientDirection:"top",gradients:u,fill:!1,type:"trend",autoLineWidth:!1}}},f=d,p=a("2877"),m=a("6544"),g=a.n(m),y=a("b0af"),v=a("62ad"),b=a("0fd9"),x=a("5530"),w=a("53ca"),_=(a("a9e3"),a("caad"),a("d81d"),a("cb29"),a("d3b7"),a("25f0"),a("99af"),a("fb6a"),a("a9ad")),S=a("58df"),L=a("2909");function k(t,e){var a=e.minX,n=e.maxX,i=e.minY,r=e.maxY,s=t.length,o=Math.max.apply(Math,Object(L["a"])(t)),l=Math.min.apply(Math,Object(L["a"])(t)),h=(n-a)/(s-1),c=(r-i)/(o-l||1);return t.map((function(t,e){return{x:a+e*h,y:r-(t-l)*c,value:t}}))}function M(t,e){var a=e.minX,n=e.maxX,i=e.minY,r=e.maxY,s=t.length,o=Math.max.apply(Math,Object(L["a"])(t)),l=Math.min.apply(Math,Object(L["a"])(t));l>0&&(l=0),o<0&&(o=0);var h=n/s,c=(r-i)/(o-l||1),u=r-Math.abs(l*c);return t.map((function(t,e){var n=Math.abs(c*t);return{x:a+e*h,y:u-n+ +(t<0)*n,height:n,value:t}}))}a("a15b");function $(t){return parseInt(t,10)}function D(t,e,a){return $(t.x+a.x)===$(2*e.x)&&$(t.y+a.y)===$(2*e.y)}function z(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function C(t,e,a){var n={x:t.x-e.x,y:t.y-e.y},i=Math.sqrt(n.x*n.x+n.y*n.y),r={x:n.x/i,y:n.y/i};return{x:e.x+r.x*a,y:e.y+r.y*a}}function W(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,i=t.shift(),r=t[t.length-1];return(a?"M".concat(i.x," ").concat(n-i.x+2," L").concat(i.x," ").concat(i.y):"M".concat(i.x," ").concat(i.y))+t.map((function(a,n){var r=t[n+1],s=t[n-1]||i,o=r&&D(r,a,s);if(!r||o)return"L".concat(a.x," ").concat(a.y);var l=Math.min(z(s,a),z(r,a)),h=l/2<e,c=h?l/2:e,u=C(s,a,c),d=C(r,a,c);return"L".concat(u.x," ").concat(u.y,"S").concat(a.x," ").concat(a.y," ").concat(d.x," ").concat(d.y)})).join("")+(a?"L".concat(r.x," ").concat(n-i.x+2," Z"):"")}var E=Object(S["a"])(_["a"]).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,a=e.length,n=0;t.length<a;n++){var i=e[n],r=this.labels[n];r||(r="object"===Object(w["a"])(i)?i.value:i),t.push({x:i.x,value:String(r)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"===typeof t?t:t.value}))},_values:function(){return"trend"===this.type?k(this.normalizedValues,this.boundary):M(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var e=t.$refs.path,a=e.getTotalLength();t.fill?(e.style.transformOrigin="bottom center",e.style.transition="none",e.style.transform="scaleY(0)",e.getBoundingClientRect(),e.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.transform="scaleY(1)"):(e.style.transition="none",e.style.strokeDasharray=a+" "+a,e.style.strokeDashoffset=Math.abs(a-(t.lastLength||0)).toString(),e.getBoundingClientRect(),e.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.strokeDashoffset="0"),t.lastLength=a}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,a=this.gradient.slice();a.length||a.push("");var n=Math.max(a.length-1,1),i=a.reverse().map((function(e,a){return t.$createElement("stop",{attrs:{offset:a/n,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},i)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=k(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:W(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,a=this.parsedLabels.map((function(a,n){return e.$createElement("text",{attrs:{x:a.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(a,n)])}));return this.genG(a)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=M(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,a,n){var i=this,r="number"===typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(n,"-clip")}},t.map((function(t){return i.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:a,height:t.height,rx:r,ry:r}},[i.autoDraw?i.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(i.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:Object(x["a"])(Object(x["a"])({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),B=Object(p["a"])(f,h,c,!1,null,"2138cc5c",null),V=B.exports;g()(B,{VCard:y["a"],VCol:v["a"],VRow:b["a"],VSparkline:E});var N=a("a18c"),j={name:"ProfileMain",components:{InfoComponent:V,ProfileBar:l["a"],NavigationBarLeft:o["a"]},methods:{checkToken:function(){""!==s.a.get("token")&&null!=s.a.get("token")||N["a"].push({path:"/admin"})}},beforeMount:function(){this.checkToken()}},O=j,Y=Object(p["a"])(O,n,i,!1,null,"7651ae01",null);e["default"]=Y.exports;g()(Y,{VCol:v["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-2d0af49c.0e3e0ec2.js.map
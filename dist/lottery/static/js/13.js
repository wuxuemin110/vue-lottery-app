webpackJsonp([13],{BhC1:function(t,e){},mJE3:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("GgDs"),i=r("4bOR"),n=r("d2gY"),s=r("EuEE"),c={data:function(){return{total:0,acount:0,red:[],blue:[],redarr:[],bluearr:[]}},created:function(){for(var t=[],e=[],r=1;r<36;r++){var a={active:!1};a.num=s.a.formatNum(r),t.push(a)}for(r=1;r<13;r++){var i={active:!1};i.num=s.a.formatNum(r),e.push(i)}this.red=t,this.blue=e,n.a.shakeAndRandom(this.randomSelect)},components:{Headers:a.a,Acount:i.a},methods:{check:function(t,e){switch(e){case 1:this.red[t].active=!this.red[t].active;break;case 2:this.blue[t].active=!this.blue[t].active}this.redarr=this.red.filter(function(t){return t.active}),this.bluearr=this.blue.filter(function(t){return t.active}),this.acount=n.a.math(this.redarr.length,5)*n.a.math(this.bluearr.length,2),this.total=2*this.acount},clear:function(){this.red=this.red.map(function(t){var e={};return e.num=t.num,e.active=!1,e}),this.blue=this.blue.map(function(t){var e={};return e.num=t.num,e.active=!1,e}),this.total=0,this.redarr=[],this.bluearr=[],this.acount=0},sure:function(){0!=this.total?(this.$store.dispatch("selectDlt",{red:this.redarr,blue:this.bluearr,zhu:this.acount,pric:this.total}),this.$router.push({path:"confirm",query:{type:"dlt"}})):this.randomSelect()},randomSelect:function(){this.clear();for(var t=n.a.random(35,5),e=0;e<t.length;e++){var r=t[e];this.red[r].active=!0}var a=n.a.random(12,2);for(e=0;e<a.length;e++){var i=a[e];this.blue[i].active=!0}this.redarr=this.red.filter(function(t){return t.active}),this.bluearr=this.blue.filter(function(t){return t.active}),this.acount=n.a.math(this.redarr.length,5)*n.a.math(this.bluearr.length,2),this.total=2*this.acount}},mounted:function(){this.$root.eventHub.$on("dltClear",this.clear),this.$root.eventHub.$on("dltBuy",this.sure)},destroyed:function(){this.$root.eventHub.$off("dltClear"),this.$root.eventHub.$off("dltBuy")}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{height:"100%"}},[r("Headers",{attrs:{title:"大乐透"}}),t._v(" "),r("div",{staticClass:"doubleColor"},[r("p",{staticClass:"dbc_index"},[t._v("第20180621期 19:40开奖")]),t._v(" "),t._m(0),t._v(" "),r("ul",[t._l(t.red,function(e,a){return r("li",{class:e.active?"check":"",on:{click:function(e){t.check(a,1)}}},[t._v(t._s(e.num))])}),t._v(" "),r("div",{staticStyle:{clear:"both"}})],2),t._v(" "),r("ul",[t._l(t.blue,function(e,a){return r("li",{class:e.active?"check":"",on:{click:function(e){t.check(a,2)}}},[t._v(t._s(e.num))])}),t._v(" "),r("div",{staticStyle:{clear:"both"}})],2)]),t._v(" "),r("Acount",{attrs:{total:t.total,acount:t.acount}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"dbc_tips"},[e("span",{staticClass:"shake"},[this._v("摇一摇机选")]),this._v("至少选择5个红球，2个蓝球")])}]};var h=r("VU/8")(c,u,!1,function(t){r("BhC1")},null,null);e.default=h.exports}});
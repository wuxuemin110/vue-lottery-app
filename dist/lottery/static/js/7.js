webpackJsonp([7],{IeYu:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArIAAAAUCAYAAABxo95aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowM0JFMUIxQTdBQTMxMUU4QUI1QzkxRDFCMUFDRDU3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowM0JFMUIxQjdBQTMxMUU4QUI1QzkxRDFCMUFDRDU3NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzQkUxQjE4N0FBMzExRThBQjVDOTFEMUIxQUNENTc1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAzQkUxQjE5N0FBMzExRThBQjVDOTFEMUIxQUNENTc1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FWAVMAAAAnpJREFUeNrs3U9LVFEcBuCjo7VTRIXKUMz2LqpF30LB3LuvbdEXCMptbf0Ahf2hr1EErRNRDBcqoqSCKXR+4zXkcgedi9UEzwMvzJw5cwfubF4O597btbS0lCpcyZkqcj/nRjEGAAB/2o+ctZwvOe9yPuQclid1VRTZ6ZwXObedQwAAOsC3nCc5b88Odp953ch5XkxQYgEA6BTRTReLrto4Hew5M+FZzmPnCQCADnXaVWN19veK7IwSCwDAf1Jmo7s298jGRVyxUfZmedbGxkZaXV1Nu7u76fj42GkDAOCPazQaqa+vL42NjaWhoaGqKd9zbsXWggdVJTYuAlteXnYmAQD4q2IBdXt7u5nx8fE0MTFRnjKSMxtbC6bKn2xubiqxAAD8c9FJY5dAhakosvfKoysrK84aAAAdIba6VrgbRfZaeTT2xAIAQCdo0U2vxx7ZeErC1ToHnZubS729vc4uAABtOzo6SgsLC7W/Hyuy6+XBuErsIvb39/0DAADUsre3d6F5LbrpehTZr+XR0dHRS/1xAACo2yVbdNNPUWTfl0eHh4ebtzo4jxVZAADqOjg4OHdOdNLophXeR5F9k7NW/iTu1zU5OZkGBgaaN6VVZAEAuEytVmSje0YHjS5acQ/ZEA9EeBNP9oo38VCE1+3+eH9/fxocHPQvAADQtq2trbSzs1Pnq7NRZLuLN7EqO9/uETy2FgCAump2yfmiu6buM4NPc14qsgAAdGiRfVV01lQusnGkRzkzOd8ucqS49xcAANTRRpeMbhpbYR8WnbWpp2LiYs7HYvJ0zp2ckZzeS2jRAABwXpf8mU4u6Pqc8y6dbCU4LE/6JcAAtcmpkudziTcAAAAASUVORK5CYII="},Rjxn:function(t,e){},h2NJ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("GgDs"),a=s("d2gY"),c=s("EuEE"),r={data:function(){return{items:[],qi:1,bei:1,zhu:"",total:0,type:"",typeName:""}},components:{Headers:i.a},created:function(){switch(this.type=this.$route.query.type,this.type){case"dlt":this.typeName="大乐透";break;case"dbc":this.typeName="双色球";break;case"fc":this.typeName="福彩";break;case"plt":this.typeName="排列三";break;case"plf":this.typeName="排列五";break;case"qxc":this.typeName="七星彩";break;case"qlc":this.typeName="七乐彩"}this.init()},methods:{init:function(){var t=0;this.items=this.$store.state[this.type].det,this.$store.state[this.type].det.forEach(function(e){t+=e.zhu}),this.zhu=t,this.total=this.zhu*this.qi*2*this.bei,this.$store.commit("UPDATE")},ziXaun:function(){switch(this.type){case"dlt":this.$router.push("/dlt");break;case"dbc":this.$router.push("/dbc");break;case"fc":this.$router.push("/fc");break;case"plt":this.$router.push("/plt");break;case"plf":this.$router.push("/plf");break;case"qxc":this.$router.push("/qxc");break;case"qlc":this.$router.push("/qlc")}},clearList:function(){switch(this.type){case"dlt":this.$store.dispatch("clearDlt");break;case"dbc":this.$store.dispatch("clearDbc");break;case"fc":this.$store.dispatch("clearFc");break;case"plt":this.$store.dispatch("clearPlt");break;case"plf":this.$store.dispatch("clearPlf");break;case"qxc":this.$store.dispatch("clearQxc");break;case"qlc":this.$store.dispatch("clearQlc")}this.init()},jiXuan:function(){switch(this.type){case"dlt":var t=a.a.random(35,5),e=a.a.random(12,2),s=t.map(function(t){var e={};return e.num=c.a.formatNum(t),e}),i=e.map(function(t){var e={};return e.num=c.a.formatNum(t),e});this.$store.dispatch("selectDlt",{red:s,blue:i,zhu:1,pric:2});break;case"dbc":var r=a.a.random(33,6),n=a.a.random(16,1),o=r.map(function(t){var e={};return e.num=c.a.formatNum(t),e}),h=n.map(function(t){var e={};return e.num=c.a.formatNum(t),e});this.$store.dispatch("selectDbc",{red:o,blue:h,zhu:1,pric:2});break;case"fc":var d=a.a.randomFromZero(10,3);this.$store.dispatch("selectFc",{type:1,zhu:1,pric:2,ge:[d[0]],shi:[d[1]],bai:[d[2]]});break;case"plt":var l=a.a.randomFromZero(10,3);this.$store.dispatch("selectPlt",{type:1,zhu:1,pric:2,ge:[l[0]],shi:[l[1]],bai:[l[2]]});break;case"plf":var p=a.a.randomFromZero(10,5);this.$store.dispatch("selectPlf",{type:1,zhu:1,pric:2,ge:[p[0]],shi:[p[1]],bai:[p[2]],qian:[p[3]],wan:[p[4]]});break;case"qxc":this.$store.dispatch("selectQxc",{pric:2,zhu:1,bwan:[a.a.random(10,1)],swan:[a.a.random(10,1)],wan:[a.a.random(10,1)],qian:[a.a.random(10,1)],bai:[a.a.random(10,1)],shi:[a.a.random(10,1)],ge:[a.a.random(10,1)]});break;case"qlc":for(var u=[],b=0;b<7;b++)u.push(a.a.random(10,1));this.$store.dispatch("selectQlc",{pric:2,zhu:1,nums:u})}this.init()},dele:function(t){switch(this.type){case"dlt":this.$store.dispatch("delDlt",{id:t});break;case"dbc":this.$store.dispatch("delDbc",{id:t});break;case"fc":this.$store.dispatch("delFc",{id:t});break;case"plt":this.$store.dispatch("delPlt",{id:t});break;case"plf":this.$store.dispatch("delPlf",{id:t});break;case"qxc":this.$store.dispatch("delQxc",{id:t});break;case"qlc":this.$store.dispatch("delQlc",{id:t})}this.init()},chage:function(){this.init()},confirm:function(){var t=this;0!=this.total&&this.$confirm("["+this.typeName+"]<br/> 第20180707期 <br/>共"+this.zhu+"注，您需要支付"+this.total+"元","投注确认",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0,dangerouslyUseHTMLString:!0}).then(function(){t.$message({type:"success",message:"购买成功!"})}).catch(function(){t.$message({type:"info",message:"已取消"})})}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("Headers",{attrs:{title:"确认投注"}}),t._v(" "),i("div",{staticClass:"confirm"},[i("div",{staticStyle:{height:"50px"}}),t._v(" "),i("ul",{staticClass:"confirm-opt"},[i("li",{on:{click:t.ziXaun}},[t._v("+自选一注")]),t._v(" "),i("li",{on:{click:t.jiXuan}},[t._v("+机选")]),t._v(" "),i("li",{on:{click:t.clearList}},[t._v("清空列表")])]),t._v(" "),t.items.length>0?i("div",{staticClass:"confirm-list"},[i("img",{attrs:{src:s("IeYu")}}),t._v(" "),i("ul",t._l(t.items,function(e){return i("li",[i("i",{staticClass:"delete_icon",on:{click:function(s){t.dele(e.id)}}}),t._v(" "),i("p",[t._v(t._s(e.number)+" ")]),t._v(" "),i("p",[t._v(t._s(1==e.type?"普通投注":2==e.type?"组三":"组六")+"\n                共"+t._s(e.zhu)+"注"+t._s(e.pric)+"元")])])})),t._v(" "),i("p",{staticClass:"xiy"},[t._v("我已阅读并同意《用户服务协议》")])]):i("h2",{staticStyle:{"text-align":"center"}},[t._v("\n        there is nothing!\n      ")])]),t._v(" "),i("div",{staticClass:"confirm_btm"},[i("div",[i("span",{staticClass:"tzz"},[t._v("投注站")]),i("p",[t._v("追 "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.qi,expression:"qi"}],attrs:{type:"text"},domProps:{value:t.qi},on:{input:[function(e){e.target.composing||(t.qi=e.target.value)},t.chage]}}),t._v(" 期"),i("span",{staticStyle:{color:"#ddd",margin:"0 0.1rem"}},[t._v("|")]),t._v("投 "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bei,expression:"bei"}],attrs:{type:"text"},domProps:{value:t.bei},on:{input:[function(e){e.target.composing||(t.bei=e.target.value)},t.chage]}}),t._v(" 倍")])]),t._v(" "),i("div",[i("p",[t._v(t._s(t.zhu)),i("span",[t._v("注")]),t._v(t._s(t.qi)),i("span",[t._v("期")]),t._v(t._s(t.bei)),i("span",[t._v("倍")]),t._v(" 共"+t._s(t.total)+"元")]),i("button",{on:{click:t.confirm}},[t._v("下一步")])])])],1)},staticRenderFns:[]};var o=s("VU/8")(r,n,!1,function(t){s("Rjxn")},null,null);e.default=o.exports}});
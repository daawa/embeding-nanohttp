webpackJsonp([15],{1017:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-answerList"},[t.answerList.length>0?a("ul",t._l(t.displayList,function(e){return a("li",{staticClass:"m-answer"},[a("router-link",{attrs:{to:"/answer/"+e.id}},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"content"},[t._v(t._s(e.authorName)+"："+t._s(e.content))]),e.images.length>0?a("div",{staticClass:"images"},[t._l(e.displayImages,function(t){return a("img",{attrs:{src:t}})}),e.images.length>3?a("span",{staticClass:"moreimg"}):t._e()],2):t._e()]),a("div",{staticClass:"data"},[a("div",{staticClass:"u-praise",on:{click:t.callApp}},[t._v(t._s(e.praisedCount||"0"))])])],1)})):t._e()])},staticRenderFns:[]}},1035:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-repoList"},[t.repoList.length>0?a("ul",t._l(t.list,function(e){return a("li",[a("router-link",{attrs:{to:"/repo/"+e.id}},[a("div",{staticClass:"m-repo"},[a("img",{attrs:{src:e.imageUrl}}),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"user"},[a("img",{staticClass:"avatar",attrs:{src:e.author.avatarUrl}}),a("div",{staticClass:"name"},[t._v(t._s(e.author.nickname))]),a("div",{staticClass:"scan"},[t._v(t._s(e.readCount))])])])])])],1)})):t._e()])},staticRenderFns:[]}},419:function(t,e,a){function r(t){a(716)}var s=a(31)(a(670),a(934),r,"data-v-26a47900",null);t.exports=s.exports},429:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(44),n=r(s),i=a(432),o=r(i),u=null,l=function(){if(u)return u;var t=n.default.extend(o.default);return u=new t({el:document.createElement("div")}),document.body.appendChild(u.$el),u};e.default=function(t){var e=l();e.message="string"==typeof t?t:t.message;var a=document.getElementById("main");e.marginTop=(a&&a.offsetTop/75||0)+"rem";var r=t.duration||1400,s=t.callback;return clearTimeout(e.timer),e.visible=!0,e.timer=setTimeout(function(){e.visible=!1,s&&s()},r+250),e}},430:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{message:{type:String,default:""},marginTop:{type:String,default:"0"}},computed:{content:function(){return this.message.replace(/\n/g,"<br/>")}},data:function(){return{visible:!1}}}},431:function(t,e){},432:function(t,e,a){function r(t){a(431)}var s=a(31)(a(430),a(433),r,"data-v-1f604b81",null);t.exports=s.exports},433:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"ease"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"toast",style:{marginTop:t.marginTop},domProps:{innerHTML:t._s(t.content)}})])},staticRenderFns:[]}},464:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(98),n=r(s),i=a(54),o=a(429),u=r(o),l=a(97),c=r(l),d=a(69);e.default={props:{rawList:{require:!0},needBtn:{type:Boolean,require:!0}},data:function(){return{starMap:{0:{star:0,text:"未评价"},5:{star:1,text:"慢走不送"},4:{star:2,text:"不太好用"},3:{star:3,text:"一般般啦"},2:{star:4,text:"还不错哟"},1:{star:5,text:"好用到哭"}},showBtn:this.needBtn&&this.rawList.total>0,defaultImg:n.default.convertToNosUrl(i.IMGS.DEFAULT_IMG,"373y373"),avatarImg:n.default.convertToNosUrl(i.IMGS.AVATAR,"66y66")}},computed:{list:function(){var t=this;return this.rawList.list.map(function(e){var a=c.default.cloneDeep(e);a.imageArray&&a.imageArray.length?a.imageArray=a.imageArray.map(function(t){return n.default.convertToNosUrl(t,"373y373",{force:!0})}):a.imageArray=[t.defaultImg];var r=a.author&&a.author.avatarUrl;return r?a.author.avatarUrl=n.default.convertToNosUrl(r,"66y66"):a.author={avatarUrl:t.avatarImg,nickname:e.author&&e.author.nickname||""},a.displayPraisedCount=e.praisedCount>0?n.default.getDisplayCount(e.praisedCount):"0",a.productName=e.nameMap&&e.nameMap.productNameList?e.nameMap.productNameList[0]:"",a})}},methods:{callApp:function(){d.callApp()},toUserProfilePage:function(t){if(!this.$beauty.inApp)return void this.$router.push("/user/"+t);var e=this.$beauty.getURLScheme("webview",{url:"/user/"+t});e?location.href=e:(0,u.default)("请将网易美学更新到1.5以上版本")}}}},478:function(t,e){},483:function(t,e,a){function r(t){a(478)}var s=a(31)(a(464),a(496),r,"data-v-a07186c0",null);t.exports=s.exports},496:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-noteList"},[t.rawList.total>0?a("ul",t._l(t.list,function(e){return a("li",[a("router-link",{attrs:{to:"/note/"+e.id}},[a("div",{staticClass:"imgWrapper"},[a("img",{staticClass:"headPic",attrs:{src:e.imageArray&&e.imageArray.length?e.imageArray[0]:t.defaultImg}})]),a("div",{staticClass:"noteInfo"},[a("div",{staticClass:"title"},[t._v(t._s(e.productName))]),a("div",{staticClass:"text"},[a("span",{class:["star",{highStar:e.emotion&&e.emotion<4}]},[t._v(t._s(t.starMap[e.emotion].star)+"星")]),e.text?a("span",{staticClass:"textContent"},[t._v("｜"+t._s(e.text))]):t._e()])])]),a("div",{staticClass:"userInfo"},[e.author&&e.author.avatarUrl?a("img",{staticClass:"avatar",attrs:{src:e.author.avatarUrl},on:{click:function(a){t.toUserProfilePage(e.author.id)}}}):a("img",{staticClass:"avatar",attrs:{src:t.avatarImg},on:{click:function(a){t.toUserProfilePage(e.author.id)}}}),e.author?a("div",{staticClass:"name"},[t._v(t._s(e.author.nickname))]):t._e(),a("div",{staticClass:"u-praise",on:{click:t.callApp}},[t._v(t._s(e.displayPraisedCount||"0"))])])],1)})):t._e(),t.showBtn?a("app-more",{attrs:{text:"查看更多真实心得"}}):t._e()],1)},staticRenderFns:[]}},669:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(98),n=r(s),i=a(97),o=r(i),u=a(69);e.default={props:{answerList:{type:Array,default:function(){return[]}}},computed:{displayList:function(){return this.answerList.map(function(t){var e=o.default.cloneDeep(t);return e.authorName=t.author&&t.author.nickname?t.author.nickname:"",t.images.length>0&&(e.displayImages=t.images.slice(0,3).map(function(t){return n.default.convertToNosUrl(t,"160y160")})),e.praisedCount=t.praisedCount>0?n.default.getDisplayCount(t.praisedCount):"0",e})}},methods:{callApp:function(){u.callApp()}}}},670:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n=a(32),i=a(97),o=r(i),u=a(483),l=r(u),c=a(898),d=r(c),v=a(897),f=r(v),p=a(899),m=r(p),_={REPO:3,NOTE:2,VIDEO:20,ANSWER:35};e.default={computed:s({},(0,n.mapState)({knowledges:function(t){var e=this;return(t.resource.list||[]).map(function(t){var a=o.default.cloneDeep(t);return a.block=e.getBlock(t),a})}})),mounted:function(){var t=this.$route.hash;if(t){var e=this.$el.querySelector(t),a=e.offsetTop-2*window.rem;setTimeout(function(){window.scrollTo(0,a)},0)}},methods:{getBlock:function(t){var e={type:"",data:{}};switch(t.type){case _.REPO:e.type="repos",e.data={"repo-list":t.itemList};break;case _.NOTE:e.type="notes",e.data={"raw-list":{list:t.itemList,total:t.itemList.length},"need-btn":!1};break;case _.ANSWER:e.type="answers",e.data={"answer-list":t.itemList};break;case _.VIDEO:e.type="videos",e.data={"video-list":t.itemList}}return e}},components:{repos:d.default,notes:l.default,answers:f.default,videos:m.default}}},671:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(98),n=r(s),i=a(54),o=a(97),u=r(o);e.default={props:{repoList:{require:!0}},data:function(){return{defaultImg:n.default.convertToNosUrl(i.IMGS.DEFAULT_IMG,"354y236"),avatarImg:n.default.convertToNosUrl(i.IMGS.AVATAR,"66y66")}},computed:{list:function(){var t=this;return this.repoList.map(function(e){var a=u.default.cloneDeep(e),r=a.imageUrl;a.imageUrl=r?n.default.convertToNosUrl(r,"354y236"):t.defaultImg;var s=a.author&&a.author.avatarUrl;s?a.author.avatarUrl=n.default.convertToNosUrl(s,"66y66"):a.author={avatarUrl:t.avatarImg,nickname:e.author&&e.author.nickname||""};var i=a.readCount;return a.readCount=i>0?n.default.getDisplayCount(i):"0",a})}}}},672:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(98),n=r(s),i=a(54),o=a(97),u=r(o);e.default={props:{videoList:{require:!0}},data:function(){return{defaultImg:n.default.convertToNosUrl(i.IMGS.DEFAULT_IMG,"750y400"),avatarImg:n.default.convertToNosUrl(i.IMGS.AVATAR,"56y56")}},computed:{list:function(){var t=this;return this.videoList.map(function(e){var a=u.default.cloneDeep(e);e.id&&e.abtest&&e.pvid?a.link="/video/"+e.id+"?abtest="+e.abtest+"&pvid="+e.pvid:a.link="/video/"+e.id;var r=a.coverImg;a.coverImg=r?n.default.convertToNosUrl(r,"750y400"):t.defaultImg;var s=a.author&&a.author.avatarUrl;s?a.author.avatarUrl=n.default.convertToNosUrl(s,"56y56"):a.author={avatarUrl:t.avatarImg,nickname:a.author&&a.author.nickname||""};var i=e.duration;a.duration=n.default.getVideoDuration(i);var o=e.readCount;return a.readCount=n.default.getDisplayCount(o),a})}}}},716:function(t,e){},777:function(t,e){},798:function(t,e){},815:function(t,e){},897:function(t,e,a){function r(t){a(798)}var s=a(31)(a(669),a(1017),r,"data-v-8f5b3600",null);t.exports=s.exports},898:function(t,e,a){function r(t){a(815)}var s=a(31)(a(671),a(1035),r,"data-v-c5ee2d98",null);t.exports=s.exports},899:function(t,e,a){function r(t){a(777)}var s=a(31)(a(672),a(995),r,"data-v-6c42b2a9",null);t.exports=s.exports},934:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"m-knowledges",attrs:{id:"list"}},t._l(t.knowledges,function(e,r){return a("li",{staticClass:"m-knowledge",attrs:{id:"anchor-"+r}},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(e.title))])]),e.type?a(e.block.type,t._b({tag:"div"},"div",e.block.data,!1)):t._e(),r<t.knowledges.length-1?a("div",{staticClass:"seperator"}):t._e()])}))},staticRenderFns:[]}},995:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-videoList"},[t.videoList.length>0?a("ul",t._l(t.list,function(e){return a("li",[a("router-link",{attrs:{to:e.link}},[a("div",{staticClass:"m-video"},[a("div",{staticClass:"cover"},[a("img",{attrs:{src:e.coverImg}}),a("span",{staticClass:"mask"}),a("span",{staticClass:"duration"},[t._v(t._s(e.duration))])]),a("div",{staticClass:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"author"},[a("img",{staticClass:"avatar",attrs:{src:e.author.avatarUrl}}),a("div",{staticClass:"name"},[t._v(t._s(e.author.nickname))]),a("div",{staticClass:"data"},[a("span",{staticClass:"icon play"}),a("span",[t._v(t._s(e.readCount))])])])])])],1)})):t._e()])},staticRenderFns:[]}}});
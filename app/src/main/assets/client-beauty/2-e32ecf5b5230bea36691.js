webpackJsonp([2],{1010:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list.length>0?n("div",{staticClass:"recommend"},[n("div",{staticClass:"tlt"},[t._v("相关推荐")]),n("ul",t._l(t.list,function(e){return n("li",{on:{click:function(n){t.toNote(e.url)}}},[n("img",{staticClass:"cover",attrs:{src:e.coverImage}}),n("div",{staticClass:"info"},[n("div",{staticClass:"reason"},[t._v(t._s(e.recommendReason))]),n("div",{staticClass:"title"},[t._v(t._s(e.productName))]),n("div",{staticClass:"text"},[n("span",{class:["star",{red:e.highScore}]},[t._v(t._s(e.star))]),e.text?n("span",{staticClass:"textContent"},[t._v("｜"+t._s(e.text))]):t._e()])])])}))]):t._e()},staticRenderFns:[]}},1014:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"m-note"},[n("div",{staticClass:"user"},[n("div",{staticClass:"avator",on:{click:function(e){t.toUserProfilePage(t.author.id)}}},[n("img",{attrs:{src:t.author.avatarUrl}}),t.author.vip?n("span",{staticClass:"vip"}):t._e()]),n("div",{staticClass:"detail"},[n("div",{staticClass:"brief"},[n("div",{staticClass:"name"},[t._v(t._s(t.author.name))]),n("div",{staticClass:"s1"},[t._v(t._s(t.author.s1))])]),t._l(5,function(e){return n("span",{key:e,staticClass:"star",class:{"star-1":e<=t.emotionMap[t.emotion].star}})}),n("span",{staticClass:"s2"},[t._v(t._s(t.emotionMap[t.emotion].text))])],2)]),n("div",{staticClass:"images"},[t._l(t.images,function(e,s){return s<4?n("img",{key:e.url+s,attrs:{src:e.url}}):t._e()}),t._l(t.images,function(e,s){return s>=4?n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.url,expression:"image.url"}],key:e.url+s}):t._e()})],2),n("product-card",{attrs:{product:t.product,"is-user-product":t.isUserProduct}}),n("div",{staticClass:"moreinfo"},[n("div",{staticClass:"text"},[t._v(t._s(t.note.text))]),t.note.displayPrice?n("div",{staticClass:"price"},[n("div",[t._v("购买价格：")]),n("div",{staticClass:"num"},[t._v(t._s(t.note.displayPrice))])]):t._e(),n("div",{staticClass:"tags"},t._l(t.note.tags,function(e){return n("span",{key:e.id,staticClass:"tag",on:{click:function(n){t.toTag(e.id)}}},[t._v(t._s(e.name))])})),n("div",{staticClass:"time"},[t._v(t._s(t.note.leftTimeTip))])])],1),t.note.id?n("comments",{attrs:{"res-id":t.note.id,"res-type":2}}):t._e(),n("recommend",{attrs:{"res-id":t.note.id}}),n("app-more",{attrs:{text:"查看更多精彩内容"}})],1)},staticRenderFns:[]}},409:function(t,e,n){function s(t){n(795)}var a=n(31)(n(643),n(1014),s,"data-v-8b56cdf6",null);t.exports=a.exports},413:function(t,e,n){function s(t){n(723)}var a=n(31)(n(653),n(941),s,"data-v-2be334de",null);t.exports=a.exports},429:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(44),i=s(a),r=n(432),o=s(r),c=null,u=function(){if(c)return c;var t=i.default.extend(o.default);return c=new t({el:document.createElement("div")}),document.body.appendChild(c.$el),c};e.default=function(t){var e=u();e.message="string"==typeof t?t:t.message;var n=document.getElementById("main");e.marginTop=(n&&n.offsetTop/75||0)+"rem";var s=t.duration||1400,a=t.callback;return clearTimeout(e.timer),e.visible=!0,e.timer=setTimeout(function(){e.visible=!1,a&&a()},s+250),e}},430:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{message:{type:String,default:""},marginTop:{type:String,default:"0"}},computed:{content:function(){return this.message.replace(/\n/g,"<br/>")}},data:function(){return{visible:!1}}}},431:function(t,e){},432:function(t,e,n){function s(t){n(431)}var a=n(31)(n(430),n(433),s,"data-v-1f604b81",null);t.exports=a.exports},433:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"ease"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"toast",style:{marginTop:t.marginTop},domProps:{innerHTML:t._s(t.content)}})])},staticRenderFns:[]}},436:function(t,e,n){function s(t){n(448)}var a=n(31)(n(446),n(453),s,"data-v-9b529db2",null);t.exports=a.exports},437:function(t,e,n){function s(t){n(440)}var a=n(31)(n(438),n(442),s,"data-v-759f3ade",null);t.exports=a.exports},438:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{txt:{default:"正在加载..."}}}},440:function(t,e){},442:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-loading"},[n("img",{attrs:{src:"/res/image/loading.png"}}),n("span",[t._v(t._s(t.txt))])])},staticRenderFns:[]}},446:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},i=n(32),r=n(54),o=n(97),c=s(o),u=n(429),l=s(u),d=n(98),p=s(d),f=n(69);e.default={props:{user:{type:Object,default:function(){return{}}}},computed:a({},(0,i.mapState)({inMiniProgram:"inMiniProgram"}),{displayUser:function(){var t=c.default.cloneDeep(this.user);return t.avatarUrl=p.default.convertToNosUrl(t.avatarUrl||r.IMGS.AVATAR,"140y140"),t.vip=p.default.isVipUser(t.authType),t}}),methods:{toUserProfilePage:function(t){if(this.inMiniProgram)f.callApp();else if(this.$beauty.inApp){var e=this.$beauty.getURLScheme("webview",{url:"/user/"+t});e?location.href=e:(0,l.default)("请将网易美学更新到1.5以上版本")}else this.$router.push("/user/"+t)}}}},448:function(t,e){},451:function(t,e,n){function s(t){n(479)}var a=n(31)(n(461),n(497),s,"data-v-d3c6b8b6",null);t.exports=a.exports},453:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar",on:{click:function(e){t.toUserProfilePage(t.displayUser.id)}}},[n("img",{attrs:{src:t.displayUser.avatarUrl}}),t.displayUser.vip?n("span"):t._e()])},staticRenderFns:[]}},456:function(t,e,n){function s(t){n(475)}var a=n(31)(n(458),n(493),s,"data-v-683096cc",null);t.exports=a.exports},458:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{text:{type:String,default:"还没有内容"}}}},459:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},i=n(97),r=s(i),o=n(32),c=n(98),u=s(c),l=n(436),d=s(l),p=n(69);e.default={props:{comment:{type:Object,require:!0}},computed:a({},(0,o.mapState)(["inApp"]),{displayComment:function(){var t=r.default.cloneDeep(this.comment);t.author||(t.author={});var e=t.praiseCount;t.praiseCount=e<1e5?e:parseInt(e/1e4)+"万";var n=t.images;n&&n.length>0&&(t.displayImages=n.map(function(t){return u.default.convertToNosUrl(t,"184y184",{force:!0})}));var s=t.replyComment;if(s){if(-5===s.status||-10===s.status)t.replyComment="评论已被删除";else{t.replyUser=s.author&&s.author.nickname,t.replyComment="："+s.content;var a=s.images;a&&a.length>0&&(t.displayReplyImages=a.map(function(t){return u.default.convertToNosUrl(t,"170y170",{force:!0})}))}}return t}}),methods:{launchApp:function(){p.callApp()}},components:{avatar:d.default}}},460:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(49),i=s(a),r=n(98),o=s(r),c=n(436),u=s(c);e.default={data:function(){return{content:"",maxContentLength:140}},props:{resId:{type:[Number,String],require:!0},resType:{type:Number,require:!0},currentUser:{type:Object,default:function(){return{}}},add:Function},watch:{content:function(){var t=this;this.$nextTick(function(){t.adjustHeight()})}},computed:{isLogin:function(){var t=this.currentUser;return!(!t||!t.id)},contentLength:function(){return parseInt(o.default.getStrLength(this.content)/2)}},methods:{checkLogin:function(){this.isLogin||(window.location.href="/login")},adjustHeight:function(){var t=this.$refs.input,e=t.scrollHeight;t.style.height="auto";var n=t.scrollHeight;t.style.height=Math.min(e,n)+"px"},hideKeyboard:function(){this.$refs.input.blur()},send:function(){var t=this;if(!this.sending){var e=this.content;if(e){var n=this.maxContentLength;if(this.contentLength>n)return void alert("评论不超过"+n+"个字");this.sending=!0,(0,i.default)("/comment/add",{method:"POST",body:{resId:this.resId,resType:this.resType,commentId:0,content:e}}).then(function(e){if(301===e.code)return void alert(e.msg||"请求失败，请稍后再试");t.add({content:t.content,displayCreateTime:"刚刚",likedCount:0,author:t.user,praised:!1,target:null}),t.content="",t.sending=!1},function(e){alert(e.msg||"请求失败，请稍后再试"),t.sending=!1})}}}},components:{avatar:u.default}}},461:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},i=n(49),r=s(i),o=n(437),c=s(o),u=n(97),l=s(u),d=n(32),p=n(456),f=s(p),m=n(480),v=s(m),h=n(481),_=s(h),g=n(69),y={loading:!1,fetched:!1,fetchFailed:!1,hasNext:!0,inOldApp:!1,comments:{list:[],total:null}};e.default={props:{resId:{type:[Number,String],require:!0},resType:{type:Number,require:!0},currentUser:{type:Object,default:function(){return{}}}},watch:{resId:function(t,e){this.reset(),this.getList()}},mounted:function(){var t=this;this.getList(),document.addEventListener("MZBridgeLoaded",function(){t.ua.match(/NEMEIXUE/)||(t.inOldApp=!0)}),document.addEventListener("WebViewJavascriptBridgeReady",function(){t.ua.match(/NEMEIXUE/)||(t.inOldApp=!0)}),window.addEventListener("scroll",this.onScroll)},data:function(){return l.default.cloneDeep(y)},computed:a({text:function(){return this.comments.total>5?"查看更多精彩评论":"查看更多精彩内容"},pageEndId:function(){var t=this.comments.list;return t&&t.length?t[t.length-1].id:-1}},(0,d.mapState)(["inApp","ua"])),methods:{reset:function(){for(var t in y)this[t]=y[t]},getList:function(){var t=this;this.hasNext&&!this.loading&&(this.loading=!0,(0,r.default)("/comments",{body:{count:5,resId:this.resId,resType:this.resType,pageEndId:this.pageEndId}}).then(function(e){var n=e.result||{},s=n.list,a=void 0===s?[]:s,i=n.total,r=void 0===i?0:i,o=n.hasNext;t.comments={list:t.comments.list.concat(a),total:r},t.hasNext=o,t.loading=!1,t.fetched=!0,t.fetchFailed=!1},function(e){t.loading=!1,t.fetched=!0,t.fetchFailed=!0}))},add:function(t){this.comments.list.unshift(t),this.comments.total++},onScroll:function(){this.inApp&&!this.fetchFailed&&g.isBottomVisible(this.$refs.comment)&&this.getList()}},components:{loading:c.default,empty:f.default,comment:v.default,send:_.default}}},473:function(t,e){},475:function(t,e){},477:function(t,e){},479:function(t,e){},480:function(t,e,n){function s(t){n(473)}var a=n(31)(n(459),n(491),s,"data-v-512e1fd2",null);t.exports=a.exports},481:function(t,e,n){function s(t){n(477)}var a=n(31)(n(460),n(495),s,"data-v-7591cda5",null);t.exports=a.exports},491:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("div",{staticClass:"wrap"},[n("avatar",{attrs:{user:t.displayComment.author,lazy:"true"}}),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v(t._s(t.displayComment.author&&t.displayComment.author.nickname))]),n("div",{staticClass:"time"},[t._v(t._s(t.displayComment.displayCreateTime))])]),t.inApp?t._e():n("div",{staticClass:"u-praise",on:{click:t.launchApp}},[t._v(t._s(t.displayComment.praiseCount||"0"))])],1),n("div",{staticClass:"content"},[n("span",{staticClass:"text"},[t._v(t._s(t.displayComment.content))]),t.displayComment.displayImages&&t.displayComment.displayImages.length>0?n("ul",{staticClass:"comment-images",on:{click:t.launchApp}},t._l(t.displayComment.displayImages,function(t){return n("li",{staticClass:"image"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])})):t._e(),t.displayComment.replyComment?n("div",{staticClass:"reply"},[n("span",{staticClass:"user"},[t._v(t._s(t.displayComment.replyUser))]),t._v(t._s(t.displayComment.replyComment)+"\n      "),t.displayComment.displayReplyImages&&t.displayComment.displayReplyImages.length>0?n("ul",{staticClass:"comment-images reply",on:{click:t.launchApp}},t._l(t.displayComment.displayReplyImages,function(t){return n("li",{staticClass:"image"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])})):t._e()]):t._e()])])},staticRenderFns:[]}},493:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"empty"},[n("div",{staticClass:"background"}),n("div",{staticClass:"txt"},[t._v(t._s(t.text))])])},staticRenderFns:[]}},495:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"send",on:{click:t.checkLogin}},[n("avatar",{attrs:{user:t.currentUser}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"input",staticClass:"content",attrs:{type:"search",disabled:!t.isLogin,placeholder:"谢谢你这么好看还来给我评论~",rows:"1"},domProps:{value:t.content},on:{keyup:t.adjustHeight,keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.hideKeyboard(e)},input:function(e){e.target.composing||(t.content=e.target.value)}}}),n("div",[t.contentLength>=100?n("div",{staticClass:"tip"},[t._v(t._s(t.maxContentLength-t.contentLength))]):t._e(),n("div",{staticClass:"btn",attrs:{disabled:!t.isLogin},on:{click:t.send}},[t._v("发送")])])],1)},staticRenderFns:[]}},497:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-comments"},[n("div",{ref:"comment",staticClass:"wrapper"},[n("div",{staticClass:"title"},[t._v("评论"),null!==t.comments.total?n("span",[t._v("("+t._s(t.comments.total)+")")]):t._e()]),t.inApp&&!t.inOldApp?n("send",{attrs:{"res-id":t.resId,"res-type":t.resType,"current-user":t.currentUser,add:t.add}}):t._e(),t.comments.total?n("div",t._l(t.comments.list||[],function(t){return n("comment",{key:t.id,attrs:{comment:t}})})):t._e(),0===t.comments.total?n("empty",{attrs:{text:"还没有评论"}}):t._e(),n("div",{staticClass:"loading"},[!t.fetched||!t.fetchFailed&&t.hasNext&&t.inApp?n("loading"):t._e()],1),t.fetchFailed?n("div",{staticClass:"failed",on:{click:t.getList}},[t._m(0,!1,!1)]):t._e()],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"txt"},[t._v("加载失败，"),n("span",[t._v("点击重新加载")])])}]}},517:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},a=n(32),i=n(69);e.default={props:["product","isUserProduct","isScreencapture"],computed:s({},(0,a.mapState)({inMiniProgram:"inMiniProgram"})),methods:{toProduct:function(t){this.inMiniProgram?i.callApp():t&&this.$router.push(t)},callApp:function(){i.callApp()}}}},522:function(t,e){},545:function(t,e,n){function s(t){n(522)}var a=n(31)(n(517),n(551),s,"data-v-47a5db92",null);t.exports=a.exports},551:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"iteminfo",on:{click:function(e){t.toProduct(t.isUserProduct?null:"/product/"+t.product.id)}}},[n("img",{attrs:{src:t.product.imageUrl}}),n("div",{staticClass:"info"},[n("div",{staticClass:"zhName"},[t._v(t._s(t.product.name4wap1))]),n("div",{staticClass:"wrap"},[n("div",{staticClass:"desc"},[n("div",{staticClass:"enName"},[t._v(t._s(t.product.name4wap2))]),n("div",{staticClass:"enName enName-xd"},[t.product.noteCnt>0?n("div",[t.isScreencapture?n("span",[t._v("在网易美学有")]):t._e(),t._v(t._s(t.product.noteCnt)+"篇心得\n            "),t.isUserProduct||t.isScreencapture?t._e():n("span",{staticClass:"gt"})]):t._e()])]),t.isUserProduct||t.isScreencapture?t._e():n("div",{staticClass:"grass",on:{click:function(e){e.stopPropagation(),t.callApp(e)}}},[n("span",{staticClass:"icon"}),n("div",[t._v("长草")])])])])])},staticRenderFns:[]}},642:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},i=n(32),r=n(98),o=s(r),c=n(54),u=n(97),l=s(u),d=n(49),p=s(d),f=n(69),m={recommendList:[],defaultImg:o.default.convertToNosUrl(c.IMGS.DEFAULT_IMG,"337y337")};e.default={props:{resId:{type:String}},data:function(){return m},watch:{resId:function(t,e){this.reset(),this.getData()}},computed:a({},(0,i.mapState)({inMiniProgram:"inMiniProgram"}),{list:function(){var t=this;return this.recommendList.map(function(e){var n=l.default.cloneDeep(e);return n.imageArray&&n.imageArray.length?n.coverImage=o.default.convertToNosUrl(n.imageArray[0],"337y337"):n.coverImage=t.defaultImg,0===n.emotion?n.star="未评价":n.star=6-n.emotion+"星",n.highScore=n.emotion&&n.emotion>=1&&n.emotion<=3,n.url="/note/"+e.id+"?abtest="+e.abtest+"&pvid="+e.pvid,n})}}),mounted:function(){this.getData()},methods:{reset:function(){for(var t in m)this[t]=m[t]},getData:function(){var t=this;(0,p.default)("/api/note/"+this.resId+"/recommend").then(function(e){t.recommendList=e.result||[]},function(t){alert(t.msg||"获取相关心得失败")})},toNote:function(t){this.inMiniProgram?f.callApp():t&&this.$router.push(t)}}}},643:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},i=n(32),r=n(98),o=s(r),c=n(97),u=s(c),l=n(54),d=n(451),p=s(d),f=n(881),m=s(f),v=n(545),h=s(v),_=n(69);e.default={computed:a({},(0,i.mapState)({note:"resource",author:function(t){var e=t.resource,n=u.default.cloneDeep(e.author||{});return n.avatarUrl=o.default.convertToNosUrl(n.avatarUrl||l.IMGS.AVATAR,"116y116"),n.vip=o.default.isVipUser(n.authType),n.s1=n.age||"",n.age&&n.skinType&&(n.s1+=" | "),n.skinType&&(n.s1+=n.skinType),n},emotion:function(t){return t.resource.emotion||0},images:function(t){var e=t.resource,n=u.default.cloneDeep(e.images||[]);return u.default.forEach(n,function(t){t&&(t.url=o.default.convertToNosUrl(t.url,"750x0"))}),n},product:function(t){var e=t.resource,n=u.default.cloneDeep(e.product||{}),s=n.imageUrl||l.IMGS.DEFAULT_IMG;return s&&(n.imageUrl=o.default.convertToNosUrl(s,"166y166")),n},isUserProduct:function(t){return 8===t.resource.productType},inMiniProgram:"inMiniProgram"})),data:function(){return{inBrowser:!0,emotionMap:{0:{star:0,text:"未评价"},5:{star:1,text:"慢走不送"},4:{star:2,text:"不太好用"},3:{star:3,text:"一般般啦"},2:{star:4,text:"还不错哟"},1:{star:5,text:"好用到哭"}}}},methods:{toProduct:function(t){this.inMiniProgram?this.callApp():t&&this.$router.push(t)},toTag:function(t){this.inMiniProgram?this.callApp():this.$router.push("/tag/"+t)},callApp:function(){_.callApp()},toUserProfilePage:function(t){this.inMiniProgram?this.callApp():this.$router.push("/user/"+t)}},components:{comments:p.default,recommend:m.default,productCard:h.default}}},652:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(98),i=s(a),r=n(97),o=s(r),c=n(436),u=s(c),l=n(69);e.default={props:{answer:{type:Object,default:function(){return{}}}},computed:{displayAnswer:function(){var t=o.default.cloneDeep(this.answer),e=t.author||{},n=(t.images||[]).map(function(t){return i.default.convertToNosUrl(t,"160y160")}),s=n.slice(0,3),a=n.length>3,r=t.socialStat||{},c=i.default.getDisplayCount(r.praiseCount),u=i.default.getDisplayCount(r.commentCount),l=t.authorReply||{},d=l&&l.author?l.author.nickname:"";return{id:t.id,author:e,name:e.name,updateTime:t.updateTime,description:t.description,images:s,hasMoreImages:a,praiseCount:c,commentCount:u,link:"/answer/"+t.id,authorReply:t.authorReply,replyUser:d}}},methods:{launchApp:function(){l.callApp()},toAnswer:function(t){this.$router.push(t)}},components:{avatar:u.default}}},653:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},i=n(32),r=n(451),o=s(r),c=n(436),u=s(c),l=n(887),d=s(l),p=n(456),f=s(p),m=n(69);e.default={computed:a({},(0,i.mapState)({question:"resource"}),{item:function(){return((this.question||{}).description||"").split("\n")},resType:function(){return((this.question||{}).shareInfo||{}).resType},answers:function(){return this.question&&this.question.answers||[]}}),methods:{launchApp:function(){m.callApp()}},components:{comments:o.default,avatar:u.default,answer:d.default,empty:f.default}}},723:function(t,e){},742:function(t,e){},791:function(t,e){},795:function(t,e){},881:function(t,e,n){function s(t){n(791)}var a=n(31)(n(642),n(1010),s,"data-v-7c3c3362",null);t.exports=a.exports},887:function(t,e,n){function s(t){n(742)}var a=n(31)(n(652),n(960),s,"data-v-44503da2",null);t.exports=a.exports},941:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"question"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[t._v(t._s(t.question.title))]),n("div",{staticClass:"description"},[t._l(t.item,function(e){return[t._v("\n          "+t._s(e)),n("br")]})],2),n("button",{on:{click:t.launchApp}},[t._v("+ 关注")])]),n("div",{staticClass:"list"},[n("div",{staticClass:"total"},[t._v(t._s(t.question.answerCount)+"个回答")]),t.answers.length>0?n("div",t._l(t.answers,function(t){return n("answer",{key:t.id,attrs:{answer:t}})})):n("empty",{attrs:{text:"还没有回答"}})],1)]),n("app-more",{attrs:{text:"查看更多精彩内容"}})],1)},staticRenderFns:[]}},960:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer",on:{click:function(e){t.toAnswer(t.displayAnswer.link)}}},[n("div",{staticClass:"info"},[n("avatar",{attrs:{user:t.displayAnswer.author}}),n("div",{staticClass:"name"},[t._v(t._s(t.displayAnswer.name))]),n("div",[t._v(t._s(t.displayAnswer.updateTime))])],1),n("div",{staticClass:"cnt"},[t.displayAnswer.description?n("div",{staticClass:"desc"},[t._v(t._s(t.displayAnswer.description))]):t._e(),t.displayAnswer.images.length>0?n("div",{staticClass:"imgs"},[t._l(t.displayAnswer.images,function(t){return n("img",{attrs:{src:t}})}),t.displayAnswer.hasMoreImages?n("span",{staticClass:"moreimg"}):t._e()],2):t._e()]),n("div",{staticClass:"social"},[n("span",{staticClass:"u-praise",on:{click:function(e){e.stopPropagation(),t.launchApp(e)}}},[t._v(t._s(t.displayAnswer.praiseCount||"点赞"))]),n("span",{staticClass:"u-comment"},[t._v(t._s(t.displayAnswer.commentCount||"评论"))])]),t.displayAnswer.authorReply?n("div",{staticClass:"reply"},[n("div",{staticClass:"reply-content"},[n("span",{staticClass:"reply-author"},[t._v(t._s(t.displayAnswer.replyUser))]),t._v("："+t._s(t.displayAnswer.authorReply.content)+"\n    ")])]):t._e()])},staticRenderFns:[]}}});
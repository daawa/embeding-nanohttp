webpackJsonp([8],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('sticky', {
    attrs: {
      "bottom": "0"
    }
  }, [_c('div', {
    staticClass: "m-bottom-wrapper"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-71b58183", module.exports)
  }
}

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(704)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(606),
  /* template */
  __webpack_require__(920),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0977de42",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/invite/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0977de42", Component.options)
  } else {
    hotAPI.reload("data-v-0977de42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(44);

var _vue2 = _interopRequireDefault(_vue);

var _toast = __webpack_require__(431);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: maggiehe
 * @Date:   2016-11-16 10:57:21
 * @Last Modified by: maggiehe
 * @Last Modified time: 2017-07-20 15:37:13
 * toast组件
 * 使用示例
  import toast from './toast'
  toast("领取成功~\n快下载网易美学查收吧\n\n正在进入下载..2s")
  或
  toast({
    message:"领取成功~\n快下载网易美学查收吧\n\n正在进入下载..2s",
    duration:2000
  })
 *
 */
var animationDuration = 250;
var defaultDuration = 1400;
var instance = null;
var getInstance = function getInstance() {
  if (instance) return instance;
  var Constructor = _vue2.default.extend(_toast2.default);
  instance = new Constructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  return instance;
};

exports.default = function (options) {
  var instance = getInstance();
  instance.message = typeof options === 'string' ? options : options.message;
  // 如果主要内容上方有banner等浮层，需要将高度预留
  var contentNode = document.getElementById('main');
  instance.marginTop = (contentNode && contentNode.offsetTop / 75 || 0) + 'rem';
  var duration = options.duration || defaultDuration;
  var callback = options.callback;
  clearTimeout(instance.timer);
  instance.visible = true;
  instance.timer = setTimeout(function () {
    instance.visible = false;
    callback && callback();
  }, duration + animationDuration);
  return instance;
};

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: {
    message: { // 浮层内容
      type: String,
      default: ""
    },
    marginTop: { // 偏移
      type: String,
      default: "0"
    }
  },
  computed: {
    content: function content() {
      return this.message.replace(/\n/g, "<br/>");
    }
  },
  data: function data() {
    return {
      visible: false
    };
  }
};

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(430)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(429),
  /* template */
  __webpack_require__(432),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1f604b81",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/toast/toast.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] toast.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f604b81", Component.options)
  } else {
    hotAPI.reload("data-v-1f604b81", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "ease"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "toast",
    style: ({
      marginTop: _vm.marginTop
    }),
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1f604b81", module.exports)
  }
}

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(438),
  /* template */
  __webpack_require__(440),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/sticky.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sticky.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d587d97", Component.options)
  } else {
    hotAPI.reload("data-v-0d587d97", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: {
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String]
    },
    zIndex: {
      type: [Number, String],
      default: 1000
    }
  },
  mounted: function mounted() {
    var stickyTop = this.top;
    var stickyBottom = this.bottom;
    var zIndex = this.zIndex;
    var element = this.$refs.sticky;
    var elementChild = element.firstElementChild;

    element.style.position = '-webkit-sticky';
    element.style.position = 'sticky';
    if (~element.style.position.indexOf('sticky')) {
      if (stickyBottom !== undefined) {
        element.style.bottom = stickyBottom + 'px';
        element.style.top = 'auto';
      } else {
        element.style.top = stickyTop + 'px';
      }
      element.style.zIndex = zIndex;
      return;
    }

    elementChild.style.left = 0;
    elementChild.style.right = 0;
    if (stickyBottom !== undefined) {
      elementChild.style.bottom = stickyBottom + 'px';
      elementChild.style.top = 'auto';
    } else {
      elementChild.style.top = stickyTop + 'px';
    }
    elementChild.style.zIndex = zIndex;

    var active = false;
    var check = function check() {
      var offsetTop = element.getBoundingClientRect().top;
      var offsetBottom = element.getBoundingClientRect().bottom;
      if (stickyBottom !== undefined && offsetBottom > stickyBottom || offsetTop < stickyTop) {
        if (active) return;
        if (!element.style.height) {
          element.style.height = element.clientHeight + 'px';
        }
        elementChild.style.position = 'fixed';
        active = true;
      } else {
        if (!active) return;
        elementChild.style.position = '';
        active = false;
      }
    };

    var timer;
    this.__listenAction = function () {
      if (timer) return;
      timer = setInterval(check, 30);
    };
    window.addEventListener('scroll', this.__listenAction);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.__listenAction) {
      window.removeEventListener('scroll', this.__listenAction);
    }
  }
};

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "sticky",
    staticClass: "sticky"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d587d97", module.exports)
  }
}

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// 可选20个商品的额外信息
var productExtraProperties = exports.productExtraProperties = [{
  "id": 1,
  "name": "城野医生 零毛孔化妆水",
  "specification": "规格：正装100ml",
  "grassCount": "39436",
  "coverUrl": "https://beauty.nosdn.127.net/a5a004c6afa51de48368e06bd2e1461f.png",
  "mixes": ["https://beauty.nosdn.127.net/d4b5df8791556bdfe22d71a262429e15.png", "https://beauty.nosdn.127.net/e640eb132ed9d7ee1acee71764292210.png"]
}, {
  "id": 2,
  "name": "SKII 小灯泡美白精华",
  "specification": "规格：正装30ml",
  "grassCount": "38465",
  "coverUrl": "https://beauty.nosdn.127.net/9540c5cc15c916116fcd5bcf866a060a.png",
  "mixes": ["https://beauty.nosdn.127.net/c113bfd5341fbeb1a17d544bdf4c246c.png", "https://beauty.nosdn.127.net/348446f740a3454d6b27c17e9514007e.png"]
}, {
  "id": 3,
  "name": "Ipsa 流金水",
  "specification": "规格：正装200ml",
  "grassCount": "37426",
  "coverUrl": "https://beauty.nosdn.127.net/62ac1ffb6a6c54bbced2c64c0e2b5ddc.png",
  "mixes": ["https://beauty.nosdn.127.net/67fb0d2d60e0f4f7ef2b0013293dec48.png", "https://beauty.nosdn.127.net/e349ea71c84cd9d5d4bdb3d8a520bd21.png"]
}, {
  "id": 4,
  "name": "雅诗兰黛 Double Wear持妆粉底液",
  "specification": "规格：正装",
  "grassCount": "33982",
  "coverUrl": "https://beauty.nosdn.127.net/9cb13c2525760f31dc8e06003f8b6cba.png",
  "mixes": ["https://beauty.nosdn.127.net/5283dcefb45cee64ba64383a12fd62d0.png", "https://beauty.nosdn.127.net/5246ac80b51c3ecfb6ce394dfaa3e44c.png"]
}, {
  "id": 5,
  "name": "奥尔滨 健康水",
  "specification": "规格：正装100ml",
  "grassCount": "33765",
  "coverUrl": "https://beauty.nosdn.127.net/ecd9d2f42f6ee24865799bec95ca2977.png",
  "mixes": ["https://beauty.nosdn.127.net/7bbd578974d8a8b986a9347415d16c10.png", "https://beauty.nosdn.127.net/48ffbd00d082d568c4248d0f9614f079.png"]
}, {
  "id": 6,
  "name": "YSL 黑管唇釉",
  "specification": "规格：正装",
  "grassCount": "32689",
  "coverUrl": "https://beauty.nosdn.127.net/2005d92c5e98074cb48da52bb234e9be.png",
  "mixes": ["https://beauty.nosdn.127.net/2771ed5e0cfa58e41361948d146243b7.png", "https://beauty.nosdn.127.net/2feaca8ca4a945add7e26452e5e343fb.png"]
}, {
  "id": 7,
  "name": "HR 小绿瓶面部精华",
  "specification": "规格：正装30ml",
  "grassCount": "32583",
  "coverUrl": "https://beauty.nosdn.127.net/09e6d3da127691943c32e949e19bfd35.png",
  "mixes": ["https://beauty.nosdn.127.net/8bfa93aa9f923a2b31794293c2c1adaa.png", "https://beauty.nosdn.127.net/71e0f0ff7ae1392371c12dd9e4934e72.png"]
}, {
  "id": 8,
  "name": "Urban Decay naked系列眼影盘",
  "specification": "规格：正装",
  "grassCount": "32156",
  "coverUrl": "https://beauty.nosdn.127.net/b2dbfba4eb84574cc8d3391b5aff4999.png",
  "mixes": ["https://beauty.nosdn.127.net/d21bee51199b0a52f2d3940b1181e73f.png", "https://beauty.nosdn.127.net/e59dde18d7af808b9bed1916b82fb29a.png"]
}, {
  "id": 9,
  "name": "赛贝格 VC美白粉",
  "specification": "规格：正装1支",
  "grassCount": "31498",
  "coverUrl": "https://beauty.nosdn.127.net/5967afb1cdf999d1922906530468d693.png",
  "mixes": ["https://beauty.nosdn.127.net/e8462c6ad968603fc42c05ca77c91cda.png", "https://beauty.nosdn.127.net/fb1fb84916f6f4adc9f7b10ee0eff383.png"]
}, {
  "id": 10,
  "name": "兰蔻安瓶精华",
  "specification": "规格：正装20ml",
  "grassCount": "30991",
  "coverUrl": "https://beauty.nosdn.127.net/5c5b03a539355831c095db94ac858ff1.png",
  "mixes": ["https://beauty.nosdn.127.net/9552f4175c72dc49f923a1ab65fbac60.png", "https://beauty.nosdn.127.net/47ddd5be493fd10fc13fede26beb9d68.png"]
}, {
  "id": 11,
  "name": "Armani 红管唇釉",
  "specification": "规格：正装",
  "grassCount": "30269",
  "coverUrl": "https://beauty.nosdn.127.net/d9e25b02275736366793797aa4fbbd1a.png",
  "mixes": ["https://beauty.nosdn.127.net/4ab87bcf3f97d86b496c471cbf22ca86.png", "https://beauty.nosdn.127.net/cd2a5d005d9810ed315d6ebbe73084ac.png"]
}, {
  "id": 12,
  "name": "帕尔玛之水 蓝色地中海香柠檬淡香水",
  "specification": "规格：正装75ml",
  "grassCount": "29658",
  "coverUrl": "https://beauty.nosdn.127.net/3faf02055aafc2082c784f4ee9079714.png",
  "mixes": ["https://beauty.nosdn.127.net/af97f60297bcf0607d0dd5741e5b4406.png", "https://beauty.nosdn.127.net/b76707ed9605e2d58772b9d77527d1c0.png"]
}, {
  "id": 13,
  "name": "CPB 光凝妆前霜",
  "specification": "规格：正装",
  "grassCount": "29453",
  "coverUrl": "https://beauty.nosdn.127.net/b2542cf7b754fdd50f58f13c183569fd.png",
  "mixes": ["https://beauty.nosdn.127.net/2a72c5b6805c251c3b7e610ef89fef93.png", "https://beauty.nosdn.127.net/8f3753b5d31c9f983a943d5661438934.png"]
}, {
  "id": 14,
  "name": "Nars 炫色腮红",
  "specification": "规格：正装",
  "grassCount": "29438",
  "coverUrl": "https://beauty.nosdn.127.net/cc6fd06a521873b0227516e9ea417311.png",
  "mixes": ["https://beauty.nosdn.127.net/34c6db63e63af1f65a1db0af6fd06e46.png", "https://beauty.nosdn.127.net/ff89d17e0fae6db5a47f46cb2a589272.png"]
}, {
  "id": 15,
  "name": "黛珂 牛油果乳液",
  "specification": "规格：正装150ml",
  "grassCount": "29435",
  "coverUrl": "https://beauty.nosdn.127.net/c40aaf7489bb2018ce7f8445677219cf.png",
  "mixes": ["https://beauty.nosdn.127.net/9ed0f6ce3e2f7b1b2e5a93b66373afb9.png", "https://beauty.nosdn.127.net/3e8bda422668825d91d00dd857507423.png"]
}, {
  "id": 16,
  "name": "Colourpop 12色玫瑰眼影盘",
  "specification": "规格：正装",
  "grassCount": "28891",
  "coverUrl": "https://beauty.nosdn.127.net/02b4d79369405651b6b30d495a9111ce.png",
  "mixes": ["https://beauty.nosdn.127.net/be316ec7b2692d615bdf1fdd413a45b5.png", "https://beauty.nosdn.127.net/edc0b15d0acc7f9759cd78329aabea14.png"]
}, {
  "id": 17,
  "name": "迪奥 凝脂恒久气垫粉底",
  "specification": "规格：正装",
  "grassCount": "28689",
  "coverUrl": "https://beauty.nosdn.127.net/4d6a0afbf8dfe2e799bd5fc4c8bf315f.png",
  "mixes": ["https://beauty.nosdn.127.net/6b6d90e45b6854a76bf1dcd8e5479b9d.png", "https://beauty.nosdn.127.net/9b8c8dbe8887340dd1ebd5b8e8ca40af.png"]
}, {
  "id": 18,
  "name": "Elegance E大饼",
  "specification": "规格：便携装",
  "grassCount": "27669",
  "coverUrl": "https://beauty.nosdn.127.net/0fcdb292375bfcb873d6100215fe8a57.png",
  "mixes": ["https://beauty.nosdn.127.net/013e0b6d3b21503e3fea461fd6163bc2.png", "https://beauty.nosdn.127.net/b7189b5a96c655db1683602ee8c352ac.png"]
}, {
  "id": 19,
  "name": "Eve lom 卸妆膏",
  "specification": "规格：正装",
  "grassCount": "26954",
  "coverUrl": "https://beauty.nosdn.127.net/9b293b33607391b01f39d897996e36ab.png",
  "mixes": ["https://beauty.nosdn.127.net/1b0ae02a23ca0d9ab06c6830b65a9a93.png", "https://beauty.nosdn.127.net/1304e3058ffcc203466c5c7c65d99714.png"]
}, {
  "id": 20,
  "name": "科颜氏 白泥清洁面膜",
  "specification": "规格：正装",
  "grassCount": "25369",
  "coverUrl": "https://beauty.nosdn.127.net/1acc4b13a0214961b797009d80922a8b.png",
  "mixes": ["https://beauty.nosdn.127.net/d0e5af21ff44e5e4c405398448cdedf4.png", "https://beauty.nosdn.127.net/3306894b1f7f2177dbf57f2be20e27aa.png"]
}];
var DEFAULT_AVATAR = exports.DEFAULT_AVATAR = 'https://beauty.nosdn.127.net/beauty/img/903461b4-0c70-40b5-999a-a4a44c803aa6..png';
var DA_URL = exports.DA_URL = 'https://pr.da.netease.com/receiver/?action=ad&camName=1506577844675&target=https%3A%2F%2Fm.mei.163.com%2Ffavicon.ico&sid=383140180';
var MODAL_SPIRIT = exports.MODAL_SPIRIT = 'https://beauty.nosdn.127.net/beauty/img/10501373-ada2-4240-b10b-4cc2a0da8342..png';

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(471)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(466),
  /* template */
  __webpack_require__(489),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4d00d5b4",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/common/PinkModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PinkModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d00d5b4", Component.options)
  } else {
    hotAPI.reload("data-v-4d00d5b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageTypes = undefined;
exports.getPageTitle = getPageTitle;
exports.getShareInfo = getShareInfo;

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _store = __webpack_require__(99);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: maggiehe
 * @Date: 2017-09-28 12:55:18
 * @Last Modified by: Feng fan
 * @Last Modified time: 2017-11-21 20:18:34
 * 页面标题与分享信息管理
 * 判断平台环境，并根据页面类型返回页面标题，或整合过的分享信息
 *
 * eg: 获取页面标题
 *  getPageTitle(pageTypes.DETAIL)
 * eg: 获取分享信息
 *  1. getShareInfo(pageTypes.DETAIL)
 *  2. getShareInfo(pageTypes.INVITE, 'userId')
 */

var state = _store2.default.state;

var imageUrl = 'https://beauty.nosdn.127.net/beauty/img/8a9e81cd-8b56-468a-b5bf-42c072edcb2b..jpg';
var pageTypes = exports.pageTypes = {
  DETAIL: 'detail',
  INVITE: 'invite',
  BOARD_LIST: 'boardList'
};
var infos = {};
// 游戏详情页
infos[pageTypes.DETAIL] = {
  pageTitle: '网易美学一周年拔草大赛：你种下的草，美学帮你拔！',
  shareInfo: {
    shareTitle: '寻找拔草界的扛把子，网易美学要送你iPhone X',
    subTitle: '参加美学一周年拔草大赛，免费得3件最爱产品，总冠军还有iPhone X ！',
    imageUrl: imageUrl,
    shareUrl: 'https://m.mei.163.com/activity/anniversary'
  }
  // 分享落地页（邀请好友页）
};infos[pageTypes.INVITE] = {
  pageTitle: '手速快就能拿SK-II、CPB、YSL！玩到废寝忘食了！',
  shareInfo: {
    shareTitle: '手速快就能拿SK-II、CPB、YSL！玩到废寝忘食了！',
    subTitle: '参加美学一周年拔草大赛，免费得3件最爱产品，总冠军还有iPhone X ！',
    imageUrl: imageUrl,
    shareUrl: 'https://m.mei.163.com/activity/anniversary/invite/{0}' // 参数0为userId
  }
  // 榜单页
};infos[pageTypes.BOARD_LIST] = {
  pageTitle: '网易美学一周年榜单盘点',
  shareInfo: {
    shareTitle: '耗时1年花费1亿，才总结出来的美妆榜单！',
    subTitle: '网易美学一周年榜单盘点，让你知道漂亮的小姐姐都在用什么！',
    imageUrl: imageUrl,
    shareUrl: 'https://m.mei.163.com/activity/anniversary/boardList'
  }
  // 获取页面标题
};function getPageTitle(pageType) {
  var info = infos[pageType] || {};
  return state.inApp ? '一周年拔草挑战赛' : info.pageTitle || '';
}
// 获取分享信息
function getShareInfo(pageType) {
  var info = infos[pageType] || {};
  var shareInfo = info.shareInfo || {};

  for (var _len = arguments.length, urlParams = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    urlParams[_key - 1] = arguments[_key];
  }

  var shareUrl = _jsUtil2.default.strFormat.apply(_jsUtil2.default, [shareInfo.shareUrl].concat(urlParams));
  var currentShareInfo = Object.assign({}, shareInfo, { shareUrl: shareUrl });
  if (state.inApp) {
    return {
      title: currentShareInfo.shareTitle,
      subTitle: currentShareInfo.subTitle,
      imageUrl: currentShareInfo.imageUrl,
      url: currentShareInfo.shareUrl,
      channel: [1, 2, 3, 4, 6]
    };
  } else if (state.inWechat) {
    return Object.assign({}, state.shareInfo || {}, currentShareInfo);
  }
  return null;
}

exports.default = {
  pageTypes: pageTypes,
  getPageTitle: getPageTitle,
  getShareInfo: getShareInfo
};

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = __webpack_require__(32);

//
//
//
//
//
//
//
//

var inBrowser = true;
var Util = inBrowser ? __webpack_require__(69) : null;
exports.default = {
  computed: _extends({}, (0, _vuex.mapState)(['inApp']), (0, _vuex.mapState)(['musicPlaying'])),
  data: function data() {
    return {
      initialized: false,
      music: 'https://beauty.nosdn.127.net/beauty/Deep East Music - Pixie Dusting.mp3'
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.inApp) {
      this.play();
    } else {
      Util.wx.ready(function () {
        _this.play();
      });
    }
  },

  methods: _extends({}, (0, _vuex.mapMutations)(['setMusicStatus']), {
    play: function play() {
      if (this.initialized) return;
      this.initialized = true;
      var musicPlaying = this.musicPlaying;

      if (musicPlaying || musicPlaying === null) {
        this.togglePause(true);
      } else {
        // 为了解决微信播放问题，只有页面第一次打开才默认播放
        this.togglePause(false);
      }
    },
    togglePause: function togglePause(newStatus) {
      if (typeof newStatus !== 'boolean') {
        newStatus = !this.musicPlaying;
      }
      if (!newStatus) {
        this.$refs.music.pause();
        this.setMusicStatus(false);
      } else {
        this.$refs.music.play();
        this.setMusicStatus(true);
      }
    }
  })
};

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(449)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(447),
  /* template */
  __webpack_require__(453),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ad494618",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/common/Music.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Music.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ad494618", Component.options)
  } else {
    hotAPI.reload("data-v-ad494618", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('span', {
    staticClass: "music",
    class: {
      pause: !_vm.musicPlaying
    },
    on: {
      "click": _vm.togglePause
    }
  }), _c('audio', {
    ref: "music",
    attrs: {
      "src": _vm.music,
      "preload": "",
      "loop": "loop"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ad494618", module.exports)
  }
}

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {};

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {};

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Block = __webpack_require__(483);

var _Block2 = _interopRequireDefault(_Block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    block: _Block2.default
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(475)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(464),
  /* template */
  __webpack_require__(493),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-73ca8148",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/common/Block.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Block.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73ca8148", Component.options)
  } else {
    hotAPI.reload("data-v-73ca8148", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(469)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(465),
  /* template */
  __webpack_require__(487),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-290d06ce",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/common/Header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-290d06ce", Component.options)
  } else {
    hotAPI.reload("data-v-290d06ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banner"
  }, [_vm._v("大赛总冠军可获得iPhone X")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-290d06ce", module.exports)
  }
}

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal"
  }, [_c('block', {
    staticClass: "content"
  }, [_vm._t("default")], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4d00d5b4", module.exports)
  }
}

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "block"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73ca8148", module.exports)
  }
}

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _constant = __webpack_require__(442);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 默认状态
var defaultState = {
  showPrizeModal: false, // 展示领奖弹窗
  prizeType: 3, // 奖品类型
  showRuleModal: false, // 展示活动规则
  showGrassGuide: false, // 展示除草剂说明
  showGiveSuccessModal: false, // 展示赠送成功弹窗
  showInviteModal: false // 展示邀请好友弹窗
};

exports.default = {
  namespaced: true,
  state: _lodash2.default.cloneDeep(defaultState),
  mutations: {
    // 显示/隐藏除草剂说明弹窗
    toggleGrassGuideModal: function toggleGrassGuideModal(state, show) {
      state.showGrassGuide = (typeof show === 'undefined' ? 'undefined' : _typeof(show)) !== undefined ? show : !state.showGrassGuide;
    },

    // 显示/隐藏赠送除草剂成功弹窗
    toggleGiveSuccessModal: function toggleGiveSuccessModal(state, show) {
      state.showGiveSuccessModal = (typeof show === 'undefined' ? 'undefined' : _typeof(show)) !== undefined ? show : !state.showGiveSuccessModal;
    },
    togglePrizeModal: function togglePrizeModal(state, _ref) {
      var show = _ref.show,
          prizeType = _ref.prizeType;

      state.showPrizeModal = (typeof show === 'undefined' ? 'undefined' : _typeof(show)) !== undefined ? show : !state.showPrizeModal;
      if (prizeType) {
        state.prizeType = prizeType;
      }
    },

    // 显示/隐藏游戏说明
    toggleRuleModal: function toggleRuleModal(state, show) {
      state.showRuleModal = (typeof show === 'undefined' ? 'undefined' : _typeof(show)) !== undefined ? show : !state.showRuleModal;
    },

    // 显示/隐藏邀请好友弹窗
    toggleInviteModal: function toggleInviteModal(state, show) {
      state.showInviteModal = (typeof show === 'undefined' ? 'undefined' : _typeof(show)) !== undefined ? show : !state.showInviteModal;
    }
  },
  getters: {
    rawHasSent: function rawHasSent(state, getters, rootState) {
      state.hasSent = rootState.resource.hasSent || false;
      return state.hasSent;
    },
    products: function products(state, getters, rootState) {
      var grassProducts = _lodash2.default.sortBy(rootState.resource.grass || [], ['id']);
      var extraProperties = _lodash2.default.sortBy(_constant.productExtraProperties, ['id']);
      // 拼接基本信息和额外信息，返回完整的商品信息列表
      return _lodash2.default.map(grassProducts, function (p) {
        var info = extraProperties[p.id - 1];
        return Object.assign(p, info);
      });
    }
  }
};

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vuex = __webpack_require__(32);

var _PinkModal = __webpack_require__(443);

var _PinkModal2 = _interopRequireDefault(_PinkModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['user'],
  computed: _extends({}, (0, _vuex.mapState)('anniversaryDetail', ['showGrassGuide'])),
  methods: _extends({}, (0, _vuex.mapMutations)('anniversaryDetail', ['toggleGrassGuideModal'])),
  components: {
    pinkModal: _PinkModal2.default
  }
};

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(526)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(510),
  /* template */
  __webpack_require__(557),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6ec8a418",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/invite/GuideModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] GuideModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ec8a418", Component.options)
  } else {
    hotAPI.reload("data-v-6ec8a418", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showGrassGuide) ? _c('pink-modal', {
    staticClass: "grass-guide"
  }, [_c('div', {
    staticClass: "close-btn",
    on: {
      "click": function($event) {
        _vm.toggleGrassGuideModal(false)
      }
    }
  }), _c('div', {
    staticClass: "title"
  }, [_vm._v("除草剂说明")]), _c('div', {
    staticClass: "text"
  }, [_vm._v("\n    1.一瓶除草剂等于一次挑战机会"), _c('br'), _vm._v("\n    2.邀请好友赠送你更多除草剂"), _c('br'), _vm._v("\n    3.每个好友只能赠送一瓶除草剂\n  ")]), _c('div', {
    staticClass: "check-btn",
    on: {
      "click": function($event) {
        _vm.toggleGrassGuideModal(false)
      }
    }
  })]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6ec8a418", module.exports)
  }
}

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sticky = __webpack_require__(434);

var _sticky2 = _interopRequireDefault(_sticky);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    sticky: _sticky2.default
  }
}; //
//
//
//
//
//
//
//

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//

var _vuex = __webpack_require__(32);

var _PinkModal = __webpack_require__(443);

var _PinkModal2 = _interopRequireDefault(_PinkModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['user'],
  computed: _extends({}, (0, _vuex.mapState)('anniversaryDetail', ['showGiveSuccessModal'])),
  methods: _extends({}, (0, _vuex.mapMutations)('anniversaryDetail', ['toggleGiveSuccessModal']), {
    toBoardList: function toBoardList() {
      this.$router.push('/activity/anniversary/boardList');
    }
  }),
  components: {
    pinkModal: _PinkModal2.default
  }
};

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vuex = __webpack_require__(32);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _sticky = __webpack_require__(434);

var _sticky2 = _interopRequireDefault(_sticky);

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

var _store = __webpack_require__(99);

var _store2 = _interopRequireDefault(_store);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _detail = __webpack_require__(500);

var _detail2 = _interopRequireDefault(_detail);

var _constant = __webpack_require__(442);

var _shareUtil = __webpack_require__(445);

var _Header = __webpack_require__(484);

var _Header2 = _interopRequireDefault(_Header);

var _PinkBanner = __webpack_require__(837);

var _PinkBanner2 = _interopRequireDefault(_PinkBanner);

var _SuccessModal = __webpack_require__(855);

var _SuccessModal2 = _interopRequireDefault(_SuccessModal);

var _GuideModal = __webpack_require__(540);

var _GuideModal2 = _interopRequireDefault(_GuideModal);

var _Music = __webpack_require__(451);

var _Music2 = _interopRequireDefault(_Music);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;
var urlMap = {
  WECHATGIVE: '/api/activity/anniversary/invite/{0}/wechatgive'
};

exports.default = {
  beforeCreate: function beforeCreate() {
    // 动态注册vuex module
    _store2.default.registerModule('anniversaryDetail', _detail2.default);
  },
  beforeDestroy: function beforeDestroy() {
    _store2.default.unregisterModule('anniversaryDetail');
  },
  mounted: function mounted() {
    this.$eventTrace({
      id: "anniversaryActivityInviteMounted",
      category: "anniversaryInviteMounted",
      action: "mounted"
    });
    Util.preload(_constant.DA_URL);
    this.$nextTick(this.configWx);
    if (this.sendStatus) {
      if (this.openId) {
        // 统计赠送次数
        this.$eventTrace({
          id: 'anniversaryActivityGive',
          category: 'anniversaryActivityChance',
          action: 'give',
          eventLabel: this.openId
        });
      }
      if (this.sendStatus === 1) {
        // this.toggleGiveSuccessModal(true)
        // 统计赠送成功次数
        this.$eventTrace({
          id: 'anniversaryActivityReceiveChance',
          category: 'anniversaryActivityChance',
          action: 'receive',
          eventLabel: this.$route.params.id
        });
        this.handleSuccess();
      } else {
        var errMsg = this.sendStatus === 2 ? '您已经赠送过了~' : '哎呀，赠送失败了';
        (0, _toast2.default)(errMsg);
      }
    }
  },
  data: function data() {
    return {
      hasSent: this.$store.state.resource.hasSent || false,
      hasClicked: false
    };
  },

  computed: _extends({}, (0, _vuex.mapState)({
    user: function user(_ref) {
      var resource = _ref.resource;

      var user = resource.user || {};
      var displayUser = _lodash2.default.cloneDeep(user);
      displayUser.displayAvatarUrl = user.avatarUrl ? _jsUtil2.default.convertToNosUrl(user.avatarUrl, '220y220') : _constant.DEFAULT_AVATAR;
      displayUser.displayName = user.name.length > 6 ? user.name.slice(0, 6) + '...' : user.name;
      return displayUser;
    },
    giver: function giver(_ref2) {
      var resource = _ref2.resource;

      return resource.giver || [];
    },
    authorized: function authorized(_ref3) {
      var resource = _ref3.resource;

      return resource.authorized || false;
    },
    sendStatus: function sendStatus(_ref4) {
      var resource = _ref4.resource;

      return resource.sendStatus || 0;
    },
    openId: function openId(_ref5) {
      var resource = _ref5.resource;

      return resource.openId || '';
    },
    purchasable: function purchasable(_ref6) {
      var resource = _ref6.resource;

      return resource.purchasable || false;
    }
  }), (0, _vuex.mapState)('anniversaryDetail', ['showGrassGuide', 'showGiveSuccessModal']), (0, _vuex.mapGetters)('anniversaryDetail', ['rawHasSent', 'products']), {
    sendText: {
      get: function get() {
        var text = this.hasSent ? '已送过' : '挑战机会';
        return text;
      }
    }
  }),
  components: {
    pageHeader: _Header2.default,
    pinkBanner: _PinkBanner2.default,
    sticky: _sticky2.default,
    successModal: _SuccessModal2.default,
    guideModal: _GuideModal2.default,
    music: _Music2.default
  },
  methods: {
    // ...mapMutations('anniversaryDetail', ['toggleGrassGuideModal', 'toggleGiveSuccessModal']),
    callApp: function callApp() {
      var origin = window.location.origin;

      var wechatLink = encodeURIComponent('http://163.lu/wpsH70'); // 针对浮层点击后的应用宝地址增加单独监控
      var redirectLink = encodeURIComponent(origin + '/activity/anniversary');
      window.location.href = 'https://mei.163.com/applink/3rd?redirect=' + redirectLink + '&wechatLink=' + wechatLink;
    },
    giveBywechat: function giveBywechat() {
      var _this = this;

      this.hasClicked = true;
      if (this.hasSent || !this.purchasable) return;
      var userId = this.$route.params.id;
      var url = _jsUtil2.default.strFormat(urlMap.WECHATGIVE, userId);
      if (this.authorized) {
        // 统计赠送次数
        this.$eventTrace({
          id: 'anniversaryActivityGive',
          category: 'anniversaryActivityChance',
          action: 'give',
          eventLabel: this.openId
        });
        (0, _fetch2.default)(url).then(function (data) {
          // this.toggleGiveSuccessModal(true)
          _this.hasSent = true;
          _this.$eventTrace({
            id: 'anniversaryActivityReceiveChance',
            category: 'anniversaryActivityChance',
            action: 'receive',
            eventLabel: userId
          });
          _this.handleSuccess();
        }, function (errMsg) {
          (0, _toast2.default)(errMsg || '操作失败');
        });
      } else {
        location.href = '/activity/anniversary/invite/' + userId + '/wechatgive';
        // this.$router.push(`/activity/anniversary/invite/${userId}/wechatgive`)
      }
    },
    configWx: function configWx() {
      var shareInfo = (0, _shareUtil.getShareInfo)(_shareUtil.pageTypes.INVITE, this.$route.params.id);
      var eventOptions = {
        id: 'anniversaryActivityShareInviteInWechat',
        category: 'anniversaryActivityInvite',
        action: 'share'
      };
      Util.configWxShare(_extends({ shareInfo: shareInfo }, Util.statistics(eventOptions)));
    },
    handleSuccess: function handleSuccess() {
      var _this2 = this;

      (0, _toast2.default)('赠送成功~');
      setTimeout(function () {
        _this2.$router.push('/activity/anniversary');
      }, 1000);
    }
  }
};

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(783)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(582),
  /* template */
  __webpack_require__(1000),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-71b58183",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/common/PinkBanner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PinkBanner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71b58183", Component.options)
  } else {
    hotAPI.reload("data-v-71b58183", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(768)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(605),
  /* template */
  __webpack_require__(985),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5ff3da0d",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/invite/SuccessModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SuccessModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ff3da0d", Component.options)
  } else {
    hotAPI.reload("data-v-5ff3da0d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-main",
    attrs: {
      "id": "main"
    }
  }, [_c('div', {
    staticClass: "bg"
  }, [_c('page-header'), _c('div', {
    staticClass: "grass-wrapper"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.displayAvatarUrl
    }
  })]), _c('div', {
    staticClass: "sub-title"
  }, [_c('p', [_vm._v(_vm._s(_vm.user.displayName) + " 种草的三件产品")]), _c('p', [_vm._v("送ta一次机会，助ta把种草产品带回家")]), _c('p', [_vm._v("更有机会获得iPhone X")])]), _c('ul', {
    staticClass: "products"
  }, _vm._l((_vm.products), function(p, index) {
    return _c('li', [_c('div', [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": p.coverUrl
      }
    })]), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(p.name))]), _c('div', {
      staticClass: "desc"
    }, [_vm._v(_vm._s(p.specification))]), _c('div', {
      staticClass: "grass"
    }, [_vm._v(_vm._s(p.grassCount) + "人种草")])])])])
  }))]), _c('ul', {
    staticClass: "givers"
  }, [(_vm.giver.length > 0) ? _c('p', [_vm._v("这些人赠送了挑战机会")]) : _vm._e(), _vm._l((_vm.giver), function(g, index) {
    return _c('li', [_vm._v("\n        " + _vm._s(g.name) + " 送了一次挑战机会\n      ")])
  })], 2), (_vm.purchasable) ? _c('div', {
    staticClass: "give-btn",
    class: {
      sent: _vm.hasSent, active: !_vm.hasSent && !_vm.hasClicked
    },
    on: {
      "click": _vm.giveBywechat
    }
  }, [(!_vm.hasSent) ? _c('p', [_vm._v("送TA")]) : _vm._e(), _c('p', [_vm._v(_vm._s(_vm.sendText))])]) : _vm._e()], 1), _c('pink-banner', [(_vm.purchasable) ? _c('div', {
    staticClass: "join-btn",
    on: {
      "click": _vm.callApp
    }
  }) : _c('div', {
    staticClass: "end"
  }, [_vm._v("活动已结束，下次记得早点参加哦！")])]), _c('successModal', {
    attrs: {
      "user": _vm.user
    }
  }), _c('guideModal'), _c('music')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0977de42", module.exports)
  }
}

/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showGiveSuccessModal) ? _c('pink-modal', {
    staticClass: "success-modal"
  }, [_c('div', {
    staticClass: "close-btn",
    on: {
      "click": function($event) {
        _vm.toggleGiveSuccessModal(false)
      }
    }
  }), _c('div', {
    staticClass: "title"
  }, [_vm._v("赠送成功！")]), _c('div', {
    staticClass: "text"
  }, [_vm._v("感谢你，" + _vm._s(_vm.user.name) + "已成功收到你赠送的一次挑战机会")]), _c('div', {
    staticClass: "check-btn",
    on: {
      "click": _vm.toBoardList
    }
  }), _c('div', {
    staticClass: "note"
  }, [_vm._v("点击查看美学周年榜单盘点")])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ff3da0d", module.exports)
  }
}

/***/ })

});
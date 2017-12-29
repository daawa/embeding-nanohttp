webpackJsonp([20],{

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(741)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(604),
  /* template */
  __webpack_require__(958),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-431accd3",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/invite/Board.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Board.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-431accd3", Component.options)
  } else {
    hotAPI.reload("data-v-431accd3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ 469:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ 509:
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

exports.default = {
  data: function data() {
    return {
      boards: [{
        id: '17457',
        name: '口碑好物'
      }, {
        id: 'prx1d9e651322a8413f9d8d647f65e29cb0',
        name: '最热品牌',
        type: 'repo'
      }, {
        id: '17458',
        name: '测评冠军'
      }, {
        id: '16498',
        name: '博主爱用'
      }, {
        id: '10249',
        name: '全球新品'
      }, {
        id: '18388',
        name: '最佳达人'
      }, {
        id: '20277',
        name: '实力打CALL视频'
      }]
    };
  },

  computed: _extends({}, (0, _vuex.mapState)(['inApp'])),
  methods: {
    toTag: function toTag(board) {
      var type = board.type || 'tag';
      var link = this.inApp ? this.$beauty.getURLScheme(type, board.id) : '/' + type + '/' + board.id + '?utm_source=anniversaryActivity';
      if (this.inApp) {
        window.location.href = link;
      } else {
        this.$router.push(link);
      }
    }
  }
};

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(525)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(509),
  /* template */
  __webpack_require__(556),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-60e81473",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/common/BoardList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BoardList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60e81473", Component.options)
  } else {
    hotAPI.reload("data-v-60e81473", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "m-boardList"
  }, _vm._l((_vm.boards), function(item, index) {
    return _c('li', {
      class: 'board-' + index
    }, [_c('div', {
      staticClass: "wrapper",
      on: {
        "click": function($event) {
          _vm.toTag(item)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(item.name) + "榜")])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60e81473", module.exports)
  }
}

/***/ }),

/***/ 604:
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

var _constant = __webpack_require__(442);

var _Header = __webpack_require__(484);

var _Header2 = _interopRequireDefault(_Header);

var _BoardList = __webpack_require__(538);

var _BoardList2 = _interopRequireDefault(_BoardList);

var _shareUtil = __webpack_require__(445);

var _Music = __webpack_require__(451);

var _Music2 = _interopRequireDefault(_Music);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;

exports.default = {
  components: {
    pageHeader: _Header2.default,
    boardList: _BoardList2.default,
    music: _Music2.default
  },
  mounted: function mounted() {
    this.$eventTrace({
      id: "anniversaryActivityListMounted",
      category: "anniversaryListMounted",
      action: "mounted"
    });
    Util.preload(_constant.DA_URL);
    this.$nextTick(this.configWx);
  },

  methods: {
    configWx: function configWx() {
      var shareInfo = (0, _shareUtil.getShareInfo)(_shareUtil.pageTypes.BOARD_LIST);
      var eventOptions = {
        id: 'anniversaryActivityShareListInWechat',
        category: 'anniversaryActivityList',
        action: 'share'
      };
      Util.configWxShare(_extends({ shareInfo: shareInfo }, Util.statistics(eventOptions)));
    }
  }
};

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 958:
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
    staticClass: "title"
  }, [_vm._v("美学一周年榜单盘点")]), _c('div', {
    staticClass: "board-list"
  }, [_c('board-list')], 1)], 1), _c('music')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-431accd3", module.exports)
  }
}

/***/ })

});
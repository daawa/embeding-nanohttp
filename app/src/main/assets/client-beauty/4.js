webpackJsonp([4],{

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showRuleModal) ? _c('pink-modal', {
    staticClass: "activity-rule"
  }, [_c('div', {
    staticClass: "close-btn",
    on: {
      "click": function($event) {
        _vm.toggleRuleModal(false)
      }
    }
  }), _c('div', {
    staticClass: "title"
  }, [_vm._v("活动规则")]), _c('ul', {
    staticClass: "rules"
  }, [_c('li', [_c('div', {
    staticClass: "sub-title"
  }, [_vm._v("- 活动时间")]), _c('div', {
    staticClass: "rule"
  }, [_vm._v("2017年10月16日-2017年10月18日24点")])]), _c('li', [_c('div', {
    staticClass: "sub-title"
  }, [_vm._v("- 活动玩法：")]), _c('div', {
    staticClass: "rule"
  }, [_vm._v("\n        1、用户选择最爱的3件产品（确认后不可更改）；"), _c('br'), _vm._v("\n        2、进入拔草挑战，用最快速度找出所选单品，耗时越短，排名越高；"), _c('br'), _vm._v("\n        3、每天进入活动页面可获得3次挑战机会，也可分享活动请微信好友赠送挑战机会，每个好友限赠送1次；\n      ")])]), _c('li', [_c('div', {
    staticClass: "sub-title"
  }, [_vm._v("- 奖项设置：")]), _c('div', {
    staticClass: "rule"
  }, [_vm._v("\n        1、总榜冠军可获得iPhone X一部（64G，颜色随机）；"), _c('br'), _vm._v("\n        2、总榜排名第2-10名，可获得自选的3件最爱产品；"), _c('br'), _vm._v("\n        3、每日排名前100名的用户可获得神秘美妆盲盒一份；"), _c('br'), _vm._v("\n        4、获得日榜奖品的用户将不再参与后续日榜排名，但仍可继续挑战，参与总榜排名；"), _c('br'), _vm._v("\n        5、如有多个用户成绩一致，则以达成的时间先后顺序进行排名；"), _c('br'), _vm._v("\n        6、如在游戏过程中出现作弊刷榜行为，美学有权取消作弊用户的获奖资格，奖项顺延；\n      ")])])])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7996ea66", module.exports)
  }
}

/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showInviteModal) ? _c('pink-modal', {
    staticClass: "invite"
  }, [_c('div', {
    staticClass: "close-btn",
    on: {
      "click": function($event) {
        _vm.toggleInviteModal(false)
      }
    }
  }), _c('div', {
    staticClass: "text"
  }, [_vm._v("\n    今天的挑战机会已用完～"), _c('br'), _vm._v("\n    可以邀请好友赠送挑战机会\n  ")]), _c('div', {
    staticClass: "invite-btn",
    on: {
      "click": _vm.toInvite
    }
  })]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8e21948e", module.exports)
  }
}

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(748)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(603),
  /* template */
  __webpack_require__(965),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4b1fb662",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b1fb662", Component.options)
  } else {
    hotAPI.reload("data-v-4b1fb662", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _constant = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = {};
_.isUndef = function (v) {
  return v === undefined || v === null;
};
_.isDef = function (v) {
  return v !== undefined && v !== null;
};
_.nosUrl = function (url, nosThumbnail) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!url) return;
  var force = options.force,
      noEnlarge = options.noEnlarge;

  var fromNos = /beauty\.nosdn\.127\.net/.test(url) || /\.nos\.netease\.com/g.test(url);
  var isGif = !!~url.indexOf('.gif');
  if (fromNos && (!isGif || force)) {
    if (url.indexOf('?imageView') < 0) {
      url += "?";
    } else {
      url += "%7C"; // '|'，微信不能直接处理这个符号，需要encode
    }
    url += "imageView&quality=95&interlace=1";
    if (force && isGif) url += "&type=png"; // 强制缩略裁剪gif
    if (nosThumbnail) {
      if (!noEnlarge) url += "&enlarge=1";
      url += "&thumbnail=" + nosThumbnail;
    }
  }
  return url;
};

// 获取带有展示宽高信息的图片对象
_.getFormattedImage = function (img, boxWidth) {
  var newItem = _lodash2.default.cloneDeep(img);
  if (img.height && img.width) {
    var maxWidth = boxWidth / 75;
    var expectWidth = img.width / 75;
    newItem.width = Math.min(maxWidth, expectWidth).toFixed(3);
    newItem.height = (img.height / img.width * newItem.width).toFixed(3) + 'rem';
    newItem.width += 'rem';
  } else {
    newItem.width = 'auto';
    newItem.height = 'auto';
  }
  newItem.url = _.nosUrl(newItem.url, '750x0', {
    noEnlarge: true
  });
  return newItem;
};

// 字符串长度 汉字占2个字符
_.length = function (str) {
  try {
    var length = 0;
    if (!str) str = '';
    for (var i = 0; i < str.length; i++) {
      var character = str.charAt(i);
      escape(character).length > 3 ? length += 2 : length += 1;
    }
    return length;
  } catch (err) {
    /* eslint-disable */
    console.log(err);
    /* eslint-enable */
  }
};

// 合并连续空白符
_.mergeSpace = function (str) {
  str = str || '';
  str = str.replace(/\s{2,}/g, ' '); // 合并连续空白符
  str = str.replace(/\n/g, ' '); // \n替换为空格
  return str;
};

// 截取固定长度的字符串，汉字占两个字符
_.substr = function (str, length) {
  str = _.mergeSpace(str);
  var currLength = 0;
  if (!str) str = '';
  for (var i = 0; i < str.length; i++) {
    var character = str[i];
    var characterLength = _.length(character);
    var willLength = currLength + characterLength;
    if (willLength === length) {
      return str.substring(0, i + 1);
    } else if (willLength > length) {
      return str.substring(0, i);
    } else {
      currLength += characterLength;
    }
  }
  return str;
};

// 从尾部开始，截取固定长度的字符串，汉字占两个字符
_.substrReverse = function (str, length) {
  str = _.mergeSpace(str);
  var currLength = 0;
  if (!str) str = '';
  for (var i = str.length - 1; i >= 0; i--) {
    var character = str[i];
    var characterLength = _.length(character);
    var willLength = currLength + characterLength;
    if (willLength === length) {
      return str.substring(i);
    } else if (willLength > length) {
      return str.substring(i + 1);
    } else {
      currLength += characterLength;
    }
  }
  return str;
};

// 是否vip用户（非普通用户 && 非自己人）
// 0:普通用户，1:企业，2:明星，3:自己人，4:官方账号，5:美学家，6:海外博主
_.isVipUser = function () {
  var authType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return ~[1, 2, 4, 5].indexOf(authType);
};

// 生成易于展示的user对象
_.getDisplayUser = function () {
  var originUser = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var user = _lodash2.default.cloneDeep(originUser);
  user.avatarUrl = _.nosUrl(user.avatarUrl || _constant.IMGS.AVATAR, '120y120');
  user.vip = _.isVipUser(user.authType);
  if (user.vip && user.authDescription) {
    user.desc = user.authDescription;
  } else {
    user.desc = user.age || '';
    if (user.desc && user.skinType) {
      user.desc += ' | ';
    }
    if (user.skinType) {
      user.desc += user.skinType;
    }
  }
  return user;
};

// 所有显示点赞、浏览、收藏数、评论数、粉丝数的地方，显示规则遵循：
// 不到10万显示真实数字。超过10万显示X万，数字向下取整
_.getDisplayCount = function (number) {
  number = number || 0;
  return number < 100000 ? number : parseInt(number / 10000) + '万';
};

// 部分由于空间不足而无法显示6位数的地方，如心得、合辑详情页底部的button上。显示规则遵循：
// 超过999，显示999+
_.getShortDisplayCount = function (number) {
  return number < 1000 ? number : '999+';
};

// 视频播放时长处理，显示规则遵循：hh:mm:ss
_.getVideoDuration = function (duration) {
  var displayDuration = '';
  var hour = parseInt(duration / 60 / 60);
  var minute = parseInt(duration / 60 - hour * 60);
  var second = parseInt(duration % 60);

  if (hour) displayDuration += hour + ':';
  displayDuration += minute + ':' + (second > 9 ? second : '0' + second);
  return displayDuration;
};

_.stringFormat = function () {
  if (arguments.length === 0) return null;
  var str = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    str = str.replace('{' + (i - 1) + '}', arguments[i]);
  }
  return str;
};

// 周年活动，获取用户拔草时间
_.getGrassTime = function (record) {
  var displayRecord = (record / 1000).toFixed(3);
  return displayRecord + 's';
};

exports.default = _;

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

/***/ 525:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 526:
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

/***/ 581:
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
  data: function data() {
    return {
      url: '//beauty.nosdn.127.net/beauty/img/ba47ac58-b868-4ed8-9cdb-8843c0fcecac..png'
    };
  },

  methods: {
    callApp: function callApp() {
      var origin = window.location.origin;

      var wechatLink = encodeURIComponent('http://163.lu/wpsH70'); // 针对浮层点击后的应用宝地址增加单独监控
      var redirectLink = encodeURIComponent(origin + '/activity/anniversary');
      window.location.href = 'https://mei.163.com/applink/3rd?redirect=' + redirectLink + '&wechatLink=' + wechatLink;
    }
  }
};

/***/ }),

/***/ 583:
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

var _vuex = __webpack_require__(32);

var _sticky = __webpack_require__(434);

var _sticky2 = _interopRequireDefault(_sticky);

var _DownloadBtn = __webpack_require__(836);

var _DownloadBtn2 = _interopRequireDefault(_DownloadBtn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['leftChance', 'ifJoin', 'purchasable', 'isLogin'],
  computed: _extends({}, (0, _vuex.mapState)({
    inApp: 'inApp'
  })),
  methods: _extends({}, (0, _vuex.mapMutations)('anniversaryDetail', ['toggleInviteModal']), {
    toGame: function toGame() {
      var _this = this;

      if (!this.leftChance) {
        this.toggleInviteModal(true);
        return;
      }
      if (this.inApp && !this.isLogin) {
        this.$beauty.login().then(function (user) {
          _this.$router.replace('/activity/anniversary/game');
        }).catch(function () {
          // 空的异常处理
        });
        return;
      } else {
        this.$router.replace('/activity/anniversary/game');
      }
    }
  }),
  components: {
    sticky: _sticky2.default,
    downloadBtn: _DownloadBtn2.default
  }
};

/***/ }),

/***/ 584:
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

var _vuex = __webpack_require__(32);

var _PinkModal = __webpack_require__(443);

var _PinkModal2 = _interopRequireDefault(_PinkModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)('anniversaryDetail', ['showPrizeModal', 'prizeType']), {
    prizeName: function prizeName() {
      switch (this.prizeType) {
        case 1:
          return ' iphoneX 一部';
        case 2:
          return '三件自选最爱单品';
      }
    }
  }),
  methods: _extends({}, (0, _vuex.mapMutations)('anniversaryDetail', ['togglePrizeModal']), {
    toEditAddress: function toEditAddress() {
      location.href = 'https://mei.163.com/uxStudy?redirect=http%3A%2F%2Fsurvey2.163.com%2Fhtml%2Fadd0915%2Fpaper.html';
    }
  }),
  components: {
    pinkModal: _PinkModal2.default
  }
};

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _pure = __webpack_require__(433);

var _pure2 = _interopRequireDefault(_pure);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _constant = __webpack_require__(442);

var _RankMsg = __webpack_require__(841);

var _RankMsg2 = _interopRequireDefault(_RankMsg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['dailyRank', 'totalRank', 'userId', 'user'],
  data: function data() {
    return {
      currentIndex: 0,
      tabs: ['daily', 'total']
    };
  },
  computed: {
    computedDailyRank: function computedDailyRank() {
      var displayDailyRank = _lodash2.default.cloneDeep(this.dailyRank);
      var displayTopTen = this.dailyRank.topTenList && this.dailyRank.topTenList.length > 0 ? this.dailyRank.topTenList.map(function (item, index) {
        var newItem = _lodash2.default.cloneDeep(item);
        newItem.index = index + 1;
        newItem.avatarUrl = item.avatarUrl ? _jsUtil2.default.convertToNosUrl(item.avatarUrl, '160y160') : _constant.DEFAULT_AVATAR;
        newItem.displayRecord = _pure2.default.getGrassTime(item.record);
        return newItem;
      }) : [];
      displayDailyRank.displayTopTen = displayTopTen;
      return displayDailyRank;
    },
    computedTotalRank: function computedTotalRank() {
      var displayTotalRank = _lodash2.default.cloneDeep(this.totalRank);
      var displayTopTen = this.totalRank.topTenList && this.totalRank.topTenList.length > 0 ? this.totalRank.topTenList.map(function (item, index) {
        var newItem = _lodash2.default.cloneDeep(item);
        newItem.index = index + 1;
        newItem.avatarUrl = item.avatarUrl ? _jsUtil2.default.convertToNosUrl(item.avatarUrl, '160y160') : _constant.DEFAULT_AVATAR;
        newItem.displayRecord = _pure2.default.getGrassTime(item.record);
        return newItem;
      }) : [];
      displayTotalRank.displayTopTen = displayTopTen;
      return displayTotalRank;
    },
    ranks: function ranks() {
      var list = this.currentIndex ? this.computedTotalRank : this.computedDailyRank;
      return list;
    },
    displayUser: function displayUser() {
      var displayUser = _lodash2.default.cloneDeep(this.user);
      displayUser.avatarUrl = this.user.avatarUrl ? _jsUtil2.default.convertToNosUrl(this.user.avatarUrl, '160y160') : _constant.DEFAULT_AVATAR;
      displayUser.record = _pure2.default.getGrassTime(this.user.record);
      return displayUser;
    },

    // 用户自身记录是否显示在第11位
    showSelf: function showSelf() {
      // 日榜开奖以后，不再显示第11位的信息
      var hasDailyPrized = this.computedDailyRank.rankStatus && this.currentIndex === 0;
      return this.ranks.userRank > 10 && !hasDailyPrized;
    }
  },
  components: {
    rankMsg: _RankMsg2.default
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

/***/ }),

/***/ 586:
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

var _vuex = __webpack_require__(32);

var _PrizeModal = __webpack_require__(839);

var _PrizeModal2 = _interopRequireDefault(_PrizeModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['currentIndex', 'ranks'],
  computed: {
    userRank: function userRank() {
      var rankText = this.ranks.userRank > 0 ? '\u7B2C' + this.ranks.userRank + '\u540D' : '暂无成绩';
      return rankText;
    },
    showDailyPrized: function showDailyPrized() {
      return this.ranks.rankStatus && this.ranks.userRank > 0 && this.ranks.userRank <= 100;
    },
    showTotalPrized: function showTotalPrized() {
      return this.ranks.rankStatus && this.ranks.userRank > 0 && this.ranks.userRank <= 10;
    },
    totalPrizeText: function totalPrizeText() {
      var text = '';
      if (this.ranks.userRank > 0 && this.ranks.userRank <= 10) {
        text = this.ranks.userRank === 1 ? 'iPhone X一部' : '自选最爱单品三件!';
      }
      return text;
    }
  },
  components: {
    prizeModal: _PrizeModal2.default
  },
  methods: _extends({}, (0, _vuex.mapMutations)('anniversaryDetail', ['togglePrizeModal']), {
    showPrizeModal: function showPrizeModal() {
      this.togglePrizeModal({
        show: true,
        prizeType: this.ranks.prizeType
      });
    }
  })
};

/***/ }),

/***/ 587:
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

var _vuex = __webpack_require__(32);

var _PinkModal = __webpack_require__(443);

var _PinkModal2 = _interopRequireDefault(_PinkModal);

var _shareUtil = __webpack_require__(445);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['userId'],
  computed: _extends({}, (0, _vuex.mapState)('anniversaryDetail', ['showInviteModal'])),
  methods: _extends({}, (0, _vuex.mapMutations)('anniversaryDetail', ['toggleInviteModal']), {
    toInvite: function toInvite() {
      var _this = this;

      var shareInfo = (0, _shareUtil.getShareInfo)(_shareUtil.pageTypes.INVITE, this.userId);
      this.$beauty.share(Object.assign(shareInfo, {
        channel: [1, 2]
      })).then(function () {
        // APP中游戏结束分享到微信统计
        _this.$eventTrace({
          id: "anniversaryActivityDetailShareInApp",
          category: "anniversaryActivityDetailInApp",
          action: "share",
          eventLabel: "activityModal"
        });
      }).catch(function () {});
    }
  }),
  components: {
    pinkModal: _PinkModal2.default
  }
};

/***/ }),

/***/ 588:
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

var _vuex = __webpack_require__(32);

var _PinkModal = __webpack_require__(443);

var _PinkModal2 = _interopRequireDefault(_PinkModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)('anniversaryDetail', ['showRuleModal'])),
  methods: _extends({}, (0, _vuex.mapMutations)('anniversaryDetail', ['toggleRuleModal'])),
  components: {
    pinkModal: _PinkModal2.default
  }
};

/***/ }),

/***/ 603:
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

var _vuex = __webpack_require__(32);

var _pure = __webpack_require__(433);

var _pure2 = _interopRequireDefault(_pure);

var _sticky = __webpack_require__(434);

var _sticky2 = _interopRequireDefault(_sticky);

var _store = __webpack_require__(99);

var _store2 = _interopRequireDefault(_store);

var _detail = __webpack_require__(500);

var _detail2 = _interopRequireDefault(_detail);

var _constant = __webpack_require__(442);

var _RankList = __webpack_require__(840);

var _RankList2 = _interopRequireDefault(_RankList);

var _BoardList = __webpack_require__(538);

var _BoardList2 = _interopRequireDefault(_BoardList);

var _Bottom = __webpack_require__(838);

var _Bottom2 = _interopRequireDefault(_Bottom);

var _Header = __webpack_require__(484);

var _Header2 = _interopRequireDefault(_Header);

var _ruleModal = __webpack_require__(843);

var _ruleModal2 = _interopRequireDefault(_ruleModal);

var _GuideModal = __webpack_require__(540);

var _GuideModal2 = _interopRequireDefault(_GuideModal);

var _inviteModal = __webpack_require__(842);

var _inviteModal2 = _interopRequireDefault(_inviteModal);

var _shareUtil = __webpack_require__(445);

var _Music = __webpack_require__(451);

var _Music2 = _interopRequireDefault(_Music);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;

exports.default = {
  beforeCreate: function beforeCreate() {
    // 动态注册vuex module
    _store2.default.registerModule('anniversaryDetail', _detail2.default);
  },
  beforeDestroy: function beforeDestroy() {
    _store2.default.unregisterModule('anniversaryDetail');
  },
  mounted: function mounted() {
    Util.preload([_constant.MODAL_SPIRIT, _constant.DA_URL]);
    Util.refreshPage({
      pageTitle: '一周年拔草挑战赛'
    });
    this.$eventTrace({
      id: "anniversaryActivityDetailMounted",
      category: "anniversaryActivityDetail",
      action: "mounted",
      eventLabel: this.inApp ? 'inApp' : 'notInApp'
    });
    this.$nextTick(this.configWx);
  },

  computed: _extends({}, (0, _vuex.mapState)(['inApp']), (0, _vuex.mapState)({
    activityDetail: function activityDetail(_ref) {
      var resource = _ref.resource;

      return resource.activityDetailVO;
    },
    ifJoin: function ifJoin() {
      return this.activityDetail.ifJoin || false;
    },
    userId: function userId() {
      return this.activityDetail.userId;
    },
    user: function user() {
      return this.activityDetail.user || {};
    },
    dailyRank: function dailyRank() {
      return this.activityDetail.dailyRank || [];
    },
    totalRank: function totalRank() {
      return this.activityDetail.totalRank || [];
    },
    record: function record() {
      return this.activityDetail.record || 0;
    },
    displayRecord: function displayRecord() {
      var displayText1 = '挑战失败';
      var displayText2 = this.record ? '我的纪录' : '继续挑战哦~';
      return {
        time: _pure2.default.getGrassTime(this.record),
        displayText1: displayText1,
        displayText2: displayText2
      };
    },
    purchasable: function purchasable() {
      return this.activityDetail.purchasable || false;
    },
    isLogin: function isLogin() {
      return this.activityDetail.isLogin || false;
    },
    leftChance: function leftChance() {
      if (this.activityDetail.isLogin) {
        return this.activityDetail.leftChance;
      } else {
        return 3;
      }
    }
  })),
  methods: _extends({}, (0, _vuex.mapMutations)('anniversaryDetail', ['toggleRuleModal']), {
    // native分享
    share: function share() {
      var _this = this;

      if (!this.purchasable) return;
      var shareInfo = (0, _shareUtil.getShareInfo)(_shareUtil.pageTypes.INVITE, this.userId);
      this.$beauty.share(Object.assign(shareInfo, {
        channel: [1, 2]
      })).then(function () {
        // APP中游戏结束分享到微信统计
        _this.$eventTrace({
          id: "anniversaryActivityDetailShareInApp",
          category: "anniversaryActivityDetailInApp",
          action: "share",
          eventLabel: "activityDetail"
        });
      }).catch(function () {});
    },

    // 配置微信sdk
    configWx: function configWx() {
      var shareInfo = (0, _shareUtil.getShareInfo)(_shareUtil.pageTypes.DETAIL);
      var eventOptions = {
        id: 'anniversaryActivityShareDetailInWechat',
        category: 'anniversaryActivityDetail',
        action: 'share'
      };
      Util.configWxShare(_extends({ shareInfo: shareInfo }, Util.statistics(eventOptions)));
    }
  }),
  components: {
    sticky: _sticky2.default,
    rankList: _RankList2.default,
    boardList: _BoardList2.default,
    bottom: _Bottom2.default,
    pageHeader: _Header2.default,
    ruleModal: _ruleModal2.default,
    music: _Music2.default,
    guideModal: _GuideModal2.default,
    inviteModal: _inviteModal2.default
  }
};

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(755)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(581),
  /* template */
  __webpack_require__(972),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-522d7ac3",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/common/DownloadBtn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DownloadBtn.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-522d7ac3", Component.options)
  } else {
    hotAPI.reload("data-v-522d7ac3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(703)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(583),
  /* template */
  __webpack_require__(919),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0800f546",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/detail/Bottom.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Bottom.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0800f546", Component.options)
  } else {
    hotAPI.reload("data-v-0800f546", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(746)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(584),
  /* template */
  __webpack_require__(963),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-49a56b56",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/detail/PrizeModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PrizeModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49a56b56", Component.options)
  } else {
    hotAPI.reload("data-v-49a56b56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(737)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(585),
  /* template */
  __webpack_require__(954),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3f9e2c76",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/detail/RankList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RankList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f9e2c76", Component.options)
  } else {
    hotAPI.reload("data-v-3f9e2c76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(766)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(586),
  /* template */
  __webpack_require__(983),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5ee983ac",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/detail/RankMsg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RankMsg.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ee983ac", Component.options)
  } else {
    hotAPI.reload("data-v-5ee983ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(797)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(587),
  /* template */
  __webpack_require__(1015),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-8e21948e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/detail/inviteModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] inviteModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e21948e", Component.options)
  } else {
    hotAPI.reload("data-v-8e21948e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(788)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(588),
  /* template */
  __webpack_require__(1006),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7996ea66",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/anniversary/detail/ruleModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ruleModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7996ea66", Component.options)
  } else {
    hotAPI.reload("data-v-7996ea66", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('sticky', {
    attrs: {
      "bottom": "-1"
    }
  }, [_c('div', {
    staticClass: "chance-wrapper"
  }, [(_vm.purchasable) ? _c('div', {
    style: ({
      'height': '100%'
    })
  }, [(_vm.inApp) ? _c('div', {
    staticClass: "chance-cnt"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('i', {
    staticClass: "icon-chance"
  }), _vm._v("X" + _vm._s(_vm.leftChance))]), _c('div', [_vm._v("今天还有" + _vm._s(_vm.leftChance) + "次机会")])]), _c('div', {
    staticClass: "gameBtn",
    class: {
      start: !_vm.ifJoin || !_vm.isLogin
    },
    on: {
      "click": _vm.toGame
    }
  })]) : _c('download-btn')], 1) : _c('div', {
    staticClass: "end"
  }, [_vm._v("活动已结束，下次记得早点参加哦！")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0800f546", module.exports)
  }
}

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-ranklist"
  }, [_c('ul', {
    staticClass: "tabs"
  }, _vm._l((_vm.tabs), function(tab, index) {
    return _c('li', {
      key: index,
      class: {
        active: _vm.currentIndex == index
      },
      on: {
        "click": function($event) {
          _vm.currentIndex = index
        }
      }
    }, [_c('div', {
      staticClass: "tab"
    })])
  })), _c('div', {
    staticClass: "seperate"
  }), _c('rank-msg', {
    attrs: {
      "currentIndex": _vm.currentIndex,
      "ranks": _vm.ranks
    }
  }), _c('ul', {
    staticClass: "ranks"
  }, [_vm._l((_vm.ranks.displayTopTen), function(item, index) {
    return _c('li', {
      key: item.id,
      staticClass: "rank",
      class: {
        me: item.id == _vm.userId
      }
    }, [_c('span', {
      staticClass: "num"
    }, [_vm._v(_vm._s(item.index) + ".")]), _c('div', {
      staticClass: "avatar"
    }, [(index < 3) ? _c('div', {
      class: 'icon-rank ' + 'icon-rank-' + index
    }) : _vm._e(), _c('img', {
      attrs: {
        "src": item.avatarUrl
      }
    })]), _c('span', [_vm._v(_vm._s(item.name))]), (item.id == _vm.userId) ? _c('div', {
      staticClass: "icon-me"
    }, [_vm._v("本仙女")]) : _vm._e(), _c('span', {
      staticClass: "record"
    }, [_vm._v(_vm._s(item.displayRecord))]), (item.id == _vm.userId) ? _c('div', {
      staticClass: "icon-best"
    }) : _vm._e()])
  }), (_vm.showSelf) ? _c('li', {
    staticClass: "rank me"
  }, [_c('div', {
    staticClass: "num",
    class: {
      fs24: _vm.ranks.userRank > 9999
    }
  }, [(_vm.ranks.userRank <= 99999) ? _c('span', [_vm._v(_vm._s(_vm.ranks.userRank) + ".")]) : _c('div', {
    staticClass: "rankText"
  }, [_vm._v("太靠后到"), _c('br'), _vm._v("无法显示")])]), _c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.displayUser.avatarUrl
    }
  })]), _c('span', [_vm._v(_vm._s(_vm.displayUser.name))]), _c('div', {
    staticClass: "icon-me"
  }, [_vm._v("本仙女")]), _c('span', {
    staticClass: "record"
  }, [_vm._v(_vm._s(_vm.displayUser.record))]), _c('div', {
    staticClass: "icon-best"
  })]) : _vm._e()], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3f9e2c76", module.exports)
  }
}

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showPrizeModal) ? _c('pink-modal', {
    staticClass: "prize"
  }, [_c('div', {
    staticClass: "close-btn",
    on: {
      "click": function($event) {
        _vm.togglePrizeModal({
          show: false
        })
      }
    }
  }), _c('div', {
    staticClass: "title"
  }, [(_vm.prizeType < 3) ? _c('span', [_vm._v("恭喜获得" + _vm._s(this.prizeName) + "！")]) : _c('span', [_vm._v("恭喜获得美学种草酱"), _c('br'), _vm._v("为你挑选的美妆神秘盲盒一份")])]), _c('div', {
    class: 'prize-img prize-img-' + _vm.prizeType
  }), _c('div', {
    staticClass: "note"
  }, [_vm._v("请您在10月22日24点前确认已完成地址信息的填写。我们将会尽快为您寄送奖品。")]), _c('div', {
    staticClass: "address-btn",
    on: {
      "click": _vm.toEditAddress
    }
  }), _c('div', {
    staticClass: "note-1"
  }, [_vm._v("\n    如填写信息有误，可重新填写；"), _c('br'), _vm._v("\n    如已提交正确地址，请勿重复填写\n  ")])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-49a56b56", module.exports)
  }
}

/***/ }),

/***/ 965:
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
    staticClass: "main"
  }, [_c('div', {
    staticClass: "awards"
  }, [_c('div', {
    staticClass: "title"
  }), _c('div', {
    staticClass: "rules",
    on: {
      "click": function($event) {
        _vm.toggleRuleModal(true)
      }
    }
  }, [_vm._v("挑战规则")]), _vm._m(0, false, false)]), (_vm.ifJoin) ? _c('rank-list', {
    attrs: {
      "user": _vm.user,
      "userId": _vm.userId,
      "dailyRank": _vm.dailyRank,
      "totalRank": _vm.totalRank
    }
  }) : _c('div', {
    staticClass: "guide"
  }, [_c('div', {
    staticClass: "title"
  }), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "sub-title"
  }, [_vm._v("总榜冠军达成说明")]), _c('div', {
    staticClass: "text"
  }, [_vm._v("10月18日24点后，总榜排名第1名，可获得iPhone X一部")]), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("总榜TOP10达成说明")]), _c('div', {
    staticClass: "text"
  }, [_vm._v("10月18日24点后，总榜排名第2-10名，可获得3件自选的最爱产品")]), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("每日TOP100达成说明")]), _c('div', {
    staticClass: "text"
  }, [_vm._v("每日榜单前100名，可获得神秘美妆盲盒一份（获奖后可继续参与总榜挑战，但不再参与后续日榜排名）")])])]), _c('div', {
    staticClass: "top-list"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("美学一周年榜单盘点")]), _c('board-list')], 1)], 1), (_vm.ifJoin && _vm.isLogin && _vm.purchasable) ? _c('div', {
    staticClass: "my-operate"
  }, [_c('div', {
    staticClass: "invite-grass",
    on: {
      "click": _vm.share
    }
  }, [_vm._v("邀请好友送挑战机会")])]) : _vm._e(), _c('bottom', {
    attrs: {
      "leftChance": _vm.leftChance,
      "ifJoin": _vm.ifJoin,
      "purchasable": _vm.purchasable,
      "isLogin": _vm.isLogin
    }
  }), _c('ruleModal')], 1), _c('music'), _c('guideModal'), _c('inviteModal', {
    attrs: {
      "userId": _vm.userId
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "award-img"
  }, [_c('span', [_vm._v("3件自选产品")]), _c('span', [_vm._v("iPhone X")]), _c('span', [_vm._v("神秘美妆盲盒")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b1fb662", module.exports)
  }
}

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "download-wrapper"
  }, [_c('img', {
    staticClass: "btn",
    attrs: {
      "src": _vm.url
    },
    on: {
      "click": _vm.callApp
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-522d7ac3", module.exports)
  }
}

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "msg"
  }, [(_vm.currentIndex == 0 && !_vm.showDailyPrized) ? _c('div', {
    staticClass: "daily-unprize"
  }, [_c('p', {
    staticClass: "fs-30"
  }, [_vm._v(_vm._s(_vm.userRank) + " | 我的日排名")]), (_vm.ranks.userRank && _vm.ranks.userRank > 0 && _vm.ranks.userRank <= 100) ? _c('p', {
    staticClass: "note"
  }, [_vm._v("活动已结束，结束后日榜排名不再参与活动领奖。")]) : _vm._e()]) : _vm._e(), (_vm.currentIndex == 0 && _vm.showDailyPrized) ? _c('div', {
    staticClass: "daily-prize"
  }, [_c('div', {
    staticClass: "rank-card"
  }, [_c('p', {
    staticClass: "fs-30"
  }, [_vm._v(_vm._s(_vm.userRank))]), _c('p', {
    staticClass: "note"
  }, [_vm._v(_vm._s(_vm.ranks.rankTime) + "排名")])]), _c('div', {
    staticClass: "seperate"
  }), _vm._m(0, false, false), _c('div', {
    staticClass: "prize-btn",
    on: {
      "click": _vm.showPrizeModal
    }
  }, [_vm._v("我要领奖")])]) : _vm._e(), (_vm.currentIndex == 1 && !_vm.showTotalPrized) ? _c('div', {
    staticClass: "total-unprized"
  }, [_c('p', {
    staticClass: "fs-30"
  }, [_vm._v(_vm._s(_vm.userRank) + " | 我的总排名")]), (_vm.ranks.userRank && _vm.ranks.userRank > 0 && _vm.ranks.userRank <= 10) ? _c('p', {
    staticClass: "note"
  }, [_vm._v("超神！保持现有名次即可获奖！")]) : _vm._e()]) : _vm._e(), (_vm.currentIndex == 1 && _vm.showTotalPrized) ? _c('div', {
    staticClass: "total-prized"
  }, [_c('div', {
    staticClass: "fs-30 rank"
  }, [_vm._v(_vm._s(_vm.userRank) + " | 获得" + _vm._s(_vm.totalPrizeText))]), _c('div', {
    staticClass: "prize-btn",
    on: {
      "click": _vm.showPrizeModal
    }
  }, [_vm._v("立即领取")])]) : _vm._e(), _c('prizeModal')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "prize-card"
  }, [_c('p', {
    staticClass: "fs-30"
  }, [_vm._v("获得神秘美妆盲盒一份")]), _c('p', {
    staticClass: "note"
  }, [_vm._v("获奖后将不再参与日榜排名哦")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ee983ac", module.exports)
  }
}

/***/ })

});
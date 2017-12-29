webpackJsonp([15],{

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(732)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(681),
  /* template */
  __webpack_require__(949),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3a1bf5ae",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/trial/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a1bf5ae", Component.options)
  } else {
    hotAPI.reload("data-v-3a1bf5ae", Component.options)
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

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(448)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(446),
  /* template */
  __webpack_require__(452),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-9b529db2",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/Avatar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Avatar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b529db2", Component.options)
  } else {
    hotAPI.reload("data-v-9b529db2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 446:
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

var _vuex = __webpack_require__(32);

var _constant = __webpack_require__(53);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;
exports.default = {
  props: {
    user: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: _extends({}, (0, _vuex.mapState)({
    inMiniProgram: 'inMiniProgram'
  }), {
    displayUser: function displayUser() {
      var user = _lodash2.default.cloneDeep(this.user);
      user.avatarUrl = _jsUtil2.default.convertToNosUrl(user.avatarUrl || _constant.IMGS.AVATAR, '140y140');
      user.vip = _jsUtil2.default.isVipUser(user.authType);
      return user;
    }
  }),
  methods: {
    toUserProfilePage: function toUserProfilePage(id) {
      if (this.inMiniProgram) {
        Util.callApp();
      } else if (!this.$beauty.inApp) {
        this.$router.push('/user/' + id);
      } else {
        var schemeUrl = this.$beauty.getURLScheme('webview', {
          url: '/user/' + id
        });
        if (schemeUrl) {
          location.href = schemeUrl;
        } else {
          (0, _toast2.default)('请将网易美学更新到1.5以上版本');
        }
      }
    }
  }
};

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "avatar",
    on: {
      "click": function($event) {
        _vm.toUserProfilePage(_vm.displayUser.id)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.displayUser.avatarUrl
    }
  }), (_vm.displayUser.vip) ? _c('span') : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9b529db2", module.exports)
  }
}

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(531)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(508),
  /* template */
  __webpack_require__(562),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-c0113a00",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/star.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] star.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c0113a00", Component.options)
  } else {
    hotAPI.reload("data-v-c0113a00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 508:
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
//

exports.default = {
  props: {
    star: {
      type: [Number, String],
      default: 0
    },
    showDesc: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      startMap: {
        "0": {
          "star": 0,
          "text": "未评价"
        },
        "5": {
          "star": 1,
          "text": "慢走不送"
        },
        "4": {
          "star": 2,
          "text": "不太好用"
        },
        "3": {
          "star": 3,
          "text": "一般般啦"
        },
        "2": {
          "star": 4,
          "text": "还不错哟"
        },
        "1": {
          "star": 5,
          "text": "好用到哭"
        }
      }
    };
  }
};

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "evaluate"
  }, [_vm._l((5), function(i) {
    return _c('span', {
      staticClass: "star",
      class: {
        'star-1': i <= _vm.startMap[_vm.star].star
      }
    })
  }), (_vm.showDesc) ? _c('span', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.startMap[_vm.star].text))]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c0113a00", module.exports)
  }
}

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _vuex = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var inBrowser = true;

var Util = inBrowser ? __webpack_require__(69) : null;

var maxHeight = '1000rem'; // 为transition设置一个不会超出的高度
exports.default = {
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    applyStatus: {
      type: Number,
      default: false
    }
  },
  data: function data() {
    return {
      hasMore: false,
      portionHeight: maxHeight
    };
  },

  computed: _extends({}, (0, _vuex.mapState)({
    inApp: 'inApp'
  }), {
    applyTxt: function applyTxt() {
      switch (this.applyStatus) {
        case 0:
          return {
            background: '#42b3af',
            txt: '未开始'
          };
        case 1:
        case 2:
          return {
            background: '#f66',
            txt: '立即申领'
          };
        default:
          return {
            background: '#999',
            txt: '申领结束'
          };
      }
      // return this.ended ? '申领结束' : '立即申领'
    },
    imgs: function imgs() {
      // 计算图片展示的宽高
      return (this.list || []).map(function (item) {
        return _jsUtil2.default.getFormattedImage(item, 670); // boxWidth === 670
      });
    }
  }),
  created: function created() {
    this.hasMore = this.ended && this.imgs.length > 1;
    if (this.hasMore) {
      // 只显示固定高度的部分详情
      this.portionHeight = 490 / 75 + 'rem';
    }
  },

  methods: {
    callApp: function callApp() {
      Util.callApp({ wechatLink: 'https://hubble.netease.com/sl/aaaabT' }); // 针对试用的应用宝地址使用单独hubble监控链接
    },
    showMore: function showMore() {
      this.$eventTrace({
        category: 'TrialDetail',
        eventLabel: 'More'
      });
      this.hasMore = false;
      this.portionHeight = maxHeight;
    },

    // 预览图片
    preview: function preview(index) {
      if (this.hasMore) {
        return;
      }
      var imgs = this.list.map(function (item) {
        return item.url;
      });
      this.$beauty.isomorphicPreviewImage({
        urls: imgs,
        current: index
      });
    }
  }
};

/***/ }),

/***/ 679:
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

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _pure = __webpack_require__(433);

var _pure2 = _interopRequireDefault(_pure);

var _vuex = __webpack_require__(32);

var _Avatar = __webpack_require__(435);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _star = __webpack_require__(498);

var _star2 = _interopRequireDefault(_star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: _extends({}, (0, _vuex.mapState)({
    inApp: 'inApp'
  }), {
    displayList: function displayList(state) {
      return (this.list || []).map(function (note) {
        note.author = _pure2.default.getDisplayUser(note.author);
        note.praiseCount = _jsUtil2.default.getDisplayCount(note.praiseCount);
        note.commentCount = _jsUtil2.default.getDisplayCount(note.commentCount);
        note.images = (note.images || []).map(function (image) {
          return _jsUtil2.default.convertToNosUrl(image, '186y186', { force: true });
        });
        return note;
      });
    }
  }),
  methods: {
    toNote: function toNote(index) {
      var noteId = this.list[index].id;
      var locationValue = index + 1;
      if (this.inApp) {
        var schemeUrl = this.$beauty.getURLScheme('note', noteId, {
          'da_location': locationValue
        });
        if (schemeUrl) {
          location.href = schemeUrl;
        }
      } else {
        this.$router.push('/note/' + noteId + '?da_location=' + locationValue);
      }
    }
  },
  components: {
    avatar: _Avatar2.default,
    star: _star2.default
  }
};

/***/ }),

/***/ 681:
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

var _vuex = __webpack_require__(32);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _constant = __webpack_require__(53);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

var _Description = __webpack_require__(903);

var _Description2 = _interopRequireDefault(_Description);

var _NoteList = __webpack_require__(904);

var _NoteList2 = _interopRequireDefault(_NoteList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var applyStatusMap = {
  0: {
    text: '未开始',
    color: '#41b2ae'
  },
  1: {
    text: '立即申请',
    color: '#f66',
    action: 'apply'
  },
  2: {
    text: '已申请',
    color: '#999'
  },
  3: {
    text: '已中奖，确认收获地址',
    color: '#f66',
    action: 'editAddress'
  },
  4: {
    text: '发布试用报告',
    color: '#f66',
    action: 'editTrialReport'
  },
  5: {
    text: '已结束',
    color: '#999'
  }
};

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)({
    hideBanner: 'hideBanner',
    inApp: 'inApp',
    isLogin: 'isLogin',
    trial: function trial(state) {
      var trialDetail = state.resource.trialDetail;
      var trialMessage = trialDetail.trialMessage,
          trialProduct = trialDetail.trialProduct;

      var trial = trialMessage;
      var id = trialProduct.id,
          skuId = trialProduct.skuId,
          image = trialProduct.image,
          zhName = trialProduct.zhName,
          enName = trialProduct.enName,
          model = trialProduct.model;

      trial.productId = id;
      trial.skuId = skuId;
      trial.cover = image ? _jsUtil2.default.convertToNosUrl(image, '704y704', { force: true }) : _constant.IMGS.DEFAULT_IMG_TRANSP;
      trial.zhProductName = zhName || enName;
      if (model) {
        trial.zhProductName += ' ' + model;
      }
      trial.enProductName = zhName && enName ? enName : '';
      trial.headUrls = _lodash2.default.reverse(trial.headUrls || []).map(function (url) {
        return _jsUtil2.default.convertToNosUrl(url || _constant.IMGS.AVATAR, '100y100');
      });
      var status = trial.applyStatus;
      trial.ended = status === 3 || status === 4 || status === 5;
      if (status === 0) {
        trial.time = trial.startTime + '开始';
      } else if (status === 1 || status === 2) {
        trial.time = trial.endTime + '截止';
      }
      return trial || {};
    },
    noteList: function noteList(state) {
      var trialDetail = state.resource.trialDetail;

      return trialDetail.noteList || [];
    },
    hasMoreNotes: function hasMoreNotes(state) {
      var trialDetail = state.resource.trialDetail;

      return trialDetail.hasMoreNotes || false;
    },
    shareInfo: function shareInfo(state) {
      return state.resource.shareInfo;
    }
  }), {
    status: function status() {
      return applyStatusMap[this.trial.applyStatus];
    }
  }),
  methods: _extends({}, (0, _vuex.mapActions)({
    getTrial: 'getResource'
  }), (0, _vuex.mapMutations)(['setCurrentUser']), {
    // native 分享
    share: function share(guideTitle) {
      var _this = this;

      this.$eventTrace({
        category: 'TrialDetail',
        eventLabel: 'Share'
      });

      var _ref = this.shareInfo || {},
          shareTitle = _ref.shareTitle,
          subTitle = _ref.subTitle,
          imageUrl = _ref.imageUrl,
          shareUrl = _ref.shareUrl,
          resType = _ref.resType,
          resId = _ref.resId;

      var params = {
        resType: resType,
        resId: resId,
        title: shareTitle,
        subTitle: subTitle,
        imageUrl: imageUrl,
        url: shareUrl,
        channel: [1, 2, 3, 4, 6]
      };
      if (guideTitle && typeof guideTitle === 'string') {
        params.guideTitle = guideTitle;
      }
      this.$beauty.share(params).then(function () {
        _this.trial.shareFirst = false;
      }).catch(function () {
        // 空的异常处理
      });
    },

    // 查看产品详情
    toProduct: function toProduct() {
      var productId = this.trial.productId;

      if (this.inApp) {
        var schemeUrl = this.$beauty.getURLScheme('product', productId);
        if (schemeUrl) {
          location.href = schemeUrl;
        }
      } else {
        this.$router.push('/product/' + productId);
      }
    },

    // 展示申请规则
    showRule: function showRule() {
      if (this.inApp) {
        var schemeUrl = this.$beauty.getURLScheme('webview', {
          url: '/trialrule'
        });
        if (schemeUrl) {
          location.href = schemeUrl;
        }
      } else {
        this.$router.push('/trialrule');
      }
    },

    // 点击操作按钮
    operate: function operate() {
      var action = this.status.action;

      if (!action) {
        return;
      }
      this[action] && this[action]();
    },

    // 立即申请
    apply: function apply() {
      var _this2 = this;

      this.$eventTrace({
        category: 'TrialDetail',
        eventLabel: 'Apply'
      });
      if (!this.isLogin) {
        this.$beauty.login().then(function (user) {
          _this2.setCurrentUser(user);
        }).catch(function () {
          // 空的异常处理
        });
        return;
      }
      var _trial = this.trial,
          id = _trial.id,
          shareFirst = _trial.shareFirst;

      if (!shareFirst) {
        this.doApply(id);
      } else {
        this.$beauty.isUrlShared(this.shareInfo.shareUrl).then(function (shared) {
          if (shared) {
            _this2.trial.shareFirst = false;
          }
          if (_this2.trial.shareFirst) {
            _this2.share('先分享再申领哦！');
          } else {
            _this2.doApply(id);
          }
        }).catch(function (ex) {});
      }
    },

    // 申请试用
    doApply: function doApply(id) {
      var _this3 = this;

      (0, _fetch2.default)('/trial/' + id + '/apply', {
        method: 'POST'
      }).then(function (json) {
        (0, _toast2.default)('申请成功');
        _this3.getTrial();
      }, function (json) {
        (0, _toast2.default)(json.msg || '申请失败');
        _this3.getTrial();
        _this3.sending = false;
      });
    },

    // 编辑地址
    editAddress: function editAddress() {
      var orderId = this.trial.orderId;

      var schemeUrl = this.$beauty.getURLScheme('editAddress', orderId);
      if (schemeUrl) {
        location.href = schemeUrl;
      } else {
        (0, _toast2.default)('请将网易美学更新到1.5以上版本');
      }
    },

    // 编辑试用报告
    editTrialReport: function editTrialReport() {
      var _trial2 = this.trial,
          id = _trial2.id,
          productId = _trial2.productId,
          skuId = _trial2.skuId;

      var schemeUrl = this.$beauty.getURLScheme('editTrialReport', {
        productId: productId,
        skuId: skuId,
        trialId: id
      });
      if (schemeUrl) {
        location.href = schemeUrl;
      } else {
        (0, _toast2.default)('请将网易美学更新到1.5以上版本');
      }
    }
  }),
  components: {
    description: _Description2.default,
    noteList: _NoteList2.default
  }
};

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(739)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(678),
  /* template */
  __webpack_require__(956),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4103b01a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/trial/detail/Description.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Description.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4103b01a", Component.options)
  } else {
    hotAPI.reload("data-v-4103b01a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(736)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(679),
  /* template */
  __webpack_require__(953),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3cfdeb49",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/trial/detail/NoteList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NoteList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cfdeb49", Component.options)
  } else {
    hotAPI.reload("data-v-3cfdeb49", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "trial"
  }, [_c('div', {
    staticClass: "head"
  }, [_c('div', {
    staticClass: "cover",
    on: {
      "click": _vm.toProduct
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.trial.cover
    }
  }), (!_vm.trial.ended) ? _c('div', {
    staticClass: "clock"
  }, [_vm._v(_vm._s(_vm.trial.time))]) : _vm._e()]), _c('div', {
    staticClass: "zhname"
  }, [_vm._v(_vm._s(_vm.trial.zhProductName))]), (_vm.trial.enProductName) ? _c('div', {
    staticClass: "enname"
  }, [_vm._v(_vm._s(_vm.trial.enProductName))]) : _vm._e(), _c('div', {
    staticClass: "info"
  }, [_vm._v("价值"), _c('span', {
    staticClass: "price"
  }, [_vm._v("¥" + _vm._s(_vm.trial.price))]), _vm._v("限量"), _c('span', {
    staticClass: "quantity"
  }, [_vm._v(_vm._s(_vm.trial.quantity))]), _vm._v("份")]), _c('div', {
    staticClass: "apply"
  }, [_c('div', [_vm._v("共" + _vm._s(_vm.trial.applyNumber) + "人已申请")]), _c('div', {
    staticClass: "avatar"
  }, _vm._l((_vm.trial.headUrls), function(img) {
    return _c('img', {
      attrs: {
        "src": img
      }
    })
  }))]), _c('div', {
    staticClass: "rule",
    on: {
      "click": _vm.showRule
    }
  }, [_c('span', [_vm._v("申请规则")]), _c('span', {
    staticClass: "arrow"
  })])]), _c('description', {
    attrs: {
      "list": _vm.trial.imgArray,
      "applyStatus": _vm.trial.applyStatus
    }
  }), (_vm.noteList.length) ? _c('div', {
    staticClass: "notes"
  }, [_c('note-list', {
    attrs: {
      "list": _vm.noteList
    }
  }), (_vm.hasMoreNotes) ? _c('div', {
    staticClass: "more",
    on: {
      "click": _vm.toProduct
    }
  }, [_vm._v("点击查看更多")]) : _vm._e()], 1) : _vm._e(), (_vm.inApp) ? _c('div', {
    staticClass: "opers"
  }, [_c('div', {
    staticClass: "holder"
  }, [_c('div', {
    staticClass: "share",
    on: {
      "click": _vm.share
    }
  }, [_vm._v("分享")]), _c('div', {
    staticClass: "apply",
    style: ({
      background: _vm.status.color
    }),
    on: {
      "click": _vm.operate
    }
  }, [_vm._v(_vm._s(_vm.status.text))])])]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a1bf5ae", module.exports)
  }
}

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.displayList.length) ? _c('div', {
    staticClass: "notelist"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("热门心得")]), _vm._l((_vm.displayList), function(note, index) {
    return _c('div', {
      staticClass: "note",
      on: {
        "click": function($event) {
          _vm.toNote(index)
        }
      }
    }, [_c('avatar', {
      attrs: {
        "user": note.author
      }
    }), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "user"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(note.author.name))]), _c('span', {
      staticClass: "desc"
    }, [_vm._v(_vm._s(note.author.desc))])]), _c('div', {
      staticClass: "text"
    }, [_c('star', {
      attrs: {
        "star": note.emotion,
        "showDesc": false
      }
    }), _c('span', [_vm._v(_vm._s(note.text))])], 1), _c('div', {
      staticClass: "image"
    }, _vm._l((note.images), function(image) {
      return _c('img', {
        attrs: {
          "src": image
        }
      })
    })), (note.displaySkuValue) ? _c('div', {
      staticClass: "sku"
    }, [_vm._v(_vm._s(note.displaySkuValue))]) : _vm._e(), _c('div', {
      staticClass: "social"
    }, [_c('span', {
      staticClass: "u-comment new"
    }, [_vm._v(_vm._s(note.commentCount || '评论'))]), _c('span', {
      staticClass: "u-praise new"
    }, [_vm._v(_vm._s(note.praiseCount || '点赞'))])])])], 1)
  })], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3cfdeb49", module.exports)
  }
}

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.imgs.length > 0) ? _c('div', {
    staticClass: "description"
  }, [(!_vm.inApp) ? _c('button', {
    staticClass: "apply",
    style: ({
      background: _vm.applyTxt.background
    }),
    on: {
      "click": _vm.callApp
    }
  }, [_vm._v(_vm._s(_vm.applyTxt.txt))]) : _vm._e(), _c('div', {
    staticClass: "title"
  }, [_vm._v("试用详情")]), _c('div', {
    class: {
      portion: _vm.hasMore
    },
    style: ({
      maxHeight: _vm.portionHeight
    })
  }, _vm._l((_vm.imgs), function(img, i) {
    return _c('img', {
      style: ({
        width: img.width,
        height: img.height
      }),
      attrs: {
        "src": img.url
      },
      on: {
        "click": function($event) {
          _vm.preview(i)
        }
      }
    })
  })), (_vm.hasMore) ? _c('div', {
    staticClass: "more",
    on: {
      "click": _vm.showMore
    }
  }, [_vm._v("点击查看更多")]) : _vm._e()]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4103b01a", module.exports)
  }
}

/***/ })

});
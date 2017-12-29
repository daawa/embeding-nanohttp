webpackJsonp([24],{

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(764)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(634),
  /* template */
  __webpack_require__(981),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5d005164",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/collects/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d005164", Component.options)
  } else {
    hotAPI.reload("data-v-5d005164", Component.options)
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

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(439)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(437),
  /* template */
  __webpack_require__(441),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-759f3ade",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/Loading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Loading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-759f3ade", Component.options)
  } else {
    hotAPI.reload("data-v-759f3ade", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 437:
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
    txt: {
      default: '正在加载...'
    }
  }
};

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-loading"
  }, [_c('img', {
    attrs: {
      "src": "/res/image/loading.png"
    }
  }), _c('span', [_vm._v(_vm._s(_vm.txt))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-759f3ade", module.exports)
  }
}

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _constant = __webpack_require__(53);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['product', 'desc'],
  computed: {
    displayProduct: function displayProduct() {
      var product = _lodash2.default.cloneDeep(this.product || {});
      var imageUrl = product.imageUrl || _constant.IMGS.DEFAULT_IMG;
      if (imageUrl) {
        product.imageUrl = _jsUtil2.default.convertToNosUrl(imageUrl, '380y380');
      }
      return product;
    }
  },
  methods: {
    toProduct: function toProduct(id) {
      if (id) {
        var url = '/product/' + id;
        this.$router.push(url);
      }
    },
    grassCallApp: function grassCallApp(id) {
      // 定制universal link跳转到app内产品详情页
      var wechatLink = encodeURIComponent('http://163.lu/65qDh4'); // 针对浮层点击后的应用宝地址增加单独监控
      window.location.href = 'https://mei.163.com/applink/product/' + id + '?wechatLink=' + wechatLink;
    }
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

/***/ }),

/***/ 634:
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

var _vuex = __webpack_require__(32);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _pure = __webpack_require__(433);

var _pure2 = _interopRequireDefault(_pure);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _Loading = __webpack_require__(436);

var _Loading2 = _interopRequireDefault(_Loading);

var _ProductCard = __webpack_require__(876);

var _ProductCard2 = _interopRequireDefault(_ProductCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;

var urlMap = {
  LIST: '/api/collects/{0}/list'
};
exports.default = {
  data: function data() {
    return {
      list: [],
      hasNext: false,
      loading: false,
      fetchFailed: false
    };
  },

  computed: _extends({}, (0, _vuex.mapState)({
    collects: 'resource'
  }), {
    author: function author() {
      var collects = this.collects || {};
      return _pure2.default.getDisplayUser(collects.author);
    },
    pageEndId: function pageEndId() {
      var list = this.list;

      if (list && list.length) {
        return list[list.length - 1].id;
      }
      return -1;
    }
  }),
  created: function created() {
    var collectList = this.collects.collectList || {};
    this.list = collectList.list || [];
    this.hasNext = collectList.hasNext || false;
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.onScroll);
    Util.refreshPage({
      pageTitle: '网易美学收藏夹'
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    // 跳转到个人主页
    toUser: function toUser(id) {
      if (id) {
        var url = '/user/' + id;
        this.$router.push(url);
      }
    },

    // 获取收藏产品列表
    getList: function getList() {
      var _this = this;

      var id = this.collects.id || '';
      if (!id || !this.hasNext || this.loading) {
        return;
      }
      this.loading = true;
      var url = _jsUtil2.default.strFormat(urlMap.LIST, id);
      (0, _fetch2.default)(url, {
        body: {
          count: 20,
          pageEndId: this.pageEndId
        }
      }).then(function (data) {
        var _ref = data.result || {},
            _ref$list = _ref.list,
            list = _ref$list === undefined ? [] : _ref$list,
            hasNext = _ref.hasNext;

        _this.list = _this.list.concat(list);
        _this.hasNext = hasNext;
        _this.loading = false;
        _this.fetchFailed = false;
      }, function (json) {
        _this.loading = false;
        _this.fetchFailed = true;
      });
    },

    // 列表底部出现在视窗内时，加载更多
    onScroll: function onScroll() {
      // 如果上一次加载失败，需要先手动触发一次加载
      if (this.fetchFailed) {
        return;
      }
      var ele = this.$refs.list;
      if (ele && Util.isBottomVisible(ele)) {
        this.getList();
      }
    },
    callApp: function callApp() {
      Util.callApp();
    }
  },
  components: {
    product: _ProductCard2.default,
    loading: _Loading2.default
  }
};

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(738)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(633),
  /* template */
  __webpack_require__(955),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3fac297b",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/collects/detail/ProductCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProductCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fac297b", Component.options)
  } else {
    hotAPI.reload("data-v-3fac297b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "collect"
  }, [_c('div', {
    staticClass: "item",
    on: {
      "click": function($event) {
        _vm.toProduct(_vm.displayProduct.id)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.displayProduct.imageUrl
    }
  }), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "info__zhName"
  }, [_vm._v(_vm._s(_vm.displayProduct.name4wap1))]), _c('div', {
    staticClass: "info-wrap"
  }, [_c('div', {
    staticClass: "info__desc"
  }, [_c('div', {
    staticClass: "info__enName"
  }, [_vm._v(_vm._s(_vm.displayProduct.name4wap2))]), _c('div', {
    staticClass: "info__enName info__enName--xd"
  }, [(_vm.displayProduct.noteCnt > 0) ? _c('div', [_vm._v("\n              " + _vm._s(_vm.displayProduct.noteCnt) + "篇心得\n              "), _c('span', {
    staticClass: "icon-gt"
  })]) : _vm._e()])]), _c('div', {
    staticClass: "info__grass",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.grassCallApp(_vm.displayProduct.id)
      }
    }
  }, [_c('span', {
    staticClass: "icon-grass"
  }), _c('div', [_vm._v("长草")])])])])]), (_vm.desc && _vm.desc.length > 0) ? _c('div', {
    staticClass: "note"
  }, [_c('span', {
    staticClass: "note__label"
  }, [_vm._v("备注：")]), _vm._v("\n    " + _vm._s(_vm.desc) + "\n  ")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3fac297b", module.exports)
  }
}

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "collects"
  }, [_c('p', {
    staticClass: "sub-title"
  }, [_vm._v("点击产品卡片，即可产看产品详情、浏览用户使用心得")]), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "collects-user"
  }, [_c('div', {
    staticClass: "collects-user__avator",
    on: {
      "click": function($event) {
        _vm.toUser(_vm.author.id)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.author.avatarUrl
    }
  }), (_vm.author.vip) ? _c('span', {
    staticClass: "collects-user__avator__vip"
  }) : _vm._e()]), _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "collects-user__name"
  }, [_vm._v(_vm._s(_vm.author.name))]), _c('span', {
    staticClass: "collects-user__desc"
  }, [_vm._v(_vm._s(_vm.author.desc))]), _c('br')])]), _c('div', {
    staticClass: "collects__title"
  }, [_vm._v(_vm._s(_vm.collects.name))]), _c('div', {
    staticClass: "collects__desc"
  }, [_vm._v(_vm._s(_vm.collects.desc))]), (_vm.list && _vm.list.length > 0) ? _c('div', {
    staticClass: "list-wrapper"
  }, [_c('ul', {
    ref: "list",
    staticClass: "collects__list"
  }, _vm._l((_vm.list), function(item) {
    return _c('li', [_c('product', {
      attrs: {
        "product": item.feed,
        "desc": item.desc
      }
    })], 1)
  })), (_vm.loading && _vm.hasNext && !_vm.fetchFailed) ? _c('div', {
    staticClass: "loading"
  }, [_c('loading')], 1) : _vm._e(), (_vm.fetchFailed) ? _c('div', {
    staticClass: "failed",
    on: {
      "click": _vm.getList
    }
  }, [_vm._m(0, false, false)]) : _vm._e()]) : _c('div', {
    staticClass: "collects__list--empty"
  }, [_c('img', {
    attrs: {
      "src": "/res/image/notrial.png"
    }
  }), _c('div', [_vm._v("还没有收藏内容哦")])])])]), _c('div', {
    staticClass: "u-download",
    on: {
      "click": _vm.callApp
    }
  }, [_vm._v("下载网易美学，创建你自己的收藏夹")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "txt"
  }, [_vm._v("加载失败，"), _c('span', [_vm._v("点击重新加载")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d005164", module.exports)
  }
}

/***/ })

});
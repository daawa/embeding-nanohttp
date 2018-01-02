webpackJsonp([23],{

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(710)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(658),
  /* template */
  __webpack_require__(926),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-101317da",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/repo/sogou/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-101317da", Component.options)
  } else {
    hotAPI.reload("data-v-101317da", Component.options)
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

/***/ 658:
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

var _vuex = __webpack_require__(32);

var _pure = __webpack_require__(433);

var _pure2 = _interopRequireDefault(_pure);

var _constant = __webpack_require__(53);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _media = __webpack_require__(890);

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inBrowser = true;
var blank = _constant.IMGS.BLANK + '?imageView&thumbnail=15y10';

exports.default = {
  data: function data() {
    return {
      inBrowser: inBrowser,
      mounted: false
    };
  },
  created: function created() {
    if (inBrowser) {
      this.$Lazyload.config({
        error: blank,
        loading: blank,
        preLoad: Infinity
      });
    }
  },

  computed: _extends({}, (0, _vuex.mapState)({
    displayRepo: function displayRepo(state) {
      var repo = _lodash2.default.cloneDeep(state.resource || {});
      repo.backgroundUrl = repo.backgroundUrl ? _pure2.default.nosUrl(repo.backgroundUrl, '750y500', { force: true }) : _pure2.default.nosUrl(_constant.IMGS.DEFAULT_IMG, '750y500');
      repo.link = 'https://m.mei.163.com/repo/' + repo.id;
      return repo;
    }
  }), {
    medias: function medias() {
      var repo = this.displayRepo || {};
      var medias = repo.medias || [];
      return this.mounted ? medias : medias.slice(0, 10);
    },
    author: function author() {
      var repo = this.displayRepo || {};
      return _pure2.default.getDisplayUser(repo.author);
    }
  }),
  mounted: function mounted() {
    this.mounted = true;
  },

  components: {
    media: _media2.default
  }
};

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pure = __webpack_require__(433);

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['item', 'prevIsProduct'],
  data: function data() {
    return {
      isUserProduct: this.item.type === 8, // 是否为用户自定义商品
      product: this.item.content
    };
  },
  computed: {
    coverUrl: function coverUrl() {
      // 商品封面图
      var img = this.isUserProduct ? this.product.coverUrl : this.product.sku && this.product.sku.imageUrl || this.product.imageUrl;
      return _pure2.default.nosUrl(img, '265y265');
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

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pure = __webpack_require__(433);

var _pure2 = _interopRequireDefault(_pure);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _Product = __webpack_require__(889);

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    medias: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    css: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {};
  },
  components: {
    product: _Product2.default
  },
  computed: {
    mediaList: function mediaList() {
      var self = this;
      // 默认图片预留宽度
      var defaultWidth = 690;
      // let imgHeight
      return this.medias.map(function (item, index) {
        var newItem = _lodash2.default.cloneDeep(item);
        var prevItem = self.medias[index - 1] || {};
        var nextItem = self.medias[index + 1] || {};

        if (newItem.type === 3) {
          // 判断是否是图片
          newItem.imageUrl = _pure2.default.nosUrl(newItem.content.url, newItem.content.width > 750 ? '750x0' : '', {
            noEnlarge: true
          });
          // 为lazyload图片增加预留高度
          if (newItem.content && newItem.content.height && newItem.content.width) {
            // 图片高度和宽度使用rem，自适应屏幕进行缩放
            var maxWidth = defaultWidth / 75;
            var expectWidth = newItem.content.width / 75;
            newItem.imgWidth = Math.min(maxWidth, expectWidth).toFixed(3);
            newItem.imgHeight = (newItem.content.height / newItem.content.width * newItem.imgWidth).toFixed(3) + 'rem';
            newItem.imgWidth += 'rem';
          } else {
            // 图片没有宽高信息时，设置为auto
            newItem.imgWidth = 'auto';
            newItem.imgHeight = 'auto';
          }
        }
        // 判断前一个是否是商品
        newItem.prevIsProduct = index > 0 ? prevItem.type === 1 || prevItem.type === 8 || prevItem.type === 7 : false;

        newItem.showTxt = item.type === 6 && // 文字
        !(!item.content && prevItem.type === 6) && // 和前一个段落(不论是否为空)粘连，不显示
        !(!item.content && nextItem.type === 6 && nextItem.content); // 和后一个空段落粘连，不显示

        return newItem;
      });
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

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(767)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(659),
  /* template */
  __webpack_require__(984),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5fb5c6e5",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/repo/sogou/media/Product.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Product.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fb5c6e5", Component.options)
  } else {
    hotAPI.reload("data-v-5fb5c6e5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(726)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(660),
  /* template */
  __webpack_require__(943),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-300e78e8",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/repo/sogou/media/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-300e78e8", Component.options)
  } else {
    hotAPI.reload("data-v-300e78e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-repo-sogou"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.displayRepo.title))]), _c('div', {
    staticClass: "info"
  }, [_c('span', {
    staticClass: "info__user"
  }, [_vm._v(_vm._s(_vm.author.name))]), _c('span', {
    staticClass: "info__update-time"
  }, [_c('span', [_vm._v(_vm._s(_vm.displayRepo.publishTime.date))]), _c('span', [_vm._v(_vm._s(_vm.displayRepo.publishTime.time))])])]), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "cover"
  }, [_c('img', {
    attrs: {
      "src": _vm.displayRepo.backgroundUrl
    }
  })]), _c('media', {
    ref: "medias",
    attrs: {
      "medias": _vm.medias
    }
  }), (_vm.displayRepo.tags && _vm.displayRepo.tags.length) ? _c('div', {
    staticClass: "tags"
  }, [_vm._v("\n      文章标签："), _vm._l((_vm.displayRepo.tags), function(tag, index) {
    return _c('span', {
      key: tag.id
    }, [(index > 0) ? _c('span', [_vm._v("，")]) : _vm._e(), _vm._v(_vm._s(tag.name))])
  })], 2) : _vm._e()], 1), _c('a', {
    staticClass: "link",
    attrs: {
      "href": _vm.displayRepo.link
    }
  }, [_vm._v("阅读原文")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-101317da", module.exports)
  }
}

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "medias",
    staticStyle: {}
  }, [_c('ul', _vm._l((_vm.mediaList), function(item) {
    return _c('li', [(item.type == 1 || item.type == 8 || item.type == 7) ? _c('product', {
      attrs: {
        "item": item,
        "prev-is-product": item.prevIsProduct
      }
    }) : _vm._e(), (item.type == 3) ? _c('div', {
      staticClass: "media pic"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (item.imageUrl),
        expression: "item.imageUrl"
      }],
      style: ({
        width: item.imgWidth,
        height: item.imgHeight
      }),
      attrs: {
        "alt": ""
      }
    })]) : _vm._e(), (item.showTxt) ? _c('div', {
      staticClass: "media txt",
      domProps: {
        "innerHTML": _vm._s(item.content)
      }
    }) : _vm._e()], 1)
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-300e78e8", module.exports)
  }
}

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['media', 'prd', {
      'prd-1': _vm.prevIsProduct
    }]
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.coverUrl),
      expression: "coverUrl"
    }]
  }), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "zhName"
  }, [_vm._v(_vm._s(_vm.product.name4wap1))]), _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "enName"
  }, [_vm._v(_vm._s(_vm.product.name4wap2))]), _c('div', {
    staticClass: "enName enName-xd"
  }, [(_vm.product.noteCnt > 0) ? _c('div', [_vm._v("\n            " + _vm._s(_vm.product.noteCnt) + "篇心得\n          ")]) : _vm._e()])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5fb5c6e5", module.exports)
  }
}

/***/ })

});
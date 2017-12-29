webpackJsonp([27],{

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(749)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(647),
  /* template */
  __webpack_require__(966),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4dbbc893",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/note/sogou/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dbbc893", Component.options)
  } else {
    hotAPI.reload("data-v-4dbbc893", Component.options)
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

/***/ 646:
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
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: ['product']
};

/***/ }),

/***/ 647:
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

var _vuex = __webpack_require__(32);

var _pure = __webpack_require__(433);

var _pure2 = _interopRequireDefault(_pure);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _constant = __webpack_require__(53);

var _ProductCard = __webpack_require__(882);

var _ProductCard2 = _interopRequireDefault(_ProductCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inBrowser = true;
var Util = inBrowser ? __webpack_require__(69) : null;
var blank = _constant.IMGS.BLANK + '?imageView&thumbnail=15y10';

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)({
    note: 'resource',
    author: function author(_ref) {
      var resource = _ref.resource;

      var author = _lodash2.default.cloneDeep(resource.author || {});
      author.avatarUrl = _pure2.default.nosUrl(author.avatarUrl || _constant.IMGS.AVATAR, '116y116');
      return author;
    },
    emotion: function emotion(_ref2) {
      var resource = _ref2.resource;

      return resource.emotion || 0;
    },
    images: function images(_ref3) {
      var resource = _ref3.resource;

      var images = _lodash2.default.cloneDeep(resource.images || []);
      _lodash2.default.forEach(images, function (image) {
        if (image) {
          image.url = _pure2.default.nosUrl(image.url, '750x0');
        }
      });
      return images;
    },
    product: function product(_ref4) {
      var resource = _ref4.resource;

      var product = _lodash2.default.cloneDeep(resource.product || {});
      var imageUrl = product.imageUrl || _constant.IMGS.DEFAULT_IMG;
      if (imageUrl) {
        product.imageUrl = _pure2.default.nosUrl(imageUrl, '166y166');
      }
      return product;
    },
    link: function link(_ref5) {
      var resource = _ref5.resource;

      var link = 'https://m.mei.163.com/note/' + resource.id;
      return link;
    }
  })),
  data: function data() {
    return {
      inBrowser: inBrowser,
      emotionMap: {
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

  methods: {
    toProduct: function toProduct(url) {
      if (url) {
        this.$router.push(url);
      }
    },
    callApp: function callApp() {
      Util.callApp();
    }
  },
  components: {
    productCard: _ProductCard2.default
  }
};

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(771)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(646),
  /* template */
  __webpack_require__(988),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-637d5300",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/note/sogou/ProductCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProductCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-637d5300", Component.options)
  } else {
    hotAPI.reload("data-v-637d5300", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-note-sogou"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.note.title))]), _c('div', {
    staticClass: "info"
  }, [_c('span', {
    staticClass: "info__user"
  }, [_vm._v(_vm._s(_vm.author.name))]), _c('span', {
    staticClass: "info__update-time"
  }, [_c('span', [_vm._v(_vm._s(_vm.note.publishTime.date))]), _c('span', [_vm._v(_vm._s(_vm.note.publishTime.time))])])]), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "stars"
  }, [_vm._l((5), function(i) {
    return _c('span', {
      key: i,
      staticClass: "star",
      class: {
        'star-1': i <= _vm.emotionMap[_vm.emotion].star
      }
    })
  }), _c('span', {
    staticClass: "s2"
  }, [_vm._v(_vm._s(_vm.emotionMap[_vm.emotion].text))])], 2), _c('div', {
    staticClass: "images"
  }, [_vm._l((_vm.images), function(image, index) {
    return (index < 4) ? _c('img', {
      key: image.url + index,
      attrs: {
        "src": image.url
      }
    }) : _vm._e()
  }), _vm._l((_vm.images), function(image, index) {
    return (index >= 4) ? _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (image.url),
        expression: "image.url"
      }],
      key: image.url + index
    }) : _vm._e()
  })], 2), _c('product-card', {
    attrs: {
      "product": _vm.product
    }
  }), _c('div', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.note.text))]), _c('div', {
    staticClass: "moreinfo"
  }, [(_vm.note.displayPrice) ? _c('div', {
    staticClass: "price"
  }, [_vm._v("购买价格：" + _vm._s(_vm.note.displayPrice))]) : _vm._e(), (_vm.note.tags && _vm.note.tags.length) ? _c('div', {
    staticClass: "tags"
  }, [_vm._v("\n        文章标签："), _vm._l((_vm.note.tags), function(tag, index) {
    return _c('span', {
      key: tag.id
    }, [(index > 0) ? _c('span', [_vm._v("，")]) : _vm._e(), _vm._v(_vm._s(tag.name))])
  })], 2) : _vm._e()])], 1), _c('a', {
    staticClass: "link",
    attrs: {
      "href": _vm.link
    }
  }, [_vm._v("阅读原文")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4dbbc893", module.exports)
  }
}

/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "iteminfo"
  }, [_c('img', {
    attrs: {
      "src": _vm.product.imageUrl
    }
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
     require("vue-hot-reload-api").rerender("data-v-637d5300", module.exports)
  }
}

/***/ })

});
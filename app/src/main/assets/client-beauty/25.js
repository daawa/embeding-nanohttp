webpackJsonp([25],{

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "m-note-screencapture"
  }, [_vm._m(0, false, false), _c('div', {
    staticClass: "user"
  }, [_c('div', {
    staticClass: "avator"
  }, [_c('img', {
    attrs: {
      "src": _vm.author.avatarUrl
    }
  }), (_vm.author.vip) ? _c('span', {
    staticClass: "vip"
  }) : _vm._e()]), _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "brief"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.author.name))]), _c('div', {
    staticClass: "s1"
  }, [_vm._v(_vm._s(_vm.author.s1))])])])]), _c('div', {
    staticClass: "images"
  }, _vm._l((_vm.images), function(image, index) {
    return _c('img', {
      key: image.url + index,
      attrs: {
        "src": image.url
      }
    })
  })), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.emotionMap[_vm.emotion].text))]), (_vm.note.displayPrice) ? _c('div', {
    staticClass: "price"
  }, [_c('div', [_vm._v("购买价格：")]), _c('div', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.note.displayPrice))])]) : _vm._e()], 2), _c('product-card', {
    attrs: {
      "product": _vm.product,
      "is-user-product": _vm.isUserProduct,
      "is-screencapture": true
    }
  }), _c('div', {
    staticClass: "moreinfo"
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.note.text))]), (_vm.note.tags && _vm.note.tags.length) ? _c('div', {
    staticClass: "tags"
  }, [_c('div', {
    staticClass: "seperate"
  }), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v("相关标签")]), _vm._l((_vm.note.tags), function(tag) {
    return _c('router-link', {
      key: tag.id,
      staticClass: "u-tag tag",
      attrs: {
        "to": '/tag/' + tag.id
      }
    }, [_vm._v(_vm._s(tag.name))])
  })], 2) : _vm._e(), _c('div', {
    staticClass: "time"
  }, [_vm._v("编辑于 " + _vm._s(_vm.note.leftTimeTip))])])], 1), _c('capture-bottom', {
    attrs: {
      "url": _vm.path
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "top"
  }, [_c('img', {
    attrs: {
      "src": "/res/image/logo_screencapture.png",
      "alt": ""
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a5e19a08", module.exports)
  }
}

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(805)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(645),
  /* template */
  __webpack_require__(1023),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a5e19a08",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/note/screencapture/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5e19a08", Component.options)
  } else {
    hotAPI.reload("data-v-a5e19a08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 504:
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

exports.default = {
  props: {
    url: {
      type: String,
      default: function _default() {
        return 'https://mei.163.com/download';
      }
    }
  },
  data: function data() {
    return {
      logoUrl: 'https://beauty.nosdn.127.net/beauty/img/1f4a1614-a779-40ed-a936-6810196b4db5.png'
    };
  },

  computed: {
    qrcodeUrl: function qrcodeUrl() {
      var text = encodeURIComponent(this.url);
      var qrcodeUrl = 'http://qr.liantu.com/api.php?w=400&m=5&el=h&text=' + text;
      return qrcodeUrl;
    }
  }
};

/***/ }),

/***/ 517:
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

var Util =  true ? __webpack_require__(69) : null;
exports.default = {
  props: ['product', 'isUserProduct', 'isScreencapture'],
  computed: _extends({}, (0, _vuex.mapState)({
    inMiniProgram: 'inMiniProgram'
  })),
  methods: {
    toProduct: function toProduct(url) {
      if (this.inMiniProgram) {
        Util.callApp();
      } else if (url) {
        this.$router.push(url);
      }
    },
    callApp: function callApp() {
      Util.callApp();
    }
  }
};

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(528)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(504),
  /* template */
  __webpack_require__(559),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/captureBottom.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] captureBottom.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-768ff8d3", Component.options)
  } else {
    hotAPI.reload("data-v-768ff8d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(522)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(517),
  /* template */
  __webpack_require__(553),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-47a5db92",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/note/components/ProductCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProductCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47a5db92", Component.options)
  } else {
    hotAPI.reload("data-v-47a5db92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "iteminfo",
    on: {
      "click": function($event) {
        _vm.toProduct(!_vm.isUserProduct ? '/product/' + _vm.product.id : null)
      }
    }
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
  }, [(_vm.product.noteCnt > 0) ? _c('div', [(_vm.isScreencapture) ? _c('span', [_vm._v("在网易美学有")]) : _vm._e(), _vm._v(_vm._s(_vm.product.noteCnt) + "篇心得\n            "), (!_vm.isUserProduct && !_vm.isScreencapture) ? _c('span', {
    staticClass: "gt"
  }) : _vm._e()]) : _vm._e()])]), (!_vm.isUserProduct && !_vm.isScreencapture) ? _c('div', {
    staticClass: "grass",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.callApp($event)
      }
    }
  }, [_c('span', {
    staticClass: "icon"
  }), _c('div', [_vm._v("长草")])]) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47a5db92", module.exports)
  }
}

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-screencapture-bottom"
  }, [_c('div', {
    staticClass: "qrcode"
  }, [_c('img', {
    staticClass: "qrcode__code",
    attrs: {
      "src": _vm.qrcodeUrl,
      "alt": ""
    }
  }), _c('img', {
    staticClass: "qrcode__logo",
    attrs: {
      "src": _vm.logoUrl,
      "alt": ""
    }
  })]), _c('p', {
    staticClass: "title-1"
  }, [_vm._v("长按图片识别二维码")]), _c('p', {
    staticClass: "title-2"
  }, [_vm._v("网易美学・超好用的美妆护肤社区APP")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-768ff8d3", module.exports)
  }
}

/***/ }),

/***/ 645:
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

var _vuex = __webpack_require__(32);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _constant = __webpack_require__(53);

var _ProductCard = __webpack_require__(547);

var _ProductCard2 = _interopRequireDefault(_ProductCard);

var _captureBottom = __webpack_require__(534);

var _captureBottom2 = _interopRequireDefault(_captureBottom);

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
      author.avatarUrl = _jsUtil2.default.convertToNosUrl(author.avatarUrl || _constant.IMGS.AVATAR, '116y116');
      author.vip = _jsUtil2.default.isVipUser(author.authType);
      author.s1 = author.age || '';
      if (author.age && author.skinType) {
        author.s1 += ' | ';
      }
      if (author.skinType) {
        author.s1 += author.skinType;
      }
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
          image.url = _jsUtil2.default.convertToNosUrl(image.url, '750x0');
        }
      });
      return images;
    },
    product: function product(_ref4) {
      var resource = _ref4.resource;

      var product = _lodash2.default.cloneDeep(resource.product || {});
      var imageUrl = product.imageUrl || _constant.IMGS.DEFAULT_IMG;
      if (imageUrl) {
        product.imageUrl = _jsUtil2.default.convertToNosUrl(imageUrl, '166y166');
      }
      return product;
    },

    // 是否为用户自定义商品
    isUserProduct: function isUserProduct(_ref5) {
      var resource = _ref5.resource;

      return resource.productType === 8;
    }
  }), {
    path: function path() {
      // 用于生成长图时动态生成二维码
      var path = this.$route.path.replace(/\/screencapture/, '');
      return 'https://mei.163.com' + path;
    }
  }),
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
    productCard: _ProductCard2.default,
    captureBottom: _captureBottom2.default
  }
};

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
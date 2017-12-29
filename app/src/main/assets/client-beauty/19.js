webpackJsonp([19],{

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-wrapper"
  }, [_vm._m(0, false, false), _c('div', {
    staticClass: "m-main"
  }, [_c('div', {
    staticClass: "coupon"
  }), _c('div', {
    staticClass: "tit title-1"
  }), _c('div', {
    staticClass: "p-phone"
  }, [_c('div', {
    staticClass: "step"
  }, [_vm._v("第1步：输入手机号")]), _c('div', {
    staticClass: "pw-ipt ipt"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phone),
      expression: "phone"
    }],
    attrs: {
      "type": "tel",
      "placeholder": "请输入手机号",
      "maxlength": "11"
    },
    domProps: {
      "value": (_vm.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.phone = $event.target.value
      }
    }
  })]), _vm._m(1, false, false), _c('a', {
    staticClass: "pw-btn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.submitTel($event)
      }
    }
  }, [_vm._v("下载网易美学免费领取")])]), _c('div', {
    staticClass: "tit title-2"
  }), _c('ul', {
    staticClass: "p-product"
  }, _vm._l((_vm.products), function(item, index) {
    return _c('li', {
      staticClass: "product"
    }, [_c('div', {
      staticClass: "img",
      class: item.imgClass
    }), _c('div', {
      staticClass: "info"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _c('p', {
      staticClass: "price"
    }, [_c('i', {
      staticClass: "icon"
    }), _vm._v("¥ " + _vm._s(item.price) + " \n            "), _c('span', {
      staticClass: "origin-price"
    }, [_vm._v("¥ " + _vm._s(item.originPrice))])])])])
  })), _vm._m(2, false, false)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-head"
  }, [_c('img', {
    attrs: {
      "width": "100%",
      "height": "56.6667%",
      "src": "//beauty.nosdn.127.net/beauty/img/99de9027-f470-4785-a372-6afc340f0bde.jpg?iamgeView&interlace=1"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "step"
  }, [_vm._v("第2步:"), _c('span', {
    staticClass: "mark"
  }, [_vm._v("用该号码注册")]), _vm._v("网易美学，在系统消息查收兑换码(消息可能会有2分钟延迟)")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "p-rules"
  }, [_c('div', {
    staticClass: "tit title-3"
  }), _c('div', {
    staticClass: "cont"
  }, [_vm._v("\n        1. 本活动只针对网易美学新用户；"), _c('br'), _vm._v("\n        2. 所有用户必须"), _c('span', {
    staticClass: "mark"
  }, [_vm._v("使用手机号注册")]), _vm._v("或者绑定手机号才能领取，消息会有延迟，请耐心等待；"), _c('br'), _vm._v("\n        3. 同一设备、同一帐号只可参与一次；"), _c('br'), _vm._v("\n        4. 对活动有任何疑问，可以关注@网易美学 微博官方账号；"), _c('br'), _vm._v("\n        5. 本活动的最终解释权归网易美学所有。\n      ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8fc75f5a", module.exports)
  }
}

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(579),
  /* template */
  __webpack_require__(932),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/20170309/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a3fb5a7", Component.options)
  } else {
    hotAPI.reload("data-v-1a3fb5a7", Component.options)
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

/***/ 467:
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

exports.default = {
  props: ["downloadLink"]
};

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(470)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(467),
  /* template */
  __webpack_require__(488),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/common/finished.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] finished.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31dce2d2", Component.options)
  } else {
    hotAPI.reload("data-v-31dce2d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "p-empty"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "cont"
  }, [_c('img', {
    attrs: {
      "src": "//beauty.nosdn.127.net/beauty/img/76c54ffc-3b5e-4165-9021-c8e434a1735e.jpg",
      "alt": ""
    }
  }), _c('a', {
    staticClass: "pw-btn btn",
    attrs: {
      "href": _vm.downloadLink
    }
  }, [_vm._v("立即下载网易美学")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-31dce2d2", module.exports)
  }
}

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(44);

var _vue2 = _interopRequireDefault(_vue);

var _modal = __webpack_require__(541);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: Jin Ze
 * @Date:   2016-11-17 9:47:24
 *
 */
var instance = null;
var getInstance = function getInstance() {
  if (instance) return instance;
  var Constructor = _vue2.default.extend(_modal2.default);
  instance = new Constructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  return instance;
};

exports.default = function (options) {
  var instance = getInstance();
  instance.title = options.title || "";
  instance.message = options.message || "";
  var duration = options.duration || 2000;
  var callback = options.callback;
  clearTimeout(instance.timer);
  instance.visible = true;
  instance.timer = setTimeout(function () {
    instance.visible = false;
    callback && callback();
  }, duration);
  return instance;
};

/***/ }),

/***/ 511:
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

exports.default = {
  props: {
    title: { // 标题
      type: String,
      default: ""
    },
    message: { // 浮层内容
      type: String,
      default: ""
    }
  },
  computed: {
    content: function content() {
      return (this.message + '\n\n正在进入下载...').replace(/\n/g, "<br/>");
    }
  },
  data: function data() {
    return {
      visible: false
    };
  }
};

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(530)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(511),
  /* template */
  __webpack_require__(561),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-bfd16bb0",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/common/successModal/modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bfd16bb0", Component.options)
  } else {
    hotAPI.reload("data-v-bfd16bb0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "layer"
  }, [_c('div', {
    staticClass: "modal"
  }, [_c('div', {
    staticClass: "m-title"
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: "cont",
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bfd16bb0", module.exports)
  }
}

/***/ }),

/***/ 579:
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

var _vuex = __webpack_require__(32);

var _purchasable = __webpack_require__(835);

var _purchasable2 = _interopRequireDefault(_purchasable);

var _finished = __webpack_require__(485);

var _finished2 = _interopRequireDefault(_finished);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inBrowser = true;
var Util = inBrowser ? __webpack_require__(69) : null;

exports.default = {
  computed: _extends({
    downloadLink: function downloadLink() {
      var url = Util ? Util.getDownloadUrl() : '';
      return url;
    }
  }, (0, _vuex.mapState)({
    source: function source(_ref) {
      var resource = _ref.resource;

      return resource.source || 0;
    },
    purchasable: function purchasable(_ref2) {
      var resource = _ref2.resource;

      return resource.purchasable || false;
    }
  })),
  components: {
    finished: _finished2.default,
    purchasable: _purchasable2.default
  }
};

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

var _successModal = __webpack_require__(502);

var _successModal2 = _interopRequireDefault(_successModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;

exports.default = {
  props: {
    downloadLink: {
      type: String
    },
    source: {
      type: Number
    }
  },
  data: function data() {
    return {
      products: [{
        name: '超细深层清洁洗脸刷',
        price: 14,
        originPrice: 29,
        imgClass: {
          'img-1': true
        }
      }, {
        name: '墨玉 圆头腮红',
        price: 14,
        originPrice: 29,
        imgClass: {
          'img-2': true
        }
      }, {
        name: '美妆蛋化妆海绵',
        price: 14,
        originPrice: 29,
        imgClass: {
          'img-3': true
        }
      }, {
        name: '红茶玫瑰洁面手工皂',
        price: 34,
        originPrice: 49,
        imgClass: {
          'img-4': true
        }
      }],
      phone: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    Util.initAntiCheating(this).then(function (yidun) {
      _this.yidun = yidun;
    }, function () {
      throw new Error('易盾加载失败');
    });
  },

  methods: {
    submitTel: function submitTel(event) {
      var _this2 = this;

      var phone = this.phone,
          source = this.source;

      if (!/^1[3-8]\d{9}$/.test(phone)) {
        (0, _toast2.default)("请输入正确的手机号");
        return false;
      }

      this.yidun.flush(function () {
        var token = _this2.yidun.getToken();
        (0, _fetch2.default)('/activity/20170309', {
          method: 'POST', // 缺省为'GET'
          body: {
            phone: phone,
            source: source,
            token: token
          }
        }).then(function (data) {
          var _data$msg$split = data.msg.split('\n\n'),
              _data$msg$split2 = _slicedToArray(_data$msg$split, 2),
              title = _data$msg$split2[0],
              message = _data$msg$split2[1];

          (0, _successModal2.default)({
            title: title,
            message: message,
            callback: function callback() {
              window.location.href = _this2.downloadLink;
            }
          });
        }, function (json) {
          (0, _toast2.default)(json.msg || "未知错误");
        });
        _this2.yidun.reset();
      });
    }
  }
};

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(799)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(580),
  /* template */
  __webpack_require__(1017),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-8fc75f5a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/20170309/purchasable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] purchasable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8fc75f5a", Component.options)
  } else {
    hotAPI.reload("data-v-8fc75f5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-main"
  }, [(_vm.purchasable) ? _c('purchasable', {
    attrs: {
      "downloadLink": _vm.downloadLink,
      "source": _vm.source
    }
  }) : _c('finished', {
    attrs: {
      "downloadLink": _vm.downloadLink
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a3fb5a7", module.exports)
  }
}

/***/ })

});
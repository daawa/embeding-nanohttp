webpackJsonp([26],{

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "download-footer"
  }, [_c('div', {
    staticClass: "logo"
  }), _c('button', {
    staticClass: "download",
    on: {
      "click": _vm.callApp
    }
  }, [_vm._v("下载APP")]), _c('div', {
    staticClass: "background"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-765e7cf1", module.exports)
  }
}

/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "g-main",
    class: {
      inapp: _vm.inApp
    },
    attrs: {
      "id": "main"
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    },
    on: {
      "after-enter": _vm.afterEnter
    }
  }, [_c('div', [_c('router-view'), (!_vm.inApp && !_vm.hideBanner) ? _c('downloadFooter') : _vm._e(), (!_vm.inApp && !_vm.hideBanner) ? _c('downloadButton') : _vm._e()], 1)])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b705f866", module.exports)
  }
}

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(578),
  /* template */
  __webpack_require__(1029),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/Content.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Content.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b705f866", Component.options)
  } else {
    hotAPI.reload("data-v-b705f866", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//

var Util =  true ? __webpack_require__(69) : null;
exports.default = {
  data: function data() {
    return {
      show: false
    };
  },
  mounted: function mounted() {
    this.show = true;
  },


  methods: {
    callApp: function callApp() {
      Util.callApp({ wechatLink: 'https://hubble.netease.com/sl/aaaabR' }); // hubble监控链接
    }
  }
};

/***/ }),

/***/ 577:
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

/*
 * @Author: Feng fan
 * @Date: 2017-11-01 15:21:48
 * @Last Modified by: maggiehe
 * @Last Modified time: 2017-11-09 10:56:09
 */
var Util =  true ? __webpack_require__(69) : null;
exports.default = {
  methods: {
    callApp: function callApp() {
      Util.callApp({ wechatLink: 'https://hubble.netease.com/sl/aaaabY' }); // hubble监控链接
    }
  }
};

/***/ }),

/***/ 578:
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

var _downloadFooter = __webpack_require__(834);

var _downloadFooter2 = _interopRequireDefault(_downloadFooter);

var _downloadButton = __webpack_require__(833);

var _downloadButton2 = _interopRequireDefault(_downloadButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inBrowser = true;
var Util = inBrowser ? __webpack_require__(69) : null;
if (inBrowser) __webpack_require__(140);

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)(['inApp', 'hideBanner'])),
  methods: {
    afterEnter: function afterEnter() {
      if (inBrowser) {
        setTimeout(function () {
          Util.dispatchEvent('scroll');
        }, 200);
      }
    }
  },
  components: {
    downloadFooter: _downloadFooter2.default,
    downloadButton: _downloadButton2.default
  }
};

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(730)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(576),
  /* template */
  __webpack_require__(947),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-37114b08",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/downloadButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] downloadButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37114b08", Component.options)
  } else {
    hotAPI.reload("data-v-37114b08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(787)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(577),
  /* template */
  __webpack_require__(1005),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-765e7cf1",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/downloadFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] downloadFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-765e7cf1", Component.options)
  } else {
    hotAPI.reload("data-v-765e7cf1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "open-app",
    class: {
      'open-app--show': _vm.show
    },
    on: {
      "click": _vm.callApp
    }
  }, [_vm._v("APP内打开")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37114b08", module.exports)
  }
}

/***/ })

});
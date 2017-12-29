webpackJsonp([33],{

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0, false, false)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "download"
  }, [_c('img', {
    staticClass: "download__logo",
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/logo.png"
    }
  }), _c('span', {
    staticClass: "download__content"
  }, [_vm._v("找到更多实用心得、产品试色，"), _c('br'), _vm._v("下载App即可查看！")]), _c('img', {
    staticClass: "download__qrcode",
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/meixue.png"
    }
  }), _c('div', {
    staticClass: "download__hint"
  }, [_vm._v("应用商店搜索“网易美学”")]), _c('div', {
    staticClass: "download__hint"
  }, [_vm._v("或者截图保存识别二维码下载")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a084742e", module.exports)
  }
}

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(802)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(642),
  /* template */
  __webpack_require__(1020),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a084742e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/miniProgram/download/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a084742e", Component.options)
  } else {
    hotAPI.reload("data-v-a084742e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 642:
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

exports.default = {};

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
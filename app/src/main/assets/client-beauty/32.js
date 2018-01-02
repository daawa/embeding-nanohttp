webpackJsonp([32],{

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(747)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(680),
  /* template */
  __webpack_require__(964),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4aaf1915",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/trial/detail/Rule.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Rule.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4aaf1915", Component.options)
  } else {
    hotAPI.reload("data-v-4aaf1915", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 680:
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

var inBrowser = true;
var Util = inBrowser ? __webpack_require__(69) : null;
exports.default = {
  mounted: function mounted() {
    Util.refreshPage({
      pageTitle: '规则'
    });
  }
};

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0, false, false)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rule"
  }, [_vm._v("\n1. 点击免费试用，完成试用条件的任务即可免费申领，试用过程您无需支付任何费用；\n"), _c('br'), _c('br'), _vm._v("\n2. 申领成功名单在活动结束后3天内公布（特殊情况除外），系统将通过美学系统消息通知申领成功用户；\n"), _c('br'), _c('br'), _vm._v("\n3. 申领成功用户请按提示填写收货地址，如3天内未填写则视为放弃试用资格；\n"), _c('br'), _c('br'), _vm._v("\n4. 试用品发货后，您需在10天内提交真实试用报告，逾期未提交将被限制申领，试用后试用品无需返还；\n"), _c('br'), _c('br'), _vm._v("\n5. 试用报告需用图文表达真实个人感受，不过分夸大赞美，也不随意诋毁。图片实拍、清晰，严禁盗图。优质试用报告可提升您下次申领成功几率，劣质试用报告将导致您被限制失去申领资格；\n"), _c('br'), _c('br'), _vm._v("\n6. 网易美学将采用系统自动审核方式审核申领名单。\n")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4aaf1915", module.exports)
  }
}

/***/ })

});
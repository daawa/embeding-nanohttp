webpackJsonp([2],{

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(424)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(416),
  /* template */
  __webpack_require__(448),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-68a4cb7c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/webview/sktest.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sktest.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68a4cb7c", Component.options)
  } else {
    hotAPI.reload("data-v-68a4cb7c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 416:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      pageTitle: "肤质测试"
    });
  }
};

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0, false, false)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sk"
  }, [_c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "qus--aos"
  }, [_vm._v("洗完脸后，不涂任何护肤品的状态下你的脸感受如何？")]), _c('div', {
    staticClass: "section"
  }, [_c('h3', [_vm._v("感觉干燥")]), _c('div', {
    staticClass: "type left-4"
  }, [_c('span', [_vm._v("T区无反射光")]), _c('img', {
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/img/7b104223-6a0d-40ad-81ce-c9750b031a14.png"
    }
  }), _c('span', {
    staticClass: "sand"
  }, [_vm._v("干性皮肤")])]), _c('div', {
    staticClass: "type left-2"
  }, [_c('span', [_vm._v("T区有反射光")]), _c('img', {
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/img/7b104223-6a0d-40ad-81ce-c9750b031a14.png"
    }
  }), _c('span', {
    staticClass: "blush"
  }, [_vm._v("混合性偏干皮肤")])])]), _c('div', {
    staticClass: "section"
  }, [_c('h3', [_vm._v("不感觉干燥")]), _c('div', {
    staticClass: "type left-3"
  }, [_c('span', [_vm._v("没有反射光，脸较水润")]), _c('img', {
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/img/7b104223-6a0d-40ad-81ce-c9750b031a14.png"
    }
  }), _c('span', {
    staticClass: "paleSalmon"
  }, [_vm._v("中性皮肤")])]), _c('div', {
    staticClass: "type left-2"
  }, [_c('span', [_vm._v("T区有反射光")]), _c('img', {
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/img/7b104223-6a0d-40ad-81ce-c9750b031a14.png"
    }
  }), _c('span', {
    staticClass: "dustyPink"
  }, [_vm._v("混合性偏油皮肤")])]), _c('div', {
    staticClass: "type left-1"
  }, [_c('span', [_vm._v("全脸都有反射光")]), _c('img', {
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/img/7b104223-6a0d-40ad-81ce-c9750b031a14.png"
    }
  }), _c('span', {
    staticClass: "oldPink"
  }, [_vm._v("油性皮肤")])])])])]), _c('div', {
    staticClass: "answer"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('img', {
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/img/64959dba-898a-4d51-8681-75636040bb22.png?imageView&thumbnail=640x0"
    }
  }), _c('span', {
    staticClass: "sand"
  }, [_vm._v("干性皮肤")])]), _c('p', [_vm._v("皮肤较薄，毛孔细小不明显。皮脂分泌不足缺乏油分，看起来总是紧绷、干燥。容易产生细纹。")]), _c('div', {
    staticClass: "title"
  }, [_c('img', {
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/img/1a4b50ce-8a07-4815-b1a5-9b6f7b840496.png?imageView&thumbnail=640x0"
    }
  }), _c('span', {
    staticClass: "blush"
  }, [_vm._v("混合性偏干皮肤")])]), _c('p', [_vm._v("T区较油，毛孔粗大。通常两颊偏干，有紧绷感。眼睛周围比较干燥，有细纹。")]), _c('div', {
    staticClass: "title center"
  }, [_c('img', {
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/img/acc07e98-f783-4b08-b756-a7c7f3136792.png?imageView&thumbnail=640x0"
    }
  }), _c('span', {
    staticClass: "paleSalmon"
  }, [_vm._v("中性皮肤")])]), _c('p', [_vm._v("肌肤细致，毛孔适中，油脂和水分均衡，T区没有油腻感。通常没有斑点等问题。")]), _c('div', {
    staticClass: "title"
  }, [_c('img', {
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/img/69625eff-54df-471e-b463-71d5d10ecd92.png?imageView&thumbnail=640x0"
    }
  }), _c('span', {
    staticClass: "dustyPink"
  }, [_vm._v("混合性偏油皮肤")])]), _c('p', [_vm._v("T区较油，毛孔粗大。但两颊出油相比T区要少，不紧绷。")]), _c('div', {
    staticClass: "title"
  }, [_c('img', {
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/img/fedf7216-1ee2-4ba4-b0a3-6d98d5dd91d3.png?imageView&thumbnail=640x0"
    }
  }), _c('span', {
    staticClass: "oldPink"
  }, [_vm._v("油性皮肤")])]), _c('p', [_vm._v("毛孔粗大，弹性较佳。皮脂分泌旺盛，T区油腻，皮肤油亮。容易长粉刺和痘痘，不容易产生皱纹。易晕妆脱妆。")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-68a4cb7c", module.exports)
  }
}

/***/ })

});
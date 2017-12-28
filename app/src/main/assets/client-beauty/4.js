webpackJsonp([4],{

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(417)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(414),
  /* template */
  __webpack_require__(440),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0b9c6fc4",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/webview/Test.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Test.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b9c6fc4", Component.options)
  } else {
    hotAPI.reload("data-v-0b9c6fc4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 414:
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

var inBrowser = true;
var Util = inBrowser ? __webpack_require__(69) : null;
exports.default = {
  mounted: function mounted() {
    Util.refreshPage({
      pageTitle: '测一测'
    });
  },

  methods: {
    login: function login(url) {
      location.href = '/login?redirect=' + url;
    },
    share: function share() {
      if (window && window.MZBridge) {
        window.MZBridge.callHandler('share', {
          guideTitle: '分享引导标题', // 引导标题（1.5版本新增）
          title: "EGF、干细胞、脐带血精华……护肤品中的“伪概念”你信了多少？-配方师Rex",
          subTitle: "作为一名护肤品研发人员，我觉得市场部的同事要比我们辛苦的多，因为这个行业实在是鱼龙混杂，市场上的趋势也是千变万化，他们一定是死了很多很多脑细胞才能发明出那些惊为天人的广告宣称。这里面的本质是因为，护",
          url: "http://mei.163.com/repo/prx5cff609f0c71a67fed1a6ce0e016a381",
          imageUrl: "https://beauty.nosdn.127.net/beauty/img/1383b5fb-1a4b-4c00-90bf-81ec983c07a3.jpg?imageView&crop=0_0_900_600"
        }, function (result) {
          // 1: 成功，0: 失败
          alert( true ? '成功' : '失败');
        });
      } else {
        alert("MZBridge not exist.");
      }
    },
    previewImage: function previewImage() {
      if (window && window.MZBridge) {
        window.MZBridge.callHandler('previewImage', {
          urls: ['https://beauty.nosdn.127.net/beauty/img/fdb6c666-ae69-4cd4-a4f1-2254ac27d58b.jpg', 'https://beauty.nosdn.127.net/beauty/img/6565b7d6-dbb0-47b8-a0e4-c97206ffd3ca.png', 'https://beauty.nosdn.127.net/beauty/img/c40f9505-6a69-4a66-b636-2a4a02a9ec11.png', 'https://beauty.nosdn.127.net/beauty/img/cad98fbd-3026-48af-b378-dac67bf98c02.jpg'],
          current: 1
        });
      } else {
        alert("MZBridge not exist.");
      }
    },
    spechars: function spechars() {
      var schemeUrl = this.$beauty.getURLScheme('webview', {
        url: '/trial/prx2a25dfdc200c5e5554ccc244c27e25cd?da_location:1'
      });
      if (schemeUrl) {
        location.href = schemeUrl;
      }
    }
  },
  name: "webview-test",
  serverCacheKey: function serverCacheKey(props) {
    return true;
  }
};

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('img', {
    attrs: {
      "src": "https://beauty.nosdn.127.net/beauty/img/7ef2a266-2be4-489a-9618-9c54a0dd7752.jpeg?imageView&thumbnail=590x0"
    }
  }), _c('h2', {
    staticClass: "subtlt"
  }, [_vm._v("~ SCHEME ~")]), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "nemeixue://webview?url=https://www.baidu.com/"
    }
  }, [_vm._v("打开新的webview")]), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "nemeixue://trial/order/123/addressEdit"
    }
  }, [_vm._v("写地址/编辑地址")]), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "nemeixue://recordeditor?productId=prx9a5704e1c728807156f4a9aa01f9582c&skuId=243062&trialId=22"
    }
  }, [_vm._v("写心得/编辑心得(t1环境)")]), _c('h2', {
    staticClass: "subtlt"
  }, [_vm._v("~ JS BRIDGE ~")]), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.share
    }
  }, [_vm._v("分享")]), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.previewImage
    }
  }, [_vm._v("预览图片")]), _c('h2', {
    staticClass: "subtlt"
  }, [_vm._v("~ HTTPS ~")]), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "/login?redirect=https://m.mei.163.com/webview/videotest"
    }
  }, [_vm._v("登录并跳转（a标签）")]), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function($event) {
        _vm.login('//m.mei.163.com/webview/videotest')
      }
    }
  }, [_vm._v("登录并跳转（js跳转）")]), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.spechars
    }
  }, [_vm._v("webview特殊字符")]), _c('br'), _c('br')])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b9c6fc4", module.exports)
  }
}

/***/ })

});
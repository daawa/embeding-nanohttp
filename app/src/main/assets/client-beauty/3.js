webpackJsonp([3],{

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(420)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(415),
  /* template */
  __webpack_require__(444),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-29d10a6b",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/webview/VideoTest.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VideoTest.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29d10a6b", Component.options)
  } else {
    hotAPI.reload("data-v-29d10a6b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 415:
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

exports.default = {
  data: function data() {
    return {
      focus: false,
      userInfo: {}
    };
  },
  mounted: function mounted() {
    this.loadNep().then(function () {
      var options = {
        // techOrder: ["html5", "flash"],
        controlBar: {
          currentTimeDisplay: true,
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false
        }
      };
      window.myPlayer = window.neplayer('my-video', options, function () {});
    }, function () {});
    var ctx = this;
    document.addEventListener('MZBridgeLoaded', function (event) {
      if (window.MZBridge) {
        window.MZBridge.callHandler('getUserInfo', function (userInfo) {
          ctx.userInfo = userInfo;
        });
      }
    });
  },

  methods: {
    // 手动加载视频云播放器相关代码
    loadNep: function loadNep() {
      function insertNep(callback) {
        var nepCssId = 'nep-css';
        var nepScriptId = 'nep-script';
        var cssUrl = '//nos.netease.com/vod163/nep.min.css';
        var scriptUrl = '//nos.netease.com/vod163/nep.min.js';
        var target = document.getElementsByTagName('head')[0] || document.body || document.documentElement;
        if (!document.getElementById(nepCssId)) {
          var cssNode = document.createElement('link');
          cssNode.id = nepCssId;
          cssNode.rel = 'stylesheet';
          cssNode.type = 'text/css';
          cssNode.href = cssUrl;
          target.appendChild(cssNode);
        }
        if (!document.getElementById(nepScriptId)) {
          var scriptNode = document.createElement('script');
          callback && scriptNode.addEventListener("load", callback, false);
          scriptNode.type = "text/javascript";
          scriptNode.src = scriptUrl;
          target.appendChild(scriptNode);
        } else {
          callback();
        }
      }
      return new Promise(function (resolve, reject) {
        insertNep(function () {
          resolve();
        });
      });
    },
    login: function login() {
      var ctx = this;
      if (window.MZBridge) {
        window.MZBridge.callHandler('login', function (userInfo) {
          ctx.userInfo = userInfo;
        });
      } else {
        alert('MZBridge 对象不存在');
      }
    }
  }
};

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("~ 视频测试 ~")]), _vm._m(0, false, false), _c('div', {
    staticClass: "user"
  }, [(_vm.userInfo && _vm.userInfo.id) ? _c('span', [_vm._v("用户信息：" + _vm._s(_vm.userInfo.id) + "|" + _vm._s(_vm.userInfo.name) + "|" + _vm._s(_vm.userInfo.age) + "|" + _vm._s(_vm.userInfo.skinType))]) : _c('div', [_vm._v("用户未登录 "), _c('button', {
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('video', {
    staticClass: "video-js vjs-big-play-centered vjs-fluid",
    attrs: {
      "id": "my-video",
      "controls": "",
      "poster": "//nos.netease.com/vod163/poster.png",
      "webkit-playsinline": "",
      "playsinline": ""
    }
  }, [_c('source', {
    attrs: {
      "src": "//nos.netease.com/vod163/demo.mp4",
      "type": "video/mp4"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-29d10a6b", module.exports)
  }
}

/***/ })

});
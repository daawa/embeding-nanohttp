webpackJsonp([10],{

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-wrap"
  }, [_c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "m-notes"
  }, [_c('ul', {
    staticClass: "list"
  }, _vm._l((_vm.list || []), function(p, index) {
    return _c('li', {
      key: index,
      staticClass: "item",
      class: {
        'item-0': index % 2 == 1
      },
      on: {
        "click": function($event) {
          _vm.toNote(p.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": p.imageArray[0]
      }
    }), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(p.productName))]), _c('div', {
      staticClass: "desc"
    }, [(p.emotion != 0) ? _c('span', [_c('span', {
      staticClass: "star"
    }, [_vm._v(_vm._s(6 - p.emotion) + "星")]), _vm._v(" |")]) : _vm._e(), _vm._v("\n                " + _vm._s(p.text) + "\n              ")]), (p.author) ? _c('div', {
      staticClass: "w-author w-author-1"
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": p.author.avatarUrl || _vm.defaultAvatar
      }
    }), _c('span', {
      staticClass: "nickname"
    }, [_vm._v(_vm._s(p.author.name))]), _c('span', {
      staticClass: "pr",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.launchApp($event)
        }
      }
    }, [_vm._v(_vm._s(p.praiseCount))])]) : _vm._e()])])
  }))]), _c('div', {
    staticClass: "loading"
  }, [(!_vm.fetched || (!_vm.fetchFailed && _vm.hasNext)) ? _c('div', [_vm._v("\n        正在加载...\n      ")]) : _vm._e()]), (_vm.fetchFailed) ? _c('div', {
    staticClass: "failed",
    on: {
      "click": _vm.getList
    }
  }, [_vm._m(0, false, false)]) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "txt"
  }, [_vm._v("加载失败，"), _c('span', [_vm._v("点击重新加载")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72f24fa8", module.exports)
  }
}

/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    ref: "content",
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "m-download"
  }, [_c('div', {
    staticClass: "close",
    on: {
      "click": _vm.close
    }
  }), _c('div', {
    staticClass: "download",
    on: {
      "click": _vm.download
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a6708c1e", module.exports)
  }
}

/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wraper"
  }, [_c('video', {
    ref: "video",
    attrs: {
      "controls": "",
      "preload": "metadata",
      "poster": _vm.displayVideo.cover,
      "webkit-playsinline": "",
      "playsinline": ""
    }
  }, [_c('source', {
    attrs: {
      "src": _vm.displayVideo.url,
      "type": "video/mp4"
    }
  })]), (_vm.status === _vm.videoStatus.INIT) ? _c('div', {
    staticClass: "mask",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.onClickPlay($event)
      }
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ede34c04", module.exports)
  }
}

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(753)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(611),
  /* template */
  __webpack_require__(970),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-50c48d8e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/pechoin/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50c48d8e", Component.options)
  } else {
    hotAPI.reload("data-v-50c48d8e", Component.options)
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

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(439)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(437),
  /* template */
  __webpack_require__(441),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-759f3ade",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/Loading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Loading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-759f3ade", Component.options)
  } else {
    hotAPI.reload("data-v-759f3ade", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 437:
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

exports.default = {
  props: {
    txt: {
      default: '正在加载...'
    }
  }
};

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-loading"
  }, [_c('img', {
    attrs: {
      "src": "/res/image/loading.png"
    }
  }), _c('span', [_vm._v(_vm._s(_vm.txt))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-759f3ade", module.exports)
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

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 视频状态
var videoStatus = {
  INIT: 'init',
  PLAY: 'play',
  PAUSE: 'pause',
  END: 'end'
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

exports.default = {
  props: {
    displayVideo: {
      type: Object,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      videoStatus: videoStatus,
      clicked: false, // 是否点击过播放按钮
      played: false, // 是否播放过
      status: videoStatus.INIT, // 视频当前播放状态
      usingNativeControls: true // 是否使用原生控制条
    };
  },

  computed: {
    isWifi: function isWifi() {
      return this.$store.getters.isWifi;
    }
  },
  mounted: function mounted() {
    this.videoNode = this.$refs.video;
    this.initPlayer();
  },

  methods: {
    // 初始化视频云播放器
    initPlayer: function initPlayer() {
      var _this = this;

      var node = this.videoNode;
      node.addEventListener('play', function () {
        _this.status = videoStatus.PLAY;
        if (!_this.played) {
          _this.played = true; // 标记已经播放过
          // 统计视频播放次数
          (0, _fetch2.default)('/api/videoDisplay/' + _this.displayVideo.id, {
            method: 'POST'
          });
        }
      }, false);
      if (!(this.isWifi === false) && this.autoplay) {
        this.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
          _this.play();
        }, false);
      }
    },

    // 点击遮罩
    onClickPlay: function onClickPlay() {
      if (this.clicked || this.isWifi !== false) {
        this.play();
        return;
      }
      // 提示流量
      var userConfirm = window.confirm('\u60A8\u6B63\u5728\u4F7F\u7528\u975Ewifi\u7F51\u7EDC\uFF0C\u5C06\u4EA7\u751F ' + this.displayVideo.size + ' \u6D41\u91CF\uFF0C\u662F\u5426\u786E\u5B9A\u64AD\u653E\uFF1F');
      if (userConfirm === true) {
        this.play();
      }
    },

    // 点击遮罩后，播放视频
    play: function play() {
      this.clicked = true;
      this.videoNode.play();
    }
  }
};

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beautySDK =  true ? __webpack_require__(139).default : null;
// const Util = process.BROWSER ? require('~/util/util') : null

exports.default = {
  mounted: function mounted() {
    this.stopTouchMove();
  },

  methods: {
    // 禁止弹窗打开时外部页面滚动
    // todo：安卓还存在快速滑动情况页面可滚动
    stopTouchMove: function stopTouchMove() {
      this.$refs.content.addEventListener('touchmove', function (e) {
        e.stopPropagation();
      });
      // 防止内容区域滚到底后引起页面整体的滚动
      var content = this.$refs.content;
      var startY = void 0;

      content.addEventListener('touchstart', function (e) {
        startY = e.touches[0].clientY;
      });

      content.addEventListener('touchmove', _lodash2.default.throttle(function (e) {
        // 高位表示向上滚动
        // 底位表示向下滚动
        // 1容许 0禁止
        var status = '11';
        var ele = this;

        var currentY = e.touches[0].clientY;

        if (ele.scrollTop === 0) {
          // 如果内容小于容器则同时禁止上下滚动
          status = ele.offsetHeight >= ele.scrollHeight ? '00' : '01';
        } else if (ele.scrollTop + ele.offsetHeight >= ele.scrollHeight) {
          // 已经滚到底部了只能向上滚动
          status = '10';
        }

        if (status !== '11') {
          // 判断当前的滚动方向
          var direction = currentY - startY > 0 ? '10' : '01';
          // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
          if (!(parseInt(status, 2) & parseInt(direction, 2))) {
            e.preventDefault();
          }
        }
      }, 200));
    },
    close: function close() {
      this.$emit('close');
    },
    download: function download() {
      beautySDK.launchApp(window.location.href);
    }
  }
};

/***/ }),

/***/ 611:
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

var _vuex = __webpack_require__(32);

var _poster = __webpack_require__(861);

var _poster2 = _interopRequireDefault(_poster);

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
    },
    isMobile: function isMobile() {
      return (/(iPhone|iPad|iPod|Android)/i.test(this.ua)
      );
    }
  }, (0, _vuex.mapState)({
    source: function source(_ref) {
      var resource = _ref.resource;

      return resource.source || 0;
    },
    purchasable: function purchasable(_ref2) {
      var resource = _ref2.resource;

      return !(resource.purchasable === false);
    },

    "ua": "ua"
  })),
  components: {
    finished: _finished2.default,
    poster: _poster2.default
  }
};

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beautySDK =  true ? __webpack_require__(139).default : null;

var API = '/activity/pechoin/join';

exports.default = {
  props: {
    shareInfo: {
      type: Object
    }
  },
  created: function created() {
    var _this = this;

    (0, _fetch2.default)(API).then(function (data) {
      if (typeof data.result === "boolean") {
        _this.joined = data.result;
      }
    }, function (json) {
      if (json.code === 10001) {
        _this.finished = true;
        (0, _toast2.default)(json.msg || "活动已结束");
      }
    });
  },
  mounted: function mounted() {
    this.stopTouchMove();
  },

  computed: {
    joinable: function joinable() {
      return this.shared && !this.joined;
    }
  },
  data: function data() {
    return {
      shared: false,
      joined: false,
      finished: false
    };
  },

  methods: {
    // 禁止弹窗打开时外部页面滚动
    // todo：安卓还存在快速滑动情况页面可滚动
    stopTouchMove: function stopTouchMove() {
      this.$refs.content.addEventListener('touchmove', function (e) {
        e.stopPropagation();
      });
      // 防止内容区域滚到底后引起页面整体的滚动
      var content = this.$refs.content;
      var startY = void 0;

      content.addEventListener('touchstart', function (e) {
        startY = e.touches[0].clientY;
      });

      content.addEventListener('touchmove', _lodash2.default.throttle(function (e) {
        // 高位表示向上滚动
        // 底位表示向下滚动
        // 1容许 0禁止
        var status = '11';
        var ele = this;

        var currentY = e.touches[0].clientY;

        if (ele.scrollTop === 0) {
          // 如果内容小于容器则同时禁止上下滚动
          status = ele.offsetHeight >= ele.scrollHeight ? '00' : '01';
        } else if (ele.scrollTop + ele.offsetHeight >= ele.scrollHeight) {
          // 已经滚到底部了只能向上滚动
          status = '10';
        }

        if (status !== '11') {
          // 判断当前的滚动方向
          var direction = currentY - startY > 0 ? '10' : '01';
          // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
          if (!(parseInt(status, 2) & parseInt(direction, 2))) {
            e.preventDefault();
          }
        }
      }, 200));
    },
    close: function close() {
      this.$emit('close');
    },
    joinAct: function joinAct() {
      var _this2 = this;

      if (!this.joinable) return;

      (0, _fetch2.default)(API, { method: "POST" }).then(function (data) {
        (0, _toast2.default)(data.msg || "报名成功");
        if (typeof data.result === "boolean") {
          _this2.joined = data.result;
        }
      }, function (json) {
        (0, _toast2.default)(json.msg || "报名失败");
      });
    },
    shareAct: function shareAct() {
      var _this3 = this;

      if (this.finished) return;
      var shareInfo = this.shareInfo;
      beautySDK.share({
        title: shareInfo.shareTitle, // 分享标题
        subTitle: shareInfo.subTitle, // 分享描述
        shareType: 1, // 分享方式（1链接，3图片），其中图片模式在1.3.1版本引入
        url: shareInfo.shareUrl, // 分享链接
        imageUrl: shareInfo.imageUrl, // 分享图
        channel: [1, 2, 3, 4, 6, 7] // 去掉分享到美学
      }).then(function () {
        _this3.shared = true;
      }, function (errMsg) {
        // no action on share failed
      });
    }
  }
};

/***/ }),

/***/ 613:
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

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _Loading = __webpack_require__(436);

var _Loading2 = _interopRequireDefault(_Loading);

var _constant = __webpack_require__(53);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _vuex = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialData = {
  loading: false, // 正在获取数据
  fetched: false, // 至少获取过一次数据
  fetchFailed: false, // 最近一次获取数据失败
  hasNext: true, // 还有未加载的数据
  notes: {
    list: [],
    total: null
  },
  defaultAvatar: _constant.IMGS.AVATAR
};
exports.default = {
  mounted: function mounted() {
    window.addEventListener('scroll', this.onScroll);
  },

  data: function data() {
    return _lodash2.default.cloneDeep(initialData);
  },
  computed: _extends({
    // 获取的最后一条评论的Id
    offset: function offset() {
      var list = this.notes.list;
      if (list && list.length) {
        return list.length;
      }
      return 0;
    },
    list: function list() {
      return this.notes.list.map(function (note) {
        var newNote = _lodash2.default.cloneDeep(note);
        if (newNote.imageArray && newNote.imageArray.length) {
          newNote.imageArray = newNote.imageArray.map(function (img) {
            return _jsUtil2.default.convertToNosUrl(img, '290y290');
          });
        }
        return newNote;
      });
    }
  }, (0, _vuex.mapState)(['inApp', 'ua'])),
  methods: {
    // 获取评论列表
    getList: function getList() {
      var _this = this;

      if (!this.hasNext || this.loading) {
        return;
      }
      this.loading = true;
      (0, _fetch2.default)('/activity/pechoin/notes', {
        body: {
          limit: 10,
          offset: this.offset
        }
      }).then(function (data) {
        var _ref = data.result || {},
            _ref$list = _ref.list,
            list = _ref$list === undefined ? [] : _ref$list,
            _ref$total = _ref.total,
            total = _ref$total === undefined ? 0 : _ref$total;

        _this.notes = {
          list: _this.notes.list.concat(list),
          total: total
        };
        _this.hasNext = _this.notes.list.length < total;
        _this.loading = false;
        _this.fetched = true;
        _this.fetchFailed = false;
      }, function (json) {
        _this.loading = false;
        _this.fetched = true;
        _this.fetchFailed = true;
      });
    },

    // 页面滚动到底部时，加载更多
    onScroll: function onScroll() {
      // 如果上一次加载失败，需要先手动触发一次加载
      if (this.fetchFailed) {
        return;
      }
      var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      var windowHeight = document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
      if (scrollTop + windowHeight + 50 >= documentHeight) {
        this.getList();
      }
    },
    toNote: function toNote(id) {
      if (this.inApp) {
        window.ga('send', 'event', 'Pechoin Activity', 'open native note', id);
        window.location.href = 'nemeixue://record/' + id;
      } else {
        this.$router.push('/note/' + id);
      }
    }
  },
  components: {
    loading: _Loading2.default
  }
};

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import successModal from '../common/successModal'


var _vuex = __webpack_require__(32);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

var _videoItem = __webpack_require__(857);

var _videoItem2 = _interopRequireDefault(_videoItem);

var _notes = __webpack_require__(860);

var _notes2 = _interopRequireDefault(_notes);

var _join = __webpack_require__(859);

var _join2 = _interopRequireDefault(_join);

var _download = __webpack_require__(858);

var _download2 = _interopRequireDefault(_download);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _constant = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beautySDK =  true ? __webpack_require__(139).default : null;
// const Util = process.BROWSER ? require('~/util/util') : null
var TMALL_COUPON_LINK = "http://pr.da.netease.com/receiver/?action=ad&camName=1500542860145&target=https%3A%2F%2Fshop.m.taobao.com%2Fshop%2Fcoupon.htm%3FsellerId%3D519286239%26activityId%3D5b52365e3704480e8c0e14dfb66dfd59&sid=-1219161330";

exports.default = {
  props: {
    downloadLink: {
      type: String
    },
    source: {
      type: Number
    }
  },
  computed: _extends({}, (0, _vuex.mapState)({
    // 视频展示对象
    displayVideo: function displayVideo(_ref) {
      var resource = _ref.resource;

      var video = resource.video || {};
      var vcontent = _lodash2.default.cloneDeep(video.vcontent || {});
      var duration = vcontent.duration;
      if (duration) {
        var hour = parseInt(duration / 60 / 60);
        var minute = parseInt(duration / 60 - hour * 60);
        var second = parseInt(duration % 60);
        var timeArray = [hour, minute, second];
        timeArray = _lodash2.default.map(timeArray, function (item) {
          return item > 9 ? item : '0' + item;
        });
        duration = timeArray.join(':');
      }
      video.duration = duration;
      // 取高清字段
      var url = vcontent.hdMp4Url || '';
      url = url.replace(/^http:/i, ''); // 处理视频云脏数据
      video.url = url;
      video.size = (vcontent.hdMp4Size / 1024 / 1024).toFixed(2) + 'M';
      video.playCnt = (video.videoSocialStat.playCnt || 0) * 69 + 10000;
      return video;
    },

    "repos": function repos(_ref2) {
      var resource = _ref2.resource;

      return resource.repos.map(function (item) {
        var newItem = _lodash2.default.cloneDeep(item);
        newItem.imageUrl = _jsUtil2.default.convertToNosUrl(newItem.imageUrl, '300y200');
        return newItem;
      });
    },
    "brandId": function brandId(_ref3) {
      var resource = _ref3.resource;
      return resource.brandId;
    },
    "shareInfo": function shareInfo(_ref4) {
      var resource = _ref4.resource;
      return resource.shareInfo;
    },
    "inApp": "inApp"
  }), (0, _vuex.mapGetters)(['isWifi'])),
  data: function data() {
    return {
      products: [{
        name: "三生三世礼盒",
        id: 'prxc3662605a13bd4eb92adc2414c001761',
        link: "http://pr.da.netease.com/receiver/?action=ad&camName=1500542616989&target=http%3A%2F%2Fgxb.mmstat.com%2Fgxb.gif%3Ft%3Dhttps%253A%252F%252Fdetail.m.tmall.com%252Fitem.htm%253Fid%253D524025734564%2526mm_gxbid%253D1_1554175_3642aa6aebabef622adab8b48b2dd74e%26v%3D3de21bbfdf43&sid=1666350223"
      }, {
        name: "三生花面膜",
        id: 'prxf36b9d1a51372c5396838f47f162112b',
        link: "http://pr.da.netease.com/receiver/?action=ad&camName=1500542679165&target=http%3A%2F%2Fgxb.mmstat.com%2Fgxb.gif%3Ft%3Dhttps%253A%252F%252Fdetail.m.tmall.com%252Fitem.htm%253Fid%253D39190127313%2526mm_gxbid%253D1_1554174_a37a261ddc40ddae5c1a3270dc6d2629%26v%3D9c3a543fc749&sid=1666350223"
      }, {
        name: "至臻皙白美白精华液",
        id: 'prxf0d26a169cbf84a57dbfab0916d56606',
        link: "http://pr.da.netease.com/receiver/?action=ad&camName=1500542500841&target=http%3A%2F%2Fgxb.mmstat.com%2Fgxb.gif%3Ft%3Dhttps%253A%252F%252Fdetail.m.tmall.com%252Fitem.htm%253Fid%253D536424817457%2526mm_gxbid%253D1_1554176_628137307c78c19b9ff665dc9b5dbecc%26v%3D2c82b71b944a&sid=1666350223"
      }, {
        name: "花样年华丝绒唇膏（长款）",
        id: 'prx5942a6afaf71b4e2a75542837ca1d6a2',
        link: "http://pr.da.netease.com/receiver/?action=ad&camName=1500542818316&target=http%3A%2F%2Fgxb.mmstat.com%2Fgxb.gif%3Ft%3Dhttp%253A%252F%252Fh5.m.taobao.com%252Fawp%252Fcore%252Fdetail.htm%253Fid%253D554854887688%2526mm_gxbid%253D1_1554182_453d20d66267f347756d1db4759797fd%26v%3D16716fec8911&sid=1666350223"
      }, {
        name: "短款",
        id: 'prxa3ae736d84d32d7b8bc76bbf778ef61d',
        link: "http://pr.da.netease.com/receiver/?action=ad&camName=1500542739164&target=http%3A%2F%2Fgxb.mmstat.com%2Fgxb.gif%3Ft%3Dhttp%253A%252F%252Fh5.m.taobao.com%252Fawp%252Fcore%252Fdetail.htm%253Fid%253D554661916443%2526mm_gxbid%253D1_1554180_f029fede83a89d379063a62c6ff341dc%26v%3D333c09d2c893&sid=1666350223"
      }],
      brandHide: true,
      brandFollowed: false,
      isLogin: false,
      showJoinModal: false,
      showDownloadModal: false,
      showNextTip: true, // 是否显示小箭头
      // showBanner: true,
      defaultAvatar: _constant.IMGS.AVATAR
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.inApp) {
      beautySDK.config({}).then(function () {
        beautySDK.isLogin().then(function (isLogin) {
          _this.isLogin = isLogin;
        });
      });
    }
    // Util.initAntiCheating(this).then((yidun) => {
    //   this.yidun = yidun
    // }, () => {
    //   throw new Error('易盾加载失败')
    // })
  },

  methods: {
    // 登录
    loginApp: function loginApp() {
      var _this2 = this;

      beautySDK.login().then(function (user) {
        user ? _this2.isLogin = true : null;
      });
    },

    // 判断是否在App中，不在则返回 false 并且弹出下载弹窗，在，则进行登录
    inAppValidation: function inAppValidation() {
      if (!this.inApp) {
        this.showDownloadModal = true;
        return false;
      }
      if (!this.isLogin) {
        this.loginApp();
        return false;
      }
      return true;
    },

    // 关注品牌
    followBrand: function followBrand() {
      var _this3 = this;

      if (!this.inAppValidation()) return;
      var action = this.brandFollowed ? "unfollow" : "follow";
      (0, _fetch2.default)('/' + action + '/?resType=' + _constant.RES_TYPES.BRAND + '&resId=' + this.brandId, {
        method: 'PUT'
      }).then(function (data) {
        _this3.brandFollowed = !_this3.brandFollowed;
        // toast("关注成功")
      }, function (json) {
        (0, _toast2.default)(json.msg || "未知错误");
      });
    },

    // 参与活动
    handleJoinButton: function handleJoinButton() {
      if (!this.inAppValidation()) return;
      this.showJoinModal = true;
    },
    handleGetCoupon: function handleGetCoupon() {
      if (!this.inAppValidation()) return;
      window.location.href = TMALL_COUPON_LINK;
    },

    // submitTel: function (event) {
    //   const { phone, source } = this
    //   if (!(/^1[3-8]\d{9}$/.test(phone))) {
    //     toast("请输入正确的手机号")
    //     return false;
    //   }

    //   this.yidun.flush(() => {
    //     const token = this.yidun.getToken()
    //     Fetch('/activity/20170309', {
    //       method: 'POST', // 缺省为'GET'
    //       body: {
    //         phone,
    //         source,
    //         token
    //       }
    //     }).then((data) => {
    //       const [title, message] = data.msg.split('\n\n')
    //       successModal({
    //         title,
    //         message,
    //         callback: () => { window.location.href = this.downloadLink }
    //       })
    //     }, json => {
    //       toast(json.msg || "未知错误")
    //     })
    //     this.yidun.reset()
    //   })
    // },
    toProduct: function toProduct(id) {
      if (this.inApp) {
        window.ga('send', 'event', 'Pechoin Activity', 'open native product', id);
        window.location.href = 'nemeixue://product/' + id;
      } else {
        this.$router.push('/product/' + id);
      }
    },
    toRepo: function toRepo(id) {
      if (this.inApp) {
        window.ga('send', 'event', 'Pechoin Activity', 'open native repo', id);
        window.location.href = 'nemeixue://repo/' + id;
      } else {
        this.$router.push('/repo/' + id);
      }
    }
  },
  components: {
    videoItem: _videoItem2.default,
    notes: _notes2.default,
    joinModal: _join2.default,
    downloadModal: _download2.default
  }
};

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(821)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(609),
  /* template */
  __webpack_require__(1040),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ede34c04",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/common/videoItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] videoItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ede34c04", Component.options)
  } else {
    hotAPI.reload("data-v-ede34c04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(806)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(610),
  /* template */
  __webpack_require__(1024),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a6708c1e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/pechoin/download.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] download.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a6708c1e", Component.options)
  } else {
    hotAPI.reload("data-v-a6708c1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(754)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(612),
  /* template */
  __webpack_require__(971),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-51cbbe13",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/pechoin/join.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] join.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51cbbe13", Component.options)
  } else {
    hotAPI.reload("data-v-51cbbe13", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(784)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(613),
  /* template */
  __webpack_require__(1002),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-72f24fa8",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/pechoin/notes.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] notes.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72f24fa8", Component.options)
  } else {
    hotAPI.reload("data-v-72f24fa8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(780)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(614),
  /* template */
  __webpack_require__(997),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-71408476",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/pechoin/poster.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] poster.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71408476", Component.options)
  } else {
    hotAPI.reload("data-v-71408476", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-main"
  }, [(!_vm.isMobile) ? _c('div', {
    staticClass: "pc"
  }) : (_vm.purchasable) ? _c('poster', {
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
     require("vue-hot-reload-api").rerender("data-v-50c48d8e", module.exports)
  }
}

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    ref: "content",
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "m-join"
  }, [_c('div', {
    staticClass: "btn btn-0",
    class: {
      'btn-disable': _vm.finished
    },
    on: {
      "click": _vm.shareAct
    }
  }, [_vm._v("去分享")]), _c('div', {
    staticClass: "btn btn-1",
    class: {
      'btn-disable': !_vm.joinable
    },
    on: {
      "click": _vm.joinAct
    }
  }, [_vm._v(_vm._s(_vm.joined ? "等待开奖" : "立即申请"))]), _c('div', {
    staticClass: "close",
    on: {
      "click": _vm.close
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-51cbbe13", module.exports)
  }
}

/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "~touchstart": function($event) {
        _vm.showNextTip = false
      }
    }
  }, [_c('div', {
    staticClass: "g-wrapper"
  }, [_c('div', {
    staticClass: "p-video"
  }, [_c('videoItem', {
    key: _vm.displayVideo.id,
    staticClass: "vid",
    attrs: {
      "autoplay": true,
      "displayVideo": _vm.displayVideo
    }
  }), _c('div', {
    staticClass: "desc"
  }, [_c('span', [_c('i', {
    staticClass: "icon icon-1"
  }), _vm._v(_vm._s(_vm.displayVideo.duration))]), _c('span', [_c('i', {
    staticClass: "icon icon-2"
  }), _vm._v("播放量 " + _vm._s(_vm.displayVideo.playCnt))])])], 1), _c('div', {
    staticClass: "m-main"
  }, [_c('div', {
    staticClass: "p-brand"
  }, [_c('div', {
    staticClass: "title"
  }), _c('div', {
    staticClass: "desc",
    class: {
      "desc-1": _vm.brandHide
    }
  }, [_vm._m(0, false, false), _vm._m(1, false, false), _c('p', {
    staticClass: "ops"
  }, [_c('a', {
    staticClass: "star",
    attrs: {
      "href": "javascript:void(0);"
    },
    on: {
      "click": _vm.followBrand
    }
  }, [_vm._v(_vm._s(_vm.brandFollowed ? "已关注" : "关注"))]), _c('i', {
    staticClass: "icon icon-4 less",
    on: {
      "click": function($event) {
        _vm.brandHide = true
      }
    }
  })]), _c('i', {
    staticClass: "icon icon-3 more",
    on: {
      "click": function($event) {
        _vm.brandHide = false
      }
    }
  })])]), _c('div', {
    staticClass: "p-products"
  }, [_c('div', {
    staticClass: "coupon",
    on: {
      "click": _vm.handleGetCoupon
    }
  }), _vm._l((_vm.products), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "prdwp",
      class: 'prdwp-' + index
    }, [_c('a', {
      staticClass: "prd",
      attrs: {
        "href": "javascript:void(0);",
        "href": item.link
      }
    }), _c('a', {
      staticClass: "tmall",
      on: {
        "click": function($event) {
          _vm.toProduct(item.id)
        }
      }
    })])
  })], 2), _c('div', {
    staticClass: "w-bdwp"
  }, [_c('div', {
    staticClass: "p-repos"
  }, [_c('div', {
    staticClass: "tit tit-1"
  }, [_vm._v("合辑")]), _c('ul', _vm._l((_vm.repos), function(p, index) {
    return _c('li', {
      key: p.id,
      staticClass: "item",
      on: {
        "click": function($event) {
          _vm.toRepo(p.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": p.imageUrl
      }
    }), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(p.title))]), _c('div', {
      staticClass: "w-author w-author-0"
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": p.author.avatarUrl || _vm.defaultAvatar
      }
    }), _c('span', {
      staticClass: "nickname"
    }, [_vm._v(_vm._s(p.author.name))])])])])
  }))])]), _c('div', {
    staticClass: "w-bdwp w-bdwp-1"
  }, [_c('div', {
    staticClass: "p-notes"
  }, [_c('div', {
    staticClass: "tit tit-2"
  }, [_vm._v("心得")]), _c('notes')], 1)])]), (_vm.showNextTip) ? _c('div', {
    staticClass: "w-next"
  }) : _vm._e(), _c('div', {
    staticClass: "w-join",
    on: {
      "click": _vm.handleJoinButton
    }
  }), (_vm.showJoinModal) ? _c('joinModal', {
    attrs: {
      "shareInfo": _vm.shareInfo
    },
    on: {
      "close": function($event) {
        _vm.showJoinModal = false
      }
    }
  }) : _vm._e(), (_vm.showDownloadModal) ? _c('downloadModal', {
    on: {
      "close": function($event) {
        _vm.showDownloadModal = false
      }
    }
  }) : _vm._e()], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('strong', [_vm._v("东方护肤的里程碑，始于1931 |")]), _vm._v(" 1931年，一代影星阮玲玉红透上海滩的年华里，百雀羚创立，成为30年代轰动一时的护肤品品牌。三生花亦是吸收了85年草本护肤经验，将独特的东方草本护肤文化匠心传承。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('strong', [_vm._v("三生心血，铸就三生风华 |")]), _vm._v(" 2012年，三生花诞生。历时多年精心创作，万种草本原材研究，无数张原创手稿绘制，终于花开，带着沉淀下来的美丽，陪伴年轻一代开启新的旅程。")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-71408476", module.exports)
  }
}

/***/ })

});
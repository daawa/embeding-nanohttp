webpackJsonp([12],{

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text"
  }, [_c('span', {
    staticClass: "name",
    class: _vm.star
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-79b0bb61", module.exports)
  }
}

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(734)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(618),
  /* template */
  __webpack_require__(951),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3c8a84a6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/Share.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Share.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c8a84a6", Component.options)
  } else {
    hotAPI.reload("data-v-3c8a84a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constant = __webpack_require__(53);

var inBrowser = true;
var Util = inBrowser ? __webpack_require__(69) : null;

exports.default = {
  preload: function preload(resources) {
    if (typeof resources === 'string') {
      resources = [resources];
    }
    resources.forEach(function (resource) {
      var img = new Image();
      img.src = resource;
      img.style.display = 'none';
      document.body.appendChild(img);
    });
  },
  animateScroll: function animateScroll(el, duration) {
    var start = el.scrollTop;
    var end = el.scrollHeight;
    var change = end - start;
    var increment = 20;
    function easeInOut(currentTime, start, change, duration) {
      currentTime /= duration / 2;
      if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
      }
      currentTime -= 1;
      return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    }
    function animate(elapsedTime) {
      elapsedTime += increment;
      var position = easeInOut(elapsedTime, start, change, duration);
      el.scrollTop = position;
      if (elapsedTime < duration) {
        setTimeout(function () {
          animate(elapsedTime);
        }, increment);
      }
    }
    animate(0);
  },
  statistics: function statistics() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return {
      onSharepAppMessageSuccess: function onSharepAppMessageSuccess() {
        Util.eventTrace(_extends({
          category: "ActivityQixi",
          action: _constant.STATISTICS_ACTIONS.SHARE_TO_WECAHT_APP_MESSAGE
        }, options));
      },
      onshareTimelineSuccess: function onshareTimelineSuccess() {
        Util.eventTrace(_extends({
          category: "ActivityQixi",
          action: _constant.STATISTICS_ACTIONS.SHARE_TO_WECAHT_TIMELINE
        }, options));
      }
    };
  }
};

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultState = {
  currentStep: 0,
  score: 20, // 初始分数
  star: null
};
exports.default = {
  namespaced: true,
  state: Object.assign({
    musicPlaying: null, // 背景音乐是否在播放
    played: 0, // 当前页面玩过的次数（到达结果页之后++）
    defaultShareInfo: { // 默认的微信分享文案。用于游戏未完成时 & 分享落地页
      shareTitle: "测测你的尬聊技能",
      subTitle: "七夕了，我想好好聊个天",
      imageUrl: "https://beauty.nosdn.127.net/beauty/img/33c3ee14-11ff-4cbd-ae25-033fa3cad35c.png",
      shareUrl: "https://m.mei.163.com/activity/qixi"
    },
    defaultTitle: "测测你的尬聊技能"
  }, defaultState),
  mutations: {
    reset: function reset(state) {
      for (var key in defaultState) {
        state[key] = defaultState[key];
      }
    },

    // 标记为已玩过游戏
    setPlayed: function setPlayed(state) {
      state.played++;
    },

    // 设置音乐当前播放状态
    setMusicStatus: function setMusicStatus(state, playing) {
      state.musicPlaying = playing;
    },

    // 进入游戏下一步
    nextStep: function nextStep(state) {
      state.currentStep++;
    },

    // 设置idol
    setStar: function setStar(state, star) {
      state.star = star;
    },

    // 更新得分
    setScore: function setScore(state, score) {
      if (score < 0) {
        score = 0;
      }
      if (score > 100) {
        score = 100;
      }
      state.score = score;
    }
  },
  getters: {
    user: function user(state, getters, rootState) {
      return rootState.currentUser;
    }
  }
};

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = __webpack_require__(32);

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
  computed: _extends({}, (0, _vuex.mapState)('qixi', ['musicPlaying'])),
  data: function data() {
    return {
      initialized: false,
      music: 'https://beauty.nosdn.127.net/bf0df2e2bb3e6fee0275f6cc7921069c.mp3'
    };
  },
  mounted: function mounted() {
    var _this = this;

    Util.wx.ready(function () {
      if (_this.initialized) return;
      _this.initialized = true;
      var musicPlaying = _this.musicPlaying;

      if (musicPlaying === null) {
        _this.togglePause(true);
      } else {
        // 为了解决微信播放问题，只有页面第一次打开才默认播放
        _this.togglePause(false);
      }
    });
  },

  methods: _extends({}, (0, _vuex.mapMutations)('qixi', ['setMusicStatus']), {
    togglePause: function togglePause(newStatus) {
      if (typeof newStatus !== 'boolean') {
        newStatus = !this.musicPlaying;
      }
      if (!newStatus) {
        this.$refs.music.pause();
        this.setMusicStatus(false);
      } else {
        this.$refs.music.play();
        this.setMusicStatus(true);
      }
    }
  })
};

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

var Util =  true ? __webpack_require__(69) : null;
exports.default = {
  methods: {
    callApp: function callApp() {
      this.$eventTrace({
        category: "ActivityQixi",
        action: "click",
        eventLabel: "下载APP"
      });
      Util.callApp({
        wechatLink: 'http://163.lu/qxK9s4'
      });
    }
  }
};

/***/ }),

/***/ 514:
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

var _Dogs = __webpack_require__(545);

var _Dogs2 = _interopRequireDefault(_Dogs);

var _vuex = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    dogs: _Dogs2.default
  },
  props: {
    idol: String,
    score: Number
  },
  data: function data() {
    return {
      displayPics: ["//beauty.nosdn.127.net/beauty/img/27d7bc7d-4a8d-4685-a5e6-a7feaf018525.gif", "//beauty.nosdn.127.net/beauty/img/8951abed-51ab-4eb5-8d88-8ae8fba82441.png", "//beauty.nosdn.127.net/beauty/img/00c16cc0-3b9c-4b69-b7a8-ac0a963bc375.gif"]
    };
  },

  computed: _extends({}, (0, _vuex.mapGetters)('qixi', ['user']), {
    dogCount: function dogCount() {
      // 策划给出的狗子数计算规则
      return 8 - this.score / 10;
    },
    result: function result() {
      var score = this.score;
      if (score <= 20) {
        return 3;
      } else if (score >= 80) {
        return 1;
      }
      return 2;
    }
  })
};

/***/ }),

/***/ 515:
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

exports.default = {
  props: {
    count: Number
  },
  mounted: function mounted() {
    this.ready = true;
  },
  data: function data() {
    return {
      ready: false, // 避免动画执行过早
      dogPic: "//beauty.nosdn.127.net/beauty/img/f2ba14a8-7d6a-4ed7-9e35-9fa74333ec9b.gif"
    };
  }
};

/***/ }),

/***/ 516:
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

exports.default = {
  props: {
    score: Number
  }
};

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(520)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(512),
  /* template */
  __webpack_require__(551),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2ef365ce",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/Music.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Music.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ef365ce", Component.options)
  } else {
    hotAPI.reload("data-v-2ef365ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(518)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(513),
  /* template */
  __webpack_require__(549),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-204bdf46",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/result/Bottom.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Bottom.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-204bdf46", Component.options)
  } else {
    hotAPI.reload("data-v-204bdf46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(527)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(514),
  /* template */
  __webpack_require__(558),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-764afab7",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/result/Display.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Display.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-764afab7", Component.options)
  } else {
    hotAPI.reload("data-v-764afab7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(524)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(515),
  /* template */
  __webpack_require__(555),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5cbc6692",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/result/Dogs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dogs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cbc6692", Component.options)
  } else {
    hotAPI.reload("data-v-5cbc6692", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(529)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(516),
  /* template */
  __webpack_require__(560),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-96afa872",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/result/Score.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Score.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96afa872", Component.options)
  } else {
    hotAPI.reload("data-v-96afa872", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bottom"
  }, [_c('button', {
    on: {
      "click": _vm.callApp
    }
  }, [_vm._v("下载APP")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-204bdf46", module.exports)
  }
}

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('span', {
    staticClass: "music",
    class: {
      pause: !_vm.musicPlaying
    },
    on: {
      "click": _vm.togglePause
    }
  }), _c('audio', {
    ref: "music",
    attrs: {
      "src": _vm.music,
      "preload": "",
      "loop": "loop"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ef365ce", module.exports)
  }
}

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.count === 2) ? _c('div', _vm._l(([8, 9]), function(i) {
    return _c('img', {
      staticClass: "dog",
      class: _vm.ready ? 'dog' + i : '',
      attrs: {
        "src": _vm.dogPic
      }
    })
  })) : (_vm.count === 4) ? _c('div', _vm._l(([7, 6, 2, 1]), function(i) {
    return _c('img', {
      staticClass: "dog",
      class: _vm.ready ? 'dog' + i : '',
      attrs: {
        "src": _vm.dogPic
      }
    })
  })) : _c('div', _vm._l((_vm.count), function(i) {
    return _c('img', {
      staticClass: "dog",
      class: _vm.ready ? 'dog' + (_vm.count + 1 - i) : '',
      attrs: {
        "src": _vm.dogPic
      }
    })
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5cbc6692", module.exports)
  }
}

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "display",
    class: ['result-' + _vm.result, _vm.idol]
  }, [_vm._m(0, false, false), _c('div', {
    staticClass: "you"
  }, [(_vm.user && _vm.user.headshot) ? _c('img', {
    attrs: {
      "src": _vm.user && _vm.user.headshot
    }
  }) : _vm._e()]), _c('div', {
    staticClass: "pic"
  }, [_vm._l((_vm.displayPics), function(pic, index) {
    return (_vm.result === index + 1) ? _c('img', {
      staticClass: "frame",
      attrs: {
        "src": pic
      }
    }) : _vm._e()
  }), (_vm.result === 2) ? _c('div', [_c('dogs', {
    attrs: {
      "count": _vm.dogCount
    }
  })], 1) : _vm._e()], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "idol"
  }, [_c('div')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-764afab7", module.exports)
  }
}

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "score",
    class: 'score-' + _vm.score
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-96afa872", module.exports)
  }
}

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _store = __webpack_require__(99);

var _store2 = _interopRequireDefault(_store);

var _qixi = __webpack_require__(501);

var _qixi2 = _interopRequireDefault(_qixi);

var _Score = __webpack_require__(546);

var _Score2 = _interopRequireDefault(_Score);

var _Display = __webpack_require__(544);

var _Display2 = _interopRequireDefault(_Display);

var _ShareText = __webpack_require__(873);

var _ShareText2 = _interopRequireDefault(_ShareText);

var _Music = __webpack_require__(542);

var _Music2 = _interopRequireDefault(_Music);

var _Bottom = __webpack_require__(543);

var _Bottom2 = _interopRequireDefault(_Bottom);

var _vuex = __webpack_require__(32);

var _helper = __webpack_require__(454);

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  components: {
    score: _Score2.default,
    display: _Display2.default,
    shareText: _ShareText2.default,
    music: _Music2.default,
    bottom: _Bottom2.default
  },
  beforeCreate: function beforeCreate() {
    // 动态注册vuex module
    _store2.default.registerModule('qixi', _qixi2.default);
  },
  beforeDestroy: function beforeDestroy() {
    _store2.default.unregisterModule('qixi');
  },
  data: function data() {
    return {
      playLink: 'http://163.lu/cl0Yt2'
    };
  },

  computed: _extends({}, (0, _vuex.mapState)({
    score: function score(state) {
      return state.resource.score;
    },
    star: function star(state) {
      return state.resource.star;
    },
    inWechat: function inWechat(state) {
      return state.inWechat;
    }
  }), (0, _vuex.mapState)('qixi', {
    defaultShareInfo: function defaultShareInfo(state) {
      return state.defaultShareInfo;
    },
    defaultTitle: function defaultTitle(state) {
      return state.defaultTitle;
    }
  }), (0, _vuex.mapGetters)('qixi', ['user']), {
    result: function result() {
      var score = this.score;
      if (score <= 20) {
        return 3;
      } else if (score >= 80) {
        return 1;
      }
      return 2;
    }
  }),
  mounted: function mounted() {
    this.$eventTrace({
      category: "ActivityQixi",
      action: "mounted",
      eventLabel: "Share"
    });
    this.$nextTick(this.configWx);
    Util.refreshPage({
      pageTitle: this.inWechat ? '好友战绩' : this.defaultTitle
    });
  },

  methods: _extends({}, (0, _vuex.mapMutations)('qixi', ['reset']), {
    // 配置微信sdk
    configWx: function configWx() {
      var defaultShareInfo = this.defaultShareInfo;

      var params = _extends({
        eventLabel: defaultShareInfo.shareTitle
      }, defaultShareInfo);
      Util.configWxShare(_extends({ shareInfo: this.defaultShareInfo }, _helper2.default.statistics(params)));
    }
  })
};

/***/ }),

/***/ 627:
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

var _vuex = __webpack_require__(32);

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)({
    star: function star(state) {
      return state.resource.star;
    }
  }))
};

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(789)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(627),
  /* template */
  __webpack_require__(1007),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-79b0bb61",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/result/ShareText.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ShareText.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79b0bb61", Component.options)
  } else {
    hotAPI.reload("data-v-79b0bb61", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "result",
    class: ['result-' + _vm.result, _vm.star]
  }, [_c('div', {
    staticClass: "bg"
  }, [_c('share-text'), _c('score', {
    attrs: {
      "score": _vm.score
    }
  }), _c('display', {
    attrs: {
      "idol": _vm.star,
      "score": _vm.score
    }
  }), _c('bottom'), _c('a', {
    staticClass: "play",
    attrs: {
      "href": _vm.playLink
    }
  })], 1), _c('music')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3c8a84a6", module.exports)
  }
}

/***/ })

});
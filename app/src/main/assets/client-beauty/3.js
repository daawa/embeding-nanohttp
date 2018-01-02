webpackJsonp([3],{

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text",
    class: ['result-' + _vm.result, _vm.star]
  }, [(_vm.result === 2) ? [_c('span', {
    staticClass: "name"
  }), _c('span', {
    staticClass: "text233",
    class: 'digit-' + _vm.numberDigit
  }, [_vm._v(_vm._s(_vm.number233))])] : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-738381f6", module.exports)
  }
}

/***/ }),

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap",
    style: ({
      backgroundImage: ("url(" + _vm.background + ")")
    })
  }, [_c('div', {
    staticClass: "timeline"
  }, [_c('div', {
    ref: "list",
    staticClass: "timeline--content"
  }, _vm._l((_vm.timeline), function(item, index) {
    return _c(item.type, {
      key: index,
      tag: "div",
      attrs: {
        "message": item.message,
        "image": item.image
      }
    })
  }))]), _c('div', {
    staticClass: "msgbox"
  }, [(_vm.currentQuestion && _vm.replyBoxVisible) ? _c('ul', {
    staticClass: "selectbox"
  }, _vm._l((_vm.currentQuestion.answers), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "item",
      class: {
        'item__hover': item.hover
      },
      on: {
        "click": function($event) {
          _vm.chooseReply(index)
        },
        "touchstart": function($event) {
          _vm.messageItemTouchChanged(index, true)
        },
        "touchend": function($event) {
          _vm.messageItemTouchChanged(index, false)
        }
      }
    }, [_c('span', {
      staticClass: "icon"
    }), _c('span', [_vm._v(_vm._s(item.content)), (item.nosImage) ? _c('img', {
      staticClass: "img",
      attrs: {
        "src": item.nosImage
      }
    }) : _vm._e()])])
  })) : _vm._e(), _c('div', {
    staticClass: "talkbox"
  }, [_c('div', {
    staticClass: "logo"
  }), _c('div', {
    staticClass: "input",
    on: {
      "click": _vm.showReplyBox
    }
  }, [_vm._v(_vm._s(_vm.inputSuggest))]), _c('div', {
    staticClass: "reply"
  })])]), _c('heart'), (_vm.endGIF) ? _c('div', {
    staticClass: "endgifwrap"
  }, [_c('img', {
    staticClass: "endgif",
    class: 'endgif-' + _vm.endGIF.desc,
    attrs: {
      "src": _vm.endGIF.img
    }
  })]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8a742f0c", module.exports)
  }
}

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "result"
  }, [_c('div', {
    staticClass: "bg"
  }, [_c('result-text'), _c('score', {
    attrs: {
      "score": _vm.score
    }
  }), _c('display', {
    attrs: {
      "idol": _vm.star,
      "score": _vm.score
    }
  }), _c('div', {
    staticClass: "clickme",
    on: {
      "click": _vm.tryAgain
    }
  }), _c('bottom'), _c('a', {
    staticClass: "repo",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.onClickPrize($event)
      }
    }
  }), _c('div', {
    staticClass: "share",
    class: {
      'share-1': _vm.score <= 70
    },
    on: {
      "click": function($event) {
        _vm.showPopup = true
      }
    }
  }), _c('div', {
    on: {
      "click": function($event) {
        _vm.showPopup = false
      }
    }
  }, [(_vm.showPopup) ? _c('popup') : _vm._e()], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-be8c8f82", module.exports)
  }
}

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-main",
    attrs: {
      "id": "main"
    }
  }, [_c(_vm.steps[_vm.currentStep].component, {
    tag: "div"
  }), _c('music')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cf1a7580", module.exports)
  }
}

/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "heart",
    class: {
      heartbeat: _vm.heartbeat
    }
  }, _vm._l((11), function(i) {
    return _c('div', {
      key: i,
      ref: 'score-' + (i - 1) * 10,
      refInFor: true,
      staticClass: "score",
      class: 'score-' + (i - 1) * 10
    })
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d32fbe94", module.exports)
  }
}

/***/ }),

/***/ 1047:
/***/ (function(module, exports) {

module.exports = {"resultTxt":"//beauty.nosdn.127.net/beauty/img/e98b2d75-3096-4d88-bc5d-eba754a9b256.png","bg":"//beauty.nosdn.127.net/beauty/img/486e1946-770f-4249-8d36-1b63db596f4d.jpg","tempt":"//beauty.nosdn.127.net/beauty/img/994a4480-6353-46f8-b93a-016ca91fb44d.gif","score1":"//beauty.nosdn.127.net/beauty/img/8ee7e406-b0ad-4890-8a2f-af996204d62f.png","score2":"//beauty.nosdn.127.net/beauty/img/e712f79f-e7d0-4bde-a864-13e3d71e8712.png","dogPic":"//beauty.nosdn.127.net/beauty/img/f2ba14a8-7d6a-4ed7-9e35-9fa74333ec9b.gif","result1":"//beauty.nosdn.127.net/beauty/img/27d7bc7d-4a8d-4685-a5e6-a7feaf018525.gif","result2":"//beauty.nosdn.127.net/beauty/img/8951abed-51ab-4eb5-8d88-8ae8fba82441.png","result3":"//beauty.nosdn.127.net/beauty/img/00c16cc0-3b9c-4b69-b7a8-ac0a963bc375.gif","bottom":"//beauty.nosdn.127.net/beauty/img/5281ee9c-3ca9-447d-83d1-15745ef1bba4.png"}

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(817)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(628),
  /* template */
  __webpack_require__(1036),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-cf1a7580",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cf1a7580", Component.options)
  } else {
    hotAPI.reload("data-v-cf1a7580", Component.options)
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

/***/ 564:
/***/ (function(module, exports) {

module.exports = {"wuyifan":{"background":"https://beauty.nosdn.127.net/beauty/img/d11eb66a-3220-42ca-b83a-a2e8b1aa94f4.jpg","name":"吴亦FUN","shuffle":true,"chats":[{"ask":"好久没见你了，我的小乖乖，明天来《中国有hi哈》现场探班嘛~","answers":[{"content":"谁？我？","score":0},{"content":"人家也超想你的呢~！明天打扮地漂漂亮亮去见你嘻嘻\n（づ￣3￣）づ╭❤～","score":10},{"content":"把Pg one介绍给我，不然我就脱衣服了","score":-10}]},{"ask":"那么请问，你有自由（free）型（style）格吗？","answers":[{"content":"化妆不是虚伪，抱紧美学大腿，注意眉毛眼睛鼻子和嘴，让你立刻开始变美","score":0},{"content":"老子化彩妆，你吃彩妆底盘","score":10},{"content":"YOYO ,What's up,美学教你Make up","score":-10}]},{"ask":"我认为你完全可以取代我制作人的位置","answers":[{"content":"哪里有天才，我不过是把别人洗袜子的功夫都用在freestyle上了","score":0},{"content":"你最厉害了啦，伦家怎么可以跟你比~","score":10},{"content":"机智如你！我同意你的看法！","score":-10}]},{"ask":"让哥哥给你秀一段“这个面，它又长又宽，就像这个碗，他又大又圆”宝贝你想要跟我深入学习吗？","image":"https://beauty.nosdn.127.net/beauty/img/00a0a94e-aa68-4bb9-a9b6-6b22d47beb73.png","answers":[{"content":"不要勾引我，我很容易就爱上你的","score":0},{"content":"天晴了，雨停了，你又觉得你行了","score":10},{"content":"绝交，丑东西","score":-10}]},{"ask":"前段时间你朋友圈的视频是怎么回事？难道你对前男友彭于宴还有眷恋？","answers":[{"content":"干嘛你要关注他啦！","score":0},{"content":"没有啦~ FunFun不要误会嘛，人家心里只有你一个啦~ \nლ(°◕‵ƹ′◕ლ)","score":10},{"content":"世间安得双全法，我要一手搂着俩","score":-10}]},{"ask":"今晚想跟你一起吃饭，我的小baby","answers":[{"content":"Emmmmmmmmmmmm…………","score":0},{"content":"那…人家要带身份证一起吗~\n⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄","score":10},{"content":"人家今天没洗头，不想出门嘛 \n(ノω<。)ノ))☆.。","score":-10}]},{"ask":"你这么可爱，九月的演唱会上我要向你表白","answers":[{"content":"开心得像个200斤的胖子~^(*￣(oo)￣)^","score":0},{"content":"再任性我就嫁给你！","score":10},{"content":"我内心毫无波澜甚至有点想吃麻辣九宫格火锅","score":-10}]},{"ask":"就想问你，爱我吗？","answers":[{"content":"天底下没有我恨的人，天底下没有我不爱的人，天底下没有我不能原谅的人","image":"https://beauty.nosdn.127.net/beauty/img/3ef22be4-9977-41c9-ae68-4a5a8ae0a420.png","score":0},{"content":"特别的爱，给特别的你","image":"https://beauty.nosdn.127.net/beauty/img/9c6bc02a-2752-4c4f-8af5-2c0f349a27fd.jpg","score":10},{"content":"爱过","score":-10}]}]},"sicong":{"background":"https://beauty.nosdn.127.net/beauty/img/cd4e34df-7513-46ba-98aa-f78f1bc52246.jpg","name":"撕葱","shuffle":true,"chats":[{"ask":"有妹子点我！是不是晚上想去看电影？","image":{"src":"https://beauty.nosdn.127.net/beauty/img/b3fb91db-fcc0-4525-a2ab-25db9269614b.jpg","type":"block"},"answers":[{"content":"啊，不好意思，晚上有安排了呢。","score":0},{"content":"有约了，不去！","score":10},{"content":"好啊好啊，虽然要加班，但是你约我，哪怕午夜场也可以呢！","score":-10}]},{"ask":"那就等你完事儿了看午夜场，到时候我让直升机去接你！","image":{"src":"https://beauty.nosdn.127.net/beauty/img/7651acb3-e818-4f03-bde8-ab0218d222cd.jpg","type":"block"},"answers":[{"content":"直升机啊，那也太高调了吧，被八卦杂志拍到怎么办呢。","score":0},{"content":"可拉倒吧，隔壁万达就500米，开什么直升机，我骑个自行车自己去！","score":10},{"content":"星星眼！直升机诶，我还从来没坐过！你真是太贴心了。可是我晕机怎么办？","score":-10}]},{"ask":"好吧，那你自己过去，我让王可可坐直升机过去和我们汇合。","answers":[{"content":"王可可？是谁啊？漂亮吗？","score":0},{"content":"王可可是谁？这不有她陪你看了，还约我去干什么？","score":10},{"content":"王可可？是你另外的……女朋友吗？人家想要和你二人世界嘛！","score":-10}]},{"ask":"王可可是本少爷的爱犬！传说中的狗生赢家！这你也吃醋啊！","answers":[{"content":"原来是这样，不是人我就放心了。但是狗可以进电影院吗？","score":0},{"content":"啧啧，看个电影还带狗，会被赶出来吧！","score":10},{"content":"哇，原来是小可可呀，一定很可爱吧，但是我都从来没见过有人带狗看电影诶。","score":-10}]},{"ask":"（翻白眼）电影院就是我家开的！今天我已经不让卖票了，整个电影院只有我们。","answers":[{"content":"这么大的电影院只有我们，感觉超浪漫的！","score":0},{"content":"这回考虑的倒是挺周到的。","score":10},{"content":"好浪漫呀！但这是为了可可还是为了我呢，对不起，我是不是又想多了。","score":-10}]},{"ask":"刚才的电影感觉怎么样？","answers":[{"content":"男猪脚好帅哦，和你很像呢！","score":0},{"content":"虽然你没有男猪脚帅，不过胜在你爸爸比他爸爸有钱！","score":10},{"content":"你的光芒盖过了男猪脚，我全程都光顾着看你了，都忘记剧情了呢。","score":-10}]},{"ask":"累了吧，要不一会去我家坐坐？","image":{"src":"https://beauty.nosdn.127.net/beauty/img/74a95155-4b81-4d0d-bafb-878cb892a246.jpg","type":"block"},"answers":[{"content":"好呀，还真想去参观一下你的豪宅呢，一定非常有品位吧。","score":0},{"content":"是你家酒店还是你家？","score":10},{"content":"啊，你家……有点害怕呢！怎么又有点小期待呢，哎呀不小心说出了真心话。","score":-10}]},{"ask":"嘿嘿嘿，跟我去了就知道，保证你会很开心的！","answers":[{"content":"嘿嘿嘿，林根新也在你家吗？","score":0},{"content":"嘿嘿嘿，可以带我吃鸡吗？","score":10},{"content":"嘿嘿嘿，可以带我认识你爹地吗？","score":-10}]}]},"pengyuyan":{"background":"https://beauty.nosdn.127.net/beauty/img/1d97b602-9d14-47b3-b5d6-9339069f2144.jpg","name":"彭于宴","chats":[{"ask":"昨晚……睡得还好吧？今天一早接到工作电话，走的时候没吵醒你吧？","answers":[{"content":"啊……别说了><，睡不睡得好都没关系啦","score":0},{"content":"没有没有，睡得像只五百斤的猪，嘻嘻","score":-10},{"content":"睡很好噢！虽然醒来发现你走了有点失落","image":"https://beauty.nosdn.127.net/beauty/img/58303e1e-7f6d-428f-b5da-c504cb23bca2.jpg","score":10}]},{"ask":"我有点在意，半夜凌晨三点钟听到你在打电话，是跟谁？","answers":[{"content":"我爸啊","score":0},{"content":"是朱碧池啦，半夜打来让我还钱","image":"https://beauty.nosdn.127.net/beauty/img/88133c4e-0417-4199-a37a-872c87e48ca5.jpg","score":-10},{"content":"你知道的，我闺蜜小花……","score":10}]},{"ask":"所以这么晚，到底是发生了什么事？","answers":[{"content":"关你屁事啦","image":"https://beauty.nosdn.127.net/beauty/img/b48ac950-1ee4-4050-b806-5712fd58223d.jpg","score":-10},{"content":"没什么啦，我自己能解决的","score":0},{"content":"你工作那么辛苦，我不想让你操心的……就，我大概自己能搞定吧~","score":10}]},{"ask":"你到底把我当成你的什么","image":{"src":"https://beauty.nosdn.127.net/beauty/img/4c255f6c-6c80-4c9b-a6cd-c371257f4afd.jpg","type":"block"},"answers":[{"content":"你是我的小狼狗呀","image":"https://beauty.nosdn.127.net/beauty/img/e87704ac-7dae-4ca1-aee3-054a77f35025.jpg","score":0},{"content":"我的……健身教练呀（开玩笑啦！","score":0},{"content":"就是……可以依靠也可以给我空间的人","score":10}]},{"ask":"我不高兴！我不高兴！","image":{"src":"https://beauty.nosdn.127.net/beauty/img/cd202a9c-46e0-4f1f-8c41-80a33c3693d8.gif","type":"block"},"answers":[{"content":"真是的，怎么像个小男生一样的啦！","score":0},{"content":"小狼狗生气的样子太可爱啦！","score":0},{"content":"好啦，那以后有什么麻烦事我都会骚扰你噢","image":"https://beauty.nosdn.127.net/beauty/img/76128fb9-2b24-4e60-897d-bbe69b1ab6e2.gif","score":10}]},{"ask":"所以……你是我的女朋友没错吧？","answers":[{"content":"这不是理所当然的吗？！","score":10},{"content":"喂……现在才问吗？","score":-10},{"content":"难道你还有其他的女朋友？","image":"https://beauty.nosdn.127.net/beauty/img/d72ca49e-9422-49c5-b353-4d009ea581df.jpg","score":0}]},{"ask":"那经常约你吃饭的撕葱，他是谁啦","image":"https://beauty.nosdn.127.net/beauty/img/b9387202-7682-42ea-9d99-762d48b3a94b.jpg","answers":[{"content":"你明明知道撕葱只是经常在工作上帮助我的人而已！","score":10},{"content":"就算拒绝了，他还是会继续想方设法攻略我的","score":-10},{"content":"误会了！他只是合作伙伴而已","score":0}]},{"ask":"好啦，那你以后跟我睡觉不要再接电话了好吗","image":{"src":"https://beauty.nosdn.127.net/beauty/img/1aabde31-1391-435e-87b7-ed16fb73e38e.gif","type":"block"},"answers":[{"content":"真的不是撕葱打来的啦！","score":-10},{"content":"那要是我家着火了也不能接吗","image":"https://beauty.nosdn.127.net/beauty/img/7678c477-b57b-47d5-8612-c6b3dbbf5907.gif","score":0},{"content":"知道啦~等你回来再跟你解释今天凌晨的电话噢","image":"https://beauty.nosdn.127.net/beauty/img/4604a6ac-fcbf-4790-bd45-497d1d623547.jpg","score":10}]}]},"aidajin":{"background":"https://beauty.nosdn.127.net/beauty/img/03fe1d21-f077-4cfc-b98a-f81447072e98.jpg","name":"哎大紧","chats":[{"ask":"女同志，你喜欢哪张？","image":{"src":"https://beauty.nosdn.127.net/beauty/img/ed10cb2d-dd92-458a-a7f8-9af663da3777.jpg","type":"block"},"answers":[{"content":"1","score":10},{"content":"2","score":10},{"content":"3","score":10}]},{"ask":"看来你对人体摄影蛮有研究，平时都看什么书？","answers":[{"content":"如何征服英俊少男","score":10},{"content":"迎男而上","score":0},{"content":"母猪的配种及产后护理","score":-10}]},{"ask":"在下正好也看过这本，要不今晚我们约着研讨一下？","answers":[{"content":"不行，今晚我空姐闺蜜约我吃晓松老师给她的十三香小龙虾","score":10},{"content":"不行，明天要去网易美学面试，今晚要准备一下","score":0},{"content":"不行，今晚要去学习人像PS高阶课程","score":-10}]},{"ask":"想起来今晚我要飞回美国削腮帮子，那明天再约","answers":[{"content":"等等，老师还是先去隆个鼻吧！","score":0},{"content":"等等，老师还是先去拉个皮吧！","score":0},{"content":"我有个不成熟的小建议，老师求你了去换个头吧！","score":10}]},{"ask":"就喜欢你这样耿直的女同志！我送你一个抱枕吧，选一个~","image":{"src":"https://beauty.nosdn.127.net/beauty/img/8347c976-d737-47f2-80d0-9c81f6546ed9.jpg","type":"block","height":120},"answers":[{"content":"1","score":-60},{"content":"2","score":10},{"content":"3","score":-60}]},{"ask":"好的，那你明天来我办公室拿一下","answers":[{"content":"哇，那我会撞见马爸爸吗？！","score":10},{"content":"老师的办公室有多大呀，装得下一个游泳池吗？","score":0},{"content":"诶，保安也有办公室？","score":-10}]},{"ask":"别想这么多了，今晚我会让我助理把我的自拍贴满墙","answers":[{"content":"好我先预约一下眼科","score":0},{"content":"老师……我有密集恐惧症","score":-10},{"content":"您脸那么大，一张自拍就够贴严实了吧","score":10}]},{"ask":"好了，最后一个问题，矮大紧你喜欢哪个？","answers":[{"content":"矮","score":0},{"content":"大","score":10},{"content":"紧","score":-10}]}]},"zhubichi":{"background":"https://beauty.nosdn.127.net/beauty/img/3c630718-d4f2-43a3-ac81-9e0e5d5b5254.jpg","name":"朱碧池","chats":[{"ask":"等太久，终于有人点我了噢！","answers":[{"content":"恩呐，咋地！我随手点的。","score":0},{"content":"谁叫你放个女人的照骗。","score":-10},{"content":"哪里啦…你明明很受欢迎。","score":10}]},{"ask":"爱转角遇见了谁，幸福由我来陪。","image":"https://beauty.nosdn.127.net/beauty/img/97cf2644-6ade-4e12-ab1a-f16af823b801.gif","answers":[{"content":"碧池，你醒醒。","score":-10},{"content":"也许陌生到了解，让我来当你的谁。","score":10},{"content":"你怎么会我男神的歌。该不会是某人假扮的吧？","score":-10}]},{"ask":"哟！最近怎末样？就忽然很怀念以前的事……","answers":[{"content":"？？？你冰果啊。边个识得你啊。","score":-10},{"content":"真的好怀念啊！当年我们一起躲被窝偷擦口红的日子。","score":10},{"content":"以前陪你吃铁板章鱼的日子么？","image":"https://beauty.nosdn.127.net/beauty/img/2e2d705d-ed19-4f41-b5ac-e218f061d4a6.png","score":-10}]},{"ask":"话说回来，你有没有觉得我比林志玲美？","answers":[{"content":"我觉得铁板上的你最美","score":-10},{"content":"你是真的很美——味","score":0},{"content":"这题我觉得可以问问罗志祥","score":10}]},{"ask":"那又怎样啦！我朱碧池还是大家心目中的梦幻女神啊。","image":{"src":"https://beauty.nosdn.127.net/beauty/img/04cda7b2-a7e9-4e73-86c4-f2f0957169b6.png","type":"block"},"answers":[{"content":"是啦。","image":"https://beauty.nosdn.127.net/beauty/img/21e774c0-fad8-449a-9211-231b8f0a1895.gif","score":-10},{"content":"这个搭配真的很时髦！真心爱我的女神！","score":10},{"content":"接不下去。导演让我死一会儿……","score":10}]},{"ask":"我也酱觉得厚。特别是这个腮红。我从泰国买的，风靡东南亚贵妇圈。","answers":[{"content":"曾的！看起来珠光宝气，特别有贵妇气质。","score":0},{"content":"这个效果20块的湿又野就可以办到，相信我！","image":"https://beauty.nosdn.127.net/beauty/img/2c3c3e91-c864-4ee5-800d-93cba454b684.png","score":10},{"content":"女神，我们之间还可以聊点别的么？","score":-10}]},{"ask":"今晚有我的模仿秀，你要一起吗？","answers":[{"content":"你本人不就是一个模仿么。","image":"https://beauty.nosdn.127.net/beauty/img/eb653857-e71f-479f-87b3-ec76fa039788.jpg","score":-10},{"content":"当然好啊！好开心收到邀请。我要准备什么吗？","score":10},{"content":"模仿秀？那会很晚么？我明天还有事……","score":-10}]},{"ask":"不han你聊惹，我要去教英文咯。","answers":[{"content":"臭不要脸！","image":"https://beauty.nosdn.127.net/beauty/img/e9ec45a9-04ee-409c-9f83-006370bb9a02.jpg","score":10},{"content":"你干嘛？！","image":"https://beauty.nosdn.127.net/beauty/img/0bf2b5f0-627b-4bdc-8fbe-754436f32e27.jpg","score":-10},{"content":"AB煕娣EF鸡……","score":10}]}]}}

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = __webpack_require__(32);

var _ChatTip = __webpack_require__(867);

var _ChatTip2 = _interopRequireDefault(_ChatTip);

var _ChatQuestion = __webpack_require__(866);

var _ChatQuestion2 = _interopRequireDefault(_ChatQuestion);

var _ChatAnswer = __webpack_require__(865);

var _ChatAnswer2 = _interopRequireDefault(_ChatAnswer);

var _Heart = __webpack_require__(868);

var _Heart2 = _interopRequireDefault(_Heart);

var _helper = __webpack_require__(454);

var _helper2 = _interopRequireDefault(_helper);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

var inBrowser = true;
var Util = inBrowser ? __webpack_require__(69) : null;
var chatData = __webpack_require__(564);

var resultImgs = __webpack_require__(1047);

var RESULT_LIST = [{
  "desc": "0",
  "img": "//beauty.nosdn.127.net/beauty/img/b6fba680-b328-4aa8-9a65-69edfc0bf6ef.gif",
  "time": 1200
}, {
  "desc": "30",
  "img": "//beauty.nosdn.127.net/beauty/img/5d5a44d2-dd59-4114-a1af-31a9d753fe39.gif",
  "time": 1000
}, {
  "desc": "80",
  "img": "//beauty.nosdn.127.net/beauty/img/f44f8be5-3850-4f10-95a1-0a913ef6aef9.gif",
  "time": 1400
}];

exports.default = {
  data: function data() {
    return {
      timeline: [],
      nextIndex: 0,
      currentQuestion: null,
      replyBoxVisible: false,
      endGIF: null
    };
  },
  watch: {
    replyBoxVisible: function replyBoxVisible(visible) {
      var _this = this;

      if (visible) {
        this.$nextTick(function () {
          var list = _this.$refs.list;
          list.scrollTop = list.scrollHeight;
        });
      }
    },
    timeline: function timeline() {
      var _this2 = this;

      this.$nextTick(function () {
        var list = _this2.$refs.list;
        // list.scrollTop = list.scrollHeight
        _helper2.default.animateScroll(list, 1000);
      });
    }
  },
  mounted: function mounted() {
    Util.refreshPage({
      pageTitle: this.starName
    });
    setTimeout(this.pushTip.bind(this, "成功进入会话..."), 500);
    setTimeout(this.pushTip.bind(this, "请注意右边脆弱的小心心噢！"), 1000);
    setTimeout(this.pushNextQuestion, 1500);
    this.preloadImgs();
    this.$eventTrace({
      category: "ActivityQixi",
      action: "chatMounted",
      eventLabel: this.star
    });
  },

  computed: _extends({}, (0, _vuex.mapGetters)('qixi', ['user']), (0, _vuex.mapState)('qixi', ['star', 'score']), {
    "background": function background() {
      return chatData[this.star].background;
    },
    "chats": function chats() {
      return chatData[this.star].chats;
    },
    "starName": function starName() {
      return chatData[this.star].name;
    },
    "shuffle": function shuffle() {
      return chatData[this.star].shuffle || false;
    },
    "inputSuggest": function inputSuggest() {
      return this.replyBoxVisible ? "选择一条回复你的宝宝" : "在这里选择回复内容哦";
    }
  }),
  methods: _extends({
    //  推一个对方消息
    pushNextQuestion: function pushNextQuestion() {
      Util.refreshPage({
        pageTitle: this.starName
      });
      this.currentQuestion = this.chats[this.nextIndex];
      this.currentQuestion.answers = _lodash2.default.map(this.currentQuestion.answers, function (item) {
        item.hover = false;
        if (item.image) {
          item.nosImage = _jsUtil2.default.convertToNosUrl(item.image, '0x74');
        }
        return item;
      });
      if (this.shuffle) {
        this.currentQuestion.answers = _lodash2.default.shuffle(this.currentQuestion.answers);
      }
      this.timeline.push({
        type: "question",
        message: this.currentQuestion.ask,
        image: this.currentQuestion.image
      });
      this.nextIndex++;
    },
    pushTip: function pushTip(message) {
      this.timeline.push({
        type: "tip",
        message: message
      });
    },
    showReplyBox: function showReplyBox() {
      if (!this.currentQuestion) {
        return false;
      }
      this.replyBoxVisible = true;
    },
    messageItemTouchChanged: function messageItemTouchChanged(index, hover) {
      var answer = this.currentQuestion.answers[index];
      this.$set(this.currentQuestion.answers, index, Object.assign({}, answer, { hover: hover }));
    },

    // 从列表里选择一个答案
    chooseReply: function chooseReply(index) {
      var answer = this.currentQuestion.answers[index];
      // answer.hover = true
      this.currentQuestion = null; // 可选项置空
      this.replyBoxVisible = false; // 回复框置空
      this.setScore(this.score + answer.score);
      // this.score += answer.score
      this.timeline.push({
        type: "answer",
        message: answer.content,
        image: answer.image
      });
      // console.log(this.score);
      // 分数为 0 或没有下一会话，结束游戏
      if (this.score <= 0 || !this.chats[this.nextIndex]) {
        return this.showResult();
      }
      Util.refreshPage({
        pageTitle: "对方正在输入..."
      });
      setTimeout(this.pushNextQuestion, 3000);
    },

    // 展示结果
    showResult: function showResult() {
      var _this3 = this;

      var score = this.score;
      var timeline = {
        "type": "question",
        "message": ""
      };
      var animation = {};
      if (score <= 20) {
        timeline.message = "对方开启好友验证，关系破裂…";
        timeline.type = "tip";
        animation = RESULT_LIST[0];
      } else if (score <= 70) {
        timeline.message = "手机只剩下98%的电，让我们下次再撩";
        animation = RESULT_LIST[1];
      } else {
        timeline.message = "想做你的专属男友";
        animation = RESULT_LIST[2];
      }
      setTimeout(function () {
        _this3.timeline.push(timeline);
      }, 1000);
      setTimeout(function () {
        _this3.endGIF = animation;
      }, 3000);
      setTimeout(this.nextStep, animation.time + 3200);
    },

    // 预加载下一步需要的图片
    preloadImgs: function preloadImgs() {
      var imgs = _lodash2.default.concat(_lodash2.default.map(RESULT_LIST, 'img'), _lodash2.default.map(resultImgs, function (item) {
        return item;
      }));
      setTimeout(function () {
        _helper2.default.preload(imgs);
      });
    }
  }, (0, _vuex.mapMutations)('qixi', ['nextStep', "setScore"])),
  components: {
    heart: _Heart2.default,
    tip: _ChatTip2.default,
    question: _ChatQuestion2.default,
    answer: _ChatAnswer2.default
  }
};

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _store = __webpack_require__(99);

var _store2 = _interopRequireDefault(_store);

var _Bounce = __webpack_require__(870);

var _Bounce2 = _interopRequireDefault(_Bounce);

var _Alert = __webpack_require__(869);

var _Alert2 = _interopRequireDefault(_Alert);

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

var animationInterval = 1000;
exports.default = {
  data: function data() {
    return {
      idols: ['wuyifan', 'zhubichi', 'sicong', 'aidajin', 'pengyuyan'],
      timer: []
    };
  },

  computed: _extends({}, (0, _vuex.mapState)({
    inWechat: function inWechat(state) {
      return state.inWechat;
    }
  }), (0, _vuex.mapState)('qixi', {
    idol: function idol(state) {
      return state.star;
    },
    played: function played(state) {
      return state.played;
    },
    defaultShareInfo: function defaultShareInfo(state) {
      return state.defaultShareInfo;
    },
    defaultTitle: function defaultTitle(state) {
      return state.defaultTitle;
    }
  })),
  mounted: function mounted() {
    // 只有第一次打开才弹出提示
    if (!this.played) {
      this.$refs.alert.appear();
    } else {
      this.bounce();
    }
    Util.refreshPage({
      pageTitle: this.inWechat ? '附近' : this.defaultTitle
    });
    this.$nextTick(this.configWx);
    this.$eventTrace({
      category: "ActivityQixi",
      action: "nearbyMounted",
      eventLabel: this.played.toString()
    });
  },

  methods: _extends({}, (0, _vuex.mapMutations)('qixi', ['nextStep', 'setStar']), {
    // 配置微信sdk
    configWx: function configWx() {
      var defaultShareInfo = this.defaultShareInfo;

      var params = _extends({
        eventLabel: defaultShareInfo.shareTitle
      }, defaultShareInfo);
      Util.configWxShare(_extends({ shareInfo: this.defaultShareInfo }, _helper2.default.statistics(params)));
    },

    // 点击隐藏提示遮罩
    hideAlert: function hideAlert() {
      this.$refs.alert.disappear();
      this.bounce();
    },
    bounce: function bounce() {
      this.bounceAll();
      var duration = animationInterval * this.idols.length;
      this.timer[5] = setInterval(this.bounceAll, duration);
    },

    // 弹跳一轮
    bounceAll: function bounceAll() {
      var _this = this;

      var bounces = this.$refs.bounces;

      bounces.forEach(function (bounce, index) {
        _this.timer[index] = _this.bounceOne(bounces[index], animationInterval * (index + 1));
      });
    },

    // 弹跳一次
    bounceOne: function bounceOne(target, delay) {
      return setTimeout(target.begin, delay || 0);
    },

    // 选择一位idol
    select: function select(index) {
      var _this2 = this;

      if (this.idol) return;
      this.timer.forEach(function (id) {
        clearTimeout(id);
      });
      this.setStar(this.idols[index]);
      this.$refs.bounces[index].flip();
      setTimeout(function () {
        _this2.nextStep();
      }, animationInterval);
    }
  }),
  beforeDestroy: function beforeDestroy() {
    this.timer.forEach(function (id) {
      clearTimeout(id);
    });
  },

  components: {
    bounce: _Bounce2.default,
    alert: _Alert2.default
  },
  name: "nearby",
  serverCacheKey: function serverCacheKey() {
    return _store2.default.state.qixi.star || true;
  }
};

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = __webpack_require__(32);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _Score = __webpack_require__(546);

var _Score2 = _interopRequireDefault(_Score);

var _Display = __webpack_require__(544);

var _Display2 = _interopRequireDefault(_Display);

var _Popup = __webpack_require__(871);

var _Popup2 = _interopRequireDefault(_Popup);

var _ResultText = __webpack_require__(872);

var _ResultText2 = _interopRequireDefault(_ResultText);

var _Bottom = __webpack_require__(543);

var _Bottom2 = _interopRequireDefault(_Bottom);

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
//

var inBrowser = true;
var Util = inBrowser ? __webpack_require__(69) : null;
exports.default = {
  components: {
    score: _Score2.default,
    display: _Display2.default,
    popup: _Popup2.default,
    resultText: _ResultText2.default,
    bottom: _Bottom2.default
  },
  data: function data() {
    return {
      showPopup: false, // 是否展示引导分享浮层
      activityLink: '/repo/prx6ca686609d7dd091370e9d11d893cb77' // 戳我有奖链接
    };
  },

  watch: {
    "showPopup": "onShowPopup"
  },
  computed: _extends({}, (0, _vuex.mapState)({
    inWechat: function inWechat(state) {
      return state.inWechat;
    }
  }), (0, _vuex.mapState)('qixi', {
    score: function score(state) {
      return state.score;
    },
    star: function star(state) {
      return state.star;
    },
    defaultShareInfo: function defaultShareInfo(state) {
      return state.defaultShareInfo;
    },
    defaultTitle: function defaultTitle(state) {
      return state.defaultTitle;
    }
  }), {
    // 分享标题
    shareTitle: function shareTitle() {
      var score = this.score;
      if (score <= 20) {
        return '扎心了！难道是我情商太低了？';
      } else if (score >= 80) {
        return '内含狗粮，本宝宝要在七夕秀恩爱了';
      }
      return '今天不撒狗粮，就看谁的结果比我还扎心！';
    }
  }),
  mounted: function mounted() {
    var _this = this;

    Util.refreshPage({
      pageTitle: this.inWechat ? '你的得分' : this.defaultTitle
    });
    // 保存得分
    (0, _fetch2.default)('/activity/qixi/save', {
      method: 'POST',
      body: {
        score: this.score,
        star: this.star
      }
    }).then(function (json) {
      var recordId = json.result;
      recordId && _this.configWx(recordId);
    }, function (json) {});
    // 游戏完成计数
    this.setPlayed();
    this.$eventTrace({
      category: "ActivityQixi",
      action: "resultMounted",
      eventValue: this.score,
      eventLabel: this.star
    });
  },

  methods: _extends({}, (0, _vuex.mapMutations)('qixi', ['reset', 'setPlayed']), {
    // 配置微信sdk
    configWx: function configWx(recordId) {
      var shareInfo = Object.assign({}, this.defaultShareInfo, {
        shareTitle: this.shareTitle,
        shareUrl: 'https://m.mei.163.com/activity/qixi/' + recordId
      });
      var params = _extends({
        eventLabel: this.shareTitle,
        eventValue: this.score
      }, shareInfo);
      Util.configWxShare(_extends({ shareInfo: shareInfo }, _helper2.default.statistics(params)));
    },

    // 再撩一次
    tryAgain: function tryAgain() {
      this.reset();
    },
    onClickPrize: function onClickPrize() {
      this.$eventTrace({
        category: "ActivityQixi",
        action: "click",
        eventLabel: "戳我有奖"
      });
      this.$router.push(this.activityLink);
    },
    onShowPopup: function onShowPopup(show) {
      if (show) {
        this.$eventTrace({
          category: "ActivityQixi",
          action: "clickShare"
        });
      }
    }
  })
};

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = __webpack_require__(32);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ["message", "image"],
  computed: _extends({
    displayMessage: function displayMessage() {
      return this.message.replace('\n', '<br />');
    },
    displayImage: function displayImage() {
      var image = this.image;
      if (typeof image === "string" && image) {
        return _jsUtil2.default.convertToNosUrl(image, '0x74');
      }
    }
  }, (0, _vuex.mapGetters)('qixi', ['user']))
};

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = __webpack_require__(32);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chatData = __webpack_require__(564);

exports.default = {
  props: ["message", "image"],
  computed: _extends({
    starName: function starName() {
      return chatData[this.star].name;
    },
    displayBlockImage: function displayBlockImage() {
      var image = this.image;
      if ((typeof image === 'undefined' ? 'undefined' : _typeof(image)) === "object" && image.type === "block") {
        return _jsUtil2.default.convertToNosUrl(image.src, '0x' + (image.height || 120));
      }
    },
    displayImage: function displayImage() {
      var image = this.image;
      if (typeof image === "string" && image) {
        return _jsUtil2.default.convertToNosUrl(image, '0x74');
      }
    }
  }, (0, _vuex.mapState)("qixi", ['star']))

};

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ["message"]
};

/***/ }),

/***/ 622:
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

var duration = 500;
exports.default = {
  data: function data() {
    return {
      heartbeat: false
    };
  },

  computed: _extends({}, (0, _vuex.mapState)('qixi', ['score'])),
  watch: {
    "score": "onScoreChanged"
  },
  methods: {
    onScoreChanged: function onScoreChanged(score, oldScore) {
      var _this = this;

      if (score >= 0 && score <= 100) {
        this.heartbeat = true;
        setTimeout(function () {
          _this.heartbeat = false;
        }, duration);
        this.$refs['score-' + oldScore][0].style.opacity = 0;
        this.$refs['score-' + score][0].style.opacity = 1;
      }
    }
  }
};

/***/ }),

/***/ 623:
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
  data: function data() {
    return {
      show: false
    };
  },

  methods: {
    appear: function appear() {
      this.show = true;
    },
    disappear: function disappear() {
      this.show = false;
    }
  }
};

/***/ }),

/***/ 624:
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

var duration = 800; // 多增加300ms间隔，解决安卓动画提前结束问题
exports.default = {
  data: function data() {
    return {
      img: "https://beauty.nosdn.127.net/beauty/img/1a9d8b93-7604-43e5-b7be-fe37c502be6b.jpg",
      ready: false,
      flipping: false
    };
  },

  methods: {
    begin: function begin() {
      var _this = this;

      this.ready = true;
      setTimeout(function () {
        _this.ready = false;
      }, duration);
    },
    flip: function flip() {
      this.flipping = true;
    }
  }
};

/***/ }),

/***/ 625:
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

exports.default = {};

/***/ }),

/***/ 626:
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

var _vuex = __webpack_require__(32);

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)('qixi', {
    score: function score(state) {
      return state.score;
    },
    star: function star(state) {
      return state.star;
    }
  }), {
    result: function result() {
      var score = this.score;
      if (score <= 20) {
        return 3;
      } else if (score >= 80) {
        return 1;
      }
      return 2;
    },

    // 233333的位数
    numberDigit: function numberDigit() {
      var score = this.score / 10;
      switch (score) {
        case 7:
        case 6:
          return 4;
        case 5:
        case 4:
          return 5;
        case 3:
          return 6;
        default:
      }
      return 0;
    },
    number233: function number233() {
      var number = '2';
      for (var i = 0; i < this.numberDigit - 1; i++) {
        number += '3';
      }
      return number;
    }
  })
};

/***/ }),

/***/ 628:
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

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _Nearby = __webpack_require__(863);

var _Nearby2 = _interopRequireDefault(_Nearby);

var _Chat = __webpack_require__(862);

var _Chat2 = _interopRequireDefault(_Chat);

var _Result = __webpack_require__(864);

var _Result2 = _interopRequireDefault(_Result);

var _Music = __webpack_require__(542);

var _Music2 = _interopRequireDefault(_Music);

var _vuex = __webpack_require__(32);

var _helper = __webpack_require__(454);

var _helper2 = _interopRequireDefault(_helper);

var _store = __webpack_require__(99);

var _store2 = _interopRequireDefault(_store);

var _qixi = __webpack_require__(501);

var _qixi2 = _interopRequireDefault(_qixi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chatData = __webpack_require__(564);

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)('qixi', {
    currentStep: function currentStep(state) {
      return state.currentStep || 0;
    }
  }), (0, _vuex.mapGetters)('qixi', ['user'])),
  watch: {
    currentStep: "onStepChanged"
  },
  data: function data() {
    return {
      steps: [{
        component: 'nearby'
      }, {
        component: 'chat'
      }, {
        component: 'result'
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    // 动态注册vuex module
    _store2.default.registerModule('qixi', _qixi2.default);
  },
  beforeDestroy: function beforeDestroy() {
    _store2.default.unregisterModule('qixi');
  },
  mounted: function mounted() {
    this.preloadImgs();
    this.$eventTrace({
      category: "ActivityQixi",
      action: "mounted",
      eventLabel: "Index"
    });
  },

  methods: {
    // 预加载下一步需要的图片
    preloadImgs: function preloadImgs() {
      var imgs = _lodash2.default.map(chatData, function (item) {
        return item.background;
      });
      var alertImg = '//beauty.nosdn.127.net/beauty/img/58621a5e-f0a2-410a-8b1d-ed1acc9c2c5c.png';
      imgs.unshift(alertImg); // 弹窗
      var user = this.user;

      imgs.push(user && user.headshot); // 用户头像
      var heartPic = '//beauty.nosdn.127.net/beauty/img/541c67d8-c3f7-465e-a639-7a889e6fed5f.png';
      imgs.push(heartPic); // 心跳
      var msgImg = '//beauty.nosdn.127.net/beauty/img/cfda6087-69b2-4fe5-a8b1-0f7081e5a276.png';
      imgs.push(msgImg);
      var marketingDA = 'https://pr.da.netease.com/receiver/?action=ad&camName=1503558026828&target=https%3A%2F%2Fm.mei.163.com%2Ffavicon.ico&sid=383140180';
      imgs.push(marketingDA); // 市场部统计打点
      setTimeout(function () {
        _helper2.default.preload(imgs);
      });
    },
    onStepChanged: function onStepChanged(currentStep) {
      this.$eventTrace({
        category: "ActivityQixi",
        action: "stepChanged",
        eventLabel: this.currentStep.toString()
      });
    }
  },
  components: {
    nearby: _Nearby2.default,
    chat: _Chat2.default,
    result: _Result2.default,
    music: _Music2.default
  }
};

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(794)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(615),
  /* template */
  __webpack_require__(1012),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-8a742f0c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/Chat.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Chat.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8a742f0c", Component.options)
  } else {
    hotAPI.reload("data-v-8a742f0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(761)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(616),
  /* template */
  __webpack_require__(978),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5b7bccbe",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/Nearby.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Nearby.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b7bccbe", Component.options)
  } else {
    hotAPI.reload("data-v-5b7bccbe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(812)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(617),
  /* template */
  __webpack_require__(1031),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-be8c8f82",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/Result.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Result.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-be8c8f82", Component.options)
  } else {
    hotAPI.reload("data-v-be8c8f82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(718)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(619),
  /* template */
  __webpack_require__(935),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-273bbaf6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/chat/ChatAnswer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatAnswer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-273bbaf6", Component.options)
  } else {
    hotAPI.reload("data-v-273bbaf6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(769)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(620),
  /* template */
  __webpack_require__(986),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-601c09c4",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/chat/ChatQuestion.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatQuestion.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-601c09c4", Component.options)
  } else {
    hotAPI.reload("data-v-601c09c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(720)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(621),
  /* template */
  __webpack_require__(937),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-287bfa13",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/chat/ChatTip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatTip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-287bfa13", Component.options)
  } else {
    hotAPI.reload("data-v-287bfa13", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(819)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(622),
  /* template */
  __webpack_require__(1038),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d32fbe94",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/chat/Heart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Heart.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d32fbe94", Component.options)
  } else {
    hotAPI.reload("data-v-d32fbe94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(744)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(623),
  /* template */
  __webpack_require__(961),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-46b65173",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/nearby/Alert.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Alert.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46b65173", Component.options)
  } else {
    hotAPI.reload("data-v-46b65173", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(763)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(624),
  /* template */
  __webpack_require__(980),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5cef1cfe",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/nearby/Bounce.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Bounce.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cef1cfe", Component.options)
  } else {
    hotAPI.reload("data-v-5cef1cfe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(711)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(625),
  /* template */
  __webpack_require__(927),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1108c0e1",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/result/Popup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Popup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1108c0e1", Component.options)
  } else {
    hotAPI.reload("data-v-1108c0e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(785)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(626),
  /* template */
  __webpack_require__(1003),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-738381f6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/activity/qixi/components/result/ResultText.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ResultText.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-738381f6", Component.options)
  } else {
    hotAPI.reload("data-v-738381f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1108c0e1", module.exports)
  }
}

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cnt"
  }, [_c('div', {
    staticClass: "msg"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.displayMessage)
    }
  }), (_vm.displayImage) ? _c('img', {
    staticClass: "img",
    attrs: {
      "src": _vm.displayImage
    }
  }) : _vm._e()]), _c('div', {
    staticClass: "head"
  }, [_c('img', {
    staticClass: "pic",
    attrs: {
      "src": _vm.user.headshot
    }
  }), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.user.name || ''))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-273bbaf6", module.exports)
  }
}

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "msg"
  }, [_vm._v(_vm._s(_vm.message))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-287bfa13", module.exports)
  }
}

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "scale",
      "mode": "out-in"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "bg"
  }, [_c('div', {
    staticClass: "alert"
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46b65173", module.exports)
  }
}

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg"
  }, [_vm._l((_vm.idols), function(idol, index) {
    return _c('div', {
      key: idol,
      class: idol,
      on: {
        "click": function($event) {
          _vm.select(index)
        }
      }
    }, [_c('bounce', {
      ref: "bounces",
      refInFor: true
    }, [_c('div', {
      staticClass: "brand",
      attrs: {
        "slot": "brand"
      },
      slot: "brand"
    }), _c('div', {
      staticClass: "avatar",
      attrs: {
        "slot": "avatar"
      },
      slot: "avatar"
    })])], 1)
  }), _c('div', {
    on: {
      "click": _vm.hideAlert
    }
  }, [_c('alert', {
    ref: "alert"
  })], 1)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b7bccbe", module.exports)
  }
}

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "coord",
    class: {
      bounce: _vm.ready, flip: _vm.flipping
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_vm._t("brand"), _c('div', {
    staticClass: "circle"
  }, [_vm._t("avatar")], 2)], 2), _c('div', {
    staticClass: "shadow"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5cef1cfe", module.exports)
  }
}

/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cnt"
  }, [_c('div', {
    staticClass: "head"
  }, [_c('div', {
    staticClass: "pic"
  }, [_c('div', {
    staticClass: "avatar",
    class: 'avatar-' + _vm.star
  })]), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.starName))])]), _c('div', {
    staticClass: "msg"
  }, [_c('span', [_vm._v(_vm._s(_vm.message))]), (_vm.displayBlockImage) ? _c('img', {
    staticClass: "block",
    class: 'block__' + (_vm.image.height || '120'),
    attrs: {
      "src": _vm.displayBlockImage
    }
  }) : _vm._e(), (_vm.displayImage) ? _c('img', {
    staticClass: "img",
    attrs: {
      "src": _vm.displayImage
    }
  }) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-601c09c4", module.exports)
  }
}

/***/ })

});
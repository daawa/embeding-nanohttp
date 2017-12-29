webpackJsonp([11],{

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showList) ? _c('div', {
    ref: "wrapper",
    staticClass: "wrapper"
  }, [_c('ul', {
    staticClass: "my-list"
  }, _vm._l((_vm.myList), function(trial, index) {
    return _c('li', {
      staticClass: "my-trial",
      on: {
        "click": function($event) {
          _vm.toDetailPage(trial, index)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": trial.image
      }
    }), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "product"
    }, [_vm._v(_vm._s(trial.productBrandName) + " " + _vm._s(trial.displaySkuValue))]), _c('div', {
      staticClass: "status"
    }, [_vm._v(_vm._s(trial.status))]), _c('div', {
      staticClass: "price"
    }, [_vm._v("价值 ¥" + _vm._s(trial.price))]), _c('status-btn', {
      attrs: {
        "trial": trial
      }
    })], 1)])
  })), (!_vm.fetchFailed && _vm.hasNext && !_vm.hasApplyingList) ? _c('div', {
    staticClass: "loading"
  }, [_c('loading')], 1) : _vm._e(), (_vm.fetchFailed) ? _c('div', {
    staticClass: "failed",
    on: {
      "click": _vm.getList
    }
  }, [_vm._m(0, false, false)]) : _vm._e()]) : _c('div', {
    staticClass: "m-empty"
  }, [_c('img', {
    attrs: {
      "src": "/res/image/notrial.png"
    }
  }), _c('div', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.emptyText))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "txt"
  }, [_vm._v("加载失败，"), _c('span', [_vm._v("点击重新加载")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-92b6e80a", module.exports)
  }
}

/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentIndex === 0),
      expression: "currentIndex===0"
    }],
    ref: "trialListWrapper",
    class: ['list-wrapper', {
      'list-wrapper-1': _vm.showTabs
    }]
  }, [_c('trialList', {
    ref: "trialList",
    attrs: {
      "trial-list": _vm.trialList,
      "is-login": _vm.isLogin
    }
  })], 1), (_vm.isLogin && _vm.currentIndex === 1) ? _c('div', {
    ref: "myListWrapper",
    class: ['list-wrapper', 'myList', {
      'list-wrapper-1': _vm.showTabs
    }]
  }, [_c('myTrial', {
    ref: "myList"
  })], 1) : _vm._e(), (_vm.showTabs) ? _c('ul', {
    staticClass: "tab"
  }, [_c('li', {
    class: {
      active: _vm.currentIndex == 0
    },
    on: {
      "click": _vm.toTrialList
    }
  }, [_vm._v("所有试用")]), _c('li', {
    class: {
      active: _vm.currentIndex == 1
    },
    on: {
      "click": _vm.toMyTrial
    }
  }, [_vm._v("我的试用")])]) : _vm._e()]), _c('app-banner')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a6d843e6", module.exports)
  }
}

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(807)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(682),
  /* template */
  __webpack_require__(1025),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a6d843e6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/trial/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a6d843e6", Component.options)
  } else {
    hotAPI.reload("data-v-a6d843e6", Component.options)
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

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(438),
  /* template */
  __webpack_require__(440),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/sticky.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sticky.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d587d97", Component.options)
  } else {
    hotAPI.reload("data-v-0d587d97", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ 438:
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
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String]
    },
    zIndex: {
      type: [Number, String],
      default: 1000
    }
  },
  mounted: function mounted() {
    var stickyTop = this.top;
    var stickyBottom = this.bottom;
    var zIndex = this.zIndex;
    var element = this.$refs.sticky;
    var elementChild = element.firstElementChild;

    element.style.position = '-webkit-sticky';
    element.style.position = 'sticky';
    if (~element.style.position.indexOf('sticky')) {
      if (stickyBottom !== undefined) {
        element.style.bottom = stickyBottom + 'px';
        element.style.top = 'auto';
      } else {
        element.style.top = stickyTop + 'px';
      }
      element.style.zIndex = zIndex;
      return;
    }

    elementChild.style.left = 0;
    elementChild.style.right = 0;
    if (stickyBottom !== undefined) {
      elementChild.style.bottom = stickyBottom + 'px';
      elementChild.style.top = 'auto';
    } else {
      elementChild.style.top = stickyTop + 'px';
    }
    elementChild.style.zIndex = zIndex;

    var active = false;
    var check = function check() {
      var offsetTop = element.getBoundingClientRect().top;
      var offsetBottom = element.getBoundingClientRect().bottom;
      if (stickyBottom !== undefined && offsetBottom > stickyBottom || offsetTop < stickyTop) {
        if (active) return;
        if (!element.style.height) {
          element.style.height = element.clientHeight + 'px';
        }
        elementChild.style.position = 'fixed';
        active = true;
      } else {
        if (!active) return;
        elementChild.style.position = '';
        active = false;
      }
    };

    var timer;
    this.__listenAction = function () {
      if (timer) return;
      timer = setInterval(check, 30);
    };
    window.addEventListener('scroll', this.__listenAction);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.__listenAction) {
      window.removeEventListener('scroll', this.__listenAction);
    }
  }
};

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "sticky",
    staticClass: "sticky"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d587d97", module.exports)
  }
}

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

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = __webpack_require__(32);

exports.default = {
  mounted: function mounted() {
    if (this.inApp && this.$beauty) {
      this.$beauty.task('enableRefresh');
    }
  },
  destroyed: function destroyed() {
    if (this.inApp && this.$beauty) {
      this.$beauty.task('disableRefresh');
    }
  },

  computed: _extends({}, (0, _vuex.mapState)(['inApp']))
};

/***/ }),

/***/ 682:
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

// import _ from 'lodash'


var _vuex = __webpack_require__(32);

var _sticky = __webpack_require__(434);

var _sticky2 = _interopRequireDefault(_sticky);

var _TrialList = __webpack_require__(905);

var _TrialList2 = _interopRequireDefault(_TrialList);

var _myTrial = __webpack_require__(908);

var _myTrial2 = _interopRequireDefault(_myTrial);

var _refreshMixin = __webpack_require__(567);

var _refreshMixin2 = _interopRequireDefault(_refreshMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins:  true ? [_refreshMixin2.default] : [],
  computed: _extends({}, (0, _vuex.mapState)({
    trialList: function trialList(_ref) {
      var resource = _ref.resource;

      return resource.trialList || {};
    },
    isLogin: function isLogin(_ref2) {
      var resource = _ref2.resource;

      var currentUser = resource.user || {};
      return !!currentUser.id;
    },
    tabs: function tabs() {
      return [{
        "name": "所有试用",
        "type": "trialList",
        "data": {
          "trial-list": this.trialList,
          "is-login": this.isLogin
        }
      }, {
        "name": "我的试用",
        "type": "myTrial",
        "data": {}
      }];
    },

    inApp: 'inApp'
  }), {
    showTabs: function showTabs() {
      return this.isLogin && this.inApp;
    }
  }),
  data: function data() {
    return {
      currentIndex: this.$route.name === 'trialList' ? 0 : 1,
      scrollTop: 0
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.scrollTop = 0;
  },

  watch: {
    '$route': function $route(newRoute, oldRoute) {
      this.currentIndex = newRoute.name === 'trialList' ? 0 : 1;
    }
  },
  methods: {
    // 切换到所有试用列表
    toTrialList: function toTrialList() {
      this.$eventTrace({
        category: 'TrailListTab',
        eventLabel: 'AllTrial'
      });
      this.currentIndex = 0;
      this.$router.push('/trial');
      this.$nextTick(function () {
        window.scrollTo(0, this.scrollTop);
      });
    },

    // 切换到我的试用列表
    toMyTrial: function toMyTrial() {
      this.$eventTrace({
        category: 'TrailListTab',
        eventLabel: 'MyTrialList'
      });
      this.currentIndex = 1;
      var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      if (scrollTop) {
        this.scrollTop = scrollTop;
      }
      this.$router.push('/trial/list/myTrial');
    }
  },
  components: {
    trialList: _TrialList2.default,
    myTrial: _myTrial2.default,
    sticky: _sticky2.default
  }
};

/***/ }),

/***/ 683:
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

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _Loading = __webpack_require__(436);

var _Loading2 = _interopRequireDefault(_Loading);

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _vuex = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COUNT = 20; // 每页展示的试用条数

exports.default = {
  props: {
    // 当前登录用户
    currentUser: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isLogin: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    trialList: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      loading: false, // 正在获取数据
      fetchFailed: false, // 最近一次获取数据失败
      // rawList: this.trialList.list || [],
      list: [],
      hasNext: this.trialList.hasNext || false,
      statusMap: {
        1: '立即申请',
        2: '已申请',
        3: '查看心得'
      }
    };
  },

  watch: {
    trialList: function trialList(newValue) {
      this.rawList = newValue.list;
    }
  },
  computed: _extends({
    rawList: {
      get: function get() {
        return this.list;
      },
      set: function set(newValue) {
        this.list = newValue;
      }
    },
    displayList: function displayList() {
      var _this = this;

      return this.list && this.list.map(function (trial) {
        var newTrial = _lodash2.default.cloneDeep(trial);
        newTrial.imageUrl = _jsUtil2.default.convertToNosUrl(trial.image, '690y360');
        newTrial.btnText = trial.trialStatus === 0 ? trial.countingDown : _this.statusMap[trial.trialStatus];
        newTrial.btnClass = {
          'btn': true,
          'counting-down': trial.trialStatus === 0,
          'end': trial.trialStatus === 2,
          'view-note': trial.trialStatus === 3
          // 左上方角标
        };newTrial.markClass = '';
        if (trial.newProduct) newTrial.markClass = 'mark-new';
        if (trial.trialStatus === 3) newTrial.markClass = 'mark-end';
        return newTrial;
      });
    },
    pageEndId: function pageEndId() {
      var list = this.list;
      if (list && list.length) {
        return list[list.length - 1].id;
      }
      return 0;
    }
  }, (0, _vuex.mapState)(['inApp'])),
  created: function created() {
    this.rawList = this.trialList.list;
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    // 页面滚动到底部时，加载更多
    onScroll: _lodash2.default.throttle(function () {
      var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      var windowHeight = document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
      if (scrollTop + windowHeight + 50 >= documentHeight) {
        this.getList();
      }
    }, 200),
    toTrialDetailPage: function toTrialDetailPage(id, index) {
      if (this.inApp) {
        var schemeUrl = this.$beauty.getURLScheme('webview', {
          url: '/trial/' + id + '?da_location=' + index
        });
        if (schemeUrl) {
          location.href = schemeUrl;
        } else {
          (0, _toast2.default)('请将网易美学更新到1.5以上版本');
        }
      } else {
        var detailUrl = '/trial/' + id;
        location.href = detailUrl;
      }
    },

    // 获取数据
    getList: function getList() {
      var self = this;
      if (!this.hasNext || this.loading) return;
      this.loading = true;
      (0, _fetch2.default)('/api/trial/list', {
        body: {
          pageEndId: this.pageEndId,
          count: COUNT
        }
      }).then(function (data) {
        var _ref = data.result || {},
            _ref$list = _ref.list,
            list = _ref$list === undefined ? [] : _ref$list,
            hasNext = _ref.hasNext;

        self.rawList = self.rawList.concat(list);
        self.hasNext = hasNext;
        self.loading = false;
        self.fetchFailed = false;
      }, function (json) {
        self.loading = false;
        self.fetchFailed = true;
      });
    }
  },
  components: {
    loading: _Loading2.default
  }
};

/***/ }),

/***/ 684:
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

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _vuex = __webpack_require__(32);

var _Loading = __webpack_require__(436);

var _Loading2 = _interopRequireDefault(_Loading);

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

var _constant = __webpack_require__(53);

var _StatusBtn = __webpack_require__(907);

var _StatusBtn2 = _interopRequireDefault(_StatusBtn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIMIT = 50; // 列表每页返回的数据条数

var _data = {
  list: [],
  total: 0,
  current: 0,
  scrollTop: 0,
  loading: false, // 正在获取数据
  fetched: false, // 至少获取过一次数据
  fetchFailed: false // 最近一次获取数据失败
};
exports.default = {
  props: {
    currentIndex: {
      type: Number,
      default: 0
    },
    type: {
      type: Number,
      default: 0
    },
    hasApplyingList: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return _lodash2.default.cloneDeep(_data);
  },

  computed: _extends({}, (0, _vuex.mapState)({
    hasRefresh: function hasRefresh(resource) {
      return resource.hasRefresh;
    }
  }), {
    myList: function myList() {
      return this.list && this.list.map(function (trial) {
        var myTrial = _lodash2.default.cloneDeep(trial);
        myTrial.image = trial.image ? _jsUtil2.default.convertToNosUrl(trial.image, '180y180') : _jsUtil2.default.convertToNosUrl(_constant.IMGS.DEFAULT_IMG, '180y180');
        switch (trial.applyStatus) {
          case 0:
            myTrial.status = trial.countingDown;
            break;
          case 5:
            myTrial.status = '申领失败';
            break;
          default:
            myTrial.status = '申领成功';
        }
        return myTrial;
      });
    },
    hasNext: function hasNext() {
      return !this.current || this.current * LIMIT < this.total;
    },

    // 是否展示列表
    showList: function showList() {
      return this.list && this.list.length > 0 || this.type === 0 && this.hasApplyingList || !this.fetched;
    },

    // 空态文案
    emptyText: function emptyText() {
      var emptyText = '';
      switch (this.type) {
        case 1:
          emptyText = '还没有试用申请成功哦';
          break;
        case 2:
          emptyText = '还没有试用申请失败哦';
          break;
        default:
          emptyText = '还没有申请试用哦';
          break;
      }
      return emptyText;
    }
  }),
  watch: {
    hasRefresh: function hasRefresh(newValue) {
      // 仅更新当前选中的tab
      if (!newValue || this.type !== this.currentIndex) return;
      this.current = 0;
      this.getList();
    }
  },
  mounted: function mounted() {
    this.getList();
  },

  methods: {
    getList: function getList() {
      var _this = this;

      if (!this.hasNext || this.loading) return;
      this.loading = true;
      (0, _fetch2.default)('/api/trial/myTrial', {
        body: {
          type: this.type,
          offset: this.current * LIMIT,
          limit: LIMIT
        }
      }).then(function (data) {
        var _ref = data.result || {},
            _ref$list = _ref.list,
            list = _ref$list === undefined ? [] : _ref$list,
            _ref$total = _ref.total,
            total = _ref$total === undefined ? 0 : _ref$total;

        if (_this.hasRefresh) {
          _this.list = [].concat(list);
          _this.$store.commit('setHasRefresh', false);
        } else {
          _this.list = _this.list.concat(list);
        }
        _this.total = total;
        _this.current = _this.current + 1;
        _this.loading = false;
        _this.fetched = true;
        _this.fetchFailed = false;
      }, function (json) {
        _this.hasRefresh && _this.$store.commit('setHasRefresh', false);
        _this.loading = false;
        _this.fetched = true;
        _this.fetchFailed = true;
      });
    },

    // 页面滚动到底部时，加载更多
    onScroll: function onScroll() {
      if (this.$refs.wrapper) {
        var element = this.$refs.wrapper;
        var scrollTop = element.scrollTop;
        var documentHeight = element.scrollHeight;
        var windowHeight = element.clientHeight;

        if (scrollTop + windowHeight + 50 >= documentHeight && this.hasNext) {
          this.getList();
        }
      }
    },
    toDetailPage: function toDetailPage(trial, index) {
      var self = this;
      var schemeUrl = this.$beauty.getURLScheme('webview', {
        url: '/trial/' + trial.trialId + '?da_location=' + index + '&da_type=' + self.type
      });
      if (schemeUrl) {
        location.href = schemeUrl;
      } else {
        (0, _toast2.default)('请将网易美学更新到1.5以上版本');
      }
    }
  },
  components: {
    loading: _Loading2.default,
    statusBtn: _StatusBtn2.default
  }
};

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    trial: {
      type: Object,
      default: {}
    }
  },
  data: function data() {
    return {};
  },

  computed: {
    status: function status() {
      return this.trial.applyStatus;
    },
    statusText: function statusText() {
      var statusMap = {
        0: '申领中',
        1: '编辑地址',
        2: '写心得',
        3: '已过期',
        4: '已违规',
        5: '',
        6: '已完成'
      };
      return statusMap[this.trial.applyStatus];
    },

    // 是否属于disable状态
    isDisabled: function isDisabled() {
      return this.status === 3 || this.status === 4 || this.status === 6;
    },

    // 是否显示为按钮状态
    isButton: function isButton() {
      return this.status === 1 || this.status === 2;
    }
  },
  methods: {
    toNativePage: function toNativePage() {
      var _trial = this.trial,
          id = _trial.id,
          productId = _trial.productId,
          skuId = _trial.skuId,
          trialId = _trial.trialId;
      // 跳转编辑地址或者编辑心得

      var schemeUrl = this.status === 1 ? this.$beauty.getURLScheme('editAddress', id) : this.$beauty.getURLScheme('editTrialReport', {
        productId: productId,
        skuId: skuId,
        trialId: trialId
      });
      if (schemeUrl) {
        location.href = schemeUrl;
      } else {
        (0, _toast2.default)('请将网易美学更新到1.5以上版本');
      }
    }
  }
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
//

/***/ }),

/***/ 686:
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

var _vuex = __webpack_require__(32);

var _MyList = __webpack_require__(906);

var _MyList2 = _interopRequireDefault(_MyList);

var _sticky = __webpack_require__(434);

var _sticky2 = _interopRequireDefault(_sticky);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      currentIndex: 0
    };
  },

  computed: _extends({}, (0, _vuex.mapState)({
    unreadInfo: function unreadInfo(_ref) {
      var resource = _ref.resource;

      return resource.unreadInfo || {};
    },
    tabs: function tabs(_ref2) {
      var resource = _ref2.resource;

      return [{
        "name": "申领中",
        "type": "myList",
        "wrapperRef": "wrapper0",
        "ref": "MyList0",
        "data": {
          "type": 0,
          "hasApplyingList": resource.hasApplyingList,
          "currentIndex": this.currentIndex
        }
      }, {
        "name": "申领成功",
        "type": "myList",
        "wrapperRef": "wrapper1",
        "ref": "MyList1",
        "data": {
          "type": 1,
          "currentIndex": this.currentIndex
        }
      }, {
        "name": "申领失败",
        "type": "myList",
        "wrapperRef": "wrapper2",
        "ref": "MyList2",
        "data": {
          "type": 2,
          "currentIndex": this.currentIndex
        }
      }];
    }
  })),
  mounted: function mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    onScroll: _lodash2.default.throttle(function () {
      var ref = 'MyList' + this.currentIndex;
      this.$refs[ref][0].onScroll();
    }, 200),
    onTabChange: function onTabChange(index) {
      // 点击tab埋点
      this.$eventTrace({
        category: 'MyTrialTab',
        eventLabel: index + 1
      });
      this.currentIndex = index;
      if (index === 1 && this.unreadInfo.successInfo) {
        this.unreadInfo.successInfo = false;
      }
    }
  },
  components: {
    myList: _MyList2.default,
    sticky: _sticky2.default
  }
};

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(708)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(683),
  /* template */
  __webpack_require__(924),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0bd90558",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/trial/list/TrialList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TrialList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0bd90558", Component.options)
  } else {
    hotAPI.reload("data-v-0bd90558", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(800)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(684),
  /* template */
  __webpack_require__(1018),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-92b6e80a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/trial/list/myTrial/MyList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MyList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92b6e80a", Component.options)
  } else {
    hotAPI.reload("data-v-92b6e80a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(762)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(685),
  /* template */
  __webpack_require__(979),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5bc2e609",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/trial/list/myTrial/StatusBtn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] StatusBtn.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5bc2e609", Component.options)
  } else {
    hotAPI.reload("data-v-5bc2e609", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(727)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(686),
  /* template */
  __webpack_require__(944),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-31ac851e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/trial/list/myTrial/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31ac851e", Component.options)
  } else {
    hotAPI.reload("data-v-31ac851e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.displayList && _vm.displayList.length > 0) ? _c('ul', {
    ref: "trialList",
    staticClass: "trial-list"
  }, _vm._l((_vm.displayList), function(trial, index) {
    return _c('li', {
      staticClass: "trial",
      on: {
        "click": function($event) {
          _vm.toTrialDetailPage(trial.id, index)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": trial.imageUrl
      }
    }), (trial.markClass) ? _c('div', {
      staticClass: "mark",
      class: trial.markClass
    }) : _vm._e(), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "product"
    }, [_vm._v(_vm._s(trial.productBrandName) + " " + _vm._s(trial.spec))]), _c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(trial.title))]), _c('div', {
      staticClass: "bottom"
    }, [_c('div', {
      staticClass: "data"
    }, [(trial.price) ? _c('span', {
      staticClass: "price"
    }, [_vm._v("价值 "), _c('span', {
      staticClass: "num"
    }, [_vm._v("¥" + _vm._s(trial.price))])]) : _vm._e(), (trial.quantity) ? _c('span', [_vm._v("限量"), _c('span', {
      staticClass: "num"
    }, [_vm._v(_vm._s(trial.quantity))]), _vm._v("份")]) : _vm._e(), _c('button', {
      class: trial.btnClass
    }, [_vm._v(_vm._s(trial.btnText))])])])])])
  })) : _vm._e(), _c('div', {
    staticClass: "loading"
  }, [(!_vm.fetchFailed && _vm.hasNext) ? _c('loading') : _vm._e()], 1), (_vm.fetchFailed) ? _c('div', {
    staticClass: "failed",
    on: {
      "click": _vm.getList
    }
  }, [_vm._m(0, false, false)]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "txt"
  }, [_vm._v("加载失败，"), _c('span', [_vm._v("点击重新加载")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0bd90558", module.exports)
  }
}

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my-trial"
  }, [_c('ul', {
    staticClass: "tab"
  }, _vm._l((_vm.tabs), function(tab, index) {
    return _c('li', {
      class: {
        active: _vm.currentIndex == index
      },
      on: {
        "click": function () { return _vm.onTabChange(index); }
      }
    }, [_vm._v("\n      " + _vm._s(tab.name) + "\n      "), ((index == 1 && _vm.unreadInfo.successInfo)) ? _c('div', {
      staticClass: "dot"
    }) : _vm._e()])
  })), _vm._l((_vm.tabs), function(tab, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.currentIndex === index),
        expression: "currentIndex===index"
      }],
      ref: tab.wrapperRef,
      refInFor: true,
      staticClass: "my-wrapper"
    }, [_c(tab.type, _vm._b({
      ref: tab.ref,
      refInFor: true,
      tag: "div"
    }, 'div', tab.data, false))])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-31ac851e", module.exports)
  }
}

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.status !== 5) ? _c('div', {
    staticClass: "status-btn"
  }, [(_vm.isButton) ? _c('button', {
    staticClass: "btn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.toNativePage($event)
      }
    }
  }, [_vm._v("\n    " + _vm._s(_vm.statusText) + "\n  ")]) : _c('div', {
    staticClass: "text",
    class: {
      "disabled": _vm.isDisabled
    }
  }, [_vm._v("\n    " + _vm._s(_vm.statusText) + "\n  ")])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5bc2e609", module.exports)
  }
}

/***/ })

});
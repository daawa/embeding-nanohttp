webpackJsonp([5],{

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.list.length > 0) ? _c('div', {
    staticClass: "recommend"
  }, [_c('div', {
    staticClass: "tlt"
  }, [_vm._v("相关推荐")]), _c('ul', _vm._l((_vm.list), function(item) {
    return _c('li', [_c('router-link', {
      attrs: {
        "to": item.url
      }
    }, [_c('div', {
      staticClass: "cover"
    }, [_c('img', {
      attrs: {
        "src": item.cover
      }
    }), _c('span', {
      staticClass: "icon"
    })]), _c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.name))])])], 1)
  }))]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76345c2e", module.exports)
  }
}

/***/ }),

/***/ 1010:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "video"
  }, [_c('div', {
    staticClass: "wrap",
    class: [{
      taller: _vm.displayVideo.mode === 1
    }]
  }, [(_vm.ready) ? _c('videoItem', {
    key: _vm.displayVideo.id,
    attrs: {
      "displayVideo": _vm.displayVideo
    }
  }) : _vm._e()], 1), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.displayVideo.name))]), (_vm.inApp) ? _c('div', {
    staticClass: "share",
    on: {
      "click": _vm.share
    }
  }, [_c('span', {
    staticClass: "icon"
  })]) : _vm._e()]), _c('div', {
    staticClass: "extra"
  }, [_c('span', {
    staticClass: "icon read"
  }), _c('span', [_vm._v(_vm._s(_vm.videoSocialStat.browseCnt))]), _c('span', {
    staticClass: "icon duration"
  }), _c('span', [_vm._v(_vm._s(_vm.displayVideo.duration))])]), _c('div', {
    staticClass: "user"
  }, [_c('div', {
    staticClass: "avator",
    on: {
      "click": _vm.toProfilePage
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.author.avatarUrl
    }
  }), (_vm.author.isVip) ? _c('span', {
    staticClass: "vip"
  }) : _vm._e()]), _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.author.nickname))]), (_vm.author.s1) ? _c('div', {
    staticClass: "s1"
  }, [_vm._v(_vm._s(_vm.author.s1))]) : _vm._e()])]), _c('div', {
    staticClass: "description"
  }, [_vm._v(_vm._s(_vm.displayVideo.description))]), _c('div', {
    staticClass: "time"
  }, [_vm._v("编辑于 " + _vm._s(_vm.displayVideo.updateTime))])]), (_vm.productList && _vm.productList.length) ? _c('productList', {
    attrs: {
      "productList": _vm.productList
    }
  }) : _vm._e(), _c('recommend', {
    attrs: {
      "res-id": _vm.displayVideo.id
    }
  }), (_vm.displayVideo.id) ? _c('comments', {
    attrs: {
      "res-id": _vm.displayVideo.id,
      "res-type": 20,
      "currentUser": _vm.currentUser
    }
  }) : _vm._e(), (!_vm.inApp) ? _c('app-more', {
    attrs: {
      "text": "查看更多精彩内容"
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7cd2d664", module.exports)
  }
}

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(792)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(696),
  /* template */
  __webpack_require__(1010),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7cd2d664",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/video/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cd2d664", Component.options)
  } else {
    hotAPI.reload("data-v-7cd2d664", Component.options)
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

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(448)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(446),
  /* template */
  __webpack_require__(452),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-9b529db2",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/Avatar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Avatar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b529db2", Component.options)
  } else {
    hotAPI.reload("data-v-9b529db2", Component.options)
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

/***/ 446:
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

var _constant = __webpack_require__(53);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;
exports.default = {
  props: {
    user: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: _extends({}, (0, _vuex.mapState)({
    inMiniProgram: 'inMiniProgram'
  }), {
    displayUser: function displayUser() {
      var user = _lodash2.default.cloneDeep(this.user);
      user.avatarUrl = _jsUtil2.default.convertToNosUrl(user.avatarUrl || _constant.IMGS.AVATAR, '140y140');
      user.vip = _jsUtil2.default.isVipUser(user.authType);
      return user;
    }
  }),
  methods: {
    toUserProfilePage: function toUserProfilePage(id) {
      if (this.inMiniProgram) {
        Util.callApp();
      } else if (!this.$beauty.inApp) {
        this.$router.push('/user/' + id);
      } else {
        var schemeUrl = this.$beauty.getURLScheme('webview', {
          url: '/user/' + id
        });
        if (schemeUrl) {
          location.href = schemeUrl;
        } else {
          (0, _toast2.default)('请将网易美学更新到1.5以上版本');
        }
      }
    }
  }
};

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(478)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(460),
  /* template */
  __webpack_require__(496),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d3c6b8b6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/comments/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d3c6b8b6", Component.options)
  } else {
    hotAPI.reload("data-v-d3c6b8b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "avatar",
    on: {
      "click": function($event) {
        _vm.toUserProfilePage(_vm.displayUser.id)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.displayUser.avatarUrl
    }
  }), (_vm.displayUser.vip) ? _c('span') : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9b529db2", module.exports)
  }
}

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(474)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(457),
  /* template */
  __webpack_require__(492),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-683096cc",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/NoContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NoContent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-683096cc", Component.options)
  } else {
    hotAPI.reload("data-v-683096cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(468)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(462),
  /* template */
  __webpack_require__(486),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-098b2229",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/media/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-098b2229", Component.options)
  } else {
    hotAPI.reload("data-v-098b2229", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 457:
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

exports.default = {
  props: {
    text: {
      type: String,
      default: '还没有内容'
    }
  }
};

/***/ }),

/***/ 458:
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

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _vuex = __webpack_require__(32);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _Avatar = __webpack_require__(435);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;

exports.default = {
  props: {
    comment: {
      type: Object,
      require: true
    }
  },
  computed: _extends({}, (0, _vuex.mapState)(['inApp']), {
    displayComment: function displayComment() {
      var comment = _lodash2.default.cloneDeep(this.comment);
      if (!comment.author) comment.author = {};

      var praiseCount = comment.praiseCount;
      comment.praiseCount = praiseCount < 100000 ? praiseCount : parseInt(praiseCount / 10000) + '万';
      var images = comment.images;
      if (images && images.length > 0) {
        comment.displayImages = images.map(function (image) {
          return _jsUtil2.default.convertToNosUrl(image, '184y184', {
            force: true
          });
        });
      }

      var replyComment = comment.replyComment;
      if (replyComment) {
        var deleted = replyComment.status === -5 || replyComment.status === -10;
        if (deleted) {
          comment.replyComment = '\u8BC4\u8BBA\u5DF2\u88AB\u5220\u9664';
        } else {
          comment.replyUser = replyComment.author && replyComment.author.nickname;
          comment.replyComment = '\uFF1A' + replyComment.content;
          var replayImages = replyComment.images;
          if (replayImages && replayImages.length > 0) {
            comment.displayReplyImages = replayImages.map(function (image) {
              return _jsUtil2.default.convertToNosUrl(image, '170y170', {
                force: true
              });
            });
          }
        }
      }
      return comment;
    }
  }),
  methods: {
    launchApp: function launchApp() {
      Util.callApp();
    }
  },
  components: {
    avatar: _Avatar2.default
  }
};

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _Avatar = __webpack_require__(435);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      content: '', // 当前用户输入的评论内容
      maxContentLength: 140 // 最多可输入140汉字评论
    };
  },

  props: {
    resId: {
      type: [Number, String],
      require: true
    },
    // 资源类型
    resType: {
      type: Number,
      require: true
    },
    // 当前登录用户
    currentUser: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    add: Function
  },
  watch: {
    content: function content() {
      var _this = this;

      // 内容改变时，textarea自适应高度
      this.$nextTick(function () {
        _this.adjustHeight();
      });
    }
  },
  computed: {
    // 是否已登录
    isLogin: function isLogin() {
      var user = this.currentUser;
      return !!(user && user.id);
    },

    // 用户输入评论的长度，英文长度为0.5
    contentLength: function contentLength() {
      return parseInt(_jsUtil2.default.getStrLength(this.content) / 2);
    }
  },
  methods: {
    // 判断用户是否登录，如果未登录，跳转到登录页
    checkLogin: function checkLogin() {
      if (!this.isLogin) {
        window.location.href = '/login';
      }
    },

    // 内容改变时，textarea自适应高度
    adjustHeight: function adjustHeight() {
      var node = this.$refs.input;
      var height1 = node.scrollHeight;
      node.style.height = 'auto';
      var height2 = node.scrollHeight;
      node.style.height = Math.min(height1, height2) + 'px';
    },

    // 收起键盘
    hideKeyboard: function hideKeyboard() {
      this.$refs.input.blur();
    },

    // 发送评论
    send: function send() {
      var _this2 = this;

      if (this.sending) {
        return;
      }
      var content = this.content;
      if (!content) {
        return;
      }
      var maxContentLength = this.maxContentLength;
      if (this.contentLength > maxContentLength) {
        alert('\u8BC4\u8BBA\u4E0D\u8D85\u8FC7' + maxContentLength + '\u4E2A\u5B57');
        return;
      }
      this.sending = true;
      (0, _fetch2.default)('/comment/add', {
        method: 'POST',
        body: {
          resId: this.resId,
          resType: this.resType,
          commentId: 0, // 非回复
          content: content
        }
      }).then(function (json) {
        // 暂时兼容后台代码，后面要删除
        if (json.code === 301) {
          alert(json.msg || '请求失败，请稍后再试');
          return;
        }
        _this2.add({
          content: _this2.content,
          displayCreateTime: "刚刚",
          likedCount: 0,
          author: _this2.user,
          praised: false,
          target: null
        });
        _this2.content = '';
        _this2.sending = false;
      }, function (json) {
        alert(json.msg || '请求失败，请稍后再试');
        _this2.sending = false;
      });
    }
  },
  components: {
    avatar: _Avatar2.default
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

/***/ }),

/***/ 460:
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

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _Loading = __webpack_require__(436);

var _Loading2 = _interopRequireDefault(_Loading);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _vuex = __webpack_require__(32);

var _NoContent = __webpack_require__(455);

var _NoContent2 = _interopRequireDefault(_NoContent);

var _Comment = __webpack_require__(479);

var _Comment2 = _interopRequireDefault(_Comment);

var _Send = __webpack_require__(480);

var _Send2 = _interopRequireDefault(_Send);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;
var initialData = {
  loading: false, // 正在获取数据
  fetched: false, // 至少获取过一次数据
  fetchFailed: false, // 最近一次获取数据失败
  hasNext: true, // 还有未加载的评论
  inOldApp: false, // 是否美学APP1.3或之前版本
  comments: {
    list: [],
    total: null
  }
};
exports.default = {
  props: {
    resId: {
      type: [Number, String],
      require: true
    },
    // 资源类型
    resType: {
      type: Number,
      require: true
    },
    // 当前登录用户
    currentUser: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  watch: {
    // 对于同类型资源的切换，组件会被复用，因此需要监听数据变化，重新获取内容
    resId: function resId(newId, oldId) {
      this.reset();
      this.getList();
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.getList();
    // 兼容native1.3及以下版本
    document.addEventListener('MZBridgeLoaded', function () {
      if (!_this.ua.match(/NEMEIXUE/)) {
        _this.inOldApp = true;
      }
    });
    document.addEventListener('WebViewJavascriptBridgeReady', function () {
      if (!_this.ua.match(/NEMEIXUE/)) {
        _this.inOldApp = true;
      }
    });
    window.addEventListener('scroll', this.onScroll);
  },

  data: function data() {
    return _lodash2.default.cloneDeep(initialData);
  },
  computed: _extends({
    // 底部引导按钮的文案
    text: function text() {
      var total = this.comments.total;
      if (total > 5) {
        return '查看更多精彩评论';
      }
      return '查看更多精彩内容';
    },

    // 获取的最后一条评论的Id
    pageEndId: function pageEndId() {
      var list = this.comments.list;
      if (list && list.length) {
        return list[list.length - 1].id;
      }
      return -1;
    }
  }, (0, _vuex.mapState)(['inApp', 'ua'])),
  methods: {
    reset: function reset() {
      for (var key in initialData) {
        this[key] = initialData[key];
      }
    },

    // 获取评论列表
    getList: function getList() {
      var _this2 = this;

      if (!this.hasNext || this.loading) {
        return;
      }
      this.loading = true;
      (0, _fetch2.default)('/comments', {
        body: {
          count: 5,
          resId: this.resId,
          resType: this.resType,
          pageEndId: this.pageEndId
        }
      }).then(function (data) {
        var _ref = data.result || {},
            _ref$list = _ref.list,
            list = _ref$list === undefined ? [] : _ref$list,
            _ref$total = _ref.total,
            total = _ref$total === undefined ? 0 : _ref$total,
            hasNext = _ref.hasNext;

        _this2.comments = {
          list: _this2.comments.list.concat(list),
          total: total
        };
        _this2.hasNext = hasNext;
        _this2.loading = false;
        _this2.fetched = true;
        _this2.fetchFailed = false;
      }, function (json) {
        _this2.loading = false;
        _this2.fetched = true;
        _this2.fetchFailed = true;
      });
    },

    // 添加一条评论
    add: function add(item) {
      this.comments.list.unshift(item);
      this.comments.total++;
    },

    // 页面滚动到底部时，加载更多
    onScroll: function onScroll() {
      // 如果在APP外，不做滚动加载；如果上一次加载失败，需要先手动触发一次加载
      if (!this.inApp || this.fetchFailed) {
        return;
      }
      if (Util.isBottomVisible(this.$refs.comment)) {
        this.getList();
      }
    }
  },
  components: {
    loading: _Loading2.default,
    empty: _NoContent2.default,
    comment: _Comment2.default,
    send: _Send2.default
  }
};

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null; //
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

exports.default = {
  props: ['item', 'prevIsProduct', 'isScreencapture'],
  data: function data() {
    return {
      isUserProduct: this.item.type === 8, // 是否为用户自定义商品
      product: this.item.content
    };
  },
  computed: {
    productUrl: function productUrl() {
      // 商品跳转链接
      // 用户自定义产品不跳转到商品详情页
      var url = this.isUserProduct ? null : '/product/' + this.product.id;
      return url;
    },
    coverUrl: function coverUrl() {
      // 商品封面图
      var img = this.isUserProduct ? this.product.coverUrl : this.product.sku && this.product.sku.imageUrl || this.product.imageUrl;
      return _jsUtil2.default.convertToNosUrl(img, '265y265');
    }
  },
  methods: {
    toProduct: function toProduct(url) {
      if (url) {
        this.$router.push(url);
      }
    },
    callApp: function callApp() {
      Util.callApp();
    }
  }
};

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _Product = __webpack_require__(481);

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    medias: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    css: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isScreencapture: { // 是否为分享截屏
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {};
  },
  components: {
    product: _Product2.default
  },
  computed: {
    mediaList: function mediaList() {
      var self = this;
      // 默认图片预留宽度
      var defaultWidth = 690;
      // let imgHeight
      return this.medias.map(function (item, index) {
        var newItem = _lodash2.default.cloneDeep(item);
        var prevItem = self.medias[index - 1] || {};
        var nextItem = self.medias[index + 1] || {};

        if (newItem.type === 3) {
          // 判断是否是图片
          newItem.imageUrl = _jsUtil2.default.convertToNosUrl(newItem.content.url, newItem.content.width > 750 ? '750x0' : '', {
            noEnlarge: true
          });
          // 为lazyload图片增加预留高度
          if (newItem.content && newItem.content.height && newItem.content.width) {
            // 图片高度和宽度使用rem，自适应屏幕进行缩放
            var maxWidth = defaultWidth / 75;
            var expectWidth = newItem.content.width / 75;
            newItem.imgWidth = Math.min(maxWidth, expectWidth).toFixed(3);
            newItem.imgHeight = (newItem.content.height / newItem.content.width * newItem.imgWidth).toFixed(3) + 'rem';
            newItem.imgWidth += 'rem';
          } else {
            // 图片没有宽高信息时，设置为auto
            newItem.imgWidth = 'auto';
            newItem.imgHeight = 'auto';
          }
        }
        // 判断前一个是否是商品
        newItem.prevIsProduct = index > 0 ? prevItem.type === 1 || prevItem.type === 8 || prevItem.type === 7 : false;

        newItem.showTxt = item.type === 6 && // 文字
        !(!item.content && prevItem.type === 6) && // 和前一个段落(不论是否为空)粘连，不显示
        !(!item.content && nextItem.type === 6 && nextItem.content); // 和后一个空段落粘连，不显示

        return newItem;
      });
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
//
//
//
//
//
//
//

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(472)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(458),
  /* template */
  __webpack_require__(490),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-512e1fd2",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/comments/Comment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Comment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-512e1fd2", Component.options)
  } else {
    hotAPI.reload("data-v-512e1fd2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(476)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(459),
  /* template */
  __webpack_require__(494),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7591cda5",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/comments/Send.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Send.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7591cda5", Component.options)
  } else {
    hotAPI.reload("data-v-7591cda5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(473)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(461),
  /* template */
  __webpack_require__(491),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-66a5b834",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/media/Product.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Product.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66a5b834", Component.options)
  } else {
    hotAPI.reload("data-v-66a5b834", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "medias",
    staticStyle: {}
  }, [_c('ul', _vm._l((_vm.mediaList), function(item) {
    return _c('li', [(item.type == 1 || item.type == 8 || item.type == 7) ? _c('product', {
      attrs: {
        "item": item,
        "prev-is-product": item.prevIsProduct,
        "is-screencapture": _vm.isScreencapture
      }
    }) : _vm._e(), (item.type == 3) ? _c('div', {
      staticClass: "media pic"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (item.imageUrl),
        expression: "item.imageUrl"
      }],
      style: ({
        width: item.imgWidth,
        height: item.imgHeight
      }),
      attrs: {
        "alt": ""
      }
    })]) : _vm._e(), (item.showTxt) ? _c('div', {
      staticClass: "media txt",
      domProps: {
        "innerHTML": _vm._s(item.content)
      }
    }) : _vm._e()], 1)
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-098b2229", module.exports)
  }
}

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment"
  }, [_c('div', {
    staticClass: "wrap"
  }, [_c('avatar', {
    attrs: {
      "user": _vm.displayComment.author,
      "lazy": "true"
    }
  }), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.displayComment.author && _vm.displayComment.author.nickname))]), _c('div', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.displayComment.displayCreateTime))])]), (!_vm.inApp) ? _c('div', {
    staticClass: "u-praise",
    on: {
      "click": _vm.launchApp
    }
  }, [_vm._v(_vm._s(_vm.displayComment.praiseCount || '0'))]) : _vm._e()], 1), _c('div', {
    staticClass: "content"
  }, [_c('span', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.displayComment.content))]), (_vm.displayComment.displayImages && _vm.displayComment.displayImages.length > 0) ? _c('ul', {
    staticClass: "comment-images",
    on: {
      "click": _vm.launchApp
    }
  }, _vm._l((_vm.displayComment.displayImages), function(image) {
    return _c('li', {
      staticClass: "image"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (image),
        expression: "image"
      }]
    })])
  })) : _vm._e(), (_vm.displayComment.replyComment) ? _c('div', {
    staticClass: "reply"
  }, [_c('span', {
    staticClass: "user"
  }, [_vm._v(_vm._s(_vm.displayComment.replyUser))]), _vm._v(_vm._s(_vm.displayComment.replyComment) + "\n      "), (_vm.displayComment.displayReplyImages && _vm.displayComment.displayReplyImages.length > 0) ? _c('ul', {
    staticClass: "comment-images reply",
    on: {
      "click": _vm.launchApp
    }
  }, _vm._l((_vm.displayComment.displayReplyImages), function(image) {
    return _c('li', {
      staticClass: "image"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (image),
        expression: "image"
      }]
    })])
  })) : _vm._e()]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-512e1fd2", module.exports)
  }
}

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['media', 'prd', {
      'prd-1': _vm.prevIsProduct
    }],
    on: {
      "click": function($event) {
        _vm.toProduct(_vm.productUrl)
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.coverUrl),
      expression: "coverUrl"
    }]
  }), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "zhName"
  }, [_vm._v(_vm._s(_vm.product.name4wap1))]), _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "enName"
  }, [_vm._v(_vm._s(_vm.product.name4wap2))]), _c('div', {
    staticClass: "enName enName-xd"
  }, [(_vm.product.noteCnt > 0) ? _c('div', [(_vm.isScreencapture) ? _c('span', [_vm._v("在网易美学有")]) : _vm._e(), _vm._v(_vm._s(_vm.product.noteCnt) + "篇心得\n            "), (!_vm.isUserProduct && !_vm.isScreencapture) ? _c('span', {
    staticClass: "gt"
  }) : _vm._e()]) : _vm._e()])]), (!_vm.isUserProduct && !_vm.isScreencapture) ? _c('div', {
    staticClass: "grass",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.callApp($event)
      }
    }
  }, [_c('span', {
    staticClass: "icon"
  }), _c('div', [_vm._v("长草")])]) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66a5b834", module.exports)
  }
}

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "empty"
  }, [_c('div', {
    staticClass: "background"
  }), _c('div', {
    staticClass: "txt"
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-683096cc", module.exports)
  }
}

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "send",
    on: {
      "click": _vm.checkLogin
    }
  }, [_c('avatar', {
    attrs: {
      "user": _vm.currentUser
    }
  }), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    ref: "input",
    staticClass: "content",
    attrs: {
      "type": "search",
      "disabled": !_vm.isLogin,
      "placeholder": "谢谢你这么好看还来给我评论~",
      "rows": "1"
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "keyup": _vm.adjustHeight,
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        _vm.hideKeyboard($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  }), _c('div', [(_vm.contentLength >= 100) ? _c('div', {
    staticClass: "tip"
  }, [_vm._v(_vm._s(_vm.maxContentLength - _vm.contentLength))]) : _vm._e(), _c('div', {
    staticClass: "btn",
    attrs: {
      "disabled": !_vm.isLogin
    },
    on: {
      "click": _vm.send
    }
  }, [_vm._v("发送")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7591cda5", module.exports)
  }
}

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-comments"
  }, [_c('div', {
    ref: "comment",
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("评论"), (_vm.comments.total !== null) ? _c('span', [_vm._v("(" + _vm._s(_vm.comments.total) + ")")]) : _vm._e()]), (_vm.inApp && !_vm.inOldApp) ? _c('send', {
    attrs: {
      "res-id": _vm.resId,
      "res-type": _vm.resType,
      "current-user": _vm.currentUser,
      "add": _vm.add
    }
  }) : _vm._e(), (_vm.comments.total) ? _c('div', _vm._l((_vm.comments.list || []), function(item) {
    return _c('comment', {
      key: item.id,
      attrs: {
        "comment": item
      }
    })
  })) : _vm._e(), (_vm.comments.total === 0) ? _c('empty', {
    attrs: {
      "text": "还没有评论"
    }
  }) : _vm._e(), _c('div', {
    staticClass: "loading"
  }, [(!_vm.fetched || (!_vm.fetchFailed && _vm.hasNext && _vm.inApp)) ? _c('loading') : _vm._e()], 1), (_vm.fetchFailed) ? _c('div', {
    staticClass: "failed",
    on: {
      "click": _vm.getList
    }
  }, [_vm._m(0, false, false)]) : _vm._e()], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "txt"
  }, [_vm._v("加载失败，"), _c('span', [_vm._v("点击重新加载")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d3c6b8b6", module.exports)
  }
}

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialData = {
  recommendList: []
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
//
//
//

exports.default = {
  props: {
    resId: {
      type: String
    }
  },
  data: function data() {
    return initialData;
  },

  watch: {
    resId: function resId(newId, oldId) {
      this.reset();
      this.getData();
    }
  },
  computed: {
    list: function list() {
      return this.recommendList.map(function (item) {
        var newItem = _lodash2.default.cloneDeep(item);
        newItem.cover = _jsUtil2.default.convertToNosUrl(item.cover, '336y188', { force: true });
        newItem.url = '/video/' + item.id + '?abtest=' + item.abtest + '&pvid=' + item.pvid;
        return newItem;
      });
    }
  },
  mounted: function mounted() {
    this.getData();
  },

  methods: {
    reset: function reset() {
      for (var key in initialData) {
        this[key] = initialData[key];
      }
    },

    getData: function getData() {
      var _this = this;

      (0, _fetch2.default)('/api/video/' + this.resId + '/recommend', {
        body: {
          count: 20, // 目前只推荐0-6个，取全量
          pageEndId: -1
        }
      }).then(function (data) {
        _this.recommendList = data.result && data.result.list || [];
      }, function (json) {
        alert(json.msg || '获取相关视频失败');
      });
    }
  }
};

/***/ }),

/***/ 695:
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
//
//
//

exports.default = {
  props: {
    displayVideo: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      videoStatus: videoStatus,
      clicked: false, // 是否点击过播放按钮
      played: false, // 是否播放过
      status: videoStatus.INIT, // 视频当前播放状态
      id: this.$route.params.id,
      usingNativeControls: true // 是否使用原生控制条
    };
  },

  computed: {
    isWifi: function isWifi() {
      return this.$store.getters.isWifi;
    }
  },
  mounted: function mounted() {
    this.initPlayer();
  },

  methods: {
    // 初始化视频云播放器
    initPlayer: function initPlayer() {
      var _this = this;

      var options = {
        "poster": this.displayVideo.cover // 视频播放前显示的图片
      };
      var node = this.$refs.video;
      window.neplayer.__cache = {}; // 云视频没有清空cache
      var myPlayer = window.neplayer(node, options);
      this.usingNativeControls = myPlayer.corePlayer.usingNativeControls_;
      this.myPlayer = myPlayer;
      // 播放
      myPlayer.onPlayState(1, function () {
        _this.status = videoStatus.PLAY;
        if (!_this.played) {
          _this.played = true; // 标记已经播放过
          // 统计视频播放次数
          (0, _fetch2.default)('/api/videoDisplay/' + _this.id, {
            method: 'POST'
          });
          // document.getElementById('my-video_html5_api').style['z-index'] = 0
        }
      });
      // myPlayer.corePlayer.usingNativeControls(true)
      // 暂停
      myPlayer.onPlayState(2, function () {
        _this.status = videoStatus.PAUSE;
      });

      // 结束
      myPlayer.onPlayState(3, function () {
        _this.status = videoStatus.END;
      });

      // 视频加载错误
      myPlayer.onError(function () {
        var errorWrapper = document.getElementsByClassName('vjs-error-display')[0];
        var errorElement = null;
        if (errorWrapper) {
          errorElement = errorWrapper.getElementsByClassName('vjs-modal-dialog-content')[0];
          errorElement.innerHTML = '<div class="load-error"><span>\u7F51\u7EDC\u592A\u4E0D\u7ED9\u529B\uFF0C\u89C6\u9891\u52A0\u8F7D\u5931\u8D25</span><span id="refresh-btn" class="icon"></span></div>';
          var refreshBtn = document.getElementById('refresh-btn');
          refreshBtn.addEventListener('click', function (e) {
            window.location.reload();
          });
        }
      });
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
      this.myPlayer.play();
    }
  }
};

/***/ }),

/***/ 696:
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

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _comments = __webpack_require__(450);

var _comments2 = _interopRequireDefault(_comments);

var _constant = __webpack_require__(53);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _vuex = __webpack_require__(32);

var _Recommend = __webpack_require__(914);

var _Recommend2 = _interopRequireDefault(_Recommend);

var _VideoItem = __webpack_require__(915);

var _VideoItem2 = _interopRequireDefault(_VideoItem);

var _productList = __webpack_require__(916);

var _productList2 = _interopRequireDefault(_productList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inBrowser = true;

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)({
    video: 'resource.videoDetailView',
    // 视频中提及的产品列表
    productList: function productList(_ref) {
      var resource = _ref.resource;

      return resource.products;
    },

    // 视频作者
    author: function author(_ref2) {
      var resource = _ref2.resource;

      var video = resource.videoDetailView || {};
      var user = _lodash2.default.cloneDeep(video.userBean || {});
      user.avatarUrl = _jsUtil2.default.convertToNosUrl(user.avatarUrl || _constant.IMGS.AVATAR, '116y116');
      user.isVip = _jsUtil2.default.isVipUser(user.authType);
      if (user.isVip) {
        user.s1 = user.authDescription;
      } else {
        user.s1 = user.age && user.age !== -1 ? user.age : '';
        if (user.s1 && user.skinType && user.skinType.name) {
          user.s1 += ' | ';
        }
        if (user.skinType && user.skinType.name) {
          user.s1 += user.skinType.name;
        }
      }
      return user;
    },

    // 视频统计信息
    videoSocialStat: function videoSocialStat(_ref3) {
      var resource = _ref3.resource;

      var video = resource.videoDetailView || {};
      var videoSocialStat = _lodash2.default.cloneDeep(video.videoSocialStat || {});
      var browseCnt = videoSocialStat.browseCnt;
      if (browseCnt >= 100000) {
        videoSocialStat.browseCnt = parseInt(browseCnt / 10000) + '万';
      }
      return videoSocialStat;
    },

    // 视频展示对象
    displayVideo: function displayVideo(_ref4) {
      var resource = _ref4.resource;

      var video = resource.videoDetailView || {};
      var vcontent = _lodash2.default.cloneDeep(video.vcontent || {});
      var duration = vcontent.duration;
      if (duration) {
        var hour = parseInt(duration / 60 / 60);
        var minute = parseInt(duration / 60 - hour * 60);
        var second = parseInt(duration % 60);
        duration = '';
        if (hour) duration += hour + ':';
        duration += minute + ':' + (second > 9 ? second : '0' + second);
      }
      video.duration = duration;
      // 取高清字段
      var url = vcontent.hdMp4Url || '';
      url = url.replace(/^http:/i, ''); // 处理视频云脏数据
      video.url = url;
      video.size = (vcontent.hdMp4Size / 1024 / 1024).toFixed(2) + 'M';
      return video;
    },

    currentUser: 'resource.userBean',
    // 是否登录
    isLogin: function isLogin(_ref5) {
      var resource = _ref5.resource;

      var currentUser = resource.userBean || {};
      return !!currentUser.id;
    },

    inApp: 'inApp',
    shareInfo: 'resource.shareInfo'
  }), (0, _vuex.mapGetters)(['isWifi'])),
  data: function data() {
    return {
      inBrowser: inBrowser,
      ready: false // 视频云资源是否加载完成
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.loadNep().then(function () {
      _this.ready = true;
    }, function () {
      _this.$store.commit('setError', {
        result: '资源加载失败'
      });
    });
  },

  methods: {
    // 手动加载视频云播放器相关代码
    loadNep: function loadNep() {
      var ctx = this;
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
          ctx.$nextTick(function () {
            target.appendChild(cssNode);
          });
        }
        if (!document.getElementById(nepScriptId)) {
          var scriptNode = document.createElement('script');
          callback && scriptNode.addEventListener("load", callback, false);
          scriptNode.id = nepScriptId;
          scriptNode.type = "text/javascript";
          scriptNode.src = scriptUrl;
          ctx.$nextTick(function () {
            target.appendChild(scriptNode);
          });
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

    // APP内分享
    share: function share() {
      var MZBridge = window.MZBridge;
      if (!MZBridge) {
        return;
      }
      var shareInfo = this.shareInfo || {};
      MZBridge.callHandler('share', {
        title: shareInfo.shareTitle,
        subTitle: shareInfo.subTitle,
        url: shareInfo.shareUrl,
        imageUrl: shareInfo.imageUrl
      });
    },

    // APP内跳转到用户个人信息页
    toProfilePage: function toProfilePage() {
      // 浏览器跳h5的个人主页
      if (!this.inApp) {
        this.$router.push('/user/' + this.author.id);
        return;
      }
      window.location.href = 'nemeixue://user/' + this.author.id;
    }
  },
  components: {
    comments: _comments2.default,
    recommend: _Recommend2.default,
    videoItem: _VideoItem2.default,
    productList: _productList2.default
  }
};

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _media = __webpack_require__(456);

var _media2 = _interopRequireDefault(_media);

var _constant = __webpack_require__(53);

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

exports.default = {
  props: {
    productList: {
      type: Array
    }
  },
  data: function data() {
    return {
      unfold: false,
      listStyle: {}
    };
  },

  computed: {
    productCount: function productCount() {
      return this.productList.length;
    },
    ARROW: function ARROW() {
      return _constant.IMGS.ARROW;
    },
    displayImgs: function displayImgs() {
      var productList = this.productList;
      productList = productList.filter(function (product) {
        return product.content.imageUrl && product.content.imageUrl.length;
      }).map(function (product) {
        return product.content.imageUrl;
      });

      if (productList.length > 3) {
        productList = productList.slice(0, 3);
      }

      return productList;
    }
  },
  components: {
    media: _media2.default
  },
  methods: {
    handleFold: function handleFold() {
      this.unfold = !this.unfold;
      var productList = this.$refs.productList;
      var media = this.$refs.media;
      if (this.unfold) {
        this.listStyle.height = productList.offsetHeight + media.$el.offsetHeight + 'px';
      } else {
        this.listStyle = {};
      }
    }
  }
};

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(786)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(694),
  /* template */
  __webpack_require__(1004),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-76345c2e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/video/detail/Recommend.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Recommend.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76345c2e", Component.options)
  } else {
    hotAPI.reload("data-v-76345c2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(716)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(695),
  /* template */
  __webpack_require__(933),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/video/detail/VideoItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VideoItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ee6dec0", Component.options)
  } else {
    hotAPI.reload("data-v-1ee6dec0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(713)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(697),
  /* template */
  __webpack_require__(929),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-126d06bf",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/video/detail/productList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] productList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-126d06bf", Component.options)
  } else {
    hotAPI.reload("data-v-126d06bf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "productList",
    staticClass: "product-list",
    style: (_vm.listStyle)
  }, [_c('div', {
    staticClass: "product-list__header",
    on: {
      "click": _vm.handleFold
    }
  }, [_c('span', [_vm._v("提及产品(" + _vm._s(_vm.productCount) + ")")]), (!_vm.unfold) ? _c('div', {
    staticClass: "imgs"
  }, _vm._l((_vm.displayImgs), function(img) {
    return _c('img', {
      attrs: {
        "src": img
      }
    })
  })) : _vm._e(), _c('div', {
    staticClass: "arrow",
    class: {
      'reverse': _vm.unfold
    }
  })]), _c('media', {
    ref: "media",
    attrs: {
      "medias": _vm.productList
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-126d06bf", module.exports)
  }
}

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-video"
  }, [_c('video', {
    ref: "video",
    staticClass: "video-js vjs-big-play-centered vjs-fluid",
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
  }, [(!_vm.usingNativeControls) ? _c('div', {
    staticClass: "play"
  }) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1ee6dec0", module.exports)
  }
}

/***/ })

});
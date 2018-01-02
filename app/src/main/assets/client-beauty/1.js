webpackJsonp([1],{

/***/ 1009:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.list.length > 0) ? _c('div', {
    staticClass: "recommend"
  }, [_c('div', {
    staticClass: "tlt"
  }, [_vm._v("相关推荐")]), _c('ul', _vm._l((_vm.list), function(note) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.toNote(note.url)
        }
      }
    }, [_c('img', {
      staticClass: "cover",
      attrs: {
        "src": note.coverImage
      }
    }), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "reason"
    }, [_vm._v(_vm._s(note.recommendReason))]), _c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(note.productName))]), _c('div', {
      staticClass: "text"
    }, [_c('span', {
      class: ['star', {
        red: note.highScore
      }]
    }, [_vm._v(_vm._s(note.star))]), (note.text) ? _c('span', {
      staticClass: "textContent"
    }, [_vm._v("｜" + _vm._s(note.text))]) : _vm._e()])])])
  }))]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c3c3362", module.exports)
  }
}

/***/ }),

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "m-note"
  }, [_c('div', {
    staticClass: "user"
  }, [_c('div', {
    staticClass: "avator",
    on: {
      "click": function($event) {
        _vm.toUserProfilePage(_vm.author.id)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.author.avatarUrl
    }
  }), (_vm.author.vip) ? _c('span', {
    staticClass: "vip"
  }) : _vm._e()]), _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "brief"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.author.name))]), _c('div', {
    staticClass: "s1"
  }, [_vm._v(_vm._s(_vm.author.s1))])]), _vm._l((5), function(i) {
    return _c('span', {
      key: i,
      staticClass: "star",
      class: {
        'star-1': i <= _vm.emotionMap[_vm.emotion].star
      }
    })
  }), _c('span', {
    staticClass: "s2"
  }, [_vm._v(_vm._s(_vm.emotionMap[_vm.emotion].text))])], 2)]), _c('div', {
    staticClass: "images"
  }, [_vm._l((_vm.images), function(image, index) {
    return (index < 4) ? _c('img', {
      key: image.url + index,
      attrs: {
        "src": image.url
      }
    }) : _vm._e()
  }), _vm._l((_vm.images), function(image, index) {
    return (index >= 4) ? _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (image.url),
        expression: "image.url"
      }],
      key: image.url + index
    }) : _vm._e()
  })], 2), _c('product-card', {
    attrs: {
      "product": _vm.product,
      "is-user-product": _vm.isUserProduct
    }
  }), _c('div', {
    staticClass: "moreinfo"
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.note.text))]), (_vm.note.displayPrice) ? _c('div', {
    staticClass: "price"
  }, [_c('div', [_vm._v("购买价格：")]), _c('div', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.note.displayPrice))])]) : _vm._e(), _c('div', {
    staticClass: "tags"
  }, _vm._l((_vm.note.tags), function(tag) {
    return _c('span', {
      key: tag.id,
      staticClass: "tag",
      on: {
        "click": function($event) {
          _vm.toTag(tag.id)
        }
      }
    }, [_vm._v(_vm._s(tag.name))])
  })), _c('div', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.note.leftTimeTip))])])], 1), (_vm.note.id) ? _c('comments', {
    attrs: {
      "res-id": _vm.note.id,
      "res-type": 2
    }
  }) : _vm._e(), _c('recommend', {
    attrs: {
      "res-id": _vm.note.id
    }
  }), _c('app-more', {
    attrs: {
      "text": "查看更多精彩内容"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8b56cdf6", module.exports)
  }
}

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(795)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(644),
  /* template */
  __webpack_require__(1013),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-8b56cdf6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/note/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8b56cdf6", Component.options)
  } else {
    hotAPI.reload("data-v-8b56cdf6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(724)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(654),
  /* template */
  __webpack_require__(941),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2be334de",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/question/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2be334de", Component.options)
  } else {
    hotAPI.reload("data-v-2be334de", Component.options)
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

/***/ 472:
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

/***/ 517:
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

var _vuex = __webpack_require__(32);

var Util =  true ? __webpack_require__(69) : null;
exports.default = {
  props: ['product', 'isUserProduct', 'isScreencapture'],
  computed: _extends({}, (0, _vuex.mapState)({
    inMiniProgram: 'inMiniProgram'
  })),
  methods: {
    toProduct: function toProduct(url) {
      if (this.inMiniProgram) {
        Util.callApp();
      } else if (url) {
        this.$router.push(url);
      }
    },
    callApp: function callApp() {
      Util.callApp();
    }
  }
};

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(522)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(517),
  /* template */
  __webpack_require__(553),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-47a5db92",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/note/components/ProductCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProductCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47a5db92", Component.options)
  } else {
    hotAPI.reload("data-v-47a5db92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "iteminfo",
    on: {
      "click": function($event) {
        _vm.toProduct(!_vm.isUserProduct ? '/product/' + _vm.product.id : null)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.product.imageUrl
    }
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
     require("vue-hot-reload-api").rerender("data-v-47a5db92", module.exports)
  }
}

/***/ }),

/***/ 643:
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

var _vuex = __webpack_require__(32);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _constant = __webpack_require__(53);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;
var initialData = {
  recommendList: [],
  defaultImg: _jsUtil2.default.convertToNosUrl(_constant.IMGS.DEFAULT_IMG, '337y337')
};
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
  computed: _extends({}, (0, _vuex.mapState)({
    inMiniProgram: 'inMiniProgram'
  }), {
    list: function list() {
      var _this = this;

      return this.recommendList.map(function (item) {
        var note = _lodash2.default.cloneDeep(item);
        if (note.imageArray && note.imageArray.length) {
          note.coverImage = _jsUtil2.default.convertToNosUrl(note.imageArray[0], '337y337');
        } else {
          note.coverImage = _this.defaultImg;
        }
        if (note.emotion === 0) {
          note.star = '未评价';
        } else {
          note.star = 6 - note.emotion + '星';
        }
        note.highScore = note.emotion && note.emotion >= 1 && note.emotion <= 3;
        note.url = '/note/' + item.id + '?abtest=' + item.abtest + '&pvid=' + item.pvid;
        return note;
      });
    }
  }),
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
      var _this2 = this;

      (0, _fetch2.default)('/api/note/' + this.resId + '/recommend').then(function (data) {
        _this2.recommendList = data.result || [];
      }, function (json) {
        alert(json.msg || '获取相关心得失败');
      });
    },
    toNote: function toNote(url) {
      if (this.inMiniProgram) {
        Util.callApp();
      } else if (url) {
        this.$router.push(url);
      }
    }
  }
};

/***/ }),

/***/ 644:
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
//
//
//
//
//
//
//
//

var _vuex = __webpack_require__(32);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _constant = __webpack_require__(53);

var _comments = __webpack_require__(450);

var _comments2 = _interopRequireDefault(_comments);

var _Recommend = __webpack_require__(881);

var _Recommend2 = _interopRequireDefault(_Recommend);

var _ProductCard = __webpack_require__(547);

var _ProductCard2 = _interopRequireDefault(_ProductCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inBrowser = true;
var Util = inBrowser ? __webpack_require__(69) : null;

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)({
    note: 'resource',
    author: function author(_ref) {
      var resource = _ref.resource;

      var author = _lodash2.default.cloneDeep(resource.author || {});
      author.avatarUrl = _jsUtil2.default.convertToNosUrl(author.avatarUrl || _constant.IMGS.AVATAR, '116y116');
      author.vip = _jsUtil2.default.isVipUser(author.authType);
      author.s1 = author.age || '';
      if (author.age && author.skinType) {
        author.s1 += ' | ';
      }
      if (author.skinType) {
        author.s1 += author.skinType;
      }
      return author;
    },
    emotion: function emotion(_ref2) {
      var resource = _ref2.resource;

      return resource.emotion || 0;
    },
    images: function images(_ref3) {
      var resource = _ref3.resource;

      var images = _lodash2.default.cloneDeep(resource.images || []);
      _lodash2.default.forEach(images, function (image) {
        if (image) {
          image.url = _jsUtil2.default.convertToNosUrl(image.url, '750x0');
        }
      });
      return images;
    },
    product: function product(_ref4) {
      var resource = _ref4.resource;

      var product = _lodash2.default.cloneDeep(resource.product || {});
      var imageUrl = product.imageUrl || _constant.IMGS.DEFAULT_IMG;
      if (imageUrl) {
        product.imageUrl = _jsUtil2.default.convertToNosUrl(imageUrl, '166y166');
      }
      return product;
    },

    // 是否为用户自定义商品
    isUserProduct: function isUserProduct(_ref5) {
      var resource = _ref5.resource;

      return resource.productType === 8;
    },

    inMiniProgram: 'inMiniProgram'
  })),
  data: function data() {
    return {
      inBrowser: inBrowser,
      emotionMap: {
        "0": {
          "star": 0,
          "text": "未评价"
        },
        "5": {
          "star": 1,
          "text": "慢走不送"
        },
        "4": {
          "star": 2,
          "text": "不太好用"
        },
        "3": {
          "star": 3,
          "text": "一般般啦"
        },
        "2": {
          "star": 4,
          "text": "还不错哟"
        },
        "1": {
          "star": 5,
          "text": "好用到哭"
        }
      }
    };
  },

  methods: {
    toProduct: function toProduct(url) {
      if (this.inMiniProgram) {
        this.callApp();
      } else if (url) {
        this.$router.push(url);
      }
    },
    toTag: function toTag(id) {
      if (this.inMiniProgram) {
        this.callApp();
      } else {
        this.$router.push('/tag/' + id);
      }
    },
    callApp: function callApp() {
      Util.callApp();
    },
    toUserProfilePage: function toUserProfilePage(id) {
      if (this.inMiniProgram) {
        this.callApp();
      } else {
        this.$router.push('/user/' + id);
      }
    }
  },
  components: {
    comments: _comments2.default,
    recommend: _Recommend2.default,
    productCard: _ProductCard2.default
  }
};

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _Avatar = __webpack_require__(435);

var _Avatar2 = _interopRequireDefault(_Avatar);

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
//

exports.default = {
  props: {
    answer: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    displayAnswer: function displayAnswer() {
      var answer = _lodash2.default.cloneDeep(this.answer);
      var author = answer.author || {};

      var allImages = (answer.images || []).map(function (image) {
        return _jsUtil2.default.convertToNosUrl(image, '160y160');
      });
      var images = allImages.slice(0, 3);
      var hasMoreImages = allImages.length > 3;

      var socialStat = answer.socialStat || {};
      var praiseCount = _jsUtil2.default.getDisplayCount(socialStat.praiseCount);
      var commentCount = _jsUtil2.default.getDisplayCount(socialStat.commentCount);
      var authorReply = answer.authorReply || {};
      var replyUser = authorReply && authorReply.author ? authorReply.author.nickname : '';

      return {
        id: answer.id,
        author: author,
        name: author.name,
        updateTime: answer.updateTime,
        description: answer.description,
        images: images,
        hasMoreImages: hasMoreImages,
        praiseCount: praiseCount,
        commentCount: commentCount,
        link: '/answer/' + answer.id,
        authorReply: answer.authorReply,
        replyUser: replyUser
      };
    }
  },
  methods: {
    launchApp: function launchApp() {
      Util.callApp();
    },
    toAnswer: function toAnswer(link) {
      this.$router.push(link);
    }
  },
  components: {
    avatar: _Avatar2.default
  }
};

/***/ }),

/***/ 654:
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

var _vuex = __webpack_require__(32);

var _comments = __webpack_require__(450);

var _comments2 = _interopRequireDefault(_comments);

var _Avatar = __webpack_require__(435);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Answer = __webpack_require__(887);

var _Answer2 = _interopRequireDefault(_Answer);

var _NoContent = __webpack_require__(455);

var _NoContent2 = _interopRequireDefault(_NoContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)({
    question: 'resource'
  }), {
    item: function item() {
      var question = this.question || {};
      var description = question.description || '';
      return description.split('\n');
    },
    resType: function resType() {
      var question = this.question || {};
      var shareInfo = question.shareInfo || {};
      return shareInfo.resType;
    },
    answers: function answers() {
      return this.question && this.question.answers || [];
    }
  }),
  methods: {
    launchApp: function launchApp() {
      Util.callApp();
    }
  },
  components: {
    comments: _comments2.default,
    avatar: _Avatar2.default,
    answer: _Answer2.default,
    empty: _NoContent2.default
  }
};

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(791)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(643),
  /* template */
  __webpack_require__(1009),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7c3c3362",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/note/detail/Recommend.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Recommend.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c3c3362", Component.options)
  } else {
    hotAPI.reload("data-v-7c3c3362", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(743)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(653),
  /* template */
  __webpack_require__(960),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-44503da2",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/question/detail/Answer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Answer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44503da2", Component.options)
  } else {
    hotAPI.reload("data-v-44503da2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "question"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.question.title))]), _c('div', {
    staticClass: "description"
  }, [_vm._l((_vm.item), function(item) {
    return [_vm._v("\n          " + _vm._s(item)), _c('br')]
  })], 2), _c('button', {
    on: {
      "click": _vm.launchApp
    }
  }, [_vm._v("+ 关注")])]), _c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.question.answerCount) + "个回答")]), (_vm.answers.length > 0) ? _c('div', _vm._l((_vm.answers), function(answer) {
    return _c('answer', {
      key: answer.id,
      attrs: {
        "answer": answer
      }
    })
  })) : _c('empty', {
    attrs: {
      "text": "还没有回答"
    }
  })], 1)]), _c('app-more', {
    attrs: {
      "text": "查看更多精彩内容"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2be334de", module.exports)
  }
}

/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "answer",
    on: {
      "click": function($event) {
        _vm.toAnswer(_vm.displayAnswer.link)
      }
    }
  }, [_c('div', {
    staticClass: "info"
  }, [_c('avatar', {
    attrs: {
      "user": _vm.displayAnswer.author
    }
  }), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.displayAnswer.name))]), _c('div', [_vm._v(_vm._s(_vm.displayAnswer.updateTime))])], 1), _c('div', {
    staticClass: "cnt"
  }, [(_vm.displayAnswer.description) ? _c('div', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.displayAnswer.description))]) : _vm._e(), (_vm.displayAnswer.images.length > 0) ? _c('div', {
    staticClass: "imgs"
  }, [_vm._l((_vm.displayAnswer.images), function(image) {
    return _c('img', {
      attrs: {
        "src": image
      }
    })
  }), (_vm.displayAnswer.hasMoreImages) ? _c('span', {
    staticClass: "moreimg"
  }) : _vm._e()], 2) : _vm._e()]), _c('div', {
    staticClass: "social"
  }, [_c('span', {
    staticClass: "u-praise",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.launchApp($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.displayAnswer.praiseCount || '点赞'))]), _c('span', {
    staticClass: "u-comment"
  }, [_vm._v(_vm._s(_vm.displayAnswer.commentCount || '评论'))])]), (_vm.displayAnswer.authorReply) ? _c('div', {
    staticClass: "reply"
  }, [_c('div', {
    staticClass: "reply-content"
  }, [_c('span', {
    staticClass: "reply-author"
  }, [_vm._v(_vm._s(_vm.displayAnswer.replyUser))]), _vm._v("：" + _vm._s(_vm.displayAnswer.authorReply.content) + "\n    ")])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44503da2", module.exports)
  }
}

/***/ })

});
webpackJsonp([17],{

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(723)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(635),
  /* template */
  __webpack_require__(940),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2b2e9a25",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/event/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b2e9a25", Component.options)
  } else {
    hotAPI.reload("data-v-2b2e9a25", Component.options)
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

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _constant = __webpack_require__(53);

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Util =  true ? __webpack_require__(69) : null;

exports.default = {
  props: {
    rawList: { require: true },
    needBtn: {
      type: Boolean, // 不传值时默认为false
      require: true
    }
  },
  data: function data() {
    return {
      starMap: {
        0: {
          "star": 0,
          "text": "未评价"
        },
        5: {
          "star": 1,
          "text": "慢走不送"
        },
        4: {
          "star": 2,
          "text": "不太好用"
        },
        3: {
          "star": 3,
          "text": "一般般啦"
        },
        2: {
          "star": 4,
          "text": "还不错哟"
        },
        1: {
          "star": 5,
          "text": "好用到哭"
        }
      },
      showBtn: this.needBtn && this.rawList.total > 0,
      defaultImg: _jsUtil2.default.convertToNosUrl(_constant.IMGS.DEFAULT_IMG, '373y373'),
      avatarImg: _jsUtil2.default.convertToNosUrl(_constant.IMGS.AVATAR, '66y66')
    };
  },

  computed: {
    list: function list() {
      var self = this;
      return this.rawList.list.map(function (note) {
        var newNote = _lodash2.default.cloneDeep(note);
        // 心得图片
        if (newNote.imageArray && newNote.imageArray.length) {
          newNote.imageArray = newNote.imageArray.map(function (img) {
            return _jsUtil2.default.convertToNosUrl(img, '373y373', { force: true });
          });
        } else {
          newNote.imageArray = [self.defaultImg];
        }
        // 心得作者头像
        var avatarUrl = newNote.author && newNote.author.avatarUrl;
        if (avatarUrl) {
          newNote.author.avatarUrl = _jsUtil2.default.convertToNosUrl(avatarUrl, '66y66');
        } else {
          newNote.author = {
            avatarUrl: self.avatarImg,
            nickname: note.author && note.author.nickname || ''
          };
        }
        // 心得点赞数
        newNote.displayPraisedCount = note.praisedCount > 0 ? _jsUtil2.default.getDisplayCount(note.praisedCount) : '0';
        newNote.productName = note.nameMap && note.nameMap.productNameList ? note.nameMap.productNameList[0] : '';
        return newNote;
      });
    }
  },
  methods: {
    callApp: function callApp() {
      Util.callApp();
    },
    toUserProfilePage: function toUserProfilePage(id) {
      if (!this.$beauty.inApp) {
        this.$router.push('/user/' + id);
        return;
      }

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
};

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(477)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(463),
  /* template */
  __webpack_require__(495),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a07186c0",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/note.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] note.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a07186c0", Component.options)
  } else {
    hotAPI.reload("data-v-a07186c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-noteList"
  }, [(_vm.rawList.total > 0) ? _c('ul', _vm._l((_vm.list), function(note) {
    return _c('li', [_c('router-link', {
      attrs: {
        "to": '/note/' + note.id
      }
    }, [_c('div', {
      staticClass: "imgWrapper"
    }, [_c('img', {
      staticClass: "headPic",
      attrs: {
        "src": note.imageArray && note.imageArray.length ? note.imageArray[0] : _vm.defaultImg
      }
    })]), _c('div', {
      staticClass: "noteInfo"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(note.productName))]), _c('div', {
      staticClass: "text"
    }, [_c('span', {
      class: ['star', {
        highStar: note.emotion && note.emotion < 4
      }]
    }, [_vm._v(_vm._s(_vm.starMap[note.emotion].star) + "星")]), (note.text) ? _c('span', {
      staticClass: "textContent"
    }, [_vm._v("｜" + _vm._s(note.text))]) : _vm._e()])])]), _c('div', {
      staticClass: "userInfo"
    }, [(note.author && note.author.avatarUrl) ? _c('img', {
      staticClass: "avatar",
      attrs: {
        "src": note.author.avatarUrl
      },
      on: {
        "click": function($event) {
          _vm.toUserProfilePage(note.author.id)
        }
      }
    }) : _c('img', {
      staticClass: "avatar",
      attrs: {
        "src": _vm.avatarImg
      },
      on: {
        "click": function($event) {
          _vm.toUserProfilePage(note.author.id)
        }
      }
    }), (note.author) ? _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(note.author.nickname))]) : _vm._e(), _c('div', {
      staticClass: "u-praise",
      on: {
        "click": _vm.callApp
      }
    }, [_vm._v(_vm._s(note.displayPraisedCount || '0'))])])], 1)
  })) : _vm._e(), (_vm.showBtn) ? _c('app-more', {
    attrs: {
      "text": "查看更多真实心得"
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a07186c0", module.exports)
  }
}

/***/ }),

/***/ 505:
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

exports.default = {
  props: {
    'wrapStyle': Object // 外层包裹容器的自定义样式
  },
  data: function data() {
    return {
      defaultImg: '//beauty.nosdn.127.net/beauty/img/6a6b2317-2b61-4cc2-955a-d2c0ecf4b125.png?imageView&quality=95&thumbnail=80y80'
    };
  }
};

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _constant = __webpack_require__(53);

var _toast = __webpack_require__(428);

var _toast2 = _interopRequireDefault(_toast);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

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
//
//
//
//
//
//
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
    rawList: { require: true },
    needBtn: {
      type: Boolean, // 不传值时默认为false
      require: true
    }
  },
  data: function data() {
    return {
      showBtn: this.needBtn && this.rawList.total > 0,
      defaultImg: _jsUtil2.default.convertToNosUrl(_constant.IMGS.DEFAULT_IMG, '350y200'),
      avatarImg: _jsUtil2.default.convertToNosUrl(_constant.IMGS.AVATAR, '40y40')
    };
  },

  computed: {
    list: function list() {
      var self = this;
      return this.rawList.list.map(function (repo) {
        var newRepo = _lodash2.default.cloneDeep(repo);
        var imageUrl = newRepo.imageUrl;
        if (imageUrl) {
          newRepo.imageUrl = _jsUtil2.default.convertToNosUrl(imageUrl, '350y200', { force: true });
        } else {
          newRepo.imageUrl = self.defaultImg;
        }
        if (repo.tags && repo.tags.length > 2) {
          newRepo.tags = repo.tags.slice(0, 2);
        } else {
          newRepo.tags = repo.tags || [];
        }
        var avatarUrl = newRepo.author && newRepo.author.avatarUrl;
        if (avatarUrl) {
          newRepo.author.avatarUrl = _jsUtil2.default.convertToNosUrl(avatarUrl, '40y40');
        } else {
          newRepo.author = {
            avatarUrl: self.avatarImg,
            nickname: repo.author && repo.author.nickname || ''
          };
        }
        newRepo.readCount = newRepo.readCount > 99999 ? 99999 : newRepo.readCount;
        return newRepo;
      });
    }
  },
  methods: {
    toUserProfilePage: function toUserProfilePage(id) {
      if (!this.$beauty.inApp) {
        this.$router.push('/user/' + id);
        return;
      }

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
};

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(532)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(505),
  /* template */
  __webpack_require__(563),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e613ede2",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/empty.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] empty.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e613ede2", Component.options)
  } else {
    hotAPI.reload("data-v-e613ede2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(521)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(506),
  /* template */
  __webpack_require__(552),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-38072820",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/repo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] repo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38072820", Component.options)
  } else {
    hotAPI.reload("data-v-38072820", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-repoList"
  }, [(_vm.rawList.total > 0) ? _c('ul', _vm._l((_vm.list), function(repo) {
    return _c('li', [_c('div', {
      staticClass: "m-repo"
    }, [_c('router-link', {
      attrs: {
        "to": '/repo/' + repo.id
      }
    }, [_c('img', {
      attrs: {
        "src": repo.imageUrl
      }
    })]), _c('div', {
      staticClass: "info"
    }, [_c('router-link', {
      attrs: {
        "to": '/repo/' + repo.id
      }
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(repo.title))]), (repo.tags.length > 0) ? _c('div', {
      staticClass: "tags"
    }, _vm._l((repo.tags), function(tag) {
      return _c('span', [_vm._v("#" + _vm._s(tag.name) + " ")])
    })) : _vm._e()]), _c('div', {
      staticClass: "user"
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": repo.author.avatarUrl
      },
      on: {
        "click": function($event) {
          _vm.toUserProfilePage(repo.author.id)
        }
      }
    }), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(repo.author.nickname))]), _c('div', {
      staticClass: "scan"
    }, [_vm._v(_vm._s(repo.readCount))])])], 1)], 1)])
  })) : _vm._e(), (_vm.showBtn) ? _c('app-more', {
    attrs: {
      "text": "查看更多精彩合辑"
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-38072820", module.exports)
  }
}

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-empty",
    style: (_vm.wrapStyle)
  }, [_c('div', {
    staticClass: "wrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.defaultImg
    }
  }), _c('p', [_vm._v("还没有内容")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e613ede2", module.exports)
  }
}

/***/ }),

/***/ 635:
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

var _vuex = __webpack_require__(32);

var _repo = __webpack_require__(536);

var _repo2 = _interopRequireDefault(_repo);

var _note = __webpack_require__(482);

var _note2 = _interopRequireDefault(_note);

var _empty = __webpack_require__(535);

var _empty2 = _interopRequireDefault(_empty);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)({
    tag: function tag(_ref) {
      var resource = _ref.resource;

      var tag = _lodash2.default.cloneDeep(resource.tag || {});
      tag.backgroundUrl = _jsUtil2.default.convertToNosUrl(tag.backgroundUrl);
      return tag;
    },
    selectedList: function selectedList(_ref2) {
      var resource = _ref2.resource;

      return resource.selectedList || [];
    },
    unselectedList: function unselectedList(_ref3) {
      var resource = _ref3.resource;

      return resource.unselectedList || [];
    }
  })),
  data: function data() {
    return {
      tagMap: {
        "1": {
          "type": "repo",
          "text": "合辑"
        },
        "2": {
          "type": "note",
          "text": "心得"
        }
      }
    };
  },

  components: {
    repo: _repo2.default,
    note: _note2.default,
    empty: _empty2.default
  }
};

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-activity"
  }, [_c('div', {
    staticClass: "m-activityInfo"
  }, [_c('img', {
    attrs: {
      "src": _vm.tag.backgroundUrl
    }
  }), _c('div', {
    staticClass: "cover"
  }), _c('div', {
    staticClass: "m-tagName"
  }, [_vm._v(_vm._s(_vm.tag.name))])]), (_vm.tag.text && _vm.tag.text.length) ? _c('div', {
    staticClass: "m-desc"
  }, [_vm._v(_vm._s(_vm.tag.text))]) : _vm._e(), (_vm.selectedList.total + _vm.unselectedList.total) ? _c('div', [_c('div', {
    staticClass: "m-list"
  }, [_c('div', {
    staticClass: "m-hotList"
  }, [_c('p', {
    staticClass: "label"
  }, [_vm._v("精选")]), (_vm.selectedList.total) ? _c(_vm.tagMap[_vm.tag.subType].type, {
    tag: "div",
    attrs: {
      "raw-list": _vm.selectedList,
      "need-btn": false
    }
  }) : _c('empty', {
    attrs: {
      "wrap-style": {
        height: '6.667rem',
        marginTop: '-0.453rem'
      }
    }
  })], 1), (_vm.unselectedList.total) ? _c('div', {
    staticClass: "m-moreList",
    class: {
      'm-moreRepo': _vm.tag.subType == 1
    }
  }, [_c('p', {
    staticClass: "label"
  }, [_vm._v("更多" + _vm._s(_vm.tagMap[_vm.tag.subType].text))]), _c(_vm.tagMap[_vm.tag.subType].type, {
    tag: "div",
    attrs: {
      "raw-list": _vm.unselectedList,
      "need-btn": false
    }
  })]) : _vm._e()]), _c('div', {
    staticClass: "{'m-note-btn': tag.subType == 2}"
  }, [_c('app-more', {
    attrs: {
      "text": "立即参与活动"
    }
  })], 1)]) : _c('div', [_c('div', {
    staticClass: "m-list"
  }), _c('empty', {
    attrs: {
      "wrap-style": {
        height: '8rem',
        marginBottom: '-0.56rem'
      }
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b2e9a25", module.exports)
  }
}

/***/ })

});
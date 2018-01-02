webpackJsonp([16],{

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-answerList"
  }, [(_vm.answerList.length > 0) ? _c('ul', _vm._l((_vm.displayList), function(answer) {
    return _c('li', {
      staticClass: "m-answer"
    }, [_c('router-link', {
      attrs: {
        "to": '/answer/' + answer.id
      }
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(answer.title))]), _c('div', {
      staticClass: "content"
    }, [_vm._v(_vm._s(answer.authorName) + "：" + _vm._s(answer.content))]), (answer.images.length > 0) ? _c('div', {
      staticClass: "images"
    }, [_vm._l((answer.displayImages), function(image) {
      return _c('img', {
        attrs: {
          "src": image
        }
      })
    }), (answer.images.length > 3) ? _c('span', {
      staticClass: "moreimg"
    }) : _vm._e()], 2) : _vm._e()]), _c('div', {
      staticClass: "data"
    }, [_c('div', {
      staticClass: "u-praise",
      on: {
        "click": _vm.callApp
      }
    }, [_vm._v(_vm._s(answer.praisedCount || '0'))])])], 1)
  })) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8f5b3600", module.exports)
  }
}

/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-repoList"
  }, [(_vm.repoList.length > 0) ? _c('ul', _vm._l((_vm.list), function(repo) {
    return _c('li', [_c('router-link', {
      attrs: {
        "to": '/repo/' + repo.id
      }
    }, [_c('div', {
      staticClass: "m-repo"
    }, [_c('img', {
      attrs: {
        "src": repo.imageUrl
      }
    }), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(repo.title))]), _c('div', {
      staticClass: "user"
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": repo.author.avatarUrl
      }
    }), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(repo.author.nickname))]), _c('div', {
      staticClass: "scan"
    }, [_vm._v(_vm._s(repo.readCount))])])])])])], 1)
  })) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c5ee2d98", module.exports)
  }
}

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(717)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(671),
  /* template */
  __webpack_require__(934),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-26a47900",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/tag/knowledge/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26a47900", Component.options)
  } else {
    hotAPI.reload("data-v-26a47900", Component.options)
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

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

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

var Util =  true ? __webpack_require__(69) : null;

exports.default = {
  props: {
    answerList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    displayList: function displayList() {
      return this.answerList.map(function (answer) {
        var displayAnswer = _lodash2.default.cloneDeep(answer);
        displayAnswer.authorName = answer.author && answer.author.nickname ? answer.author.nickname : '';
        if (answer.images.length > 0) {
          displayAnswer.displayImages = answer.images.slice(0, 3).map(function (image) {
            return _jsUtil2.default.convertToNosUrl(image, '160y160');
          });
        }
        displayAnswer.praisedCount = answer.praisedCount > 0 ? _jsUtil2.default.getDisplayCount(answer.praisedCount) : '0';
        return displayAnswer;
      });
    }
  },
  methods: {
    callApp: function callApp() {
      Util.callApp();
    }
  }
};

/***/ }),

/***/ 671:
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

var _vuex = __webpack_require__(32);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _note = __webpack_require__(482);

var _note2 = _interopRequireDefault(_note);

var _repo = __webpack_require__(898);

var _repo2 = _interopRequireDefault(_repo);

var _answer = __webpack_require__(897);

var _answer2 = _interopRequireDefault(_answer);

var _video = __webpack_require__(899);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TAB_MAP = {
  REPO: 3,
  NOTE: 2,
  VIDEO: 20,
  ANSWER: 35
};
exports.default = {
  computed: _extends({}, (0, _vuex.mapState)({
    knowledges: function knowledges(_ref) {
      var _this = this;

      var resource = _ref.resource;

      var knowledges = resource.list || [];
      return knowledges.map(function (knowledge) {
        var computedKnowledge = _lodash2.default.cloneDeep(knowledge);
        computedKnowledge.block = _this.getBlock(knowledge);
        return computedKnowledge;
      });
    }
  })),
  mounted: function mounted() {
    var hash = this.$route.hash;
    if (hash) {
      var el = this.$el.querySelector(hash);
      var top = el.offsetTop - window.rem * 2;

      setTimeout(function () {
        window.scrollTo(0, top);
      }, 0);
    }
  },

  methods: {
    // 获取当前知识点需要加载的内容模块
    getBlock: function getBlock(knowledge) {
      var block = {
        type: '',
        data: {}
      };
      switch (knowledge.type) {
        case TAB_MAP.REPO:
          {
            block.type = 'repos';
            block.data = {
              'repo-list': knowledge.itemList
            };
            break;
          }
        case TAB_MAP.NOTE:
          {
            block.type = 'notes';
            block.data = {
              'raw-list': {
                list: knowledge.itemList,
                total: knowledge.itemList.length
              },
              'need-btn': false
            };
            break;
          }
        case TAB_MAP.ANSWER:
          {
            block.type = 'answers';
            block.data = {
              'answer-list': knowledge.itemList
            };
            break;
          }
        case TAB_MAP.VIDEO:
          {
            block.type = 'videos';
            block.data = {
              'video-list': knowledge.itemList
            };
            break;
          }
      }
      return block;
    }
  },
  components: {
    repos: _repo2.default,
    notes: _note2.default,
    answers: _answer2.default,
    videos: _video2.default
  }
};

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _constant = __webpack_require__(53);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    repoList: { require: true }
  },
  data: function data() {
    return {
      defaultImg: _jsUtil2.default.convertToNosUrl(_constant.IMGS.DEFAULT_IMG, '354y236'),
      avatarImg: _jsUtil2.default.convertToNosUrl(_constant.IMGS.AVATAR, '66y66')
    };
  },

  computed: {
    list: function list() {
      var self = this;
      return this.repoList.map(function (repo) {
        var newRepo = _lodash2.default.cloneDeep(repo);
        var imageUrl = newRepo.imageUrl;
        if (imageUrl) {
          newRepo.imageUrl = _jsUtil2.default.convertToNosUrl(imageUrl, '354y236');
        } else {
          newRepo.imageUrl = self.defaultImg;
        }
        var avatarUrl = newRepo.author && newRepo.author.avatarUrl;
        if (avatarUrl) {
          newRepo.author.avatarUrl = _jsUtil2.default.convertToNosUrl(avatarUrl, '66y66');
        } else {
          newRepo.author = {
            avatarUrl: self.avatarImg,
            nickname: repo.author && repo.author.nickname || ''
          };
        }
        var readCount = newRepo.readCount;
        newRepo.readCount = readCount > 0 ? _jsUtil2.default.getDisplayCount(readCount) : '0';
        return newRepo;
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
//

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

var _constant = __webpack_require__(53);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    videoList: { require: true }
  },
  data: function data() {
    return {
      defaultImg: _jsUtil2.default.convertToNosUrl(_constant.IMGS.DEFAULT_IMG, '750y400'),
      avatarImg: _jsUtil2.default.convertToNosUrl(_constant.IMGS.AVATAR, '56y56')
    };
  },

  computed: {
    list: function list() {
      var self = this;
      return this.videoList.map(function (video) {
        var newVideo = _lodash2.default.cloneDeep(video);
        if (video.id && video.abtest && video.pvid) {
          newVideo.link = '/video/' + video.id + '?abtest=' + video.abtest + '&pvid=' + video.pvid;
        } else {
          newVideo.link = '/video/' + video.id;
        }
        // 封面裁剪
        var coverImg = newVideo.coverImg;
        if (coverImg) {
          newVideo.coverImg = _jsUtil2.default.convertToNosUrl(coverImg, '750y400');
        } else {
          newVideo.coverImg = self.defaultImg;
        }
        // 作者信息处理
        var avatarUrl = newVideo.author && newVideo.author.avatarUrl;
        if (avatarUrl) {
          newVideo.author.avatarUrl = _jsUtil2.default.convertToNosUrl(avatarUrl, '56y56');
        } else {
          newVideo.author = {
            avatarUrl: self.avatarImg,
            nickname: newVideo.author && newVideo.author.nickname || ''
          };
        }
        // 播放时长处理
        var duration = video.duration;
        newVideo.duration = _jsUtil2.default.getVideoDuration(duration);
        // 浏览数处理
        var readCount = video.readCount;
        newVideo.readCount = _jsUtil2.default.getDisplayCount(readCount);
        return newVideo;
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
//
//
//
//
//

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(798)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(670),
  /* template */
  __webpack_require__(1016),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-8f5b3600",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/tag/knowledge/answer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] answer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8f5b3600", Component.options)
  } else {
    hotAPI.reload("data-v-8f5b3600", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(815)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(672),
  /* template */
  __webpack_require__(1034),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-c5ee2d98",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/tag/knowledge/repo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] repo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5ee2d98", Component.options)
  } else {
    hotAPI.reload("data-v-c5ee2d98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(777)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(673),
  /* template */
  __webpack_require__(994),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6c42b2a9",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/tag/knowledge/video.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] video.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c42b2a9", Component.options)
  } else {
    hotAPI.reload("data-v-6c42b2a9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "m-knowledges",
    attrs: {
      "id": 'list'
    }
  }, _vm._l((_vm.knowledges), function(knowledge, index) {
    return _c('li', {
      staticClass: "m-knowledge",
      attrs: {
        "id": 'anchor-' + index
      }
    }, [_c('div', {
      staticClass: "title"
    }, [_c('span', [_vm._v(_vm._s(knowledge.title))])]), (knowledge.type) ? _c(knowledge.block.type, _vm._b({
      tag: "div"
    }, 'div', knowledge.block.data, false)) : _vm._e(), (index < _vm.knowledges.length - 1) ? _c('div', {
      staticClass: "seperator"
    }) : _vm._e()])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-26a47900", module.exports)
  }
}

/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-videoList"
  }, [(_vm.videoList.length > 0) ? _c('ul', _vm._l((_vm.list), function(video) {
    return _c('li', [_c('router-link', {
      attrs: {
        "to": video.link
      }
    }, [_c('div', {
      staticClass: "m-video"
    }, [_c('div', {
      staticClass: "cover"
    }, [_c('img', {
      attrs: {
        "src": video.coverImg
      }
    }), _c('span', {
      staticClass: "mask"
    }), _c('span', {
      staticClass: "duration"
    }, [_vm._v(_vm._s(video.duration))])]), _c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(video.title))]), _c('div', {
      staticClass: "author"
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": video.author.avatarUrl
      }
    }), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(video.author.nickname))]), _c('div', {
      staticClass: "data"
    }, [_c('span', {
      staticClass: "icon play"
    }), _c('span', [_vm._v(_vm._s(video.readCount))])])])])])], 1)
  })) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6c42b2a9", module.exports)
  }
}

/***/ })

});
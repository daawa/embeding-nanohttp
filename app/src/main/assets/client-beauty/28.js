webpackJsonp([28],{

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "m-brandInfo",
    class: {
      "m-brandInfo-1": !_vm.displayBrand.appCoverUrl
    }
  }, [(_vm.displayBrand.appCoverUrl) ? _c('img', {
    staticClass: "cover",
    attrs: {
      "src": _vm.displayBrand.appCoverUrl
    }
  }) : _vm._e(), _c('div', {
    staticClass: "info"
  }, [_c('img', {
    attrs: {
      "src": _vm.displayBrand.logoUrl
    }
  }), _c('div', {
    staticClass: "cnt"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.displayBrand.displayName))]), _c('div', {
    staticClass: "location"
  }, [_vm._v(_vm._s(_vm.displayBrand.foundingTime) + " " + _vm._s(_vm.displayBrand.address))])])])]), (_vm.displayBrand.repos.total != 0 || _vm.displayBrand.notes.total != 0) ? _c('tabs', {
    attrs: {
      "currentIndex": _vm.tabIndex
    },
    on: {
      "update:currentIndex": function($event) {
        _vm.tabIndex = $event
      }
    }
  }) : _vm._e(), (_vm.tabIndex == 0) ? _c('div', [(_vm.displayBrand.newProducts.total != 0) ? _c('div', {
    staticClass: "m-products m-products-0"
  }, [_c('div', {
    staticClass: "w-title"
  }, [_vm._v("新品")]), _c('ul', _vm._l((_vm.displayBrand.newProducts.list), function(p, index) {
    return _c('li', [_c('router-link', {
      staticClass: "item",
      class: {
        "item-0": index == 0
      },
      attrs: {
        "to": '/product/' + p.id
      }
    }, [_c('img', {
      attrs: {
        "src": p.coverUrl
      }
    }), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "zhName"
    }, [_vm._v(_vm._s(p.zhName))]), _c('div', {
      staticClass: "publishTime"
    }, [_vm._v(_vm._s(p.publishTime) + "发售")]), (p.noteCount > 0) ? _c('div', {
      staticClass: "noteCount"
    }, [_vm._v(_vm._s(p.noteCount) + "篇心得")]) : _vm._e()]), _c('div', {
      staticClass: "more"
    })])], 1)
  })), (_vm.displayBrand.newProducts.total > 3) ? _c('div', {
    staticClass: "w-more",
    on: {
      "click": _vm.launchApp
    }
  }, [_vm._v("\n          查看更多新品 >\n      ")]) : _vm._e()]) : _vm._e(), _c('div', {
    staticClass: "m-products m-products-1"
  }, [(_vm.displayBrand.hotProducts.total == 0) ? _c('div', {
    staticClass: "empty"
  }, [_vm._v("暂无产品")]) : _c('div', [_c('div', {
    staticClass: "w-title"
  }, [_vm._v("热门产品")]), _c('ul', _vm._l((_vm.displayBrand.hotProducts.list), function(p, index) {
    return _c('li', [_c('router-link', {
      staticClass: "item",
      class: {
        "item-0": index == 0
      },
      attrs: {
        "to": '/product/' + p.id
      }
    }, [(index <= 2) ? _c('img', {
      attrs: {
        "src": p.coverUrl
      }
    }) : _vm._e(), (index > 2) ? _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (p.coverUrl),
        expression: "p.coverUrl"
      }],
      attrs: {
        "src": _vm.blankImg
      }
    }) : _vm._e(), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "zhName"
    }, [_vm._v(_vm._s(p.zhName))]), _c('div', {
      staticClass: "enName"
    }, [_vm._v(_vm._s(p.enName))]), (p.noteCount > 0) ? _c('div', {
      staticClass: "noteCount"
    }, [_vm._v(_vm._s(p.noteCount) + "篇心得")]) : _vm._e()]), _c('div', {
      staticClass: "more"
    })])], 1)
  }))]), _c('app-more', {
    attrs: {
      "text": "查看更多产品"
    }
  })], 1)]) : _c('div', {
    staticClass: "g-content"
  }, [(_vm.displayBrand.repos.total > 0) ? _c('div', {
    staticClass: "m-repos"
  }, [_c('div', {
    staticClass: "w-title"
  }, [_vm._v("合辑")]), _c('ul', {
    staticClass: "list"
  }, _vm._l((_vm.displayBrand.repos.list), function(p, index) {
    return _c('li', [_c('router-link', {
      staticClass: "item",
      class: {
        "item-0": index == 0
      },
      attrs: {
        "to": '/repo/' + p.id
      }
    }, [(index <= 2) ? _c('img', {
      attrs: {
        "src": p.imageUrl
      }
    }) : _vm._e(), (index > 2) ? _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (p.imageUrl),
        expression: "p.imageUrl"
      }],
      attrs: {
        "src": _vm.blankImg
      }
    }) : _vm._e(), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(p.title))]), _c('div', {
      staticClass: "tags"
    }, _vm._l((p.tags), function(tag, index) {
      return _c('span', [_vm._v("#" + _vm._s(tag.name) + " ")])
    })), _c('div', {
      staticClass: "w-author w-author-0"
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": p.author.avatarUrl
      }
    }), _c('span', {
      staticClass: "nickname nickname-1"
    }, [_vm._v(_vm._s(p.author.nickname))]), _c('span', {
      staticClass: "pr"
    }, [_vm._v(_vm._s(p.readCount))])])])])], 1)
  })), (_vm.displayBrand.repos.total > 3) ? _c('div', {
    staticClass: "w-more w-more-1",
    on: {
      "click": _vm.launchApp
    }
  }, [_vm._v("\n        查看更多合辑 >\n      ")]) : _vm._e()]) : _vm._e(), _c('div', {
    staticClass: "m-notes"
  }, [_c('div', {
    staticClass: "w-title"
  }, [_vm._v("心得")]), (_vm.displayBrand.notes.total) ? _c('div', [_c('ul', {
    staticClass: "list"
  }, _vm._l((_vm.displayBrand.notes.list), function(p, index) {
    return _c('li', [_c('router-link', {
      staticClass: "item",
      class: {
        "item-0": index % 2 == 1
      },
      attrs: {
        "to": '/note/' + p.id
      }
    }, [_c('img', {
      attrs: {
        "src": p.imageArray[0]
      }
    }), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(p.nameMap.productNameList[0]))]), _c('div', {
      staticClass: "desc"
    }, [(p.emotion != 0) ? _c('span', [_c('span', {
      staticClass: "star"
    }, [_vm._v(_vm._s(6 - p.emotion) + "星")]), _vm._v(" |")]) : _vm._e(), _vm._v("\n                  " + _vm._s(p.text) + "\n                ")]), _c('div', {
      staticClass: "w-author w-author-1"
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": p.author.avatarUrl
      }
    }), _c('span', {
      staticClass: "nickname"
    }, [_vm._v(_vm._s(p.author.nickname))]), _c('span', {
      staticClass: "pr",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.launchApp($event)
        }
      }
    }, [_vm._v(_vm._s(p.praiseCount))])])])])], 1)
  })), _c('app-more', {
    staticClass: "mod",
    attrs: {
      "text": "查看更多心得"
    }
  })], 1) : _c('div', {
    staticClass: "empty"
  }, [_c('div', [_vm._v("该品牌还没有心得，成为第一个发布者吧")]), _c('div', {
    staticClass: "publish",
    on: {
      "click": _vm.launchApp
    }
  }, [_vm._v("快来发表第一篇心得")])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7d9418d8", module.exports)
  }
}

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(793)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(631),
  /* template */
  __webpack_require__(1011),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7d9418d8",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/brand/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d9418d8", Component.options)
  } else {
    hotAPI.reload("data-v-7d9418d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 631:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var _tabs = __webpack_require__(875);

var _tabs2 = _interopRequireDefault(_tabs);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util =  true ? __webpack_require__(69) : null;

exports.default = {
  components: {
    tabs: _tabs2.default
  },
  data: function data() {
    return {
      blankImg: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==',
      tabIndex: 0
    };
  },

  computed: _extends({}, (0, _vuex.mapState)({
    displayBrand: function displayBrand(_ref) {
      var resource = _ref.resource;

      var brand = _lodash2.default.cloneDeep(resource || {});
      brand.appCoverUrl = _jsUtil2.default.convertToNosUrl(brand.appCoverUrl, '750y680');
      brand.logoUrl = _jsUtil2.default.convertToNosUrl(brand.logoUrl || _constant.IMGS.DEFAULT_IMG, '298y298');
      brand.displayName = brand.mainName === 0 ? brand.zhName : brand.enName;
      if (brand.zhName && brand.enName) {
        brand.displayName += ' ';
      }
      brand.displayName += brand.mainName === 0 ? brand.enName : brand.zhName;
      brand.displayName = brand.displayName || '';
      brand.hotProducts = brand.hotProducts || {};
      brand.hotProducts.total = brand.hotProducts.total || 0;
      if (brand.hotProducts.list) {
        _lodash2.default.forEach(brand.hotProducts.list, function (p) {
          p.coverUrl = _jsUtil2.default.convertToNosUrl(p.coverUrl, '265y265');
        });
      }
      // 新品
      if (brand.newProducts.list) {
        _lodash2.default.forEach(brand.newProducts.list, function (p) {
          p.coverUrl = _jsUtil2.default.convertToNosUrl(p.coverUrl, '265y265');
        });
      }
      // 合辑
      if (brand.repos.list) {
        _lodash2.default.forEach(brand.repos.list, function (p) {
          p.author.avatarUrl = _jsUtil2.default.convertToNosUrl(p.author.avatarUrl || _constant.IMGS.AVATAR, '80y80');
          p.readCount = _jsUtil2.default.getDisplayCount(p.readCount);
          p.imageUrl = _jsUtil2.default.convertToNosUrl(p.imageUrl || _constant.IMGS.DEFAULT_IMG, '300y200');
        });
      }
      // 心得
      if (brand.notes.list) {
        _lodash2.default.forEach(brand.notes.list, function (p) {
          p.author.avatarUrl = _jsUtil2.default.convertToNosUrl(p.author.avatarUrl || _constant.IMGS.AVATAR, '80y80');
          p.praiseCount = _jsUtil2.default.getDisplayCount(p.praiseCount);
          p.imageArray[0] = _jsUtil2.default.convertToNosUrl(p.imageArray[0] || _constant.IMGS.DEFAULT_IMG, '350y350');
        });
      }

      return brand;
    }
  })),
  methods: {
    launchApp: function launchApp() {
      Util.callApp();
    }
  }
};

/***/ }),

/***/ 632:
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
  props: ["currentIndex"],
  data: function data() {
    return {
      // currentIndex: 0,
      tabs: ["产品", "内容"]
    };
  },
  methods: {
    updateCurrentIndex: function updateCurrentIndex(index) {
      this.$emit("update:currentIndex", index);
    }
  }
};

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(705)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(632),
  /* template */
  __webpack_require__(921),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0a547ae8",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/brand/detail/tabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a547ae8", Component.options)
  } else {
    hotAPI.reload("data-v-0a547ae8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-tab"
  }, [_c('ul', {
    staticClass: "wrap"
  }, _vm._l((_vm.tabs), function(tab, index) {
    return _c('li', {
      class: {
        active: _vm.currentIndex == index
      },
      on: {
        "click": function($event) {
          _vm.updateCurrentIndex(index)
        }
      }
    }, [_vm._v("\n      " + _vm._s(tab) + "\n    ")])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0a547ae8", module.exports)
  }
}

/***/ })

});
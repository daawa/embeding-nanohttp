webpackJsonp([36],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(160);

var _app = __webpack_require__(148);

var _vue = __webpack_require__(44);

var _vue2 = _interopRequireDefault(_vue);

var _beauty = __webpack_require__(149);

var _beauty2 = _interopRequireDefault(_beauty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// beauty js-sdk
/*
 * @Author: maggiehe
 * @Date:   2016-11-15 14:58:21
 * @Last Modified by: maggiehe
 * @Last Modified time: 2017-11-13 20:58:31
 */
_vue2.default.use(_beauty2.default, {
  // debug: true,
  refresh: function refresh(data, callback) {
    _app.store.commit('setHasRefresh', true);
    _app.store.dispatch('getResource', { callback: callback });
  }
}, function () {});
// import EventTrace from '~/plugins/tracker'


var state = window.__INITIAL_STATE__;

// 统计
// const { user } = state.result || {}
// new EventTrace({
//   currentUser: user
// })
// Vue.use(EventTrace)

_app.router.onReady(function () {
  if (state) {
    _app.store.commit('setGlobalInfo', state.globalInfo);
    _app.store.commit('setRouteOptions', state.options);
    _app.store.commit('setResource', state);
  } else {
    var ua = navigator.userAgent;
    var inApp = !!ua.match(/android/i);
    var inWechat = !!ua.match(/MicroMessenger/i);
    var hideBanner = inApp;
    _app.store.commit('setGlobalInfo', {
      ua: ua,
      inApp: inApp,
      inWechat: inWechat,
      hideBanner: hideBanner
    });
    _app.store.commit('setRouteOptions', {});
    _app.store.commit('setResource', {});
  }

  _app.store.commit('setMiniProgram', window.__wxjs_environment === 'miniprogram');
  _app.app.$mount('#body');
});

exports.default = _app.app;

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(366)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(154),
  /* template */
  __webpack_require__(384),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3f8f65d8",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/appMore.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] appMore.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f8f65d8", Component.options)
  } else {
    hotAPI.reload("data-v-3f8f65d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(44);

var _vue2 = _interopRequireDefault(_vue);

__webpack_require__(141);

var _vueLazyload = __webpack_require__(373);

var _vueLazyload2 = _interopRequireDefault(_vueLazyload);

var _appMore = __webpack_require__(138);

var _appMore2 = _interopRequireDefault(_appMore);

__webpack_require__(151);

var _constant = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* @Author: maggiehe
* @Date:   2017-02-06 15:37:29
 * @Last Modified by: maggiehe
 * @Last Modified time: 2017-11-01 09:38:52
* 全局配置
*/
var Util =  true ? __webpack_require__(69) : null;
var FastClick =  true ? __webpack_require__(369) : null;

_vue2.default.component('appMore', _appMore2.default);

if (true) {
  var blank = _constant.IMGS.BLANK + '?imageView&thumbnail=15y10';
  _vue2.default.use(_vueLazyload2.default, {
    error: blank,
    loading: blank,
    preLoad: 2
  });
  // 触发scroll事件
  document.addEventListener('click', function () {
    setTimeout(function () {
      Util.dispatchEvent('scroll');
    });
  });
  // 解决移动端click300ms延迟问题
  new FastClick(document.body);
}

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pathToRegexp = __webpack_require__(152);

// 动态页
var normalRules = {
  "GET /": { canonical: true },
  "GET /product/:productId([a-zA-Z0-9]+)": { canonical: true }, // canonical：是否有作为首选的pc页面
  "GET /brand/:brandId([a-zA-Z0-9]+)": { canonical: true },
  "GET /tag/:tagName([a-zA-Z0-9]+)": {},
  "GET /tag/:tagId/knowledge": {},
  "GET /event/:tagName([a-zA-Z0-9]+)": {},
  "GET /repo/:repoId([a-zA-Z0-9]+)": { canonical: true },
  "GET /repo/:repoId([a-zA-Z0-9]+)/screencapture": {
    heads: "<meta name='robots' content='noindex nofollow' >",
    errRender: false
  },
  "GET /repo/:repoId([a-zA-Z0-9]+)/sogou": {
    heads: "<meta name='robots' content='noindex nofollow' >"
  },
  "GET /note/:noteId([a-zA-Z0-9]+)": { canonical: true },
  "GET /note/:noteId([a-zA-Z0-9]+)/screencapture": {
    heads: "<meta name='robots' content='noindex nofollow' >",
    errRender: false
  },
  "GET /note/:noteId([a-zA-Z0-9]+)/sogou": {
    heads: "<meta name='robots' content='noindex nofollow' >"
  },
  "GET /video/:videoId([a-zA-Z0-9]+)": {},
  "GET /question/:id([a-zA-Z0-9]+)": {},
  "GET /answer/:id([a-zA-Z0-9]+)": {},
  "GET /collects/:id([a-zA-Z0-9]+)": { pageTitle: '网易美学收藏夹' }, // 收藏夹
  "GET /activity/20170309": {},
  "GET /activity/campus": {},
  "GET /activity/pechoin": {}, // 2017.7.17 百雀羚活动
  "GET /activity/qixi": { pageTitle: '附近', noTitleSuffix: true }, // 2017.8.25 七夕活动
  "GET /activity/qixi/:id([a-zA-Z0-9]+)": { pageTitle: '好友战绩', noTitleSuffix: true }, // 2017.8.25 七夕活动f分享落地页
  "GET /trial": {},
  "GET /trial/:id([a-zA-Z0-9]+)": {},
  "GET /trial/list/myTrial": { webviewOnly: true },
  "GET /user/:id([a-zA-Z0-9]+)": { canonical: true },
  "GET /search": {}, // 搜索结果页
  "GET /activity/anniversary": { pageTitle: '一周年拔草挑战赛' }, // 美学一周年活动
  "GET /activity2/anniversary": { pageTitle: '一周年拔草挑战赛' }, // 美学一周年活动 -- 兼容安卓activity开头链接专用
  "GET /activity/anniversary/invite/:id([a-zA-Z0-9]+)": { pageTitle: '手速快就能拿SK-II、CPB、YSL！玩到废寝忘食了！' }, // 美学一周年活动邀请好友页
  "GET /activity/anniversary/game": { pageTitle: '一周年拔草挑战赛', webviewOnly: true }, // 美学一周年庆游戏
  "GET /activity/anniversary/invite/:id([a-zA-Z0-9]+)/wechatgive": {}, // 美学一周年微信授权空白页
  "GET /activity/anniversary/boardList": { pageTitle: '网易美学一周年榜单盘点' // 美学一周年活动榜单页
  }

  // 静态页
};var pureRules = {
  "GET /login": { webviewOnly: true },
  "GET /webview/test": {
    webviewOnly: true,
    heads: "<meta name='robots' content='noindex nofollow' >"
  },
  "GET /webview/videotest": {
    webviewOnly: true,
    heads: "<meta name='robots' content='noindex nofollow' >"
  },
  "GET /webview/skintest": { webviewOnly: true },
  "GET /test/animation": {
    pageTitle: '动效',
    webviewOnly: true,
    heads: "<meta name='robots' content='noindex nofollow' >"
  },
  "GET /trialrule": {},
  "GET /miniProgram/download": {
    pageTitle: '美学福利社',
    noTitleSuffix: true
  }

  // 拆分动态路由规则
};function splitSpaRules(rules) {
  var stringRules = {};
  var regexRules = {};
  for (var key in rules) {
    if (key.indexOf(":") > -1 || key.indexOf("(") > -1) {
      regexRules[key] = rules[key];
    } else {
      stringRules[key] = rules[key];
    }
  }
  return { stringRules: stringRules, regexRules: regexRules };
}

// 尝试匹配动态路由规则
function matchRule(key) {
  var rules = splitSpaRules(normalRules);
  var options = rules.stringRules[key];
  if (options) {
    return {
      match: true,
      options: options // 匹配路由的对应配置
    };
  } else {
    for (var rule in rules.regexRules) {
      if (pathToRegexp(rule).exec(key)) {
        return {
          match: true,
          options: rules.regexRules[rule]
        };
      }
    }
  }
  return {
    match: false
  };
}

function matchPureRule(key) {
  var options = pureRules[key];
  if (options) {
    return {
      match: true,
      options: options // 匹配路由的对应配置
    };
  }
  return {
    match: false
  };
}

module.exports = {
  normalRules: normalRules,
  pureRules: pureRules,
  matchRule: matchRule,
  matchPureRule: matchPureRule
};

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = exports.store = exports.router = undefined;

var _vue = __webpack_require__(44);

var _vue2 = _interopRequireDefault(_vue);

var _vuexRouterSync = __webpack_require__(388);

var _store = __webpack_require__(99);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(150);

var _router2 = _interopRequireDefault(_router);

var _App = __webpack_require__(374);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _vuexRouterSync.sync)(_store2.default, _router2.default); /*
                                                              * @Author: maggiehe
                                                              * @Date:   2016-11-15 14:58:56
                                                               * @Last Modified by: maggiehe
                                                               * @Last Modified time: 2017-09-21 14:53:11
                                                              */


var app = new _vue2.default({
  router: _router2.default,
  store: _store2.default,
  render: function render(h) {
    return h(_App2.default);
  }
});

exports.router = _router2.default;
exports.store = _store2.default;
exports.app = app;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsSdk = __webpack_require__(139);

var _jsSdk2 = _interopRequireDefault(_jsSdk);

var _tencentWxJssdk = __webpack_require__(101);

var _tencentWxJssdk2 = _interopRequireDefault(_tencentWxJssdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: maggiehe
 * @Date: 2017-07-24 20:09:52
 * @Last Modified by: maggiehe
 * @Last Modified time: 2017-11-13 20:19:46
 * beauty js-sdk 插件
 * API: https://g.hz.netease.com/beauty/beauty-js-sdk
 */
exports.default = {
  install: function install(Vue, options, callback) {
    _jsSdk2.default.config(options || {}).then(function () {
      _jsSdk2.default.isUrlShared = function () {
        var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        return new Promise(function (resolve, reject) {
          // 只有安卓1.5.3+才有此功能
          if (!_jsSdk2.default.isAOS || _jsSdk2.default.compareVersion('1.5.3') < 0) {
            resolve(false);
          } else {
            _jsSdk2.default.MZBridge.callHandler('isUrlShared', url, function (result) {
              resolve(result);
            });
          }
        });
      };
      callback();
    }, function (errMsg) {});
    // 兼容微信中预览图片
    var previewImage = function previewImage(options) {
      var urls = options.urls,
          current = options.current;

      var currentIndex = current || 0;
      if (_jsSdk2.default.inApp) {
        _jsSdk2.default.previewImage({
          urls: urls,
          current: currentIndex
        });
      } else if (_tencentWxJssdk2.default && _tencentWxJssdk2.default.previewImage) {
        _tencentWxJssdk2.default.previewImage({
          current: urls[currentIndex],
          urls: urls
        });
      }
    };
    _jsSdk2.default.isomorphicPreviewImage = previewImage;
    Vue.prototype.$beauty = _jsSdk2.default;
  }
};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(44);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(387);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

__webpack_require__(140);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content() {
  return __webpack_require__.e/* import() */(26).then(__webpack_require__.bind(null, 391));
}; /*
    * @Author: maggiehe
    * @Date:   2017-02-05 14:18:16
    * @Last Modified by: maggiehe
    * @Last Modified time: 2017-11-13 21:07:27
    */

var Brand = function Brand() {
  return __webpack_require__.e/* import() */(28).then(__webpack_require__.bind(null, 402));
};
var Product = function Product() {
  return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 411));
};
var Tag = function Tag() {
  return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 417));
};
var TagKnowledge = function TagKnowledge() {
  return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, 418));
};
var Event = function Event() {
  return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, 404));
};
var Repo = function Repo() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 413));
};
var RepoScreenCapture = function RepoScreenCapture() {
  return __webpack_require__.e/* import() */(21).then(__webpack_require__.bind(null, 414));
};
var RepoSogou = function RepoSogou() {
  return __webpack_require__.e/* import() */(23).then(__webpack_require__.bind(null, 415));
};
var Note = function Note() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 408));
};
var NoteScreenCapture = function NoteScreenCapture() {
  return __webpack_require__.e/* import() */(25).then(__webpack_require__.bind(null, 409));
};
var NoteSogou = function NoteSogou() {
  return __webpack_require__.e/* import() */(27).then(__webpack_require__.bind(null, 410));
};
var Video = function Video() {
  return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 424));
};
var Question = function Question() {
  return __webpack_require__.e/* import() */(1/* aggressive-merge */).then(__webpack_require__.bind(null, 412));
};
var Answer = function Answer() {
  return __webpack_require__.e/* import() */(0/* aggressive-merge */).then(__webpack_require__.bind(null, 401));
};
var YanxuanActivity = function YanxuanActivity() {
  return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, 392));
};
var CampusActivity = function CampusActivity() {
  return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, 397));
};
var PechoinActivity = function PechoinActivity() {
  return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 398));
};
var AnniversaryActivityDetail = function AnniversaryActivityDetail() {
  return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 394));
};
var AnniversaryActivityInvite = function AnniversaryActivityInvite() {
  return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 396));
};
var AnniversaryActivityGame = function AnniversaryActivityGame() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 393));
};
var AnniversaryActivityBoard = function AnniversaryActivityBoard() {
  return __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, 395));
};
var Login = function Login() {
  return __webpack_require__.e/* import() */(34).then(__webpack_require__.bind(null, 406));
};
var TrialList = function TrialList() {
  return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 422));
};
var Trial = function Trial() {
  return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 421));
};
var TrialRule = function TrialRule() {
  return __webpack_require__.e/* import() */(32).then(__webpack_require__.bind(null, 420));
};
var WebviewTest = function WebviewTest() {
  return __webpack_require__.e/* import() */(31).then(__webpack_require__.bind(null, 425));
};
var VideoTest = function VideoTest() {
  return __webpack_require__.e/* import() */(30).then(__webpack_require__.bind(null, 426));
};
var skinTest = function skinTest() {
  return __webpack_require__.e/* import() */(29).then(__webpack_require__.bind(null, 427));
};
var Qixi = function Qixi() {
  return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 400));
};
var QixiShare = function QixiShare() {
  return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 399));
};
var animation = function animation() {
  return __webpack_require__.e/* import() */(22).then(__webpack_require__.bind(null, 419));
};
var UserHomepage = function UserHomepage() {
  return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 423));
};
var Index = function Index() {
  return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 405));
};
var Search = function Search() {
  return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 416));
};
var Collects = function Collects() {
  return __webpack_require__.e/* import() */(24).then(__webpack_require__.bind(null, 403));
};
var MiniProgramDownload = function MiniProgramDownload() {
  return __webpack_require__.e/* import() */(33).then(__webpack_require__.bind(null, 407));
};

_vue2.default.use(_vueRouter2.default);

var routes = [{
  path: '',
  component: Content,
  children: [{
    path: '/brand/:id',
    name: 'brand',
    component: Brand
  }, {
    path: '/product/:id',
    name: 'product',
    component: Product
  }, {
    path: '/tag/:id',
    name: 'tag',
    component: Tag
  }, {
    path: '/tag/:id/knowledge',
    name: 'tagKnowledge',
    component: TagKnowledge
  }, {
    path: '/event/:id',
    name: 'event',
    component: Event
  }, {
    path: '/repo/:id',
    name: 'repo',
    component: Repo
  }, {
    path: '/note/:id',
    name: 'note',
    component: Note
  }, {
    path: '/video/:id',
    name: 'video',
    component: Video
  }, {
    path: '/question/:id',
    name: 'question',
    component: Question
  }, {
    path: '/answer/:id',
    name: 'answer',
    component: Answer
  }, {
    path: '/trial/:id',
    name: 'trial',
    component: Trial
  }, {
    path: '/trialrule',
    name: 'trialRule',
    component: TrialRule
  }, {
    path: '/user/:id',
    name: 'userHomepage',
    component: UserHomepage
  }, {
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }, {
    path: '/collects/:id',
    name: 'collects',
    component: Collects
  }]
}, {
  path: '/activity/20170309',
  name: 'YanxuanActivity',
  component: YanxuanActivity
}, {
  path: '/activity/campus',
  name: 'campusActivity',
  component: CampusActivity
}, {
  path: '/activity/pechoin',
  name: 'pechoinActivity',
  component: PechoinActivity
}, {
  path: '/activity/qixi',
  name: 'qixi',
  component: Qixi
}, {
  path: '/activity/qixi/:id',
  name: 'qixiShare',
  component: QixiShare
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/webview/test',
  name: 'webviewtest',
  component: WebviewTest
}, {
  path: '/webview/videotest',
  name: 'videotest',
  component: VideoTest
}, {
  path: '/webview/skinTest',
  name: 'skintest',
  component: skinTest
}, {
  path: '/test/animation',
  name: 'animation',
  component: animation
}, {
  path: '/trial',
  name: 'trialList',
  component: TrialList
}, {
  path: '/trial/list/myTrial',
  name: 'myTrial',
  component: TrialList
}, {
  path: '/repo/:id/screencapture',
  name: 'repoScreenCapture',
  component: RepoScreenCapture
}, {
  path: '/note/:id/screencapture',
  name: 'noteScreenCapture',
  component: NoteScreenCapture
}, {
  path: '/repo/:id/sogou',
  name: 'repoSogou',
  component: RepoSogou
}, {
  path: '/note/:id/sogou',
  name: 'noteSogou',
  component: NoteSogou
}, {
  // 周年活动游戏页
  path: '/activity/anniversary/game',
  name: 'anniversaryActivityGame',
  component: AnniversaryActivityGame
}, {
  // 周年活动详情页
  path: '/activity/anniversary',
  alias: '/activity2/anniversary', // 兼容安卓系统消息
  name: 'anniversaryActivityDetail',
  component: AnniversaryActivityDetail
}, {
  path: '/activity/anniversary/invite/:id',
  name: 'anniversaryActivityInvite',
  component: AnniversaryActivityInvite
}, {
  path: '/activity/anniversary/boardList',
  name: 'anniversaryActivityBoard',
  component: AnniversaryActivityBoard
}, {
  path: '/miniProgram/download',
  name: 'miniProgramDownload',
  component: MiniProgramDownload
}];

var router = new _vueRouter2.default({
  mode: 'history',
  routes: routes,
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        // selector: to.hash
      };
    }
    return savedPosition || { x: 0, y: 0 };
  }
});

exports.default = router;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Object.assign !== 'function') {
  Object.assign = function (target) {
    'use strict';

    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

/***/ }),

/***/ 153:
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

var _vuex = __webpack_require__(32);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _search = __webpack_require__(378);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = __webpack_require__(379);
var inBrowser = true;
var Util = inBrowser ? __webpack_require__(69) : null;
exports.default = {
  computed: _extends({}, (0, _vuex.mapState)(['inApp', 'loading', 'error', 'resource', 'shareInfo']), {
    hasSearchBar: function hasSearchBar() {
      // return true;
      var matched = this.$route.matched;
      console.log('matched:' + matched);
      return matched && matched[0] ? matched[0].path === '' : false;
    }
  }),
  watch: {
    // 路由变化时重新获取数据
    $route: 'fetchData',
    // 数据变化时，更新页面标题和分享信息，触发懒加载
    resource: function resource() {
      this.refresh();
    }
  },
  mounted: function mounted() {
    console.log("current path:" + this.$route.path);

    var matched = this.$router.getMatchedComponents(this.$route.path);

    if (matched.length <= 0) {
      console.log("redirect from " + this.$route.path + " to /trial");
      this.$router.replace({ path: "/" });
    } else {
      console.log("matched component :" + matched[0].name);
      this.refresh();
    }
  },

  methods: {
    afterEnter: function afterEnter() {
      if (inBrowser) {
        setTimeout(function () {
          Util.dispatchEvent('scroll');
        }, 200);
      }
    },
    fetchData: function fetchData() {
      var tmp = this.$route.fullPath;
      if (!inBrowser) {
        return;
      }
      this.$store.dispatch('getResource', {
        loadingStatus: true,
        callback: function callback() {
          console.log('\ngetResource for ' + tmp + " is done\n");
        }
      });
    },
    refresh: function refresh() {
      // 更新页面标题
      Util.refreshPage();

      var _ref = this.shareInfo || {},
          resId = _ref.resId,
          resType = _ref.resType;
      // 二次分享统计


      function sendShare(resId, resType, shareDestType) {
        if (!resId || !resType || !shareDestType) {
          return;
        }
        (0, _fetch2.default)('/secondShare', {
          method: 'POST',
          body: {
            resId: resId,
            resType: resType,
            shareDestType: shareDestType
          }
        }).then(function (data) {
          // 用户不关心，忽略回调
        });
      }
      // 更新微信sdk配置
      Util.configWxShare({
        onSharepAppMessageSuccess: sendShare.bind(null, resId, resType, 1),
        onshareTimelineSuccess: sendShare.bind(null, resId, resType, 2)
      });
      this.$nextTick(function () {
        Util.dispatchEvent('scroll');
      });
    }
  },
  components: {
    error: Error,
    search: _search2.default
  }
};

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//

var _vuex = __webpack_require__(32);

var Util =  true ? __webpack_require__(69) : null;
exports.default = {
  computed: _extends({}, (0, _vuex.mapState)(['inApp', 'hideBanner'])),
  props: ['text'],
  methods: {
    callApp: function callApp() {
      Util.callApp();
    }
  }
};

/***/ }),

/***/ 155:
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

var _vuex = __webpack_require__(32);

exports.default = {
  props: {
    isResultPage: {
      type: Boolean,
      defaultValue: false
    },
    search: Function
  },
  data: function data() {
    return {
      keyword: ''
    };
  },

  computed: _extends({}, (0, _vuex.mapState)(['searchKeyword', 'searchLayerVisible', 'inMiniProgram']), {
    // 搜索中
    searching: function searching() {
      return this.isResultPage || this.searchLayerVisible;
    }
  }),
  watch: {
    keyword: function keyword(newVal) {
      this.setSearchKeyword(newVal);
    },
    $route: function $route() {
      this.setKeyword();
    }
  },
  mounted: function mounted() {
    this.setKeyword();
  },

  methods: _extends({}, (0, _vuex.mapMutations)(['setSearchKeyword', 'setSearchLayerVisible']), {
    toHome: function toHome() {
      if (this.inMiniProgram) {
        return;
      } else {
        this.$router.push('/');
      }
    },

    // 更新关键字
    setKeyword: function setKeyword() {
      if (this.isResultPage) {
        this.keyword = this.$route.query.keyword || '';
      } else {
        this.keyword = '';
      }
    },

    // 展示/隐藏搜索浮层
    toggleLayer: function toggleLayer(search) {
      var _this = this;

      this.setSearchLayerVisible(search);
      if (search) {
        this.$nextTick(function () {
          _this.$refs.input.focus();
        });
      }
    },

    // 点击键盘确认键进行搜索
    onEnter: function onEnter() {
      this.$refs.input.blur();
      this.search();
    },

    // 取消搜索
    cancel: function cancel() {
      this.setSearchKeyword('');
      if (this.searchLayerVisible) {
        this.toggleLayer(false);
      } else {
        history.back();
      }
    }
  })
};

/***/ }),

/***/ 156:
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

var _vuex = __webpack_require__(32);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    onSearch: Function
  },
  data: function data() {
    return {
      suggestions: []
    };
  },

  computed: _extends({
    // 搜索词只展示一行，中间...
    displaySearchKeyword: function displaySearchKeyword() {
      var prefixLength = 14;
      var suffixLength = 20;
      var length = _jsUtil2.default.getStrLength(this.searchKeyword);
      if (length > prefixLength + suffixLength) {
        return _jsUtil2.default.substr(this.searchKeyword, prefixLength) + '...' + _jsUtil2.default.substrReverse(this.searchKeyword, suffixLength);
      }
      return this.searchKeyword;
    }
  }, (0, _vuex.mapState)(['searchKeyword', 'searchLayerVisible'])),
  watch: {
    // 关键词变化，更新搜索建议列表
    searchKeyword: _lodash2.default.throttle(function () {
      this.getSuggestion();
    }, 200)
  },
  mounted: function mounted() {
    this.getSuggestion();
  },

  methods: {
    // 获取搜索建议
    getSuggestion: function getSuggestion() {
      var _this = this;

      (0, _fetch2.default)('/api/search/suggestion', {
        body: {
          keyword: this.searchKeyword
        }
      }).then(function (json) {
        _this.suggestions = json.result || [];
      }, function (json) {
        // 获取搜索建议失败
        _this.suggestions = [];
      });
    }
  }
};

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    onSelect: Function
  },
  data: function data() {
    return {
      hotWords: []
    };
  },
  mounted: function mounted() {
    this.getHotWords();
  },

  methods: {
    getHotWords: function getHotWords() {
      var _this = this;

      (0, _fetch2.default)('/api/search/hotWords').then(function (json) {
        _this.hotWords = json.result || [];
      }, function (json) {
        // 获取热门搜索失败
        _this.hotWords = [];
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

/***/ }),

/***/ 158:
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

var _lodash = __webpack_require__(97);

var _lodash2 = _interopRequireDefault(_lodash);

var _vuex = __webpack_require__(32);

var _SearchBar = __webpack_require__(375);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _TopSearch = __webpack_require__(377);

var _TopSearch2 = _interopRequireDefault(_TopSearch);

var _Suggestion = __webpack_require__(376);

var _Suggestion2 = _interopRequireDefault(_Suggestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESULT_PAGE = '/search';
exports.default = {
  data: function data() {
    // 当前页面是否是搜索结果页
    var isResultPage = this.$route.path === RESULT_PAGE;
    return {
      isResultPage: isResultPage,
      visible: true // 搜索栏是否可见（上划页面会隐藏搜索栏）
    };
  },

  computed: _extends({}, (0, _vuex.mapState)(['searchKeyword', 'searchLayerVisible']), {
    searching: function searching() {
      return this.isResultPage || this.searchLayerVisible;
    }
  }),
  watch: {
    // 搜索浮层打开/收起时，修改body样式
    searchLayerVisible: function searchLayerVisible(newVal) {
      this.toggleBodyScroll(!newVal);
    },

    // 路由变化时，更新isResultPage字段与搜索关键字
    $route: function $route() {
      this.isResultPage = this.$route.path === RESULT_PAGE;
      this.show();
    }
  },
  mounted: function mounted() {
    window.addEventListener('scroll', _lodash2.default.throttle(this.toggleVisibility(), 200).bind(this));
    this.toggleBodyScroll(true);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', _lodash2.default.throttle(this.toggleVisibility(), 200).bind(this));
  },

  methods: _extends({}, (0, _vuex.mapMutations)(['setSearchKeyword', 'setSearchLayerVisible']), {
    // 设置document.body是否可滚动
    toggleBodyScroll: function toggleBodyScroll(canScroll) {
      if (canScroll) {
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
      }
    },

    // 处理搜索栏的出现/收起逻辑：原始区域不可见时，上划消失，下拉出现
    toggleVisibility: function toggleVisibility() {
      var _this = this;

      // 上次触发scroll时的scrollTop
      var preScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      return function () {
        if (!_this.$refs.search) return;
        if (_this.isResultPage) {
          // 搜索结果页搜索栏永远在文档顶部，无此逻辑
          return;
        } else if (_this.searching) {
          // 搜索过程中搜索栏保持展示
          _this.show();
          return;
        }
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop < _this.$refs.search.offsetHeight || scrollTop < preScrollTop) {
          _this.show();
        } else {
          _this.hide();
        }
        preScrollTop = scrollTop;
      };
    },

    // 收起搜索栏
    hide: function hide() {
      if (!this.visible) {
        return;
      }
      this.visible = false;
      this.$refs.search.style.top = '-2rem'; // 移到不可见区域
    },

    // 显示搜索栏
    show: function show() {
      if (this.visible) {
        return;
      }
      this.visible = true;
      this.$refs.search.style.top = 0;
    },

    // 搜索
    search: function search(keyword) {
      if (keyword && typeof keyword === 'string') {
        this.setSearchKeyword(keyword);
      }
      if (!this.searchKeyword) {
        return;
      }
      var newPath = RESULT_PAGE + '?keyword=' + this.searchKeyword; // 搜索结果页地址
      if (this.isResultPage) {
        this.$router.replace(newPath);
      } else {
        this.$router.push(newPath);
      }
      this.setSearchLayerVisible(false); // 隐藏搜索浮层
    }
  }),
  components: {
    searchBar: _SearchBar2.default,
    topSearch: _TopSearch2.default,
    suggestion: _Suggestion2.default
  }

};

/***/ }),

/***/ 159:
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

var _vuex = __webpack_require__(32);

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)({
    error: 'error'
  })),
  methods: {
    reload: function reload() {
      window.location.reload();
    }
  }
};

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(368)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(153),
  /* template */
  __webpack_require__(386),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b2caa854",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b2caa854", Component.options)
  } else {
    hotAPI.reload("data-v-b2caa854", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(367)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(155),
  /* template */
  __webpack_require__(385),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5af8b832",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/search/SearchBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SearchBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5af8b832", Component.options)
  } else {
    hotAPI.reload("data-v-5af8b832", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(364)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(156),
  /* template */
  __webpack_require__(382),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-28c862a6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/search/Suggestion.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Suggestion.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28c862a6", Component.options)
  } else {
    hotAPI.reload("data-v-28c862a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(362)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(157),
  /* template */
  __webpack_require__(380),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0b52fd78",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/search/TopSearch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TopSearch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b52fd78", Component.options)
  } else {
    hotAPI.reload("data-v-0b52fd78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(365)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(158),
  /* template */
  __webpack_require__(383),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-37f1f04e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/components/search/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37f1f04e", Component.options)
  } else {
    hotAPI.reload("data-v-37f1f04e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(363)
}
var Component = __webpack_require__(31)(
  /* script */
  __webpack_require__(159),
  /* template */
  __webpack_require__(381),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-16cb3e48",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhome/Repo/beautyWap/src/views/Error.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Error.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16cb3e48", Component.options)
  } else {
    hotAPI.reload("data-v-16cb3e48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hotWords.length),
      expression: "hotWords.length"
    }],
    staticClass: "top-search"
  }, [_c('div', {
    staticClass: "top-search__title"
  }, [_vm._v("热门搜索")]), _c('ul', _vm._l((_vm.hotWords), function(word, index) {
    return _c('li', {
      key: index,
      staticClass: "top-search__item",
      on: {
        "click": function($event) {
          _vm.onSelect(word)
        }
      }
    }, [_vm._v(_vm._s(word))])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b52fd78", module.exports)
  }
}

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "error"
  }, [_c('div', {
    staticClass: "lipstick"
  }), _c('div', {
    staticClass: "txt"
  }, [_c('div', {
    staticClass: "msg"
  }, [_vm._v(_vm._s(_vm.error.msg || "网络好像不太给力哦~"))]), (_vm.error.code) ? _c('div', {
    staticClass: "code"
  }, [_vm._v("错误码：" + _vm._s(_vm.error.code))]) : _vm._e()]), _c('div', {
    staticClass: "btn",
    on: {
      "click": _vm.reload
    }
  }, [_vm._v("重新加载")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-16cb3e48", module.exports)
  }
}

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "suggestion"
  }, [_c('ul', [_c('li', {
    staticClass: "suggestion__item suggestion__item--keyword",
    on: {
      "click": _vm.onSearch
    }
  }, [_vm._v("搜索“" + _vm._s(_vm.displaySearchKeyword) + "”")]), _vm._l((_vm.suggestions), function(word, index) {
    return _c('li', {
      key: index,
      staticClass: "suggestion__item",
      on: {
        "click": function($event) {
          _vm.onSearch(word)
        }
      }
    }, [_vm._v(_vm._s(word))])
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28c862a6", module.exports)
  }
}

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topbar"
  }, [_c('div', {
    ref: "search",
    staticClass: "search",
    class: {
      'search--opers': _vm.searching, 'search--layer': _vm.searchLayerVisible
    }
  }, [_c('search-bar', {
    attrs: {
      "isResultPage": _vm.isResultPage,
      "search": _vm.search
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.searchLayerVisible),
      expression: "searchLayerVisible"
    }]
  }, [_c('top-search', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.searchKeyword),
      expression: "!searchKeyword"
    }],
    attrs: {
      "onSelect": _vm.search
    }
  }), _c('suggestion', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.searchKeyword),
      expression: "searchKeyword"
    }],
    attrs: {
      "onSearch": _vm.search
    }
  })], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37f1f04e", module.exports)
  }
}

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.inApp && !_vm.hideBanner) ? _c('div', {
    staticClass: "u-download",
    on: {
      "click": _vm.callApp
    }
  }, [_vm._v("下载APP，" + _vm._s(_vm.text || "查看更多热门产品"))]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3f8f65d8", module.exports)
  }
}

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "bar",
    staticClass: "search-bar",
    class: {
      'search-bar--opers': _vm.searching
    }
  }, [_c('div', {
    staticClass: "search-bar__logo",
    on: {
      "click": _vm.toHome
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.searching && !_vm.inMiniProgram),
      expression: "!searching && !inMiniProgram"
    }],
    staticClass: "search-bar__go",
    on: {
      "click": function($event) {
        _vm.toggleLayer(true)
      }
    }
  }, [_c('button')]), _c('form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.searching),
      expression: "searching"
    }],
    staticClass: "search-bar__keyword",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        (function() {})($event)
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyword),
      expression: "keyword"
    }],
    ref: "input",
    attrs: {
      "type": "search",
      "placeholder": "搜索合辑、心得、产品"
    },
    domProps: {
      "value": (_vm.keyword)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        _vm.onEnter($event)
      },
      "focus": function($event) {
        _vm.toggleLayer(true)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.keyword = $event.target.value
      }
    }
  })]), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.searching),
      expression: "searching"
    }],
    staticClass: "search-bar__cancel",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("取消")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5af8b832", module.exports)
  }
}

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [(!_vm.inApp && _vm.hasSearchBar && !_vm.error) ? _c('search') : _vm._e(), _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    },
    on: {
      "after-enter": _vm.afterEnter
    }
  }, [(_vm.loading) ? _c('div', {
    staticClass: "app-loading"
  }, [_c('img', {
    attrs: {
      "src": "/res/image/loading.gif"
    }
  })]) : (!_vm.error) ? _c('router-view') : _c('error', {
    attrs: {
      "msg": _vm.error.msg,
      "code": _vm.error.code
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b2caa854", module.exports)
  }
}

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* @Author: maggiehe
* @Date:   2017-02-20 10:06:52
 * @Last Modified by: maggiehe
 * @Last Modified time: 2017-11-14 09:58:13
*/

var IMGS = exports.IMGS = {
  AVATAR: '//beauty.nosdn.127.net/beauty/img/afc1a238-ee44-45d9-b4b5-a9361f6ae99d.png',
  LOGO: '//beauty.nosdn.127.net/beauty/img/5937b030-cee3-44f6-b0d8-dd9f137b2a34.png',
  NO_PRODUCT: '//beauty.nosdn.127.net/beauty/img/bc22975f-be79-4826-be33-bca73ef79925.png',
  SPIRIT: '//beauty.nosdn.127.net/beauty/img/166a7880-7f0c-44b0-b027-4656c66814ee.png',
  DEFAULT_IMG: '//beauty.nosdn.127.net/beauty/img/c042ddec-d96f-47a5-a7bd-a7de28886746..png',
  DEFAULT_IMG_TRANSP: '//beauty.nosdn.127.net/beauty/img/4d6de58c-672d-40c9-9e92-b9a71e62026e.png', // 半透明产品默认图
  BLANK: '//beauty.nosdn.127.net/beauty/img/6ea29d15-b265-473c-bdaf-c4db5c9e8e1f.png',
  // 个人主页背景
  DEFAULT_USER_BACKGROUND: '//beauty.nosdn.127.net/beauty/img/507a0ecc-ae46-4e2e-929b-0be0750703a6.png',
  NO_REPO: '//beauty.nosdn.127.net/beauty/img/9a9fe2dc-69e4-43ff-9113-4d29916623f8.png',
  NO_NOTE: '//beauty.nosdn.127.net/beauty/img/a16d93bd-d5b1-4ef8-ae1e-22f3a0036b5e.png',
  VIDEO_DEFAULT_IMG: '//beauty.nosdn.127.net/beauty/img/e339e794-90e2-4afd-8d05-f2f12dfeb719.jpg',
  LOADING: '//beauty.nosdn.127.net/beauty/img/42bb21f1-8ae5-4d32-b5fc-c8a33c6d3ec8.gif',
  // 视频插入产品 箭头
  ARROW: 'https://beauty.nosdn.127.net/beauty/img/23ed16d8-1393-48f9-9134-fcb794775f6a..png'
};

var RES_TYPES = exports.RES_TYPES = {
  USER: 1,
  NOTE: 2,
  REPO: 3,
  PRODUCT: 4,
  BRAND: 5,
  TAG: 6,
  DYNAMIC: 7, // 动态
  RANK: 8, // 排行榜
  ACTIVITY: 9,
  TEXT: 10,
  URL_SCHEME: 11,
  COMMENT: 12,
  SKU: 13,
  QIYU: 14, // 七鱼
  IMAGE: 15,
  NOTIFY: 16, // 通知
  VIDEO: 20,
  QUESTION: 30,
  ANSWER: 35,
  TRIAL: 40,
  APP: 99 // app应用


  // 统计事件
};var STATISTICS_ACTIONS = exports.STATISTICS_ACTIONS = {
  SHARE_TO_WECAHT_APP_MESSAGE: "shareToWechatAppMessage",
  SHARE_TO_WECAHT_TIMELINE: "shareToWechatTimeline"
};

var DOMAINS = exports.DOMAINS = {
  WEB: 'https://mei.163.com',
  H5: 'https://m.mei.163.com',
  CLIENT: ''
};
exports.default = { IMGS: IMGS, RES_TYPES: RES_TYPES, STATISTICS_ACTIONS: STATISTICS_ACTIONS, DOMAINS: DOMAINS };

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(389);

var _constant = __webpack_require__(53);

/*
 * fetch
 * 使用示例：
    Fetch('/comments', {
      method: 'GET', //缺省为'GET'
      body: { limit: 5, offset: 0, esId: 157, resType: 3},
      norest: false, //针对post请求，缺省:content-type为json，true:content-type为默认的form类型
    }).then((data) => {
        //...
    }, (errMessage) => {
        //...
    })
 */
var toQueryString = function toQueryString(obj) {
  var keys = obj && Object.keys(obj);
  var params = void 0;
  if (keys && keys.length > 0) {
    params = keys.map(function (key) {
      return key + '=' + encodeURIComponent(obj[key]);
    }).join('&');
  }
  return params;
};
var Fetch = function Fetch(url, options) {
  options = options || {};
  options.method = (options.method || 'GET').toUpperCase();
  options.headers = options.headers || {};
  options.credentials = "same-origin";
  // 处理GET方法的提交数据
  if (!options.method || options.method === 'GET') {
    var str = toQueryString(options.body);
    if (str) {
      url += ~url.indexOf('?') ? '&' : '?';
      url += str;
    }
    delete options.body;
    options.headers['Accept'] = 'application/json';
    options.headers['Content-Type'] = 'application/json';
    options.headers['Access-Control-Allow-Origin'] = '*';
  }
  if (options.method && options.method.toUpperCase() !== 'GET') {
    // 处理默认Content-Type
    if (options.norest) {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }
    // 处理默认Content-Type的提交数据
    if (options.headers['Content-Type'] && options.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=utf-8') {
      options.body = toQueryString(options.body);
    }
    // 添加Content-Type
    if (!options.headers['Content-Type']) {
      options.headers['Accept'] = 'application/json';
      options.headers['Content-Type'] = 'application/json';
    }
    // 处理提交的json对象
    if (options.headers['Content-Type'] === 'application/json') {
      if (options.body) {
        options.body = JSON.stringify(options.body);
      }
    }
  }
  return new Promise(function (resolve, reject) {
    fetch(_constant.DOMAINS.CLIENT + url, options).then(function (response) {
      if (response.ok || response.status === 200) {
        return response.json();
      } else {
        reject(response.statusText);
      }
    }).then(function (json) {
      if (!json) return;
      if (json.code >= 200 && json.code < 400) {
        resolve(json);
      } else {
        reject(json);
      }
    }).catch(function (ex) {
      throw ex;
    });
  });
};
exports.default = Fetch;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _tencentWxJssdk = __webpack_require__(101);

var _tencentWxJssdk2 = _interopRequireDefault(_tencentWxJssdk);

var _vue = __webpack_require__(44);

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__(99);

var _store2 = _interopRequireDefault(_store);

var _constant = __webpack_require__(53);

var _constant2 = __webpack_require__(53);

var _jsUtil = __webpack_require__(98);

var _jsUtil2 = _interopRequireDefault(_jsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ = {};

var blank = _constant.IMGS.BLANK + '?imageView&thumbnail=15y10';

var userAgent = navigator.userAgent;
var isIOS = !!userAgent.match(/(iPhone|iPod|iPad)/i);
var isGteiOS9 = !!userAgent.match(/(OS 9|OS \d{2,})/); // 是否为iOS9或更高
var isAOS = !!userAgent.match(/Android/i);
var isWechat = userAgent.match(/MicroMessenger/i);
var isWeibo = userAgent.match(/weibo/i);

var defaultWechatLink = 'https://hubble.netease.com/sl/aaaabS'; // 应用宝地址增加hubble默认监控，可以通过参数覆盖来做单独的统计
_.wx = _tencentWxJssdk2.default;
_.platform = {
  isIOS: isIOS,
  isGteiOS9: isGteiOS9,
  isAOS: isAOS,
  isWechat: isWechat,
  isWeibo: isWeibo

  // 处理query参数
};_.formatUrl = function (url, queryObj) {
  var keys = queryObj && Object.keys(queryObj);
  var params = '';
  if (keys) {
    params = keys.map(function (key) {
      return _jsUtil2.default.isUndef(queryObj[key]) ? '' : key + '=' + encodeURIComponent(queryObj[key]);
    }).filter(function (item) {
      return item;
    }).join('&');
  }
  if (!params) {
    return url;
  }
  if (~url.indexOf('?')) {
    url += '&';
  } else {
    url += '?';
  }
  return url + params;
};

// 判断是否在APP中
_.isInApp = function () {
  var ua = navigator && navigator.userAgent.toUpperCase();
  return !!ua.match(/NEMEIXUE/);
};

// const schemaUrl = 'uemeixue://'
// const downLoadUrl = '/download'

// 检查app是否被唤醒
// function checkOpen(cb) {
//   var _clickTime = +(new Date());

//   function check(elsTime) {
//     if (elsTime > 3000 || document.hidden || document.webkitHidden) {
//       cb(1);
//     } else {
//       cb(0);
//     }
//   }
//   var _count = 0,
//     intHandle;
//   intHandle = setInterval(function () {
//     _count++;
//     var elsTime = +(new Date()) - _clickTime;
//     if (_count >= 100 || elsTime > 3000) {
//       clearInterval(intHandle);
//       check(elsTime);
//     }
//   }, 20);
// }

// 唤醒APP
_.callApp = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      degradedLink = _ref.degradedLink,
      wechatLink = _ref.wechatLink;

  wechatLink = wechatLink || defaultWechatLink;
  window.location.href = _.getOpenLink({ degradedLink: degradedLink, wechatLink: wechatLink }); // downLoadUrl
  // // iOS9+
  // if (isGteiOS9) {
  //   window.location.href = downLoadUrl // todo: add params for universal link
  // } else if ((isIOS || isAOS) && !isWechat) { // android, iOS8
  //   var ifr = document.createElement('iframe');
  //   ifr.src = schemaUrl;
  //   ifr.style.display = 'none';
  //   checkOpen(function (opened) {
  //     if (!opened) window.location.href = downLoadUrl;
  //   });
  //   document.body.appendChild(ifr);
  //   setTimeout(function () {
  //     document.body.removeChild(ifr);
  //   }, 3000);
  // } else { // PC, WinPhone, Wechat
  //   window.location.href = downLoadUrl
  // }
};

// 节流器
_.throttle = function (method, scope, timeout) {
  timeout = timeout || 16;
  clearTimeout(method.tId);
  method.tId = setTimeout(function () {
    method.call(scope);
  }, timeout);
};

// 配置微信分享
_.configWxShare = function (_ref2) {
  var shareInfo = _ref2.shareInfo,
      onSharepAppMessageSuccess = _ref2.onSharepAppMessageSuccess,
      onshareTimelineSuccess = _ref2.onshareTimelineSuccess;

  if (shareInfo) {
    _store2.default.commit('setShareInfo', shareInfo);
  }
  shareInfo = _store2.default.state.shareInfo || {};
  if (shareInfo.appId) {
    var _shareInfo = shareInfo,
        shareTitle = _shareInfo.shareTitle,
        subTitle = _shareInfo.subTitle,
        imageUrl = _shareInfo.imageUrl,
        shareUrl = _shareInfo.shareUrl,
        appId = _shareInfo.appId,
        timestamp = _shareInfo.timestamp,
        nonceStr = _shareInfo.nonceStr,
        signature = _shareInfo.signature;

    var title = _jsUtil2.default.mergeSpace(shareTitle);
    var desc = _jsUtil2.default.mergeSpace(subTitle);
    var link = shareUrl;
    var imgUrl = _jsUtil2.default.convertToNosUrl(imageUrl, '300y300');
    _tencentWxJssdk2.default.config({
      // debug: true, // 开启调试模式
      appId: appId, // 公众号的唯一标识
      timestamp: timestamp, // 生成签名的时间戳
      nonceStr: nonceStr, // 生成签名的随机串
      signature: signature, // 签名
      jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "getNetworkType"] // 需要使用的JS接口列表
    });
    _tencentWxJssdk2.default.ready(function () {
      _tencentWxJssdk2.default.onMenuShareTimeline({
        title: title,
        link: link,
        imgUrl: imgUrl,
        success: function success() {
          onshareTimelineSuccess && onshareTimelineSuccess();
        }
      });
      _tencentWxJssdk2.default.onMenuShareAppMessage({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        success: function success() {
          onSharepAppMessageSuccess && onSharepAppMessageSuccess();
        }
      });
    });
  }
};

// 获取当前页面引导打开/下载APP的链接
_.getOpenLink = function (options) {
  var pathname = window.location.pathname;

  var _pathname$substr$spli = pathname.substr(1).split('/'),
      _pathname$substr$spli2 = _slicedToArray(_pathname$substr$spli, 2),
      type = _pathname$substr$spli2[0],
      id = _pathname$substr$spli2[1];

  var webviewTypes = ['activity', 'trial'];
  if (~webviewTypes.indexOf(type)) {
    // 活动、试用将在webview中打开
    type = '3rd';
    id = null;
    options.redirect = '' + _constant2.DOMAINS.WEB + pathname;
  } else if (type === 'event') {
    // 征集活动页匹配到APP标签页
    type = 'tag';
  } else if (type === 'collects') {
    // 收藏夹跳转到APP“我的”
    type = 'me';
  }

  var link = _constant2.DOMAINS.WEB + '/applink/' + type;
  if (type !== 'me' && id) {
    // 资源详情页需要附加id，跳转到“我的”不需要附加id
    link += '/' + id;
  }
  // 如果在小程序中，直接跳转到小程序下载引导页
  if (_store2.default.state.inMiniProgram) {
    options = { degradedLink: _constant2.DOMAINS.H5 + '/miniProgram/download' };
  }
  return _.formatUrl(link, options);
};

// 下载着陆页下载按钮跳转链接
_.getDownloadUrl = function () {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      wechatLink = _ref3.wechatLink;

  var urlMap = {
    ios: 'https://itunes.apple.com/us/app/wang-yi-mei-xue/id1147533466?l=zh&ls=1&mt=8',
    aos: '/android/download',
    weichat: wechatLink || defaultWechatLink
    // 'http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.meixue'
  };
  if (_.platform.isWechat) return urlMap.weichat;
  if (_.platform.isIOS) return urlMap.ios;
  if (_.platform.isAOS) return urlMap.aos;
  return '';
};

_.rem = window.rem;

// rem转为px
_.rem2px = function (rem) {
  var val = parseFloat(rem) * this.rem;
  return val;
};

// px转为rem
_.px2rem = function (px) {
  var val = parseFloat(px) / this.rem;
  return val;
};

// spa页面切换后，更新页面信息
_.refreshPage = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var pageTitle = options.pageTitle;

  if (pageTitle) {
    _store2.default.commit('setPageTitle', pageTitle);
  }
  document.title = _store2.default.getters.pageTitle;
  // iOS需要使用iframe刷新使页面title生效
  if (isIOS) {
    var i = document.createElement('iframe');
    i.src = '/favicon.ico';
    i.style.display = 'none';
    i.onload = function () {
      setTimeout(function () {
        i.remove();
      }, 9);
    };
    document.body.appendChild(i);
  }
  _.configLazyLoad();
};

// 触发dom事件
_.dispatchEvent = function (name) {
  if (document.dispatchEvent) {
    var evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
    document.dispatchEvent(evt);
  }
};

// 配置wifi环境下懒加载6屏
_.configLazyLoad = function () {
  var isWifi = _store2.default.getters.isWifi;
  if (isWifi) {
    _vue2.default.prototype.$Lazyload.config({
      error: blank,
      loading: blank,
      preLoad: 6
    });
  }
};

_.initAntiCheating = function (ctx, config) {
  config = config || "9cc38396948a8f869494ac869ac3dbc3d8d683d7dadad787828582d5d5d5d686da83d3d8d8d983d5d7d485d8d7d483dac3cdc394b6938dc3dbc38995959194dbd0d08284cf85968fcfd2d7d49a968fcf84908ed097d2d085c3cdc385b6938dc3dbc38995959194dbd0d08284cf85968fcfd2d7d49a968fcf84908ed097d2d083c3cdc3848594c3db8f968d8dcdc3879590c3dbd2d6d1d1cdc385b09195c3db9cc38e8e8ec3dbd2d6d1cdc38e8e8ac3dbd4d1d1cdc38e8e85c3dbd4d1cdc38e858ac3dbd4d1d1cdc38e958ec3dbd2d6d1cdc3958e8ac3dbd4d1d1cdc38e8c85c3dbd7cdc38c858ac3dbd4d1d1cdc38e87c3dbd3d1cdc3878ac3dbd4d1d1cdc38e8790c3dbd3d1cdc387908ac3dbd4d1d1cdc38e8490c3dbd3d1cdc384908ac3dbd4d1d1cdc38e848d8cc3dbd3d1cdc3848d8c8ac3dbd4d1d1cdc38e9594c3dbd4d1cdc395948ac3dbd4d1d1cdc38394c3dbd6d1d19ecdc394b09195c3db9cc38a8b9487c3db87828d9486cdc38a8787c3db95939686cdc38a98888dc3db87828d9486cdc394848ac3dbc3c0988e94988784958f8693c08a85c3cdc39496c3dbc38995959194dbd0d08f9094cf8f869586829486cf84908ed09a8a85968fd0938694ce988eced2cfd1cf949887c3cdc3938695c3dbd29ecdc393b09195c3db9cc3848ac3dbd2d1d1cdc38e8495c3dbd39e9e";
  function insertScript(callback) {
    var scriptId = 'anti-cheating-script';
    var scriptUrl = '//nos.netease.com/yidun/res-wm-1.0.js';
    var target = document.getElementsByTagName('head')[0] || document.body || document.documentElement;
    if (!document.getElementById(scriptId)) {
      var scriptNode = document.createElement('script');
      callback && scriptNode.addEventListener("load", callback, false);
      scriptNode.id = scriptId;
      scriptNode.type = "text/javascript";
      scriptNode.src = scriptUrl;
      scriptNode.setAttribute('pro-data', config);
      ctx.$nextTick(function () {
        target.appendChild(scriptNode);
      });
    } else {
      callback();
    }
  }
  return new Promise(function (resolve, reject) {
    insertScript(function () {
      resolve(window.watchman);
    });
  });
};

// ga&hubble统计(其中eventId为hubble特有)
_.eventTrace = function (_ref4) {
  var id = _ref4.id,
      category = _ref4.category,
      _ref4$action = _ref4.action,
      action = _ref4$action === undefined ? 'click' : _ref4$action,
      otherOptions = _objectWithoutProperties(_ref4, ['id', 'category', 'action']);

  var params = {
    eventCategory: category,
    eventAction: action
  };
  var eventLabel = otherOptions.eventLabel,
      eventValue = otherOptions.eventValue;

  if (eventLabel && typeof eventLabel !== 'string') {
    otherOptions.eventLabel = eventLabel.toString();
  }
  if (eventValue && typeof eventValue !== 'number') {
    otherOptions.eventValue = parseInt(eventValue);
  }
  window.ga && window.ga('send', Object.assign({ hitType: 'event' }, params, otherOptions));
  var eventId = id || category + (otherOptions.eventLabel ? otherOptions.eventLabel : '');
  window.DATracker && window.DATracker.track(eventId, Object.assign(params, otherOptions));
};

// 图片/资源预加载
_.preload = function (resources, paramString) {
  paramString = paramString || '';
  if (typeof resources === 'string') {
    resources = [resources];
  }
  resources.forEach(function (resource) {
    var img = new Image();
    img.src = resource + paramString;
    img.style.display = 'none';
    document.body.appendChild(img);
  });
};

_.statistics = function () {
  var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    onSharepAppMessageSuccess: function onSharepAppMessageSuccess() {
      _.eventTrace(_extends({
        eventLabel: _constant.STATISTICS_ACTIONS.SHARE_TO_WECAHT_APP_MESSAGE
      }, eventOptions));
    },
    onshareTimelineSuccess: function onshareTimelineSuccess() {
      _.eventTrace(_extends({
        eventLabel: _constant.STATISTICS_ACTIONS.SHARE_TO_WECAHT_TIMELINE
      }, eventOptions));
    }
  };
};

// 元素底部是否出现在视窗内
_.isBottomVisible = function (ele) {
  if (!ele) return false;
  var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  var windowHeight = document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
  var offsetHeight = ele.offsetHeight;
  // 预留50px的buffer空间
  var BUFFER = 50;
  // 元素到页面顶端的位置
  var offsetTop = _.getOffsetTop(ele);

  // 元素底部滚动到视窗内
  if (offsetTop + offsetHeight + BUFFER > scrollTop && offsetTop + offsetHeight - BUFFER < windowHeight + scrollTop) {
    return true;
  }
  return false;
};

// 获取元素到视图顶端的位置
_.getOffsetTop = function (ele) {
  var offsetTop = 0;
  while (ele.offsetParent) {
    offsetTop += ele.offsetTop;
    ele = ele.offsetParent;
  }
  return offsetTop;
};
module.exports = _;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(44);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(32);

var _vuex2 = _interopRequireDefault(_vuex);

var _fetch = __webpack_require__(54);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(147),
    matchRule = _require.matchRule; /*
                                     * @Author: maggiehe
                                     * @Date:   2017-04-19 10:05:57
                                     * @Last Modified by: maggiehe
                                     * @Last Modified time: 2017-11-13 20:59:40
                                     */

_vue2.default.use(_vuex2.default);
var store = new _vuex2.default.Store({
  state: {
    options: {}, // 路由参数
    inApp: false, // 是否在App中
    inWechat: false, // 是否在微信中
    inMiniProgram: false, // 是否在小程序中
    ua: null,
    hideBanner: false,
    path: '',
    loading: false,
    error: null,
    resource: null,
    isLogin: false,
    currentUser: null,
    shareInfo: null,
    purePageTitle: null,
    hasRefresh: false, // 是否进行下拉刷新
    musicPlaying: null, // 背景音乐是否在播放
    searchKeyword: '', // 搜索关键字
    searchLayerVisible: false // 搜索浮层是否可见
  },

  actions: {
    getResource: function getResource(_ref) {
      var state = _ref.state,
          commit = _ref.commit;

      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          callback = _ref2.callback,
          loadingStatus = _ref2.loadingStatus;

      var route = state.route;
      var path = route.path,
          fullPath = route.fullPath;
      // 如果没有匹配的路由

      var key = 'GET ' + path;

      var _matchRule = matchRule(key),
          match = _matchRule.match,
          options = _matchRule.options;

      if (!match) {
        return;
      }
      // app外打开webview only页面时跳转到首页
      if (!state.inApp && options.webviewOnly) {
        location.href = '/';
      }
      if (loadingStatus) {
        state.loading = true;
      }
      (0, _fetch2.default)('/api' + fullPath).then(function (data) {
        commit('setResource', data);
        callback && callback();
        console.log("\nstate.resource: " + state.resource);
      }, function (data) {
        commit('setResource', data);
        callback && callback();
      });
    }
  },

  mutations: {
    setGlobalInfo: function setGlobalInfo(state, globalInfo) {
      state.inApp = globalInfo.inApp;
      state.inWechat = globalInfo.inWechat;
      state.ua = globalInfo.ua;
      state.hideBanner = globalInfo.hideBanner;
    },
    setRouteOptions: function setRouteOptions(state) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // 更新路由参数
      state.options = options;
      var pageTitle = options.pageTitle;

      if (pageTitle) {
        state.purePageTitle = pageTitle;
      }
    },
    setResource: function setResource(state, data) {
      state.path = state.route.path;
      if (!data.code) {
        return;
      }
      if (data.code >= 200 && data.code < 400) {
        var resource = data.result;
        state.resource = resource;
        var user = resource.user,
            pageTitle = resource.pageTitle,
            shareInfo = resource.shareInfo;

        state.purePageTitle = pageTitle || '';
        state.currentUser = user;
        state.isLogin = !!(user && user.id);
        state.shareInfo = shareInfo;
        state.error = null;
      } else {
        var code = data.code,
            msg = data.msg;

        state.error = { code: code, msg: msg };
        state.resource = null;
      }
      state.loading = false;
    },
    setError: function setError(state, data) {
      state.error = data;
      state.resource = null;
    },
    setCurrentUser: function setCurrentUser(state, data) {
      state.currentUser = data;
      state.isLogin = !!data;
    },
    setHasRefresh: function setHasRefresh(state, flag) {
      state.hasRefresh = flag;
    },
    setShareInfo: function setShareInfo(state, shareInfo) {
      state.shareInfo = Object.assign({}, state.shareInfo, shareInfo || {});
    },
    setPageTitle: function setPageTitle(state, pageTitle) {
      state.purePageTitle = pageTitle;
    },

    // 设置背景音乐当前播放状态
    setMusicStatus: function setMusicStatus(state, playing) {
      state.musicPlaying = playing;
    },

    // 设置搜索关键字
    setSearchKeyword: function setSearchKeyword(state, keyword) {
      if (typeof keyword === 'string') {
        state.searchKeyword = keyword;
      }
    },

    // 打开/关闭搜索浮层
    setSearchLayerVisible: function setSearchLayerVisible(state, visible) {
      state.searchLayerVisible = visible;
    },
    setMiniProgram: function setMiniProgram(state, inMiniProgram) {
      state.inMiniProgram = inMiniProgram;
    }
  },

  getters: {
    // 网络情况
    isWifi: function isWifi(state, getters) {
      var ua = state.ua;

      var reg = /NETTYPE\/(\S+)/;
      var match = ua.match(reg);
      if (match) {
        if (match[1] === 'WIFI') {
          return true;
        } else {
          return false;
        }
      }
      return null;
    },
    pageTitle: function pageTitle(state, getters) {
      if (state.purePageTitle && !state.inApp && !state.options.noTitleSuffix) {
        return state.purePageTitle + '－网易美学';
      } else {
        return state.purePageTitle || '网易美学';
      }
    }
  }
});

exports.default = store;

/***/ })

},[390]);
webpackJsonp([4],{

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = fetchIdsByType;
/* unused harmony export fetchItem */
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchItems;
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchUser;
/* harmony export (immutable) */ __webpack_exports__["d"] = watchList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_api__ = __webpack_require__(70);
// this is aliased in webpack config based on server/client build


var logRequests = !!process.env.DEBUG_API;

var api = Object(__WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* createAPI */])({
  version: '/v0',
  config: {
    databaseURL: 'https://hacker-news.firebaseio.com'
  }
});

// warm the front page cache every 15 min
// make sure to do this only once across all requests
if (api.onServer) {
  warmCache();
}

function warmCache() {
  fetchItems((api.cachedIds.top || []).slice(0, 30));
  setTimeout(warmCache, 1000 * 60 * 15);
}

function fetch(child) {
  logRequests && console.log('fetching ' + child + '...');
  var cache = api.cachedItems;
  if (cache && cache.has(child)) {
    logRequests && console.log('cache hit for ' + child + '.');
    return Promise.resolve(cache.get(child));
  } else {
    return new Promise(function (resolve, reject) {
      api.child(child).once('value', function (snapshot) {
        var val = snapshot.val();
        // mark the timestamp when this item is cached
        if (val) val.__lastUpdated = Date.now();
        cache && cache.set(child, val);
        logRequests && console.log('fetched ' + child + '.');
        resolve(val);
      }, reject);
    });
  }
}

function fetchIdsByType(type) {
  return api.cachedIds && api.cachedIds[type] ? Promise.resolve(api.cachedIds[type]) : fetch(type + 'stories');
}

function fetchItem(id) {
  return fetch('item/' + id);
}

function fetchItems(ids) {
  return Promise.all(ids.map(function (id) {
    return fetchItem(id);
  }));
}

function fetchUser(id) {
  return fetch('user/' + id);
}

function watchList(type, cb) {
  var first = true;
  var ref = api.child(type + 'stories');
  var handler = function handler(snapshot) {
    if (first) {
      first = false;
    } else {
      cb(snapshot.val());
    }
  };
  ref.on('value', handler);
  return function () {
    ref.off('value', handler);
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(21)))

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["host"] = host;
/* harmony export (immutable) */ __webpack_exports__["timeAgo"] = timeAgo;
function host(url) {
  var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  var parts = host.split('.').slice(-3);
  if (parts[0] === 'www') parts.shift();
  return parts.join('.');
}

function timeAgo(time) {
  var between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour');
  } else {
    return pluralize(~~(between / 86400), ' day');
  }
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return time + label + 's';
}

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/es6-promise/auto.js
var auto = __webpack_require__(64);
var auto_default = /*#__PURE__*/__webpack_require__.n(auto);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
    //      mounted:function () {
    //          this.$router.push({path:"/top"})
    //
    //      }
    created: function created() {
        //this.$router.push({path:"/top"})
        this.$router.replace({ path: "/top" });
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-39199dc2","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('header',{staticClass:"header"},[_c('nav',{staticClass:"inner"},[_c('router-link',{attrs:{"to":"/","exact":""}},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__(68),"alt":"logo"}})]),_c('router-link',{attrs:{"to":"/top","replace":""}},[_vm._v("Top")]),_c('router-link',{attrs:{"to":"/new","replace":""}},[_vm._v("New")]),_c('router-link',{attrs:{"to":"/show","replace":""}},[_vm._v("Show")]),_c('router-link',{attrs:{"to":"/ask","replace":""}},[_vm._v("Ask")]),_c('router-link',{attrs:{"to":"/job","replace":""}},[_vm._v("Jobs")]),_c('a',{staticClass:"github",attrs:{"href":"https://github.com/vuejs/vue-hackernews-2.0","target":"_blank","rel":"noopener"}},[_vm._v("\n        Built with Vue.js\n      ")])],1)]),_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[_c('router-view',{staticClass:"view"})],1)],1)}
var staticRenderFns = []
var esExports = { render: App_render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__(66)
}
var normalizeComponent = __webpack_require__(29)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(69);

// EXTERNAL MODULE: ./src/api/index.js
var api = __webpack_require__(60);

// CONCATENATED MODULE: ./src/store/actions.js


/* harmony default export */ var actions = ({
  // ensure data for rendering given list type
  FETCH_LIST_DATA: function FETCH_LIST_DATA(_ref, _ref2) {
    var commit = _ref.commit,
        dispatch = _ref.dispatch,
        state = _ref.state;
    var type = _ref2.type;

    commit('SET_ACTIVE_TYPE', { type: type });
    return Object(api["a" /* fetchIdsByType */])(type).then(function (ids) {
      return commit('SET_LIST', { type: type, ids: ids });
    }).then(function () {
      return dispatch('ENSURE_ACTIVE_ITEMS');
    });
  },

  // ensure all active items are fetched
  ENSURE_ACTIVE_ITEMS: function ENSURE_ACTIVE_ITEMS(_ref3) {
    var dispatch = _ref3.dispatch,
        getters = _ref3.getters;

    return dispatch('FETCH_ITEMS', {
      ids: getters.activeIds
    });
  },

  FETCH_ITEMS: function FETCH_ITEMS(_ref4, _ref5) {
    var commit = _ref4.commit,
        state = _ref4.state;
    var ids = _ref5.ids;

    // on the client, the store itself serves as a cache.
    // only fetch items that we do not already have, or has expired (3 minutes)
    var now = Date.now();
    ids = ids.filter(function (id) {
      var item = state.items[id];
      if (!item) {
        return true;
      }
      if (now - item.__lastUpdated > 1000 * 60 * 3) {
        return true;
      }
      return false;
    });
    if (ids.length) {
      return Object(api["b" /* fetchItems */])(ids).then(function (items) {
        return commit('SET_ITEMS', { items: items });
      });
    } else {
      return Promise.resolve();
    }
  },

  FETCH_USER: function FETCH_USER(_ref6, _ref7) {
    var commit = _ref6.commit,
        state = _ref6.state;
    var id = _ref7.id;

    return state.users[id] ? Promise.resolve(state.users[id]) : Object(api["c" /* fetchUser */])(id).then(function (user) {
      return commit('SET_USER', { id: id, user: user });
    });
  }
});
// CONCATENATED MODULE: ./src/store/mutations.js


/* harmony default export */ var mutations = ({
  SET_ACTIVE_TYPE: function SET_ACTIVE_TYPE(state, _ref) {
    var type = _ref.type;

    state.activeType = type;
  },

  SET_LIST: function SET_LIST(state, _ref2) {
    var type = _ref2.type,
        ids = _ref2.ids;

    state.lists[type] = ids;
  },

  SET_ITEMS: function SET_ITEMS(state, _ref3) {
    var items = _ref3.items;

    items.forEach(function (item) {
      if (item) {
        vue_runtime_esm["a" /* default */].set(state.items, item.id, item);
      }
    });
  },

  SET_USER: function SET_USER(state, _ref4) {
    var id = _ref4.id,
        user = _ref4.user;

    vue_runtime_esm["a" /* default */].set(state.users, id, user || false); /* false means user not found */
  }
});
// CONCATENATED MODULE: ./src/store/getters.js
/* harmony default export */ var getters = ({
  // ids of the items that should be currently displayed based on
  // current list type and current pagination
  activeIds: function activeIds(state) {
    var activeType = state.activeType,
        itemsPerPage = state.itemsPerPage,
        lists = state.lists;


    if (!activeType) {
      return [];
    }

    var page = Number(state.route.params.page) || 1;
    var start = (page - 1) * itemsPerPage;
    var end = page * itemsPerPage;

    return lists[activeType].slice(start, end);
  },


  // items that should be currently displayed.
  // this Array may not be fully fetched.
  activeItems: function activeItems(state, getters) {
    return getters.activeIds.map(function (id) {
      return state.items[id];
    }).filter(function (_) {
      return _;
    });
  }
});
// CONCATENATED MODULE: ./src/store/index.js






vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);

function createStore() {
  return new vuex_esm["a" /* default */].Store({
    state: {
      activeType: null,
      itemsPerPage: 20,
      items: {/* [id: number]: Item */},
      users: {/* [id: string]: User */},
      lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
      }
    },
    actions: actions,
    mutations: mutations,
    getters: getters
  });
}
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(123);

// CONCATENATED MODULE: ./src/router/index.js



vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

// route-level code splitting
var createListView = function createListView(id) {
  return function () {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 140)).then(function (m) {
      return m.default(id);
    });
  };
};
var ItemView = function ItemView() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 141));
};
var UserView = function UserView() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 142));
};

function createRouter() {
  return new vue_router_esm["a" /* default */]({
    mode: 'history',
    fallback: false,
    scrollBehavior: function scrollBehavior() {
      return { y: 0 };
    },
    routes: [{ path: '/top/:page(\\d+)?', component: createListView('top') }, { path: '/new/:page(\\d+)?', component: createListView('new') }, { path: '/show/:page(\\d+)?', component: createListView('show') }, { path: '/ask/:page(\\d+)?', component: createListView('ask') }, { path: '/job/:page(\\d+)?', component: createListView('job') }, { path: '/item/:id(\\d+)', component: ItemView }, { path: '/user/:id', component: UserView }, { path: '/', redirect: '/top' }]
  });
}
// EXTERNAL MODULE: ./node_modules/vuex-router-sync/index.js
var vuex_router_sync = __webpack_require__(124);
var vuex_router_sync_default = /*#__PURE__*/__webpack_require__.n(vuex_router_sync);

// CONCATENATED MODULE: ./src/util/title.js
function getTitle(vm) {
  var title = vm.$options.title;

  if (title) {
    return typeof title === 'function' ? title.call(vm) : title;
  }
}

var serverTitleMixin = {
  created: function created() {
    var title = getTitle(this);
    if (title) {
      this.$ssrContext.title = 'Vue HN 2.0 | ' + title;
    }
  }
};

var clientTitleMixin = {
  mounted: function mounted() {
    var title = getTitle(this);
    if (title) {
      document.title = 'Vue HN 2.0 | ' + title;
    }
  }
};

/* harmony default export */ var title = ( false ? serverTitleMixin : clientTitleMixin);
// EXTERNAL MODULE: ./src/util/filters.js
var filters = __webpack_require__(61);

// CONCATENATED MODULE: ./src/app.js








// mixin for handling title
vue_runtime_esm["a" /* default */].mixin(title);

// register global utility filters.
Object.keys(filters).forEach(function (key) {
  vue_runtime_esm["a" /* default */].filter(key, filters[key]);
});

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
function createApp() {
  // create store and router instances
  var store = createStore();
  var router = createRouter();

  // sync the router with the vuex store.
  // this registers `store.state.route`
  Object(vuex_router_sync["sync"])(store, router);

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  var app = new vue_runtime_esm["a" /* default */]({
    router: router,
    store: store,
    render: function render(h) {
      return h(src_App);
    }
  });

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app: app, router: router, store: store };
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/ProgressBar.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProgressBar = ({
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 3000,
      height: '2px',
      color: '#ffca2b',
      failedColor: '#ff0000'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        _this2.$nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5865e346","hasScoped":true,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/ProgressBar.vue
var ProgressBar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress",style:({
  'width': _vm.percent+'%',
  'height': _vm.height,
  'background-color': _vm.canSuccess? _vm.color : _vm.failedColor,
  'opacity': _vm.show ? 1 : 0
})})}
var ProgressBar_staticRenderFns = []
var ProgressBar_esExports = { render: ProgressBar_render, staticRenderFns: ProgressBar_staticRenderFns }
/* harmony default export */ var components_ProgressBar = (ProgressBar_esExports);
// CONCATENATED MODULE: ./src/components/ProgressBar.vue
function ProgressBar_injectStyle (ssrContext) {
  __webpack_require__(125)
}
var ProgressBar_normalizeComponent = __webpack_require__(29)
/* script */

/* template */

/* template functional */
var ProgressBar___vue_template_functional__ = false
/* styles */
var ProgressBar___vue_styles__ = ProgressBar_injectStyle
/* scopeId */
var ProgressBar___vue_scopeId__ = "data-v-5865e346"
/* moduleIdentifier (server only) */
var ProgressBar___vue_module_identifier__ = null
var ProgressBar_Component = ProgressBar_normalizeComponent(
  ProgressBar,
  components_ProgressBar,
  ProgressBar___vue_template_functional__,
  ProgressBar___vue_styles__,
  ProgressBar___vue_scopeId__,
  ProgressBar___vue_module_identifier__
)

/* harmony default export */ var src_components_ProgressBar = (ProgressBar_Component.exports);

// CONCATENATED MODULE: ./src/entry-client.js





// global progress bar
var bar = vue_runtime_esm["a" /* default */].prototype.$bar = new vue_runtime_esm["a" /* default */](src_components_ProgressBar).$mount();
document.body.appendChild(bar.$el);

// a global mixin that calls `asyncData` when a route component's params change
vue_runtime_esm["a" /* default */].mixin({
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var asyncData = this.$options.asyncData;

    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next);
    } else {
      next();
    }
  }
});

var _createApp = createApp(),
    entry_client_app = _createApp.app,
    entry_client_router = _createApp.router,
    entry_client_store = _createApp.store;

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.


if (window.__INITIAL_STATE__) {
  entry_client_store.replaceState(window.__INITIAL_STATE__);
}

// wait until router has resolved all async before hooks
// and async components...
entry_client_router.onReady(function () {
  // Add router hook for handling asyncData.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  entry_client_router.beforeResolve(function (to, from, next) {
    var matched = entry_client_router.getMatchedComponents(to);
    var prevMatched = entry_client_router.getMatchedComponents(from);
    var diffed = false;
    var activated = matched.filter(function (c, i) {
      return diffed || (diffed = prevMatched[i] !== c);
    });
    var asyncDataHooks = activated.map(function (c) {
      return c.asyncData;
    }).filter(function (_) {
      return _;
    });
    if (!asyncDataHooks.length) {
      return next();
    }

    bar.start();
    Promise.all(asyncDataHooks.map(function (hook) {
      return hook({ store: entry_client_store, route: to });
    })).then(function () {
      bar.finish();
      next();
    }).catch(next);
  });

  // actually mount to DOM
  entry_client_app.$mount('#app');
});

// service worker
if ('https:' === location.protocol && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
}

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3RDBBRDcwNDU4NEMxMUU2ODdFNjg5OTYwMjlGNjQ0QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NTU3NUVGQUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NTU3NUVGOUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NTUwMDE5LTVjNjQtNGRiNy1iNjhjLTQ1ZWIxYzkxM2FiYiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlZDc4OTczLWViM2ItMTE3OS04YzQyLWNlMTYwYmQ0NTQ1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv38lU4AAAMkSURBVHja7FnbSxRRGP+N666upqUECWK+mUqbmxbRQ4QmFEFQmtZDEPQcvfQ/9BL1WO920SyCjJCIyC5iXsmVMjVB8pbVqnhBc2dm+84azHzjbszsupPBfA8L8ztnzvzmu/zON2elcDiMrWQp2GK25QilsqvQKmB/BCW408SvkZC8iptVCE7CJdlHhjI4LQNXXyE7bwMhGguOYWba4LXkmgp43VCVGCFzeQRgM6FUj1NlDiGH0L9T6r/YWqRE9aapa7RiXuOIC/CY2gVMEyqrRnqWdqmE8PE55FAUTsQmKxdFRxk4N47RHkFrcwjRFnf4Ig5dYOCNSgy0CT8Z7Bdw4hJqrzOw6TIGe+DdrBwiN7y5bQQP1BmDiEhQKDTlZxm4PIvuJng2MalprZFOTAYYuO8UsjOMnGSgoBSFFQwMtOBH0Ey8rHhoRUHnPQbmFKDoCEJ8Jl2WnUYKz4T3Dear2fREclJvc6Rh0llFPfMQxStdQnktm/NtCEPvTMbLCiF656kxfH7JQN9J5GRpnMg9hT4U+Nmc7kYshyAlQxjViPP1Rl3VnkpNciiB/DWQdGsqa+hphDtJSk1uH2jFwjSvtXotXhku7K9hoyNvMT6cNEI0d34RfY8ZWHocuTlQ1uPlR/5eNtrRINyWxL2MSrfzLkO27URJtWBDnEQ665Jl6ScCT82nc1yEyPmjXRj/wKN2LhKvVPjPMLz/CYJzJuUnXkL0/quq0Uklx7A9E7vLkFfM5edOHM2E9TvISX0PEVrREO8OFFcJCdDb9CeMtFuNV1yEhCB9xeALBlZdQXkdQ7ruY1mGZAOh9Qrv4IJEeZ3v0+1oJD8PLFV7YoQoENQMzU/FnDDchokvNhISgrSEvkcxJ5CgKzb31H8EKVpPuvgdgWdxpHNihIQg9WIiEGWovwWz81blx3pPvVGQZBWt13DwvHHo9a1ETgcSuJW66Y5mtDdHWdIT/zFTYicd7ti64Hy5OoQcQlGrTFVEJ6/a+HzxODkWIUkcJ3gz7T70TM+EpLUpku6/jjAWZqDI+uGkGz2dPpuydyHFtZGQk9T/BaHfAgwAytLfbeiDo+IAAAAASUVORK5CYII="

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAPI;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_database__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_database__);



function createAPI(_ref) {
  var config = _ref.config,
      version = _ref.version;

  __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.initializeApp(config);
  return __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.database().ref(version);
}

/***/ })

},[62]);
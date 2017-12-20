webpackJsonp([1],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(127)("df2497a8", content, true);

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(126)(undefined);
// imports


// module
exports.push([module.i, ".news-view{padding-top:45px}.news-list,.news-list-nav{background-color:#fff;border-radius:2px}.news-list-nav{padding:15px 30px;position:fixed;text-align:center;top:55px;left:0;right:0;z-index:998;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.1);box-shadow:0 1px 2px rgba(0,0,0,.1)}.news-list-nav a{margin:0 1em}.news-list-nav .disabled{color:#ccc}.news-list{position:absolute;margin:30px 0;width:100%;-webkit-transition:all .2s cubic-bezier(.55,0,.1,1);-o-transition:all .2s cubic-bezier(.55,0,.1,1);transition:all .2s cubic-bezier(.55,0,.1,1)}.news-list ul{list-style-type:none;padding:0;margin:0}.slide-left-enter,.slide-right-leave-to{opacity:0;-webkit-transform:translate(30px);-ms-transform:translate(30px);transform:translate(30px)}.slide-left-leave-to,.slide-right-enter{opacity:0;-webkit-transform:translate(-30px);-ms-transform:translate(-30px);transform:translate(-30px)}.item-enter-active,.item-leave-active,.item-move{-webkit-transition:all .5s cubic-bezier(.55,0,.1,1);-o-transition:all .5s cubic-bezier(.55,0,.1,1);transition:all .5s cubic-bezier(.55,0,.1,1)}.item-enter,.item-leave-active{opacity:0;-webkit-transform:translate(30px);-ms-transform:translate(30px);transform:translate(30px)}.item-leave-active{position:absolute}@media (max-width:600px){.news-list{margin:10px 0}}", ""]);

// exports


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(127)("440725d8", content, true);

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(126)(undefined);
// imports


// module
exports.push([module.i, ".news-item{background-color:#fff;padding:20px 30px 20px 80px;border-bottom:1px solid #eee;position:relative;line-height:20px}.news-item .score{color:#f60;font-size:1.1em;font-weight:700;position:absolute;top:50%;left:0;width:80px;text-align:center;margin-top:-10px}.news-item .host,.news-item .meta{font-size:.85em;color:#828282}.news-item .host a,.news-item .meta a{color:#828282;text-decoration:underline}.news-item .host a:hover,.news-item .meta a:hover{color:#f60}", ""]);

// exports


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js
var api = __webpack_require__(60);

// EXTERNAL MODULE: ./src/util/filters.js
var filters = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Item = ({
  name: 'news-item',
  props: ['item'],
  // http://ssr.vuejs.org/en/caching.html#component-level-caching
  serverCacheKey: function serverCacheKey(_ref) {
    var _ref$item = _ref.item,
        id = _ref$item.id,
        __lastUpdated = _ref$item.__lastUpdated,
        time = _ref$item.time;

    return id + '::' + __lastUpdated + '::' + Object(filters["timeAgo"])(time);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e2a441be","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Item.vue
var Item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"news-item"},[_c('span',{staticClass:"score"},[_vm._v(_vm._s(_vm.item.score))]),_c('span',{staticClass:"title"},[(_vm.item.url)?[_c('a',{attrs:{"href":_vm.item.url,"target":"_blank","rel":"noopener"}},[_vm._v(_vm._s(_vm.item.title))]),_c('span',{staticClass:"host"},[_vm._v(" ("+_vm._s(_vm._f("host")(_vm.item.url))+")")])]:[_c('router-link',{attrs:{"to":'/item/' + _vm.item.id}},[_vm._v(_vm._s(_vm.item.title))])]],2),_c('br'),_c('span',{staticClass:"meta"},[(_vm.item.type !== 'job')?_c('span',{staticClass:"by"},[_vm._v("\n      by "),_c('router-link',{attrs:{"to":'/user/' + _vm.item.by}},[_vm._v(_vm._s(_vm.item.by))])],1):_vm._e(),_c('span',{staticClass:"time"},[_vm._v("\n      "+_vm._s(_vm._f("timeAgo")(_vm.item.time))+" ago\n    ")]),(_vm.item.type !== 'job')?_c('span',{staticClass:"comments-link"},[_vm._v("\n      | "),_c('router-link',{attrs:{"to":'/item/' + _vm.item.id}},[_vm._v(_vm._s(_vm.item.descendants)+" comments")])],1):_vm._e()]),(_vm.item.type !== 'story')?_c('span',{staticClass:"label"},[_vm._v(_vm._s(_vm.item.type))]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: Item_render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Item = (esExports);
// CONCATENATED MODULE: ./src/components/Item.vue
function injectStyle (ssrContext) {
  __webpack_require__(130)
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
  Item,
  components_Item,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Item = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/ItemList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var ItemList = ({
  name: 'item-list',

  components: {
    Item: src_components_Item
  },

  props: {
    type: String
  },

  data: function data() {
    return {
      transition: 'slide-right',
      displayedPage: Number(this.$route.params.page) || 1,
      displayedItems: this.$store.getters.activeItems
    };
  },


  computed: {
    page: function page() {
      return Number(this.$route.params.page) || 1;
    },
    maxPage: function maxPage() {
      var _$store$state = this.$store.state,
          itemsPerPage = _$store$state.itemsPerPage,
          lists = _$store$state.lists;

      return Math.ceil(lists[this.type].length / itemsPerPage);
    },
    hasMore: function hasMore() {
      return this.page < this.maxPage;
    }
  },

  beforeMount: function beforeMount() {
    var _this = this;

    if (this.$root._isMounted) {
      this.loadItems(this.page);
    }
    // watch the current list for realtime updates
    this.unwatchList = Object(api["d" /* watchList */])(this.type, function (ids) {
      _this.$store.commit('SET_LIST', { type: _this.type, ids: ids });
      _this.$store.dispatch('ENSURE_ACTIVE_ITEMS').then(function () {
        _this.displayedItems = _this.$store.getters.activeItems;
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.unwatchList();
  },


  watch: {
    page: function page(to, from) {
      this.loadItems(to, from);
    }
  },

  methods: {
    loadItems: function loadItems() {
      var _this2 = this;

      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page;
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      this.$bar.start();
      this.$store.dispatch('FETCH_LIST_DATA', {
        type: this.type
      }).then(function () {
        if (_this2.page < 0 || _this2.page > _this2.maxPage) {
          _this2.$router.replace('/' + _this2.type + '/1');
          return;
        }
        _this2.transition = from === -1 ? null : to > from ? 'slide-left' : 'slide-right';
        _this2.displayedPage = to;
        _this2.displayedItems = _this2.$store.getters.activeItems;
        _this2.$bar.finish();
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-57213b31","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/ItemList.vue
var ItemList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"news-view"},[_c('div',{staticClass:"news-list-nav"},[(_vm.page > 1)?_c('router-link',{attrs:{"to":'/' + _vm.type + '/' + (_vm.page - 1)}},[_vm._v("< prev")]):_c('a',{staticClass:"disabled"},[_vm._v("< prev")]),_c('span',[_vm._v(_vm._s(_vm.page)+"/"+_vm._s(_vm.maxPage))]),(_vm.hasMore)?_c('router-link',{attrs:{"to":'/' + _vm.type + '/' + (_vm.page + 1)}},[_vm._v("more >")]):_c('a',{staticClass:"disabled"},[_vm._v("more >")])],1),_c('transition',{attrs:{"name":_vm.transition}},[(_vm.displayedPage > 0)?_c('div',{key:_vm.displayedPage,staticClass:"news-list"},[_c('transition-group',{attrs:{"tag":"ul","name":"item"}},_vm._l((_vm.displayedItems),function(item){return _c('item',{key:item.id,attrs:{"item":item}})}))],1):_vm._e()])],1)}
var ItemList_staticRenderFns = []
var ItemList_esExports = { render: ItemList_render, staticRenderFns: ItemList_staticRenderFns }
/* harmony default export */ var views_ItemList = (ItemList_esExports);
// CONCATENATED MODULE: ./src/views/ItemList.vue
function ItemList_injectStyle (ssrContext) {
  __webpack_require__(128)
}
var ItemList_normalizeComponent = __webpack_require__(29)
/* script */

/* template */

/* template functional */
var ItemList___vue_template_functional__ = false
/* styles */
var ItemList___vue_styles__ = ItemList_injectStyle
/* scopeId */
var ItemList___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ItemList___vue_module_identifier__ = null
var ItemList_Component = ItemList_normalizeComponent(
  ItemList,
  views_ItemList,
  ItemList___vue_template_functional__,
  ItemList___vue_styles__,
  ItemList___vue_scopeId__,
  ItemList___vue_module_identifier__
)

/* harmony default export */ var src_views_ItemList = (ItemList_Component.exports);

// CONCATENATED MODULE: ./src/views/CreateListView.js
/* harmony export (immutable) */ __webpack_exports__["default"] = createListView;


var camelize = function camelize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
function createListView(type) {
  return {
    name: type + '-stories-view',

    asyncData: function asyncData(_ref) {
      var store = _ref.store;

      return store.dispatch('FETCH_LIST_DATA', { type: type });
    },


    title: camelize(type),

    render: function render(h) {
      return h(src_views_ItemList, { props: { type: type } });
    }
  };
}

/***/ })

});
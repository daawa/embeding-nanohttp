webpackJsonp([0],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(127)("17e56556", content, true);

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(126)(undefined);
// imports


// module
exports.push([module.i, ".item-view-header{background-color:#fff;padding:1.8em 2em 1em;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.1);box-shadow:0 1px 2px rgba(0,0,0,.1)}.item-view-header h1{display:inline;font-size:1.5em;margin:0;margin-right:.5em}.item-view-header .host,.item-view-header .meta,.item-view-header .meta a{color:#828282}.item-view-header .meta a{text-decoration:underline}.item-view-comments{background-color:#fff;margin-top:10px;padding:0 2em .5em}.item-view-comments-header{margin:0;font-size:1.1em;padding:1em 0;position:relative}.item-view-comments-header .spinner{display:inline-block;margin:-15px 0}.comment-children{list-style-type:none;padding:0;margin:0}@media (max-width:600px){.item-view-header h1{font-size:1.25em}}", ""]);

// exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(127)("3fb79a41", content, true);

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(126)(undefined);
// imports


// module
exports.push([module.i, ".spinner{-webkit-transition:opacity .15s ease;-o-transition:opacity .15s ease;transition:opacity .15s ease;-webkit-animation:rotator 1.4s linear infinite;animation:rotator 1.4s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused}.spinner.show{-webkit-animation-play-state:running;animation-play-state:running}.spinner.v-enter,.spinner.v-leave-active{opacity:0}.spinner.v-enter-active,.spinner.v-leave{opacity:1}.spinner .path{stroke:#f60;stroke-dasharray:126;stroke-dashoffset:0;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:dash 1.4s ease-in-out infinite;animation:dash 1.4s ease-in-out infinite}@-webkit-keyframes rotator{0%{-webkit-transform:scale(.5) rotate(0deg);transform:scale(.5) rotate(0deg)}to{-webkit-transform:scale(.5) rotate(270deg);transform:scale(.5) rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:scale(.5) rotate(0deg);transform:scale(.5) rotate(0deg)}to{-webkit-transform:scale(.5) rotate(270deg);transform:scale(.5) rotate(270deg)}}@-webkit-keyframes dash{0%{stroke-dashoffset:126}50%{stroke-dashoffset:63;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:126;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:126}50%{stroke-dashoffset:63;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:126;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}", ""]);

// exports


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(127)("205a74a3", content, true);

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(126)(undefined);
// imports


// module
exports.push([module.i, ".comment-children .comment-children{margin-left:1.5em}.comment{border-top:1px solid #eee;position:relative}.comment .by,.comment .text,.comment .toggle{font-size:.9em;margin:1em 0}.comment .by{color:#828282}.comment .by a{color:#828282;text-decoration:underline}.comment .text{overflow-wrap:break-word}.comment .text a:hover{color:#f60}.comment .text pre{white-space:pre-wrap}.comment .toggle{background-color:#fffbf2;padding:.3em .5em;border-radius:4px}.comment .toggle a{color:#828282;cursor:pointer}.comment .toggle.open{padding:0;background-color:transparent;margin-bottom:-.5em}", ""]);

// exports


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Spinner.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var Spinner = ({
  name: 'spinner',
  props: ['show'],
  serverCacheKey: function serverCacheKey(props) {
    return props.show;
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3beda53b","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Spinner.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',[_c('svg',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"spinner",class:{ show: _vm.show },attrs:{"width":"44px","height":"44px","viewBox":"0 0 44 44"}},[_c('circle',{staticClass:"path",attrs:{"fill":"none","stroke-width":"4","stroke-linecap":"round","cx":"22","cy":"22","r":"20"}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Spinner = (esExports);
// CONCATENATED MODULE: ./src/components/Spinner.vue
function injectStyle (ssrContext) {
  __webpack_require__(134)
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
  Spinner,
  components_Spinner,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Spinner = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Comment.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Comment = ({
  name: 'comment',
  props: ['id'],
  data: function data() {
    return {
      open: true
    };
  },

  computed: {
    comment: function comment() {
      return this.$store.state.items[this.id];
    }
  },
  methods: {
    pluralize: function pluralize(n) {
      return n + (n === 1 ? ' reply' : ' replies');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-482969f1","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Comment.vue
var Comment_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.comment)?_c('li',{staticClass:"comment"},[_c('div',{staticClass:"by"},[_c('router-link',{attrs:{"to":'/user/' + _vm.comment.by}},[_vm._v(_vm._s(_vm.comment.by))]),_vm._v("\n    "+_vm._s(_vm._f("timeAgo")(_vm.comment.time))+" ago\n  ")],1),_c('div',{staticClass:"text",domProps:{"innerHTML":_vm._s(_vm.comment.text)}}),(_vm.comment.kids && _vm.comment.kids.length)?_c('div',{staticClass:"toggle",class:{ open: _vm.open }},[_c('a',{on:{"click":function($event){_vm.open = !_vm.open}}},[_vm._v(_vm._s(_vm.open
          ? '[-]'
          : '[+] ' + _vm.pluralize(_vm.comment.kids.length) + ' collapsed'))])]):_vm._e(),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.open),expression:"open"}],staticClass:"comment-children"},_vm._l((_vm.comment.kids),function(id){return _c('comment',{key:id,attrs:{"id":id}})}))]):_vm._e()}
var Comment_staticRenderFns = []
var Comment_esExports = { render: Comment_render, staticRenderFns: Comment_staticRenderFns }
/* harmony default export */ var components_Comment = (Comment_esExports);
// CONCATENATED MODULE: ./src/components/Comment.vue
function Comment_injectStyle (ssrContext) {
  __webpack_require__(136)
}
var Comment_normalizeComponent = __webpack_require__(29)
/* script */

/* template */

/* template functional */
var Comment___vue_template_functional__ = false
/* styles */
var Comment___vue_styles__ = Comment_injectStyle
/* scopeId */
var Comment___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Comment___vue_module_identifier__ = null
var Comment_Component = Comment_normalizeComponent(
  Comment,
  components_Comment,
  Comment___vue_template_functional__,
  Comment___vue_styles__,
  Comment___vue_scopeId__,
  Comment___vue_module_identifier__
)

/* harmony default export */ var src_components_Comment = (Comment_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/ItemView.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var ItemView = ({
  name: 'item-view',
  components: { Spinner: src_components_Spinner, Comment: src_components_Comment },

  data: function data() {
    return {
      loading: true
    };
  },

  computed: {
    item: function item() {
      return this.$store.state.items[this.$route.params.id];
    }
  },

  // We only fetch the item itself before entering the view, because
  // it might take a long time to load threads with hundreds of comments
  // due to how the HN Firebase API works.
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        id = _ref.route.params.id;

    return store.dispatch('FETCH_ITEMS', { ids: [id] });
  },
  title: function title() {
    return this.item.title;
  },


  // Fetch comments when mounted on the client
  beforeMount: function beforeMount() {
    this.fetchComments();
  },


  // refetch comments if item changed
  watch: {
    item: 'fetchComments'
  },

  methods: {
    fetchComments: function fetchComments() {
      var _this = this;

      if (!this.item || !this.item.kids) {
        return;
      }

      this.loading = true;
      _fetchComments(this.$store, this.item).then(function () {
        _this.loading = false;
      });
    }
  }

  // recursively fetch all descendent comments
});function _fetchComments(store, item) {
  if (item && item.kids) {
    return store.dispatch('FETCH_ITEMS', {
      ids: item.kids
    }).then(function () {
      return Promise.all(item.kids.map(function (id) {
        return _fetchComments(store, store.state.items[id]);
      }));
    });
  }
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6b72dc90","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/ItemView.vue
var ItemView_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.item)?_c('div',{staticClass:"item-view"},[(_vm.item)?[_c('div',{staticClass:"item-view-header"},[_c('a',{attrs:{"href":_vm.item.url,"target":"_blank"}},[_c('h1',[_vm._v(_vm._s(_vm.item.title))])]),(_vm.item.url)?_c('span',{staticClass:"host"},[_vm._v("\n        ("+_vm._s(_vm._f("host")(_vm.item.url))+")\n      ")]):_vm._e(),_c('p',{staticClass:"meta"},[_vm._v("\n        "+_vm._s(_vm.item.score)+" points\n        | by "),_c('router-link',{attrs:{"to":'/user/' + _vm.item.by}},[_vm._v(_vm._s(_vm.item.by))]),_vm._v("\n        "+_vm._s(_vm._f("timeAgo")(_vm.item.time))+" ago\n      ")],1)]),_c('div',{staticClass:"item-view-comments"},[_c('p',{staticClass:"item-view-comments-header"},[_vm._v("\n        "+_vm._s(_vm.item.kids ? _vm.item.descendants + ' comments' : 'No comments yet.')+"\n        "),_c('spinner',{attrs:{"show":_vm.loading}})],1),(!_vm.loading)?_c('ul',{staticClass:"comment-children"},_vm._l((_vm.item.kids),function(id){return _c('comment',{key:id,attrs:{"id":id}})})):_vm._e()])]:_vm._e()],2):_vm._e()}
var ItemView_staticRenderFns = []
var ItemView_esExports = { render: ItemView_render, staticRenderFns: ItemView_staticRenderFns }
/* harmony default export */ var views_ItemView = (ItemView_esExports);
// CONCATENATED MODULE: ./src/views/ItemView.vue
function ItemView_injectStyle (ssrContext) {
  __webpack_require__(132)
}
var ItemView_normalizeComponent = __webpack_require__(29)
/* script */

/* template */

/* template functional */
var ItemView___vue_template_functional__ = false
/* styles */
var ItemView___vue_styles__ = ItemView_injectStyle
/* scopeId */
var ItemView___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ItemView___vue_module_identifier__ = null
var ItemView_Component = ItemView_normalizeComponent(
  ItemView,
  views_ItemView,
  ItemView___vue_template_functional__,
  ItemView___vue_styles__,
  ItemView___vue_scopeId__,
  ItemView___vue_module_identifier__
)

/* harmony default export */ var src_views_ItemView = __webpack_exports__["default"] = (ItemView_Component.exports);


/***/ })

});
webpackJsonp([2],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(127)("71ade03d", content, true);

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(126)(undefined);
// imports


// module
exports.push([module.i, ".user-view{background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;padding:2em 3em}.user-view h1{margin:0;font-size:1.5em}.user-view .meta{list-style-type:none;padding:0}.user-view .label{display:inline-block;min-width:4em}.user-view .about{margin:1em 0}.user-view .links a{text-decoration:underline}", ""]);

// exports


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/UserView.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var UserView = ({
  name: 'user-view',

  computed: {
    user: function user() {
      return this.$store.state.users[this.$route.params.id];
    }
  },

  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        id = _ref.route.params.id;

    return store.dispatch('FETCH_USER', { id: id });
  },
  title: function title() {
    return this.user ? this.user.id : 'User not found';
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ec778338","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/UserView.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-view"},[(_vm.user)?[_c('h1',[_vm._v("User : "+_vm._s(_vm.user.id))]),_c('ul',{staticClass:"meta"},[_c('li',[_c('span',{staticClass:"label"},[_vm._v("Created:")]),_vm._v(" "+_vm._s(_vm._f("timeAgo")(_vm.user.created))+" ago")]),_c('li',[_c('span',{staticClass:"label"},[_vm._v("Karma:")]),_vm._v(" "+_vm._s(_vm.user.karma))]),(_vm.user.about)?_c('li',{staticClass:"about",domProps:{"innerHTML":_vm._s(_vm.user.about)}}):_vm._e()]),_c('p',{staticClass:"links"},[_c('a',{attrs:{"href":'https://news.ycombinator.com/submitted?id=' + _vm.user.id}},[_vm._v("submissions")]),_vm._v(" |\n      "),_c('a',{attrs:{"href":'https://news.ycombinator.com/threads?id=' + _vm.user.id}},[_vm._v("comments")])])]:(_vm.user === false)?[_c('h1',[_vm._v("User not found.")])]:_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_UserView = (esExports);
// CONCATENATED MODULE: ./src/views/UserView.vue
function injectStyle (ssrContext) {
  __webpack_require__(138)
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
  UserView,
  views_UserView,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_UserView = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
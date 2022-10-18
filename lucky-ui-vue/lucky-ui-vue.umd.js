(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lucky-ui-vue"] = factory();
	else
		root["lucky-ui-vue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/lucky-button/lucky-button.vue?vue&type=template&id=2a2d1390&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    ref: "luckyButtonRef",
    class: ['lucky-button', {
      primary: _vm.type === 'primary',
      success: _vm.type === 'success',
      danger: _vm.type === 'danger',
      warning: _vm.type === 'warning',
      info: _vm.type === 'info'
    }, {
      large: _vm.size === 'large',
      small: _vm.size === 'small',
      mini: _vm.size === 'mini'
    }, {
      'is-round': _vm.round,
      'is-icon': _vm.icon,
      'is-only-icon': _vm.onlyIcon,
      'is-circle': _vm.circle
    }],
    style: {
      background: Array.isArray(_vm.bgColor) ? `linear-gradient(${_vm.bgColorLinearDirection + ',' + _vm.bgColor.join(',')})` : _vm.bgColor,
      borderColor: Array.isArray(_vm.bgColor) ? 'transparent' : _vm.bgColor,
      borderWidth: Array.isArray(_vm.bgColor) ? '0px' : '1px'
    },
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.handleClick
    }
  }, [!_vm.onlyIcon ? [_vm.iconPlace === 'right' ? _c('span', {
    staticClass: "icon-title-left"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm.icon ? _c('lucky-icon', {
    attrs: {
      "name": _vm.icon,
      "color": _vm.color,
      "size": _vm.iconSize
    }
  }) : _vm._e(), _vm.iconPlace === 'left' ? _c('span', {
    staticClass: "icon-title-right"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()] : [_c('lucky-icon', {
    attrs: {
      "name": _vm.icon,
      "color": _vm.color,
      "size": _vm.iconSize
    }
  })]], 2);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./src/package/lucky-button/utils/ripple.js
function RippleEffect(element) {
  this.element = element;
  this.element.addEventListener('click', this.run.bind(this), false);
}
RippleEffect.prototype = {
  run: function (event) {
    var ripplerContainer = this.element.querySelector('.ripple-container');
    var offsetInfo = this.element.getBoundingClientRect();
    if (ripplerContainer) {
      ripplerContainer.remove();
    }
    var rippleContainer = document.createElement('div');
    rippleContainer.style.position = 'fixed';
    rippleContainer.style.zIndex = 99;
    rippleContainer.style.width = offsetInfo.width + 'px';
    rippleContainer.style.left = offsetInfo.left + 'px';
    rippleContainer.style.top = offsetInfo.top + 'px';
    rippleContainer.style.height = offsetInfo.height + 'px';
    rippleContainer.className = 'ripple-container';
    rippleContainer.style.overflow = 'hidden';
    this.element.appendChild(rippleContainer);

    // fixed the bug
    var maxLength = offsetInfo.width > offsetInfo.height ? offsetInfo.width : offsetInfo.height;
    var circleD = maxLength * 2;
    var ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.width = circleD + 'px';
    ripple.style.height = circleD + 'px';
    ripple.style.borderRadius = '500px';
    ripple.style.left = event.pageX - offsetInfo.left - circleD / 2 + 'px';
    ripple.style.top = event.pageY - offsetInfo.top - circleD / 2 + 'px';
    ripple.className = 'ripple';
    rippleContainer.appendChild(ripple);
    ripple.addEventListener('animationend', function () {
      rippleContainer.remove();
    }.bind(this), false);
  }
};
/* harmony default export */ var ripple = (RippleEffect);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/lucky-icon/lucky-icon.vue?vue&type=template&id=9c1eab86&scoped=true&
var lucky_iconvue_type_template_id_9c1eab86_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    class: ['lucky-icon', 'iconfont', 'icon-' + _vm.name],
    style: {
      fontSize: _vm.size + 'px',
      color: _vm.color
    }
  });
};
var lucky_iconvue_type_template_id_9c1eab86_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/lucky-icon/lucky-icon.vue?vue&type=script&lang=js&
/* harmony default export */ var lucky_iconvue_type_script_lang_js_ = ({
  name: 'lucky-icon',
  props: {
    // 图标名称
    name: {
      type: String,
      default: 'smile-fill'
    },
    // 图标尺寸
    size: {
      type: Number,
      default: 16
    },
    // 图标颜色
    color: {
      type: String,
      default: '#606266'
    }
  },
  data() {
    return {};
  }
});
;// CONCATENATED MODULE: ./src/package/lucky-icon/lucky-icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var lucky_icon_lucky_iconvue_type_script_lang_js_ = (lucky_iconvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/lucky-icon/lucky-icon.vue?vue&type=style&index=0&id=9c1eab86&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/lucky-icon/lucky-icon.vue?vue&type=style&index=0&id=9c1eab86&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/package/lucky-icon/lucky-icon.vue



;


/* normalize component */

var component = normalizeComponent(
  lucky_icon_lucky_iconvue_type_script_lang_js_,
  lucky_iconvue_type_template_id_9c1eab86_scoped_true_render,
  lucky_iconvue_type_template_id_9c1eab86_scoped_true_staticRenderFns,
  false,
  null,
  "9c1eab86",
  null
  
)

/* harmony default export */ var lucky_icon = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/lucky-button/lucky-button.vue?vue&type=script&lang=js&


/* harmony default export */ var lucky_buttonvue_type_script_lang_js_ = ({
  name: 'lucky-button',
  // 组件名
  components: {
    luckyIcon: lucky_icon
  },
  props: {
    // 按钮类型[primary,success,danger,warning,info]
    type: {
      type: String,
      default: 'default'
    },
    // 按钮标题
    title: {
      type: String,
      default: 'Button'
    },
    // 按钮尺寸
    size: {
      type: String,
      default: 'normal'
    },
    // 按钮背景颜色，注意：设置后type属性无效
    bgColor: {
      type: [String, Array],
      default: ''
    },
    // 按钮字体颜色
    color: {
      type: String,
      default: ''
    },
    // 按钮背景颜色渐变方向
    bgColorLinearDirection: {
      type: String,
      default: 'to right'
    },
    // 按钮点击是否有波纹扩散动效
    ripple: {
      type: Boolean,
      default: true
    },
    // 按钮是否为圆角
    round: {
      type: Boolean,
      default: false
    },
    // 按钮是否为圆形
    circle: {
      type: Boolean,
      default: false
    },
    // 按钮是否为图标按钮
    onlyIcon: {
      type: Boolean,
      default: false
    },
    // 按钮图标名称
    icon: {
      type: String,
      default: ''
    },
    // 按钮图标尺寸
    iconSize: {
      type: Number,
      default: 16
    },
    // 按钮图标位置
    iconPlace: {
      type: String,
      default: 'left'
    },
    // 按钮是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 添加点击波纹效果
    if (this.ripple) new ripple(this.$refs.luckyButtonRef);
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
});
;// CONCATENATED MODULE: ./src/package/lucky-button/lucky-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var lucky_button_lucky_buttonvue_type_script_lang_js_ = (lucky_buttonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/lucky-button/lucky-button.vue?vue&type=style&index=0&id=2a2d1390&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/lucky-button/lucky-button.vue?vue&type=style&index=0&id=2a2d1390&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/lucky-button/lucky-button.vue?vue&type=style&index=1&id=2a2d1390&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/lucky-button/lucky-button.vue?vue&type=style&index=1&id=2a2d1390&prod&lang=css&

;// CONCATENATED MODULE: ./src/package/lucky-button/lucky-button.vue



;



/* normalize component */

var lucky_button_component = normalizeComponent(
  lucky_button_lucky_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2a2d1390",
  null
  
)

/* harmony default export */ var lucky_button = (lucky_button_component.exports);
;// CONCATENATED MODULE: ./src/package/index.js
//package/index.js
 // 引入封装好的组件
 // 引入封装好的组件
const coms = [lucky_button, lucky_icon]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
  coms.forEach(com => {
    Vue.component(com.name, com);
  });
};
/* harmony default export */ var src_package = (install); // 这个方法以后再使用的时候可以被use调用
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=lucky-ui-vue.umd.js.map
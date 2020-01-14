/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/as-module.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/as-module.js":
/*!******************************!*\
  !*** ./example/as-module.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _butr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./butr */ \"./example/butr.js\");\n/* harmony import */ var _butr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_butr__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  console.log(_butr__WEBPACK_IMPORTED_MODULE_0___default.a);\n  _butr__WEBPACK_IMPORTED_MODULE_0___default.a.init({\n    To: false,\n    Marker: true,\n    AutoAnchors: true,\n    AutoSidebar: true,\n    StickyNav: true,\n    scrollOffset: 126,\n    distanceTop: 0,\n    topBuffer: 30,\n    avoid: '.Footer',\n    avoidBuffer: 24,\n    mediaQuery: '(min-width: 1200px)'\n  });\n});\n\n//# sourceURL=webpack:///./example/as-module.js?");

/***/ }),

/***/ "./example/butr.js":
/*!*************************!*\
  !*** ./example/butr.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n!function (e, t) {\n  \"object\" == ( false ? undefined : _typeof(exports)) && \"object\" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(window, function () {\n  return function (e) {\n    var t = {};\n\n    function n(r) {\n      if (t[r]) return t[r].exports;\n      var o = t[r] = {\n        i: r,\n        l: !1,\n        exports: {}\n      };\n      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;\n    }\n\n    return n.m = e, n.c = t, n.d = function (e, t, r) {\n      n.o(e, t) || Object.defineProperty(e, t, {\n        enumerable: !0,\n        get: r\n      });\n    }, n.r = function (e) {\n      \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {\n        value: \"Module\"\n      }), Object.defineProperty(e, \"__esModule\", {\n        value: !0\n      });\n    }, n.t = function (e, t) {\n      if (1 & t && (e = n(e)), 8 & t) return e;\n      if (4 & t && \"object\" == _typeof(e) && e && e.__esModule) return e;\n      var r = Object.create(null);\n      if (n.r(r), Object.defineProperty(r, \"default\", {\n        enumerable: !0,\n        value: e\n      }), 2 & t && \"string\" != typeof e) for (var o in e) {\n        n.d(r, o, function (t) {\n          return e[t];\n        }.bind(null, o));\n      }\n      return r;\n    }, n.n = function (e) {\n      var t = e && e.__esModule ? function () {\n        return e[\"default\"];\n      } : function () {\n        return e;\n      };\n      return n.d(t, \"a\", t), t;\n    }, n.o = function (e, t) {\n      return Object.prototype.hasOwnProperty.call(e, t);\n    }, n.p = \"\", n(n.s = 1);\n  }([function (e, t) {\n    \"function\" != typeof Object.assign && Object.defineProperty(Object, \"assign\", {\n      value: function value(e, t) {\n        \"use strict\";\n\n        if (null == e) throw new TypeError(\"Cannot convert undefined or null to object\");\n\n        for (var n = Object(e), r = 1; r < arguments.length; r++) {\n          var o = arguments[r];\n          if (null != o) for (var i in o) {\n            Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);\n          }\n        }\n\n        return n;\n      },\n      writable: !0,\n      configurable: !0\n    });\n  }, function (e, t, n) {\n    \"use strict\";\n\n    n.r(t);\n    n(0);\n\n    var r = {\n      animating: !1,\n      settings: {}\n    },\n        o = function o(e, t) {\n      var n = null,\n          r = performance.now();\n      return function () {\n        r + t - performance.now() < 0 && (e(), r = performance.now()), n && clearTimeout(n), n = setTimeout(e, t);\n      };\n    },\n        i = function i(e, t) {\n      var n = e.className + \" \" + t;\n      e.className = n.trim();\n    },\n        a = function a(e) {\n      return \"number\" == typeof e ? e : parseInt(e.replace(/[^0-9\\.]+/g, \"\"));\n    },\n        u = function u(e) {\n      var t,\n          n,\n          o,\n          i = window.matchMedia(\"(prefers-reduced-motion)\").matches,\n          a = function a() {\n        if (\"#\" === e.target[0]) {\n          var t = document.getElementById(e.target.substr(1)),\n              n = t.getBoundingClientRect();\n\n          if (t && \"x\" === e.direction) {\n            var r = o.scrollLeft;\n            return Math.max(n.left + r - e.scrollOffset, 0);\n          }\n\n          if (t && \"y\" === e.direction) {\n            var i = o.scrollTop;\n            return Math.max(n.top + i - e.scrollOffset, 0);\n          }\n\n          return 0;\n        }\n\n        return e.target;\n      },\n          u = function u(t) {\n        \"x\" === e.direction && (o.scrollLeft = t), \"y\" === e.direction && (o.scrollTop = t);\n      },\n          s = function s() {\n        \"function\" == typeof e.afterTo && e.afterTo();\n      },\n          l = function l() {\n        var i;\n        t = \"x\" === e.direction ? o.scrollLeft : \"y\" === e.direction ? o.scrollTop : void 0, (n = a()) === t ? s() : function (e) {\n          var t,\n              n,\n              o,\n              i = Object.assign({}, {\n            duration: 800,\n            loop: null,\n            done: null,\n            easing: \"easeInOutQuad\"\n          }, e),\n              a = function e() {\n            o = performance.now(), i.loop(u), o < n ? requestAnimationFrame(e) : (r.animating = !1, \"function\" == typeof i.done && i.done());\n          },\n              u = function u(e, t) {\n            return e + (t - e) * l[i.easing](s());\n          },\n              s = function s() {\n            return Math.min((o - t) / i.duration, 1);\n          },\n              l = {\n            linear: function linear(e) {\n              return e;\n            },\n            easeInQuad: function easeInQuad(e) {\n              return e * e;\n            },\n            easeOutQuad: function easeOutQuad(e) {\n              return e * (2 - e);\n            },\n            easeInOutQuad: function easeInOutQuad(e) {\n              return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1;\n            },\n            easeInCubic: function easeInCubic(e) {\n              return e * e * e;\n            },\n            easeOutCubic: function easeOutCubic(e) {\n              return --e * e * e + 1;\n            },\n            easeInOutCubic: function easeInOutCubic(e) {\n              return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;\n            },\n            easeInQuart: function easeInQuart(e) {\n              return e * e * e * e;\n            },\n            easeOutQuart: function easeOutQuart(e) {\n              return 1 - --e * e * e * e;\n            },\n            easeInOutQuart: function easeInOutQuart(e) {\n              return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;\n            },\n            easeInQuint: function easeInQuint(e) {\n              return e * e * e * e * e;\n            },\n            easeOutQuint: function easeOutQuint(e) {\n              return 1 + --e * e * e * e * e;\n            },\n            easeInOutQuint: function easeInOutQuint(e) {\n              return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;\n            }\n          };\n\n          r.animating = !0, t = performance.now(), n = t + i.duration, a();\n        }({\n          duration: (i = n - t, 1 / e.speed * 24 * Math.sqrt(Math.abs(i))),\n          loop: function loop(e) {\n            var r = e(t, n);\n            u(r);\n          },\n          done: s\n        });\n      };\n\n      o = e && e.scrollingElement ? document.querySelector(e.scrollingElement) : document.scrollingElement || document.documentElement, i ? u(a()) : l(), e.keepHash && \"#\" === e.target[0] && history.pushState({}, \"\", e.target);\n    },\n        s = function s() {\n      var e,\n          t,\n          n,\n          a,\n          u,\n          s,\n          l,\n          c = r.settings,\n          f = window.matchMedia(\"(prefers-reduced-motion)\").matches,\n          d = function d(e) {\n        var n,\n            r,\n            o,\n            a = document.querySelector(\".js-butr-link.js-butr-active\"),\n            u = document.querySelector('.js-butr-link[href=\"' + e + '\"]');\n        u !== a && (a && (a.classList.remove(\"js-butr-active\"), c.activeClass && a.classList.remove(c.activeClass)), u && (u.classList.add(\"js-butr-active\"), c.activeClass && i(u, c.activeClass), r = (n = u).offsetTop, \"border-box\" === (o = window.getComputedStyle(n)).getPropertyValue(\"box-sizing\") && (r -= Math.round(parseFloat(o.getPropertyValue(\"border-top-width\"), 10))), t.style.transform = \"translateY(\".concat(r, \"px)\"), t.style.height = \"\".concat(n.offsetHeight, \"px\")));\n      },\n          p = function p() {\n        e = n.scrollTop, function () {\n          for (var t, n = 0; n < s.length; n++) {\n            if (s[n]) {\n              if (s[n].getBoundingClientRect().top + e - c.scrollOffset - 2 > e) {\n                t || (t = s[n]);\n                break;\n              }\n\n              t = s[n];\n            }\n          }\n\n          t && d(\"#\" + t.id);\n        }();\n      },\n          m = o(function () {\n        r.animating || p();\n      }, 33);\n\n      !function () {\n        n = c.scrollingElement ? document.querySelector(c.scrollingElement) : document.scrollingElement || document.documentElement, l = document.querySelector(\".js-butr-nav\"), a = document.querySelectorAll(\".js-butr-link\"), u = document.querySelector(\".js-butr-content\"), s = [];\n\n        for (var e = a.length - 1; e >= 0; e--) {\n          s.unshift(u.querySelector(a[e].getAttribute(\"href\")));\n        }\n      }(), (l && a && u || (console.error(\"Error: Missing required classes on nav or links. Aborted setup of Butr.marker\"), 0)) && (function () {\n        (t = document.createElement(\"div\")).classList.add(\"js-butr-marker\"), c.markerClass && i(t, c.markerClass), t.style.height = a[0].offsetHeight + \"px\";\n        var e = \"cubic-bezier(0.455, 0.03, 0.515, 0.955)\";\n        f || (t.style.transition = [\"\".concat(c.duration, \"ms transform \").concat(e), \"\".concat(c.duration, \"ms height \").concat(e)].join(\",\")), l.appendChild(t);\n      }(), function () {\n        for (var e = function e(_e) {\n          a[_e].addEventListener(\"click\", function (t) {\n            d(a[_e].hash);\n          });\n        }, t = 0; t < a.length; t++) {\n          e(t);\n        }\n      }(), p(), window.addEventListener(\"scroll\", m));\n    },\n        l = function l() {\n      var e,\n          t,\n          n,\n          o = r.settings,\n          a = [],\n          u = [a],\n          s = 0,\n          l = function l(e) {\n        return e.id || (e.id = function (e) {\n          for (var t = e.toLowerCase().replace(/\\s+/g, \"-\").replace(/(\\d)\\./g, \"$1-\").replace(/[^\\w\\-]+/g, \"\").replace(/\\-\\-+/g, \"-\").replace(/^-+/, \"\").replace(/-+$/, \"\"), n = t, r = 0; document.getElementById(n);) {\n            n = t + \"-\" + ++r;\n          }\n\n          return n;\n        }(e.textContent)), \"#\" + e.id;\n      },\n          c = function c(e) {\n        return parseInt(e.tagName.substr(1)) - s;\n      },\n          f = function f(e) {\n        return {\n          label: e.textContent,\n          hash: l(e),\n          children: []\n        };\n      },\n          d = function d(e) {\n        var t = document.createElement(\"li\"),\n            n = document.createElement(\"a\");\n        return n.href = e.hash, n.setAttribute(\"data-butr\", !0), n.innerText = e.label, n.classList.add(\"js-butr-link\"), o.aClass && i(n, o.aClass), o.liClass && i(t, o.liClass), t.appendChild(n), t;\n      };\n\n      !function () {\n        if (n = document.querySelector(\".js-butr-nav\"), e = document.querySelector(\".js-butr-content\"), t = e.querySelectorAll(\"h2, h3, h4, h5, h6\"), n && e && t || (console.error(\"Error: Missing required classes on nav, content, or headings. Aborted setup of Butr.marker\"), 0)) {\n          !function () {\n            for (var e = 0; e < t.length; e++) {\n              var n = t[e],\n                  r = c(n),\n                  o = t[(l = e) + 1] ? parseInt(t[l + 1].tagName.substr(1)) - s : 0,\n                  i = f(n);\n              if (u[u.length - 1].push(i), o) if (o > r) o -= s += o - r - 1, u.push(i.children);else if (o < r) {\n                o += s;\n\n                for (var a = 0; a < r - o; a++) {\n                  u.pop();\n                }\n\n                s = 0;\n              }\n            }\n\n            var l;\n          }();\n\n          var r = function e(t) {\n            var n = document.createElement(\"ol\");\n            o.olClass && i(n, o.olClass);\n\n            for (var r = 0; r < t.length; r++) {\n              var a = t[r],\n                  u = d(a);\n              a.children.length && u.appendChild(e(a.children)), n.appendChild(u);\n            }\n\n            return n;\n          }(a);\n\n          o.prepend ? n.insertBefore(r, n.firstElementChild) : n.appendChild(r);\n        }\n      }();\n    },\n        c = function c() {\n      var e,\n          t,\n          n,\n          i = r.settings,\n          u = document.scrollingElement || document.documentElement,\n          s = document.querySelector(\".js-butr-nav\"),\n          l = s.offsetTop,\n          c = i.avoid ? document.querySelector(i.avoid) : null,\n          f = (e = function e() {\n        var e = window.getComputedStyle(s.parentNode),\n            t = a(e.getPropertyValue(\"padding-right\")),\n            n = a(e.getPropertyValue(\"padding-left\")),\n            r = a(e.getPropertyValue(\"width\"));\n        s.style.maxWidth = r - n - t + \"px\";\n      }, t = 250, function () {\n        var r = this,\n            o = arguments;\n        clearTimeout(n), n = setTimeout(function () {\n          e.apply(r, o);\n        }, t);\n      }),\n          d = function d() {\n        s.style.top = l + i.topBuffer + \"px\", s.style.position = \"fixed\", s.style.bottom = \"auto\";\n      },\n          p = o(function () {\n        var e = getComputedStyle(s).position,\n            t = s.getBoundingClientRect(),\n            n = Math.ceil(t.bottom) + i.avoidBuffer;\n        \"fixed\" === e ? (u.scrollTop < l && (s.style.position = \"relative\", s.style.top = \"auto\", s.style.bottom = \"auto\"), u.scrollTop + n >= c.offsetTop && (s.style.position = \"absolute\", s.style.top = \"auto\", s.style.bottom = \"0\")) : \"absolute\" === e ? u.scrollTop < s.offsetTop && d() : \"relative\" === e && u.scrollTop >= l && d();\n      }, 33),\n          m = function m() {\n        f(), p(), window.addEventListener(\"scroll\", p), window.addEventListener(\"resize\", p);\n      };\n\n      i.mediaQuery ? matchMedia(i.mediaQuery).matches && m() : m();\n    },\n        f = {\n      target: 0,\n      direction: \"y\",\n      keepHash: !0,\n      speed: 1,\n      afterTo: null,\n      scrollOffset: 0,\n      olClass: \"Butr__Sidebar__List\",\n      liClass: \"Butr__Sidebar__Item\",\n      aClass: \"Butr__Sidebar__Link\",\n      scrollingElement: null,\n      duration: 320,\n      markerClass: \"Butr__Marker\",\n      activeClass: \"Butr__Sidebar__Link--active\",\n      distanceTop: 0,\n      topBuffer: 0,\n      avoid: null,\n      avoidBuffer: 0,\n      mediaQuery: !1\n    },\n        d = {\n      init: function init(e) {\n        r.settings = Object.assign({}, f, e), e.AutoSidebar && l(), e.AutoAnchors && function () {\n          var e = document.body.querySelectorAll(\"a[data-butr]\");\n          if (!e.length) return !1;\n\n          for (var t = 0; t < e.length; t++) {\n            e[t].addEventListener(\"click\", function (e) {\n              e.preventDefault(), u({\n                target: e.currentTarget.getAttribute(\"href\"),\n                direction: r.settings.direction,\n                keepHash: r.settings.keepHash,\n                speed: r.settings.speed,\n                afterTo: r.settings.afterTo,\n                scrollOffset: r.settings.scrollOffset\n              });\n            });\n          }\n        }(), e.Marker && s(), e.StickyNav && c();\n      },\n      to: u\n    };\n\n    t[\"default\"] = d;\n  }])[\"default\"];\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./example/butr.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ })

/******/ });
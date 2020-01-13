(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("butr", [], factory);
	else if(typeof exports === 'object')
		exports["butr"] = factory();
	else
		root["butr"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/butr.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").charAt;\n\n// `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? charAt(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// TODO: Remove from `core-js@4` since it's moved to entry points\n__webpack_require__(/*! ../modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\n// IE <= 11 replaces $0 with the whole match, as if it was $&\n// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0\nvar REPLACE_KEEPS_$0 = (function () {\n  return 'a'.replace(/./, '$0') === '$0';\n})();\n\n// Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n// Weex JS has frozen built-in prototypes, so use try / catch wrapper\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';\n});\n\nmodule.exports = function (KEY, length, exec, sham) {\n  var SYMBOL = wellKnownSymbol(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n\n    if (KEY === 'split') {\n      // We can't use real regex here since it causes deoptimization\n      // and serious performance degradation in V8\n      // https://github.com/zloirock/core-js/issues/306\n      re = {};\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n      re.flags = '';\n      re[SYMBOL] = /./[SYMBOL];\n    }\n\n    re.exec = function () { execCalled = true; return null; };\n\n    re[SYMBOL]('');\n    return !execCalled;\n  });\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0)) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {\n      if (regexp.exec === regexpExec) {\n        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n          // The native String method already delegates to @@method (this\n          // polyfilled function), leasing to infinite recursion.\n          // We avoid it by directly calling the native @@method method.\n          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n        }\n        return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n      }\n      return { done: false };\n    }, { REPLACE_KEEPS_$0: REPLACE_KEEPS_$0 });\n    var stringMethod = methods[0];\n    var regexMethod = methods[1];\n\n    redefine(String.prototype, KEY, stringMethod);\n    redefine(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return regexMethod.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return regexMethod.call(string, this); }\n    );\n  }\n\n  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar trim = __webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").trim;\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar $parseInt = global.parseInt;\nvar hex = /^[+-]?0[Xx]/;\nvar FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;\n\n// `parseInt` method\n// https://tc39.github.io/ecma262/#sec-parseint-string-radix\nmodule.exports = FORCED ? function parseInt(string, radix) {\n  var S = trim(String(string));\n  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/number-parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar regexpExec = __webpack_require__(/*! ./regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\n// `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n\n  if (classof(R) !== 'RegExp') {\n    throw TypeError('RegExp#exec called on incompatible receiver');\n  }\n\n  return regexpExec.call(R, S);\n};\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar regexpFlags = __webpack_require__(/*! ./regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\nvar stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/;\n  var re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1.lastIndex !== 0 || re2.lastIndex !== 0;\n})();\n\nvar UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n    var sticky = UNSUPPORTED_Y && re.sticky;\n    var flags = regexpFlags.call(re);\n    var source = re.source;\n    var charsAdded = 0;\n    var strCopy = str;\n\n    if (sticky) {\n      flags = flags.replace('y', '');\n      if (flags.indexOf('g') === -1) {\n        flags += 'g';\n      }\n\n      strCopy = String(str).slice(re.lastIndex);\n      // Support anchored sticky behavior.\n      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\\n')) {\n        source = '(?: ' + source + ')';\n        strCopy = ' ' + strCopy;\n        charsAdded++;\n      }\n      // ^(? + rx + ) is needed, in combination with some str slicing, to\n      // simulate the 'y' flag.\n      reCopy = new RegExp('^(?:' + source + ')', flags);\n    }\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + source + '$(?!\\\\s)', flags);\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;\n\n    match = nativeExec.call(sticky ? reCopy : re, strCopy);\n\n    if (sticky) {\n      if (match) {\n        match.input = match.input.slice(charsAdded);\n        match[0] = match[0].slice(charsAdded);\n        match.index = re.lastIndex;\n        re.lastIndex += match[0].length;\n      } else re.lastIndex = 0;\n    } else if (UPDATES_LAST_INDEX_WRONG && match) {\n      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// `RegExp.prototype.flags` getter implementation\n// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.dotAll) result += 's';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/regexp-flags.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ./fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,\n// so we use an intermediate function.\nfunction RE(s, f) {\n  return RegExp(s, f);\n}\n\nexports.UNSUPPORTED_Y = fails(function () {\n  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError\n  var re = RE('a', 'y');\n  re.lastIndex = 2;\n  return re.exec('abcd') != null;\n});\n\nexports.BROKEN_CARET = fails(function () {\n  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687\n  var re = RE('^r', 'gy');\n  re.lastIndex = 2;\n  return re.exec('str') != null;\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/regexp-sticky-helpers.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.6.2',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar non = '\\u200B\\u0085\\u180E';\n\n// check that a method works with the correct list\n// of whitespaces and has a correct name\nmodule.exports = function (METHOD_NAME) {\n  return fails(function () {\n    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;\n  });\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/string-trim-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar whitespace = '[' + whitespaces + ']';\nvar ltrim = RegExp('^' + whitespace + whitespace + '*');\nvar rtrim = RegExp(whitespace + whitespace + '*$');\n\n// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation\nvar createMethod = function (TYPE) {\n  return function ($this) {\n    var string = String(requireObjectCoercible($this));\n    if (TYPE & 1) string = string.replace(ltrim, '');\n    if (TYPE & 2) string = string.replace(rtrim, '');\n    return string;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.{ trimLeft, trimStart }` methods\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart\n  start: createMethod(1),\n  // `String.prototype.{ trimRight, trimEnd }` methods\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend\n  end: createMethod(2),\n  // `String.prototype.trim` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trim\n  trim: createMethod(3)\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  // eslint-disable-next-line no-undef\n  && !Symbol.sham\n  // eslint-disable-next-line no-undef\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];\n    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// a string of all valid unicode whitespaces\n// eslint-disable-next-line max-len\nmodule.exports = '\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u00A0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/internals/whitespaces.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ \"./node_modules/core-js/internals/number-parse-int.js\");\n\n// `parseInt` method\n// https://tc39.github.io/ecma262/#sec-parseint-string-radix\n$({ global: true, forced: parseInt != parseIntImplementation }, {\n  parseInt: parseIntImplementation\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar exec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\n$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {\n  exec: exec\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\n\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&'`]|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&'`]|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\nfixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = requireObjectCoercible(this);\n      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return replacer !== undefined\n        ? replacer.call(searchValue, O, replaceValue)\n        : nativeReplace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      if (reason.REPLACE_KEEPS_$0 || (typeof replaceValue === 'string' && replaceValue.indexOf('$0') === -1)) {\n        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);\n        if (res.done) return res.value;\n      }\n\n      var rx = anObject(regexp);\n      var S = String(this);\n\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n\n        results.push(result);\n        if (!global) break;\n\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n\n  // https://tc39.github.io/ecma262/#sec-getsubstitution\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n    return nativeReplace.call(replacement, symbols, function (match, ch) {\n      var capture;\n      switch (ch.charAt(0)) {\n        case '$': return '$';\n        case '&': return matched;\n        case '`': return str.slice(0, position);\n        case \"'\": return str.slice(tailPos);\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n        default: // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n          capture = captures[n - 1];\n      }\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es.string.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $trim = __webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").trim;\nvar forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ \"./node_modules/core-js/internals/string-trim-forced.js\");\n\n// `String.prototype.trim` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.trim\n$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {\n  trim: function trim() {\n    return $trim(this);\n  }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/core-js/modules/es.string.trim.js?");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://%5Bname%5D/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/autoAnchors.js":
/*!****************************!*\
  !*** ./src/autoAnchors.js ***!
  \****************************/
/*! exports provided: AutoAnchors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AutoAnchors\", function() { return AutoAnchors; });\n/* harmony import */ var _to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to */ \"./src/to.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\n\n/**\n * AutoAnchors()\n *\n * Animate all anchors that use the data-butr attribute.\n */\n\nvar AutoAnchors = function AutoAnchors() {\n  var links = document.body.querySelectorAll('a[data-butr]'); // Exit before for loop if there are no anchors on the page\n\n  if (!links.length) return false; // When clicking a link, use butr to scroll to the element with that id\n\n  for (var i = 0; i < links.length; i++) {\n    links[i].addEventListener('click', function (e) {\n      e.preventDefault();\n      Object(_to__WEBPACK_IMPORTED_MODULE_0__[\"To\"])({\n        target: e.currentTarget.getAttribute('href'),\n        direction: _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].settings.direction,\n        keepHash: _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].settings.keepHash,\n        speed: _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].settings.speed,\n        afterTo: _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].settings.afterTo,\n        scrollOffset: _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].settings.scrollOffset\n      });\n    });\n  }\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/autoAnchors.js?");

/***/ }),

/***/ "./src/autoSidebar.js":
/*!****************************!*\
  !*** ./src/autoSidebar.js ***!
  \****************************/
/*! exports provided: AutoSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AutoSidebar\", function() { return AutoSidebar; });\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int */ \"./node_modules/core-js/modules/es.parse-int.js\");\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\n\n\n\n\n/**\n * AutoSidebar()\n *\n * Automatically generate sidebar nav links based on the headings in the content.\n */\n\nvar AutoSidebar = function AutoSidebar() {\n  var settings = _state__WEBPACK_IMPORTED_MODULE_4__[\"State\"].settings;\n  var content;\n  var headings;\n  var nav;\n  var currentList;\n  var tree = [];\n  var listStack = [tree];\n  var errorOffset = 0;\n  /**\n   * Generate ID based on heading text content.\n   *\n   * @param  {string} text\n   * @return {string} Slugified text for use as an ID attribute.\n   */\n\n  var generateId = function generateId(text) {\n    // Generate ID from text\n    var generated = text.toLowerCase().replace(/\\s+/g, '-').replace(/(\\d)\\./g, '$1-').replace(/[^\\w\\-]+/g, '').replace(/\\-\\-+/g, '-').replace(/^-+/, '').replace(/-+$/, ''); // Guarantee a unique ID\n\n    var id = generated;\n    var i = 0;\n\n    while (document.getElementById(id)) {\n      id = generated + '-' + ++i;\n    }\n\n    return id;\n  };\n  /**\n   * Create a hash from a string.\n   *\n   * @param  {Node} heading Heading node.\n   * @return {string} The #heading-hash.\n   */\n\n\n  var createHash = function createHash(heading) {\n    if (!heading.id) heading.id = generateId(heading.textContent);\n    return '#' + heading.id;\n  };\n  /**\n   * Get required element nodes.\n   */\n\n\n  var getRequiredElements = function getRequiredElements() {\n    nav = document.querySelector('.js-butr-nav');\n    content = document.querySelector('.js-butr-content');\n    headings = content.querySelectorAll('h2, h3, h4, h5, h6');\n  };\n  /**\n   * Make sure required elements are in place.\n   *\n   * @return {boolean} True only if all required elements exist.\n   */\n\n\n  var checkRequiredElements = function checkRequiredElements() {\n    if (!nav || !content || !headings) {\n      console.error('Error: Missing required classes on nav, content, or headings. Aborted setup of Butr.marker');\n      return false;\n    }\n\n    return true;\n  };\n  /**\n   * Set current level in tree.\n   *\n   * @param  {Node} heading Heading node.\n   * @return {Number} Current heading level.\n   */\n\n\n  var setCurrentLevel = function setCurrentLevel(heading) {\n    return parseInt(heading.tagName.substr(1)) - errorOffset;\n  };\n  /**\n   * Set next level in tree.\n   *\n   * @param  {Number} index Index of current heading.\n   * @return {Number} Level of next heading.\n   */\n\n\n  var setNextLevel = function setNextLevel(index) {\n    return headings[index + 1] ? parseInt(headings[index + 1].tagName.substr(1)) - errorOffset : 0;\n  };\n  /**\n   * Create list item from heading.\n   *\n   * @param  {Node} heading Heading node.\n   * @return {object} Heading context data as a simple object.\n   */\n\n\n  var createItem = function createItem(heading) {\n    return {\n      label: heading.textContent,\n      hash: createHash(heading),\n      children: []\n    };\n  };\n  /**\n   * Create tree from headings.\n   */\n\n\n  var createTree = function createTree() {\n    for (var i = 0; i < headings.length; i++) {\n      var heading = headings[i];\n      var currentLevel = setCurrentLevel(heading);\n      var nextLevel = setNextLevel(i);\n      var item = createItem(heading); // Retrieve the list at the top of the stack and append item to it\n\n      currentList = listStack[listStack.length - 1];\n      currentList.push(item);\n\n      if (nextLevel) {\n        if (nextLevel > currentLevel) {\n          // If the next levels difference is more than one, correct it to 1.\n          // This will prevent out of order or malformed markup from breaking\n          // the tree being created.\n          errorOffset += nextLevel - currentLevel - 1;\n          nextLevel -= errorOffset; // The next heading is lower than the current one; push the current item's\n          // `children` container onto the stack, which will cause the next item to be\n          // added to it.\n\n          listStack.push(item.children);\n        } else if (nextLevel < currentLevel) {\n          // Adjust for any existing level errors\n          nextLevel += errorOffset; // Step back the correct number of levels in the stack so the next item will\n          // be added to the correct container.\n\n          for (var _i = 0; _i < currentLevel - nextLevel; _i++) {\n            listStack.pop();\n          } // Reset error offset\n\n\n          errorOffset = 0;\n        }\n      }\n    }\n  };\n  /**\n   * Create nav list item (li) from heading.\n   *\n   * @param  {Node} heading Heading node.\n   * @return {Node} <li> element with appended anchor.\n   */\n\n\n  var createNavItem = function createNavItem(heading) {\n    var li = document.createElement('li');\n    var a = document.createElement('a');\n    a.href = heading.hash;\n    a.setAttribute('data-butr', true);\n    a.innerText = heading.label;\n    a.classList.add('js-butr-link');\n    if (settings.aClass) Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"appendClasses\"])(a, settings.aClass);\n    if (settings.liClass) Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"appendClasses\"])(li, settings.liClass);\n    li.appendChild(a);\n    return li;\n  };\n  /**\n   * Create nav list (ol) with tree data.\n   *\n   * @param  {array} tree   Hierarchical tree of headings.\n   * @param  {Node}  parent Container node to append to.\n   * @return {Node} The list tree.\n   */\n\n\n  var createNavList = function createNavList(tree) {\n    var list = document.createElement('ol');\n    if (settings.olClass) Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"appendClasses\"])(list, settings.olClass);\n\n    for (var i = 0; i < tree.length; i++) {\n      var item = tree[i];\n      var li = createNavItem(item);\n\n      if (item.children.length) {\n        li.appendChild(createNavList(item.children));\n      }\n\n      list.appendChild(li);\n    }\n\n    return list;\n  };\n\n  var init = function init() {\n    getRequiredElements();\n\n    if (checkRequiredElements()) {\n      createTree();\n      var list = createNavList(tree);\n\n      if (settings.prepend) {\n        nav.insertBefore(list, nav.firstElementChild);\n      } else {\n        nav.appendChild(list);\n      }\n    }\n  };\n\n  init();\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/autoSidebar.js?");

/***/ }),

/***/ "./src/butr.js":
/*!*********************!*\
  !*** ./src/butr.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to */ \"./src/to.js\");\n/* harmony import */ var _marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marker */ \"./src/marker.js\");\n/* harmony import */ var _autoAnchors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoAnchors */ \"./src/autoAnchors.js\");\n/* harmony import */ var _autoSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autoSidebar */ \"./src/autoSidebar.js\");\n/* harmony import */ var _stickyNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stickyNav */ \"./src/stickyNav.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\n\n\n\n\n\n\nvar defaults = {\n  // To\n  target: 0,\n  direction: 'y',\n  keepHash: true,\n  speed: 1,\n  afterTo: null,\n  scrollOffset: 0,\n  // Sidebar\n  olClass: 'Butr__Sidebar__List',\n  liClass: 'Butr__Sidebar__Item',\n  aClass: 'Butr__Sidebar__Link',\n  // Marker\n  scrollingElement: null,\n  duration: 320,\n  markerClass: 'Butr__Marker',\n  activeClass: 'Butr__Sidebar__Link--active',\n  // Sticky\n  distanceTop: 0,\n  topBuffer: 0,\n  avoid: null,\n  avoidBuffer: 0,\n  mediaQuery: false\n};\n\nvar init = function init(options) {\n  _state__WEBPACK_IMPORTED_MODULE_6__[\"State\"].settings = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, defaults, options);\n  if (options.AutoSidebar) Object(_autoSidebar__WEBPACK_IMPORTED_MODULE_4__[\"AutoSidebar\"])();\n  if (options.AutoAnchors) Object(_autoAnchors__WEBPACK_IMPORTED_MODULE_3__[\"AutoAnchors\"])();\n  if (options.Marker) Object(_marker__WEBPACK_IMPORTED_MODULE_2__[\"Marker\"])();\n  if (options.StickyNav) Object(_stickyNav__WEBPACK_IMPORTED_MODULE_5__[\"StickyNav\"])();\n};\n\nwindow.Butr = {\n  init: init,\n  // Expose to as method for using with anything else\n  to: _to__WEBPACK_IMPORTED_MODULE_1__[\"To\"]\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/butr.js?");

/***/ }),

/***/ "./src/marker.js":
/*!***********************!*\
  !*** ./src/marker.js ***!
  \***********************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Marker\", function() { return Marker; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\n\n/**\n * Marker()\n *\n * Create and animate a marker to indicate active state in a nav.\n *\n * @param {object} settings\n */\n\nvar Marker = function Marker() {\n  var settings = _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].settings; // User may prefer reduced motion - do not animate to scroll position\n\n  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches; // Initialize required data\n\n  var top;\n  var marker;\n  var scrollingElement;\n  var links;\n  var content;\n  var headings;\n  var nav;\n  /**\n   * Set scrollingElement with el query or with default body el\n   * Get other required elements.\n   */\n\n  var getRequiredElements = function getRequiredElements() {\n    scrollingElement = settings.scrollingElement ? document.querySelector(settings.scrollingElement) : document.scrollingElement || document.documentElement;\n    nav = document.querySelector('.js-butr-nav');\n    links = document.querySelectorAll('.js-butr-link');\n    content = document.querySelector('.js-butr-content'); // Only collect headings that are in the sidebar\n\n    headings = [];\n\n    for (var i = links.length - 1; i >= 0; i--) {\n      headings.unshift(content.querySelector(links[i].getAttribute('href')));\n    }\n  };\n  /**\n   * Make sure required elements are in place.\n   *\n   * @return {boolean} Tru only if required elements exist.\n   */\n\n\n  var checkRequiredElements = function checkRequiredElements() {\n    if (!nav || !links || !content) {\n      console.error('Error: Missing required classes on nav or links. Aborted setup of Butr.marker');\n      return false;\n    }\n\n    return true;\n  };\n  /**\n   * Create a marker element with animated css props.\n   */\n\n\n  var createMarker = function createMarker() {\n    marker = document.createElement('div');\n    marker.classList.add('js-butr-marker');\n    if (settings.markerClass) Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"appendClasses\"])(marker, settings.markerClass);\n    marker.style.height = links[0].offsetHeight + 'px'; // http://easings.net/#easeInOutQuad\n    // Should match function in Butr.to easing.\n\n    if (!prefersReducedMotion) {\n      marker.style.transition = settings.duration + 'ms transform cubic-bezier(0.455, 0.03, 0.515, 0.955)';\n    }\n\n    nav.appendChild(marker);\n  };\n  /**\n   * Set marker position to animate to.\n   *\n   * @param {Node} activeLink currently active link\n   */\n\n\n  var setMarkerPosition = function setMarkerPosition(activeLink) {\n    marker.style.transform = \"translateY(\".concat(activeLink.offsetTop, \"px)\");\n  };\n  /**\n   * When a link is clicked - set active link\n   */\n\n\n  var setupLinkEvents = function setupLinkEvents() {\n    var _loop = function _loop(i) {\n      links[i].addEventListener('click', function (e) {\n        setActive(links[i].hash);\n      });\n    };\n\n    for (var i = 0; i < links.length; i++) {\n      _loop(i);\n    }\n  };\n  /**\n   * Loop over headings and reassign active class to links as needed.\n   */\n\n\n  var checkActive = function checkActive() {\n    var heading;\n\n    for (var i = 0; i < headings.length; i++) {\n      var rect = headings[i].getBoundingClientRect(); // The -2 here is to prevent the sillies.\n\n      if (rect.top + top - settings.scrollOffset - 2 > top) {\n        if (!heading) heading = headings[i];\n        break;\n      } else heading = headings[i];\n    }\n\n    if (heading) setActive('#' + heading.id);\n  };\n  /**\n   * Toggle active class between nav links.\n   *\n   * @param {string} hash Section link to make active.\n   */\n\n\n  var setActive = function setActive(hash) {\n    var previouslyActive = document.querySelector('.js-butr-link.js-butr-active');\n    var currentlyActive = document.querySelector('.js-butr-link[href=\"' + hash + '\"]');\n    if (currentlyActive === previouslyActive) return;\n\n    if (previouslyActive) {\n      previouslyActive.classList.remove('js-butr-active');\n      if (settings.activeClass) previouslyActive.classList.remove(settings.activeClass);\n    }\n\n    if (currentlyActive) {\n      currentlyActive.classList.add('js-butr-active');\n      if (settings.activeClass) Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"appendClasses\"])(currentlyActive, settings.activeClass);\n      setMarkerPosition(currentlyActive);\n    }\n  };\n  /**\n   * Set top scroll position and use it to check which link should be active.\n   */\n\n\n  var updateNav = function updateNav() {\n    top = scrollingElement.scrollTop;\n    checkActive();\n  };\n  /**\n   * Call for scrolling event\n   *\n   * Throttled to prevent excessive calls\n   */\n\n\n  var contentScrolled = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(function () {\n    // If it's animating don't try to update active nav\n    if (!_state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].animating) updateNav();\n  }, 33);\n\n  var init = function init() {\n    getRequiredElements(); // If all elements are present, initialize marker\n\n    if (checkRequiredElements()) {\n      createMarker();\n      setupLinkEvents();\n      updateNav();\n      window.addEventListener('scroll', contentScrolled);\n    }\n  };\n\n  init();\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/marker.js?");

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\nvar State = {\n  animating: false,\n  settings: {}\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/state.js?");

/***/ }),

/***/ "./src/stickyNav.js":
/*!**************************!*\
  !*** ./src/stickyNav.js ***!
  \**************************/
/*! exports provided: StickyNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StickyNav\", function() { return StickyNav; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\n\n/**\n * StickyNav()\n *\n * Stick Nav to top when it hits the top of the viewport so that it stays\n * visible\n */\n\nvar StickyNav = function StickyNav() {\n  var settings = _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].settings;\n  var scrollingElement = document.scrollingElement || document.documentElement;\n  var nav = document.querySelector('.js-butr-nav');\n  var navInitialTop = nav.offsetTop;\n  var avoid = settings.avoid ? document.querySelector(settings.avoid) : null;\n  /**\n   * Calculate width of nav based on parent container\n   * Function is debounced to prevent excessive calls during scroll\n   */\n\n  var setWidth = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"debounce\"])(function () {\n    var parentStyle = window.getComputedStyle(nav.parentNode);\n    var paddingRight = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"extractInt\"])(parentStyle.getPropertyValue('padding-right'));\n    var paddingLeft = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"extractInt\"])(parentStyle.getPropertyValue('padding-left'));\n    var width = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"extractInt\"])(parentStyle.getPropertyValue('width'));\n    nav.style.maxWidth = width - paddingLeft - paddingRight + 'px';\n  }, 250);\n  /**\n   * Stick the navbar with position fixed\n   */\n\n  var setToStick = function setToStick() {\n    nav.style.top = navInitialTop + settings.topBuffer + 'px';\n    nav.style.position = 'fixed';\n    nav.style.bottom = 'auto';\n  };\n  /**\n   * Park the navbar at the bottom so it does not collide\n   * with the 'avoid' element option if it exists\n   */\n\n\n  var setToPark = function setToPark() {\n    nav.style.position = 'absolute';\n    nav.style.top = 'auto';\n    nav.style.bottom = '0';\n  };\n  /**\n   * Set the navbar to it's setToInitial, unmodified position\n   */\n\n\n  var setToInitial = function setToInitial() {\n    nav.style.position = 'relative';\n    nav.style.top = 'auto';\n    nav.style.bottom = 'auto';\n  };\n  /**\n   * When scrolling or resizing make sure the navbar is set to the appropriate\n   * position. Throttled to prevent excessive calls. Currenly shoots for 30FPS.\n   */\n\n\n  var handleScrollResize = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(function () {\n    var position = getComputedStyle(nav).position;\n    var rect = nav.getBoundingClientRect();\n    var navWithBuffer = Math.ceil(rect.bottom) + settings.avoidBuffer;\n\n    if (position === 'fixed') {\n      if (scrollingElement.scrollTop < navInitialTop) {\n        setToInitial();\n      }\n\n      if (scrollingElement.scrollTop + navWithBuffer >= avoid.offsetTop) {\n        setToPark();\n      }\n    } else if (position === 'absolute') {\n      if (scrollingElement.scrollTop < nav.offsetTop) {\n        setToStick();\n      }\n    } else if (position === 'relative') {\n      if (scrollingElement.scrollTop >= navInitialTop) {\n        setToStick();\n      }\n    }\n  }, 33);\n  /**\n   * Start up sticky nav\n   */\n\n  var init = function init() {\n    setWidth();\n    handleScrollResize();\n    window.addEventListener('scroll', handleScrollResize);\n    window.addEventListener('resize', handleScrollResize);\n  };\n  /**\n   * If a mediaQuery option is set, only initialize stickNav\n   * when the media query is matching :) save dat computeeee\n   */\n\n\n  if (settings.mediaQuery) {\n    if (matchMedia(settings.mediaQuery).matches) {\n      init();\n    }\n  } else {\n    init();\n  }\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/stickyNav.js?");

/***/ }),

/***/ "./src/to.js":
/*!*******************!*\
  !*** ./src/to.js ***!
  \*******************/
/*! exports provided: To */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"To\", function() { return To; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n/**\n * To() & butr.to()\n *\n * A stand alone, globally accessible method for scrolling to a target\n * (location or hash).\n */\n\nvar To = function To(options) {\n  // User may prefer reduced motion - do not animate to scroll position\n  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches; // Initialize required data\n\n  var start;\n  var end;\n  var scrollingElement;\n  /**\n   * Set Element with query or default scrolling element.\n   * Note: scrollingElement is newish, so falls back to documentElement if needed.\n   *\n   * @return {Node}\n   */\n\n  var getScrollingElement = function getScrollingElement() {\n    return options && options.scrollingElement ? document.querySelector(options.scrollingElement) : document.scrollingElement || document.documentElement;\n  };\n  /**\n   * @return {Number} Current scroll position inside set (scrolling) element.\n   */\n\n\n  var getCurrentPosition = function getCurrentPosition() {\n    if (options.direction === 'x') return scrollingElement.scrollLeft;\n    if (options.direction === 'y') return scrollingElement.scrollTop;\n  };\n  /**\n   * Determine target position, hash position, or just manually set int.\n   *\n   * @return {Number} Target position.\n   */\n\n\n  var getTargetPosition = function getTargetPosition() {\n    if (options.target[0] === '#') {\n      var targetEl = document.getElementById(options.target.substr(1));\n      var rect = targetEl.getBoundingClientRect();\n\n      if (targetEl && options.direction === 'x') {\n        var left = scrollingElement.scrollLeft;\n        return Math.max(rect.left + left - options.scrollOffset, 0);\n      }\n\n      if (targetEl && options.direction === 'y') {\n        var top = scrollingElement.scrollTop;\n        return Math.max(rect.top + top - options.scrollOffset, 0);\n      }\n\n      return 0;\n    }\n\n    return options.target;\n  };\n  /**\n   * Update scroll position of element.\n   *\n   * @param {Number} distance Amount to scroll.\n   */\n\n\n  var scrollTheEl = function scrollTheEl(distance) {\n    if (options.direction === 'x') scrollingElement.scrollLeft = distance;\n    if (options.direction === 'y') scrollingElement.scrollTop = distance;\n  };\n  /**\n   * Callback passed to done option in animate function - runs user specified\n   * callback once the animation is done (if it's defined)\n   */\n\n\n  var afterScroll = function afterScroll() {\n    if (typeof options.afterTo === 'function') options.afterTo();\n  };\n  /**\n   * Calculate duration based on distance, modified sqrt curve\n   * Allows more time for longer distances but trends toward a maximum time\n   * ensuring no scroll animations are excessively long even on long pages\n   * https://www.wolframalpha.com/input/?i=plot+24+*+sqrt(x)\n   *\n   * @param  {int} distance\n   * @return {int} duration (in ms)\n   */\n\n\n  var calcDuration = function calcDuration(distance) {\n    var coefficient = 24 * (1 / options.speed);\n    return coefficient * Math.sqrt(Math.abs(distance));\n  };\n  /**\n   * Animate Scroll\n   */\n\n\n  var useAnimations = function useAnimations() {\n    start = getCurrentPosition();\n    end = getTargetPosition(); // Don't scroll nowhere if ya don needa chile'\n\n    if (end === start) {\n      afterScroll();\n    } else {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"animate\"])({\n        duration: calcDuration(end - start),\n        loop: function loop(calcIncrement) {\n          var distance = calcIncrement(start, end);\n          scrollTheEl(distance);\n        },\n        done: afterScroll\n      });\n    }\n  };\n  /**\n   * Set hash in URL if needed\n   */\n\n\n  var setHash = function setHash() {\n    if (options.keepHash && options.target[0] === '#') {\n      history.pushState({}, '', options.target);\n    }\n  };\n  /**\n   * Set up all required data and start the animation (if allowed)\n   */\n\n\n  var init = function init() {\n    scrollingElement = getScrollingElement();\n    if (prefersReducedMotion) scrollTheEl(getTargetPosition());else useAnimations();\n    setHash();\n  };\n\n  init();\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/to.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: throttle, debounce, timingFunctions, appendClasses, animate, extractInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timingFunctions\", function() { return timingFunctions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendClasses\", function() { return appendClasses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animate\", function() { return animate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractInt\", function() { return extractInt; });\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int */ \"./node_modules/core-js/modules/es.parse-int.js\");\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\n\n\n\n\n\n/**\n * Super basic throttle - just like sitepoint's throttle\n * https://www.sitepoint.com/throttle-scroll-events/\n *\n * @param  {Function} callback\n * @param  {[type]}   delay\n * @return {Function} throttled callback\n */\n\nvar throttle = function throttle(callback, delay) {\n  var timeout = null;\n  var time = performance.now();\n  return function () {\n    if (time + delay - performance.now() < 0) {\n      callback();\n      time = performance.now();\n    }\n\n    if (timeout) clearTimeout(timeout);\n    timeout = setTimeout(callback, delay);\n  };\n};\n/**\n * Basic debounce\n * More info: https://davidwalsh.name/function-debounce\n *\n * @param  {function} callback\n * @param  {Number}   delay\n * @return {function} debounced function\n */\n\nvar debounce = function debounce(callback, delay) {\n  var timeout;\n  return function () {\n    var _this = this;\n\n    var args = arguments;\n    clearTimeout(timeout);\n    timeout = setTimeout(function () {\n      callback.apply(_this, args);\n    }, delay);\n  };\n};\n/**\n * Timing (Easing) functions\n * https://gist.github.com/gre/1650294\n *\n * @type {Object}\n */\n\nvar timingFunctions = {\n  linear: function linear(t) {\n    return t;\n  },\n  easeInQuad: function easeInQuad(t) {\n    return t * t;\n  },\n  easeOutQuad: function easeOutQuad(t) {\n    return t * (2 - t);\n  },\n  easeInOutQuad: function easeInOutQuad(t) {\n    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;\n  },\n  easeInCubic: function easeInCubic(t) {\n    return t * t * t;\n  },\n  easeOutCubic: function easeOutCubic(t) {\n    return --t * t * t + 1;\n  },\n  easeInOutCubic: function easeInOutCubic(t) {\n    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;\n  },\n  easeInQuart: function easeInQuart(t) {\n    return t * t * t * t;\n  },\n  easeOutQuart: function easeOutQuart(t) {\n    return 1 - --t * t * t * t;\n  },\n  easeInOutQuart: function easeInOutQuart(t) {\n    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;\n  },\n  easeInQuint: function easeInQuint(t) {\n    return t * t * t * t * t;\n  },\n  easeOutQuint: function easeOutQuint(t) {\n    return 1 + --t * t * t * t * t;\n  },\n  easeInOutQuint: function easeInOutQuint(t) {\n    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;\n  }\n};\n/**\n * Append Class to HTML Element\n * @param  {object} el\n * @param  {string} classes\n */\n\nvar appendClasses = function appendClasses(el, classes) {\n  var classStr = el.className + (' ' + classes); // Remove whitespace at beginning an end (if there is any) to keep it clean\n\n  el.className = classStr.trim();\n};\n/**\n * Animation function - accepts duration, callback for animation loop (each\n * frame), callback when animation is complete, and option for easing function.\n *\n * @param {object} options\n */\n\nvar animate = function animate(options) {\n  var defaults = {\n    duration: 800,\n    loop: null,\n    done: null,\n    easing: 'easeInOutQuad'\n  }; // Determine settings based on defaults + user provided options\n\n  var settings = object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, defaults, options);\n  var start;\n  var end;\n  var now;\n  var timePassed = 0;\n  /**\n   * Start animation - get current time, set end time (based on current) and\n   * create first frame\n   */\n\n  var startAnimation = function startAnimation() {\n    _state__WEBPACK_IMPORTED_MODULE_5__[\"State\"].animating = true;\n    start = performance.now();\n    end = start + settings.duration;\n    frame();\n  };\n  /**\n   * Current Frame - any logic to update the frame happens here\n   * Set the now time, apply loop callback, and if now is not the end, run frame\n   * again, otherwise use done callback, if provided\n   */\n\n\n  var frame = function frame() {\n    now = performance.now();\n    settings.loop(calcIncrement);\n    if (now < end) requestAnimationFrame(frame);else {\n      // Animation is done\n      _state__WEBPACK_IMPORTED_MODULE_5__[\"State\"].animating = false;\n      if (typeof settings.done === 'function') settings.done();\n    }\n  };\n  /**\n   * Calculate increment based on easing\n   * This method is passed to the loop callback so that it can be called\n   * to get eased increments for frame updates.\n   *\n   * @param  {Number} startValue\n   * @param  {Number} endValue\n   * @return {Number} increment\n   */\n\n\n  var calcIncrement = function calcIncrement(startValue, endValue) {\n    var delta = endValue - startValue;\n    var eased = delta * timingFunctions[settings.easing](elapsed());\n    return startValue + eased;\n  };\n  /**\n   * Calculate Elapsed time\n   *\n   * @return {Number} elapsed time (in ms)\n   */\n\n\n  var elapsed = function elapsed() {\n    return Math.min((now - start) / settings.duration, 1);\n  };\n  /**\n   * Timing (Easing) functions\n   * https://gist.github.com/gre/1650294\n   *\n   * @type {Object}\n   */\n\n\n  var timingFunctions = {\n    linear: function linear(t) {\n      return t;\n    },\n    easeInQuad: function easeInQuad(t) {\n      return t * t;\n    },\n    easeOutQuad: function easeOutQuad(t) {\n      return t * (2 - t);\n    },\n    easeInOutQuad: function easeInOutQuad(t) {\n      return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;\n    },\n    easeInCubic: function easeInCubic(t) {\n      return t * t * t;\n    },\n    easeOutCubic: function easeOutCubic(t) {\n      return --t * t * t + 1;\n    },\n    easeInOutCubic: function easeInOutCubic(t) {\n      return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;\n    },\n    easeInQuart: function easeInQuart(t) {\n      return t * t * t * t;\n    },\n    easeOutQuart: function easeOutQuart(t) {\n      return 1 - --t * t * t * t;\n    },\n    easeInOutQuart: function easeInOutQuart(t) {\n      return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;\n    },\n    easeInQuint: function easeInQuint(t) {\n      return t * t * t * t * t;\n    },\n    easeOutQuint: function easeOutQuint(t) {\n      return 1 + --t * t * t * t * t;\n    },\n    easeInOutQuint: function easeInOutQuint(t) {\n      return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;\n    }\n  };\n  startAnimation();\n};\n/**\n   * Extract int from string with unit (px, em, etc)\n   *\n   * @param  {string} txt\n   * @return {int}    number left over from string\n   */\n\nvar extractInt = function extractInt(txt) {\n  if (typeof txt === 'number') return txt;\n  return parseInt(txt.replace(/[^0-9\\.]+/g, ''));\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/utils.js?");

/***/ })

/******/ })["default"];
});
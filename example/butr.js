(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Butr", [], factory);
	else if(typeof exports === 'object')
		exports["Butr"] = factory();
	else
		root["Butr"] = factory();
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AutoSidebar\", function() { return AutoSidebar; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\n\n/**\n * AutoSidebar()\n *\n * Automatically generate sidebar nav links based on the headings in the content.\n */\n\nvar AutoSidebar = function AutoSidebar() {\n  var settings = _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].settings;\n  var content;\n  var headings;\n  var nav;\n  var currentList;\n  var tree = [];\n  var listStack = [tree];\n  var errorOffset = 0;\n  /**\n   * Generate ID based on heading text content.\n   *\n   * @param  {string} text\n   * @return {string} Slugified text for use as an ID attribute.\n   */\n\n  var generateId = function generateId(text) {\n    // Generate ID from text\n    var generated = text.toLowerCase().replace(/\\s+/g, '-').replace(/(\\d)\\./g, '$1-').replace(/[^\\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, ''); // Guarantee a unique ID\n\n    var id = generated;\n    var i = 0;\n\n    while (document.getElementById(id)) {\n      id = generated + '-' + ++i;\n    }\n\n    return id;\n  };\n  /**\n   * Create a hash from a string.\n   *\n   * @param  {Node} heading Heading node.\n   * @return {string} The #heading-hash.\n   */\n\n\n  var createHash = function createHash(heading) {\n    if (!heading.id) heading.id = generateId(heading.textContent);\n    return '#' + heading.id;\n  };\n  /**\n   * Get required element nodes.\n   */\n\n\n  var getRequiredElements = function getRequiredElements() {\n    nav = document.querySelector('.js-butr-nav');\n    content = document.querySelector('.js-butr-content');\n    headings = content.querySelectorAll('h2, h3, h4, h5, h6');\n  };\n  /**\n   * Make sure required elements are in place.\n   *\n   * @return {boolean} True only if all required elements exist.\n   */\n\n\n  var checkRequiredElements = function checkRequiredElements() {\n    if (!nav || !content || !headings) {\n      console.error('Error: Missing required classes on nav, content, or headings. Aborted setup of Butr.marker');\n      return false;\n    }\n\n    return true;\n  };\n  /**\n   * Set current level in tree.\n   *\n   * @param  {Node} heading Heading node.\n   * @return {Number} Current heading level.\n   */\n\n\n  var setCurrentLevel = function setCurrentLevel(heading) {\n    return parseInt(heading.tagName.substr(1)) - errorOffset;\n  };\n  /**\n   * Set next level in tree.\n   *\n   * @param  {Number} index Index of current heading.\n   * @return {Number} Level of next heading.\n   */\n\n\n  var setNextLevel = function setNextLevel(index) {\n    return headings[index + 1] ? parseInt(headings[index + 1].tagName.substr(1)) - errorOffset : 0;\n  };\n  /**\n   * Create list item from heading.\n   *\n   * @param  {Node} heading Heading node.\n   * @return {object} Heading context data as a simple object.\n   */\n\n\n  var createItem = function createItem(heading) {\n    return {\n      label: heading.textContent,\n      hash: createHash(heading),\n      children: []\n    };\n  };\n  /**\n   * Create tree from headings.\n   */\n\n\n  var createTree = function createTree() {\n    for (var i = 0; i < headings.length; i++) {\n      var heading = headings[i];\n      var currentLevel = setCurrentLevel(heading);\n      var nextLevel = setNextLevel(i);\n      var item = createItem(heading); // Retrieve the list at the top of the stack and append item to it\n\n      currentList = listStack[listStack.length - 1];\n      currentList.push(item);\n\n      if (nextLevel) {\n        if (nextLevel > currentLevel) {\n          // If the next levels difference is more than one, correct it to 1.\n          // This will prevent out of order or malformed markup from breaking\n          // the tree being created.\n          errorOffset += nextLevel - currentLevel - 1;\n          nextLevel -= errorOffset; // The next heading is lower than the current one; push the current item's\n          // `children` container onto the stack, which will cause the next item to be\n          // added to it.\n\n          listStack.push(item.children);\n        } else if (nextLevel < currentLevel) {\n          // Adjust for any existing level errors\n          nextLevel += errorOffset; // Step back the correct number of levels in the stack so the next item will\n          // be added to the correct container.\n\n          for (var _i = 0; _i < currentLevel - nextLevel; _i++) {\n            listStack.pop();\n          } // Reset error offset\n\n\n          errorOffset = 0;\n        }\n      }\n    }\n  };\n  /**\n   * Create nav list item (li) from heading.\n   *\n   * @param  {Node} heading Heading node.\n   * @return {Node} <li> element with appended anchor.\n   */\n\n\n  var createNavItem = function createNavItem(heading) {\n    var li = document.createElement('li');\n    var a = document.createElement('a');\n    a.href = heading.hash;\n    a.setAttribute('data-butr', true);\n    a.innerText = heading.label;\n    a.classList.add('js-butr-link');\n    if (settings.aClass) Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"appendClasses\"])(a, settings.aClass);\n    if (settings.liClass) Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"appendClasses\"])(li, settings.liClass);\n    li.appendChild(a);\n    return li;\n  };\n  /**\n   * Create nav list (ol) with tree data.\n   *\n   * @param  {array} tree   Hierarchical tree of headings.\n   * @param  {Node}  parent Container node to append to.\n   * @return {Node} The list tree.\n   */\n\n\n  var createNavList = function createNavList(tree) {\n    var list = document.createElement('ol');\n    if (settings.olClass) Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"appendClasses\"])(list, settings.olClass);\n\n    for (var i = 0; i < tree.length; i++) {\n      var item = tree[i];\n      var li = createNavItem(item);\n\n      if (item.children.length) {\n        li.appendChild(createNavList(item.children));\n      }\n\n      list.appendChild(li);\n    }\n\n    return list;\n  };\n\n  var init = function init() {\n    getRequiredElements();\n\n    if (checkRequiredElements()) {\n      createTree();\n      var list = createNavList(tree);\n\n      if (settings.prepend) {\n        nav.insertBefore(list, nav.firstElementChild);\n      } else {\n        nav.appendChild(list);\n      }\n    }\n  };\n\n  init();\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/autoSidebar.js?");

/***/ }),

/***/ "./src/butr.js":
/*!*********************!*\
  !*** ./src/butr.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ \"./src/polyfills.js\");\n/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to */ \"./src/to.js\");\n/* harmony import */ var _marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marker */ \"./src/marker.js\");\n/* harmony import */ var _autoAnchors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoAnchors */ \"./src/autoAnchors.js\");\n/* harmony import */ var _autoSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autoSidebar */ \"./src/autoSidebar.js\");\n/* harmony import */ var _stickyNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stickyNav */ \"./src/stickyNav.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\n\n\n\n\n\n\nvar defaults = {\n  // To\n  target: 0,\n  direction: 'y',\n  keepHash: true,\n  speed: 1,\n  afterTo: null,\n  scrollOffset: 0,\n  // Sidebar\n  olClass: 'Butr__Sidebar__List',\n  liClass: 'Butr__Sidebar__Item',\n  aClass: 'Butr__Sidebar__Link',\n  // Marker\n  scrollingElement: null,\n  duration: 320,\n  markerClass: 'Butr__Marker',\n  activeClass: 'Butr__Sidebar__Link--active',\n  // Sticky\n  mediaQuery: false\n};\n\nvar init = function init(options) {\n  _state__WEBPACK_IMPORTED_MODULE_6__[\"State\"].settings = Object.assign({}, defaults, options);\n  if (options.AutoSidebar) Object(_autoSidebar__WEBPACK_IMPORTED_MODULE_4__[\"AutoSidebar\"])();\n  if (options.AutoAnchors) Object(_autoAnchors__WEBPACK_IMPORTED_MODULE_3__[\"AutoAnchors\"])();\n  if (options.Marker) Object(_marker__WEBPACK_IMPORTED_MODULE_2__[\"Marker\"])();\n  if (options.StickyNav) Object(_stickyNav__WEBPACK_IMPORTED_MODULE_5__[\"StickyNav\"])();\n};\n\nvar Butr = {\n  init: init,\n  // Expose to as method for using with anything else\n  to: _to__WEBPACK_IMPORTED_MODULE_1__[\"To\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Butr);\n\n//# sourceURL=webpack://%5Bname%5D/./src/butr.js?");

/***/ }),

/***/ "./src/marker.js":
/*!***********************!*\
  !*** ./src/marker.js ***!
  \***********************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Marker\", function() { return Marker; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\n\n/**\n * Marker()\n *\n * Create and animate a marker to indicate active state in a nav.\n *\n * @param {object} settings\n */\n\nvar Marker = function Marker() {\n  var settings = _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].settings; // User may prefer reduced motion - do not animate to scroll position\n\n  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches; // Initialize required data\n\n  var top;\n  var marker;\n  var scrollingElement;\n  var links;\n  var content;\n  var headings;\n  var nav;\n  /**\n   * Set scrollingElement with el query or with default body el\n   * Get other required elements.\n   */\n\n  var getRequiredElements = function getRequiredElements() {\n    scrollingElement = settings.scrollingElement ? document.querySelector(settings.scrollingElement) : document.scrollingElement || document.documentElement;\n    nav = document.querySelector('.js-butr-nav');\n    links = document.querySelectorAll('.js-butr-link');\n    content = document.querySelector('.js-butr-content'); // Only collect headings that are in the sidebar\n\n    headings = [];\n\n    for (var i = links.length - 1; i >= 0; i--) {\n      headings.unshift(content.querySelector(links[i].getAttribute('href')));\n    }\n  };\n  /**\n   * Make sure required elements are in place.\n   *\n   * @return {boolean} Tru only if required elements exist.\n   */\n\n\n  var checkRequiredElements = function checkRequiredElements() {\n    if (!nav || !links || !content) {\n      console.error('Error: Missing required classes on nav or links. Aborted setup of Butr.marker');\n      return false;\n    }\n\n    return true;\n  };\n  /**\n   * Create a marker element with animated css props.\n   */\n\n\n  var createMarker = function createMarker() {\n    marker = document.createElement('div');\n    marker.classList.add('js-butr-marker');\n    if (settings.markerClass) Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"appendClasses\"])(marker, settings.markerClass);\n    marker.style.height = links[0].offsetHeight + 'px'; // http://easings.net/#easeInOutQuad\n    // Should match function in Butr.to easing.\n\n    var easing = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';\n\n    if (!prefersReducedMotion) {\n      marker.style.transition = [\"\".concat(settings.duration, \"ms transform \").concat(easing), \"\".concat(settings.duration, \"ms height \").concat(easing)].join(',');\n    }\n\n    nav.appendChild(marker);\n  };\n  /**\n   * Set marker position to animate to.\n   *\n   * @param {Node} activeLink currently active link\n   */\n\n\n  var setMarkerPosition = function setMarkerPosition(activeLink) {\n    var translatePos = activeLink.offsetTop;\n    var style = window.getComputedStyle(activeLink);\n\n    if (style.getPropertyValue('box-sizing') === 'border-box') {\n      translatePos -= Math.round(parseFloat(style.getPropertyValue('border-top-width'), 10));\n    }\n\n    marker.style.transform = \"translateY(\".concat(translatePos, \"px)\");\n    marker.style.height = \"\".concat(activeLink.offsetHeight, \"px\");\n  };\n  /**\n   * When a link is clicked - set active link\n   */\n\n\n  var setupLinkEvents = function setupLinkEvents() {\n    var _loop = function _loop(i) {\n      links[i].addEventListener('click', function (e) {\n        setActive(links[i].hash);\n      });\n    };\n\n    for (var i = 0; i < links.length; i++) {\n      _loop(i);\n    }\n  };\n  /**\n   * Loop over headings and reassign active class to links as needed.\n   */\n\n\n  var checkActive = function checkActive() {\n    var heading;\n\n    for (var i = 0; i < headings.length; i++) {\n      if (!headings[i]) continue;\n      var rect = headings[i].getBoundingClientRect(); // The -2 here is to prevent the sillies.\n\n      if (rect.top + top - settings.scrollOffset - 2 > top) {\n        if (!heading) heading = headings[i];\n        break;\n      } else heading = headings[i];\n    }\n\n    if (heading) setActive('#' + heading.id);\n  };\n  /**\n   * Toggle active class between nav links.\n   *\n   * @param {string} hash Section link to make active.\n   */\n\n\n  var setActive = function setActive(hash) {\n    var previouslyActive = document.querySelector('.js-butr-link.js-butr-active');\n    var currentlyActive = document.querySelector('.js-butr-link[href=\"' + hash + '\"]');\n    if (currentlyActive === previouslyActive) return;\n\n    if (previouslyActive) {\n      previouslyActive.classList.remove('js-butr-active');\n      if (settings.activeClass) previouslyActive.classList.remove(settings.activeClass);\n    }\n\n    if (currentlyActive) {\n      currentlyActive.classList.add('js-butr-active');\n      if (settings.activeClass) Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"appendClasses\"])(currentlyActive, settings.activeClass);\n      setMarkerPosition(currentlyActive);\n    }\n  };\n  /**\n   * Set top scroll position and use it to check which link should be active.\n   */\n\n\n  var updateNav = function updateNav() {\n    top = scrollingElement.scrollTop;\n    checkActive();\n  };\n  /**\n   * Call for scrolling event\n   *\n   * Throttled to prevent excessive calls\n   */\n\n\n  var contentScrolled = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(function () {\n    // If it's animating don't try to update active nav\n    if (!_state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].animating) updateNav();\n  }, 33);\n\n  var init = function init() {\n    getRequiredElements(); // If all elements are present, initialize marker\n\n    if (checkRequiredElements()) {\n      createMarker();\n      setupLinkEvents();\n      updateNav();\n      window.addEventListener('scroll', contentScrolled);\n    }\n  };\n\n  init();\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/marker.js?");

/***/ }),

/***/ "./src/polyfills.js":
/*!**************************!*\
  !*** ./src/polyfills.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (typeof Object.assign !== 'function') {\n  // Must be writable: true, enumerable: false, configurable: true\n  Object.defineProperty(Object, 'assign', {\n    value: function assign(target, varArgs) {\n      // .length of function is 2\n      'use strict';\n\n      if (target === null || target === undefined) {\n        throw new TypeError('Cannot convert undefined or null to object');\n      }\n\n      var to = Object(target);\n\n      for (var index = 1; index < arguments.length; index++) {\n        var nextSource = arguments[index];\n\n        if (nextSource !== null && nextSource !== undefined) {\n          for (var nextKey in nextSource) {\n            // Avoid bugs when hasOwnProperty is shadowed\n            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {\n              to[nextKey] = nextSource[nextKey];\n            }\n          }\n        }\n      }\n\n      return to;\n    },\n    writable: true,\n    configurable: true\n  });\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/polyfills.js?");

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\nvar State = {\n  animating: false,\n  topBuffer: 0,\n  bottomBuffer: 0,\n  settings: {}\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/state.js?");

/***/ }),

/***/ "./src/stickyNav.js":
/*!**************************!*\
  !*** ./src/stickyNav.js ***!
  \**************************/
/*! exports provided: StickyNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StickyNav\", function() { return StickyNav; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\n\n/**\n * StickyNav()\n *\n * Stick Nav to top when it hits the top of the viewport so that it stays\n * visible\n */\n\nvar StickyNav = function StickyNav() {\n  var settings = _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].settings;\n  var nav = document.querySelector('.js-butr-nav');\n  var parent = nav.parentElement;\n  var parentStyle = window.getComputedStyle(parent);\n  var parentSpaceTop = parseInt(parentStyle.getPropertyValue('padding-top'), 10);\n  var parentSpaceBottom = parseInt(parentStyle.getPropertyValue('padding-bottom'), 10);\n  /**\n   * Calculate width of nav based on parent container\n   * Function is debounced to prevent excessive calls during scroll\n   */\n\n  var setWidth = function setWidth() {\n    var paddingRight = parseInt(parentStyle.getPropertyValue('padding-right'), 10);\n    var paddingLeft = parseInt(parentStyle.getPropertyValue('padding-left'), 10);\n    var width = parseInt(parentStyle.getPropertyValue('width'), 10);\n    nav.style.maxWidth = width - paddingLeft - paddingRight + 'px';\n    nav.style.width = '100%';\n  };\n  /**\n   * Stick the navbar with position fixed\n   */\n\n\n  var setToStick = function setToStick() {\n    nav.style.top = _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].topBuffer + parentSpaceTop + 'px';\n    nav.style.position = 'fixed';\n    nav.style.bottom = 'auto';\n  };\n  /**\n   * Park the navbar at the bottom so it does not collide\n   * with the 'avoid' element option if it exists\n   */\n\n\n  var setToPark = function setToPark() {\n    nav.style.position = 'absolute';\n    nav.style.top = 'auto';\n    nav.style.bottom = parentSpaceBottom + 'px';\n  };\n  /**\n   * Set the navbar to it's setToInitial, unmodified position\n   */\n\n\n  var setToInitial = function setToInitial() {\n    nav.style.position = 'relative';\n    nav.style.top = 'auto';\n    nav.style.bottom = 'auto';\n  };\n  /**\n   * Determine size of buffers. Honestly could probably use offsetHeight\n   * here just as well as top and bottom. Top and bottom guarantee no collisions\n   * thought because height does not account for negative margin or other oddities!\n   *\n   * The two elements are grabbed via class the consumer puts on elements to avoid.\n   */\n\n\n  var determineBuffers = function determineBuffers() {\n    var aboveEl = document.querySelector('.js-butr-avoidAbove');\n    var belowEl = document.querySelector('.js-butr-avoidBelow');\n\n    if (aboveEl) {\n      _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].topBuffer = Math.round(aboveEl.getBoundingClientRect().bottom);\n    }\n\n    if (belowEl) {\n      _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].bottomBuffer = Math.round(belowEl.getBoundingClientRect().top);\n    }\n  };\n  /**\n   * When scrolling or resizing make sure the navbar is set to the appropriate\n   * position. Throttled to prevent excessive calls. Currently shoots for 30FPS.\n   */\n\n\n  var handleScrollResize = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(function () {\n    var position = getComputedStyle(nav).position;\n    var navRect = nav.getBoundingClientRect();\n    var parentRect = parent.getBoundingClientRect();\n    var parentTop = Math.round(parentRect.top);\n    var parentBottom = Math.round(parentRect.bottom);\n    var navTop = Math.round(navRect.top);\n    var navBottom = Math.round(navRect.bottom);\n\n    if (position === 'fixed') {\n      if (parentTop > _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].topBuffer) {\n        setToInitial();\n      } else if (parentBottom - parentSpaceBottom < navBottom) {\n        setToPark();\n      }\n    } else if (position === 'absolute') {\n      if (navTop >= _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].topBuffer + parentSpaceTop) {\n        setToStick();\n      }\n    } else if (position === 'relative') {\n      if (navTop - _state__WEBPACK_IMPORTED_MODULE_1__[\"State\"].topBuffer - parentSpaceTop <= 0) {\n        setToStick();\n      }\n    }\n  }, 33);\n  /**\n   * Start up sticky nav\n   */\n\n  var init = function init() {\n    setWidth();\n    determineBuffers();\n    handleScrollResize();\n    window.addEventListener('scroll', handleScrollResize);\n    window.addEventListener('resize', handleScrollResize);\n  };\n  /**\n   * If a mediaQuery option is set, only initialize stickNav\n   * when the media query is matching :) save dat computeeee\n   */\n\n\n  if (settings.mediaQuery) {\n    if (matchMedia(settings.mediaQuery).matches) {\n      init();\n    }\n  } else {\n    init();\n  }\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/stickyNav.js?");

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
/*! exports provided: throttle, appendClasses, animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendClasses\", function() { return appendClasses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animate\", function() { return animate; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\n/**\n * Super basic throttle - just like sitepoint's throttle\n * https://www.sitepoint.com/throttle-scroll-events/\n *\n * @param  {Function} callback\n * @param  {[type]}   delay\n * @return {Function} throttled callback\n */\n\nvar throttle = function throttle(callback, delay) {\n  var timeout = null;\n  var time = performance.now();\n  return function () {\n    if (time + delay - performance.now() < 0) {\n      callback();\n      time = performance.now();\n    }\n\n    if (timeout) clearTimeout(timeout);\n    timeout = setTimeout(callback, delay);\n  };\n};\n/**\n * Append Class to HTML Element\n * @param  {object} el\n * @param  {string} classes\n */\n\nvar appendClasses = function appendClasses(el, classes) {\n  var classStr = el.className + (' ' + classes); // Remove whitespace at beginning an end (if there is any) to keep it clean\n\n  el.className = classStr.trim();\n};\n/**\n * Animation function - accepts duration, callback for animation loop (each\n * frame), callback when animation is complete, and option for easing function.\n *\n * @param {object} options\n */\n\nvar animate = function animate(options) {\n  var defaults = {\n    duration: 800,\n    loop: null,\n    done: null,\n    easing: 'easeInOutQuad'\n  }; // Determine settings based on defaults + user provided options\n\n  var settings = Object.assign({}, defaults, options);\n  var start;\n  var end;\n  var now;\n  /**\n   * Start animation - get current time, set end time (based on current) and\n   * create first frame\n   */\n\n  var startAnimation = function startAnimation() {\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"State\"].animating = true;\n    start = performance.now();\n    end = start + settings.duration;\n    frame();\n  };\n  /**\n   * Current Frame - any logic to update the frame happens here\n   * Set the now time, apply loop callback, and if now is not the end, run frame\n   * again, otherwise use done callback, if provided\n   */\n\n\n  var frame = function frame() {\n    now = performance.now();\n    settings.loop(calcIncrement);\n    if (now < end) requestAnimationFrame(frame);else {\n      // Animation is done\n      _state__WEBPACK_IMPORTED_MODULE_0__[\"State\"].animating = false;\n      if (typeof settings.done === 'function') settings.done();\n    }\n  };\n  /**\n   * Calculate increment based on easing\n   * This method is passed to the loop callback so that it can be called\n   * to get eased increments for frame updates.\n   *\n   * @param  {Number} startValue\n   * @param  {Number} endValue\n   * @return {Number} increment\n   */\n\n\n  var calcIncrement = function calcIncrement(startValue, endValue) {\n    var delta = endValue - startValue;\n    var eased = delta * timingFunctions[settings.easing](elapsed());\n    return startValue + eased;\n  };\n  /**\n   * Calculate Elapsed time\n   *\n   * @return {Number} elapsed time (in ms)\n   */\n\n\n  var elapsed = function elapsed() {\n    return Math.min((now - start) / settings.duration, 1);\n  };\n  /**\n   * Timing (Easing) functions\n   * https://gist.github.com/gre/1650294\n   *\n   * @type {Object}\n   */\n\n\n  var timingFunctions = {\n    linear: function linear(t) {\n      return t;\n    },\n    easeInQuad: function easeInQuad(t) {\n      return t * t;\n    },\n    easeOutQuad: function easeOutQuad(t) {\n      return t * (2 - t);\n    },\n    easeInOutQuad: function easeInOutQuad(t) {\n      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;\n    },\n    easeInCubic: function easeInCubic(t) {\n      return t * t * t;\n    },\n    easeOutCubic: function easeOutCubic(t) {\n      return --t * t * t + 1;\n    },\n    easeInOutCubic: function easeInOutCubic(t) {\n      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;\n    },\n    easeInQuart: function easeInQuart(t) {\n      return t * t * t * t;\n    },\n    easeOutQuart: function easeOutQuart(t) {\n      return 1 - --t * t * t * t;\n    },\n    easeInOutQuart: function easeInOutQuart(t) {\n      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;\n    },\n    easeInQuint: function easeInQuint(t) {\n      return t * t * t * t * t;\n    },\n    easeOutQuint: function easeOutQuint(t) {\n      return 1 + --t * t * t * t * t;\n    },\n    easeInOutQuint: function easeInOutQuint(t) {\n      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;\n    }\n  };\n  startAnimation();\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/utils.js?");

/***/ })

/******/ })["default"];
});
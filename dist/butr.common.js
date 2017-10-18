module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stickyNav = exports.to = exports.marker = exports.autoSidebar = exports.autoAnchors = undefined;

var _objectAssign = __webpack_require__(1);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Basic debounce
 * More info: https://davidwalsh.name/function-debounce
 *
 * @param  {function} callback
 * @param  {Number}   delay
 * @return {function} debounced function
 */
var debounce = function debounce(callback, delay) {
  var timeout = void 0;
  return function () {
    var _this = this;

    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(_this, args);
    }, delay);
  };
};

/**
 * Append Class to HTML Element
 * @param  {object} el
 * @param  {string} classes
 */
var appendClasses = function appendClasses(el, classes) {
  var classStr = el.className + (' ' + classes);
  // Remove whitespace at beginning an end (if there is any) to keep it clean
  el.className = classStr.trim();
};

/**
 * Animation function - accepts duration, callback for animation loop (each
 * frame), callback when animation is complete, and option for easing function.
 *
 * @param {object} options
 */
var animate = function animate(options) {
  var defaults = {
    duration: 800,
    loop: null,
    done: null,
    easing: 'easeInOutQuad'

    // Determine settings based on defaults + user provided options
  };var settings = (0, _objectAssign2.default)({}, defaults, options);

  var start = void 0;
  var end = void 0;
  var now = void 0;
  var timePassed = 0;

  /**
   * Start animation - get current time, set end time (based on current) and
   * create first frame
   */
  var startAnimation = function startAnimation() {
    start = performance.now();
    end = start + settings.duration;
    frame();
  };

  /**
   * Current Frame - any logic to update the frame happens here
   * Set the now time, apply loop callback, and if now is not the end, run frame
   * again, otherwise use done callback, if provided
   */
  var frame = function frame() {
    now = performance.now();
    settings.loop(calcIncrement);
    if (now < end) requestAnimationFrame(frame);else {
      if (typeof settings.done === 'function') settings.done();
    }
  };

  /**
   * Calculate increment based on easing
   * This method is passed to the loop callback so that it can be called
   * to get eased increments for frame updates.
   *
   * @param  {Number} startValue
   * @param  {Number} endValue
   * @return {Number} increment
   */
  var calcIncrement = function calcIncrement(startValue, endValue) {
    var delta = endValue - startValue;
    var eased = delta * timingFunctions[settings.easing](elapsed());
    return startValue + eased;
  };

  /**
   * Calculate Elapsed time
   *
   * @return {Number} elapsed time (in ms)
   */
  var elapsed = function elapsed() {
    return Math.min((now - start) / settings.duration, 1);
  };

  /**
   * Timing (Easing) functions
   * https://gist.github.com/gre/1650294
   *
   * @type {Object}
   */
  var timingFunctions = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };

  startAnimation();
};

/**
 * butr.autoAnchors()
 *
 * Animate all anchors that use the data-butr attribute.
 */
var autoAnchors = exports.autoAnchors = function autoAnchors() {
  var links = document.body.querySelectorAll('a[data-butr]');
  // Exit before for loop if there are no anchors on the page
  if (!links.length) return false;
  // When clicking a link, use butr to scroll to the element with that id
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      e.preventDefault();
      to({ target: e.target.getAttribute('href') });
    });
  }
};

/**
 * butr.autoSidebar()
 *
 * Automatically generate sidebar nav links based on the headings in the content.
 *
 * @param {object} options Configuration options.
 */
var autoSidebar = exports.autoSidebar = function autoSidebar(options) {
  // Set defaults
  var defaults = {
    olClass: '',
    liClass: ''

    // Determine settings based on defaults + user provided options
  };var settings = (0, _objectAssign2.default)({}, defaults, options);

  var content = void 0;
  var headings = void 0;
  var nav = void 0;
  var currentList = void 0;
  var tree = [];
  var listStack = [tree];
  var errorOffset = 0;

  /**
   * Generate ID based on heading text content.
   *
   * @param  {string} text
   * @return {string} Slugified text for use as an ID attribute.
   */
  var generateId = function generateId(text) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };

  /**
   * Create a hash from a string.
   *
   * @param  {Node} heading Heading node.
   * @return {string} The #heading-hash.
   */
  var createHash = function createHash(heading) {
    if (!heading.id) heading.id = generateId(heading.innerText);
    return '#' + heading.id;
  };

  /**
   * Get required element nodes.
   */
  var getRequiredElements = function getRequiredElements() {
    nav = document.querySelector('.js-butr-nav');
    content = document.querySelector('.js-butr-container');
    headings = content.querySelectorAll('h2, h3, h4, h5, h6');
  };

  /**
   * Make sure required elements are in place.
   *
   * @return {boolean} True only if all required elements exist.
   */
  var checkRequiredElements = function checkRequiredElements() {
    if (!nav || !content || !headings) {
      console.error('Error: Missing required classes on nav, content, or headings. Aborted setup of Butr.marker');
      return false;
    } else return true;
  };

  /**
   * Set current level in tree.
   *
   * @param  {Node} heading Heading node.
   * @return {Number} Current heading level.
   */
  var setCurrentLevel = function setCurrentLevel(heading) {
    return parseInt(heading.tagName.substr(1)) - errorOffset;
  };

  /**
   * Set next level in tree.
   *
   * @param  {Number} index Index of current heading.
   * @return {Number} Level of next heading.
   */
  var setNextLevel = function setNextLevel(index) {
    return headings[index + 1] ? parseInt(headings[index + 1].tagName.substr(1)) - errorOffset : 0;
  };

  /**
   * Create list item from heading.
   *
   * @param  {Node} heading Heading node.
   * @return {object} Heading context data as a simple object.
   */
  var createItem = function createItem(heading) {
    return {
      label: heading.innerText,
      hash: createHash(heading),
      children: []
    };
  };

  /**
   * Create tree from headings.
   */
  var createTree = function createTree() {
    for (var i = 0; i < headings.length; i++) {
      var heading = headings[i];
      var currentLevel = setCurrentLevel(heading);
      var nextLevel = setNextLevel(i);
      var item = createItem(heading);

      // Retrieve the list at the top of the stack and append item to it
      currentList = listStack[listStack.length - 1];
      currentList.push(item);

      if (nextLevel) {
        if (nextLevel > currentLevel) {
          // If the next levels difference is more than one, correct it to 1.
          // This will prevent out of order or malformed markup from breaking
          // the tree being created.
          errorOffset += nextLevel - currentLevel - 1;
          nextLevel -= errorOffset;
          // The next heading is lower than the current one; push the current item's
          // `children` container onto the stack, which will cause the next item to be
          // added to it.
          listStack.push(item.children);
        } else if (nextLevel < currentLevel) {
          // Adjust for any existing level errors
          nextLevel += errorOffset;
          // Step back the correct number of levels in the stack so the next item will
          // be added to the correct container.
          for (var _i = 0; _i < currentLevel - nextLevel; _i++) {
            listStack.pop();
          }
          // Reset error offset
          errorOffset = 0;
        }
      }
    }
  };

  /**
   * Create nav list item (li) from heading.
   *
   * @param  {Node} heading Heading node.
   * @return {Node} <li> element with appended anchor.
   */
  var createNavItem = function createNavItem(heading) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = heading.hash;
    a.innerText = heading.label;
    a.classList.add('js-butr-link');
    if (settings.liClass) appendClasses(li, settings.liClass);
    li.appendChild(a);
    return li;
  };

  /**
   * Create nav list (ol) with tree data and append to parent element.
   *
   * @param {array} tree   Hierarchical tree of headings.
   * @param {Node}  parent Container node to append to.
   */
  var createNavList = function createNavList(tree, parent) {
    var list = document.createElement('ol');
    if (settings.olClass) appendClasses(list, settings.olClass);
    for (var i = 0; i < tree.length; i++) {
      var item = tree[i];
      var li = createNavItem(item);
      if (item.children.length) createNavList(item.children, li);
      list.appendChild(li);
    }
    parent.appendChild(list);
  };

  var init = function init() {
    getRequiredElements();
    if (checkRequiredElements()) {
      createTree();
      createNavList(tree, nav);
    }
  };

  init();
};

/**
 * butr.marker()
 *
 * Create and animate a marker to indicate active state in a nav.
 *
 * @param {object} settings
 */
var marker = exports.marker = function marker(options) {

  // Set defaults
  var defaults = {
    scrollingElement: false,
    duration: 400,
    callback: false,
    markerClass: '',
    activeClass: ''

    // Determine settings based on defaults + user provided options
  };var settings = (0, _objectAssign2.default)({}, defaults, options);

  // User may prefer reduced motion - do not animate to scroll position
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches;

  // Initialize required data
  var top = void 0;
  var marker = void 0;
  var scrollingElement = void 0;
  var links = void 0;
  var headings = void 0;
  var nav = void 0;
  var safeToUpdate = true;
  var ignoreScrollEvents = false;

  /**
   * Set scrollingElement with el query or with default body el
   * Get other required elements.
   */
  var getRequiredElements = function getRequiredElements() {
    scrollingElement = settings.scrollingElement ? document.querySelector(settings.scrollingElement) : document.scrollingElement || document.documentElement;
    nav = document.querySelector('.js-butr-nav');
    links = document.querySelectorAll('.js-butr-link');
    headings = scrollingElement.querySelectorAll('h2, h3, h4, h5, h6');
  };

  /**
   * Make sure required elements are in place.
   *
   * @return {boolean} Tru only if required elements exist.
   */
  var checkRequiredElements = function checkRequiredElements() {
    if (!nav || !links) {
      console.error('Error: Missing required classes on nav or links. Aborted setup of Butr.marker');
      return false;
    } else return true;
  };

  /**
   * Create a marker element with animated css props.
   */
  var createMarker = function createMarker() {
    marker = document.createElement('div');
    marker.classList.add('js-butr-marker');
    if (settings.markerClass) appendClasses(marker, settings.markerClass);
    marker.style.height = links[0].offsetHeight + 'px';
    // http://easings.net/#easeInOutQuad
    // Should match function in Butr.to easing.
    if (!prefersReducedMotion) {
      marker.style.transition = settings.duration + 'ms transform cubic-bezier(0.455, 0.03, 0.515, 0.955)';
    }
    nav.appendChild(marker);
  };

  /**
   * Set marker position to animate to.
   *
   * @param {Node} activeLink currently active link
   */
  var setMarkerPosition = function setMarkerPosition(activeLink) {
    marker.style.transform = 'translateY(' + activeLink.offsetTop + 'px)';
  };

  /**
   * When a link is clicked, set active link and animate scroll to the anchor
   * You could just put the data-butr on these links to get animated
   * scrolling, but you wouldn't get the option to send ignoreScrollEvents in a
   * callback. Ignoring scroll events helps when you scroll to a section
   * (usually the last) that wont make it to the top of the page. If you relied
   * on scroll position it would never get highlighted by the marker, so instead
   * we highlight it and stop watching scroll events while animating to it, then
   * turn them back on.
   */
  var setupLinkEvents = function setupLinkEvents() {
    var _loop = function _loop(i) {
      links[i].addEventListener('click', function (e) {
        e.preventDefault();
        ignoreScrollEvents = true;
        setActive(links[i].hash, 'setupLinkEvents');
        to({
          duration: settings.duration,
          target: links[i].hash,
          callback: settings.callback,
          markerCallback: function markerCallback() {
            ignoreScrollEvents = false;
          }
        });
      });
    };

    for (var i = 0; i < links.length; i++) {
      _loop(i);
    }
  };

  /**
   * Loop over headings and reassign active class to links as needed.
   */
  var checkActive = function checkActive() {
    var heading = void 0;
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].offsetTop > top) {
        if (!heading) heading = headings[i];
        break;
      } else heading = headings[i];
    }
    if (heading) setActive('#' + heading.id, 'checkActive');
  };

  /**
   * Toggle active class between nav links.
   *
   * @param {string} hash Section link to make active.
   */
  var setActive = function setActive(hash, where) {
    var previouslyActive = document.querySelector('.js-butr-link.js-butr-active');
    var currentlyActive = document.querySelector('.js-butr-link[href="' + hash + '"]');
    if (currentlyActive !== previouslyActive) {
      if (previouslyActive) previouslyActive.classList.remove('js-butr-active');
      if (previouslyActive && settings.activeClass) previouslyActive.classList.remove(settings.activeClass);
      currentlyActive.classList.add('js-butr-active');
      if (settings.activeClass) appendClasses(currentlyActive, settings.activeClass);
    }
    setMarkerPosition(currentlyActive);
  };

  /**
   * Set top scroll position and use it to check which link should be active.
   */
  var updateNav = function updateNav() {
    top = scrollingElement.scrollTop;
    checkActive();
  };

  /**
   * Call for scrolling event
   *
   * Use debounce to only fire once every 50ms and not every pixel
   * https://davidwalsh.name/javascript-debounce-function
   */
  var contentScrolled = debounce(function () {
    if (ignoreScrollEvents) return;
    updateNav();
  }, 50);

  var init = function init() {
    getRequiredElements();
    // If all elements are present, initialize marker
    if (checkRequiredElements()) {
      createMarker();
      setupLinkEvents();
      updateNav();
      window.addEventListener('scroll', contentScrolled);
    }
  };

  init();
};

/**
 * butr.to()
 *
 * A stand alone, globally accessible method for scrolling to a target
 * (location or hash).
 *
 * @param {object} options
 */
var to = exports.to = function to(options) {

  // Set defaults
  var defaults = {
    scrollingElement: false,
    target: 0,
    direction: 'y',
    keepHash: true,
    callback: null,
    markerCallback: null

    // Determine settings based on defaults + user provided options
  };var settings = (0, _objectAssign2.default)({}, defaults, options);

  // User may prefer reduced motion - do not animate to scroll position
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches;

  // Initialize required data
  var start = void 0;
  var end = void 0;
  var scrollingElement = void 0;

  /**
   * Set Element with query or default scrolling element.
   * Note: scrollingElement is newish, so falls back to documentElement if needed.
   *
   * @return {Node}
   */
  var getScrollingElement = function getScrollingElement() {
    return options.scrollingElement ? document.querySelector(options.scrollingElement) : document.scrollingElement || document.documentElement;
  };

  /**
   * @return {Number} Current scroll position inside set (scrolling) element.
   */
  var getCurrentPosition = function getCurrentPosition() {
    if (settings.direction === 'x') return scrollingElement.scrollLeft;
    if (settings.direction === 'y') return scrollingElement.scrollTop;
  };

  /**
   * Determine target position, hash position, or just manually set int.
   *
   * @return {Number} Target position.
   */
  var getTargetPosition = function getTargetPosition() {
    if (settings.target[0] === '#') {
      var targetEl = document.getElementById(settings.target.substr(1));
      if (targetEl && settings.direction === 'x') return targetEl.offsetLeft;
      if (targetEl && settings.direction === 'y') return targetEl.offsetTop;
      return 0;
    }
    return settings.target;
  };

  /**
   * Update scroll position of element.
   *
   * @param {Number} distance Amount to scroll.
   */
  var scrollTheEl = function scrollTheEl(distance) {
    if (settings.direction === 'x') scrollingElement.scrollLeft = distance;
    if (settings.direction === 'y') scrollingElement.scrollTop = distance;
  };

  /**
   * Callback passed to done option in animate function - runs markerCallback
   * and user specified callback once the animation is done (if they're defined)
   */
  var afterScroll = function afterScroll() {
    if (typeof settings.callback === 'function') settings.callback();
    if (typeof settings.markerCallback === 'function') settings.markerCallback();
  };

  /**
   * Calculate duration based on distance, modified sqrt curve
   * Allows more time for longer distances but trends toward a maximum time
   * ensuring no scroll animations are excessively long even on long pages
   * https://www.wolframalpha.com/input/?i=plot+24+*+sqrt(x)
   *
   * @param  {int} distance
   * @return {int} duration (in ms)
   */
  var calcDuration = function calcDuration(distance) {
    var coefficient = 24;
    return coefficient * Math.sqrt(Math.abs(distance));
  };

  /**
   * Animate Scroll
   */
  var useAnimations = function useAnimations() {
    start = getCurrentPosition();
    end = getTargetPosition();
    // Don't scroll nowhere if ya don needa chile'
    if (end === start) return;
    animate({
      duration: calcDuration(end - start),
      loop: function loop(calcIncrement) {
        var distance = calcIncrement(start, end);
        scrollTheEl(distance);
      },

      done: afterScroll
    });
  };

  /**
   * Set hash in URL if needed
   */
  var setHash = function setHash() {
    if (settings.keepHash && settings.target[0] === '#') {
      history.pushState({}, '', settings.target);
    }
  };

  /**
   * Set up all required data and start the animation (if allowed)
   */
  var init = function init() {
    scrollingElement = getScrollingElement();
    if (prefersReducedMotion) scrollTheEl(getTargetPosition());else useAnimations();
    setHash();
  };

  init();
};

/**
 * Stick Nav to top when it hits the top of the viewport so that it stays
 * visible
 */
var stickyNav = exports.stickyNav = function stickyNav(options) {

  // Set defaults
  var defaults = {
    distanceTop: 0

    // Determine settings based on defaults + user provided options
  };var settings = (0, _objectAssign2.default)({}, defaults, options);

  var pos = 0;
  var scrollingElement = document.scrollingElement || document.documentElement;
  var nav = document.querySelector('.js-butr-nav');

  /**
   * Set Y position of nav
   *
   * Consider distanceTop - which allows user to add some padding so the nav
   * isn't pinned to the very top (allows user definable breathing room)
   */
  var determineYPos = function determineYPos() {
    pos = nav.offsetTop - extractInt(settings.distanceTop);
  };

  /**
   * Extract int from string with unit (px, em, etc)
   *
   * @param  {string} txt
   * @return {int}    number left over from string
   */
  var extractInt = function extractInt(txt) {
    if (typeof txt === 'number') return txt;
    return parseInt(txt.replace(/[^0-9\.]+/g, ''));
  };

  /**
   * Calculate width of nav based on parent container
   * Function is debounced to prevent excessive calls during scroll
   */
  var setWidth = debounce(function () {
    var parentStyle = window.getComputedStyle(nav.parentNode, null);
    var paddingRight = extractInt(parentStyle.getPropertyValue('padding-right'));
    var paddingLeft = extractInt(parentStyle.getPropertyValue('padding-left'));
    var width = extractInt(parentStyle.getPropertyValue('width'));
    nav.style.maxWidth = width - paddingLeft - paddingRight + 'px';
  }, 250);

  /**
   * Set or remove classes to stick nav based on scroll position
   */
  var determineStickiness = function determineStickiness() {
    if (scrollingElement.scrollTop >= pos) {
      nav.style.position = 'fixed';
      nav.style.top = settings.distanceTop;
    } else {
      nav.style.position = 'relative';
      nav.style.top = 'auto';
    }
  };

  /**
   * Start up sticky nav
   */
  var init = function init() {
    determineYPos();
    determineStickiness();
    setWidth();
    window.addEventListener('scroll', determineStickiness);
    window.addEventListener('resize', setWidth);
  };

  init();
};

exports.default = {
  autoAnchors: autoAnchors,
  autoSidebar: autoSidebar,
  marker: marker,
  stickyNav: stickyNav,
  to: to
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ })
/******/ ]);
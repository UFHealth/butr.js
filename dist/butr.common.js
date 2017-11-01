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

// Track when animating to prevent excessive calls
var animating = false;

/**
 * Super basic throttle - just like sitepoint's throttle
 * https://www.sitepoint.com/throttle-scroll-events/
 *
 * @param  {Function} callback
 * @param  {[type]}   delay
 * @return {Function} throttled callback
 */
var throttle = function throttle(callback, delay) {
  var time = performance.now();
  return function () {
    if (time + delay - performance.now() < 0) {
      callback();
      time = performance.now();
    }
  };
};

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
    animating = true;
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
      // Animation is done
      animating = false;
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
var autoAnchors = exports.autoAnchors = function autoAnchors(options) {
  // Set defaults
  var defaults = {
    to: {}

    // Determine settings based on defaults + user provided options
  };var settings = (0, _objectAssign2.default)({}, defaults, options);

  var links = document.body.querySelectorAll('a[data-butr]');
  // Exit before for loop if there are no anchors on the page
  if (!links.length) return false;
  // When clicking a link, use butr to scroll to the element with that id
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      e.preventDefault();
      to((0, _objectAssign2.default)(settings.to, { target: e.currentTarget.getAttribute('href') }));
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
    liClass: '',
    aClass: '',
    prepend: false

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
    // Generate ID from text
    var generated = text.toLowerCase().replace(/\s+/g, '-').replace(/(\d)\./g, '$1-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');

    // Guarantee a unique ID
    var id = generated;
    var i = 0;
    while (document.getElementById(id)) {
      id = generated + '-' + ++i;
    }

    return id;
  };

  /**
   * Create a hash from a string.
   *
   * @param  {Node} heading Heading node.
   * @return {string} The #heading-hash.
   */
  var createHash = function createHash(heading) {
    if (!heading.id) heading.id = generateId(heading.textContent);
    return '#' + heading.id;
  };

  /**
   * Get required element nodes.
   */
  var getRequiredElements = function getRequiredElements() {
    nav = document.querySelector('.js-butr-nav');
    content = document.querySelector('.js-butr-content');
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
    }
    return true;
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
      label: heading.textContent,
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
    a.setAttribute('data-butr', true);
    a.innerText = heading.label;
    a.classList.add('js-butr-link');
    if (settings.aClass) appendClasses(a, settings.aClass);
    if (settings.liClass) appendClasses(li, settings.liClass);
    li.appendChild(a);
    return li;
  };

  /**
   * Create nav list (ol) with tree data.
   *
   * @param  {array} tree   Hierarchical tree of headings.
   * @param  {Node}  parent Container node to append to.
   * @return {Node} The list tree.
   */
  var createNavList = function createNavList(tree) {
    var list = document.createElement('ol');
    if (settings.olClass) appendClasses(list, settings.olClass);
    for (var i = 0; i < tree.length; i++) {
      var item = tree[i];
      var li = createNavItem(item);
      if (item.children.length) {
        li.appendChild(createNavList(item.children));
      }
      list.appendChild(li);
    }

    return list;
  };

  var init = function init() {
    getRequiredElements();
    if (checkRequiredElements()) {
      createTree();
      var list = createNavList(tree);
      if (settings.prepend) {
        nav.insertBefore(list, nav.firstElementChild);
      } else {
        nav.appendChild(list);
      }
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
  var content = void 0;
  var headings = void 0;
  var nav = void 0;

  /**
   * Set scrollingElement with el query or with default body el
   * Get other required elements.
   */
  var getRequiredElements = function getRequiredElements() {
    scrollingElement = settings.scrollingElement ? document.querySelector(settings.scrollingElement) : document.scrollingElement || document.documentElement;
    nav = document.querySelector('.js-butr-nav');
    links = document.querySelectorAll('.js-butr-link');
    content = document.querySelector('.js-butr-content');
    headings = content.querySelectorAll('h2, h3, h4, h5, h6');
  };

  /**
   * Make sure required elements are in place.
   *
   * @return {boolean} Tru only if required elements exist.
   */
  var checkRequiredElements = function checkRequiredElements() {
    if (!nav || !links || !content) {
      console.error('Error: Missing required classes on nav or links. Aborted setup of Butr.marker');
      return false;
    }
    return true;
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
   * When a link is clicked - set active link
   */
  var setupLinkEvents = function setupLinkEvents() {
    var _loop = function _loop(i) {
      links[i].addEventListener('click', function (e) {
        setActive(links[i].hash);
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
    if (heading) setActive('#' + heading.id);
  };

  /**
   * Toggle active class between nav links.
   *
   * @param {string} hash Section link to make active.
   */
  var setActive = function setActive(hash) {
    var previouslyActive = document.querySelector('.js-butr-link.js-butr-active');
    var currentlyActive = document.querySelector('.js-butr-link[href="' + hash + '"]');
    if (currentlyActive === previouslyActive) return;

    if (previouslyActive) {
      previouslyActive.classList.remove('js-butr-active');
      if (settings.activeClass) previouslyActive.classList.remove(settings.activeClass);
    }
    if (currentlyActive) {
      currentlyActive.classList.add('js-butr-active');
      if (settings.activeClass) appendClasses(currentlyActive, settings.activeClass);
      setMarkerPosition(currentlyActive);
    }
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
   * Throttled to prevent excessive calls
   */
  var contentScrolled = throttle(function () {
    // If it's animating don't try to update active nav
    if (!animating) updateNav();
  }, 33);

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
    speed: 1,
    keepHash: true,
    callback: null

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
   * Callback passed to done option in animate function - runs user specified
   * callback once the animation is done (if it's defined)
   */
  var afterScroll = function afterScroll() {
    if (typeof settings.callback === 'function') settings.callback();
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
    var coefficient = 24 * (1 / settings.speed);
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
    distanceTop: 0,
    mediaQuery: false

    // Determine settings based on defaults + user provided options
  };var settings = (0, _objectAssign2.default)({}, defaults, options);

  var pos = 0;
  var scrollingElement = document.scrollingElement || document.documentElement;
  var nav = document.querySelector('.js-butr-nav');
  var isSticky = false;

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
    if (isSticky) {
      var parentStyle = window.getComputedStyle(nav.parentNode, null);
      var paddingRight = extractInt(parentStyle.getPropertyValue('padding-right'));
      var paddingLeft = extractInt(parentStyle.getPropertyValue('padding-left'));
      var width = extractInt(parentStyle.getPropertyValue('width'));
      nav.style.maxWidth = width - paddingLeft - paddingRight + 'px';
    } else {
      // Reset
      nav.style.maxWidth = null;
    }
  }, 250);

  /**
   * Set or remove classes to stick nav based on scroll position
   *
   * Throttled to prevent excessive calls
   */
  var determineStickiness = throttle(function () {
    if (!settings.mediaQuery && scrollingElement.scrollTop >= pos) {
      isSticky = true;
    } else if (matchMedia(settings.mediaQuery).matches && scrollingElement.scrollTop >= pos) {
      isSticky = true;
    } else {
      isSticky = false;
    }
    if (isSticky) {
      nav.style.position = 'fixed';
      nav.style.top = extractInt(settings.distanceTop) + 'px';
    } else {
      nav.style.position = 'relative';
      nav.style.top = 'auto';
    }
  }, 33);

  /**
   * Start up sticky nav
   */
  var init = function init() {
    determineYPos();
    determineStickiness();
    setWidth();
    window.addEventListener('scroll', determineStickiness);
    window.addEventListener('resize', determineStickiness);
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
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
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      butr.to({ target: e.target.getAttribute('href') });
    });
  });
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
  };var settings = Object.assign({}, defaults, options);

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
    headings.forEach(function (heading, index) {
      var currentLevel = setCurrentLevel(heading);
      var nextLevel = setNextLevel(index);
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
          for (var i = 0; i < currentLevel - nextLevel; i++) {
            listStack.pop();
          }
          // Reset error offset
          errorOffset = 0;
        }
      }
    });
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
    if (settings.liClass) li.classList.add(settings.liClass);
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
    if (settings.olClass) list.classList.add(settings.olClass);
    tree.forEach(function (item) {
      var li = createNavItem(item);
      if (item.children.length) createNavList(item.children, li);
      list.appendChild(li);
    });
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
    container: false,
    duration: 400,
    callback: false,
    markerClass: ''

    // Determine settings based on defaults + user provided options
  };var settings = Object.assign({}, defaults, options);

  // User may prefer reduced motion - do not animate to scroll position
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches;

  // Initialize required data
  var top = void 0;
  var marker = void 0;
  var container = void 0;
  var links = void 0;
  var headings = void 0;
  var nav = void 0;
  var safeToUpdate = true;
  var ignoreScrollEvents = false;

  /**
   * Set container with el query or with default body el
   * Get other required elements.
   */
  var getRequiredElements = function getRequiredElements() {
    container = settings.container ? document.querySelector(settings.container) : document.scrollingElement || document.documentElement;
    nav = document.querySelector('.js-butr-nav');
    links = document.querySelectorAll('.js-butr-link');
    headings = container.querySelectorAll('h2, h3, h4, h5, h6');
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
    if (settings.markerClass) marker.classList.add(settings.markerClass);
    marker.style.height = links[0].offsetHeight + 'px';
    // http://easings.net/#easeInOutQuad
    // Should match function in Butr.to easing.
    if (!prefersReducedMotion) {
      marker.style.transition = settings.duration + 'ms all cubic-bezier(0.455, 0.03, 0.515, 0.955)';
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
        setActive(links[i].hash);
        marker.style.height = links[i].offsetHeight + 'px';
        butr.to({
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
    if (currentlyActive !== previouslyActive) {
      if (previouslyActive) previouslyActive.classList.remove('js-butr-active');
      currentlyActive.classList.add('js-butr-active');
    }
    setMarkerPosition(currentlyActive);
  };

  /**
   * Set top scroll position and use it to check which link should be active.
   */
  var updateNav = function updateNav() {
    top = container.scrollTop;
    checkActive();
  };

  /**
   * Animate the updates.
   */
  var animationLoop = function animationLoop() {
    if (ignoreScrollEvents) return;
    if (safeToUpdate) {
      requestAnimationFrame(function () {
        updateNav();
        safeToUpdate = true;
      });
    }
    safeToUpdate = false;
  };

  var init = function init() {
    getRequiredElements();
    // If all elements are present, initialize marker
    if (checkRequiredElements()) {
      createMarker();
      setupLinkEvents();
      updateNav();
      window.addEventListener('scroll', animationLoop);
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
    el: false,
    target: 0,
    direction: 'y',
    duration: 800,
    keepHash: true,
    callback: null,
    markerCallback: null

    // Determine settings based on defaults + user provided options
  };var settings = Object.assign({}, defaults, options);

  // User may prefer reduced motion - do not animate to scroll position
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches;

  // Initialize required data
  var start = void 0;
  var distance = void 0;
  var counter = void 0;
  var step = void 0;
  var el = void 0;

  /**
   * Set Element with query or default scrolling element.
   * Note: scrollingElement is newish, so falls back to documentElement if needed.
   *
   * @return {Node}
   */
  var getElement = function getElement() {
    return options.el ? document.querySelector(options.el) : document.scrollingElement || document.documentElement;
  };

  /**
   * @return {Number} Current scroll position inside set (scrolling) element.
   */
  var getCurrentPosition = function getCurrentPosition() {
    if (settings.direction === 'x') return el.scrollLeft;
    if (settings.direction === 'y') return el.scrollTop;
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
   * Easing function.
   *
   * @link  http://gizma.com/easing/#quad3
   *
   * @param  {Number} t Current time.
   * @param  {Number} b Start value.
   * @param  {Number} c Change in value.
   * @param  {Number} d Duration.
   * @return {Number} Amount to scroll.
   */
  var easing = function easing(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  /**
   * Update scroll position of element.
   *
   * @param {Number} distance Amount to scroll.
   */
  var scrollTheEl = function scrollTheEl(distance) {
    if (settings.direction === 'x') el.scrollLeft = distance;
    if (settings.direction === 'y') el.scrollTop = distance;
  };

  /**
   * Animate until time is up using steps and counter for animation time.
   */
  var animationLoop = function animationLoop() {
    counter += step;
    scrollTheEl(easing(counter, start, distance, settings.duration));
    if (counter < settings.duration) requestAnimationFrame(animationLoop);else {
      if (typeof settings.callback === 'function') settings.callback();
      if (typeof settings.markerCallback === 'function') settings.markerCallback();
    }
  };

  /**
   * Set up all required data and start the animation.
   */
  var init = function init() {
    el = getElement();
    if (!prefersReducedMotion) {
      start = getCurrentPosition();
      distance = getTargetPosition() - start;
      counter = 0;
      step = 33; // 30~ FPS
      if (settings.keepHash && settings.target[0] === '#') {
        history.pushState({}, '', settings.target);
      }
      animationLoop();
    } else scrollTheEl(getTargetPosition());
  };

  init();
};

/**
 * Stick sidebar to top when it hits the top of the viewport so that it stays
 * visible
 */
var stickySidebar = exports.stickySidebar = function stickySidebar() {
  var pos = 0;
  var sidebar = document.querySelector('.js-butr-nav');

  /**
   * Set Y position of sidebar
   */
  var determineYPos = function determineYPos() {
    var rect = sidebar.getBoundingClientRect();
    pos = rect.top;
  };

  /**
   * Set or remove classes to stick sidebar based on scroll position
   */
  var determineStickiness = function determineStickiness() {
    var scrollEl = document.scrollingElement || document.documentElement;
    if (scrollEl.scrollTop > pos) {
      sidebar.style.position = 'fixed';
      sidebar.style.top = 0;
    } else {
      sidebar.style.position = 'relative';
      sidebar.style.top = 'auto';
    }
  };

  /**
   * Start up sticky sidebar
   */
  var init = function init() {
    determineYPos();
    // Before scrolling decide if it needs to be sticky right away
    determineStickiness();
    window.addEventListener('scroll', determineStickiness);
  };

  init();
};

exports.default = {
  autoAnchors: autoAnchors,
  autoSidebar: autoSidebar,
  marker: marker,
  stickySidebar: stickySidebar,
  to: to
};

/***/ })
/******/ ]);
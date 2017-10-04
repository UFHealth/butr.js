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
 * Butr.to
 *
 * @param  {Object} options
 * @return
 */
var to = function to() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var start = void 0,
      distance = void 0,
      counter = void 0,
      step = void 0,
      el = options.el ? document.querySelector(options.el) : document.scrollingElement || document.documentElement,
      target = options.target || 0,
      direction = options.direction || 'y',
      duration = options.duration || 800,
      keepHash = options.keepHash || true,
      userCallback = options.callback || null,
      markerCallback = options.markerCallback || null;

  var getCurrentPosition = function getCurrentPosition() {
    if (direction === 'x') return el.scrollLeft;
    if (direction === 'y') return el.scrollTop;
  };

  var getTargetPosition = function getTargetPosition() {
    if (target[0] === '#') {
      var targetEl = document.getElementById(target.substr(1));
      if (targetEl && direction === 'x') return targetEl.offsetLeft;
      if (targetEl && direction === 'y') return targetEl.offsetTop;
      return 0;
    }
    return target;
  };

  var easing = function easing(t, b, c, d) {
    // http://gizma.com/easing/#quad3
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  var scrollEl = function scrollEl(distance) {
    if (direction === 'x') el.scrollLeft = distance;
    if (direction === 'y') el.scrollTop = distance;
  };

  var animationLoop = function animationLoop() {
    counter += step;
    scrollEl(easing(counter, start, distance, duration));
    if (counter < duration) requestAnimationFrame(animationLoop);else {
      if (typeof userCallback === 'function') userCallback();
      if (typeof markerCallback === 'function') markerCallback();
    }
  };

  var init = function init() {
    start = getCurrentPosition();
    distance = getTargetPosition() - start;
    counter = 0;
    step = 33; // 30~ FPS
    if (keepHash && target[0] === '#') {
      history.pushState({}, '', target);
    }
    animationLoop();
  };

  init();
};

/**
 * ezLinks
 * @return {boolean}
 *
 * Allow automatic smooth scroll on any link with data-butr set
 */
var ezLinks = function ezLinks() {
  var links = document.body.querySelectorAll('a[data-butr]');
  if (!links.length) return false;

  for (var i = links.length - 1; i >= 0; i--) {
    links[i].addEventListener('click', function (e) {
      e.preventDefault();
      to({ target: e.target.getAttribute('href') });
    });
  }

  return true;
};

/**
 * Butr.marker
 *
 * @param  {Object} options
 * @return
 */
var marker = function marker() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var top = void 0,
      topMostSection = void 0,
      marker = void 0,
      safeToUpdate = true,
      ignoreScrollEvents = false,
      useTo = options.useTo || false,
      callback = options.callback || null,
      duration = options.duration || 400,
      container = options.container ? document.querySelector(options.container) : document.scrollingElement || document.documentElement,
      nav = document.querySelector('.js-butr-nav') || false,
      links = document.querySelectorAll('.js-butr-link') || false,
      sections = document.querySelectorAll('.js-butr-section') || false;

  var getDistanceFromTop = function getDistanceFromTop(el) {
    return el.offsetTop - container.offsetTop + el.offsetHeight;
  };

  var checkRequiredElements = function checkRequiredElements() {
    if (!nav || !links || !sections) {
      console.error('Error: Missing required classes on nav, links, or sections. Aborted setup of Butr.marker');
      return false;
    } else return true;
  };

  var createMarker = function createMarker() {
    marker = document.createElement('div');
    marker.classList.add('js-butr-marker');
    marker.style.height = links[0].offsetHeight + 'px';
    // http://easings.net/#easeInOutQuad
    // Should match function in Butr.to easing.
    marker.style.transition = duration + 'ms transform cubic-bezier(0.455, 0.03, 0.515, 0.955)';
    nav.appendChild(marker);
  };

  var setMarkerPosition = function setMarkerPosition(activeLink) {
    marker.style.transform = 'translateY(' + activeLink.offsetTop + 'px)';
  };

  var setupLinkEvents = function setupLinkEvents() {
    var _loop = function _loop(i) {
      links[i].addEventListener('click', function (e) {
        ignoreScrollEvents = true;
        setActive(links[i].hash);
        if (useTo) setupSmoothLink(e, links[i].hash);
      });
    };

    for (var i = 0; i < links.length; i++) {
      _loop(i);
    }
  };

  var setupSmoothLink = function setupSmoothLink(e, hash) {
    e.preventDefault();
    to({
      target: hash,
      callback: callback,
      markerCallback: function markerCallback() {
        ignoreScrollEvents = false;
      }
    });
  };

  var checkActive = function checkActive() {
    for (var i = 0; i < sections.length; i++) {
      var distance = getDistanceFromTop(sections[i]);
      if (distance > top) {
        if (topMostSection !== sections[i]) {
          topMostSection = sections[i];
          setActive('#' + topMostSection.id);
        }
        break;
      }
    }
  };

  var setActive = function setActive(hash) {
    var previouslyActive = document.querySelector('.js-butr-link.js-butr-active');
    var currentlyActive = document.querySelector('.js-butr-link[href="' + hash + '"]');
    if (currentlyActive !== previouslyActive) {
      if (previouslyActive) previouslyActive.classList.remove('js-butr-active');
      currentlyActive.classList.add('js-butr-active');
    }
    setMarkerPosition(currentlyActive);
  };

  var updateNav = function updateNav() {
    top = container.scrollTop;
    checkActive();
  };

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
    createMarker();
    setupLinkEvents();
    updateNav();
    window.addEventListener('scroll', animationLoop);
  };

  if (checkRequiredElements()) init();
};

exports.default = {
  to: to,
  marker: marker,
  ezLinks: ezLinks
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTY2MTY4MjRhYmM1Yzc2MWU1NjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHIuanMiXSwibmFtZXMiOlsidG8iLCJvcHRpb25zIiwic3RhcnQiLCJkaXN0YW5jZSIsImNvdW50ZXIiLCJzdGVwIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxpbmdFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwidGFyZ2V0IiwiZGlyZWN0aW9uIiwiZHVyYXRpb24iLCJrZWVwSGFzaCIsInVzZXJDYWxsYmFjayIsImNhbGxiYWNrIiwibWFya2VyQ2FsbGJhY2siLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiZ2V0VGFyZ2V0UG9zaXRpb24iLCJ0YXJnZXRFbCIsImdldEVsZW1lbnRCeUlkIiwic3Vic3RyIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImVhc2luZyIsInQiLCJiIiwiYyIsImQiLCJzY3JvbGxFbCIsImFuaW1hdGlvbkxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbml0IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImV6TGlua3MiLCJsaW5rcyIsImJvZHkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRBdHRyaWJ1dGUiLCJtYXJrZXIiLCJ0b3AiLCJ0b3BNb3N0U2VjdGlvbiIsInNhZmVUb1VwZGF0ZSIsImlnbm9yZVNjcm9sbEV2ZW50cyIsInVzZVRvIiwiY29udGFpbmVyIiwibmF2Iiwic2VjdGlvbnMiLCJnZXREaXN0YW5jZUZyb21Ub3AiLCJvZmZzZXRIZWlnaHQiLCJjaGVja1JlcXVpcmVkRWxlbWVudHMiLCJjb25zb2xlIiwiZXJyb3IiLCJjcmVhdGVNYXJrZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiYXBwZW5kQ2hpbGQiLCJzZXRNYXJrZXJQb3NpdGlvbiIsInRyYW5zZm9ybSIsImFjdGl2ZUxpbmsiLCJzZXR1cExpbmtFdmVudHMiLCJzZXRBY3RpdmUiLCJoYXNoIiwic2V0dXBTbW9vdGhMaW5rIiwiY2hlY2tBY3RpdmUiLCJpZCIsInByZXZpb3VzbHlBY3RpdmUiLCJjdXJyZW50bHlBY3RpdmUiLCJyZW1vdmUiLCJ1cGRhdGVOYXYiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7O0FBTUEsSUFBTUEsS0FBSyxTQUFMQSxFQUFLLEdBQWtCO0FBQUEsTUFBakJDLE9BQWlCLHVFQUFQLEVBQU87O0FBQzNCLE1BQUlDLGNBQUo7QUFBQSxNQUNJQyxpQkFESjtBQUFBLE1BRUlDLGdCQUZKO0FBQUEsTUFHSUMsYUFISjtBQUFBLE1BSUlDLEtBQUtMLFFBQVFLLEVBQVIsR0FDREMsU0FBU0MsYUFBVCxDQUF1QlAsUUFBUUssRUFBL0IsQ0FEQyxHQUVEQyxTQUFTRSxnQkFBVCxJQUE2QkYsU0FBU0csZUFOOUM7QUFBQSxNQU9JQyxTQUFTVixRQUFRVSxNQUFSLElBQWtCLENBUC9CO0FBQUEsTUFRSUMsWUFBWVgsUUFBUVcsU0FBUixJQUFxQixHQVJyQztBQUFBLE1BU0lD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dEJqQyxVQUFNSyxVQUFVbEMsU0FBaEI7QUFDQXlEO0FBQ0QsR0FIRDs7QUFLQSxNQUFNNUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFFBQUltQixrQkFBSixFQUF3QjtBQUN4QixRQUFJRCxZQUFKLEVBQWtCO0FBQ2hCakIsNEJBQXNCLFlBQU07QUFDMUJnRDtBQUNBL0IsdUJBQWUsSUFBZjtBQUNELE9BSEQ7QUFJRDtBQUNEQSxtQkFBZSxLQUFmO0FBQ0QsR0FURDs7QUFXQSxNQUFNaEIsT0FBTyxTQUFQQSxJQUFPLEdBQU07QUFDakIyQjtBQUNBVztBQUNBUztBQUNBQyxXQUFPdkMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NYLGFBQWxDO0FBQ0QsR0FMRDs7QUFPQSxNQUFJMEIsdUJBQUosRUFBNkJ4QjtBQUM5QixDQTdHRDs7a0JBK0dlO0FBQ2JuQyxRQURhO0FBRWJnRCxnQkFGYTtBQUdiVjtBQUhhLEMiLCJmaWxlIjoiYnV0ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2NjE2ODI0YWJjNWM3NjFlNTYxIiwiLyoqXG4gKiBCdXRyLnRvXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuXG4gKi9cbmNvbnN0IHRvID0gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICBsZXQgc3RhcnQsXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGNvdW50ZXIsXG4gICAgICBzdGVwLFxuICAgICAgZWwgPSBvcHRpb25zLmVsXG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmVsKVxuICAgICAgICA6IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgMCxcbiAgICAgIGRpcmVjdGlvbiA9IG9wdGlvbnMuZGlyZWN0aW9uIHx8ICd5JyxcbiAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbiB8fCA4MDAsXG4gICAgICBrZWVwSGFzaCA9IG9wdGlvbnMua2VlcEhhc2ggfHwgdHJ1ZSxcbiAgICAgIHVzZXJDYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgfHwgbnVsbCxcbiAgICAgIG1hcmtlckNhbGxiYWNrID0gb3B0aW9ucy5tYXJrZXJDYWxsYmFjayB8fCBudWxsXG5cbiAgY29uc3QgZ2V0Q3VycmVudFBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICd4JykgcmV0dXJuIGVsLnNjcm9sbExlZnRcbiAgICBpZiAoZGlyZWN0aW9uID09PSAneScpIHJldHVybiBlbC5zY3JvbGxUb3BcbiAgfVxuXG4gIGNvbnN0IGdldFRhcmdldFBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGlmICh0YXJnZXRbMF0gPT09ICcjJykge1xuICAgICAgbGV0IHRhcmdldEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0LnN1YnN0cigxKSlcbiAgICAgIGlmICh0YXJnZXRFbCAmJiBkaXJlY3Rpb24gPT09ICd4JykgcmV0dXJuIHRhcmdldEVsLm9mZnNldExlZnRcbiAgICAgIGlmICh0YXJnZXRFbCAmJiBkaXJlY3Rpb24gPT09ICd5JykgcmV0dXJuIHRhcmdldEVsLm9mZnNldFRvcFxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldFxuICB9XG5cbiAgY29uc3QgZWFzaW5nID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICAvLyBodHRwOi8vZ2l6bWEuY29tL2Vhc2luZy8jcXVhZDNcbiAgICB0IC89IGQvMlxuICAgIGlmICh0IDwgMSkgcmV0dXJuIGMvMip0KnQgKyBiXG4gICAgdC0tXG4gICAgcmV0dXJuIC1jLzIgKiAodCoodC0yKSAtIDEpICsgYlxuICB9XG5cbiAgY29uc3Qgc2Nyb2xsRWwgPSBkaXN0YW5jZSA9PiB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3gnKSBlbC5zY3JvbGxMZWZ0ID0gZGlzdGFuY2VcbiAgICBpZiAoZGlyZWN0aW9uID09PSAneScpIGVsLnNjcm9sbFRvcCA9IGRpc3RhbmNlXG4gIH1cblxuICBjb25zdCBhbmltYXRpb25Mb29wID0gKCkgPT4ge1xuICAgIGNvdW50ZXIgKz0gc3RlcFxuICAgIHNjcm9sbEVsKGVhc2luZyhjb3VudGVyLCBzdGFydCwgZGlzdGFuY2UsIGR1cmF0aW9uKSlcbiAgICBpZiAoY291bnRlciA8IGR1cmF0aW9uKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uTG9vcClcbiAgICBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdXNlckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB1c2VyQ2FsbGJhY2soKVxuICAgICAgaWYgKHR5cGVvZiBtYXJrZXJDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgbWFya2VyQ2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgc3RhcnQgPSBnZXRDdXJyZW50UG9zaXRpb24oKVxuICAgIGRpc3RhbmNlID0gZ2V0VGFyZ2V0UG9zaXRpb24oKSAtIHN0YXJ0XG4gICAgY291bnRlciA9IDBcbiAgICBzdGVwID0gMzMgLy8gMzB+IEZQU1xuICAgIGlmIChrZWVwSGFzaCAmJiB0YXJnZXRbMF0gPT09ICcjJykge1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB0YXJnZXQpXG4gICAgfVxuICAgIGFuaW1hdGlvbkxvb3AoKVxuICB9XG5cbiAgaW5pdCgpXG59XG5cbi8qKlxuICogZXpMaW5rc1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqXG4gKiBBbGxvdyBhdXRvbWF0aWMgc21vb3RoIHNjcm9sbCBvbiBhbnkgbGluayB3aXRoIGRhdGEtYnV0ciBzZXRcbiAqL1xuY29uc3QgZXpMaW5rcyA9ICgpID0+IHtcbiAgbGV0IGxpbmtzID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdhW2RhdGEtYnV0cl0nKVxuICBpZiAoIWxpbmtzLmxlbmd0aCkgcmV0dXJuIGZhbHNlXG5cbiAgZm9yICh2YXIgaSA9IGxpbmtzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdG8oeyB0YXJnZXQ6IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQnV0ci5tYXJrZXJcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm5cbiAqL1xuY29uc3QgbWFya2VyID0gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICBsZXQgdG9wLFxuICAgICAgdG9wTW9zdFNlY3Rpb24sXG4gICAgICBtYXJrZXIsXG4gICAgICBzYWZlVG9VcGRhdGUgPSB0cnVlLFxuICAgICAgaWdub3JlU2Nyb2xsRXZlbnRzID0gZmFsc2UsXG4gICAgICB1c2VUbyA9IG9wdGlvbnMudXNlVG8gfHwgZmFsc2UsXG4gICAgICBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgfHwgbnVsbCxcbiAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbiB8fCA0MDAsXG4gICAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lclxuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXIpXG4gICAgICAgIDogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnV0ci1uYXYnKSB8fCBmYWxzZSxcbiAgICAgIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJ1dHItbGluaycpIHx8IGZhbHNlLFxuICAgICAgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYnV0ci1zZWN0aW9uJykgfHwgZmFsc2VcblxuICBjb25zdCBnZXREaXN0YW5jZUZyb21Ub3AgPSBlbCA9PiB7XG4gICAgcmV0dXJuIGVsLm9mZnNldFRvcCAtIGNvbnRhaW5lci5vZmZzZXRUb3AgKyBlbC5vZmZzZXRIZWlnaHRcbiAgfVxuXG4gIGNvbnN0IGNoZWNrUmVxdWlyZWRFbGVtZW50cyA9ICgpID0+IHtcbiAgICBpZiAoIW5hdiB8fCAhbGlua3MgfHwgIXNlY3Rpb25zKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogTWlzc2luZyByZXF1aXJlZCBjbGFzc2VzIG9uIG5hdiwgbGlua3MsIG9yIHNlY3Rpb25zLiBBYm9ydGVkIHNldHVwIG9mIEJ1dHIubWFya2VyJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3QgY3JlYXRlTWFya2VyID0gKCkgPT4ge1xuICAgIG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFya2VyLmNsYXNzTGlzdC5hZGQoJ2pzLWJ1dHItbWFya2VyJylcbiAgICBtYXJrZXIuc3R5bGUuaGVpZ2h0ID0gbGlua3NbMF0ub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgIC8vIGh0dHA6Ly9lYXNpbmdzLm5ldC8jZWFzZUluT3V0UXVhZFxuICAgIC8vIFNob3VsZCBtYXRjaCBmdW5jdGlvbiBpbiBCdXRyLnRvIGVhc2luZy5cbiAgICBtYXJrZXIuc3R5bGUudHJhbnNpdGlvbiA9IGR1cmF0aW9uICsgJ21zIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSknXG4gICAgbmF2LmFwcGVuZENoaWxkKG1hcmtlcilcbiAgfVxuXG4gIGNvbnN0IHNldE1hcmtlclBvc2l0aW9uID0gYWN0aXZlTGluayA9PiB7XG4gICAgbWFya2VyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKCcgKyBhY3RpdmVMaW5rLm9mZnNldFRvcCArICdweCknXG4gIH1cblxuICBjb25zdCBzZXR1cExpbmtFdmVudHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWdub3JlU2Nyb2xsRXZlbnRzID0gdHJ1ZVxuICAgICAgICBzZXRBY3RpdmUobGlua3NbaV0uaGFzaClcbiAgICAgICAgaWYgKHVzZVRvKSBzZXR1cFNtb290aExpbmsoZSwgbGlua3NbaV0uaGFzaClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2V0dXBTbW9vdGhMaW5rID0gKGUsIGhhc2gpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0byh7XG4gICAgICB0YXJnZXQ6IGhhc2gsXG4gICAgICBjYWxsYmFjayxcbiAgICAgIG1hcmtlckNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIGlnbm9yZVNjcm9sbEV2ZW50cyA9IGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGNoZWNrQWN0aXZlID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkaXN0YW5jZSA9IGdldERpc3RhbmNlRnJvbVRvcChzZWN0aW9uc1tpXSlcbiAgICAgIGlmIChkaXN0YW5jZSA+IHRvcCkge1xuICAgICAgICBpZiAodG9wTW9zdFNlY3Rpb24gIT09IHNlY3Rpb25zW2ldKSB7XG4gICAgICAgICAgdG9wTW9zdFNlY3Rpb24gPSBzZWN0aW9uc1tpXVxuICAgICAgICAgIHNldEFjdGl2ZSgnIycgKyB0b3BNb3N0U2VjdGlvbi5pZClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldEFjdGl2ZSA9IGhhc2ggPT4ge1xuICAgIGxldCBwcmV2aW91c2x5QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ1dHItbGluay5qcy1idXRyLWFjdGl2ZScpXG4gICAgbGV0IGN1cnJlbnRseUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idXRyLWxpbmtbaHJlZj1cIicgKyBoYXNoICsgJ1wiXScpXG4gICAgaWYgKGN1cnJlbnRseUFjdGl2ZSAhPT0gcHJldmlvdXNseUFjdGl2ZSkge1xuICAgICAgaWYgKHByZXZpb3VzbHlBY3RpdmUpIHByZXZpb3VzbHlBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnanMtYnV0ci1hY3RpdmUnKVxuICAgICAgY3VycmVudGx5QWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2pzLWJ1dHItYWN0aXZlJylcbiAgICB9XG4gICAgc2V0TWFya2VyUG9zaXRpb24oY3VycmVudGx5QWN0aXZlKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlTmF2ID0gKCkgPT4ge1xuICAgIHRvcCA9IGNvbnRhaW5lci5zY3JvbGxUb3BcbiAgICBjaGVja0FjdGl2ZSgpXG4gIH1cblxuICBjb25zdCBhbmltYXRpb25Mb29wID0gKCkgPT4ge1xuICAgIGlmIChpZ25vcmVTY3JvbGxFdmVudHMpIHJldHVyblxuICAgIGlmIChzYWZlVG9VcGRhdGUpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHVwZGF0ZU5hdigpXG4gICAgICAgIHNhZmVUb1VwZGF0ZSA9IHRydWVcbiAgICAgIH0pXG4gICAgfVxuICAgIHNhZmVUb1VwZGF0ZSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGNyZWF0ZU1hcmtlcigpXG4gICAgc2V0dXBMaW5rRXZlbnRzKClcbiAgICB1cGRhdGVOYXYoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBhbmltYXRpb25Mb29wKVxuICB9XG5cbiAgaWYgKGNoZWNrUmVxdWlyZWRFbGVtZW50cygpKSBpbml0KClcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0byxcbiAgbWFya2VyLFxuICBlekxpbmtzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0ci5qcyJdLCJzb3VyY2VSb290IjoiIn0=
import { State } from './state'

/**
 * Super basic throttle - just like sitepoint's throttle
 * https://www.sitepoint.com/throttle-scroll-events/
 *
 * @param  {Function} callback
 * @param  {Number}   delay
 * @return {Function} throttled callback
 */
export const throttle = (callback, delay) => {
  let timeout = null
  let time = performance.now()
  return () => {
    if (time + delay - performance.now() < 0) {
      callback()
      time = performance.now()
    }
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(callback, delay)
  }
}

/**
 * Append Class to HTML Element
 * @param  {Object} el
 * @param  {String} classes
 */
export const appendClasses = (el, classes) => {
  const classStr = el.className + (' ' + classes)
  // Remove whitespace at beginning an end (if there is any) to keep it clean
  el.className = classStr.trim()
}

/**
 * Animation function - accepts duration, callback for animation loop (each
 * frame), callback when animation is complete, and option for easing function.
 *
 * @param {Object} options
 */
export const animate = (options) => {
  const defaults = {
    duration: 800,
    loop: null,
    done: null,
    easing: 'easeInOutQuad'
  }

  // Determine settings based on defaults + user provided options
  const settings = Object.assign({}, defaults, options)

  let start
  let end
  let now

  /**
   * Start animation - get current time, set end time (based on current) and
   * create first frame
   */
  const startAnimation = () => {
    State.animating = true
    start = performance.now()
    end = start + settings.duration
    frame()
  }

  /**
   * Current Frame - any logic to update the frame happens here
   * Set the now time, apply loop callback, and if now is not the end, run frame
   * again, otherwise use done callback, if provided
   */
  const frame = () => {
    now = performance.now()
    settings.loop(calcIncrement)
    if (now < end) requestAnimationFrame(frame)
    else {
      // Animation is done
      State.animating = false
      if (typeof settings.done === 'function') settings.done()
    }
  }

  /**
   * Calculate increment based on easing
   * This method is passed to the loop callback so that it can be called
   * to get eased increments for frame updates.
   *
   * @param  {Number} startValue
   * @param  {Number} endValue
   * @return {Number} increment
   */
  const calcIncrement = (startValue, endValue) => {
    const delta = endValue - startValue
    const eased = delta * timingFunctions[settings.easing](elapsed())
    return startValue + eased
  }

  /**
   * Calculate Elapsed time
   *
   * @return {Number} elapsed time (in ms)
   */
  const elapsed = () => {
    return Math.min((now - start) / settings.duration, 1)
  }

  /**
   * Timing (Easing) functions
   * https://gist.github.com/gre/1650294
   *
   * @type {Object}
   */
  const timingFunctions = {
    linear(t) {
      return t
    },
    easeInQuad(t) {
      return t * t
    },
    easeOutQuad(t) {
      return t * (2 - t)
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    easeInCubic(t) {
      return t * t * t
    },
    easeOutCubic(t) {
      return --t * t * t + 1
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    easeInQuart(t) {
      return t * t * t * t
    },
    easeOutQuart(t) {
      return 1 - --t * t * t * t
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
    },
    easeInQuint(t) {
      return t * t * t * t * t
    },
    easeOutQuint(t) {
      return 1 + --t * t * t * t * t
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    }
  }

  startAnimation()
}

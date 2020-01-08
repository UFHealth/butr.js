import objAssign from 'object-assign'
import { animate } from './utils'

/**
 * butr.to()
 *
 * A stand alone, globally accessible method for scrolling to a target
 * (location or hash).
 *
 * @param {object} options
 */
export const To = options => {

  console.log(options)
  // Set defaults
  const defaults = {
    scrollingElement: false,
    target: 0,
    direction: 'y',
    speed: 1,
    keepHash: true,
    callback: null,
    threshold: 0
  }

  // Determine settings based on defaults + user provided options
  let settings = objAssign({}, defaults, options)

  // User may prefer reduced motion - do not animate to scroll position
  let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches

  // Initialize required data
  let start
  let end
  let scrollingElement

  /**
   * Set Element with query or default scrolling element.
   * Note: scrollingElement is newish, so falls back to documentElement if needed.
   *
   * @return {Node}
   */
  const getScrollingElement = () => {
    return options && options.scrollingElement
      ? document.querySelector(options.scrollingElement)
      : document.scrollingElement || document.documentElement
  }

  /**
   * @return {Number} Current scroll position inside set (scrolling) element.
   */
  const getCurrentPosition = () => {
    if (settings.direction === 'x') return scrollingElement.scrollLeft
    if (settings.direction === 'y') return scrollingElement.scrollTop
  }

  /**
   * Determine target position, hash position, or just manually set int.
   *
   * @return {Number} Target position.
   */
  const getTargetPosition = () => {
    if (settings.target[0] === '#') {
      let targetEl = document.getElementById(settings.target.substr(1))
      let rect = targetEl.getBoundingClientRect()
      if (targetEl && settings.direction === 'x') {
        let left = scrollingElement.scrollLeft
        return Math.max(rect.left + left - settings.threshold, 0)
      }
      if (targetEl && settings.direction === 'y') {
        let top = scrollingElement.scrollTop
        return Math.max(rect.top + top - settings.threshold, 0)
      }
      return 0
    }
    return settings.target
  }

  /**
   * Update scroll position of element.
   *
   * @param {Number} distance Amount to scroll.
   */
  const scrollTheEl = distance => {
    if (settings.direction === 'x') scrollingElement.scrollLeft = distance
    if (settings.direction === 'y') scrollingElement.scrollTop = distance
  }

  /**
   * Callback passed to done option in animate function - runs user specified
   * callback once the animation is done (if it's defined)
   */
  const afterScroll = () => {
    if (typeof settings.callback === 'function') settings.callback()
  }

  /**
   * Calculate duration based on distance, modified sqrt curve
   * Allows more time for longer distances but trends toward a maximum time
   * ensuring no scroll animations are excessively long even on long pages
   * https://www.wolframalpha.com/input/?i=plot+24+*+sqrt(x)
   *
   * @param  {int} distance
   * @return {int} duration (in ms)
   */
  const calcDuration = distance => {
    let coefficient = 24 * (1 / settings.speed)
    return coefficient * Math.sqrt(Math.abs(distance))
  }

  /**
   * Animate Scroll
   */
  const useAnimations = () => {
    start = getCurrentPosition()
    end = getTargetPosition()
    // Don't scroll nowhere if ya don needa chile'
    if (end === start) {
      afterScroll()
    } else {
      animate({
        duration: calcDuration(end - start),
        loop (calcIncrement) {
          let distance = calcIncrement(start, end)
          scrollTheEl(distance)
        },
        done: afterScroll
      })
    }
  }

  /**
   * Set hash in URL if needed
   */
  const setHash = () => {
    if (settings.keepHash && settings.target[0] === '#') {
      history.pushState({}, '', settings.target)
    }
  }

  /**
   * Set up all required data and start the animation (if allowed)
   */
  const init = () => {
    scrollingElement = getScrollingElement()
    if (prefersReducedMotion) scrollTheEl(getTargetPosition())
    else useAnimations()
    setHash()
  }

  init()
}

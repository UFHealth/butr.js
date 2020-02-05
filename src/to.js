import { animate } from './utils'

/**
 * To() & butr.to()
 *
 * A stand alone, globally accessible method for scrolling to a target
 * (location or hash).
 */
export const To = (options = {}) => {
  const defaults = {
    target: 0,
    direction: 'y',
    keepHash: true,
    speed: 1,
    afterTo: null,
    scrollOffset: 0,
  }
  options = Object.assign({}, defaults, options)

  // User may prefer reduced motion - do not animate to scroll position
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches

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
    if (options.direction === 'x') return scrollingElement.scrollLeft
    else return scrollingElement.scrollTop
  }

  /**
   * Determine target position, hash position, or just manually set int.
   *
   * @return {Number} Target position.
   */
  const getTargetPosition = () => {
    if (options.target[0] === '#') {
      const targetEl = document.getElementById(options.target.substr(1))
      const rect = targetEl.getBoundingClientRect()
      if (targetEl && options.direction === 'x') {
        const left = scrollingElement.scrollLeft
        return Math.max(rect.left + left - options.scrollOffset, 0)
      }
      if (targetEl && options.direction === 'y') {
        const top = scrollingElement.scrollTop
        return Math.max(rect.top + top - options.scrollOffset, 0)
      }
      return 0
    }
    return options.target
  }

  /**
   * Update scroll position of element.
   *
   * @param {Number} distance Amount to scroll.
   */
  const scrollTheEl = distance => {
    if (options.direction === 'x') scrollingElement.scrollLeft = distance
    else scrollingElement.scrollTop = distance
  }

  /**
   * Callback passed to done option in animate function - runs user specified
   * callback once the animation is done (if it's defined)
   */
  const afterScroll = () => {
    if (typeof options.afterTo === 'function') options.afterTo()
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
    const coefficient = 24 * (1 / options.speed)
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
          const distance = calcIncrement(start, end)
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
    if (options.keepHash && options.target[0] === '#') {
      history.pushState({}, '', options.target)
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

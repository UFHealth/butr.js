import { throttle } from './utils'
import { State } from './state'

/**
 * StickyNav()
 *
 * Stick Nav to top when it hits the top of the viewport so that it stays
 * visible
 */
export const StickyNav = () => {
  const { settings } = State
  const nav = document.querySelector('.js-butr-nav')
  const parent = nav.parentElement
  const parentStyle = window.getComputedStyle(parent)
  const parentSpaceTop = parseInt(parentStyle.getPropertyValue('padding-top'), 10)
  const parentSpaceBottom = parseInt(parentStyle.getPropertyValue('padding-bottom'), 10)

  /**
   * Calculate width of nav based on parent container
   * Function is debounced to prevent excessive calls during scroll
   */
  const setWidth = () => {
    const paddingRight = parseInt(parentStyle.getPropertyValue('padding-right'), 10)
    const paddingLeft = parseInt(parentStyle.getPropertyValue('padding-left'), 10)
    const width = parseInt(parentStyle.getPropertyValue('width'), 10)
    nav.style.maxWidth = width - paddingLeft - paddingRight + 'px'
    nav.style.width = '100%'
  }

  /**
   * Stick the navbar with position fixed
   */
  const setToStick = () => {
    const cssString = ';'
      + 'position: fixed; '
      + 'top: ' + (State.topBuffer + parentSpaceTop) + 'px; '
      + 'bottom: auto;'
    nav.style.cssText += cssString
  }

  /**
   * Park the navbar at the bottom so it does not collide
   * with the 'avoid' element option if it exists
   */
  const setToPark = () => {
    const cssString = ';'
      + 'position: absolute; '
      + 'top: auto; '
      + 'bottom: ' + parentSpaceBottom + 'px;'
    nav.style.cssText += cssString
  }

  /**
   * Set the navbar to it's setToInitial, unmodified position
   */
  const setToInitial = () => {
    let cssString = ';'
      + 'position: relative; '
      + 'top: auto; '
      + 'bottom: auto;'
    nav.style.cssText += cssString
  }

  /**
   * Determine size of buffers. Honestly could probably use offsetHeight
   * here just as well as top and bottom. Top and bottom guarantee no collisions
   * thought because height does not account for negative margin or other oddities!
   *
   * The two elements are grabbed via class the consumer puts on elements to avoid.
   */
  const determineBuffers = () => {
    const aboveEl = document.querySelector('.js-butr-avoidAbove')
    const belowEl = document.querySelector('.js-butr-avoidBelow')
    if (aboveEl) {
      State.topBuffer = Math.round(aboveEl.getBoundingClientRect().bottom)
    }
    if (belowEl) {
      State.bottomBuffer = Math.round(belowEl.getBoundingClientRect().top)
    }
  }

  /**
   * When scrolling or resizing make sure the navbar is set to the appropriate
   * position. Throttled to prevent excessive calls. Currently shoots for 30FPS.
   */
  const handleScrollResize = throttle(() => {
    const position = getComputedStyle(nav).position
    const navRect = nav.getBoundingClientRect()
    const parentRect = parent.getBoundingClientRect()
    const parentTop = Math.round(parentRect.top)
    const parentBottom = Math.round(parentRect.bottom)
    const navTop = Math.round(navRect.top)
    const navBottom = Math.round(navRect.bottom)

    if (position === 'fixed') {
      if (parentTop > State.topBuffer) {
        setToInitial()
      } else if (parentBottom - parentSpaceBottom < navBottom) {
        setToPark()
      }
    } else if (position === 'absolute') {
      if (navTop >= State.topBuffer + parentSpaceTop) {
        setToStick()
      }
    } else if (position === 'relative') {
      // If we are coming to the page far down where the nav can't fit, park it initially
      if (parentBottom - parentSpaceBottom < nav.offsetHeight + State.topBuffer) {
        setToPark()
      // If we are coming to the page a ways where the nav should be fixed do that initially
      } else if (navTop - State.topBuffer - parentSpaceTop <= 0) {
        setToStick()
      }
    }
  }, 33)

  /**
   * Start up sticky nav
   */
  const init = () => {
    setWidth()
    determineBuffers()
    handleScrollResize()
    window.addEventListener('scroll', handleScrollResize)
    window.addEventListener('resize', handleScrollResize)
  }

  /**
   * If a mediaQuery option is set, only initialize stickNav
   * when the media query is matching :) save dat computeeee
   */
  if (settings.mediaQuery) {
    if (matchMedia(settings.mediaQuery).matches) {
      init()
    }
  } else {
    init()
  }
}

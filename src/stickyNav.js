import { debounce, throttle, extractInt } from './utils'
import { State } from './state'

/**
 * StickyNav()
 *
 * Stick Nav to top when it hits the top of the viewport so that it stays
 * visible
 */
export const StickyNav = () => {

  const { settings } = State

  let scrollingElement = (document.scrollingElement || document.documentElement)
  let nav = document.querySelector('.js-butr-nav')
  let navInitialTop = nav.offsetTop
  let avoid = settings.avoid
    ? document.querySelector(settings.avoid)
    : null

  /**
   * Calculate width of nav based on parent container
   * Function is debounced to prevent excessive calls during scroll
   */
  const setWidth = debounce(() => {
    let parentStyle = window.getComputedStyle(nav.parentNode)
    let paddingRight = extractInt(parentStyle.getPropertyValue('padding-right'))
    let paddingLeft = extractInt(parentStyle.getPropertyValue('padding-left'))
    let width = extractInt(parentStyle.getPropertyValue('width'))
    nav.style.maxWidth = width - paddingLeft - paddingRight + 'px'
  }, 250)

  /**
   * Stick the navbar with position fixed
   */
  const setToStick = () => {
    nav.style.top = navInitialTop + settings.topBuffer + 'px'
    nav.style.position = 'fixed'
    nav.style.bottom = 'auto'
  }

  /**
   * Park the navbar at the bottom so it does not collide
   * with the 'avoid' element option if it exists
   */
  const setToPark = () => {
    nav.style.position = 'absolute'
    nav.style.top = 'auto'
    nav.style.bottom = '0'
  }

  /**
   * Set the navbar to it's setToInitial, unmodified position
   */
  const setToInitial = () => {
    nav.style.position = 'relative'
    nav.style.top = 'auto'
    nav.style.bottom = 'auto'
  }

  /**
   * When scrolling or resizing make sure the navbar is set to the appropriate
   * position. Throttled to prevent excessive calls. Currenly shoots for 30FPS.
   */
  const handleScrollResize = throttle(() => {
    let position = getComputedStyle(nav).position
    let rect = nav.getBoundingClientRect()
    let navWithBuffer =  Math.ceil(rect.bottom) + settings.avoidBuffer

    if (position === 'fixed') {
      if ((scrollingElement.scrollTop < navInitialTop)) {
        setToInitial()
      }
      if (scrollingElement.scrollTop + navWithBuffer >= avoid.offsetTop) {
        setToPark()
      }
    } else if (position === 'absolute') {
      if (scrollingElement.scrollTop < nav.offsetTop) {
        setToStick()
      }
    } else if (position === 'relative') {
      if ((scrollingElement.scrollTop >= navInitialTop)) {
        setToStick()
      }
    }
  }, 33)

  /**
   * Start up sticky nav
   */
  const init = () => {
    setWidth()
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

import { throttle, appendClasses } from './utils'
import { State } from './state'

/**
 * Marker()
 *
 * Create and animate a marker to indicate active state in a nav.
 *
 * @param {object} settings
 */
export const Marker = () => {
  const { settings } = State

  // User may prefer reduced motion - do not animate to scroll position
  let prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion)'
  ).matches

  // Initialize required data
  let top
  let marker
  let scrollingElement
  let links
  let content
  let headings
  let nav

  /**
   * Set scrollingElement with el query or with default body el
   * Get other required elements.
   */
  const getRequiredElements = () => {
    scrollingElement = settings.scrollingElement
      ? document.querySelector(settings.scrollingElement)
      : document.scrollingElement || document.documentElement
    nav = document.querySelector('.js-butr-nav')
    links = document.querySelectorAll('.js-butr-link')
    content = document.querySelector('.js-butr-content')
    // Only collect headings that are in the sidebar
    headings = []
    for (var i = links.length - 1; i >= 0; i--) {
      headings.unshift(content.querySelector(links[i].getAttribute('href')))
    }
  }

  /**
   * Make sure required elements are in place.
   *
   * @return {boolean} Tru only if required elements exist.
   */
  const checkRequiredElements = () => {
    if (!nav || !links || !content) {
      console.error(
        'Error: Missing required classes on nav or links. Aborted setup of Butr.marker'
      )
      return false
    }
    return true
  }

  /**
   * Create a marker element with animated css props.
   */
  const createMarker = () => {
    marker = document.createElement('div')
    marker.classList.add('js-butr-marker')
    if (settings.markerClass) appendClasses(marker, settings.markerClass)
    marker.style.height = links[0].offsetHeight + 'px'
    // http://easings.net/#easeInOutQuad
    // Should match function in Butr.to easing.
    const easing = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
    if (!prefersReducedMotion) {
      marker.style.transition = [
        `${settings.duration}ms transform ${easing}`,
        `${settings.duration}ms height ${easing}`
      ].join(',')
    }
    nav.appendChild(marker)
  }

  /**
   * Set marker position to animate to.
   *
   * @param {Node} activeLink currently active link
   */
  const setMarkerPosition = (activeLink) => {
    let translatePos = activeLink.offsetTop
    const style = window.getComputedStyle(activeLink)
    marker.style.transform = `translateY(${translatePos}px)`
    marker.style.height = `${activeLink.offsetHeight}px`
  }

  /**
   * When a link is clicked - set active link
   */
  const setupLinkEvents = () => {
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', (e) => {
        setActive(links[i].hash)
      })
    }
  }

  /**
   * Loop over headings and reassign active class to links as needed.
   */
  const checkActive = () => {
    let heading
    for (let i = 0; i < headings.length; i++) {
      if (!headings[i]) continue
      let rect = headings[i].getBoundingClientRect()
      // The -2 here is to prevent the sillies.
      if (rect.top + top - settings.scrollOffset - 2 > top) {
        if (!heading) heading = headings[i]
        break
      } else heading = headings[i]
    }
    if (heading) setActive('#' + heading.id)
  }

  /**
   * Toggle active class between nav links.
   *
   * @param {string} hash Section link to make active.
   */
  const setActive = (hash) => {
    let previouslyActive = document.querySelector(
      '.js-butr-link.js-butr-active'
    )
    let currentlyActive = document.querySelector(
      '.js-butr-link[href="' + hash + '"]'
    )
    if (currentlyActive === previouslyActive) return

    if (previouslyActive) {
      previouslyActive.classList.remove('js-butr-active')
      if (settings.activeClass)
        previouslyActive.classList.remove(settings.activeClass)
    }
    if (currentlyActive) {
      currentlyActive.classList.add('js-butr-active')
      if (settings.activeClass)
        appendClasses(currentlyActive, settings.activeClass)
      setMarkerPosition(currentlyActive)
    }
  }

  /**
   * Set top scroll position and use it to check which link should be active.
   */
  const updateNav = () => {
    top = scrollingElement.scrollTop
    checkActive()
  }

  /**
   * Call for scrolling event
   *
   * Throttled to prevent excessive calls
   */
  const contentScrolled = throttle(() => {
    // If it's animating don't try to update active nav
    if (!State.animating) updateNav()
  }, 33)

  const init = () => {
    getRequiredElements()
    // If all elements are present, initialize marker
    if (checkRequiredElements()) {
      createMarker()
      setupLinkEvents()
      updateNav()
      window.addEventListener('scroll', contentScrolled)
    }
  }

  init()
}

/**
 * To
 * @param  {Object} options
 * @return
 */
const To = (options = {}) => {
  let start,
      distance,
      counter,
      step,
      el = options.el
        ? document.querySelector(options.el)
        : document.body,
      location = options.location || 0,
      direction = options.direction || 'y',
      duration = options.duration || 800,
      userCallback = options.callback || null,
      markerCallback = options.markerCallback || null

  const getLocation = () => {
    if (direction === 'x') return el.scrollLeft
    if (direction === 'y') return el.scrollTop
  }

  const easing = (t, b, c, d) => {
    // http://gizma.com/easing/#quad3
    t /= d/2
    if (t < 1) return c/2*t*t + b
    t--
    return -c/2 * (t*(t-2) - 1) + b
  }

  const scrollEl = distance => {
    if (direction === 'x') el.scrollLeft = distance
    if (direction === 'y') el.scrollTop = distance
  }

  const animationLoop = () => {
    counter += step
    scrollEl(easing(counter, start, distance, duration))
    if (counter < duration) requestAnimationFrame(animationLoop)
    else {
      if (typeof userCallback === 'function') userCallback()
      if (typeof markerCallback === 'function') markerCallback()
    }
  }

  const init = () => {
    start = getLocation()
    distance = location - start
    counter = 0
    step = 33 // 30~ FPS
    animationLoop()
  }

  init()
}

/**
 * Marker
 * @param  {Object} options
 * @return
 */
const Marker = (options = {}) => {
  let top,
      topMostSection,
      marker,
      safeToUpdate = true,
      ignoreScrollEvents = false,
      useTo = options.useTo || false,
      duration = options.duration || 400,
      container = options.container
        ? document.querySelector(options.container)
        : document.body,
      nav = document.querySelector('.js-butr-nav') || false,
      links = document.querySelectorAll('.js-butr-link') || false,
      sections = document.querySelectorAll('.js-butr-section') || false

  const getDistanceFromTop = el => {
    return el.offsetTop - container.offsetTop + el.offsetHeight
  }

  const checkRequiredElements = () => {
    if (!nav || !links || !sections) {
      console.error('Error: Missing required classes on nav, links, or sections. Aborted setup of Butr.Marker')
      return false
    } else return true
  }

  const createMarker = () => {
    marker = document.createElement('div')
    marker.classList.add('js-butr-marker')
    marker.style.height = links[0].offsetHeight + 'px'
    // http://easings.net/#easeInOutQuad
    // Should match function in Butr.to easing.
    marker.style.transition = duration + 'ms transform cubic-bezier(0.455, 0.03, 0.515, 0.955)'
    nav.appendChild(marker)
  }

  const setMarkerPosition = activeLink => {
    marker.style.transform = 'translateY(' + activeLink.offsetTop + 'px)'
  }

  const setupLinkEvents = () => {
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', e => {
        ignoreScrollEvents = true
        let linkHash = links[i].hash.replace('#', '')
        setActive(linkHash)
        if (useTo) setupSmoothLinks(e, linkHash)
      })
    }
  }

  const setupSmoothLinks = (e, linkHash) => {
    e.preventDefault()
    To({
      location: document.getElementById(linkHash).offsetTop,
      markerCallback: () => {
        ignoreScrollEvents = false
      }
    })
  }

  const checkActive = () => {
    for (let i = 0; i < sections.length; i++) {
      let distance = getDistanceFromTop(sections[i])
      if (distance > top) {
        if (topMostSection !== sections[i]) {
          topMostSection = sections[i]
          setActive(topMostSection.id)
        }
        break
      }
    }
  }

  const setActive = id => {
    let previouslyActive = document.querySelector('.js-butr-link.js-butr-active')
    let currentlyActive = document.querySelector('.js-butr-link[href="#' + id + '"]')
    if (currentlyActive !== previouslyActive) {
      if (previouslyActive) previouslyActive.classList.remove('js-butr-active')
      currentlyActive.classList.add('js-butr-active')
    }
    setMarkerPosition(currentlyActive)
  }

  const updateNav = () => {
    top = container.scrollTop
    checkActive()
  }

  const animationLoop = () => {
    if (ignoreScrollEvents) return
    if (safeToUpdate) {
      requestAnimationFrame(() => {
        updateNav()
        safeToUpdate = true
      })
    }
    safeToUpdate = false
  }

  const init = () => {
    createMarker()
    setupLinkEvents()
    updateNav()
    window.addEventListener('scroll', animationLoop)
  }

  if (checkRequiredElements()) init()
}

export default {
  To,
  Marker
}

/**
 * Butr.to
 *
 * @param  {Object} options
 * @return
 */
const to = (options = {}) => {
  let start,
      distance,
      counter,
      step,
      el = options.el
        ? document.querySelector(options.el)
        : document.scrollingElement || document.documentElement,
      target = options.target || 0,
      direction = options.direction || 'y',
      duration = options.duration || 800,
      keepHash = options.keepHash || true,
      userCallback = options.callback || null,
      markerCallback = options.markerCallback || null

  const getCurrentPosition = () => {
    if (direction === 'x') return el.scrollLeft
    if (direction === 'y') return el.scrollTop
  }

  const getTargetPosition = () => {
    if (target[0] === '#') {
      let targetEl = document.getElementById(target.substr(1))
      if (targetEl && direction === 'x') return targetEl.offsetLeft
      if (targetEl && direction === 'y') return targetEl.offsetTop
      return 0
    }
    return target
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
    start = getCurrentPosition()
    distance = getTargetPosition() - start
    counter = 0
    step = 33 // 30~ FPS
    if (keepHash && target[0] === '#') {
      history.pushState({}, '', target)
    }
    animationLoop()
  }

  init()
}

/**
 * ezLinks
 * @return {boolean}
 *
 * Allow automatic smooth scroll on any link with data-butr set
 */
const ezLinks = () => {
  let links = document.body.querySelectorAll('a[data-butr]')
  if (!links.length) return false

  for (var i = links.length - 1; i >= 0; i--) {
    links[i].addEventListener('click', e => {
      e.preventDefault()
      to({ target: e.target.getAttribute('href') })
    })
  }

  return true
}

/**
 * Butr.marker
 *
 * @param  {Object} options
 * @return
 */
const marker = (options = {}) => {
  let top,
      topMostSection,
      marker,
      safeToUpdate = true,
      ignoreScrollEvents = false,
      useTo = options.useTo || false,
      callback = options.callback || null,
      duration = options.duration || 400,
      container = options.container
        ? document.querySelector(options.container)
        : document.scrollingElement || document.documentElement,
      nav = document.querySelector('.js-butr-nav') || false,
      links = document.querySelectorAll('.js-butr-link') || false,
      sections = document.querySelectorAll('.js-butr-section') || false

  const getDistanceFromTop = el => {
    return el.offsetTop - container.offsetTop + el.offsetHeight
  }

  const checkRequiredElements = () => {
    if (!nav || !links || !sections) {
      console.error('Error: Missing required classes on nav, links, or sections. Aborted setup of Butr.marker')
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
        setActive(links[i].hash)
        if (useTo) setupSmoothLink(e, links[i].hash)
      })
    }
  }

  const setupSmoothLink = (e, hash) => {
    e.preventDefault()
    to({
      target: hash,
      callback,
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
          setActive('#' + topMostSection.id)
        }
        break
      }
    }
  }

  const setActive = hash => {
    let previouslyActive = document.querySelector('.js-butr-link.js-butr-active')
    let currentlyActive = document.querySelector('.js-butr-link[href="' + hash + '"]')
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
  to,
  marker,
  ezLinks
}

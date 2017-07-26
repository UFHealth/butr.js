const marker = (options = {}) => {
  let top,
      topMostSection,
      marker,
      safeToUpdate = true,
      ignoreScrollEvents = false,
      useTo = options.useTo || false,
      duration = options.duration || 400,
      container = options.container || document.body,
      nav = document.querySelector('.js-butr-nav'),
      links = document.querySelectorAll('.js-butr-link'),
      sections = document.querySelectorAll('.js-butr-section')

  const getDistanceFromTop = el => {
    return el.offsetTop - container.offsetTop + el.offsetHeight
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
    Butr.to({
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

  init()
}

if (!window.Butr) window.Butr = {}
Butr.marker = marker

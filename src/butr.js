import objAssign from 'object-assign'

export const animate = options => {
  const defaults = {
    duration: 800,
    loop: null,
    done: null,
    easing: 'easeInOutQuad'
  }

  // Determine settings based on defaults + user provided options
  let settings = objAssign({}, defaults, options)

  let start
  let end
  let now
  let timePassed = 0

  const startAnimation = () => {
    start = performance.now()
    end = start + settings.duration
    frame()
  }

  const frame = () => {
    now = performance.now()
    settings.loop(calcIncrement)
    if (now < end) requestAnimationFrame(frame)
    else {
      if (typeof settings.done === 'function') settings.done()
    }
  }

  const calcIncrement = (startValue , endValue) => {
    let delta = endValue - startValue
    let eased = delta * timingFunctions[settings.easing](elapsed())
    return startValue + eased
  }

  const elapsed = () => {
    return Math.min((now - start) / settings.duration, 1)
  }

  const timingFunctions = {
    linear (t) { return t },
    easeInQuad (t) { return t*t },
    easeOutQuad (t) { return t*(2-t) },
    easeInOutQuad (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
    easeInCubic (t) { return t*t*t },
    easeOutCubic (t) { return (--t)*t*t+1 },
    easeInOutCubic (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
    easeInQuart (t) { return t*t*t*t },
    easeOutQuart (t) { return 1-(--t)*t*t*t },
    easeInOutQuart (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
    easeInQuint (t) { return t*t*t*t*t },
    easeOutQuint (t) { return 1+(--t)*t*t*t*t },
    easeInOutQuint (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
  }

  startAnimation()
}

/**
 * butr.autoAnchors()
 *
 * Animate all anchors that use the data-butr attribute.
 */
export const autoAnchors = () => {
  let links = document.body.querySelectorAll('a[data-butr]')
  // Exit before for loop if there are no anchors on the page
  if (!links.length) return false
  // When clicking a link, use butr to scroll to the element with that id
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', e => {
      e.preventDefault()
      butr.to({ target: e.target.getAttribute('href') })
    })
  }
}

/**
 * butr.autoSidebar()
 *
 * Automatically generate sidebar nav links based on the headings in the content.
 *
 * @param {object} options Configuration options.
 */
export const autoSidebar = options => {
  // Set defaults
  const defaults = {
    olClass: '',
    liClass: ''
  }

  // Determine settings based on defaults + user provided options
  let settings = objAssign({}, defaults, options)

  let content
  let headings
  let nav
  let currentList
  let tree = []
  let listStack = [tree]
  let errorOffset = 0

  /**
   * Generate ID based on heading text content.
   *
   * @param  {string} text
   * @return {string} Slugified text for use as an ID attribute.
   */
  const generateId = text => {
    return text.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
  }

  /**
   * Create a hash from a string.
   *
   * @param  {Node} heading Heading node.
   * @return {string} The #heading-hash.
   */
  const createHash = heading => {
    if (!heading.id) heading.id = generateId(heading.innerText)
    return '#' + heading.id
  }

  /**
   * Get required element nodes.
   */
  const getRequiredElements = () => {
    nav = document.querySelector('.js-butr-nav')
    content = document.querySelector('.js-butr-container')
    headings = content.querySelectorAll('h2, h3, h4, h5, h6')
  }

  /**
   * Make sure required elements are in place.
   *
   * @return {boolean} True only if all required elements exist.
   */
  const checkRequiredElements = () => {
    if (!nav || !content || !headings) {
      console.error('Error: Missing required classes on nav, content, or headings. Aborted setup of Butr.marker')
      return false
    } else return true
  }

  /**
   * Set current level in tree.
   *
   * @param  {Node} heading Heading node.
   * @return {Number} Current heading level.
   */
  const setCurrentLevel = heading => {
    return parseInt(heading.tagName.substr(1)) - errorOffset
  }

  /**
   * Set next level in tree.
   *
   * @param  {Number} index Index of current heading.
   * @return {Number} Level of next heading.
   */
  const setNextLevel = index => {
    return headings[index + 1]
      ? parseInt(headings[index + 1].tagName.substr(1)) - errorOffset
      : 0
  }

  /**
   * Create list item from heading.
   *
   * @param  {Node} heading Heading node.
   * @return {object} Heading context data as a simple object.
   */
  const createItem = heading => {
    return {
      label: heading.innerText,
      hash: createHash(heading),
      children: []
    }
  }

  /**
   * Create tree from headings.
   */
  const createTree = () => {
    for (let i = 0; i < headings.length; i++) {
      let heading = headings[i]
      let currentLevel = setCurrentLevel(heading)
      let nextLevel = setNextLevel(i)
      let item = createItem(heading)

      // Retrieve the list at the top of the stack and append item to it
      currentList = listStack[listStack.length - 1]
      currentList.push(item)

      if (nextLevel) {
        if (nextLevel > currentLevel) {
          // If the next levels difference is more than one, correct it to 1.
          // This will prevent out of order or malformed markup from breaking
          // the tree being created.
          errorOffset += nextLevel - currentLevel - 1
          nextLevel -= errorOffset
          // The next heading is lower than the current one; push the current item's
          // `children` container onto the stack, which will cause the next item to be
          // added to it.
          listStack.push(item.children)
        } else if (nextLevel < currentLevel) {
          // Adjust for any existing level errors
          nextLevel += errorOffset
          // Step back the correct number of levels in the stack so the next item will
          // be added to the correct container.
          for (let i = 0; i < currentLevel - nextLevel; i++) {
            listStack.pop()
          }
          // Reset error offset
          errorOffset = 0
        }
      }
    }
  }

  /**
   * Create nav list item (li) from heading.
   *
   * @param  {Node} heading Heading node.
   * @return {Node} <li> element with appended anchor.
   */
  const createNavItem = heading => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.href = heading.hash
    a.innerText = heading.label
    a.classList.add('js-butr-link')
    if (settings.liClass) li.classList.add(settings.liClass)
    li.appendChild(a)
    return li
  }

  /**
   * Create nav list (ol) with tree data and append to parent element.
   *
   * @param {array} tree   Hierarchical tree of headings.
   * @param {Node}  parent Container node to append to.
   */
  const createNavList = (tree, parent) => {
    let list = document.createElement('ol')
    if (settings.olClass) list.classList.add(settings.olClass)
    for (let i = 0; i < tree.length; i++) {
      let item = tree[i]
      let li = createNavItem(item)
      if (item.children.length) createNavList(item.children, li)
      list.appendChild(li)
    }
    parent.appendChild(list)
  }

  const init = () => {
    getRequiredElements()
    if (checkRequiredElements()) {
      createTree()
      createNavList(tree, nav)
    }
  }

  init()
}

/**
 * butr.marker()
 *
 * Create and animate a marker to indicate active state in a nav.
 *
 * @param {object} settings
 */
export const marker = options => {

  // Set defaults
  const defaults = {
    container: false,
    duration: 400,
    callback: false,
    markerClass: '',
    activeClass: '',
  }

  // Determine settings based on defaults + user provided options
  let settings = objAssign({}, defaults, options)

  // User may prefer reduced motion - do not animate to scroll position
  let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches

  // Initialize required data
  let top
  let marker
  let container
  let links
  let headings
  let nav
  let safeToUpdate = true
  let ignoreScrollEvents = false

  /**
   * Set container with el query or with default body el
   * Get other required elements.
   */
  const getRequiredElements = () => {
    container = settings.container
      ? document.querySelector(settings.container)
      : document.scrollingElement || document.documentElement
    nav = document.querySelector('.js-butr-nav')
    links = document.querySelectorAll('.js-butr-link')
    headings = container.querySelectorAll('h2, h3, h4, h5, h6')
  }

  /**
   * Make sure required elements are in place.
   *
   * @return {boolean} Tru only if required elements exist.
   */
  const checkRequiredElements = () => {
    if (!nav || !links) {
      console.error('Error: Missing required classes on nav or links. Aborted setup of Butr.marker')
      return false
    } else return true
  }

  /**
   * Create a marker element with animated css props.
   */
  const createMarker = () => {
    marker = document.createElement('div')
    marker.classList.add('js-butr-marker')
    if (settings.markerClass) marker.classList.add(settings.markerClass)
    marker.style.height = links[0].offsetHeight + 'px'
    // http://easings.net/#easeInOutQuad
    // Should match function in Butr.to easing.
    if (!prefersReducedMotion) {
      marker.style.transition =
        settings.duration +
        'ms transform cubic-bezier(0.455, 0.03, 0.515, 0.955)'
    }
    nav.appendChild(marker)
  }

  /**
   * Set marker position to animate to.
   *
   * @param {Node} activeLink currently active link
   */
  const setMarkerPosition = activeLink => {
    marker.style.transform = 'translateY(' + activeLink.offsetTop + 'px)'
  }

  /**
   * When a link is clicked, set active link and animate scroll to the anchor
   * You could just put the data-butr on these links to get animated
   * scrolling, but you wouldn't get the option to send ignoreScrollEvents in a
   * callback. Ignoring scroll events helps when you scroll to a section
   * (usually the last) that wont make it to the top of the page. If you relied
   * on scroll position it would never get highlighted by the marker, so instead
   * we highlight it and stop watching scroll events while animating to it, then
   * turn them back on.
   */
  const setupLinkEvents = () => {
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', e => {
        e.preventDefault()
        ignoreScrollEvents = true
        setActive(links[i].hash)
        // marker.style.height = links[i].offsetHeight + 'px'
        butr.to({
          duration: settings.duration,
          target: links[i].hash,
          callback: settings.callback,
          markerCallback: () => {
            ignoreScrollEvents = false
          }
        })
      })
    }
  }

  /**
   * Loop over headings and reassign active class to links as needed.
   */
  const checkActive = () => {
    let heading
    for (let i = 0; i < headings.length; i++) {
      if (headings[i].offsetTop > top) {
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
  const setActive = hash => {
    let previouslyActive = document.querySelector('.js-butr-link.js-butr-active')
    let currentlyActive = document.querySelector('.js-butr-link[href="' + hash + '"]')
    if (currentlyActive !== previouslyActive) {
      if (previouslyActive) previouslyActive.classList.remove('js-butr-active')
      if (previouslyActive && settings.activeClass) previouslyActive.classList.remove(settings.activeClass)
      currentlyActive.classList.add('js-butr-active')
      if (settings.activeClass) currentlyActive.classList.add(settings.activeClass)
    }
    setMarkerPosition(currentlyActive)
  }

  /**
   * Set top scroll position and use it to check which link should be active.
   */
  const updateNav = () => {
    top = container.scrollTop
    checkActive()
  }

  /**
   * Animate the updates.
   */
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
    getRequiredElements()
    // If all elements are present, initialize marker
    if (checkRequiredElements()) {
      createMarker()
      setupLinkEvents()
      updateNav()
      window.addEventListener('scroll', animationLoop)
    }
  }

  init()
}

/**
 * butr.to()
 *
 * A stand alone, globally accessible method for scrolling to a target
 * (location or hash).
 *
 * @param {object} options
 */
export const to = options => {

  // Set defaults
  const defaults = {
    el: false,
    target: 0,
    direction: 'y',
    duration: 800,
    keepHash: true,
    callback: null,
    markerCallback: null
  }

  // Determine settings based on defaults + user provided options
  let settings = objAssign({}, defaults, options)

  // User may prefer reduced motion - do not animate to scroll position
  let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches

  // Initialize required data
  let start
  let end
  let el

  /**
   * Set Element with query or default scrolling element.
   * Note: scrollingElement is newish, so falls back to documentElement if needed.
   *
   * @return {Node}
   */
  const getElement = () => {
    return options.el
      ? document.querySelector(options.el)
      : document.scrollingElement || document.documentElement
  }

  /**
   * @return {Number} Current scroll position inside set (scrolling) element.
   */
  const getCurrentPosition = () => {
    if (settings.direction === 'x') return el.scrollLeft
    if (settings.direction === 'y') return el.scrollTop
  }

  /**
   * Determine target position, hash position, or just manually set int.
   *
   * @return {Number} Target position.
   */
  const getTargetPosition = () => {
    if (settings.target[0] === '#') {
      let targetEl = document.getElementById(settings.target.substr(1))
      if (targetEl && settings.direction === 'x') return targetEl.offsetLeft
      if (targetEl && settings.direction === 'y') return targetEl.offsetTop
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
    if (settings.direction === 'x') el.scrollLeft = distance
    if (settings.direction === 'y') el.scrollTop = distance
  }

  /**
   * Set up all required data and start the animation.
   */
  const init = () => {
    el = getElement()
    if (!prefersReducedMotion) {
      start = getCurrentPosition()
      end = getTargetPosition()
      animate({
        loop (calcIncrement) {
          let distance = calcIncrement(start, end)
          scrollTheEl(distance)
        },
        done () {
          if (typeof settings.callback === 'function') settings.callback()
          if (typeof settings.markerCallback === 'function') settings.markerCallback()
        }
      })
      if (settings.keepHash && settings.target[0] === '#') {
        history.pushState({}, '', settings.target)
      }
    } else scrollTheEl(getTargetPosition())
  }

  init()
}

/**
 * Stick Nav to top when it hits the top of the viewport so that it stays
 * visible
 */
export const stickyNav = options => {

  // Set defaults
  const defaults = {
    distanceTop: 0
  }

  // Determine settings based on defaults + user provided options
  let settings = objAssign({}, defaults, options)

  let pos = 0
  let scrollEl = (document.scrollingElement || document.documentElement)
  let nav = document.querySelector('.js-butr-nav')

  /**
   * Basic debounce
   * More info: https://davidwalsh.name/function-debounce
   * @param  {function} callback
   * @param  {int}      delay
   * @return {function} debounced function
   */
  const debounce = (callback, delay) => {
    let timeout
    return function () {
      let args = arguments
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        callback.apply(this, args)
      }, delay)
    }
  }

  /**
   * Set Y position of nav
   */
  const determineYPos = () => {
    pos = nav.offsetTop - extractInt(settings.distanceTop)
  }

  /**
   * Extract int from string with unit (px, em, etc)
   * @param  {string} txt
   * @return {int}    number left over from string
   */
  const extractInt = txt => {
    return parseInt(txt.replace(/[^0-9\.]+/g, ''))
  }

  /**
   * Calculate width of nav based on parent container
   * Function is debounced to prevent excessive calls during scroll
   */
  const setWidth = debounce(() => {
    let parentStyle = window.getComputedStyle(nav.parentNode, null)
    let paddingRight = extractInt(parentStyle.getPropertyValue('padding-right'))
    let paddingLeft = extractInt(parentStyle.getPropertyValue('padding-left'))
    let width = extractInt(parentStyle.getPropertyValue('width'))
    nav.style.maxWidth = width - paddingLeft - paddingRight + 'px'
  }, 250)

  /**
   * Set or remove classes to stick nav based on scroll position
   */
  const determineStickiness = () => {
    if (scrollEl.scrollTop >= pos) {
      nav.style.position = 'fixed'
      nav.style.top = settings.distanceTop
    } else {
      nav.style.position = 'relative'
      nav.style.top = 'auto'
    }
  }

  /**
   * Start up sticky nav
   */
  const init = () => {
    determineYPos()
    determineStickiness()
    setWidth()
    window.addEventListener('scroll', determineStickiness)
    window.addEventListener('resize', setWidth)
  }

  init()
}

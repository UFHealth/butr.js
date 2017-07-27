const to = (options = {}) => {
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

if (!window.Butr) window.Butr = {}
if (!Butr.to) Butr.to = to

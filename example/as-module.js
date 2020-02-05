import Butr from './butr'

document.addEventListener('DOMContentLoaded', () => {
  Butr.init({
    Marker: true,
    AutoAnchors: true,
    AutoSidebar: true,
    StickyNav: true,
    scrollOffset: 128,
    mediaQuery: '(min-width: 1200px)'
  })
  Butr.to({
    target: 500
  })
})

import Butr from './butr'

document.addEventListener('DOMContentLoaded', () => {
  Butr.init({
    To: false,
    Marker: true,
    AutoAnchors: true,
    AutoSidebar: true,
    StickyNav: true,
    scrollOffset: 126,
    distanceTop: 0,
    topBuffer: 30,
    avoid: '.Footer',
    avoidBuffer: 24,
    mediaQuery: '(min-width: 1200px)'
  })
})

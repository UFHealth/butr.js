import { To } from './to'
import { Marker } from './marker'
import { AutoAnchors } from './autoAnchors'
import { AutoSidebar } from './autoSidebar'
import { StickyNav } from './stickyNav'

const init = (options) => {
  // To
  if (options.To || options.AutoAnchors) {
    To({
      threshold: options.threshold || 0
    })
  }
  // Marker
  if (options.Marker) {
    Marker()
  }
  // Sidebar
  if (options.AutoSidebar) {
    AutoSidebar({
      olClass: options.olClass || '',
      liClass: options.liClass || '',
      aClass: options.aClass || ''
    })
  }
  // Anchors
  if (options.AutoAnchors) {
    AutoAnchors({
      to: {
        threshold: options.threshold || 0
      }
    })
  }
  // Sticky Nav
  if (options.StickyNav) StickyNav()
}

window.Butr = {
  init
}

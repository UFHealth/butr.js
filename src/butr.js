import To from './to'
import Marker from './marker'
import AutoAnchors from './autoAnchors'
import AutoSidebar from './autoSidebar'
import StickyNav from './stickyNav'

const init = (options) => {
  console.log(options)

  if (options.to) To.init()
  if (options.marker) Marker.init()
  if (options.autoAnchors) AutoAnchors.init()
  if (options.autoSidebar) AutoSidebar.init()
  if (options.stickyNav) StickyNav.init()
}

window.Butr = {
  init
}

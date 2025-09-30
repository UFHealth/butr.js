import { To } from './to'
import { State } from './state'

/**
 * AutoAnchors()
 *
 * Animate all anchors that use the data-butr attribute.
 */
export const AutoAnchors = () => {
  let links = document.body.querySelectorAll('a[data-butr]')

  // Exit before for loop if there are no anchors on the page
  if (!links.length) return false

  // When clicking a link, use butr to scroll to the element with that id
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
      e.preventDefault()
      To({
        target: e.currentTarget.getAttribute('href')
      })
    })
  }
}

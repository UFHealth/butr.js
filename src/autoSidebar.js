import { appendClasses } from './utils'
import { State } from './state'

/**
 * AutoSidebar()
 *
 * Automatically generate sidebar nav links based on the headings in the content.
 */
export const AutoSidebar = () => {
  const { settings } = State

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
    // Generate ID from text
    let generated = text.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/(\d)\./g, '$1-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')

    // Guarantee a unique ID
    let id = generated
    let i = 0
    while (document.getElementById(id)) {
      id = generated + '-' + ++i
    }

    return id
  }

  /**
   * Create a hash from a string.
   *
   * @param  {Node} heading Heading node.
   * @return {string} The #heading-hash.
   */
  const createHash = heading => {
    if (!heading.id) heading.id = generateId(heading.textContent)
    return '#' + heading.id
  }

  /**
   * Get required element nodes.
   */
  const getRequiredElements = () => {
    nav = document.querySelector('.js-butr-nav')
    content = document.querySelector('.js-butr-content')
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
    }
    return true
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
      label: heading.textContent,
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
    a.setAttribute('data-butr', true)
    a.innerText = heading.label
    a.classList.add('js-butr-link')
    if (settings.aClass) appendClasses(a, settings.aClass)
    if (settings.liClass) appendClasses(li, settings.liClass)
    li.appendChild(a)
    return li
  }

  /**
   * Create nav list (ol) with tree data.
   *
   * @param  {array} tree   Hierarchical tree of headings.
   * @param  {Node}  parent Container node to append to.
   * @return {Node} The list tree.
   */
  const createNavList = (tree) => {
    let list = document.createElement('ol')
    if (settings.olClass) appendClasses(list, settings.olClass)
    for (let i = 0; i < tree.length; i++) {
      let item = tree[i]
      let li = createNavItem(item)
      if (item.children.length) {
        li.appendChild(createNavList(item.children))
      }
      list.appendChild(li)
    }

    return list
  }

  const init = () => {
    getRequiredElements()
    if (checkRequiredElements()) {
      createTree()
      let list = createNavList(tree)
      if (settings.prepend) {
        nav.insertBefore(list, nav.firstElementChild)
      } else {
        nav.appendChild(list)
      }
    }
  }

  init()
}

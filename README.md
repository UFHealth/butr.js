# Butr

![Butr.gif](Butr.png)
![Butr.gif](Butr.gif)

## `Butr.marker()`

```javascript
Butr.marker({
  // When scrolling to section animate with Butr.to()
  // DEFAULT === false
  useTo: true,
  // Callback to pass to Butr.to(), if used
  // DEFAULT === none
  callback: function () {
    console.log('Done scrolling!')
  }
  // Animation duration for marker movement
  // DEFAULT === 400
  duration: 800,
  // Container that is a parent element of sections
  // DEFAULT === document.body or similar based on browser
  container: '.container'
})
```

### HTML Classes

You will need to add a few classes/ids to your markup as well:

- Navigation element that contains links to attach marker to: `.js-butr-nav`
- Links inside that navigation element: `.js-butr-link`
- Each section that should be tracked: `.js-butr-section`
- Sections should have an id that matches a links href

## `Butr.to()`

```javascript
Butr.to({
  // Element to scroll
  // DEFAULT === document.body or similar based on browser
  el: '.limited-height',
  // Location to scroll to -- can be an integer position or a '#hash-target'
  // DEFAULT === 0
  target: 0,
  // Direction of scrolling 'x' or 'y'
  // DEFAULT === 'y'
  direction: 'x',
  // Animation duration for scrolling (in milliseconds)
  // DEFAULT === 800
  duration: 2000,
  // Callback that is fired after scrolling has completed
  // DEFAULT === null
  callback: function () {
    console.log('Done Scrolling!')
  },
})
```

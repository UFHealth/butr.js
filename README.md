# Butr

## `Butr.marker() usage`

```javascript
Butr.marker({
  // When scrolling to section animate with Butr.to
  // DEFAULT === false
  useTo: true,
  // Animation duration for marker movement
  // DEFAULT === 400
  duration: 800,
  // Container that is a parent element of sections
  // DEFAULT === document.body or similar based on browser
  container: '.container',
})
```



## `Butr.to() usage`

```javascript
Butr.to({
  // Element to scroll
  // DEFAULT === document.body or similar based on browser
  el: '.limited-height',
  // Location to scrollTo (from the top or left)
  // DEFAULT === 0
  location: myElement.offsetTop,
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

// Get sync function
const handleGetSync = callback => {
  try { browser.storage.local.get().then(callback, console.error) }
  catch (e) {console.warn(e)}
  try { chrome.storage.local.get(null, callback) }
  catch (e) {console.warn(e)}
}

// Array of elements made invisible through this app
const invisibleElements = []

// Changes element visibility to none
// Checks to see if invisible touch is enabled on each click
const handleClick = ({target}) => {
  handleGetSync(obj => {
    if (obj.invisibleTouchActive === 'on') {
      invisibleElements.push(target)
      target.style.visibility = "hidden"
    }
  })
}

// Undo for making elements visible starting with last element
const handleUndo = ({keyCode}) => {
  handleGetSync(obj => {
    if (keyCode === 90 && obj.invisibleTouchActive === 'on' && invisibleElements.length > 0) {
      invisibleElements.pop().visibility = ""
    }
  })
}

const handleDOMContentLoaded = () => {
  document.addEventListener("click", handleClick)
  document.addEventListener("keyup", handleUndo)
}

// Fire off main script
handleDOMContentLoaded()

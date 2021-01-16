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

// Undo for making element invisible
const handleUndo = () => {
  if (invisibleElements.length > 0) {
    invisibleElements.pop().visibility = ""
  }
}

const handleDOMContentLoaded = () => {
  document.addEventListener("click", handleClick)
}

// Fire off main script
handleDOMContentLoaded()

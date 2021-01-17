// Get sync function
const handleGetSync = callback => {
  try { browser.storage.local.get().then(callback, console.error) }
  catch (e) {console.warn(e)}
  try { chrome.storage.local.get(null, callback) }
  catch (e) {console.warn(e)}
}

// Set sync function
const handleSetSync = object => {
  try { browser.storage.local.set(object) }
  catch(e){console.warn(e)}
  try { chrome.storage.local.set(object) }
  catch(e){console.warn(e)}
}

// Array of elements made invisible through this app
const invisibleElements = []

// Changes element visibility to none
// Checks to see if invisible touch is enabled on each click
const handleClick = event => {
  const {target} = event
  handleGetSync(obj => {
    if (obj.invisibleTouchActive === 'on') {
      invisibleElements.push(target)
      target.style.visibility = "hidden"
    }
  })
}

// Undo for making elements visible starting with last element
const handleKeyPress = ({keyCode}) => {
  handleGetSync(obj => {
    if (obj.invisibleTouchActive === 'on' && keyCode === 90 && invisibleElements.length > 0) {
      invisibleElements.pop().style.visibility = ""
    }
  })
}

const handleDOMContentLoaded = () => {
  document.addEventListener("click", handleClick)
  document.addEventListener("keyup", handleKeyPress)
}

// Fire off main script
handleDOMContentLoaded()

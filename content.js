// Get sync function
const handleGetSync = callback => {
  try { browser.storage.local.get().then(callback, console.error) }
  catch (e) {console.warn(e)}
  // try { chrome.storage.local.get(null, callback) } catch (e) {console.warn(e)}
}

// Set sync function
const handleSetSync = object => {
  try { browser.storage.local.set(object) }
  catch(e){console.warn(e)}
  // try { chrome.storage.local.set(object) } catch(e){console.warn(e)}
}

// Array of elements made invisible through this app
const invisibleElements = []

// functions for opening new window / going to link based on text
const openInNewTab = url => { const win = window.open(url, '_blank'); win.focus(); }
const goTo = url => { window.location.href = url }
const searchURL = () => `https://www.google.com/search?q=${window.getSelection().toString().trim().replaceAll(" ", "+")}`

// Changes element visibility to none
// Checks to see if invisible touch is enabled on each click
const handleClick = event => {
  const {target, type} = event
  // prevent context menu from popping up with right click
  if (type === "contextmenu") event.preventDefault()
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
    if (obj.invisibleTouchActive === 'on' && keyCode === 90 && invisibleElements.length) {
      invisibleElements.pop().style.visibility = ""
    } else if (obj.divinationTouchActive === 'on' && keyCode === 70) {
      openInNewTab(searchURL())
    } else if (obj.divinationTouchActive === 'on' && keyCode === 68) {
      goTo(searchURL())
    }
  })
}

const handleDOMContentLoaded = () => {
  document.addEventListener("click", handleClick)
  document.addEventListener("contextmenu", handleClick)
  document.addEventListener("keyup", handleKeyPress)
}

// Fire off main script
handleDOMContentLoaded()

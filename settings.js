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

// Gather elements
const activateBox = document.getElementById('timer-active-input')

// Gather local values from browser storage to display
const loadInitialValues = () => {
  handleGetSync((obj) => {
    if (obj.invisibleTouchActive === 'on') activateBox.checked = true
  })
}

// Sends information to storage depending on whether checkbox is clicked or not
const handleToggleInvisibleTouch = () => {
  if (activateBox.checked) {
    handleSetSync({invisibleTouchActive: 'on'})
  } else {
    handleSetSync({invisibleTouchActive: 'off'})
  }
}

loadInitialValues()
activateBox.addEventListener('click', handleToggleInvisibleTouch)

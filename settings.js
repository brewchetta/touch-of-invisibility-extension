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
const invisibleToggle = document.getElementById('invisible-touch-input')
const divinationToggle = document.getElementById('divination-touch-input')
const helperText = document.getElementById('helper-text')

// Gather local values from browser storage to display
const loadInitialValues = () => {
  handleGetSync((obj) => {
    if (obj.invisibleTouchActive === 'on') {
      invisibleToggle.checked = true
      helperText.style.opacity = 1
    } else if (obj.divinationTouchActive === 'on') {
      divinationToggle.checked = true
    }
  })
}

// Sends information to storage depending on whether checkbox is clicked or not
const handleToggleInvisibleTouch = () => {
  if (invisibleToggle.checked) {
    handleSetSync({invisibleTouchActive: 'on', divinationTouchActive: 'off'})
    helperText.style.opacity = 1
    divinationToggle.checked = false
  } else {
    handleSetSync({invisibleTouchActive: 'off'})
    helperText.style.opacity = 0
  }
}

// Sends information to storage depending on whether checkbox is clicked or not
const handleToggleDivinationTouch = () => {
  if (divinationToggle.checked) {
    handleSetSync({invisibleTouchActive: 'off', divinationTouchActive: 'on'})
    invisibleToggle.checked = false
  } else {
    handleSetSync({divinationTouchActive: 'off'})
  }
}

loadInitialValues()
invisibleToggle.addEventListener('click', handleToggleInvisibleTouch)
divinationToggle.addEventListener('click', handleToggleDivinationTouch)

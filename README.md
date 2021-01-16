## Touch of Invisibility

When activated, makes every element you click invisible. Can also return visibility to elements or undo invisibility. Note that this doesn't remove the elements, just changes their visibility in the style.

### Firefox Instructions

Clone this repo and navigate to `about:debugging` in the browser. Choose 'This Firefox' from the sidebar and select 'Load Temporary Add-on...'

Navigate to the repo and choose `manifest.json`. The extension should now be loaded for this session of firefox.

### Chrome Instructions

Clone this repo and navigate to `/chrome://extensions` in the browser. In the upper right turn on `Developer mode`.

Click `Load unpacked` and navigate to the repo, choosing the entire folder. The extension should now be loaded for this session of chrome.

### Using the Extension

When you click on the extension icon, you'll be able to toggle the touch of invisibility on and off. When toggled on, any element you right-click (or right-click adjacent functionality) will have its visibility set to "hidden".

You can press 'z' any number of times while the touch is active to undo the last touches.

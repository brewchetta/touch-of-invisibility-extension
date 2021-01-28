## Touch of Invisibility

When activated, makes every element you click invisible. Can also return visibility to elements or undo invisibility. Note that this doesn't remove the elements, just changes their visibility in the style.

This is just a fun thing I built to fight against webpage clutter (intrusive headers, pop-ups, annoying banners, and the like). 

### Firefox Instructions

Clone this repo and navigate to `about:debugging` in the browser. Choose 'This Firefox' from the sidebar and select 'Load Temporary Add-on...'

Navigate to the repo and choose `manifest.json`. The extension should now be loaded for this session of firefox.

Alternately, go to `about:config` in the browser and set `xpinstall.signatures.required` to `false`. Then navigate to `about:addons` and drag and drop the most recent `.zip` file version in `web-ext-artifacts` into that tab. This will permanently add the extension until you remove it.

### Chrome Instructions

Clone this repo and navigate to `/chrome://extensions` in the browser. In the upper right turn on `Developer mode`.

Click `Load unpacked` and navigate to the repo, choosing the entire folder. The extension should now be loaded for this session of chrome.

### Using the Extension

When you click on the extension icon, you'll be able to toggle the touch of invisibility on and off. When toggled on, any element you click will have its visibility set to "hidden".

You can return the visibility of elements by pressing 'z' any number of times. The touch needs to be active for this to work. Touches will be removed in order of last element touched.

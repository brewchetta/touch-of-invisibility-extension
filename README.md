## Flatiron Blog Timer

When activated, makes every element you click invisible. Can also return visibility to elements or undo invisibility. Note that this doesn't remove the elements, just changes their visibility in the style.

### Firefox Instructions

Clone this repo and navigate to `about:debugging` in the browser. Choose 'This Firefox' from the sidebar and select 'Load Temporary Add-on...'

Navigate to the repo and choose `manifest.json`. The extension should now be loaded for this session of firefox.

### Chrome Instructions

Clone this repo and navigate to `/chrome://extensions` in the browser. In the upper right turn on `Developer mode`.

Click `Load unpacked` and navigate to the repo, choosing the entire folder. The extension should now be loaded for this session of chrome.

### Using the Extension

When you click on the extension icon, you'll be able to adjust the time for student presentations. The first time is the number of minutes / seconds a student can present without a warning. The grace period is additional time with a more explicit time warning.

The timer is off by default so instructors can peruse blogging sites without the timer. Set the timer to on and determine how long a student has to present.

Load up each page of student blogs and then switch the timer to 'on'. A student's timer begins once the student tabs back into their blog. There is an initial disappearing bar at the top followed by a more explicit warning once they're over time.

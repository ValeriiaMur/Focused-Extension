// Initialize button with user's preferred color
//let addPoints = document.getElementById('addPoints');
let addScanning = document.getElementById('addScanning');


// When the button is clicked, inject convertToReadbaleText into current page
// addPoints.addEventListener('click', async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id, allFrames: true },
//     files: ['src/convert.js'],
//   },
//   () => {
//     if (chrome.runtime.lastError) {
//       var errorMsg = chrome.runtime.lastError.message
//       alert(errorMsg);
//    }
//   })
// })


// When the button is clicked, inject convertToReadbaleText into current page
addScanning.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    files: ['src/scanning.js'],
  },
  () => {
    if (chrome.runtime.lastError) {
      var errorMsg = chrome.runtime.lastError.message
      alert(errorMsg);
   }
  })
})
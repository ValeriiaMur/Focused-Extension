// background.js

chrome.runtime.onInstalled.addListener(() => {
  console.log('Focused reading running...')
})

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
      // chrome.scripting.executeScript({
      //   target: { tabId, allFrames: true },
      //   func: checkIfActive,
      // }, (result) => {
      //   console.log(result);
      //   if (result[0].result > 0){
      //     document.getElementById("slidePoints").checked = true;
      //   }
      // })
      // chrome.scripting.executeScript({
      //   target: { tabId, allFrames: true },
      //   files: ['src/convert.js'],
      // }, (result) => {
      //   if (result[0].result > 0){
      //     document.getElementById("slidePoints").checked = true;
      //   }
      // })

  }
})


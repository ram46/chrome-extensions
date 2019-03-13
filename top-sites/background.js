chrome.runtime.onInstalled.addListener(function() {
  console.log("App installed!!")
  chrome.topSites.get(function(sites) {
    console.log(sites)
  })
})
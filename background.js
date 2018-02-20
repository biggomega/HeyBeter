chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({'HeyBeter': true});
});

chrome.browserAction.onClicked.addListener(function() {
  chrome.storage.local.get("HeyBeter", function(items) {
    beter = items["HeyBeter"];
    if (beter) {
      chrome.storage.local.set({'HeyBeter': false});
      chrome.browserAction.setIcon({path: 'image/disabled19.png'});
      chrome.browserAction.setTitle({title: "Click to enable"});
      chrome.tabs.executeScript({
        file: 'content.js'
      });
    } else {
      chrome.storage.local.set({'HeyBeter': true});
      chrome.browserAction.setIcon({path: 'image/icon19.png'});
      chrome.browserAction.setTitle({title: "Click to disable"});
      chrome.tabs.executeScript({
        file: 'content.js'
      });
    }
  });
});

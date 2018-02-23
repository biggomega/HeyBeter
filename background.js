chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({'hey-beter': 1});
});

chrome.runtime.setUninstallURLchrome.runtime.setUninstallURL("http://apps.benbotvinick.com/hey-beter/uninstall");

chrome.browserAction.onClicked.addListener(function() {
  chrome.storage.local.get("hey-beter", function(items) {
    let beter = items["hey-beter"];
    if (beter == 1) {
      chrome.storage.local.set({'hey-beter': 2});
      chrome.browserAction.setIcon({path: 'image/switch/match-font.png'});
      chrome.browserAction.setTitle({title: "Click to disable"});
      chrome.tabs.executeScript({
        file: 'content.js'
      });
    } else if (beter == 2) {
      chrome.storage.local.set({'hey-beter': 0});
      chrome.browserAction.setIcon({path: 'image/switch/disabled.png'});
      chrome.browserAction.setTitle({title: "Click to enable"});
      chrome.tabs.executeScript({
        file: 'content.js'
      });
    } else {
      chrome.storage.local.set({'hey-beter': 1});
      chrome.browserAction.setIcon({path: 'image/icon19.png'});
      chrome.browserAction.setTitle({title: "Click to match font"});
      chrome.tabs.executeScript({
        file: 'content.js'
      });
    }
  });
});

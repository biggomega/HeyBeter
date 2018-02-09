chrome.storage.local.get("HeyBeter", function(items) {
  if (items["HeyBeter"]) {
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
          var text = node.nodeValue;
          var replacedText = text.replace(/ B/gi, ' 🅱️');

          if (replacedText !== text) {
              element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
      }
    }

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
          var text = node.nodeValue;
          var replacedText = text.replace(/"B/gi, '"🅱️');

          if (replacedText !== text) {
              element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
      }
    }

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
          var text = node.nodeValue;
          var replacedText = text.replace(/'B/gi, '\'🅱️');

          if (replacedText !== text) {
              element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
      }
    }

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
          var text = node.nodeValue;
          var replacedText = text.replace(/Peter /gi, '🅱️eter ');

          if (replacedText !== text) {
              element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
      }
    }
  }
});

document.getElementById("mydivtoclicky").onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
};

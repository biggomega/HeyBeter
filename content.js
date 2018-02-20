function text_replace(elements, to_replace, replaced_text) {
  var reg_replace = new RegExp(to_replace, "gi");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(reg_replace, replaced_text);

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}

chrome.storage.local.get("hey-beter", function(items) {
  var elements = document.getElementsByTagName('*');
  var beter = items["hey-beter"]
  if (beter == 1) {
    text_replace(elements, " B", " 🅱️");
    text_replace(elements, "\"B", "\"🅱️");
    text_replace(elements, "'B", "'🅱️");
    text_replace(elements, "Peter ", "🅱️eter ");
  } else if (beter == 2) {
    text_replace(elements, " 🅱️", " 🅱");
    text_replace(elements, "\"🅱️", "\"🅱");
    text_replace(elements, "'🅱️", "'🅱");
    text_replace(elements, "🅱️eter ", "🅱eter ");
      text_replace(elements, " B", " 🅱");
      text_replace(elements, "\"B", "\"🅱");
      text_replace(elements, "'B", "'🅱");
      text_replace(elements, "Peter ", "🅱eter ");
  } else {
    text_replace(elements, " 🅱", " B");
    text_replace(elements, "\"🅱", "\"B");
    text_replace(elements, "'🅱", "'B");
    text_replace(elements, "🅱eter ", "Peter ");
  }
});

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

chrome.storage.local.get("HeyBeter", function(items) {
  var elements = document.getElementsByTagName('*');
  if (items["HeyBeter"]) {
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

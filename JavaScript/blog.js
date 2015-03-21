// Blog Post fade:
function fadeIn(elementId) {
  var element = document.getElementById(elementId);
  element.style.transition = "opacity 1.5s linear 0";
  element.style.opacity = 1;
}

var elementsToFadeById = ["entire-blog"];

function fadeAllElements() {
  for (i of elementsToFadeById) {
    fadeIn(i);
  }
};

addLoadEvent(fadeAllElements);

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
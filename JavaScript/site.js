// Footer Javascript
function footerAutoDate() {
var footer = document.getElementById("footerJS");

footer.innerHTML =
"<p>© Copyright " + new Date().getFullYear() + " | Ace Elijah Burgess</p>";
}

addLoadEvent(footerAutoDate);

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
// Navigation Bar
function navigationDRY() {
var navigationBar = document.getElementById("navJS");

navigationBar.innerHTML =
"<ul id='navigation'>" +
  "<li><a href='index.html'>About Me</a></li>" +
  "<li><a href='mailto:thankace@gmail.com'>Contact</a></li>" +
  "<li><a href='http://www.github.com/aceburgess'>GitHub</a></li>" +
  "<li class='blog_list' onclick=''><a href='#'>Blog</a><z></z>" +
  "<ul id='blog'>" +
    "<li>- <a href='blog/t8-tech.html'>Sorting Algorithms</a></li>" +
    "<li>- <a href='blog/c7-values.html'>The Value System</a></li>" +
    "<li>- <a href='blog/t7-JavaScript.html'>Do Each For A While</a></li>" +
    "<li>- <a href='blog/c6-stereotype-threat.html'>Stereotype Threat</a></li>" +
    "<li>- <a href='blog/t6-oop-concepts.html'>Blocks, Procs, & Lambdas</a></li>" +
    "<li>- <a href='blog/c5-feedback.html'>Feedback</a></li>" +
    "<li>- <a href='blog/t5-ruby-classes.html'>Ruby Classes</a></li>" +
    "<li>- <a href='blog/c4-tech-issues.html'>TechCompanies.gov</a></li>" +
    "<li>- <a href='blog/t4-enumerable-methods.html'>group_by.baddassness?</a></li>" +
    "<li>- <a href='blog/t3-ruby-basics.html'>Back 2 The Basics</a></li>" +
    "<li>- <a href='blog/c3_thinking-style.html'>Abstract / Concrete Random</a></li>" +
    "<li>- <a href='blog/t3-arrays-hashes.html'>Arrays vs Hashes</a></li>" +
    "<li>- <a href='blog/t2-css-design.html'>Absolutely Not Your Relative</a></li>" +
    "<li>- <a href='blog/c1-chefs-kitchen.html'>DBCulture</a></li>" +
    "<li>- <a href='blog/t1-git-blog.html'>Git Off My Property</a></li>" +
  "</ul></li>" +
"</ul>";
}

// Page Fade-In
function fadeIn(elementId) {
  var element = document.getElementById(elementId);
  element.style.transition = "opacity 0.9s linear 0";
  element.style.opacity = 1;
}

var elementsToFadeById = ["indexJS"];

function fadeAllElements() {
  for (i of elementsToFadeById) {
    fadeIn(i);
  }
};

// Window OnLoad Calls

addLoadEvent(fadeAllElements);
addLoadEvent(navigationDRY);

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
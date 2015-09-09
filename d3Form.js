var xmlhttp = new XMLHttpRequest();
var url = "https://api.github.com/search/users?q=";

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var myArr = JSON.parse(xmlhttp.responseText);
      console.log(myArr);
    } else {
      console.log("Something went terribly wrong.")
    }
  }
  var params = document.getElementById("myForm").elements[0].value;
  xmlhttp.open("GET", url+params, true);
  xmlhttp.send();
});


var xmlhttp = new XMLHttpRequest();
var url = "https://api.github.com/search/users?q=";

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var items = JSON.parse(xmlhttp.responseText).items;
      var itemsArray = [];
      var count = 0
      while (count <= items.length-1) {
        itemsArray.push(items[count].login);
        count++;
        if (count === 4) break;
      }
      console.log(itemsArray);
    }
  }
  var params = document.getElementById("myForm").elements[0].value;
  xmlhttp.open("GET", url+params, true);
  xmlhttp.send();
});


//creates request object
var xmlhttp = new XMLHttpRequest();
var url = "https://api.github.com/search/users?q=";

//adds event listener to submit button
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  //upon successful http request, parse the response
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var items = JSON.parse(xmlhttp.responseText).items;
      var itemsArray = [];
      var count = 0

      //ensures the length of login names in items array is less than or equal to 5
      while (count <= items.length-1) {
        itemsArray.push(items[count].login);
        count++;
        if (count === 5) break;
      }

      //creates a histogram inside barData
      var xAxisLabels = "abcdefghijklmnopqrstuvwxyz".split("");
      var barData = [];
      //makes sure login names are lowercased
      var loginNames = itemsArray.join("").toLowerCase();
      //pushes the letter and frequency of letter into an array of objects, barData, see above.
      for (var j = 0; j < xAxisLabels.length; j++) {
        barData.push({ letter: xAxisLabels[j], frequency: (loginNames.split(xAxisLabels[j]).length - 1)});
      }
      //pushes all other characters into other field
      barData.push({ letter: "other", frequency: loginNames.match(/([^a-z])/g).length});

      //renders the bar chart
      renderChart(barData);
    }
  }
  //sends url and params from given by user from the form and sends http request
  var params = document.getElementById("myForm").elements[0].value;
  xmlhttp.open("GET", url+params, true);
  xmlhttp.send();
});

// D3 chart.....................
function renderChart(data) {
  //sets format of chart
  var margin = {top: 40, right: 20, bottom: 30, left: 40},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var formatCount = d3.format("0");

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(formatCount);
  // creates text and formats tool tip
  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<strong>Count:</strong> <span style='color:red'>" + d.frequency + "</span>";
    })

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.call(tip);

    //sets x and y labels from data argument
    x.domain(data.map(function(d) { return d.letter; }));
    y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Count");

    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.letter); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.frequency); })
        .attr("height", function(d) { return height - y(d.frequency); })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)


  function type(d) {
    d.frequency = +d.frequency;
    return d;
  }
};
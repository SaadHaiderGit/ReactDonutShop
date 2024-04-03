"use strict";

async function start() {

  //fetch data
  
  const response = await fetch(
    "http://localhost:8080/projects/cis435_project3/index.php",
    {
      method: 'GET',
      headers: {
          'Accept' : 'application/json'
      }
    }
  );
  resp_data = await response.json();  //asynchronous so we await the json data
 

  if (resp_data.length != 0) {
    const welcome = document.getElementById('test');
    welcome.innerHTML = norm_greeting;
    ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('content'));
  }
  else {
    const welcome = document.getElementById('test');
    welcome.innerHTML = no_donut_greeting;
  }
  
}

function Donut(props) {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.dName), /*#__PURE__*/React.createElement("td", null, props.dDescription), /*#__PURE__*/React.createElement("td", null, "$", props.dPrice));

}


function App() {
  var DonutList = [];
  for (var i = 0; i < resp_data.length; i++) {
    DonutList.push( /*#__PURE__*/React.createElement(Donut, {
      dName: resp_data[i]["Name"],
      dDescription: resp_data[i]["Description"],
      dPrice: resp_data[i]["Price"]
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "Format"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Description"), /*#__PURE__*/React.createElement("th", null, "Price")), DonutList)));
}

var norm_greeting = 
  `<p>Interested in our current selection? Please take a look at our menu below.</p><br/>
  <h2>The Donut Menu</h2>
  <p> Donuts are sorted in alphabetical order for your convenience.</p>`
var no_donut_greeting = 
  `<p>Unfortunately, we're out of donuts right now. We're doing our best to restock, so be sure to check in later!</p>`
var resp_data = "";
window.onload = start;

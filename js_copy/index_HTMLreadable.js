//BABEL WILL TRANSLATE THE JSX INTO HTML-FRIENDLY CODE, WHICH IS SENT TO THE 'js_copy' FOLDER.

"use strict";

function Donut(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.dName), /*#__PURE__*/React.createElement("td", null, props.dDescription), /*#__PURE__*/React.createElement("td", null, props.dPrice)));
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
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Description"), /*#__PURE__*/React.createElement("th", null, "Price")), DonutList));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('content'));



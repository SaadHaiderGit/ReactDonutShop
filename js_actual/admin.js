"use strict";

//~~~~Load in all values, DB items, and prepare buttons for use~~~~
function start() {
  load();

  const addBtn = document.getElementById('add');
  addBtn.onclick = handleButtonClick;
  
  const updateBtn = document.getElementById('update');
  updateBtn.onclick = handleButtonClick;

  const deleteBtn = document.getElementById('delete');
  deleteBtn.onclick = handleButtonClick;

}



//~~~~Fetch data and load the Donut components~~~~
async function load() {

  const response = await fetch(
    "http://localhost:8080/projects/cis435_project3/admin.php",
    {
      method: 'GET',
      headers: {
          'Accept' : 'application/json'
      }
    }
  );
  resp_data = await response.json();  //asynchronous so we await the json data
 
  if (resp_data.length != 0) {
    ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('content'));
  }
  else {
    const welcome = document.getElementById('content');
    welcome.innerHTML = "<i>(The database is empty; please insert a new donut.)</i>";
  }
}



//~~~~Respond to button inputs to add, update, or delete donuts~~~~
async function handleButtonClick(e) {
  let id = document.getElementById('id').value;
  let name = document.getElementById('name').value;
  let desc = document.getElementById('desc').value;
  let price = document.getElementById('price').value;
  let notifyString = document.getElementById('notify');


  switch (e.currentTarget.id) {
    
    //add a donut
    case 'add':                                             
      if (name != "" && desc != "" && price != "") {
        if (isNaN(price))
          {return notifyString.innerHTML = `<p style="color: red;">ERROR: Price should be a number (in decimal format).</p>`;}
        price = Number(price).toFixed(2);
        id = DonutList.length + 1;
        if (resp_data == 0) {
          id = 1;
        }

        const response = await fetch(
          "http://localhost:8080/projects/cis435_project3/admin.php", 
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id, name: name, desc: desc, price: price})
          });
        let check = await response.json(); 
        console.log(check);
        notifyString.innerHTML = `<p style="color: blue;">New donut added! (Has ID ${check.id}.)</p>`;
        load();
        return;
      }
      else {
        return notifyString.innerHTML = `<p style="color: red;">ERROR: Please insert a name, description, and price.</p>`;
      }

    
    //update a donut  
    case 'update':
      if (!isNaN(id) && id != "" && (0 < id && id <= DonutList.length && parseFloat(id) == parseInt(id))) {
        id = String(parseFloat(id));
        if (name == "" && desc == "" && price == "")
          {return notifyString.innerHTML = `<p style="color: red;">ERROR: No updated values were given for the donut at ID ${id}.</p>`;}
        if (price != "" && isNaN(price))
          {return notifyString.innerHTML = `<p style="color: red;">ERROR: Price should be a number (in decimal format).</p>`;}
        price = Number(price).toFixed(2);

        const response = await fetch(
          "http://localhost:8080/projects/cis435_project3/admin.php", 
          {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id, name: name, desc: desc, price: price})
          });
        let check = await response.json(); 
        notifyString.innerHTML = `<p style="color: blue;">Updated the donut at ID ${check.id}.</p>`;
        load();
        return;
      }
      else {
        if (id != "" && parseFloat(id) != parseInt(id)) 
          {return notifyString.innerHTML = `<p style="color: red;">ERROR: ID must be an integer.</p>`;}
        if (id < 0) {return notifyString.innerHTML = `<p style="color: red;">ERROR: You cannot use negative IDs.</p>`;}
        if (id == 0 && id != "") {return notifyString.innerHTML = `<p style="color: red;">ERROR: You cannot use 0 as an ID.</p>`;}
        if (id > DonutList.length) 
          {return notifyString.innerHTML = `<p style="color: red;">ERROR: Your ID exceeds the total number of IDs available.</p>`;}
        return notifyString.innerHTML = `<p style="color: red;">ERROR: Please insert the ID you want to update.</p>`;
      }

    
    //delete a donut
    case 'delete':
      if (!isNaN(id) && id != "" && (0 < id && id <= DonutList.length && parseFloat(id) == parseInt(id))) {
        id = String(parseFloat(id));

        const response = await fetch(
          "http://localhost:8080/projects/cis435_project3/admin.php", 
          {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
          });
        let check = await response.json(); 
        //console.log(check);
        notifyString.innerHTML = 
          `<p style="color: blue;">Deleted the donut currently at ID ${check.values.ID}
           (had name \'${check.values.Name}\').</p>`;
        load();
        return;
      }
      else {
        if (id != "" && parseFloat(id) != parseInt(id)) 
        {return notifyString.innerHTML = `<p style="color: red;">ERROR: ID must be an integer.</p>`;}
        if (id < 0) {return notifyString.innerHTML = `<p style="color: red;">ERROR: You cannot use negative IDs.</p>`;}
        if (id == 0 && id != "") {return notifyString.innerHTML = `<p style="color: red;">ERROR: You cannot use 0 as an ID.</p>`;}
        if (id > DonutList.length) 
          {return notifyString.innerHTML = `<p style="color: red;">ERROR: Your ID exceeds the total number of IDs available.</p>`;}
        return notifyString.innerHTML = `<p style="color: red;">ERROR: Please insert the ID you want to delete.</p>`;
      }

      
    default:
      notifyString.innerHTML = e.currentTarget.id + "<p><br/>Something went wrong!</p>";
  }

  
}



//~~~~Create Donut React components, nested in <App>~~~~
function Donut(props) {
  return React.createElement("tr", null, React.createElement("td", null, props.dID), React.createElement("td", null, props.dName), React.createElement("td", null, props.dDescription), React.createElement("td", null, "$", props.dPrice));
}

function App() {
  DonutList = [];
  for (var i = 0; i < resp_data.length; i++) {
    DonutList.push( React.createElement(Donut, {
      dID: resp_data[i]["ID"],
      dName: resp_data[i]["Name"],
      dDescription: resp_data[i]["Description"],
      dPrice: resp_data[i]["Price"]
    }));
  }
  return React.createElement("div", {
    className: "Format"
  }, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("th", null, "ID"), React.createElement("th", null, "Name"), React.createElement("th", null, "Description"), React.createElement("th", null, "Price")), DonutList)));
}



//~~~~START + initialize values~~~~
var resp_data = "";
var DonutList = [];
window.onload = start;

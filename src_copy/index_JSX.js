//WRITE YOUR JSX IN THE 'src_copy' FOLDER, THEN RUN 'npm run build' IN THE TERMINAL. 
//BABEL WILL TRANSLATE THE JSX INTO HTML-FRIENDLY CODE, WHICH IS SENT TO THE 'js_copy' FOLDER.
//THIS OCCURS DUE TO THE BUILD FEATURE ADDED INTO THE 'package.json', WHICH ALLOWS FOR THE TRANSLATION.

function Donut(props) {
  return (
    <div>
      <tr>
        <td>{props.dName}</td> 
        <td>{props.dDescription}</td> 
        <td>{props.dPrice}</td>
      </tr>
    </div>
  );
}

function App() {
  let DonutList = [];
  for (let i = 0; i < resp_data.length; i++) {
    DonutList.push(<Donut dName={resp_data[i]["Name"]} dDescription={resp_data[i]["Description"]} dPrice={resp_data[i]["Price"]} />)
  }
  return (
    <div className="Format">
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
        {DonutList}
      </table>
    </div>
  );
}

ReactDOM.render( <App />, document.getElementById('content'));



import './App.css';
import React from "react";
import EmployeeRow from "./components/employeeRow";
import Header from "./components/header";
import labelRow from "./components/labelRow";
import employeeListImport from "./employeeList.json";

function App() {

  const [DeveloperState, setDeveloperState] = useState({
    employeeList: employeeListImport
  });



  return (
    <div className="App">
      <Header />
      <labelRow />
      {DeveloperState.employeeList.map(employee => (
            <div className="col-md-3">
              <EmployeeRow
                employee = {employee}
              />
            </div>
          ))}
    </div>
  );
}

export default App;

import './App.css';
import React from "react";
import EmployeeRow from "./components/employee";
import Header from "./components/header";
import employeeListImport from "./employeeList.json";

function App() {

  const [DeveloperState, setDeveloperState] = useState({
    employeeList: employeeListImport
  });

  return (
    <div className="App">
      <Header />
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

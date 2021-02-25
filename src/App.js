import './App.css';
import React, { useState } from "react";
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
        <EmployeeRow
          employee={employee}
        />
      ))}
    </div>
  );
}

export default App;

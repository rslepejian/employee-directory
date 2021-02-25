import './App.css';
import React, { useState } from "react";
import EmployeeRow from "./components/employeeRow";
import Header from "./components/header";
import employeeListImport from "./employeeList.json";

function App() {

  const [DeveloperState, setDeveloperState] = useState({
    employeeList: employeeListImport
  });

  function sortByName() {

  }

  function sortByPhone() {

  }

  function sortByEmail() {

  }

  function sortByDOB() {
    
  }

  return (
    <div className="App">
      <Header />

      <table>
        <tr>
          <th>Image</th>
          <th onClick = {() => sortByName()}>Name</th>
          <th onClick = {() => sortByPhone()}>Phone</th>
          <th onClick = {() => sortByEmail()}>Email</th>
          <th onClick = {() => sortByDOB()}>DOB</th>
        </tr>
        {DeveloperState.employeeList.map(employee => (
          <EmployeeRow
            employee={employee}
          />
        ))}
      </table>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from "react";
import EmployeeRow from "./components/employeeRow";
import Header from "./components/header";
import API from "./utils/API";

function App() {

  const [developerState, setDeveloperState] = useState({
    employeeList: []
  });

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.getLanguagesList()
      .then(languages => {
        API.getUsersByLanguage(languages[0]).then((users) => {
          setDeveloperState({employeeList : users});
        });
      })
      .catch(err => console.log(err));
  }

  function sortByName() {
    var tempArray = developerState.employeeList;
    tempArray.sort((a, b) => (a.name > b.name) ? 1 : -1);
    setDeveloperState({ ...developerState, employeeList: tempArray });
  }

  function sortByPhone() {
    var tempArray = developerState.employeeList;
    tempArray.sort((a, b) => (a.phone > b.phone) ? 1 : -1);
    setDeveloperState({ ...developerState, employeeList: tempArray });
  }

  function sortByEmail() {
    var tempArray = developerState.employeeList;
    tempArray.sort((a, b) => (a.email > b.email) ? 1 : -1);
    setDeveloperState({ ...developerState, employeeList: tempArray });
  }

  function sortByDOB() {
    var tempArray = developerState.employeeList;
    tempArray.sort((a, b) => (a.dob > b.dob) ? 1 : -1);
    setDeveloperState({ ...developerState, employeeList: tempArray });
  }

  return (
    <div className="App">
      <Header />

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={(event) => { event.preventDefault(); sortByName(); }}>Name</th>
            <th onClick={(event) => { event.preventDefault(); sortByPhone(); }}>Phone</th>
            <th onClick={(event) => { event.preventDefault(); sortByEmail(); }}>Email</th>
            <th onClick={(event) => { event.preventDefault(); sortByDOB(); }}>DOB</th>
          </tr>
        </thead>
        <tbody>
          {developerState.employeeList.map(employee => (
            <EmployeeRow
              employee={employee}
              key={employee.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

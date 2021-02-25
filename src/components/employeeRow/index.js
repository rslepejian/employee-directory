import React from "react";
import "./style.css";

function EmployeeRow(props) {
  return (
    <tr>
      <td>
        <img src={props.employee.image} />
      </td>
      <td>
        <p>{props.employee.name}</p>
      </td>
      <td>
        <p>{props.employee.phone}</p>
      </td>
      <td>
        <p>{props.employee.email}</p>
      </td>
      <td>
        <p>{props.employee.dob}</p>
      </td>
    </tr>
  );
}

export default EmployeeRow;
import React from "react";
import "./style.css";

function EmployeeRow(props) {
  return (
    <div className="row">
      <div className="col-md-1">
        <img src={props.employee.image} />
      </div>
      <div className="col-md-2">
        <p>{props.employee.name}</p>
      </div>
      <div className="col-md-3">
        <p>{props.employee.phone}</p>
      </div>
      <div className="col-md-4">
        <p>{props.employee.email}</p>
      </div>
      <div className="col-md-2">
        <p>{props.employee.dob}</p>
      </div>
    </div>
  );
}

export default EmployeeRow;
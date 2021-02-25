import React from "react";
import "./style.css";

function labelRow() {
  return (
    <div className="row">
      <div className="col-md-1">
        <p>Image</p>
      </div>
      <div className="col-md-2">
        <p>Name</p>
      </div>
      <div className="col-md-3">
        <p>Phone</p>
      </div>
      <div className="col-md-4">
        <p>Email</p>
      </div>
      <div className="col-md-2">
        <p>DOB</p>
      </div>
    </div>
  );
}

export default labelRow;
import React from "react";
import "./style.css";

function header() {
  return (
    <div className = "row">
      <h1>Employee Directory</h1>
      <p>Click on name, phone, email, or DOB to sort or enter in the search field to filter by name.</p>
    </div>
  );
}

export default header;
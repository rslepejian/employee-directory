import React, {useState} from "react";
import "./style.css";

function Search({handleChange}) {
    const [search, setSearch] = useState("");

    return (
        <div className="row">
            <label htmlFor="employeeSearch" className="form-label">Search Employees</label>
            <input className="form-control"id="employeeSearch" placeholder="Type to search..." onChange={(event) => {
                const newSearch = event.target.value;
                setSearch(newSearch);
                handleChange(newSearch);
            }}/>
        </div>
    );
}

export default Search;
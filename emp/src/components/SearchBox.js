import React from "react";
import "../styles/SearchBox.css";

function SearchBox({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Type name here"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}
export default SearchBox;

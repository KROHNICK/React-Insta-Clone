import React from "react";

function SearchBar(props) {
  return (
    <div className="searchBar">
      <form>
        <input type="text" name="search" placeholder="Search" />
      </form>
    </div>
  );
}

export default SearchBar;

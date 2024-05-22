import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    //set urlparams to search
    const urlParams = new URLSearchParams();
    urlParams.append("search", search);
    window.history.pushState({}, "", `?${urlParams.toString()}`);
    window.dispatchEvent(new Event("urlChange"));
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

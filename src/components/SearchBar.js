import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    search !== "" ? navigate(`?search=${search}`) : navigate("/");
  };
  return (
    <form className="p-6" onSubmit={handleSearch}>
      <input
        className="w-80 h-12 border-2 border-slate-100 rounded-md"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="ml-2 p-2 bg-slate-300 rounded-md shadow-md hover:bg-slate-400 h-12"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

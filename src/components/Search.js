import React from "react";
import "../styles/Search.css";

const Search = (props) => {
  const updateSearch = (e) => {
    props.setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    props.setQuery(props.search);
  };

  return (
    <form onSubmit={getSearch} className="searchForm">
      <input
        className="searchBar"
        type="text"
        value={props.search}
        onChange={updateSearch}
        placeholder="Search by name, ingredient, or diet"
      />
      <button
        className="py-2 px-4 py-2 bg-blue-500 text-white rounded-md rounded-l-none hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

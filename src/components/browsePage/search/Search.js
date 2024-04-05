import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import Backdrop from "../../Backdrop";

const Search = () => {
  return (
    <div className="">
      <Backdrop />
      <div>
        <SearchBar />
        <SearchResult />
      </div>
    </div>
  );
};

export default Search;

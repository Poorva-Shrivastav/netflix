import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const SearchResult = () => {
  const { searchedMovie, searchedMovieName } = useSelector(
    (store) => store.searchMovie
  );

  if (searchedMovieName === null) return;

  return (
    <div className="bg-black mt-10 px-6 opacity-80">
      <h1 className="p-4 text-3xl font-bold text-white">
        Showing result for {searchedMovieName}
      </h1>
      {searchedMovie && (
        <MovieList title={null} moviesData={searchedMovie?.results} />
      )}
    </div>
  );
};

export default SearchResult;

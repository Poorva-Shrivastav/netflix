import React, { useRef } from "react";
import { LANG_CONSTANTS } from "../../../utils/language/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { TMBD_API_OPTIONS } from "../../../utils/constants";
import {
  addSearchedMovie,
  addSearchedMovieName,
} from "../../../utils/redux/slices/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.lang?.lan);
  const inputSearch = useRef(null);

  const fetchMovieData = async (movieName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=falseS&page=1`,
      TMBD_API_OPTIONS
    );
    const jsonData = await response.json();
    dispatch(addSearchedMovie(jsonData));
  };

  const searchHandler = async () => {
    const query = inputSearch.current.value;
    dispatch(addSearchedMovieName(query));
    fetchMovieData(query);
  };

  return (
    <div className="pt-[20%] flex justify-center items-center">
      <form
        className="flex justify-center items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          typeof="text"
          ref={inputSearch}
          placeholder={LANG_CONSTANTS[selectedLanguage].searchPlaceholder}
          className="p-2 rounded-md bg-gray-800 border border-gray-600 bg-opacity-50 text-white text-lg w-96"
        />
        <button
          className="rounded-md ml-2 p-2 bg-red-600 cursor-pointer text-lg text-white hover:opacity-70"
          onClick={searchHandler}
        >
          {LANG_CONSTANTS[selectedLanguage].searchBTN}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

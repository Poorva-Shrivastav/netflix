import React from "react";
import { LANG_CONSTANTS } from "../../../utils/language/languageConstants";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const selectedLanguage = useSelector((store) => store.lang?.lan);

  return (
    <div className="absolute z-10 p-[20%] w-full">
      <form className="flex justify-center items-center">
        <input
          typeof="text"
          placeholder={LANG_CONSTANTS[selectedLanguage].searchPlaceholder}
          className="p-4 w-4/5 rounded-md bg-gray-800 border border-gray-600 bg-opacity-50 text-white text-lg"
        />
        <button className="rounded-md w-1/5 ml-2 p-4 bg-red-600 cursor-pointer text-xl text-white hover:opacity-70">
          {LANG_CONSTANTS[selectedLanguage].searchBTN}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

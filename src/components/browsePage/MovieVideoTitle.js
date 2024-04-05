import React from "react";
import { useSelector } from "react-redux";
import { LANG_CONSTANTS } from "../../utils/language/languageConstants";

const MovieVideoTitle = ({ title, overview }) => {
  const selectedLanguage = useSelector((store) => store.lang?.lan);

  return (
    <div className="w-screen aspect-video px-36 py-48 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl text-white font-extrabold p-6">{title}</h1>
      <p className="p-6 text-md text-white w-2/5">{overview}</p>
      <div className="flex p-4 m-4">
        <button className="bg-white text-black text-lg px-8 py-1 rounded-sm hover:bg-opacity-70">
          ▶️ {LANG_CONSTANTS[selectedLanguage].play}
        </button>
        <button className="bg-gray-700 text-white text-lg px-10 py-1 mx-2 bg-opacity-70 rounded-sm">
          {LANG_CONSTANTS[selectedLanguage].moreOptions}
        </button>
      </div>
    </div>
  );
};

export default MovieVideoTitle;

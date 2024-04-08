import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function SearchedVideoTitle({ title, overview }) {
  const updatedContent = useSelector((store) => store.movies?.trailerContent);

  useEffect(() => {}, [updatedContent]);

  return (
    <div className="w-screen aspect-video px-36 py-48 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl text-white font-extrabold p-6">
        {updatedContent ? updatedContent[0] : title}
      </h1>
      <p className="p-6 text-md text-white w-2/5">
        {updatedContent ? updatedContent[1] : overview}
      </p>
      <div className="flex p-4 m-4">
        <button className="bg-white text-black text-lg px-8 py-1 rounded-sm hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="bg-gray-700 text-white text-lg px-10 py-1 mx-2 bg-opacity-70 rounded-sm">
          More Info
        </button>
      </div>
    </div>
  );
}

export default SearchedVideoTitle;

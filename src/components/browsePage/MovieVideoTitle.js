import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playMovie } from "../../utils/redux/slices/moviesSlice";
import PlayBtn from "./PlayBtn";

const MovieVideoTitle = ({ title, overview }) => {
  const updatedContent = useSelector((store) => store.movies?.trailerContent);

  const play = useSelector((store) => store.movies?.playBtn);
  const dispatch = useDispatch();

  const playHandler = () => {
    dispatch(playMovie(true));
  };

  useEffect(() => {}, [updatedContent]);

  return (
    <div className="w-screen aspect-video px-36 py-48 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl text-white font-extrabold p-6">
        {updatedContent.length > 0 ? updatedContent[0] : title}
      </h1>
      <p className="p-6 text-md text-white w-2/5">
        {updatedContent.length > 0 ? updatedContent[1] : overview}
      </p>
      <div className="flex p-4 m-4">
        <button
          className="bg-white text-black text-lg px-8 py-1 rounded-sm hover:bg-opacity-70"
          onClick={playHandler}
        >
          ▶️ Play
        </button>
        <button
          className="bg-gray-700 text-white text-lg px-10 py-1 mx-2 bg-opacity-70 rounded-sm"
          onClick={playHandler}
        >
          More Info
        </button>
      </div>
      {play && <PlayBtn />}
    </div>
  );
};

export default MovieVideoTitle;

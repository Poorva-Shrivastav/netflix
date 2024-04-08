import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { playMovie } from "../../utils/redux/slices/moviesSlice";

const PlayBtn = () => {
  const dispatch = useDispatch();

  return (
    <div className=" bg-red-700 w-full p-4 m-4 flex justify-between text-white">
      <h1>
        To enjoy the full movie, please login to your Netflix account :
        <Link to="https://www.netflix.com"> https://www.netflix.com</Link>
      </h1>
      <button onClick={() => dispatch(playMovie(false))}>X</button>
    </div>
  );
};

export default PlayBtn;

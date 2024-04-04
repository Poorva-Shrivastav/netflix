import React from "react";
import { TMDB_IMAGE_CDN } from "../../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-40 flex pr-4">
      <img src={TMDB_IMAGE_CDN + poster} alt="movie-img" />
    </div>
  );
};

export default MovieCard;

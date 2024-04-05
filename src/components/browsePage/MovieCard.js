import React from "react";
import { TMDB_IMAGE_CDN } from "../../utils/constants";
import MovieVideoBackground from "./MovieVideoBackground";

const MovieCard = ({ poster, movieId }) => {
  const movieCardHandler = (movieId) => {
    <MovieVideoBackground movieId={movieId} />;
  };
  return (
    <div className="w-40 flex pr-4" onClick={() => movieCardHandler(movieId)}>
      <img src={TMDB_IMAGE_CDN + poster} alt="movie-img" />
    </div>
  );
};

export default MovieCard;

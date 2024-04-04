import React from "react";
import { useSelector } from "react-redux";
import MovieVideoBackground from "./MovieVideoBackground";
import MovieVideoTitle from "./MovieVideoTitle";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <MovieVideoTitle title={original_title} overview={overview} />
      <MovieVideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

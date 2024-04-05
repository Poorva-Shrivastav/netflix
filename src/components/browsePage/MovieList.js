import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesData }) => {
  return (
    <div className="p-4 ">
      <h1 className="p-2 text-xl font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex ">
          {moviesData &&
            moviesData?.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.poster_path}
                movieId={movie.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

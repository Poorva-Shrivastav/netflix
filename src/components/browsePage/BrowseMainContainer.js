import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieVideoBackground from "./MovieVideoBackground";
import MovieVideoTitle from "./MovieVideoTitle";
import { clickedFromSearchPage } from "../../utils/redux/slices/searchSlice";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const isSearch = useSelector((state) => state.searchMovie.showSearchPage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clickedFromSearchPage(false));
  }, []);

  if (!movies) return;
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      {!isSearch && (
        <>
          <MovieVideoTitle title={original_title} overview={overview} />
          <MovieVideoBackground movieId={id} />
        </>
      )}
    </div>
  );
};

export default MainContainer;

import React from "react";
import { TMBD_API_OPTIONS, TMDB_IMAGE_CDN } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addTrailerContent,
  addTrailerVideo,
} from "../../utils/redux/slices/moviesSlice";
import { clickedFromSearchPage } from "../../utils/redux/slices/searchSlice";

const MovieCard = ({ poster, movieId, title, overview }) => {
  const showSearchPage = useSelector(
    (store) => store.searchMovie?.showSearchPage
  );

  const dispatch = useDispatch();

  if (!poster) return null;

  const clickHandler = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      TMBD_API_OPTIONS
    );
    const json = await response.json();

    const filteredData =
      json && json?.results.filter((video) => video.type === "Trailer");

    const trailer = filteredData.length ? filteredData[0] : json.results[0];

    const trailerContentData = [title, overview];

    if (filteredData?.length > 0) {
      dispatch(addTrailerVideo(trailer));
      dispatch(addTrailerContent(trailerContentData));
      showSearchPage && dispatch(clickedFromSearchPage());
    }
  };

  return (
    <div
      className="w-40 flex mr-4  cursor-pointer"
      onClick={() => clickHandler(movieId)}
    >
      <img src={TMDB_IMAGE_CDN + poster} alt="movie-img" />
    </div>
  );
};

export default MovieCard;

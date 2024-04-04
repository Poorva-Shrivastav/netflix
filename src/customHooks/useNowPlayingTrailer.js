import { useEffect } from "react";
import { TMBD_API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/redux/slices/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      TMBD_API_OPTIONS
    );
    const json = await response.json();

    const filteredData =
      json && json?.results.filter((video) => video.type === "Trailer");

    const trailer = filteredData.length ? filteredData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useNowPlayingTrailer;

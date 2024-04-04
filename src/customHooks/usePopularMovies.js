import { useDispatch } from "react-redux";
import { TMBD_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/redux/slices/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      TMBD_API_OPTIONS
    );
    const json = await response.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;

import { useDispatch } from "react-redux";
import { TMBD_API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/redux/slices/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      TMBD_API_OPTIONS
    );
    const json = await response.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;

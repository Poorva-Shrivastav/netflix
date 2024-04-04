import { useDispatch } from "react-redux";
import { TMBD_API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/redux/slices/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      TMBD_API_OPTIONS
    );
    const json = await response.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;

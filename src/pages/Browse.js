import React from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import SecondaryContainer from "../components/browsePage/BrowseSecondaryContainer";
import MainContainer from "../components/browsePage/BrowseMainContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

import React from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import SecondaryContainer from "../components/browsePage/BrowseSecondaryContainer";
import MainContainer from "../components/browsePage/BrowseMainContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

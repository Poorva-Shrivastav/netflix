import React from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import SecondaryContainer from "../components/browsePage/BrowseSecondaryContainer";
import MainContainer from "../components/browsePage/BrowseMainContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import Search from "../components/browsePage/search/Search";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const isSearch = useSelector((state) => state.searchMovie.showSearchPage);

  return (
    <div>
      <Header />
      {isSearch ? (
        <Search />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

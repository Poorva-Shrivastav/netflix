import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import Backdrop from "../../Backdrop";
import { useSelector } from "react-redux";
import MovieVideoTitle from "../MovieVideoTitle";
import SearchedVideoBackground from "./SearchedVideoBackground";
import SearchedVideoTitle from "./SearchedVideoTitle";

const Search = () => {
  const isClickedFromSearchPage = useSelector(
    (store) => store.searchMovie?.isClickedFromSearchPage
  );
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const trailerContent = useSelector((store) => store.movies?.trailerContent);

  return (
    <div className="">
      <Backdrop />
      <div className="absolute z-10 w-full">
        {isClickedFromSearchPage && trailerVideo && trailerContent?.length ? (
          <div>
            HI
            <SearchedVideoTitle
              title={trailerContent[0]}
              overview={trailerContent[1]}
            />
            <SearchedVideoBackground movieId={trailerVideo?.id} />
          </div>
        ) : (
          <>
            <SearchBar />
            <SearchResult />
          </>
        )}
      </div>
    </div>
  );
};

export default Search;

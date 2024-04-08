import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearchPage: false,
    searchedMovie: null,
    searchedMovieName: null,
    isClickedFromSearchPage: false,
  },
  reducers: {
    toggleSearchView: (state) => {
      state.showSearchPage = !state.showSearchPage;
    },
    addSearchedMovie: (state, action) => {
      state.searchedMovie = action.payload;
    },
    addSearchedMovieName: (state, action) => {
      state.searchedMovieName = action.payload;
    },
    clickedFromSearchPage: (state) => {
      state.isClickedFromSearchPage = !state.isClickedFromSearchPage;
    },
  },
});

export const {
  toggleSearchView,
  addSearchedMovie,
  addSearchedMovieName,
  clickedFromSearchPage,
} = searchSlice.actions;
export default searchSlice.reducer;

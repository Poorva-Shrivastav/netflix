import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearchPage: false,
    searchedMovie: null,
    searchedMovieName: null,
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
  },
});

export const { toggleSearchView, addSearchedMovie, addSearchedMovieName } =
  searchSlice.actions;
export default searchSlice.reducer;

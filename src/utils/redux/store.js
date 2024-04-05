import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import searchReducer from "./slices/searchSlice";
import langSlice from "./slices/langSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    searchMovie: searchReducer,
    lang: langSlice,
  },
});

export default store;

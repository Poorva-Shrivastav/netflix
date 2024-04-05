import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearchPage: false,
  },
  reducers: {
    toggleSearchView: (state) => {
      state.showSearchPage = !state.showSearchPage;
    },
  },
});

export const { toggleSearchView } = searchSlice.actions;
export default searchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    lan: "en",
  },

  reducers: {
    changeLanguage: (state, action) => {
      state.lan = action.payload;
    },
  },
});

export const { changeLanguage } = langSlice.actions;
export default langSlice.reducer;

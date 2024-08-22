import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appConfig",
  initialState: {
    language: "en",
  },
  reducers: {
    setGptLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setGptLanguage } = appSlice.actions;
export default appSlice.reducer;

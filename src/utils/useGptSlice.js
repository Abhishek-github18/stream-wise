import { createSlice } from "@reduxjs/toolkit";

const useGptSlice = createSlice({
  name: "useGpt",
  initialState: {
    showGpt: false,
  },
  reducers: {
    setGptView: (state) => {
      state.showGpt = !state.showGpt;
    },
  },
});

export default useGptSlice.reducer;

export const { setGptView } = useGptSlice.actions;
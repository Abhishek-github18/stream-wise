import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState: {
        nowPlayingMovies:null,
        trailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, actions) => {
            state.nowPlayingMovies = actions.payload;
        },
        addTrailerVideo: (state, action)=>{
            state.trailer = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;
import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./userSlice"
import movieSlice from "./movieSlice"
import useGptSlice from "./useGptSlice"
import appSlice from "./appSlice"

export const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: movieSlice,
        useGpt: useGptSlice,
        appConfig:appSlice
    }
})

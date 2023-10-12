import { configureStore } from "@reduxjs/toolkit";
import playSlice from "../features/playSlice";
import setTime from "../features/timerSlice"

export const store = configureStore({
    reducer: {
        play: playSlice,
        changeTime: setTime
    }
})
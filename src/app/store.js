import { configureStore } from "@reduxjs/toolkit";
import setTime from "../features/timer/timerSlice"

export const store = configureStore({
    reducer: {
        changeTime: setTime,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import setTime from "../features/timer/timerSlice"
import setSound from "../features/sounds/soundSlice"

export const store = configureStore({
    reducer: {
        changeTime: setTime,
        changeSound: setSound
    }
})
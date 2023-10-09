import { configureStore } from "@reduxjs/toolkit";
import playSlice from "../features/playSlice";

export const store = configureStore({
    reducer: {
        play: playSlice,
    }
})
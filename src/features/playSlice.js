import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPlaying: false
}

export const playSlice = createSlice({
    name: 'playStatus',
    initialState,
    reducers: {
        click: (state) => {
            state.isPlaying = !state.isPlaying
        },
    },
})

export const { click } = playSlice.actions
export default playSlice.reducer

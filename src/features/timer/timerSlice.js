import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    isPlaying: false,
    time: 0,
    seconds: 0,
    minutes: 0
}

const setTime = createSlice({
    name: "changeTime",
    initialState,
    reducers: {
        timeChanged: (state, action) => {
            state.time = action.payload
            console.log(current(state))
        },
        startTimer: (state) => {
            state.isPlaying = !state.isPlaying
            state.minutes = state.time - 1
            state.seconds = 59
            console.log(current(state))
        },
        decreaseSeconds: (state) => {
            state.seconds = state.seconds - 1
            console.log(state.seconds)
        },
        resetSeconds: (state) => {
            state.seconds = 59
            state.minutes = state.minutes - 1
        },
        stopTimer: (state) => {
            state.isPlaying = false
            state.time = 0
            state.minutes = 0
            state.seconds = 0
        }
    }
})

export const { timeChanged, startTimer, decreaseSeconds, stopTimer, resetSeconds } = setTime.actions
export default setTime.reducer
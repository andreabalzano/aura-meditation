import { createSlice } from '@reduxjs/toolkit'

const initialState = { time: 0 }

const setTime = createSlice({
    name: "changeTime",
    initialState,
    reducers: {
        timeChanged: (state, value) => {
            state.time = value
        }
    }
})

export const { timeChanged } = setTime.actions
export default setTime.reducer
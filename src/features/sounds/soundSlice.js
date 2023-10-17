import { createSlice, createAsyncThunk, current, isActionCreator } from '@reduxjs/toolkit'

const initialState = {
    selected: false,
    id: "0",
    url: "",
    preview: true,
    isPlaying: false
}

const setSound = createSlice({
    name: "changeSound",
    initialState,
    reducers: {
        fetchSound: (state, action) => {
            state.id = action.payload
            console.log(state.id)
        },
        updateUrl: (state, action) => {
            state.url = action.payload
        },
        playStopSound: (state) => {
            state.isPlaying = !state.isPlaying
        },
        clearAll: () => {
            return initialState
        }
    },
})


export const { fetchSound, updateUrl, playStopSound, clearAll } = setSound.actions
export default setSound.reducer
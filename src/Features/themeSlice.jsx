import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: true,
    reducers : {
        toogle: (state) => state = !state
    }
})

export const {toogle} = themeSlice.actions

export default themeSlice.reducer
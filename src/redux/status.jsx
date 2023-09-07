import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    status: false
}



const appMcs = createSlice({
    name: "app",
    initialState,
    reducers: {
        statusApp: (state, action) => {
            console.log(action.payload);
            state.status = action.payload
        }
    }

})

export const { statusApp } = appMcs.actions
export const appMcsReducer = appMcs.reducer
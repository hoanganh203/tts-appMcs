import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    statusMenu: false,
    textStatus: true,
    statusItemMenu: false,
    actitMenu: ""
}



const appMcs = createSlice({
    name: "app",
    initialState,
    reducers: {
        statusApp: (state, action) => {
            state.statusMenu = action.payload
        },
        statusApptext: (state, action) => {
            state.textStatus = action.payload
        }
        ,
        statusAppItemMenu: (state, action) => {
            state.statusItemMenu = action.payload
        },
        actitAppItemMenu: (state, action) => {
            state.actitMenu = action.payload
        }
    }

})

export const { statusApp, statusApptext, statusAppItemMenu, actitAppItemMenu } = appMcs.actions
export const appMcsReducer = appMcs.reducer
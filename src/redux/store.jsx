import { configureStore } from "@reduxjs/toolkit";
import { appMcsReducer } from "./status";


const store = configureStore({
    reducer: {
        appMcs: appMcsReducer
    }
})

export default store;

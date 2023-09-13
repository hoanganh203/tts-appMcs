import { configureStore } from "@reduxjs/toolkit";
import  appMcsSlice  from "./status";


const store = configureStore({
    reducer: {
        appMcs: appMcsSlice
    }
})

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { citiesReducer } from "./citiesSlice";

export default configureStore({
    //contiene lo state che viene diviso in due slice
    reducer: {
        counter: counterReducer,    //reducer specifico che gestisce uno stato
        cities: citiesReducer,
    },
})
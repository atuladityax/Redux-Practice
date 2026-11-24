import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import userReducer from "./userSlice"
import productReducer from "./productSlice"



const store = configureStore( 
    {
        reducer:{
            counter: counterReducer,
            user:userReducer,
            product:productReducer

        }
    }
)

export default store;
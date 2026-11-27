import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import userReducer from "./userSlice"
import productReducer from "./productSlice"
import apiProductReducer from "./apiProductSlice"
import categoryReducer from "./categorySlice"
import postReducer from "./postSlice"



const store = configureStore( 
    {
        reducer:{
            counter: counterReducer,
            user:userReducer,
            product:productReducer,
            apiProduct:apiProductReducer,
            category: categoryReducer,
            post:postReducer
        }
    }
)

export default store;
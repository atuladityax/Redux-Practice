import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import userReducer from "./userSlice"
import productReducer from "./productSlice"
import apiProductReducer from "./apiProductSlice"
import categoryReducer from "./categorySlice"



const store = configureStore( 
    {
        reducer:{
            counter: counterReducer,
            user:userReducer,
            product:productReducer,
            apiProduct:apiProductReducer,
            category: categoryReducer
            

        }
    }
)

export default store;
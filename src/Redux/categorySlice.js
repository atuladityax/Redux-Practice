import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchcategories = createAsyncThunk(
    "categoriesApi/fetchcategories" ,

    async () => {
     const response = await axios.get("https://dummyjson.com/products/categories");
     return response.data;
    }
)

const categorySlice = createSlice(
    {
        name:"category",
        initialState:{
           category :[],
            loading:false,
            error: null,
        },
        reducers:{

        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchcategories.fulfilled, (state,action) => {
                    state.loading = false,
                    state.error = null,
                    state.category = action.payload
                })
                .addCase(fetchcategories.pending , (state) => {
                    state.loading = true,
                    state.error = null

                })
                .addCase(fetchcategories.rejected, (state , action) => {
                    state.loading = false,
                    state.error = action.error.message
                })
        }
    }
)

// const {} = categorySlice.actions;
export default categorySlice.reducer
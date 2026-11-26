import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
    "apiProducts/fetchProducts",
    async () => {
        const response = await axios.get("https://dummyjson.com/products?limit=10");
        return response.data.products;
    }
)

const apiproductSlice = createSlice(
    {
        name:"apiProduct",
        initialState:{
             productsapi: [],
             loading: false,
             error: null
        },
        reducers:{

        },
        extraReducers: (builder) => {
           builder
            .addCase(fetchProducts.pending , (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled , (state , action) => {
                state.loading = false;
                state.productsapi = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected , (state , action) => {
                state.loading = false;
                state.error = action.error.message;
            })
        }
    }
)
// export const {} = apiproductSlice.actions ;
export default apiproductSlice.reducer;
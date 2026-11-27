import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchpost = createAsyncThunk(
    "postlist/fetchpost",

    async (_, { rejectWithValue }) => {
       try {
         const response = await axios.get("https://dummyjson.com/posts?limit=20");
         return response.data.posts;
        
       } catch {
        return rejectWithValue("Failed to fetch posts. Please try again later.")
        
       }
    }
)

const postSlice = createSlice(
    {
        name:"post",
        initialState:{
            post: [],
            error: null,
            loading:false
        },
        reducers:{

        },
        extraReducers: (builder) => { 
            builder
                .addCase(fetchpost.pending, (state) => {
                    state.error = null,
                    state.loading = true
                })
                .addCase(fetchpost.fulfilled, (state , action) => {
                    state.error = null ,
                    state.loading = false,
                    state.post = action.payload
                })
                .addCase(fetchpost.rejected, (state , action) => {
                    state.error = action.payload ?? action.error.message,
                    state.loading= false
                })
        }

    }
)

// export const {} = postSlice.actions;
export default postSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice(
    {
        name:"counter",
        initialState:{
            count : 0
        },
        reducers:{

            increment(state){
                state.count++;
            },
            decrement(state){
                state.count--;
            },
            reset(state){
                state.count =0;
            },
            addnumber: (state, action) => {
                state.count += Number(action.payload);
            }
        }
    }
)

export const { increment , decrement , reset , addnumber } = counterSlice.actions
export default counterSlice.reducer
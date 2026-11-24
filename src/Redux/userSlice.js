import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice(
    {
        name:"user",
        initialState:{
            name: "Atul",
            email: "atul@gamil.com"
        },
        reducers:{

            updateName(state, action ){
                state.name = action.payload
            }

        }
    }
)
export const { updateName } = userSlice.actions
export default userSlice.reducer
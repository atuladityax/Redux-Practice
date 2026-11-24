import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice(
    {
        name: "product",
        initialState:{
            products: [
                {
                    id:23,
                    name:"Phonix"
                },
                {
                    id:25,
                    name:"Iphone"
                },
                {
                    id:26,
                    name:"Macbook"
                }
            ]
        },
        reducers:{
            addProduct(state,action) {
                state.products.push(action.payload)
            },
            removeProduct(state, action){
                state.products = state.products.filter(
                    (item) => item.id !== action.payload
                )

            },
            updateProduct(state, action) {
                const product = state.products.find((item) => {
                    product.name = action.payload.name;
                });
            }
        }
    }
)

export const { addProduct , removeProduct ,searchProduct} = productSlice.actions
export default productSlice.reducer
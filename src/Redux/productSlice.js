import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice(
    {
        name: "product",
        initialState:{
            products: [
                  { id: 1, name: "iPhone" },
                  { id: 2, name: "Laptop" },
                  { id: 3, name: "Keyboard" }
            ]
        },
        reducers:{
            addProduct(state, action) {
                const exists = state.products.some((item) => {
                    return item.id === action.payload.id;
                 });

                if (!exists) {
                    state.products.push(action.payload);
                 }
            },
            removeProduct(state, action){
                state.products = state.products.filter(
                    (item) => item.id !== action.payload
                )
            },
            updateProduct(state, action) {
                const product = state.products.find((item) => {
                    return item.id === action.payload.id;
                });
                if (product) {
                    product.name = action.payload.name;
                }
            }
        }
    }
)

export const { addProduct , removeProduct ,searchProduct , updateProduct} = productSlice.actions
export default productSlice.reducer
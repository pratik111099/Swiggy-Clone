import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItem: [],
    },
    reducers: {
        addData: (state, action) => {
            state.cartItem.push(action.payload);
        },

        clearCart: (state) => {
            state.cartItem = [];
        },
    },
});

export const { addData, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

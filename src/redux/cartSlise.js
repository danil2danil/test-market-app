import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        addItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemInCart: (state, action)=>{
            state.itemsInCart = state.itemsInCart.filter(item=> item.id !== action.payload.id)
        }
    }
});


export const { addItemInCart, deleteItemInCart } = cartSlice.actions;
export default cartSlice.reducer;
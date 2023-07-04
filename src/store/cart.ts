import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItem from "../models/cart";

interface cartState {
    cartItems:CartItem[],
    totalQuantity:number
}


const initialCartState:cartState = {
    cartItems:[],
    totalQuantity:0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        addToCart(state,action:PayloadAction<{item:CartItem}>){
            const newItem = action.payload.item;
            const exsitingItem =  state.cartItems.find((item)=>item.id === newItem.id);
            console.warn("newItem",newItem);
            if(exsitingItem){
                console.warn("exsitingItem",exsitingItem)
                exsitingItem.amount ++;
                exsitingItem.totalPrice = exsitingItem.amount * exsitingItem.price;

            }else{
                state.cartItems.push(newItem);
            }
            state.totalQuantity ++;
        }
    }
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
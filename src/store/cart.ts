import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItem from "../models/cart";

export interface cartState {
    cartItems:CartItem[],
    totalQuantity:number,
    isCartChanged:boolean,
    subTotal:number
}


const initialCartState:cartState = {
    cartItems:[],
    totalQuantity:0,
    subTotal:0,
    isCartChanged:false
}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        addToCart(state,action:PayloadAction<{item:CartItem}>){
            const newItem = action.payload.item;
            const exsitingItem =  state.cartItems.find((item)=>item.id === newItem.id);
            if(exsitingItem){
                exsitingItem.amount ++;
                exsitingItem.totalPrice = exsitingItem.amount * exsitingItem.price;

            }else{
                state.cartItems.push(newItem);
            }
            state.totalQuantity ++;
            state.isCartChanged=true;
            state.subTotal = state.cartItems.map((item) => item.totalPrice).reduce(((total, num) => total + num), 0);
        },
        removeFromCart(state,action:PayloadAction<{id:string}>){
            const itemId = action.payload.id;
            const exsitingItem = state.cartItems.find((item)=>item.id === itemId);
            if(!exsitingItem){
                return
            }
            if(exsitingItem.amount === 1){
                state.cartItems = state.cartItems.filter(item => item.id !== itemId);

            }else{
                exsitingItem.amount --;
                exsitingItem.totalPrice = exsitingItem.totalPrice - exsitingItem.price;
            }
            state.totalQuantity --;
            state.isCartChanged=true;
            state.subTotal = state.cartItems.map((item) => item.totalPrice).reduce(((total, num) => total + num), 0);

        },
        replaceCart(state,action:PayloadAction<{cart:cartState}>){
            state.cartItems = action.payload.cart.cartItems;
            state.totalQuantity = action.payload.cart.totalQuantity;
            state.subTotal = state.cartItems.map((item) => item.totalPrice).reduce(((total, num) => total + num), 0);

        },
        
    }
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
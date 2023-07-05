import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import CartItem from "../models/cart";

export interface cartState {
    cartItems:CartItem[],
    totalQuantity:number,
    deliveryType:string|number,
    isCartChanged:boolean
}


const initialCartState:cartState = {
    cartItems:[],
    totalQuantity:0,
    deliveryType:'delivery',
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
        },
        setDeliveryType(state,action:PayloadAction<{type:string|number}>){
            state.deliveryType = action.payload.type;
            state.isCartChanged=true;
        }
    }
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
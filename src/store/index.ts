import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartReducer from "./cart";
import checkoutReducer from "./checkout";

const store = configureStore({
    reducer:{
        cart:cartReducer,
        checkout:checkoutReducer
    }
});

export default store;

export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector; 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DeliveryData from "../models/checkout";

interface checkoutState {
    checkoutData:DeliveryData|null,
    deliveyDataFilled:boolean,
    paymentMethod:string|null
}

const initialCheckoutState:checkoutState = {
    checkoutData:null,
    deliveyDataFilled:false,
    paymentMethod:null
}

const checkoutSlice = createSlice({
    name:'checkout',
    initialState:initialCheckoutState,
    reducers:{
        addCheckoutData(state,action:PayloadAction<{checkoutData:DeliveryData}>){
            state.checkoutData = action.payload.checkoutData;
            state.deliveyDataFilled = true;
        },
        adPaymentDetails(state,action:PayloadAction<{type:string}>){
            state.paymentMethod = action.payload.type;
        }
    }
});

export default checkoutSlice.reducer;

export const checkoutActions = checkoutSlice.actions;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DeliveryData,{BillData} from "../models/checkout";

interface checkoutState {
    checkoutData:DeliveryData|null,
    deliveyType:string|number|null,
    paymentMethod:string|null,
    billData:BillData|null
}

const initialCheckoutState:checkoutState = {
    checkoutData:null,
    deliveyType:null,
    paymentMethod:null,
    billData:null
}

const checkoutSlice = createSlice({
    name:'checkout',
    initialState:initialCheckoutState,
    reducers:{
        addCheckoutData(state,action:PayloadAction<{checkoutData:DeliveryData}>){
            state.checkoutData = action.payload.checkoutData;
        },
        addPaymentDetails(state,action:PayloadAction<{type:string}>){
            state.paymentMethod = action.payload.type;
        },        
        addBillData(state,action:PayloadAction<{bill:BillData,type:string|number}>){
            const {subTotal,deliveryFee,couponAmount,totalToPay} = action.payload.bill;
            state.billData = {
                subTotal:subTotal,
                deliveryFee:deliveryFee,
                couponAmount:couponAmount,
                totalToPay:totalToPay,
            }
            state.deliveyType = action.payload.type;
        }
    }
});

export default checkoutSlice.reducer;

export const checkoutActions = checkoutSlice.actions;
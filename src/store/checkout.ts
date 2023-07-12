import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DeliveryData,{BillData} from "../models/checkout";

interface checkoutState {
    checkoutData:DeliveryData|null,
    deliveryType:string|number|null,
    paymentMethod:string|null,
    billData:BillData|null,
    orderCompleted:boolean
}

const initialCheckoutState:checkoutState = {
    checkoutData:null,
    deliveryType:'delivery',
    paymentMethod:null,
    billData:null,
    orderCompleted:false
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
        addBillData(state,action:PayloadAction<{bill:BillData}>){
            const {subTotal,deliveryFee,couponAmount,totalToPay} = action.payload.bill;
            state.billData = {
                subTotal:subTotal,
                deliveryFee:deliveryFee,
                couponAmount:couponAmount,
                totalToPay:totalToPay,
            }
        },
        setDeliveryType(state,action:PayloadAction<{type:string|number}>){
            state.deliveryType = action.payload.type;
        },
        setOrderCompleted(state){
            state.orderCompleted = true;
        }
    }
});

export default checkoutSlice.reducer;

export const checkoutActions = checkoutSlice.actions;
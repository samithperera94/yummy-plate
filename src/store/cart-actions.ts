import cart, { cartActions } from "./cart";
import {cartState} from "./cart";
import { ThunkDispatch,Dispatch,AnyAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://react-http-d7746-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json';



export const sendCartData = (cart:cartState) => {
    return async () => {
        const sendRequest = async() => {
            

            const sendData = {
                items:cart.cartItems,
                totalQuantity:cart.totalQuantity,
                deliveryType:cart.deliveryType
            }
            axios.put(baseUrl,sendData).then((response)=>{
                console.log(response.data);
            }).catch((error)=>{
                throw new Error("Sending Cart Data Failed!")
            });

        }

        try{
            await sendRequest()
        }catch(error){
            console.error(error);
        }
    }
}

export const getCartData = ()=> {

    return async(dispatch:ThunkDispatch<{
        cart: cartState;
    }, undefined, AnyAction> & Dispatch<AnyAction>)=>{
        const getData = async() => {            

            axios.get(baseUrl).then(response => {
                const cartData = response.data;
                const cart:cartState = {
                    cartItems:cartData.items,
                    totalQuantity:cartData.totalQuantity,
                    deliveryType:cartData.deliveryType,
                    isCartChanged:false
                }

                dispatch(cartActions.replaceCart({cart}))

            }).catch((error)=>{
                throw new Error("data retriving failed!");
            })
        }

        try{
            await getData();
            
        }catch(error){
            console.error(error)
        }
    }   


}
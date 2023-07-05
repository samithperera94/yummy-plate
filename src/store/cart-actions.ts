import cart, { cartActions } from "./cart";
import {cartState} from "./cart";
import { ThunkDispatch,Dispatch,AnyAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://react-http-d7746-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json';



export const sendCartData = (cart:cartState) => {
    return async () => {
        const sendRequest = async() => {
            // const response =  await fetch('https://react-http-d7746-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',{
            //     method:'PUT',
            //     body:JSON.stringify({
            //         items:cart.cartItems,
            //         totalQuantity:cart.totalQuantity,
            //         deliveryType:cart.cartItems
            //     })
            // });

            const sendData = {
                items:cart.cartItems,
                totalQuantity:cart.totalQuantity,
                deliveryType:cart.cartItems
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
            // const response = await fetch('https://react-http-d7746-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
    
            // if(!response.ok){
            //     throw new Error("data retriening failed!");
            // }
            
            // const data = await response.json();
            // return data

            axios.get(baseUrl).then(response => {
                console.log("response.data !!!!",response.data);
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
            // const cartData = await getData();
            // console.log("cartData !!!!",cartData);
            // const cart:cartState = {
            //     cartItems:cartData.items,
            //     totalQuantity:cartData.totalQuantity,
            //     deliveryType:cartData.deliveryType,
            //     isCartChanged:false
            // }
            // dispatch(cartActions.replaceCart({cart}))
        }catch(error){
            console.error(error)
        }
    }   


}
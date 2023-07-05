import cart, { cartActions } from "./cart";
import {cartState} from "./cart";
import { ThunkDispatch,Dispatch,AnyAction } from "@reduxjs/toolkit";



export const sendCartData = (cart:cartState) => {
    return async () => {
        const sendRequest = async() => {
            const response =  await fetch('https://react-http-d7746-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',{
                method:'PUT',
                body:JSON.stringify({
                    items:cart.cartItems,
                    totalQuantity:cart.totalQuantity,
                    deliveryType:cart.cartItems
                })
            });

            if(!response.ok){
                throw new Error("Sending Cart Data Failed!")
            }

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
            const response = await fetch('https://react-http-d7746-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
    
            if(!response.ok){
                throw new Error("data retriening failed!");
            }
            
            const data = await response.json();
            return data
        }

        try{
            const cartData = await getData();
            // console.log("cartData",cartData);
            const cart:cartState = {
                cartItems:cartData.items,
                totalQuantity:cartData.totalQuantity,
                deliveryType:cartData.deliveryType,
                isCartChanged:false
            }
            dispatch(cartActions.replaceCart({cart}))
        }catch(error){
            
        }
    }   


}
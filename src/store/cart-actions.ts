import { cartActions } from "./cart";
import {cartState} from "./cart";



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
import React, { useEffect } from 'react';
import DeliveryDetails from '../components/Checkout/DeliveryDetails';
import PaymentMethod from '../components/Checkout/PaymentMethod';
import Card from '../components/UI/Card';
import classes from "./CheckoutPage.module.scss";
import SuccessPage from "../components/Checkout/SuccessPage";
import { useAppDispatch, useAppSelector } from '../store';
import { checkoutActions } from '../store/checkout';


const CheckoutPage = () => {

    const cartState = useAppSelector(state => state.cart);

    const totalPrice = cartState.cartItems.map((item) => item.totalPrice).reduce(((total, num) => total + num), 0);
    const deliveryType = cartState.deliveryType;
    const deliveryFee: number = deliveryType === "delivery" ? 200 : 0
    const totalToPay: number = totalPrice + deliveryFee;

    const dispatch = useAppDispatch();

    useEffect(() => {
        //need to check this : populate one slice with other's data

        const bill = {
            subTotal: totalPrice,
            deliveryFee: deliveryFee,
            couponAmount: 0,
            totalToPay: totalToPay,
        }


        dispatch(checkoutActions.addBillData({ bill: bill, type: deliveryType }))
    }, [cartState, dispatch])



    return (
        <>
            <div>CheckoutPage</div>

            <Card>
                <div className={classes.mainSection}>
                    {/* <DeliveryDetails /> */}
                    <PaymentMethod />
                    {/* <SuccessPage /> */}
                </div>
            </Card>

        </>

    )
}

export default CheckoutPage
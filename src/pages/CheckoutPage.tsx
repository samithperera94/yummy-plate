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
    const checkoutState = useAppSelector(state => state.checkout);

    const deliveryType = checkoutState.deliveryType;
    const deliveryFee: number = deliveryType === "delivery" ? 200 : 0
    const totalToPay: number = cartState.subTotal + deliveryFee;

    const dispatch = useAppDispatch();

    useEffect(() => {
        //need to check this : populate one slice with other's data

        console.log("adding bill data initial =-------=")
        const bill = {
            subTotal: cartState.subTotal,
            deliveryFee: deliveryFee,
            couponAmount: 0,
            totalToPay: totalToPay,
        }


        dispatch(checkoutActions.addBillData({ bill }))
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
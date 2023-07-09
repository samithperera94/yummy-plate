import React from 'react';
import DeliveryDetails from '../components/Checkout/DeliveryDetails';
import PaymentMethod from '../components/Checkout/PaymentMethod';
import Card from '../components/UI/Card';
import classes from "./CheckoutPage.module.scss";
import SuccessPage from "../components/Checkout/SuccessPage";

const CheckoutPage = () => {
    return (
        <>
            <div>CheckoutPage</div>

            <Card>
                <div className={classes.mainSection}>
                    {/* <DeliveryDetails /> */}
                    {/* <PaymentMethod /> */}
                    <SuccessPage />
                </div>
            </Card>

        </>

    )
}

export default CheckoutPage
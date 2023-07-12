import React from 'react';
import classes from "./SuccessPage.module.scss";
import Button from '../UI/Button';
import BillItem from "./BillItem";
import { useAppSelector } from '../../store';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
    const cartItems = useAppSelector(state => state.cart.cartItems);
    const checkoutState = useAppSelector(state => state.checkout);

    const printHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }


    return (
        <div className={classes.success}>
            <h3 className={classes.title}>DeliveryDetails</h3>
            <form className={classes.form}>
                <div className={classes.bill}>
                    <div className={classes.billItems}>
                        <span className={classes.title}>Bill Items</span>
                        <ul className={classes.items}>
                            {
                                cartItems.map(item => {
                                    return <BillItem key={item.id} title={`${item.name}  x ${item.id}`} amount={item.totalPrice} />

                                })
                            }
                        </ul>
                    </div>
                    <div className={classes.summary}>
                        <BillItem title={`Sub Total`}
                            amount={checkoutState.billData ? checkoutState.billData.subTotal : 0} />
                        <BillItem title={`Delivery Fee`}
                            amount={checkoutState.billData ? checkoutState.billData.deliveryFee : 0} />
                        <BillItem title={`Coupon Applied`}
                            amount={checkoutState.billData ? checkoutState.billData.couponAmount : 0} />
                        <BillItem title={`Total To Pay`}
                            amount={checkoutState.billData ? checkoutState.billData.totalToPay : 0} />
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button onClick={printHandler}>Print Bill</Button>
                    <Link className={classes.navLink} to="/">Back to HomePage</Link>
                </div>
            </form>
        </div>
    )
}

export default SuccessPage
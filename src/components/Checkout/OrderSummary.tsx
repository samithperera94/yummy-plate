import React from 'react';
import Button from '../UI/Button';
import classes from "./OrderSummary.module.scss";

const OrderSummary = () => {
    return (
        <div className={classes.summary}>
            <div className={classes.item}>
                <span className={classes.title}>Sub Total</span>
                <span className={classes.value}>: 1200</span>
            </div>
            <div className={classes.item}>
                <span className={classes.title}>Delivery Fee</span>
                <span className={classes.value}>: 200</span>
            </div>
            <div className={classes.item}>
                <span className={classes.title}>Total to Pay</span>
                <span className={classes.value}>: 1400</span>
            </div>
            <div className={classes.coupon}>
                <input className={classes.input} type="text" name="coupon" placeholder='coupon..' />
                <Button>
                    Apply Coupon
                </Button>
            </div>
        </div>
    )
}

export default OrderSummary
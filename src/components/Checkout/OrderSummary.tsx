import React, { useRef, useState } from 'react';
import Button from '../UI/Button';
import classes from "./OrderSummary.module.scss";
import { useAppSelector, useAppDispatch } from '../../store';
import { checkoutActions } from '../../store/checkout';

const OrderSummary = () => {
    const checkoutState = useAppSelector(state => state.checkout);
    const totalPrice = checkoutState.billData?.subTotal ? checkoutState.billData?.subTotal : 0;
    const deliveryType = checkoutState.deliveyType ? checkoutState.deliveyType : '';
    const deliveryFee = checkoutState.billData?.deliveryFee ? checkoutState.billData?.deliveryFee : 0;
    const totalToPay: number = totalPrice + deliveryFee;

    const couponInputRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    const [validationError, setValidationError] = useState<boolean>(false)

    const applyCouponHandler = () => {
        const couponValue = couponInputRef.current?.value;


        if (couponValue !== undefined && couponValue?.trim().length < 6) {
            setValidationError(true);
            return
        }
        const bill = {
            subTotal: totalPrice,
            deliveryFee: deliveryFee,
            couponAmount: 200, // setting up static value for now
            totalToPay: totalToPay,
        }
        dispatch(checkoutActions.addBillData({ bill: bill, type: deliveryType }))
    }
    return (
        <div className={classes.summary}>
            <div className={classes.item}>
                <span className={classes.title}>Sub Total</span>
                <span className={classes.value}>: {totalPrice}</span>
            </div>
            {
                deliveryType === 'delivery' &&
                <div className={classes.item}>
                    <span className={classes.title}>Delivery Fee</span>
                    <span className={classes.value}>: {deliveryFee}</span>
                </div>
            }

            <div className={classes.item}>
                <span className={classes.title}>Total to Pay</span>
                <span className={classes.value}>: {totalToPay}</span>
            </div>
            <div className={classes.coupon}>
                <input className={classes.input}
                    ref={couponInputRef}
                    type="text"
                    name="coupon"
                    placeholder='coupon..' />
                {validationError && <span className={classes.errorText}>Please insert a valid coupon </span>}
                <Button onClick={applyCouponHandler}>
                    Apply Coupon
                </Button>
            </div>
        </div>
    )
}

export default OrderSummary
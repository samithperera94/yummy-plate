import React, { useRef, useState } from 'react';
import Button from '../UI/Button';
import classes from "./OrderSummary.module.scss";
import { useAppSelector, useAppDispatch } from '../../store';
import { checkoutActions } from '../../store/checkout';

const OrderSummary = () => {
    const checkoutState = useAppSelector(state => state.checkout);
    const totalPrice = checkoutState.billData?.subTotal ? checkoutState.billData?.subTotal : 0;
    const deliveryType = checkoutState.deliveryType ? checkoutState.deliveryType : '';
    const deliveryFee = checkoutState.billData?.deliveryFee ? checkoutState.billData?.deliveryFee : 0;
    const totalToPay: number = totalPrice + deliveryFee;


    const couponInputRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    const [validationError, setValidationError] = useState<boolean>(false);
    const [couponValue, setCouponValue] = useState<number | null>(null);

    const applyCouponHandler = () => {
        const couponValue = couponInputRef.current?.value;


        if (couponValue !== undefined && couponValue?.trim().length < 6) {
            setValidationError(true);
            return
        }
        setCouponValue(200);
        const bill = {
            subTotal: totalPrice,
            deliveryFee: deliveryFee,
            couponAmount: 300, // setting up static value for now
            totalToPay: totalToPay - 300,
        }
        dispatch(checkoutActions.addBillData({ bill }))
    }
    return (
        <div className={classes.summary}>
            {checkoutState.orderCompleted &&
                <div className={classes.completed}>
                    Congratulations !
                    <span>You have made the order successfully</span>
                </div>
            }
            <div className={checkoutState.orderCompleted ? classes.hideSummary : undefined}>
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

                {couponValue !== null && <div className={classes.item}>
                    <span className={classes.title}>Coupon</span>
                    <span className={classes.value}>: {200}</span>
                </div>}

                <div className={classes.item}>
                    <span className={classes.title}>Total to Pay</span>
                    <span className={classes.value}>: {checkoutState.billData?.totalToPay}</span>
                </div>
                {couponValue === null && <div className={classes.coupon}>
                    <input className={classes.input}
                        ref={couponInputRef}
                        type="text"
                        name="coupon"
                        placeholder='coupon..' />
                    {validationError && <span className={classes.errorText}>Please insert a valid coupon </span>}
                    <Button onClick={applyCouponHandler}>
                        Apply Coupon
                    </Button>
                </div>}
            </div>

        </div>
    )
}

export default OrderSummary
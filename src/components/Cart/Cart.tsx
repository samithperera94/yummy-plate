import React from 'react';
import Card from '../UI/Card';
import CartIcon from './CartIcon';
import classes from "./Cart.module.scss";
import Button from '../UI/Button';
import CartItem from '../../models/cart';
import CartProductItem from "./CartItem";
import { useAppSelector } from '../../store';

const DummyCartData = [
    new CartItem("1", "fish bun", 80, 2, 160),
    new CartItem("2", "tea bun", 50, 2, 100),
    new CartItem("3", "egg bun", 80, 2, 160)
]

const EmptyCart = () => {
    return (
        <div className={classes.empty}>
            <div className={classes.icon}>
                <CartIcon />
            </div>
            <div className={classes.message}>
                Cart is empty. Add menu Items.
            </div>
        </div>
    )
}

const Cart = () => {
    const cartItems = useAppSelector(state => state.cart.cartItems);
    const isDisabled = cartItems.length === 0 ? true : false;
    console.warn("cartItems", cartItems);
    return (
        <Card className='cartCard'>
            <h3 className={classes.title}>Your Order</h3>
            {cartItems.length === 0 && <EmptyCart />}
            {cartItems && <ul className={classes.cartItems}>

                {cartItems.map((item) => {
                    return <CartProductItem cartData={item} />
                })}
            </ul>}

            {cartItems.length !== 0 && <div className={classes.totalAmount}>
                <h4 className={classes.label}>Total Amount</h4>
                <span className={classes.total}>200</span>
            </div>}

            <Button disabled={isDisabled} className='cartBtn'>Go To Checkout</Button>

        </Card>

    )
}

export default Cart
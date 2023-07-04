import React from 'react';
import classes from "./CartItem.module.scss";
import CartItem from '../../models/cart';
import { useAppDispatch } from '../../store';
import { cartActions } from '../../store/cart';

const CartProductItem: React.FC<{ cartData: CartItem }> = (props) => {
    const { id, name, price, totalPrice, amount } = props.cartData;

    const dispatch = useAppDispatch();

    const addItemHandler = () => {
        const item = props.cartData
        dispatch(cartActions.addToCart({ item }))
    }

    const removeItemHandler = () => {
        dispatch(cartActions.removeFromCart({ id: id }));
    }

    return (
        <li className={classes.cartItem} key={id}>
            <div className={classes.details}>
                <h3 className={classes.title}>{name}</h3>
                <div className={classes.summary}>
                    <div>
                        <span className={classes.amount}>{price}</span>
                        <span className={classes.amount}>x {amount}</span>
                    </div>
                    <span className={classes.price}>{totalPrice}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={removeItemHandler}>-</button>
                <button onClick={addItemHandler}>+</button>
            </div>
        </li>
    )
}

export default CartProductItem;